!function () {
  var e = {
    135: function (e, t, n) {
      var r;
      e = n.nmd(e);
      var a = function (e) {
        'use strict';
        var t = 10000000,
        n = 9007199254740992,
        r = p(n),
        i = '0123456789abcdefghijklmnopqrstuvwxyz',
        o = 'function' == typeof BigInt;
        function l(e, t, n, r) {
          return void 0 === e ? l[0] : void 0 !== t &&
          (10 != + t || n) ? B(e, t, n, r) : K(e)
        }
        function c(e, t) {
          this.value = e,
          this.sign = t,
          this.isSmall = !1
        }
        function u(e) {
          this.value = e,
          this.sign = e < 0,
          this.isSmall = !0
        }
        function s(e) {
          this.value = e
        }
        function d(e) {
          return - n < e &&
          e < n
        }
        function p(e) {
          return e < 10000000 ? [
            e
          ] : e < 100000000000000 ? [
            e % 10000000,
            Math.floor(e / 10000000)
          ] : [
            e % 10000000,
            Math.floor(e / 10000000) % 10000000,
            Math.floor(e / 100000000000000)
          ]
        }
        function h(e) {
          f(e);
          var n = e.length;
          if (n < 4 && w(e, r) < 0) switch (n) {
            case 0:
              return 0;
            case 1:
              return e[0];
            case 2:
              return e[0] + e[1] * t;
            default:
              return e[0] + (e[1] + e[2] * t) * t
          }
          return e
        }
        function f(e) {
          for (var t = e.length; 0 === e[--t]; );
          e.length = t + 1
        }
        function v(e) {
          for (var t = new Array(e), n = - 1; ++n < e; ) t[n] = 0;
          return t
        }
        function m(e) {
          return e > 0 ? Math.floor(e) : Math.ceil(e)
        }
        function y(e, n) {
          var r,
          a,
          i = e.length,
          o = n.length,
          l = new Array(i),
          c = 0,
          u = t;
          for (a = 0; a < o; a++) c = (r = e[a] + n[a] + c) >= u ? 1 : 0,
          l[a] = r - c * u;
          for (; a < i; ) c = (r = e[a] + c) === u ? 1 : 0,
          l[a++] = r - c * u;
          return c > 0 &&
          l.push(c),
          l
        }
        function E(e, t) {
          return e.length >= t.length ? y(e, t) : y(t, e)
        }
        function g(e, n) {
          var r,
          a,
          i = e.length,
          o = new Array(i),
          l = t;
          for (a = 0; a < i; a++) r = e[a] - l + n,
          n = Math.floor(r / l),
          o[a] = r - n * l,
          n += 1;
          for (; n > 0; ) o[a++] = n % l,
          n = Math.floor(n / l);
          return o
        }
        function C(e, n) {
          var r,
          a,
          i = e.length,
          o = n.length,
          l = new Array(i),
          c = 0,
          u = t;
          for (r = 0; r < o; r++) (a = e[r] - c - n[r]) < 0 ? (a += u, c = 1) : c = 0,
          l[r] = a;
          for (r = o; r < i; r++) {
            if (!((a = e[r] - c) < 0)) {
              l[r++] = a;
              break
            }
            a += u,
            l[r] = a
          }
          for (; r < i; r++) l[r] = e[r];
          return f(l),
          l
        }
        function b(e, n, r) {
          var a,
          i,
          o = e.length,
          l = new Array(o),
          s = - n,
          d = t;
          for (a = 0; a < o; a++) i = e[a] + s,
          s = Math.floor(i / d),
          i %= d,
          l[a] = i < 0 ? i + d : i;
          return 'number' == typeof (l = h(l)) ? (r && (l = - l), new u(l)) : new c(l, r)
        }
        function I(e, n) {
          var r,
          a,
          i,
          o,
          l = e.length,
          c = n.length,
          u = v(l + c),
          s = t;
          for (i = 0; i < l; ++i) {
            o = e[i];
            for (var d = 0; d < c; ++d) r = o * n[d] + u[i + d],
            a = Math.floor(r / s),
            u[i + d] = r - a * s,
            u[i + d + 1] += a
          }
          return f(u),
          u
        }
        function T(e, n) {
          var r,
          a,
          i = e.length,
          o = new Array(i),
          l = t,
          c = 0;
          for (a = 0; a < i; a++) r = e[a] * n + c,
          c = Math.floor(r / l),
          o[a] = r - c * l;
          for (; c > 0; ) o[a++] = c % l,
          c = Math.floor(c / l);
          return o
        }
        function S(e, t) {
          for (var n = []; t-- > 0; ) n.push(0);
          return n.concat(e)
        }
        function _(e, t) {
          var n = Math.max(e.length, t.length);
          if (n <= 30) return I(e, t);
          n = Math.ceil(n / 2);
          var r = e.slice(n),
          a = e.slice(0, n),
          i = t.slice(n),
          o = t.slice(0, n),
          l = _(a, o),
          c = _(r, i),
          u = _(E(a, r), E(o, i)),
          s = E(E(l, S(C(C(u, l), c), n)), S(c, 2 * n));
          return f(s),
          s
        }
        function A(e, n, r) {
          return new c(e < t ? T(n, e) : I(n, p(e)), r)
        }
        function N(e) {
          var n,
          r,
          a,
          i,
          o = e.length,
          l = v(o + o),
          c = t;
          for (a = 0; a < o; a++) {
            r = 0 - (i = e[a]) * i;
            for (var u = a; u < o; u++) n = i * e[u] * 2 + l[a + u] + r,
            r = Math.floor(n / c),
            l[a + u] = n - r * c;
            l[a + o] = r
          }
          return f(l),
          l
        }
        function L(e, t) {
          var n,
          r,
          a,
          i,
          o = e.length,
          l = v(o);
          for (a = 0, n = o - 1; n >= 0; --n) a = (i = 10000000 * a + e[n]) - (r = m(i / t)) * t,
          l[n] = 0 | r;
          return [l,
          0 | a]
        }
        function D(e, n) {
          var r,
          a = K(n);
          if (o) return [new s(e.value / a.value),
          new s(e.value % a.value)];
          var i,
          d = e.value,
          y = a.value;
          if (0 === y) throw new Error('Cannot divide by zero');
          if (e.isSmall) return a.isSmall ? [
            new u(m(d / y)),
            new u(d % y)
          ] : [
            l[0],
            e
          ];
          if (a.isSmall) {
            if (1 === y) return [e,
            l[0]];
            if ( - 1 == y) return [e.negate(),
            l[0]];
            var E = Math.abs(y);
            if (E < t) {
              i = h((r = L(d, E)) [0]);
              var g = r[1];
              return e.sign &&
              (g = - g),
              'number' == typeof i ? (e.sign !== a.sign && (i = - i), [
                new u(i),
                new u(g)
              ]) : [
                new c(i, e.sign !== a.sign),
                new u(g)
              ]
            }
            y = p(E)
          }
          var b = w(d, y);
          if ( - 1 === b) return [l[0],
          e];
          if (0 === b) return [l[e.sign === a.sign ? 1 : - 1],
          l[0]];
          i = (
            r = d.length + y.length <= 200 ? function (e, n) {
              var r,
              a,
              i,
              o,
              l,
              c,
              u,
              s = e.length,
              d = n.length,
              p = t,
              f = v(n.length),
              m = n[d - 1],
              y = Math.ceil(p / (2 * m)),
              E = T(e, y),
              g = T(n, y);
              for (E.length <= s && E.push(0), g.push(0), m = g[d - 1], a = s - d; a >= 0; a--) {
                for (
                  r = p - 1,
                  E[a + d] !== m &&
                  (r = Math.floor((E[a + d] * p + E[a + d - 1]) / m)),
                  i = 0,
                  o = 0,
                  c = g.length,
                  l = 0;
                  l < c;
                  l++
                ) i += r * g[l],
                u = Math.floor(i / p),
                o += E[a + l] - (i - u * p),
                i = u,
                o < 0 ? (E[a + l] = o + p, o = - 1) : (E[a + l] = o, o = 0);
                for (; 0 !== o; ) {
                  for (r -= 1, i = 0, l = 0; l < c; l++) (i += E[a + l] - p + g[l]) < 0 ? (E[a + l] = i + p, i = 0) : (E[a + l] = i, i = 1);
                  o += i
                }
                f[a] = r
              }
              return E = L(E, y) [0],
              [
                h(f),
                h(E)
              ]
            }(d, y) : function (e, n) {
              for (var r, a, i, o, l, c = e.length, u = n.length, s = [], d = [], p = t; c; ) if (d.unshift(e[--c]), f(d), w(d, n) < 0) s.push(0);
               else {
                i = d[(a = d.length) - 1] * p + d[a - 2],
                o = n[u - 1] * p + n[u - 2],
                a > u &&
                (i = (i + 1) * p),
                r = Math.ceil(i / o);
                do {
                  if (w(l = T(n, r), d) <= 0) break;
                  r--
                } while (r);
                s.push(r),
                d = C(d, l)
              }
              return s.reverse(),
              [
                h(s),
                h(d)
              ]
            }(d, y)
          ) [0];
          var I = e.sign !== a.sign,
          S = r[1],
          _ = e.sign;
          return 'number' == typeof i ? (I && (i = - i), i = new u(i)) : i = new c(i, I),
          'number' == typeof S ? (_ && (S = - S), S = new u(S)) : S = new c(S, _),
          [
            i,
            S
          ]
        }
        function w(e, t) {
          if (e.length !== t.length) return e.length > t.length ? 1 : - 1;
          for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : - 1;
          return 0
        }
        function O(e) {
          var t = e.abs();
          return !t.isUnit() &&
          (
            !!(t.equals(2) || t.equals(3) || t.equals(5)) ||
            !(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) &&
            (!!t.lesser(49) || void 0)
          )
        }
        function k(e, t) {
          for (var n, r, i, o = e.prev(), l = o, c = 0; l.isEven(); ) l = l.divide(2),
          c++;
          e: for (r = 0; r < t.length; r++) if (
            !e.lesser(t[r]) &&
            !(i = a(t[r]).modPow(l, e)).isUnit() &&
            !i.equals(o)
          ) {
            for (n = c - 1; 0 != n; n--) {
              if ((i = i.square().mod(e)).isUnit()) return !1;
              if (i.equals(o)) continue e
            }
            return !1
          }
          return !0
        }
        c.prototype = Object.create(l.prototype),
        u.prototype = Object.create(l.prototype),
        s.prototype = Object.create(l.prototype),
        c.prototype.add = function (e) {
          var t = K(e);
          if (this.sign !== t.sign) return this.subtract(t.negate());
          var n = this.value,
          r = t.value;
          return t.isSmall ? new c(g(n, Math.abs(r)), this.sign) : new c(E(n, r), this.sign)
        },
        c.prototype.plus = c.prototype.add,
        u.prototype.add = function (e) {
          var t = K(e),
          n = this.value;
          if (n < 0 !== t.sign) return this.subtract(t.negate());
          var r = t.value;
          if (t.isSmall) {
            if (d(n + r)) return new u(n + r);
            r = p(Math.abs(r))
          }
          return new c(g(r, Math.abs(n)), n < 0)
        },
        u.prototype.plus = u.prototype.add,
        s.prototype.add = function (e) {
          return new s(this.value + K(e).value)
        },
        s.prototype.plus = s.prototype.add,
        c.prototype.subtract = function (e) {
          var t = K(e);
          if (this.sign !== t.sign) return this.add(t.negate());
          var n = this.value,
          r = t.value;
          return t.isSmall ? b(n, Math.abs(r), this.sign) : function (e, t, n) {
            var r;
            return w(e, t) >= 0 ? r = C(e, t) : (r = C(t, e), n = !n),
            'number' == typeof (r = h(r)) ? (n && (r = - r), new u(r)) : new c(r, n)
          }(n, r, this.sign)
        },
        c.prototype.minus = c.prototype.subtract,
        u.prototype.subtract = function (e) {
          var t = K(e),
          n = this.value;
          if (n < 0 !== t.sign) return this.add(t.negate());
          var r = t.value;
          return t.isSmall ? new u(n - r) : b(r, Math.abs(n), n >= 0)
        },
        u.prototype.minus = u.prototype.subtract,
        s.prototype.subtract = function (e) {
          return new s(this.value - K(e).value)
        },
        s.prototype.minus = s.prototype.subtract,
        c.prototype.negate = function () {
          return new c(this.value, !this.sign)
        },
        u.prototype.negate = function () {
          var e = this.sign,
          t = new u( - this.value);
          return t.sign = !e,
          t
        },
        s.prototype.negate = function () {
          return new s( - this.value)
        },
        c.prototype.abs = function () {
          return new c(this.value, !1)
        },
        u.prototype.abs = function () {
          return new u(Math.abs(this.value))
        },
        s.prototype.abs = function () {
          return new s(this.value >= 0 ? this.value : - this.value)
        },
        c.prototype.multiply = function (e) {
          var n,
          r,
          a,
          i = K(e),
          o = this.value,
          u = i.value,
          s = this.sign !== i.sign;
          if (i.isSmall) {
            if (0 === u) return l[0];
            if (1 === u) return this;
            if ( - 1 === u) return this.negate();
            if ((n = Math.abs(u)) < t) return new c(T(o, n), s);
            u = p(n)
          }
          return r = o.length,
          a = u.length,
          new c( - 0.012 * r - 0.012 * a + 0.000015 * r * a > 0 ? _(o, u) : I(o, u), s)
        },
        c.prototype.times = c.prototype.multiply,
        u.prototype._multiplyBySmall = function (e) {
          return d(e.value * this.value) ? new u(e.value * this.value) : A(Math.abs(e.value), p(Math.abs(this.value)), this.sign !== e.sign)
        },
        c.prototype._multiplyBySmall = function (e) {
          return 0 === e.value ? l[0] : 1 === e.value ? this : - 1 === e.value ? this.negate() : A(Math.abs(e.value), this.value, this.sign !== e.sign)
        },
        u.prototype.multiply = function (e) {
          return K(e)._multiplyBySmall(this)
        },
        u.prototype.times = u.prototype.multiply,
        s.prototype.multiply = function (e) {
          return new s(this.value * K(e).value)
        },
        s.prototype.times = s.prototype.multiply,
        c.prototype.square = function () {
          return new c(N(this.value), !1)
        },
        u.prototype.square = function () {
          var e = this.value * this.value;
          return d(e) ? new u(e) : new c(N(p(Math.abs(this.value))), !1)
        },
        s.prototype.square = function (e) {
          return new s(this.value * this.value)
        },
        c.prototype.divmod = function (e) {
          var t = D(this, e);
          return {
            quotient: t[0],
            remainder: t[1]
          }
        },
        s.prototype.divmod = u.prototype.divmod = c.prototype.divmod,
        c.prototype.divide = function (e) {
          return D(this, e) [0]
        },
        s.prototype.over = s.prototype.divide = function (e) {
          return new s(this.value / K(e).value)
        },
        u.prototype.over = u.prototype.divide = c.prototype.over = c.prototype.divide,
        c.prototype.mod = function (e) {
          return D(this, e) [1]
        },
        s.prototype.mod = s.prototype.remainder = function (e) {
          return new s(this.value % K(e).value)
        },
        u.prototype.remainder = u.prototype.mod = c.prototype.remainder = c.prototype.mod,
        c.prototype.pow = function (e) {
          var t,
          n,
          r,
          a = K(e),
          i = this.value,
          o = a.value;
          if (0 === o) return l[1];
          if (0 === i) return l[0];
          if (1 === i) return l[1];
          if ( - 1 === i) return a.isEven() ? l[1] : l[ - 1];
          if (a.sign) return l[0];
          if (!a.isSmall) throw new Error('The exponent ' + a.toString() + ' is too large.');
          if (this.isSmall && d(t = Math.pow(i, o))) return new u(m(t));
          for (n = this, r = l[1]; !0 & o && (r = r.times(n), --o), 0 !== o; ) o /= 2,
          n = n.square();
          return r
        },
        u.prototype.pow = c.prototype.pow,
        s.prototype.pow = function (e) {
          var t = K(e),
          n = this.value,
          r = t.value,
          a = BigInt(0),
          i = BigInt(1),
          o = BigInt(2);
          if (r === a) return l[1];
          if (n === a) return l[0];
          if (n === i) return l[1];
          if (n === BigInt( - 1)) return t.isEven() ? l[1] : l[ - 1];
          if (t.isNegative()) return new s(a);
          for (var c = this, u = l[1]; (r & i) === i && (u = u.times(c), --r), r !== a; ) r /= o,
          c = c.square();
          return u
        },
        c.prototype.modPow = function (e, t) {
          if (e = K(e), (t = K(t)).isZero()) throw new Error('Cannot take modPow with modulus 0');
          var n = l[1],
          r = this.mod(t);
          for (
            e.isNegative() &&
            (e = e.multiply(l[ - 1]), r = r.modInv(t));
            e.isPositive();
          ) {
            if (r.isZero()) return l[0];
            e.isOdd() &&
            (n = n.multiply(r).mod(t)),
            e = e.divide(2),
            r = r.square().mod(t)
          }
          return n
        },
        s.prototype.modPow = u.prototype.modPow = c.prototype.modPow,
        c.prototype.compareAbs = function (e) {
          var t = K(e),
          n = this.value,
          r = t.value;
          return t.isSmall ? 1 : w(n, r)
        },
        u.prototype.compareAbs = function (e) {
          var t = K(e),
          n = Math.abs(this.value),
          r = t.value;
          return t.isSmall ? n === (r = Math.abs(r)) ? 0 : n > r ? 1 : - 1 : - 1
        },
        s.prototype.compareAbs = function (e) {
          var t = this.value,
          n = K(e).value;
          return (t = t >= 0 ? t : - t) === (n = n >= 0 ? n : - n) ? 0 : t > n ? 1 : - 1
        },
        c.prototype.compare = function (e) {
          if (e === 1 / 0) return - 1;
          if (e === - 1 / 0) return 1;
          var t = K(e),
          n = this.value,
          r = t.value;
          return this.sign !== t.sign ? t.sign ? 1 : - 1 : t.isSmall ? this.sign ? - 1 : 1 : w(n, r) * (this.sign ? - 1 : 1)
        },
        c.prototype.compareTo = c.prototype.compare,
        u.prototype.compare = function (e) {
          if (e === 1 / 0) return - 1;
          if (e === - 1 / 0) return 1;
          var t = K(e),
          n = this.value,
          r = t.value;
          return t.isSmall ? n == r ? 0 : n > r ? 1 : - 1 : n < 0 !== t.sign ? n < 0 ? - 1 : 1 : n < 0 ? 1 : - 1
        },
        u.prototype.compareTo = u.prototype.compare,
        s.prototype.compare = function (e) {
          if (e === 1 / 0) return - 1;
          if (e === - 1 / 0) return 1;
          var t = this.value,
          n = K(e).value;
          return t === n ? 0 : t > n ? 1 : - 1
        },
        s.prototype.compareTo = s.prototype.compare,
        c.prototype.equals = function (e) {
          return 0 === this.compare(e)
        },
        s.prototype.eq = s.prototype.equals = u.prototype.eq = u.prototype.equals = c.prototype.eq = c.prototype.equals,
        c.prototype.notEquals = function (e) {
          return 0 !== this.compare(e)
        },
        s.prototype.neq = s.prototype.notEquals = u.prototype.neq = u.prototype.notEquals = c.prototype.neq = c.prototype.notEquals,
        c.prototype.greater = function (e) {
          return this.compare(e) > 0
        },
        s.prototype.gt = s.prototype.greater = u.prototype.gt = u.prototype.greater = c.prototype.gt = c.prototype.greater,
        c.prototype.lesser = function (e) {
          return this.compare(e) < 0
        },
        s.prototype.lt = s.prototype.lesser = u.prototype.lt = u.prototype.lesser = c.prototype.lt = c.prototype.lesser,
        c.prototype.greaterOrEquals = function (e) {
          return this.compare(e) >= 0
        },
        s.prototype.geq = s.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals,
        c.prototype.lesserOrEquals = function (e) {
          return this.compare(e) <= 0
        },
        s.prototype.leq = s.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals,
        c.prototype.isEven = function () {
          return 0 == (1 & this.value[0])
        },
        u.prototype.isEven = function () {
          return 0 == (1 & this.value)
        },
        s.prototype.isEven = function () {
          return (this.value & BigInt(1)) === BigInt(0)
        },
        c.prototype.isOdd = function () {
          return 1 == (1 & this.value[0])
        },
        u.prototype.isOdd = function () {
          return 1 == (1 & this.value)
        },
        s.prototype.isOdd = function () {
          return (this.value & BigInt(1)) === BigInt(1)
        },
        c.prototype.isPositive = function () {
          return !this.sign
        },
        u.prototype.isPositive = function () {
          return this.value > 0
        },
        s.prototype.isPositive = u.prototype.isPositive,
        c.prototype.isNegative = function () {
          return this.sign
        },
        u.prototype.isNegative = function () {
          return this.value < 0
        },
        s.prototype.isNegative = u.prototype.isNegative,
        c.prototype.isUnit = function () {
          return !1
        },
        u.prototype.isUnit = function () {
          return 1 === Math.abs(this.value)
        },
        s.prototype.isUnit = function () {
          return this.abs().value === BigInt(1)
        },
        c.prototype.isZero = function () {
          return !1
        },
        u.prototype.isZero = function () {
          return 0 === this.value
        },
        s.prototype.isZero = function () {
          return this.value === BigInt(0)
        },
        c.prototype.isDivisibleBy = function (e) {
          var t = K(e);
          return !t.isZero() &&
          (
            !!t.isUnit() ||
            (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero())
          )
        },
        s.prototype.isDivisibleBy = u.prototype.isDivisibleBy = c.prototype.isDivisibleBy,
        c.prototype.isPrime = function (t) {
          var n = O(this);
          if (n !== e) return n;
          var r = this.abs(),
          i = r.bitLength();
          if (i <= 64) return k(r, [
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37
          ]);
          for (
            var o = Math.log(2) * i.toJSNumber(),
            l = Math.ceil(!0 === t ? 2 * Math.pow(o, 2) : o),
            c = [],
            u = 0;
            u < l;
            u++
          ) c.push(a(u + 2));
          return k(r, c)
        },
        s.prototype.isPrime = u.prototype.isPrime = c.prototype.isPrime,
        c.prototype.isProbablePrime = function (t, n) {
          var r = O(this);
          if (r !== e) return r;
          for (var i = this.abs(), o = t === e ? 5 : t, l = [], c = 0; c < o; c++) l.push(a.randBetween(2, i.minus(2), n));
          return k(i, l)
        },
        s.prototype.isProbablePrime = u.prototype.isProbablePrime = c.prototype.isProbablePrime,
        c.prototype.modInv = function (e) {
          for (var t, n, r, i = a.zero, o = a.one, l = K(e), c = this.abs(); !c.isZero(); ) t = l.divide(c),
          n = i,
          r = l,
          i = o,
          l = c,
          o = n.subtract(t.multiply(o)),
          c = r.subtract(t.multiply(c));
          if (!l.isUnit()) throw new Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
          return - 1 === i.compare(0) &&
          (i = i.add(e)),
          this.isNegative() ? i.negate() : i
        },
        s.prototype.modInv = u.prototype.modInv = c.prototype.modInv,
        c.prototype.next = function () {
          var e = this.value;
          return this.sign ? b(e, 1, this.sign) : new c(g(e, 1), this.sign)
        },
        u.prototype.next = function () {
          var e = this.value;
          return e + 1 < n ? new u(e + 1) : new c(r, !1)
        },
        s.prototype.next = function () {
          return new s(this.value + BigInt(1))
        },
        c.prototype.prev = function () {
          var e = this.value;
          return this.sign ? new c(g(e, 1), !0) : b(e, 1, this.sign)
        },
        u.prototype.prev = function () {
          var e = this.value;
          return e - 1 > - n ? new u(e - 1) : new c(r, !0)
        },
        s.prototype.prev = function () {
          return new s(this.value - BigInt(1))
        };
        for (var R = [
          1
        ]; 2 * R[R.length - 1] <= t; ) R.push(2 * R[R.length - 1]);
        var P = R.length,
        M = R[P - 1];
        function x(e) {
          return Math.abs(e) <= t
        }
        function V(e, t, n) {
          t = K(t);
          for (
            var r = e.isNegative(),
            i = t.isNegative(),
            o = r ? e.not() : e,
            l = i ? t.not() : t,
            c = 0,
            u = 0,
            s = null,
            d = null,
            p = [];
            !o.isZero() ||
            !l.isZero();
          ) c = (s = D(o, M)) [1].toJSNumber(),
          r &&
          (c = M - 1 - c),
          u = (d = D(l, M)) [1].toJSNumber(),
          i &&
          (u = M - 1 - u),
          o = s[0],
          l = d[0],
          p.push(n(c, u));
          for (var h = 0 !== n(r ? 1 : 0, i ? 1 : 0) ? a( - 1) : a(0), f = p.length - 1; f >= 0; f -= 1) h = h.multiply(M).add(a(p[f]));
          return h
        }
        c.prototype.shiftLeft = function (e) {
          var t = K(e).toJSNumber();
          if (!x(t)) throw new Error(String(t) + ' is too large for shifting.');
          if (t < 0) return this.shiftRight( - t);
          var n = this;
          if (n.isZero()) return n;
          for (; t >= P; ) n = n.multiply(M),
          t -= P - 1;
          return n.multiply(R[t])
        },
        s.prototype.shiftLeft = u.prototype.shiftLeft = c.prototype.shiftLeft,
        c.prototype.shiftRight = function (e) {
          var t,
          n = K(e).toJSNumber();
          if (!x(n)) throw new Error(String(n) + ' is too large for shifting.');
          if (n < 0) return this.shiftLeft( - n);
          for (var r = this; n >= P; ) {
            if (r.isZero() || r.isNegative() && r.isUnit()) return r;
            r = (t = D(r, M)) [1].isNegative() ? t[0].prev() : t[0],
            n -= P - 1
          }
          return (t = D(r, R[n])) [1].isNegative() ? t[0].prev() : t[0]
        },
        s.prototype.shiftRight = u.prototype.shiftRight = c.prototype.shiftRight,
        c.prototype.not = function () {
          return this.negate().prev()
        },
        s.prototype.not = u.prototype.not = c.prototype.not,
        c.prototype.and = function (e) {
          return V(this, e, (function (e, t) {
            return e & t
          }))
        },
        s.prototype.and = u.prototype.and = c.prototype.and,
        c.prototype.or = function (e) {
          return V(this, e, (function (e, t) {
            return e | t
          }))
        },
        s.prototype.or = u.prototype.or = c.prototype.or,
        c.prototype.xor = function (e) {
          return V(this, e, (function (e, t) {
            return e ^ t
          }))
        },
        s.prototype.xor = u.prototype.xor = c.prototype.xor;
        var H = 1 << 30;
        function W(e) {
          var n = e.value,
          r = 'number' == typeof n ? n | H : 'bigint' == typeof n ? n | BigInt(H) : n[0] + n[1] * t | 1073758208;
          return r & - r
        }
        function U(e, t) {
          if (t.compareTo(e) <= 0) {
            var n = U(e, t.square(t)),
            r = n.p,
            i = n.e,
            o = r.multiply(t);
            return o.compareTo(e) <= 0 ? {
              p: o,
              e: 2 * i + 1
            }
             : {
              p: r,
              e: 2 * i
            }
          }
          return {
            p: a(1),
            e: 0
          }
        }
        function G(e, t) {
          return e = K(e),
          t = K(t),
          e.greater(t) ? e : t
        }
        function z(e, t) {
          return e = K(e),
          t = K(t),
          e.lesser(t) ? e : t
        }
        function F(e, t) {
          if (e = K(e).abs(), t = K(t).abs(), e.equals(t)) return e;
          if (e.isZero()) return t;
          if (t.isZero()) return e;
          for (var n, r, a = l[1]; e.isEven() && t.isEven(); ) n = z(W(e), W(t)),
          e = e.divide(n),
          t = t.divide(n),
          a = a.multiply(n);
          for (; e.isEven(); ) e = e.divide(W(e));
          do {
            for (; t.isEven(); ) t = t.divide(W(t));
            e.greater(t) &&
            (r = t, t = e, e = r),
            t = t.subtract(e)
          } while (!t.isZero());
          return a.isUnit() ? e : e.multiply(a)
        }
        c.prototype.bitLength = function () {
          var e = this;
          return e.compareTo(a(0)) < 0 &&
          (e = e.negate().subtract(a(1))),
          0 === e.compareTo(a(0)) ? a(0) : a(U(e, a(2)).e).add(a(1))
        },
        s.prototype.bitLength = u.prototype.bitLength = c.prototype.bitLength;
        var B = function (e, t, n, r) {
          n = n ||
          i,
          e = String(e),
          r ||
          (e = e.toLowerCase(), n = n.toLowerCase());
          var a,
          o = e.length,
          l = Math.abs(t),
          c = {};
          for (a = 0; a < n.length; a++) c[n[a]] = a;
          for (a = 0; a < o; a++) {
            if ('-' !== (d = e[a]) && (d in c && c[d] >= l)) {
              if ('1' === d && 1 === l) continue;
              throw new Error(d + ' is not a valid digit in base ' + t + '.')
            }
          }
          t = K(t);
          var u = [],
          s = '-' === e[0];
          for (a = s ? 1 : 0; a < e.length; a++) {
            var d;
            if ((d = e[a]) in c) u.push(K(c[d]));
             else {
              if ('<' !== d) throw new Error(d + ' is not a valid character');
              var p = a;
              do {
                a++
              } while ('>' !== e[a] && a < e.length);
              u.push(K(e.slice(p + 1, a)))
            }
          }
          return q(u, t, s)
        };
        function q(e, t, n) {
          var r,
          a = l[0],
          i = l[1];
          for (r = e.length - 1; r >= 0; r--) a = a.add(e[r].times(i)),
          i = i.times(t);
          return n ? a.negate() : a
        }
        function Z(e, t) {
          if ((t = a(t)).isZero()) {
            if (e.isZero()) return {
              value: [
                0
              ],
              isNegative: !1
            };
            throw new Error('Cannot convert nonzero numbers to base 0.')
          }
          if (t.equals( - 1)) {
            if (e.isZero()) return {
              value: [
                0
              ],
              isNegative: !1
            };
            if (e.isNegative()) return {
              value: [].concat.apply(
                [],
                Array.apply(null, Array( - e.toJSNumber())).map(Array.prototype.valueOf, [
                  1,
                  0
                ])
              ),
              isNegative: !1
            };
            var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [
              0,
              1
            ]);
            return n.unshift([1]),
            {
              value: [].concat.apply([], n),
              isNegative: !1
            }
          }
          var r = !1;
          if (e.isNegative() && t.isPositive() && (r = !0, e = e.abs()), t.isUnit()) return e.isZero() ? {
            value: [
              0
            ],
            isNegative: !1
          }
           : {
            value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: r
          };
          for (var i, o = [], l = e; l.isNegative() || l.compareAbs(t) >= 0; ) {
            i = l.divmod(t),
            l = i.quotient;
            var c = i.remainder;
            c.isNegative() &&
            (c = t.minus(c).abs(), l = l.next()),
            o.push(c.toJSNumber())
          }
          return o.push(l.toJSNumber()),
          {
            value: o.reverse(),
            isNegative: r
          }
        }
        function j(e, t, n) {
          var r = Z(e, t);
          return (r.isNegative ? '-' : '') + r.value.map(
            (
              function (e) {
                return function (e, t) {
                  return e < (t = t || i).length ? t[e] : '<' + e + '>'
                }(e, n)
              }
            )
          ).join('')
        }
        function Y(e) {
          if (d( + e)) {
            var t = + e;
            if (t === m(t)) return o ? new s(BigInt(t)) : new u(t);
            throw new Error('Invalid integer: ' + e)
          }
          var n = '-' === e[0];
          n &&
          (e = e.slice(1));
          var r = e.split(/e/i);
          if (r.length > 2) throw new Error('Invalid integer: ' + r.join('e'));
          if (2 === r.length) {
            var a = r[1];
            if ('+' === a[0] && (a = a.slice(1)), (a = + a) !== m(a) || !d(a)) throw new Error('Invalid integer: ' + a + ' is not a valid exponent.');
            var i = r[0],
            l = i.indexOf('.');
            if (l >= 0 && (a -= i.length - l - 1, i = i.slice(0, l) + i.slice(l + 1)), a < 0) throw new Error('Cannot include negative exponent part for integers');
            e = i += new Array(a + 1).join('0')
          }
          if (!/^([0-9][0-9]*)$/.test(e)) throw new Error('Invalid integer: ' + e);
          if (o) return new s(BigInt(n ? '-' + e : e));
          for (var p = [], h = e.length, v = h - 7; h > 0; ) p.push( + e.slice(v, h)),
          (v -= 7) < 0 &&
          (v = 0),
          h -= 7;
          return f(p),
          new c(p, n)
        }
        function K(e) {
          return 'number' == typeof e ? function (e) {
            if (o) return new s(BigInt(e));
            if (d(e)) {
              if (e !== m(e)) throw new Error(e + ' is not an integer.');
              return new u(e)
            }
            return Y(e.toString())
          }(e) : 'string' == typeof e ? Y(e) : 'bigint' == typeof e ? new s(e) : e
        }
        c.prototype.toArray = function (e) {
          return Z(this, e)
        },
        u.prototype.toArray = function (e) {
          return Z(this, e)
        },
        s.prototype.toArray = function (e) {
          return Z(this, e)
        },
        c.prototype.toString = function (t, n) {
          if (t === e && (t = 10), 10 !== t) return j(this, t, n);
          for (var r, a = this.value, i = a.length, o = String(a[--i]); --i >= 0; ) r = String(a[i]),
          o += '0000000'.slice(r.length) + r;
          return (this.sign ? '-' : '') + o
        },
        u.prototype.toString = function (t, n) {
          return t === e &&
          (t = 10),
          10 != t ? j(this, t, n) : String(this.value)
        },
        s.prototype.toString = u.prototype.toString,
        s.prototype.toJSON = c.prototype.toJSON = u.prototype.toJSON = function () {
          return this.toString()
        },
        c.prototype.valueOf = function () {
          return parseInt(this.toString(), 10)
        },
        c.prototype.toJSNumber = c.prototype.valueOf,
        u.prototype.valueOf = function () {
          return this.value
        },
        u.prototype.toJSNumber = u.prototype.valueOf,
        s.prototype.valueOf = s.prototype.toJSNumber = function () {
          return parseInt(this.toString(), 10)
        };
        for (var J = 0; J < 1000; J++) l[J] = K(J),
        J > 0 &&
        (l[ - J] = K( - J));
        return l.one = l[1],
        l.zero = l[0],
        l.minusOne = l[ - 1],
        l.max = G,
        l.min = z,
        l.gcd = F,
        l.lcm = function (e, t) {
          return e = K(e).abs(),
          t = K(t).abs(),
          e.divide(F(e, t)).multiply(t)
        },
        l.isInstance = function (e) {
          return e instanceof c ||
          e instanceof u ||
          e instanceof s
        },
        l.randBetween = function (e, n, r) {
          e = K(e),
          n = K(n);
          var a = r ||
          Math.random,
          i = z(e, n),
          o = G(e, n).subtract(i).add(1);
          if (o.isSmall) return i.add(Math.floor(a() * o));
          for (var c = Z(o, t).value, u = [], s = !0, d = 0; d < c.length; d++) {
            var p = s ? c[d] + (d + 1 < c.length ? c[d + 1] / t : 0) : t,
            h = m(a() * p);
            u.push(h),
            h < c[d] &&
            (s = !1)
          }
          return i.add(l.fromArray(u, t, !1))
        },
        l.fromArray = function (e, t, n) {
          return q(e.map(K), K(t || 10), n)
        },
        l
      }();
      e.hasOwnProperty('exports') &&
      (e.exports = a),
      void 0 === (r = function () {
        return a
      }.call(t, n, t, e)) ||
      (e.exports = r)
    }
  },
  t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      id: r,
      loaded: !1,
      exports: {
      }
    };
    return e[r](a, a.exports, n),
    a.loaded = !0,
    a.exports
  }
  n.n = function (e) {
    var t = e &&
    e.__esModule ? function () {
      return e.default
    }
     : function () {
      return e
    };
    return n.d(t, {
      a: t
    }),
    t
  },
  n.d = function (e, t) {
    for (var r in t) n.o(t, r) &&
    !n.o(e, r) &&
    Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  },
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  n.r = function (e) {
    'undefined' != typeof Symbol &&
    Symbol.toStringTag &&
    Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module'
    }),
    Object.defineProperty(e, '__esModule', {
      value: !0
    })
  },
  n.nmd = function (e) {
    return e.paths = [],
    e.children ||
    (e.children = []),
    e
  },
  function () {
    'use strict';
    var e = {};
    n.r(e),
    n.d(
      e,
      {
        getState: function () {
          return De
        },
        lock: function () {
          return Oe
        },
        unlock: function () {
          return we
        }
      }
    );
    var t = {};
    n.r(t),
    n.d(t, {
      getMetadata: function () {
        return xe
      }
    });
    var r = {};
    n.r(r),
    n.d(
      r,
      {
        getEmailConfiguration: function () {
          return be(pe.httpService.get(Ge), Pe);
        },
        updateForCurrentUser: function (emailAddress) {
          return be(
            pe.httpService.post(Ue, {
              emailAddress: emailAddress,
              skipVerificationEmail: true
            }),
            Pe
          );
        }
      }
    );
    var a = {};
    n.r(a),
    n.d(a, {
      getDetailsForUniverseIds: function () {
        return je
      }
    });
    var i = {};
    n.r(i),
    n.d(i, {
      getMySettingsInfo: function () {
        return Xe
      }
    });
    var o = {};
    n.r(o),
    n.d(
      o,
      {
        getMetadata: function () {
          return dt
        },
        resendCode: function () {
          return ut
        },
        sendCodeForUser: function () {
          return ct
        },
        validateCode: function () {
          return st
        }
      }
    );
    var l = {};
    n.r(l),
    n.d(
      l,
      {
        changeForCurrentUser: function () {
          return It
        },
        resetSendPrompted: function () {
          return Tt
        },
        validate: function () {
          return St
        }
      }
    );
    var c = {};
    n.r(c),
    n.d(c, {
      getPhoneConfiguration: function () {
        return Ot
      }
    });
    var u = {};
    n.r(u),
    n.d(
      u,
      {
        disconnectPlaystation: function () {
          return Gt
        },
        getPlaystationConnection: function () {
          return Ut
        }
      }
    );
    var s = {};
    n.r(s),
    n.d(
      s,
      {
        getAllForCurrentUser: function () {
          return Xt
        },
        updateForCurrentUser: function () {
          return Qt
        }
      }
    );
    var d = {};
    n.r(d),
    n.d(d, {
      verifyPuzzle: function () {
        return ln
      }
    });
    var p = {};
    n.r(p),
    n.d(
      p,
      {
        getPuzzle: function () {
          return vn
        },
        verifyPuzzle: function () {
          return mn
        }
      }
    );
    var h = {};
    n.r(h),
    n.d(h, {
      generateToken: function () {
        return bn
      }
    });
    var f = {};
    n.r(f),
    n.d(f, {
      verifyPuzzle: function () {
        return wn
      }
    });
    var v = {};
    n.r(v),
    n.d(
      v,
      {
        answerQuestion: function () {
          return Un
        },
        getQuestion: function () {
          return Wn
        }
      }
    );
    var m = {};
    n.r(m),
    n.d(
      m,
      {
        getSessions: function () {
          return er
        },
        logoutFromAllSessionsAndReauthenticate: function () {
          return nr
        },
        logoutSession: function () {
          return tr
        }
      }
    );
    var y = {};
    n.r(y),
    n.d(y, {
      getIconsForUniverseIds: function () {
        return ur
      }
    });
    var E = {};
    n.r(E),
    n.d(
      E,
      {
        deleteSecurityKey: function () {
          return na
        },
        disableAuthenticator: function () {
          return Br
        },
        disableEmailTwoStepVerification: function () {
          return Ur
        },
        disableSmsTwoStepVerification: function () {
          return Xr
        },
        enableAuthenticator: function () {
          return Gr
        },
        enableEmailTwoStepVerification: function () {
          return Vr
        },
        enableSecurityKey: function () {
          return Qr
        },
        enableSmsTwoStepVerification: function () {
          return Yr
        },
        enableVerifyAuthenticator: function () {
          return zr
        },
        enableVerifySecurityKey: function () {
          return $r
        },
        generateRecoveryCodes: function () {
          return jr
        },
        generateResaleFrictionChallenge: function () {
          return da
        },
        generateSpendFrictionChallenge: function () {
          return ua
        },
        generateTradeFrictionChallenge: function () {
          return sa
        },
        getMetadata: function () {
          return Mr
        },
        getPasskeyOptions: function () {
          return aa
        },
        getRecoveryCodesStatus: function () {
          return Zr
        },
        getResaleFrictionStatus: function () {
          return ca
        },
        getSecurityKeyOptions: function () {
          return ea
        },
        getSpendFrictionStatus: function () {
          return oa
        },
        getTradeFrictionStatus: function () {
          return la
        },
        getUserConfiguration: function () {
          return xr
        },
        listSecurityKey: function () {
          return ra
        },
        redeemResaleFrictionChallenge: function () {
          return fa
        },
        redeemSpendFrictionChallenge: function () {
          return pa
        },
        redeemTradeFrictionChallenge: function () {
          return ha
        },
        retractCrossDevice: function () {
          return ya
        },
        retryCrossDevice: function () {
          return va
        },
        sendEmailCode: function () {
          return Hr
        },
        sendSmsCode: function () {
          return Kr
        },
        verifyAuthenticatorCode: function () {
          return Fr
        },
        verifyCrossDevice: function () {
          return ma
        },
        verifyEmailCode: function () {
          return Wr
        },
        verifyPasskeyCredential: function () {
          return ia
        },
        verifyRecoveryCode: function () {
          return qr
        },
        verifySecurityKeyCredential: function () {
          return ta
        },
        verifySmsCode: function () {
          return Jr
        }
      }
    );
    var g = {};
    n.r(g),
    n.d(g, {
      getSettingsUiPolicy: function () {
        return Sa
      }
    });
    var C = {};
    n.r(C),
    n.d(
      C,
      {
        disconnectXbox: function () {
          return ka
        },
        getXboxConnection: function () {
          return Oa
        }
      }
    );
    var b = {};
    n.r(b),
    n.d(b, {
      recordMetric: function () {
        return Va
      }
    });
    var I = {};
    n.r(I),
    n.d(I, {
      getPatToken: function () {
        return Ba
      }
    });
    var T = {};
    n.r(T),
    n.d(T, {
      continueChallenge: function () {
        return Xa
      }
    });
    var S = {};
    n.r(S),
    n.d(
      S,
      {
        deletePasskeyBatch: function () {
          return li
        },
        finishPasskeyRegistration: function () {
          return oi
        },
        listAllCredentials: function () {
          return ci
        },
        startPasskeyRegistration: function () {
          return ii
        }
      }
    );
    var _ = {};
    n.r(_),
    n.d(
      _,
      {
        getNativeResponse: function () {
          return di
        },
        getNavigatorCredentials: function () {
          return pi
        }
      }
    );
    var A = {};
    n.r(A),
    n.d(
      A,
      {
        ActionType: function () {
          return _i
        },
        ErrorCode: function () {
          return Ai
        },
        renderChallenge: function () {
          return Qi
        }
      }
    );
    var N = {};
    n.r(N),
    n.d(
      N,
      {
        ErrorCode: function () {
          return oo
        },
        renderChallenge: function () {
          return bo
        }
      }
    );
    var L = {};
    n.r(L),
    n.d(
      L,
      {
        ErrorCode: function () {
          return So
        },
        ForceActionRedirectChallengeType: function () {
          return _o
        },
        renderChallenge: function () {
          return Go
        }
      }
    );
    var D = {};
    n.r(D),
    n.d(
      D,
      {
        ErrorCode: function () {
          return bc
        },
        renderChallenge: function () {
          return Eu
        }
      }
    );
    var w = {};
    n.r(w),
    n.d(
      w,
      {
        ErrorCode: function () {
          return Ic
        },
        PuzzleType: function () {
          return Tc
        },
        renderChallenge: function () {
          return Xu
        }
      }
    );
    var O = {};
    n.r(O),
    n.d(
      O,
      {
        ErrorCode: function () {
          return Sc
        },
        renderChallenge: function () {
          return Ss
        }
      }
    );
    var k = {};
    n.r(k),
    n.d(
      k,
      {
        ErrorCode: function () {
          return _c
        },
        ReauthenticationType: function () {
          return Ac
        },
        reauthInvalidationErrorMessageOrNull: function () {
          return Td
        },
        renderChallenge: function () {
          return Id
        }
      }
    );
    var R = {};
    n.r(R),
    n.d(
      R,
      {
        ErrorCode: function () {
          return Nc
        },
        PuzzleType: function () {
          return Lc
        },
        renderChallenge: function () {
          return Xd
        }
      }
    );
    var P = {};
    n.r(P),
    n.d(
      P,
      {
        ErrorCode: function () {
          return Dc
        },
        renderChallenge: function () {
          return gp
        }
      }
    );
    var M = {};
    n.r(M),
    n.d(
      M,
      {
        ActionType: function () {
          return wc
        },
        ErrorCode: function () {
          return kc
        },
        MediaType: function () {
          return Oc
        },
        renderChallenge: function () {
          return Ih
        }
      }
    );
    var x = {};
    n.r(x),
    n.d(
      x,
      {
        ChallengeError: function () {
          return dm
        },
        ChallengeErrorKind: function () {
          return gc
        },
        ChallengeType: function () {
          return Rc
        },
        ErrorCodeGeneric: function () {
          return Ec
        },
        interceptChallenge: function () {
          return pm
        },
        loadPreludeIfMissing: function () {
          return hm
        },
        parseChallengeSpecificProperties: function () {
          return cm
        },
        renderChallenge: function () {
          return um
        }
      }
    );
    var V = {};
    n.r(V),
    n.d(
      V,
      {
        ChallengeType: function () {
          return Rc
        },
        HybridTarget: function () {
          return Cc
        },
        renderChallengeFromQueryParameters: function () {
          return Zm
        }
      }
    );
    var H = Roblox,
    W = n.n(H);
    function U(e, t, n) {
      return (
        U = 'undefined' != typeof Reflect &&
        Reflect.get ? Reflect.get : function (e, t, n) {
          var r = function (e, t) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(e, t) &&
              null !== (e = q(e));
            );
            return e
          }(e, t);
          if (r) {
            var a = Object.getOwnPropertyDescriptor(r, t);
            return a.get ? a.get.call(n) : a.value
          }
        }
      ) (e, t, n || e)
    }
    function G(e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
      e.prototype = Object.create(
        t &&
        t.prototype,
        {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }
      ),
      t &&
      z(e, t)
    }
    function z(e, t) {
      return (
        z = Object.setPrototypeOf ||
        function (e, t) {
          return e.__proto__ = t,
          e
        }
      ) (e, t)
    }
    function F(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
          }))),
          !0
        } catch (e) {
          return !1
        }
      }();
      return function () {
        var n,
        r = q(e);
        if (t) {
          var a = q(this).constructor;
          n = Reflect.construct(r, arguments, a)
        } else n = r.apply(this, arguments);
        return B(this, n)
      }
    }
    function B(e, t) {
      return !t ||
      'object' !== Q(t) &&
      'function' != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e
      }(e) : t
    }
    function q(e) {
      return (
        q = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ ||
          Object.getPrototypeOf(e)
        }
      ) (e)
    }
    function Z(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable ||
        !1,
        r.configurable = !0,
        'value' in r &&
        (r.writable = !0),
        Object.defineProperty(e, r.key, r)
      }
    }
    function Y(e, t, n) {
      return t &&
      j(e.prototype, t),
      n &&
      j(e, n),
      e
    }
    function K(e) {
      return function (e) {
        if (Array.isArray(e)) return X(e)
      }(e) ||
      function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) ||
      J(e) ||
      function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }()
    }
    function J(e, t) {
      if (e) {
        if ('string' == typeof e) return X(e, t);
        var n = Object.prototype.toString.call(e).slice(8, - 1);
        return 'Object' === n &&
        e.constructor &&
        (n = e.constructor.name),
        'Map' === n ||
        'Set' === n ? Array.from(e) : 'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? X(e, t) : void 0
      }
    }
    function X(e, t) {
      (null == t || t > e.length) &&
      (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    function Q(e) {
      return (
        Q = 'function' == typeof Symbol &&
        'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
         : function (e) {
          return e &&
          'function' == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype ? 'symbol' : typeof e
        }
      ) (e)
    }
    var $ = function () {
      function e(t, n) {
        Z(this, e),
        t = this.words = t ||
        [],
        this.sigBytes = void 0 !== n ? n : 4 * t.length
      }
      return Y(
        e,
        [
          {
            key: 'toString',
            value: function (e) {
              return (e || ee).stringify(this)
            }
          },
          {
            key: 'concat',
            value: function (e) {
              if (this.clamp(), this.sigBytes % 4) for (var t = 0; t < e.sigBytes; t++) {
                var n = e.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                this.words[this.sigBytes + t >>> 2] |= n << 24 - (this.sigBytes + t) % 4 * 8
              } else for (var r = 0; r < e.sigBytes; r += 4) this.words[this.sigBytes + r >>> 2] = e.words[r >>> 2];
              return this.sigBytes += e.sigBytes,
              this
            }
          },
          {
            key: 'clamp',
            value: function () {
              this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
              this.words.length = Math.ceil(this.sigBytes / 4)
            }
          },
          {
            key: 'clone',
            value: function () {
              return new e(K(this.words))
            }
          }
        ]
      ),
      e
    }(),
    ee = {
      stringify: function (e) {
        for (var t = [], n = 0; n < e.sigBytes; n++) {
          var r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          t.push((r >>> 4).toString(16), (15 & r).toString(16))
        }
        return t.join('')
      }
    },
    te = function (e) {
      for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
      return new $(n, t)
    },
    ne = function (e) {
      return te(unescape(encodeURIComponent(e)))
    },
    re = [
      1779033703,
      - 1150833019,
      1013904242,
      - 1521486534,
      1359893119,
      - 1694144372,
      528734635,
      1541459225
    ],
    ae = [
      1116352408,
      1899447441,
      - 1245643825,
      - 373957723,
      961987163,
      1508970993,
      - 1841331548,
      - 1424204075,
      - 670586216,
      310598401,
      607225278,
      1426881987,
      1925078388,
      - 2132889090,
      - 1680079193,
      - 1046744716,
      - 459576895,
      - 272742522,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      - 1740746414,
      - 1473132947,
      - 1341970488,
      - 1084653625,
      - 958395405,
      - 710438585,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      - 2117940946,
      - 1838011259,
      - 1564481375,
      - 1474664885,
      - 1035236496,
      - 949202525,
      - 778901479,
      - 694614492,
      - 200395387,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      - 2067236844,
      - 1933114872,
      - 1866530822,
      - 1538233109,
      - 1090935817,
      - 965641998
    ],
    ie = [],
    oe = function (e) {
      G(n, e);
      var t = F(n);
      function n() {
        var e;
        return Z(this, n),
        (e = t.call(this)).reset(),
        e
      }
      return Y(
        n,
        [
          {
            key: 'reset',
            value: function () {
              U(q(n.prototype), 'reset', this).call(this),
              this._hash = new $([].concat(re))
            }
          },
          {
            key: '_doProcessBlock',
            value: function (e, t) {
              for (
                var n = this._hash.words,
                r = n[0],
                a = n[1],
                i = n[2],
                o = n[3],
                l = n[4],
                c = n[5],
                u = n[6],
                s = n[7],
                d = 0;
                d < 64;
                d++
              ) {
                if (d < 16) ie[d] = 0 | e[t + d];
                 else {
                  var p = ie[d - 15],
                  h = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                  f = ie[d - 2],
                  v = (f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10;
                  ie[d] = h + ie[d - 7] + v + ie[d - 16]
                }
                var m = r & a ^ r & i ^ a & i,
                y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                E = s + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + (l & c ^ ~l & u) + ae[d] + ie[d];
                s = u,
                u = c,
                c = l,
                l = o + E | 0,
                o = i,
                i = a,
                a = r,
                r = E + (y + m) | 0
              }
              n[0] = n[0] + r | 0,
              n[1] = n[1] + a | 0,
              n[2] = n[2] + i | 0,
              n[3] = n[3] + o | 0,
              n[4] = n[4] + l | 0,
              n[5] = n[5] + c | 0,
              n[6] = n[6] + u | 0,
              n[7] = n[7] + s | 0
            }
          },
          {
            key: 'finalize',
            value: function (e) {
              U(q(n.prototype), 'finalize', this).call(this, e);
              var t = 8 * this._nDataBytes,
              r = 8 * this._data.sigBytes;
              return this._data.words[r >>> 5] |= 128 << 24 - r % 32,
              this._data.words[14 + (r + 64 >>> 9 << 4)] = Math.floor(t / 4294967296),
              this._data.words[15 + (r + 64 >>> 9 << 4)] = t,
              this._data.sigBytes = 4 * this._data.words.length,
              this._process(),
              this._hash
            }
          }
        ]
      ),
      n
    }(
      function (e) {
        G(n, e);
        var t = F(n);
        function n() {
          return Z(this, n),
          t.apply(this, arguments)
        }
        return Y(
          n,
          [
            {
              key: 'update',
              value: function (e) {
                return this._append(e),
                this._process(),
                this
              }
            },
            {
              key: 'finalize',
              value: function (e) {
                e &&
                this._append(e)
              }
            }
          ]
        ),
        n
      }(
        function () {
          function e() {
            Z(this, e),
            this._minBufferSize = 0,
            this.blockSize = 16,
            this.reset()
          }
          return Y(
            e,
            [
              {
                key: 'reset',
                value: function () {
                  this._data = new $,
                  this._nDataBytes = 0
                }
              },
              {
                key: '_append',
                value: function (e) {
                  'string' == typeof e &&
                  (e = ne(e)),
                  this._data.concat(e),
                  this._nDataBytes += e.sigBytes
                }
              },
              {
                key: '_doProcessBlock',
                value: function (e, t) {
                }
              },
              {
                key: '_process',
                value: function (e) {
                  var t,
                  n = this._data.sigBytes / (4 * this.blockSize),
                  r = (n = e ? Math.ceil(n) : Math.max((0 | n) - this._minBufferSize, 0)) * this.blockSize,
                  a = Math.min(4 * r, this._data.sigBytes);
                  if (r) {
                    for (var i = 0; i < r; i += this.blockSize) this._doProcessBlock(this._data.words, i);
                    t = this._data.words.splice(0, r),
                    this._data.sigBytes -= a
                  }
                  return new $(t, a)
                }
              }
            ]
          ),
          e
        }()
      )
    );
    var le,
    ce,
    ue = React,
    se = n.n(ue),
    de = ReactDOM,
    pe = CoreUtilities,
    he = function (e) {
      return {
        isError: !1,
        value: e
      }
    },
    fe = he,
    ve = function (e, t, n) {
      return void 0 === n &&
      (n = null),
      {
        isError: !0,
        error: e,
        errorRaw: t,
        errorStatusCode: n
      }
    },
    me = function (e, t) {
      return e.isError ? e : he(t(e.value))
    },
    ye = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Ee = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    ge = function (e) {
      return 'object' != typeof e ? null : function (e) {
        var t = [];
        if (!e || 'object' != typeof e) return [];
        var n = e.errors;
        return n instanceof Array ? (
          n.forEach(
            (
              function (e) {
                if (e && 'object' == typeof e) {
                  var n = e.code;
                  'number' == typeof n &&
                  t.push(n)
                }
              }
            )
          ),
          t
        ) : []
      }(e.data) [0] ||
      null
    },
    Ce = function (e, t) {
      return null == e ? null : Object.values(e).includes(t) ? t : null
    },
    be = function (e, t, n) {
      return ye(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var r,
            a,
            i,
            o;
            return Ee(
              this,
              (
                function (l) {
                  switch (l.label) {
                    case 0:
                      return l.trys.push([0,
                      2,
                      ,
                      3]),
                      [
                        4,
                        e
                      ];
                    case 1:
                      return r = l.sent(),
                      void 0 !== n ? [
                        2,
                        fe(n(r.data))
                      ] : [
                        2,
                        fe(r.data)
                      ];
                    case 2:
                      return a = l.sent(),
                      i = ge(a),
                      o = function (e) {
                        if ('object' != typeof e || null === e) return null;
                        var t = e.status ||
                        null;
                        return 'number' != typeof t ? null : t
                      }(a),
                      [
                        2,
                        ve(Ce(t, i), a, o)
                      ];
                    case 3:
                      return [2]
                  }
                }
              )
            )
          }
        )
      )
    },
    Ie = function (e, t, n, r) {
      return void 0 === n &&
      (n = ge),
      ye(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var a,
            i,
            o;
            return Ee(
              this,
              (
                function (l) {
                  switch (l.label) {
                    case 0:
                      return l.trys.push([0,
                      2,
                      ,
                      3]),
                      [
                        4,
                        e
                      ];
                    case 1:
                      return a = l.sent(),
                      void 0 !== r ? [
                        2,
                        fe(r(a))
                      ] : [
                        2,
                        fe(a)
                      ];
                    case 2:
                      return i = l.sent(),
                      o = n(i),
                      [
                        2,
                        ve(Ce(t, o), i, 0)
                      ];
                    case 3:
                      return [2]
                  }
                }
              )
            )
          }
        )
      )
    },
    Te = null !== (le = H.EnvironmentUrls.authApi) &&
    void 0 !== le ? le : 'URL_NOT_FOUND';
    !function (e) {
      e[e.NO_ACCOUNT_PIN = 1] = 'NO_ACCOUNT_PIN',
      e[e.ACCOUNT_LOCKED = 2] = 'ACCOUNT_LOCKED',
      e[e.FLOODED = 3] = 'FLOODED',
      e[e.INCORRECT_PIN = 4] = 'INCORRECT_PIN'
    }(ce || (ce = {}));
    var Se,
    _e,
    Ae = {
      withCredentials: !0,
      url: Te + '/v1/account/pin',
      timeout: 10000
    },
    Ne = {
      withCredentials: !0,
      url: Te + '/v1/account/pin/unlock',
      timeout: 10000
    },
    Le = {
      withCredentials: !0,
      url: Te + '/v1/account/pin/lock',
      timeout: 10000
    },
    De = function () {
      return be(pe.httpService.get(Ae), ce)
    },
    we = function (e) {
      return be(pe.httpService.post(Ne, {
        pin: e
      }), ce)
    },
    Oe = function () {
      return be(pe.httpService.post(Le), ce)
    },
    ke = (
      null !== (Se = H.EnvironmentUrls.apiGatewayCdnUrl) &&
      void 0 !== Se ? Se : 'URL_NOT_FOUND'
    ) + '/captcha';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(_e || (_e = {}));
    var Re,
    Pe,
    Me = {
      url: ke + '/v1/metadata',
      timeout: 60000
    },
    xe = function () {
      return be(pe.httpService.get(Me, {
      }), _e)
    },
    Ve = null !== (Re = H.EnvironmentUrls.accountSettingsApi) &&
    void 0 !== Re ? Re : 'URL_NOT_FOUND';
    !function (e) {
      e[e.FEATURE_DISABLED = 2] = 'FEATURE_DISABLED',
      e[e.TOO_MANY_ACCOUNTS_ON_EMAIL = 3] = 'TOO_MANY_ACCOUNTS_ON_EMAIL',
      e[e.TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL = 6] = 'TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL',
      e[e.INVALID_EMAIL_ADDRESS = 9] = 'INVALID_EMAIL_ADDRESS'
    }(Pe || (Pe = {}));
    var He,
    We,
    Ue = {
      withCredentials: !0,
      url: Ve + '/v1/email',
      timeout: 10000
    },
    Ge = {
      withCredentials: !0,
      url: Ve + '/v1/email',
      timeout: 10000
    },
    ze = function (e) {
      return be(
        pe.httpService.post(Ue, {
          emailAddress: e,
          skipVerificationEmail: !0
        }),
        Pe
      )
    },
    Fe = function () {
      return be(pe.httpService.get(Ge), Pe)
    },
    Be = null !== (He = H.EnvironmentUrls.gamesApi) &&
    void 0 !== He ? He : 'URL_NOT_FOUND';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(We || (We = {}));
    var qe,
    Ze = {
      url: Be + '/v1/games',
      timeout: 10000
    },
    je = function (e) {
      return be(pe.httpService.get(Ze, {
        universeIds: e
      }), We)
    };
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(qe || (qe = {}));
    var Ye,
    Ke,
    Je = {
      withCredentials: !0,
      url: '/my/settings/json',
      timeout: 10000
    },
    Xe = function () {
      return be(pe.httpService.get(Je, {
      }), qe)
    },
    Qe = (
      null !== (Ye = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Ye ? Ye : 'URL_NOT_FOUND'
    ) + '/otp-service';
    !function (e) {
      e[e.NO_ERROR = 0] = 'NO_ERROR',
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.INVALID_CODE = 2] = 'INVALID_CODE',
      e[e.INVALID_SESSION_TOKEN = 3] = 'INVALID_SESSION_TOKEN',
      e[e.CODE_EXPIRED = 4] = 'CODE_EXPIRED',
      e[e.UNVALIDATED_SESSION_TOKEN = 5] = 'UNVALIDATED_SESSION_TOKEN',
      e[e.TOO_MANY_REQUESTS = 6] = 'TOO_MANY_REQUESTS',
      e[e.CONTACT_MALFORMED = 7] = 'CONTACT_MALFORMED',
      e[e.VPN_REQUIRED = 8] = 'VPN_REQUIRED',
      e[e.UNAUTHENTICATED = 9] = 'UNAUTHENTICATED',
      e[e.METHOD_UNAVAILABLE = 10] = 'METHOD_UNAVAILABLE'
    }(Ke || (Ke = {}));
    var $e,
    et,
    tt,
    nt = {
      withCredentials: !0,
      url: Qe + '/v1/sendCodeForUser',
      timeout: 10000
    },
    rt = {
      withCredentials: !0,
      url: Qe + '/v1/resendCode',
      timeout: 10000
    },
    at = {
      withCredentials: !0,
      url: Qe + '/v1/validateCode',
      timeout: 10000
    },
    it = {
      withCredentials: !0,
      url: Qe + '/v1/metadata',
      timeout: 10000
    };
    !function (e) {
      e.Unset = 'Unset',
      e.Email = 'Email'
    }($e || ($e = {})),
    function (e) {
      e.Reauth = 'Reauth',
      e.Challenge = 'Challenge'
    }(et || (et = {})),
    function (e) {
      e.Default = 'Default'
    }(tt || (tt = {}));
    var ot,
    lt,
    ct = function (e) {
      return be(
        pe.httpService.post(
          nt,
          {
            contactType: e,
            origin: et.Reauth,
            messageVariant: tt.Default
          }
        ),
        Ke
      )
    },
    ut = function (e, t) {
      return be(
        pe.httpService.post(rt, {
          contactType: e,
          origin: et.Reauth,
          otpSessionToken: t
        }),
        Ke
      )
    },
    st = function (e, t, n) {
      return be(
        pe.httpService.post(
          at,
          {
            contactType: e,
            origin: et.Reauth,
            passCode: n,
            otpSessionToken: t
          }
        ),
        Ke
      )
    },
    dt = function (e) {
      return be(pe.httpService.get(it, {
        Origin: e
      }), Ke)
    },
    pt = null !== (ot = H.EnvironmentUrls.authApi) &&
    void 0 !== ot ? ot : 'URL_NOT_FOUND';
    !function (e) {
      e[e.FLOODED = 2] = 'FLOODED',
      e[e.INVALID_PASSWORD = 7] = 'INVALID_PASSWORD',
      e[e.INVALID_CURRENT_PASSWORD = 8] = 'INVALID_CURRENT_PASSWORD',
      e[e.PIN_LOCKED = 9] = 'PIN_LOCKED'
    }(lt || (lt = {}));
    var ht,
    ft = {
      withCredentials: !0,
      url: pt + '/v2/user/passwords/change',
      timeout: 10000
    };
    !function (e) {
      e[e.USER_DOES_NOT_HAVE_EMAIL = 22] = 'USER_DOES_NOT_HAVE_EMAIL'
    }(ht || (ht = {}));
    var vt,
    mt = {
      withCredentials: !0,
      url: pt + '/v2/passwords/reset/send-prompted',
      timeout: 10000
    };
    !function (e) {
      e[e.VALID_PASSWORD = 0] = 'VALID_PASSWORD',
      e[e.WEAK_PASSWORD = 1] = 'WEAK_PASSWORD',
      e[e.SHORT_PASSWORD = 2] = 'SHORT_PASSWORD',
      e[e.PASSWORD_SAME_AS_USERNAME = 3] = 'PASSWORD_SAME_AS_USERNAME',
      e[e.FORBIDDEN_PASSWORD = 4] = 'FORBIDDEN_PASSWORD',
      e[e.DUMB_STRINGS = 5] = 'DUMB_STRINGS'
    }(vt || (vt = {}));
    var yt,
    Et,
    gt = {
      withCredentials: !0,
      url: pt + '/v2/passwords/validate',
      timeout: 10000
    },
    Ct = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    bt = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    It = function (e, t) {
      return be(pe.httpService.post(ft, {
        currentPassword: e,
        newPassword: t
      }), lt)
    },
    Tt = function () {
      return be(pe.httpService.post(mt), ht)
    },
    St = function (e, t) {
      return Ct(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return bt(
              this,
              (
                function (n) {
                  return [2,
                  be(pe.httpService.post(gt, {
                    username: e,
                    password: t
                  }), null).then(
                    (function (e) {
                      return me(e, (function (e) {
                        return Ce(vt, e.code)
                      }))
                    })
                  )]
                }
              )
            )
          }
        )
      )
    },
    _t = null !== (yt = H.EnvironmentUrls.accountInformationApi) &&
    void 0 !== yt ? yt : 'URL_NOT_FOUND';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Et || (Et = {}));
    var At,
    Nt,
    Lt = {
      withCredentials: !0,
      url: _t + '/v1/phone',
      timeout: 10000
    },
    Dt = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    wt = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Ot = function () {
      return Dt(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return wt(
              this,
              (function (e) {
                return [2,
                be(pe.httpService.get(Lt, {
                }), Et)]
              })
            )
          }
        )
      )
    },
    kt = null !== (At = H.EnvironmentUrls.authApi) &&
    void 0 !== At ? At : 'URL_NOT_FOUND';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Nt || (Nt = {}));
    var Rt,
    Pt,
    Mt,
    xt,
    Vt,
    Ht = {
      withCredentials: !0,
      url: kt + '/v1/' + 'palisades-live/is-live',
      timeout: 10000
    },
    Wt = {
      withCredentials: !0,
      url: kt + '/v1/' + 'palisades-live/disconnect',
      timeout: 10000
    },
    Ut = function () {
      return be(pe.httpService.get(Ht, {
      }), Nt)
    },
    Gt = function () {
      return be(pe.httpService.post(Wt, {
      }), Nt)
    },
    zt = (
      null !== (Rt = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Rt ? Rt : 'URL_NOT_FOUND'
    ) + '/account-security-service';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.REQUEST_TYPE_WAS_INVALID = 2] = 'REQUEST_TYPE_WAS_INVALID',
      e[e.PROMPT_ASSIGNMENT_WAS_NOT_UPDATED = 3] = 'PROMPT_ASSIGNMENT_WAS_NOT_UPDATED',
      e[e.UNKNOWN_PROMPT_TYPE = 4] = 'UNKNOWN_PROMPT_TYPE'
    }(Pt || (Pt = {})),
    function (e) {
      e.TEXT_ONLY_BANNER = 'DISPLAY_TYPE_TEXT_ONLY_BANNER'
    }(Mt || (Mt = {})),
    function (e) {
      e.GLOBAL = 'PAGE_RESTRICTION_GLOBAL',
      e.HOME_PAGE_ONLY = 'PAGE_RESTRICTION_HOME_PAGE'
    }(xt || (xt = {})),
    function (e) {
      e.CHANGE_PASSWORD__SUSPECTED_COMPROMISE = 'PROMPT_TYPE_CHANGE_PASSWORD__SUSPECTED_COMPROMISE',
      e.CHANGE_PASSWORD__BREACHED_CREDENTIAL = 'PROMPT_TYPE_CHANGE_PASSWORD__BREACHED_CREDENTIAL',
      e.AUTHENTICATOR_UPSELL = 'PROMPT_TYPE_AUTHENTICATOR_UPSELL',
      e.ACCOUNT_RESTORES_POLICY_UPDATE = 'PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE',
      e.ACCOUNT_RESTORES_POLICY_UPDATE_V2 = 'PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V2',
      e.ACCOUNT_RESTORES_POLICY_UPDATE_V3 = 'PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V3',
      e.ACCOUNT_RESTORES_POLICY_UPSELL = 'PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPSELL',
      e.BROADER_AUTHENTICATOR_UPSELL = 'PROMPT_TYPE_BROADER_AUTHENTICATOR_UPSELL',
      e.EMAIL_2SV_UPSELL = 'PROMPT_TYPE_EMAIL_2SV_UPSELL'
    }(Vt || (Vt = {}));
    var Ft,
    Bt = {
      withCredentials: !0,
      url: zt + '/v1/prompt-assignments',
      timeout: 10000
    };
    !function (e) {
      e.DISMISS_PROMPT = 'DISMISS_PROMPT',
      e.DISABLE_PROMPT = 'DISABLE_PROMPT'
    }(Ft || (Ft = {}));
    var qt,
    Zt,
    jt = {
      withCredentials: !0,
      url: zt + '/v1/prompt-assignments',
      timeout: 10000
    },
    Yt = function () {
      return (
        Yt = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Kt = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Jt = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Xt = function () {
      return Kt(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var e;
            return Jt(
              this,
              (
                function (t) {
                  switch (t.label) {
                    case 0:
                      return [4,
                      be(pe.httpService.get(Bt, {
                        shouldReturnMetadata: !0
                      }), Pt)];
                    case 1:
                      return (e = t.sent()).isError ? [
                        2,
                        e
                      ] : [
                        2,
                        e = Yt(
                          Yt({
                          }, e),
                          {
                            value: e.value.filter(
                              (
                                function (e) {
                                  return e.isGeneric ? Object.values(Mt).includes(e.metadata.displayType) : Object.values(Vt).includes(e.promptType)
                                }
                              )
                            )
                          }
                        )
                      ]
                  }
                }
              )
            )
          }
        )
      )
    },
    Qt = function (e, t) {
      return be(pe.httpService.post(jt, {
        action: e,
        promptType: t
      }), Pt)
    },
    $t = (
      null !== (qt = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== qt ? qt : 'URL_NOT_FOUND'
    ) + '/proof-of-space';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.INTERNAL_ERROR = 1] = 'INTERNAL_ERROR',
      e[e.INVALID_REQUEST = 2] = 'INVALID_REQUEST',
      e[e.INVALID_SESSION = 3] = 'INVALID_SESSION'
    }(Zt || (Zt = {}));
    var en,
    tn,
    nn,
    rn = {
      withCredentials: !0,
      url: $t + '/v1/verify',
      timeout: 10000
    },
    an = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    on = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    ln = function (e, t) {
      return an(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return on(
              this,
              (
                function (n) {
                  return [2,
                  be(pe.httpService.post(rn, {
                    challengeId: e,
                    solution: t
                  }), Zt)]
                }
              )
            )
          }
        )
      )
    },
    cn = (
      null !== (en = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== en ? en : 'URL_NOT_FOUND'
    ) + '/proof-of-work-service';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.REQUEST_INVALID = 1] = 'REQUEST_INVALID',
      e[e.SESSION_INACTIVE = 2] = 'SESSION_INACTIVE'
    }(tn || (tn = {})),
    function (e) {
      e[e.TIME_LOCK = 0] = 'TIME_LOCK'
    }(nn || (nn = {}));
    var un,
    sn,
    dn = {
      withCredentials: !0,
      url: cn + '/v1/pow-puzzle',
      timeout: 10000
    },
    pn = {
      withCredentials: !0,
      url: cn + '/v1/pow-puzzle',
      timeout: 10000
    },
    hn = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    fn = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    vn = function (e) {
      return be(pe.httpService.get(dn, {
        sessionID: e
      }), tn)
    },
    mn = function (e, t) {
      return hn(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return fn(
              this,
              (
                function (n) {
                  return [2,
                  be(pe.httpService.post(pn, {
                    sessionID: e,
                    solution: t
                  }), tn)]
                }
              )
            )
          }
        )
      )
    },
    yn = (
      null !== (un = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== un ? un : 'URL_NOT_FOUND'
    ) + '/reauthentication-service';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.REQUEST_TYPE_WAS_INVALID = 2] = 'REQUEST_TYPE_WAS_INVALID',
      e[e.PASSWORD_INCORRECT = 3] = 'PASSWORD_INCORRECT',
      e[e.OTP_EMAIL_REDEEM_FAILURE = 4] = 'OTP_EMAIL_REDEEM_FAILURE'
    }(sn || (sn = {}));
    var En,
    gn,
    Cn = {
      withCredentials: !0,
      url: yn + '/v1/token/generate',
      timeout: 10000
    },
    bn = function (e) {
      return be(pe.httpService.post(Cn, e), sn)
    },
    In = (
      null !== (En = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== En ? En : 'URL_NOT_FOUND'
    ) + '/rostile';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.INTERNAL_ERROR = 1] = 'INTERNAL_ERROR',
      e[e.INVALID_REQUEST = 2] = 'INVALID_REQUEST',
      e[e.INVALID_SESSION = 3] = 'INVALID_SESSION'
    }(gn || (gn = {}));
    var Tn,
    Sn,
    _n,
    An,
    Nn = {
      withCredentials: !0,
      url: In + '/v1/verify',
      timeout: 10000
    },
    Ln = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Dn = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    wn = function (e, t) {
      return Ln(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return Dn(
              this,
              (
                function (n) {
                  return [2,
                  be(pe.httpService.post(Nn, {
                    challengeId: e,
                    solution: t
                  }), gn)]
                }
              )
            )
          }
        )
      )
    },
    On = (
      null !== (Tn = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Tn ? Tn : 'URL_NOT_FOUND'
    ) + '/account-security-service';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.REQUEST_TYPE_WAS_INVALID = 2] = 'REQUEST_TYPE_WAS_INVALID',
      e[e.SECURITY_QUESTIONS_DISABLED = 3] = 'SECURITY_QUESTIONS_DISABLED',
      e[e.SESSION_INACTIVE = 4] = 'SESSION_INACTIVE',
      e[e.QUESTION_NOT_FOUND = 5] = 'QUESTION_NOT_FOUND',
      e[e.ANSWER_WRONG_FORMAT = 6] = 'ANSWER_WRONG_FORMAT'
    }(Sn || (Sn = {})),
    function (e) {
      e[e.INVALID = 0] = 'INVALID',
      e[e.MOST_RECENT_GAMES_PLAYED = 1] = 'MOST_RECENT_GAMES_PLAYED'
    }(_n || (_n = {})),
    function (e) {
      e[e.PICK_ALL_CORRECT_CHOICES = 0] = 'PICK_ALL_CORRECT_CHOICES',
      e[e.PICK_C_CORRECT_CHOICES = 1] = 'PICK_C_CORRECT_CHOICES'
    }(An || (An = {}));
    var kn,
    Rn,
    Pn,
    Mn,
    xn,
    Vn = {
      withCredentials: !0,
      url: On + '/v1/security-question',
      timeout: 10000
    },
    Hn = {
      withCredentials: !0,
      url: On + '/v1/security-question',
      timeout: 10000
    },
    Wn = function (e, t) {
      return be(pe.httpService.get(Vn, {
        userId: e,
        sessionId: t
      }), Sn)
    },
    Un = function (e, t, n) {
      return be(pe.httpService.post(Hn, {
        userId: e,
        answer: t,
        sessionId: n
      }), Sn)
    },
    Gn = 'URL_NOT_FOUND',
    zn = null !== (kn = H.EnvironmentUrls.apiGatewayUrl) &&
    void 0 !== kn ? kn : Gn,
    Fn = null !== (Rn = H.EnvironmentUrls.authApi) &&
    void 0 !== Rn ? Rn : Gn,
    Bn = zn + '/token-metadata-service';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.REQUEST_TYPE_WAS_INVALID = 2] = 'REQUEST_TYPE_WAS_INVALID',
      e[e.ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN = 3] = 'ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN'
    }(Pn || (Pn = {})),
    function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN'
    }(Mn || (Mn = {})),
    function (e) {
      e.UNKNOWN = 'Unknown',
      e.APP = 'App',
      e.BROWSER = 'Browser',
      e.STUDIO = 'Studio'
    }(xn || (xn = {}));
    var qn,
    Zn,
    jn,
    Yn,
    Kn = {
      withCredentials: !0,
      url: Bn + '/v1/sessions',
      timeout: 10000
    },
    Jn = {
      withCredentials: !0,
      url: Bn + '/v1/logout',
      timeout: 10000
    },
    Xn = {
      withCredentials: !0,
      url: Fn + '/v1/logoutfromallsessionsandreauthenticate',
      timeout: 10000
    },
    Qn = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    $n = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    er = function (e, t) {
      return Qn(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return $n(
              this,
              (
                function (n) {
                  return [2,
                  be(pe.httpService.get(Kn, {
                    nextCursor: e,
                    desiredLimit: t
                  }), Pn)]
                }
              )
            )
          }
        )
      )
    },
    tr = function (e) {
      return Qn(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return $n(
              this,
              (
                function (t) {
                  return [2,
                  be(pe.httpService.post(Jn, {
                    token: e
                  }), Pn)]
                }
              )
            )
          }
        )
      )
    },
    nr = function (e) {
      return Qn(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return $n(
              this,
              (
                function (t) {
                  return [2,
                  be(pe.httpService.post(Xn, {
                    secureAuthenticationIntent: e
                  }), Mn)]
                }
              )
            )
          }
        )
      )
    },
    rr = null !== (qn = H.EnvironmentUrls.thumbnailsApi) &&
    void 0 !== qn ? qn : 'URL_NOT_FOUND';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Zn || (Zn = {})),
    function (e) {
      e.PNG = 'Png',
      e.JPEG = 'Jpeg'
    }(jn || (jn = {})),
    function (e) {
      e.ERROR = 'Error',
      e.COMPLETED = 'Completed',
      e.IN_REVIEW = 'InReview',
      e.PENDING = 'Pending',
      e.BLOCKED = 'Blocked'
    }(Yn || (Yn = {}));
    var ar,
    ir,
    or,
    lr,
    cr = {
      url: rr + '/v1/games/icons',
      timeout: 10000
    },
    ur = function (e, t, n, r) {
      return be(
        pe.httpService.get(cr, {
          universeIds: e,
          size: t,
          format: n,
          isCircular: r
        }),
        Zn
      )
    },
    sr = CoreRobloxUtilities,
    dr = 'URL_NOT_FOUND',
    pr = null !== (ar = H.EnvironmentUrls.twoStepVerificationApi) &&
    void 0 !== ar ? ar : dr,
    hr = null !== (ir = H.EnvironmentUrls.economyApi) &&
    void 0 !== ir ? ir : dr,
    fr = null !== (or = H.EnvironmentUrls.tradesApi) &&
    void 0 !== or ? or : dr,
    vr = 10000;
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.INVALID_CHALLENGE_ID = 1] = 'INVALID_CHALLENGE_ID',
      e[e.INVALID_USER_ID = 2] = 'INVALID_USER_ID',
      e[e.INVALID_EMAIL = 3] = 'INVALID_EMAIL',
      e[e.INVALID_PASSWORD = 4] = 'INVALID_PASSWORD',
      e[e.TOO_MANY_REQUESTS = 5] = 'TOO_MANY_REQUESTS',
      e[e.PIN_LOCKED = 6] = 'PIN_LOCKED',
      e[e.FEATURE_DISABLED = 7] = 'FEATURE_DISABLED',
      e[e.NOT_ALLOWED = 8] = 'NOT_ALLOWED',
      e[e.INVALID_CONFIGURATION = 9] = 'INVALID_CONFIGURATION',
      e[e.INVALID_CODE = 10] = 'INVALID_CODE',
      e[e.CONFIGURATION_ALREADY_ENABLED = 11] = 'CONFIGURATION_ALREADY_ENABLED',
      e[e.INVALID_SETUP_TOKEN = 12] = 'INVALID_SETUP_TOKEN',
      e[e.REAUTHENTICATION_REQUIRED = 13] = 'REAUTHENTICATION_REQUIRED',
      e[e.INVALID_PHONE_NUMBER = 15] = 'INVALID_PHONE_NUMBER',
      e[e.EXCEEDED_REGISTERED_KEYS_LIMIT = 16] = 'EXCEEDED_REGISTERED_KEYS_LIMIT',
      e[e.INVALID_CREDENTIAL_NICKNAME = 17] = 'INVALID_CREDENTIAL_NICKNAME',
      e[e.AUTHENTICATOR_CODE_ALREADY_USED = 18] = 'AUTHENTICATOR_CODE_ALREADY_USED',
      e[e.CHALLENGE_DENIED = 19] = 'CHALLENGE_DENIED',
      e[e.CROSS_DEVICE_DIALOG_EXPIRED = 20] = 'CROSS_DEVICE_DIALOG_EXPIRED'
    }(lr || (lr = {}));
    var mr,
    yr,
    Er = {
      url: pr + '/v1/metadata',
      withCredentials: !0,
      timeout: vr
    },
    gr = function (e) {
      return {
        withCredentials: !0,
        url: pr + '/v1/users/' + e + '/configuration/email/enable',
        timeout: vr
      }
    },
    Cr = function (e) {
      return {
        withCredentials: !0,
        url: pr + '/v1/users/' + e + '/configuration/authenticator/enable-verify',
        timeout: vr
      }
    },
    br = function (e) {
      return {
        withCredentials: !0,
        url: pr + '/v1/users/' + e + '/configuration/sms/enable',
        timeout: vr
      }
    },
    Ir = function (e) {
      return {
        withCredentials: !0,
        url: pr + '/v1/users/' + e + '/configuration/security-key/enable-verify',
        timeout: vr
      }
    },
    Tr = {
      withCredentials: !0,
      url: hr + '/v2/spend-friction/two-step-verification/status',
      timeout: vr
    },
    Sr = {
      withCredentials: !0,
      url: fr + '/v1/trade-friction/two-step-verification/status',
      timeout: vr
    },
    _r = {
      withCredentials: !0,
      url: hr + '/v2/resale-friction/two-step-verification/status',
      timeout: vr
    },
    Ar = {
      withCredentials: !0,
      url: hr + '/v2/spend-friction/two-step-verification/generate',
      timeout: vr
    },
    Nr = {
      withCredentials: !0,
      url: fr + '/v1/trade-friction/two-step-verification/generate',
      timeout: vr
    },
    Lr = {
      withCredentials: !0,
      url: hr + '/v2/resale-friction/two-step-verification/generate',
      timeout: vr
    },
    Dr = {
      withCredentials: !0,
      url: hr + '/v2/spend-friction/two-step-verification/redeem',
      timeout: vr
    },
    wr = {
      withCredentials: !0,
      url: fr + '/v1/trade-friction/two-step-verification/redeem',
      timeout: vr
    },
    Or = {
      withCredentials: !0,
      url: hr + '/v2/resale-friction/two-step-verification/redeem',
      timeout: vr
    },
    kr = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Rr = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Pr = sr.cryptoUtil.generateSecureAuthIntent,
    Mr = function (e) {
      return be(pe.httpService.get(Er, e || {
      }), lr)
    },
    xr = function (e, t) {
      return be(
        pe.httpService.get(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration',
              timeout: vr
            }
          }(e),
          t ||
          {
          }
        ),
        lr
      )
    },
    Vr = function (e) {
      return kr(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var t;
            return Rr(
              this,
              (
                function (n) {
                  switch (n.label) {
                    case 0:
                      return [4,
                      Pr()];
                    case 1:
                      return t = n.sent(),
                      [
                        2,
                        be(pe.httpService.post(gr(e), {
                          secureAuthenticationIntent: t
                        }), lr)
                      ]
                  }
                }
              )
            )
          }
        )
      )
    },
    Hr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/email/send-code',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Wr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/email/verify',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Ur = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/email/disable',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr
      )
    },
    Gr = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/authenticator/enable',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr
      )
    },
    zr = function (e, t, n) {
      return kr(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var r;
            return Rr(
              this,
              (
                function (a) {
                  switch (a.label) {
                    case 0:
                      return [4,
                      Pr()];
                    case 1:
                      return r = a.sent(),
                      [
                        2,
                        be(
                          pe.httpService.post(Cr(e), {
                            setupToken: t,
                            code: n,
                            secureAuthenticationIntent: r
                          }),
                          lr
                        )
                      ]
                  }
                }
              )
            )
          }
        )
      )
    },
    Fr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/authenticator/verify',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Br = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/authenticator/disable',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr
      )
    },
    qr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/recovery-codes/verify',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Zr = function (e) {
      return be(
        pe.httpService.get(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/recovery-codes',
              timeout: vr
            }
          }(e)
        ),
        lr
      )
    },
    jr = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/recovery-codes/regenerate',
              timeout: vr
            }
          }(e),
          {
            password: 'password'
          }
        ),
        lr
      )
    },
    Yr = function (e) {
      return kr(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var t;
            return Rr(
              this,
              (
                function (n) {
                  switch (n.label) {
                    case 0:
                      return [4,
                      Pr()];
                    case 1:
                      return t = n.sent(),
                      [
                        2,
                        be(pe.httpService.post(br(e), {
                          secureAuthenticationIntent: t
                        }), lr)
                      ]
                  }
                }
              )
            )
          }
        )
      )
    },
    Kr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/sms/send-code',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Jr = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/sms/verify',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Xr = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/sms/disable',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr
      )
    },
    Qr = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/security-key/enable',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr,
        (
          function (e) {
            return {
              creationOptions: JSON.parse(e.creationOptions),
              sessionId: e.sessionId
            }
          }
        )
      )
    },
    $r = function (e, t, n, r) {
      return kr(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var a;
            return Rr(
              this,
              (
                function (i) {
                  switch (i.label) {
                    case 0:
                      return [4,
                      Pr()];
                    case 1:
                      return a = i.sent(),
                      [
                        2,
                        be(
                          pe.httpService.post(
                            Ir(e),
                            {
                              sessionId: t,
                              credentialNickname: n,
                              attestationResponse: r,
                              secureAuthenticationIntent: a
                            }
                          ),
                          lr
                        )
                      ]
                  }
                }
              )
            )
          }
        )
      )
    },
    ea = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/security-key/verify-start',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    ta = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/security-key/verify-finish',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    na = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/security-key/disable',
              timeout: vr
            }
          }(e),
          {
            credentialNicknames: t
          }
        ),
        lr
      )
    },
    ra = function (e) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/configuration/security-key/list',
              timeout: vr
            }
          }(e),
          {
          }
        ),
        lr
      )
    },
    aa = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/passkey/verify-start',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    ia = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/passkey/verify-finish',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    oa = function () {
      return be(pe.httpService.get(Tr, {
      }), lr)
    },
    la = function () {
      return be(pe.httpService.get(Sr, {
      }), lr)
    },
    ca = function () {
      return be(pe.httpService.get(_r, {
      }), lr)
    },
    ua = function () {
      return be(pe.httpService.post(Ar, {
      }), lr)
    },
    sa = function () {
      return be(pe.httpService.post(Nr, {
      }), lr)
    },
    da = function () {
      return be(pe.httpService.post(Lr, {
      }), lr)
    },
    pa = function (e, t) {
      return be(
        pe.httpService.post(Dr, {
          challengeToken: e,
          verificationToken: t
        }),
        lr
      )
    },
    ha = function (e, t) {
      return be(
        pe.httpService.post(wr, {
          challengeToken: e,
          verificationToken: t
        }),
        lr
      )
    },
    fa = function (e, t) {
      return be(
        pe.httpService.post(Or, {
          challengeToken: e,
          verificationToken: t
        }),
        lr
      )
    },
    va = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/cross-device/retry',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    ma = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/cross-device/verify',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    ya = function (e, t) {
      return be(
        pe.httpService.post(
          function (e) {
            return {
              withCredentials: !0,
              url: pr + '/v1/users/' + e + '/challenges/cross-device/retract',
              timeout: vr
            }
          }(e),
          t
        ),
        lr
      )
    },
    Ea = null !== (mr = H.EnvironmentUrls.universalAppConfigurationApi) &&
    void 0 !== mr ? mr : 'URL_NOT_FOUND';
    !function (e) {
      e[e.INTERNAL_ERROR = 9] = 'INTERNAL_ERROR'
    }(yr || (yr = {}));
    var ga,
    Ca,
    ba = {
      withCredentials: !0,
      url: Ea + '/v1/behaviors/account-settings-ui/content',
      timeout: 10000
    },
    Ia = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Ta = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Sa = function () {
      return Ia(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return Ta(
              this,
              (function (e) {
                return [2,
                be(pe.httpService.get(ba, {
                }), yr)]
              })
            )
          }
        )
      )
    },
    _a = null !== (ga = H.EnvironmentUrls.authApi) &&
    void 0 !== ga ? ga : 'URL_NOT_FOUND';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Ca || (Ca = {}));
    var Aa,
    Na,
    La,
    Da = {
      withCredentials: !0,
      url: _a + '/v1/xbox/connection',
      timeout: 10000
    },
    wa = {
      withCredentials: !0,
      url: _a + '/v1/xbox/disconnect',
      timeout: 10000
    },
    Oa = function () {
      return be(pe.httpService.get(Da, {
      }), Ca)
    },
    ka = function () {
      return be(pe.httpService.post(wa, {
      }), Ca)
    },
    Ra = (
      null !== (Aa = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Aa ? Aa : 'URL_NOT_FOUND'
    ) + '/account-security-service';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN',
      e[e.REQUEST_TYPE_WAS_INVALID = 2] = 'REQUEST_TYPE_WAS_INVALID',
      e[e.INVAID_METRIC_NAME = 3] = 'INVAID_METRIC_NAME',
      e[e.INVALID_METRIC_LABELS = 4] = 'INVALID_METRIC_LABELS'
    }(Na || (Na = {})),
    function (e) {
      e.Event2sv = 'event_2sv',
      e.SolveTime2sv = 'solve_time_2sv',
      e.EventCaptcha = 'event_captcha',
      e.SolveTimeCaptcha = 'solve_time_captcha',
      e.EventPat = 'event_pat',
      e.SolveTimePat = 'solve_time_pat',
      e.EventPos = 'event_pos',
      e.PuzzleComputeTimePos = 'puzzle_compute_time_pos',
      e.SolveTimePos = 'solve_time_pos',
      e.EventPow = 'event_pow',
      e.PuzzleComputeTimePow = 'puzzle_compute_time_pow',
      e.SolveTimePow = 'solve_time_pow',
      e.EventRostile = 'event_rostile',
      e.SolveTimeRostile = 'solve_time_rostile',
      e.EventSecurityQuestion = 'event_security_question',
      e.EventGeneric = 'event_generic',
      e.EventReauthentication = 'event_reauthentication',
      e.SolveTimeReauthentication = 'solve_time_reauthentication',
      e.EventDeviceIntegrity = 'event_device_integrity',
      e.SolveTimeDeviceIntegrity = 'solve_time_device_integrity',
      e.EventPhoneVerification = 'event_phone_verification',
      e.SolveTimePhoneVerification = 'solve_time_phone_verification',
      e.EventEmailVerification = 'event_email_verification',
      e.SolveTimeEmailVerification = 'solve_time_email_verification'
    }(La || (La = {}));
    var Pa,
    Ma,
    xa = {
      withCredentials: !0,
      url: Ra + '/v1/metrics/record',
      timeout: 10000
    },
    Va = function (e) {
      return be(pe.httpService.post(xa, e), Na)
    },
    Ha = (
      null !== (Pa = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Pa ? Pa : 'URL_NOT_FOUND'
    ) + '/private-access-token';
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Ma || (Ma = {}));
    var Wa,
    Ua,
    Ga = {
      withCredentials: !0,
      url: Ha + '/v1/getPATToken',
      timeout: 10000
    },
    za = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Fa = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Ba = function (e) {
      return za(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return Fa(
              this,
              (
                function (t) {
                  return [2,
                  be(pe.httpService.post(Ga, {
                    challengeId: e
                  }), Ma)]
                }
              )
            )
          }
        )
      )
    },
    qa = (
      null !== (Wa = H.EnvironmentUrls.apiGatewayUrl) &&
      void 0 !== Wa ? Wa : 'URL_NOT_FOUND'
    ) + '/challenge';
    !function (e) {
      e[e.UNKNOWN = 1] = 'UNKNOWN'
    }(Ua || (Ua = {}));
    var Za,
    ja,
    Ya = {
      withCredentials: !0,
      url: qa + '/v1/continue',
      timeout: 10000
    },
    Ka = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Ja = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Xa = function (e, t, n) {
      return Ka(
        void 0,
        void 0,
        Promise,
        (
          function () {
            return Ja(
              this,
              (
                function (r) {
                  return [2,
                  be(
                    pe.httpService.post(Ya, {
                      challengeId: e,
                      challengeType: t,
                      challengeMetadata: n
                    }),
                    Ua
                  )]
                }
              )
            )
          }
        )
      )
    },
    Qa = null !== (Za = H.EnvironmentUrls.authApi) &&
    void 0 !== Za ? Za : 'URL_NOT_FOUND',
    $a = 10000;
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.EXCEEDED_REGISTERED_KEYS_LIMIT = 1] = 'EXCEEDED_REGISTERED_KEYS_LIMIT',
      e[e.FEATURE_DISABLED = 2] = 'FEATURE_DISABLED',
      e[e.INVALID_CREDENTIAL_NICKNAME = 3] = 'INVALID_CREDENTIAL_NICKNAME'
    }(ja || (ja = {}));
    var ei,
    ti = {
      withCredentials: !0,
      url: Qa + '/v1/passkey/StartRegistration',
      timeout: $a
    },
    ni = {
      withCredentials: !0,
      url: Qa + '/v1/passkey/FinishRegistration',
      timeout: $a
    },
    ri = {
      withCredentials: !0,
      url: Qa + '/v1/passkey/DeleteCredentialBatch',
      timeout: $a
    },
    ai = {
      withCredentials: !0,
      url: Qa + '/v1/passkey/ListCredentials',
      timeout: $a
    },
    ii = function () {
      return be(
        pe.httpService.post(ti, {
        }),
        ja,
        (
          function (e) {
            return {
              creationOptions: JSON.parse(e.creationOptions),
              sessionId: e.sessionId
            }
          }
        )
      )
    },
    oi = function (e, t, n) {
      return be(
        pe.httpService.post(ni, {
          sessionId: e,
          credentialNickname: t,
          attestationResponse: n
        }),
        ja
      )
    },
    li = function (e) {
      return be(pe.httpService.post(ri, {
        credentialNicknames: e
      }), ja)
    },
    ci = function () {
      return be(pe.httpService.post(ai, {
        all: !0
      }), ja)
    };
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.CANCELLATION_ERROR = 1] = 'CANCELLATION_ERROR',
      e[e.INTERRUPTED_ERROR = 2] = 'INTERRUPTED_ERROR',
      e[e.INVALID_REQUEST = 3] = 'INVALID_REQUEST',
      e[e.JSON_EXCEPTION = 4] = 'JSON_EXCEPTION',
      e[e.CREDENTIALS_PROTOCOL_NOT_SUPPORTED = 5] = 'CREDENTIALS_PROTOCOL_NOT_SUPPORTED',
      e[e.NO_CREDENTIALS_FOUND = 6] = 'NO_CREDENTIALS_FOUND',
      e[e.INVALID_STATE_ERROR = 11] = 'INVALID_STATE_ERROR'
    }(ei || (ei = {}));
    var ui,
    si = function (e) {
      return e.code
    },
    di = function (e, t, n) {
      return Ie(
        sr.hybridResponseService.getNativeResponse(e, t, n),
        ei,
        si,
        (
          function (e) {
            if (null === e) return null;
            var t = JSON.parse(e);
            if (void 0 !== t.errorCode) throw {
              name: 'getNativeResponse Error',
              message: t.errorMsg,
              code: t.errorCode
            };
            return !(
              H.DeviceMeta &&
              (0, H.DeviceMeta) ().isInApp &&
              (0, H.DeviceMeta) ().isAndroidApp
            ) ? sr.fido2Util.formatCredentialAuthenticationResponseApp(e) : e
          }
        )
      )
    },
    pi = function (e) {
      return Ie(navigator.credentials.get(e), ei).then(
        (
          function (e) {
            return me(
              e,
              (
                function (e) {
                  return null === e ? null : sr.fido2Util.formatCredentialAuthenticationResponseWeb(e)
                }
              )
            )
          }
        )
      )
    },
    hi = function () {
      this.accountPin = e,
      this.captcha = t,
      this.email = r,
      this.fido2 = _,
      this.games = a,
      this.metrics = b,
      this.myAccount = i,
      this.otp = o,
      this.password = l,
      this.phone = c,
      this.playstation = u,
      this.promptAssignments = s,
      this.securityQuestions = v,
      this.sessionManagement = m,
      this.reauthentication = h,
      this.rostile = f,
      this.thumbnails = y,
      this.twoStepVerification = E,
      this.universalAppConfiguration = g,
      this.proofOfSpace = d,
      this.proofOfWork = p,
      this.xbox = C,
      this.privateAccessToken = I,
      this.genericChallenge = T,
      this.authApi = S
    },
    fi = ReactUtilities,
    vi = 'Captcha:',
    mi = {
      captcha: 'captcha',
      captchaInitiated: 'captchaInitiated',
      captchaV2Experimentation: 'captchaV2Experimentation'
    },
    yi = {
      visible: 'visible',
      hidden: 'hidden',
      error: 'error'
    },
    Ei = {
      triggered: 'Triggered',
      initialized: 'Initialized',
      suppressed: 'Suppressed',
      displayed: 'Displayed',
      success: 'Success',
      providerError: 'FailedToLoad',
      metadataError: 'FailedToLoadMetadata'
    },
    gi = {
      solveTime: 'SolveTime'
    },
    Ci = {
      Login: 'ACTION_TYPE_WEB_LOGIN',
      AppLogin: 'ACTION_TYPE_WEB_LOGIN',
      Signup: 'ACTION_TYPE_WEB_SIGNUP',
      AppSignup: 'ACTION_TYPE_WEB_SIGNUP',
      JoinGroup: 'ACTION_TYPE_GROUP_JOIN',
      GroupWallPost: 'ACTION_TYPE_GROUP_WALL_POST',
      ResetPassword: 'ACTION_TYPE_WEB_RESET_PASSWORD',
      ToyCodeRedeem: 'ACTION_TYPE_WEB_GAMECARD_REDEMPTION',
      SupportRequest: 'ACTION_TYPE_SUPPORT_REQUEST',
      FollowUser: 'ACTION_TYPE_FOLLOW_USER',
      Generic: 'ACTION_TYPE_GENERIC_CHALLENGE',
      GameCardRedeem: 'ACTION_TYPE_WEB_GAMECARD_REDEMPTION',
      AssetComment: 'ACTION_TYPE_ASSET_COMMENT',
      Marketplace: 'ACTION_TYPE_MARKETPLACE'
    },
    bi = 'V2',
    Ii = ReactStyleGuide,
    Ti = function (e) {
      var t = e.titleText,
      n = e.children;
      return se().createElement(
        'div',
        {
          className: 'inline-challenge'
        },
        t &&
        se().createElement('h4', {
          className: 'inline-challenge-title'
        }, t),
        se().createElement('div', {
          className: 'inline-challenge-content'
        }, n)
      )
    },
    Si = function (e) {
      var t = e.children;
      return se().createElement('div', {
        className: 'inline-challenge-body'
      }, t)
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 2] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 3] = 'SHOW_MODAL_CHALLENGE'
    }(ui || (ui = {}));
    var _i,
    Ai,
    Ni = function () {
      return (
        Ni = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Li = function (e, t) {
      var n,
      r = Ni({
      }, e);
      switch (t.type) {
        case ui.SET_CHALLENGE_COMPLETED:
          return r.onChallengeCompletedData = t.onChallengeCompletedData,
          r.isModalVisible = !1,
          r;
        case ui.SET_CHALLENGE_INVALIDATED:
          return r.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: (n = e.resources, t.errorCode, n.Message.Error.Default)
          },
          r.isModalVisible = !1,
          r;
        case ui.HIDE_MODAL_CHALLENGE:
          return r.isModalVisible = !1,
          r;
        case ui.SHOW_MODAL_CHALLENGE:
          return r.isModalVisible = !0,
          r;
        default:
          return e
      }
    },
    Di = (0, ue.createContext) (null),
    wi = function (e) {
      var t = e.actionType,
      n = e.appType,
      r = e.renderInline,
      a = e.dataExchangeBlob,
      i = e.unifiedCaptchaId,
      o = e.requestService,
      l = e.metadataResponse,
      c = e.eventService,
      u = e.metricsService,
      s = e.translate,
      d = e.onChallengeDisplayed,
      p = e.onChallengeCompleted,
      h = e.onChallengeInvalidated,
      f = e.onModalChallengeAbandoned,
      v = e.children,
      m = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Action: {
                  PleaseTryAgain: e('Action.PleaseTryAgain'),
                  Reload: e('Action.Reload')
                },
                Description: {
                  VerifyingYouAreNotBot: e('Description.VerifyingYouAreNotBot')
                },
                Message: {
                  Error: {
                    Default: e('Message.Error.Default')
                  }
                }
              }
            }(s)
          }
        )
      ) [0],
      y = (0, ue.useState) (
        (
          function () {
            return {
              actionType: t,
              appType: n,
              dataExchangeBlob: a,
              unifiedCaptchaId: i,
              renderInline: r,
              metadataResponse: l,
              resources: m,
              requestService: o,
              eventService: c,
              metricsService: u,
              onChallengeDisplayed: d,
              onModalChallengeAbandoned: f,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !1
            }
          }
        )
      ) [0],
      E = (0, ue.useReducer) (Li, y),
      g = E[0],
      C = E[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== g.onChallengeCompletedData &&
            null === g.onChallengeInvalidatedData &&
            p(g.onChallengeCompletedData)
          }
        ),
        [
          g.onChallengeCompletedData,
          g.onChallengeInvalidatedData,
          p
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== g.onChallengeInvalidatedData &&
            null === g.onChallengeCompletedData &&
            h(g.onChallengeInvalidatedData)
          }
        ),
        [
          g.onChallengeCompletedData,
          g.onChallengeInvalidatedData,
          h
        ]
      ),
      se().createElement(Di.Provider, {
        value: {
          state: g,
          dispatch: C
        }
      }, v)
    },
    Oi = function () {
      var e = (0, ue.useContext) (Di);
      if (null === e) throw new Error('CaptchaContext was not provided in the current scope');
      return e
    };
    !function (e) {
      e.Login = 'Login',
      e.AppLogin = 'AppLogin',
      e.Signup = 'Signup',
      e.AppSignup = 'AppSignup',
      e.JoinGroup = 'JoinGroup',
      e.GroupWallPost = 'GroupWallPost',
      e.ResetPassword = 'ResetPassword',
      e.ToyCodeRedeem = 'ToyCodeRedeem',
      e.GameCardRedeem = 'GameCardRedeem',
      e.FollowUser = 'FollowUser',
      e.Generic = 'Generic',
      e.SupportRequest = 'SupportRequest',
      e.AssetComment = 'AssetComment',
      e.Marketplace = 'Marketplace'
    }(_i || (_i = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Ai || (Ai = {}));
    var ki,
    Ri,
    Pi = {},
    Mi = (
      (ki = document.createElement('div')).className = 'challenge-captcha-body',
      ki.id = 'challenge-captcha-element',
      ki
    ),
    xi = function () {
      var e = Oi(),
      t = e.state,
      n = t.actionType,
      r = t.appType,
      a = t.dataExchangeBlob,
      i = t.unifiedCaptchaId,
      o = t.renderInline,
      l = t.resources,
      c = t.metadataResponse,
      u = t.onChallengeDisplayed,
      s = t.onModalChallengeAbandoned,
      d = t.isModalVisible,
      p = e.dispatch,
      h = (0, ue.useState) (!0),
      f = h[0],
      v = h[1],
      m = function () {
        p({
          type: ui.HIDE_MODAL_CHALLENGE
        }),
        null !== s &&
        s((function () {
          return p({
            type: ui.SHOW_MODAL_CHALLENGE
          })
        }))
      };
      (0, ue.useEffect) (
        (
          function () {
            !function () {
              v(!0);
              var e = c.funCaptchaPublicKeys,
              t = [];
              Object.keys(H.CaptchaConstants.funCaptchaPublicKeyMap).forEach(
                (
                  function (n) {
                    var r = n,
                    a = H.CaptchaConstants.funCaptchaPublicKeyMap[r],
                    i = e[a];
                    void 0 !== i &&
                    t.push({
                      Type: r,
                      PublicKey: i
                    })
                  }
                )
              ),
              H.FunCaptcha.addCaptchaTypes(t, !1),
              null !== r &&
              H.FunCaptcha.setPerAppTypeLoggingEnabled(!0, r),
              Object.assign(
                Pi,
                {
                  shownCb: function () {
                    v(!1),
                    p({
                      type: ui.SHOW_MODAL_CHALLENGE
                    }),
                    u({
                      displayed: !0
                    })
                  },
                  errorCb: function () {
                    p({
                      type: ui.SET_CHALLENGE_INVALIDATED,
                      errorCode: Ai.UNKNOWN
                    })
                  },
                  successCb: function (e, t) {
                    p({
                      type: ui.SET_CHALLENGE_COMPLETED,
                      onChallengeCompletedData: {
                        captchaToken: e,
                        captchaId: t
                      }
                    })
                  }
                }
              ),
              H.FunCaptcha.render(
                Mi.id,
                {
                  cType: n,
                  inputParams: {
                    dataExchange: a,
                    unifiedCaptchaId: i
                  },
                  returnTokenInSuccessCb: !0,
                  shownCb: function () {
                    return Pi.shownCb &&
                    Pi.shownCb()
                  },
                  errorCb: function (e) {
                    return Pi.errorCb &&
                    Pi.errorCb(e)
                  },
                  successCb: function (e, t) {
                    return Pi.successCb &&
                    Pi.successCb(e, t)
                  }
                }
              )
            }()
          }
        ),
        []
      );
      var y,
      E = (
        y = Mi,
        se().createElement(
          'div',
          {
            ref: function (e) {
              return null == e ? void 0 : e.insertAdjacentElement('afterend', y)
            }
          }
        )
      );
      return o ? se().createElement(
        Ti,
        {
          titleText: l.Description.VerifyingYouAreNotBot
        },
        se().createElement(
          Si,
          null,
          f &&
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin challenge-captcha-body'
            }
          ),
          E
        )
      ) : se().createElement(
        ue.Fragment,
        null,
        !d &&
        se().createElement('div', {
          style: {
            display: 'none'
          }
        }, E),
        se().createElement(
          Ii.Modal,
          {
            className: 'modal-modern modal-modern-challenge-captcha',
            show: d,
            onHide: m,
            backdrop: 'static'
          },
          se().createElement(
            Ii.Modal.Body,
            null,
            se().createElement(
              'button',
              {
                type: 'button',
                className: 'challenge-captcha-close-button',
                onClick: m,
                disabled: !1
              },
              se().createElement('span', {
                className: 'icon-close'
              })
            ),
            f &&
            se().createElement(
              'span',
              {
                className: 'spinner spinner-default spinner-no-margin challenge-captcha-body'
              }
            ),
            E
          )
        )
      )
    },
    Vi = 'fc_nosuppress',
    Hi = new URLSearchParams(window.location.search).get(Vi),
    Wi = 'fc_suppress',
    Ui = new URLSearchParams(window.location.search).get(Wi),
    Gi = null !== Hi ? '&fc_nosuppress=' + Hi : null !== Ui ? '&fc_suppress=' + Ui : '',
    zi = 0,
    Fi = function () {
      var e = Oi(),
      t = e.state,
      n = t.actionType,
      r = t.dataExchangeBlob,
      a = t.unifiedCaptchaId,
      i = t.renderInline,
      o = t.resources,
      l = t.metadataResponse,
      c = t.eventService,
      u = t.metricsService,
      s = t.onChallengeDisplayed,
      d = t.onModalChallengeAbandoned,
      p = t.isModalVisible,
      h = t.onChallengeCompletedData,
      f = t.onChallengeInvalidatedData,
      v = e.dispatch,
      m = (0, ue.useState) ((function () {
        var e = zi;
        return zi += 1,
        e.toString()
      })) [0],
      y = (0, ue.useState) (''),
      E = y[0],
      g = y[1],
      C = (0, ue.useState) (!0),
      b = C[0],
      I = C[1],
      T = (0, ue.useState) (!1),
      S = T[0],
      _ = T[1],
      A = (0, ue.useState) (null),
      N = A[0],
      L = A[1],
      D = (0, ue.useState) (!1),
      w = D[0],
      O = D[1],
      k = (0, ue.useRef) (null),
      R = function () {
        v({
          type: ui.HIDE_MODAL_CHALLENGE
        }),
        null !== d &&
        d((function () {
          return v({
            type: ui.SHOW_MODAL_CHALLENGE
          })
        }))
      },
      P = (0, ue.useCallback) (
        (
          function (e, t) {
            return v({
              type: ui.SET_CHALLENGE_COMPLETED,
              onChallengeCompletedData: {
                captchaToken: e,
                captchaId: t
              }
            })
          }
        ),
        [
          v
        ]
      ),
      M = (0, ue.useCallback) (
        (
          function () {
            return v({
              type: ui.SET_CHALLENGE_INVALIDATED,
              errorCode: Ai.UNKNOWN
            })
          }
        ),
        [
          v
        ]
      ),
      x = (0, ue.useCallback) (
        (
          function () {
            I(!1),
            v({
              type: ui.SHOW_MODAL_CHALLENGE
            }),
            _(!0),
            s({
              displayed: !0
            }),
            L(Date.now())
          }
        ),
        [
          v,
          s
        ]
      );
      (0, ue.useEffect) (
        (
          function () {
            !function () {
              I(!0);
              var e = l.funCaptchaPublicKeys;
              g(e[Ci[n]] || ''),
              u.fireTriggeredEvent()
            }()
          }
        ),
        []
      ),
      (0, ue.useEffect) (
        (
          function () {
            var e = function (e) {
              try {
                var t = JSON.parse(e.data);
                if (!Object.prototype.hasOwnProperty.call(t, 'arkoseIframeId')) return;
                if (t.arkoseIframeId !== m) return;
                switch (t.eventId) {
                  case 'challenge-complete':
                    P(t.payload.captchaToken, a),
                    u.fireSuccessEvent();
                    var r = 0;
                    N &&
                    (r = Date.now() - N),
                    c.sendCaptchaRedeemEvent(n, r, !0, t.payload.captchaToken, a, bi);
                    break;
                  case 'challenge-error':
                    M(),
                    u.fireProviderErrorEvent(),
                    c.sendCaptchaInitiatedEvent(n, yi.error, t.payload.captchaToken || '', a, t.payload.error, bi);
                    break;
                  case 'challenge-shown':
                    x(),
                    u.fireDisplayedEvent(),
                    c.sendCaptchaInitiatedEvent(n, yi.visible, t.payload.captchaToken, a, null, bi);
                    break;
                  case 'challenge-resize':
                    null !== k.current &&
                    (
                      k.current.height = t.payload.height,
                      k.current.width = t.payload.width
                    );
                    break;
                  case 'challenge-suppressed':
                    u.fireSuppressedEvent(),
                    c.sendCaptchaInitiatedEvent(n, yi.hidden, t.payload.captchaToken, a, null, bi);
                    break;
                  case 'challenge-ready':
                    u.fireInitializedEvent()
                }
              } catch (t) {
                if (t instanceof SyntaxError) return;
                u.fireProviderErrorEvent(),
                console.error(vi, 'Got bad event data:', e.data),
                c.sendCaptchaInitiatedEvent(n, yi.error, null, a, String(t), bi)
              }
            };
            return window.addEventListener('message', e),
            O(!0),
            function () {
              O(!1),
              window.removeEventListener('message', e)
            }
          }
        ),
        [
          k,
          N,
          n,
          a,
          c,
          u,
          m,
          P,
          M,
          x
        ]
      );
      var V = encodeURIComponent(r),
      H = se().createElement(
        'div',
        {
          className: 'challenge-captcha-body',
          style: {
            height: b ? 0 : void 0
          }
        },
        se().createElement(
          'iframe',
          {
            ref: k,
            title: 'Challenge',
            id: 'arkose-iframe',
            src: '/arkose/iframe?publicKey=' + E + '&dataExchangeBlob=' + V + '&arkoseIframeId=' + m + Gi,
            style: {
              border: 'none',
              background: 'transparent'
            }
          }
        )
      ),
      W = h ||
      f;
      return i ? se().createElement(
        Ti,
        {
          titleText: o.Description.VerifyingYouAreNotBot
        },
        se().createElement(
          Si,
          null,
          (b || !w) &&
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin challenge-captcha-body'
            }
          ),
          w &&
          H
        )
      ) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern modal-modern-challenge-captcha',
          show: (p || !S) &&
          !W,
          style: {
            display: S ? 'block' : 'none'
          },
          onHide: R,
          backdrop: !!S &&
          'static'
        },
        se().createElement(
          Ii.Modal.Body,
          null,
          se().createElement(
            'button',
            {
              type: 'button',
              className: 'challenge-captcha-close-button',
              onClick: R,
              disabled: !1
            },
            se().createElement('span', {
              className: 'icon-close'
            })
          ),
          (b || !w) &&
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin challenge-captcha-body'
            }
          ),
          w &&
          H
        )
      )
    },
    Bi = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.actionType,
          n = e.appType,
          r = e.dataExchangeBlob,
          a = e.unifiedCaptchaId,
          i = e.captchaVersion,
          o = e.renderInline,
          l = e.requestService,
          c = e.metadataResponse,
          u = e.eventService,
          s = e.metricsService,
          d = e.translate,
          p = e.onChallengeDisplayed,
          h = e.onChallengeCompleted,
          f = e.onChallengeInvalidated,
          v = e.onModalChallengeAbandoned;
          return se().createElement(
            wi,
            {
              actionType: t,
              appType: n,
              dataExchangeBlob: r,
              unifiedCaptchaId: a,
              renderInline: o,
              requestService: l,
              translate: d,
              metadataResponse: c,
              eventService: u,
              metricsService: s,
              onChallengeDisplayed: p,
              onChallengeCompleted: h,
              onChallengeInvalidated: f,
              onModalChallengeAbandoned: v
            },
            i === bi ? se().createElement(Fi, null) : se().createElement(xi, null)
          )
        }
      ),
      {
        common: [],
        feature: 'Authentication.Captcha'
      }
    ),
    qi = function () {
      function e(e) {
        this.provider = e
      }
      return e.prototype.sendCaptchaRedeemEvent = function (e, t, n, r, a, i) {
        var o = n ? 'true' : 'false';
        W().EventStream.SendEventWithTarget(
          mi.captcha,
          e,
          {
            solveDuration: t,
            success: o,
            provider: this.provider,
            session: r ||
            '',
            ucid: a ||
            '',
            providerVersion: i
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCaptchaInitiatedEvent = function (e, t, n, r, a, i) {
        W().EventStream.SendEventWithTarget(
          mi.captchaInitiated,
          e,
          {
            type: t,
            provider: this.provider,
            ucid: r ||
            '',
            session: n ||
            '',
            message: a ||
            '',
            providerVersion: i
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCaptchaV2ExperimentationEvent = function (e, t, n, r) {
        W().EventStream.SendEventWithTarget(
          mi.captchaV2Experimentation,
          e,
          {
            btid: n,
            provider: this.provider,
            ucid: t ||
            '',
            captchaVersion: r
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Zi = function () {
      function e() {
        this.timeStore = {}
      }
      return e.prototype.start = function (e) {
        this.timeStore[e] = Date.now()
      },
      e.prototype.end = function (e) {
        var t = this.timeStore[e];
        return t ? (delete this.timeStore[e], Date.now() - t) : null
      },
      e
    }(),
    ji = window.EventTracker,
    Yi = function () {
      function e(e, t, n, r) {
        this.applicationType = n,
        this.requestServiceDefault = r,
        this.actionType = e,
        this.eventTimer = new Zi,
        this.provider = t,
        this.solveTimeSequenceName = '' + this.actionType + this.provider + '_' + gi.solveTime
      }
      return e.prototype.fireTriggeredEvent = function () {
        this.fireEvent(Ei.triggered),
        ji &&
        ji.start(this.appendApplicationType(this.solveTimeSequenceName)),
        this.eventTimer.start(this.solveTimeSequenceName)
      },
      e.prototype.fireInitializedEvent = function () {
        this.fireEvent(Ei.initialized)
      },
      e.prototype.fireMetadataErrorEvent = function () {
        this.fireEvent(Ei.metadataError)
      },
      e.prototype.fireSuppressedEvent = function () {
        this.fireEvent(Ei.suppressed)
      },
      e.prototype.fireDisplayedEvent = function () {
        this.fireEvent(Ei.displayed)
      },
      e.prototype.fireProviderErrorEvent = function () {
        this.fireEvent(Ei.providerError)
      },
      e.prototype.fireSuccessEvent = function () {
        this.fireEvent(Ei.success),
        ji &&
        ji.endSuccess(this.appendApplicationType(this.solveTimeSequenceName));
        var e = this.eventTimer.end(this.solveTimeSequenceName);
        null !== e &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimeCaptcha,
          value: e,
          labelValues: {
            action_type: this.actionType,
            event_type: this.provider + '_' + Ei.success,
            application_type: this.applicationType ||
            'unknown',
            version: bi
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireEvent = function (e) {
        if (ji) {
          var t = '' + this.actionType + this.provider + '_' + e;
          ji.fireEvent(this.appendApplicationType(t))
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventCaptcha,
          value: 1,
          labelValues: {
            action_type: this.actionType,
            event_type: this.provider + '_' + e,
            application_type: this.applicationType ||
            'unknown',
            version: bi
          }
        }).catch((function () {
        }))
      },
      e.prototype.appendApplicationType = function (e) {
        return this.applicationType ? e + '_' + this.applicationType : e
      },
      e
    }(),
    Ki = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Ji = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Xi = new hi,
    Qi = function (e) {
      var t = e.containerId,
      n = e.actionType,
      r = e.appType,
      a = e.dataExchangeBlob,
      i = e.unifiedCaptchaId,
      o = e.renderInline,
      l = e.onChallengeDisplayed,
      c = e.onChallengeCompleted,
      u = e.onChallengeInvalidated,
      s = e.onModalChallengeAbandoned;
      return Ki(
        void 0,
        void 0,
        void 0,
        (
          function () {
            var e,
            d,
            p,
            h,
            f,
            v,
            m,
            y,
            E;
            return Ji(
              this,
              (
                function (g) {
                  switch (g.label) {
                    case 0:
                      return null === (e = document.getElementById(t)) ? [
                        3,
                        2
                      ] : (
                        (0, de.unmountComponentAtNode) (e),
                        d = new Yi(n, 'FunCaptcha', r, Xi),
                        [
                          4,
                          Xi.captcha.getMetadata()
                        ]
                      );
                    case 1:
                      if ((p = g.sent()).isError) return d.fireMetadataErrorEvent(),
                      console.error(
                        vi,
                        'Got error code ' + ((null === (E = p.error) || void 0 === E ? void 0 : E.toString()) || 'null') + ' fetching metadata'
                      ),
                      [
                        2,
                        !1
                      ];
                      if (
                        h = new qi('FunCaptcha'),
                        f = 'V1',
                        !0 !== p.value.disableCaptchaVersionExperiment
                      ) {
                        v = H.Cookies.getBrowserTrackerId() ||
                        '',
                        m = '';
                        try {
                          m = String((C = v, (new oe).finalize(C).toString()))
                        } catch (e) {
                          console.error(vi, e)
                        }
                        y = m.slice( - 2) ||
                        '00',
                        parseInt(y, 16) % 1 == 0 &&
                        (f = 'V2'),
                        h.sendCaptchaV2ExperimentationEvent(n, i, v, f)
                      }
                      return (0, de.render) (
                        se().createElement(
                          Bi,
                          {
                            actionType: n,
                            appType: r,
                            dataExchangeBlob: a,
                            unifiedCaptchaId: i,
                            renderInline: o,
                            requestService: Xi,
                            metadataResponse: p.value,
                            eventService: h,
                            metricsService: d,
                            captchaVersion: f,
                            onChallengeDisplayed: l,
                            onChallengeCompleted: c,
                            onChallengeInvalidated: u,
                            onModalChallengeAbandoned: s
                          }
                        ),
                        e
                      ),
                      [
                        2,
                        !0
                      ];
                    case 2:
                      return [2,
                      Promise.resolve(!1)]
                  }
                  var C
                }
              )
            )
          }
        )
      )
    },
    $i = 'accountSecurityChallengeDeviceIntegrityEvent',
    eo = {
      challengeInitialized: 'challengeInitialized',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned'
    },
    to = {
      challengeInitialized: 'ChallengeInitialized',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned'
    },
    no = {
      challengeSolveTime: 'ChallengeSolveTime'
    },
    ro = 'NATIVE_EXCEPTION',
    ao = 'INVALID_NATIVE_RESPONSE',
    io = 'NOT_IN_APP';
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED'
    }(Ri || (Ri = {}));
    var oo,
    lo = function () {
      return (
        lo = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    co = function (e, t) {
      var n = lo({
      }, e);
      switch (t.type) {
        case Ri.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n;
        case Ri.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData,
          n;
        default:
          return e
      }
    },
    uo = (0, ue.createContext) (null),
    so = function (e) {
      var t = e.challengeId,
      n = e.requestHash,
      r = e.integrityType,
      a = e.renderInline,
      i = e.eventService,
      o = e.metricsService,
      l = e.translate,
      c = e.onChallengeDisplayed,
      u = e.onChallengeCompleted,
      s = e.onChallengeInvalidated,
      d = e.onModalChallengeAbandoned,
      p = e.children,
      h = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Description: {
                  VerificationError: e('Description.VerificationError'),
                  VerificationSuccess: e('Description.VerificationSuccess'),
                  VerifyingYouAreNotBot: e('Description.VerifyingYouAreNotBot')
                }
              }
            }(l)
          }
        )
      ) [0],
      f = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              requestHash: n,
              integrityType: r,
              renderInline: a,
              resources: h,
              eventService: i,
              metricsService: o,
              onChallengeDisplayed: c,
              onModalChallengeAbandoned: d,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !1
            }
          }
        )
      ) [0],
      v = (0, ue.useReducer) (co, f),
      m = v[0],
      y = v[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeCompletedData &&
            null === m.onChallengeInvalidatedData &&
            u(m.onChallengeCompletedData)
          }
        ),
        [
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          u
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === m.onChallengeCompletedData &&
            null !== m.onChallengeInvalidatedData &&
            s(m.onChallengeInvalidatedData)
          }
        ),
        [
          i,
          o,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          s
        ]
      ),
      se().createElement(uo.Provider, {
        value: {
          state: m,
          dispatch: y
        }
      }, p)
    },
    po = function () {
      var e = (0, ue.useContext) (uo);
      if (null === e) throw new Error(
        'DeviceIntegrityContext was not provided in the current scope'
      );
      return e
    },
    ho = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    fo = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    vo = function () {
      var e = po(),
      t = e.state,
      n = t.integrityType,
      r = t.requestHash,
      a = t.renderInline,
      i = t.resources,
      o = t.metricsService,
      l = t.eventService,
      c = e.dispatch,
      u = (0, ue.useCallback) (
        (
          function () {
            return ho(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  var e,
                  t,
                  a,
                  i;
                  return fo(
                    this,
                    (
                      function (u) {
                        switch (u.label) {
                          case 0:
                            return u.trys.push([0,
                            4,
                            ,
                            5]),
                            H.DeviceMeta &&
                            (0, H.DeviceMeta) ().isInApp ? (
                              e = {
                                requestHash: r,
                                timeoutMillis: 450
                              },
                              [
                                4,
                                sr.hybridResponseService.getNativeResponse(
                                  sr.hybridResponseService.FeatureTarget.GET_INTEGRITY_TOKEN,
                                  {
                                    deviceIntegrityParams: JSON.stringify(e)
                                  },
                                  1200
                                )
                              ]
                            ) : [
                              3,
                              2
                            ];
                          case 1:
                            return null !== (t = u.sent()) ? (
                              a = JSON.parse(t),
                              c({
                                type: Ri.SET_CHALLENGE_COMPLETED,
                                onChallengeCompletedData: {
                                  integrityType: n,
                                  redemptionToken: a.token
                                }
                              }),
                              l.sendChallengeCompletedEvent(a.result),
                              o.fireChallengeCompletedEvent(),
                              [
                                2
                              ]
                            ) : (
                              l.sendChallengeInvalidatedEvent(ao),
                              o.fireChallengeInvalidatedEvent(),
                              [
                                3,
                                3
                              ]
                            );
                          case 2:
                            l.sendChallengeInvalidatedEvent(io),
                            o.fireChallengeInvalidatedEvent(),
                            u.label = 3;
                          case 3:
                            return [3,
                            5];
                          case 4:
                            return i = u.sent(),
                            console.error(i),
                            l.sendChallengeInvalidatedEvent(ro),
                            o.fireChallengeInvalidatedEvent(),
                            [
                              3,
                              5
                            ];
                          case 5:
                            return c({
                              type: Ri.SET_CHALLENGE_COMPLETED,
                              onChallengeCompletedData: {
                                integrityType: n,
                                redemptionToken: ''
                              }
                            }),
                            [
                              2
                            ]
                        }
                      }
                    )
                  )
                }
              )
            )
          }
        ),
        [
          c,
          n,
          r,
          l,
          o
        ]
      );
      return (0, ue.useEffect) ((function () {
        u()
      }), []),
      a ? se().createElement(
        Ti,
        {
          titleText: i.Description.VerifyingYouAreNotBot
        },
        se().createElement(
          Si,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin'
            }
          )
        )
      ) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          backdrop: 'static'
        },
        se().createElement(
          Ii.Modal.Body,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin'
            }
          )
        )
      )
    },
    mo = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.requestHash,
          r = e.integrityType,
          a = e.renderInline,
          i = e.eventService,
          o = e.metricsService,
          l = e.translate,
          c = e.onChallengeDisplayed,
          u = e.onChallengeCompleted,
          s = e.onChallengeInvalidated,
          d = e.onModalChallengeAbandoned;
          return se().createElement(
            so,
            {
              challengeId: t,
              requestHash: n,
              integrityType: r,
              renderInline: a,
              eventService: i,
              metricsService: o,
              translate: l,
              onChallengeDisplayed: c,
              onChallengeCompleted: u,
              onChallengeInvalidated: s,
              onModalChallengeAbandoned: d
            },
            se().createElement(vo, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.DeviceIntegrityChallenge'
      }
    ),
    yo = function () {
      function e(e, t) {
        this.challengeId = e,
        this.integrityType = t
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          $i,
          eo.challengeInitialized,
          {
            challengeId: this.challengeId,
            integrityType: this.integrityType
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          $i,
          eo.challengeCompleted,
          {
            challengeId: this.challengeId,
            integrityType: this.integrityType,
            result: e
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          $i,
          eo.challengeInvalidated,
          {
            challengeId: this.challengeId,
            integrityType: this.integrityType,
            result: e
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Eo = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'DeviceIntegrity_' + no.challengeSolveTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(to.challengeInitialized),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(to.challengeCompleted),
        this.fireSolveTimeEvent(to.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(to.challengeInvalidated),
        this.fireSolveTimeEvent(to.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(to.challengeAbandoned),
        this.fireSolveTimeEvent(to.challengeAbandoned)
      },
      e.prototype.fireEvent = function (e) {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventDeviceIntegrity,
          value: 1,
          labelValues: {
            event_type: 'DeviceIntegrity_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimeDeviceIntegrity,
          value: t,
          labelValues: {
            event_type: 'DeviceIntegrity_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }();
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(oo || (oo = {}));
    var go,
    Co = new hi,
    bo = function (e) {
      var t = e.containerId,
      n = e.challengeId,
      r = e.requestHash,
      a = e.integrityType,
      i = e.appType,
      o = e.renderInline,
      l = e.onChallengeDisplayed,
      c = e.onChallengeCompleted,
      u = e.onChallengeInvalidated,
      s = e.onModalChallengeAbandoned,
      d = document.getElementById(t);
      if (null !== d) {
        (0, de.unmountComponentAtNode) (d);
        var p = new yo(n, a),
        h = new Eo(i, Co);
        return (0, de.render) (
          se().createElement(
            mo,
            {
              challengeId: n,
              requestHash: r,
              renderInline: o,
              integrityType: a,
              eventService: p,
              metricsService: h,
              onChallengeDisplayed: l,
              onChallengeCompleted: c,
              onChallengeInvalidated: u,
              onModalChallengeAbandoned: s
            }
          ),
          d
        ),
        p.sendChallengeInitializedEvent(),
        h.fireChallengeInitializedEvent(),
        !0
      }
      return !1
    },
    Io = function (e) {
      var t = e.positiveButton,
      n = e.negativeButton,
      r = e.children;
      return se().createElement(
        'div',
        {
          className: 'inline-challenge-footer'
        },
        se().createElement(
          'div',
          {
            className: 'inline-challenge-footer-buttons'
          },
          null !== n &&
          se().createElement(
            'button',
            {
              type: 'button',
              className: 'btn-secondary-md inline-challenge-footer-button',
              'aria-label': n.label,
              disabled: !n.enabled,
              onClick: n.action
            },
            n.content
          ),
          se().createElement(
            'button',
            {
              type: 'button',
              className: 'btn-cta-md inline-challenge-footer-button',
              'aria-label': t.label,
              disabled: !t.enabled,
              onClick: t.action
            },
            t.content
          )
        ),
        r
      )
    },
    To = function (e) {
      var t = e.positiveButton,
      n = e.negativeButton,
      r = e.children;
      return se().createElement(
        Ii.Modal.Footer,
        null,
        se().createElement(
          'div',
          {
            className: 'modal-modern-footer-buttons'
          },
          null !== n &&
          se().createElement(
            'button',
            {
              type: 'button',
              className: 'btn-secondary-md modal-modern-footer-button',
              'aria-label': n.label,
              disabled: !n.enabled,
              onClick: n.action
            },
            n.content
          ),
          se().createElement(
            'button',
            {
              type: 'button',
              className: 'btn-cta-md modal-modern-footer-button',
              'aria-label': t.label,
              disabled: !t.enabled,
              onClick: t.action
            },
            t.content
          )
        ),
        r
      )
    };
    !function (e) {
      e.BACK = 'BACK',
      e.CLOSE = 'CLOSE',
      e.HIDDEN = 'HIDDEN'
    }(go || (go = {}));
    var So,
    _o,
    Ao = function (e) {
      var t = e.headerText,
      n = e.buttonType,
      r = e.buttonAction,
      a = e.buttonEnabled,
      i = e.headerInfo;
      return se().createElement(
        Ii.Modal.Header,
        {
          useBaseBootstrapComponent: !0
        },
        function (e, t, n) {
          switch (e) {
            case go.BACK:
              return se().createElement(
                'button',
                {
                  type: 'button',
                  className: 'modal-modern-header-button',
                  onClick: t,
                  disabled: !n
                },
                se().createElement('span', {
                  className: 'icon-back'
                })
              );
            case go.CLOSE:
              return se().createElement(
                'button',
                {
                  type: 'button',
                  className: 'modal-modern-header-button',
                  onClick: t,
                  disabled: !n
                },
                se().createElement('span', {
                  className: 'icon-close'
                })
              );
            case go.HIDDEN:
            default:
              return se().createElement('div', null)
          }
        }(n, r, a),
        se().createElement(Ii.Modal.Title, null, t),
        se().createElement('div', {
          className: 'modal-modern-header-info'
        }, i)
      )
    };
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(So || (So = {})),
    function (e) {
      e.ForceAuthenticator = 'ForceAuthenticator',
      e.ForceTwoStepVerification = 'ForceTwoStepVerification',
      e.BlockSession = 'BlockSession'
    }(_o || (_o = {}));
    var No,
    Lo = {
      common: [],
      feature: 'Feature.ForceAuthenticator'
    },
    Do = {
      common: [],
      feature: 'Feature.ForceTwoStepVerification'
    },
    wo = {
      common: [],
      feature: 'Feature.Denied'
    },
    Oo = [
      'Action.Setup',
      'Description.Reason',
      'Description.SetupAuthenticator',
      'Header.TurnOnAuthenticator'
    ],
    ko = [
      'ForceTwoStepVerification.Header',
      'ForceTwoStepVerification.Body',
      'ForceTwoStepVerification.Action'
    ],
    Ro = [
      'Denied.Header',
      'Denied.Body',
      'Denied.Action'
    ];
    !function (e) {
      e[e.HIDE_MODAL_CHALLENGE = 0] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 1] = 'SHOW_MODAL_CHALLENGE'
    }(No || (No = {}));
    var Po = function () {
      return (
        Po = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Mo = function (e, t) {
      var n = Po({
      }, e);
      switch (t.type) {
        case No.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case No.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    xo = (0, ue.createContext) (null),
    Vo = function (e) {
      var t = e.forceActionRedirectChallengeConfig,
      n = e.renderInline,
      r = e.translate,
      a = e.onModalChallengeAbandoned,
      i = e.children,
      o = (0, ue.useState) ((function () {
        return t.getTranslationResources(r)
      })) [0],
      l = (0, ue.useState) (
        (
          function () {
            return {
              renderInline: n,
              resources: o,
              redirectURLSignifier: t.redirectURLSignifier,
              onModalChallengeAbandoned: a,
              isModalVisible: !0
            }
          }
        )
      ) [0],
      c = (0, ue.useReducer) (Mo, l),
      u = c[0],
      s = c[1];
      return se().createElement(xo.Provider, {
        value: {
          state: u,
          dispatch: s
        }
      }, i)
    },
    Ho = function () {
      var e = (0, ue.useContext) (xo);
      if (null === e) throw new Error(
        'ForceActionRedirectContext was not provided in the current scope'
      );
      return e
    },
    Wo = function () {
      var e = Ho(),
      t = e.state,
      n = t.renderInline,
      r = t.redirectURLSignifier,
      a = t.resources,
      i = t.onModalChallengeAbandoned,
      o = t.isModalVisible,
      l = e.dispatch,
      c = function () {
        l({
          type: No.HIDE_MODAL_CHALLENGE
        }),
        null !== i &&
        i((function () {
          return l({
            type: No.SHOW_MODAL_CHALLENGE
          })
        }))
      },
      u = {
        content: a.Action,
        label: a.Action,
        enabled: !0,
        action: function () {
          return function (e, t) {
            if ('blocksession' === e) t();
             else {
              var n = '/my/account#!/security?src=' + e;
              window.top &&
              window.top !== window.self ? window.top.location.href = n : window.open(n, '_self')
            }
          }(r, c)
        }
      },
      s = function () {
        var e = n ? Si : Ii.Modal.Body,
        t = n ? Io : To,
        r = n ? 'inline-challenge-lock-icon' : 'modal-lock-icon';
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(
            e,
            null,
            se().createElement('div', {
              className: r
            }),
            se().createElement('p', null, a.Body)
          ),
          se().createElement(t, {
            positiveButton: u,
            negativeButton: null
          })
        )
      };
      return n ? se().createElement(Ti, {
        titleText: a.Header
      }, s()) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          show: o,
          onHide: c,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: a.Header,
            buttonType: go.CLOSE,
            buttonAction: c,
            buttonEnabled: !0,
            headerInfo: null
          }
        ),
        s()
      )
    },
    Uo = function (e) {
      var t = e.renderInline,
      n = e.forceActionRedirectChallengeConfig,
      r = e.translate,
      a = e.onModalChallengeAbandoned;
      return se().createElement(
        Vo,
        {
          renderInline: t,
          forceActionRedirectChallengeConfig: n,
          translate: r,
          onModalChallengeAbandoned: a
        },
        se().createElement(Wo, null)
      )
    },
    Go = (
      new hi,
      function (e) {
        var t = e.containerId,
        n = e.renderInline,
        r = e.forceActionRedirectChallengeType,
        a = e.onModalChallengeAbandoned,
        i = document.getElementById(t),
        o = function (e) {
          switch (e) {
            case _o.ForceAuthenticator:
              return {
                redirectURLSignifier: 'forceauthenticator',
                translationConfig: Lo,
                translationResourceKeys: Oo,
                getTranslationResources: function (e) {
                  return {
                    Header: e('Header.TurnOnAuthenticator'),
                    Body: e('Description.SetupAuthenticator') + '\n' + e('Description.Reason'),
                    Action: e('Action.Setup')
                  }
                }
              };
            case _o.ForceTwoStepVerification:
              return {
                redirectURLSignifier: 'forcetwostepverification',
                translationConfig: Do,
                translationResourceKeys: ko,
                getTranslationResources: function (e) {
                  return {
                    Header: e('ForceTwoStepVerification.Header'),
                    Body: e('ForceTwoStepVerification.Body'),
                    Action: e('ForceTwoStepVerification.Action')
                  }
                }
              };
            case _o.BlockSession:
              return {
                redirectURLSignifier: 'blocksession',
                translationConfig: wo,
                translationResourceKeys: Ro,
                getTranslationResources: function (e) {
                  return {
                    Header: e('Denied.Header'),
                    Body: e('Denied.Body'),
                    Action: e('Denied.Action')
                  }
                }
              };
            default:
              throw new Error('Invalid ForceActionRedirectChallengeType')
          }
        }(r);
        if (null !== i) {
          (0, de.unmountComponentAtNode) (i);
          var l = (0, fi.withTranslations) (Uo, o.translationConfig);
          return (0, de.render) (
            se().createElement(
              l,
              {
                forceActionRedirectChallengeConfig: o,
                renderInline: n,
                onModalChallengeAbandoned: a
              }
            ),
            i
          ),
          !0
        }
        return !1
      }
    );
    var zo = function () {
      return (
        zo = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    };
    function Fo(e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    }
    function Bo(e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(l) {
        return function (c) {
          return function (l) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; i && (i = 0, l[0] && (o = 0)), o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & l[0] ? r.return : l[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, l[1])).done
              ) return a;
              switch (r = 0, a && (l = [
                  2 & l[0],
                  a.value
                ]), l[0]) {
                case 0:
                case 1:
                  a = l;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: l[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = l[1],
                  l = [
                    0
                  ];
                  continue;
                case 7:
                  l = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                    o.label = l[1];
                    break
                  }
                  if (6 === l[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = l;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(l);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              l = t.call(e, o)
            } catch (e) {
              l = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & l[0]) throw l[1];
            return {
              value: l[0] ? l[1] : void 0,
              done: !0
            }
          }([l,
          c])
        }
      }
    }
    Object.create;
    function qo(e, t, n) {
      if (n || 2 === arguments.length) for (var r, a = 0, i = t.length; a < i; a++) !r &&
      a in t ||
      (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
      return e.concat(r || Array.prototype.slice.call(t))
    }
    Object.create;
    var Zo = '3.4.1';
    function jo(e, t) {
      return new Promise((function (n) {
        return setTimeout(n, e, t)
      }))
    }
    function Yo(e) {
      return !!e &&
      'function' == typeof e.then
    }
    function Ko(e, t) {
      try {
        var n = e();
        Yo(n) ? n.then((function (e) {
          return t(!0, e)
        }), (function (e) {
          return t(!1, e)
        })) : t(!0, n)
      } catch (e) {
        t(!1, e)
      }
    }
    function Jo(e, t, n) {
      return void 0 === n &&
      (n = 16),
      Fo(
        this,
        void 0,
        void 0,
        (
          function () {
            var r,
            a,
            i;
            return Bo(
              this,
              (
                function (o) {
                  switch (o.label) {
                    case 0:
                      r = Date.now(),
                      a = 0,
                      o.label = 1;
                    case 1:
                      return a < e.length ? (t(e[a], a), (i = Date.now()) >= r + n ? (r = i, [
                        4,
                        jo(0)
                      ]) : [
                        3,
                        3
                      ]) : [
                        3,
                        4
                      ];
                    case 2:
                      o.sent(),
                      o.label = 3;
                    case 3:
                      return ++a,
                      [
                        3,
                        1
                      ];
                    case 4:
                      return [2]
                  }
                }
              )
            )
          }
        )
      )
    }
    function Xo(e) {
      e.then(void 0, (function () {
      }))
    }
    function Qo(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ],
      t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] + t[3],
      n[2] += n[3] >>> 16,
      n[3] &= 65535,
      n[2] += e[2] + t[2],
      n[1] += n[2] >>> 16,
      n[2] &= 65535,
      n[1] += e[1] + t[1],
      n[0] += n[1] >>> 16,
      n[1] &= 65535,
      n[0] += e[0] + t[0],
      n[0] &= 65535,
      [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ]
    }
    function $o(e, t) {
      e = [
        e[0] >>> 16,
        65535 & e[0],
        e[1] >>> 16,
        65535 & e[1]
      ],
      t = [
        t[0] >>> 16,
        65535 & t[0],
        t[1] >>> 16,
        65535 & t[1]
      ];
      var n = [
        0,
        0,
        0,
        0
      ];
      return n[3] += e[3] * t[3],
      n[2] += n[3] >>> 16,
      n[3] &= 65535,
      n[2] += e[2] * t[3],
      n[1] += n[2] >>> 16,
      n[2] &= 65535,
      n[2] += e[3] * t[2],
      n[1] += n[2] >>> 16,
      n[2] &= 65535,
      n[1] += e[1] * t[3],
      n[0] += n[1] >>> 16,
      n[1] &= 65535,
      n[1] += e[2] * t[2],
      n[0] += n[1] >>> 16,
      n[1] &= 65535,
      n[1] += e[3] * t[1],
      n[0] += n[1] >>> 16,
      n[1] &= 65535,
      n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
      n[0] &= 65535,
      [
        n[0] << 16 | n[1],
        n[2] << 16 | n[3]
      ]
    }
    function el(e, t) {
      return 32 === (t %= 64) ? [
        e[1],
        e[0]
      ] : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t | e[0] >>> 32 - t
      ] : (t -= 32, [
        e[1] << t | e[0] >>> 32 - t,
        e[0] << t | e[1] >>> 32 - t
      ])
    }
    function tl(e, t) {
      return 0 === (t %= 64) ? e : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t
      ] : [
        e[1] << t - 32,
        0
      ]
    }
    function nl(e, t) {
      return [e[0] ^ t[0],
      e[1] ^ t[1]]
    }
    function rl(e) {
      return e = nl(e, [
        0,
        e[0] >>> 1
      ]),
      e = nl(e = $o(e, [
        4283543511,
        3981806797
      ]), [
        0,
        e[0] >>> 1
      ]),
      e = nl(e = $o(e, [
        3301882366,
        444984403
      ]), [
        0,
        e[0] >>> 1
      ])
    }
    function al(e, t) {
      t = t ||
      0;
      var n,
      r = (e = e || '').length % 16,
      a = e.length - r,
      i = [
        0,
        t
      ],
      o = [
        0,
        t
      ],
      l = [
        0,
        0
      ],
      c = [
        0,
        0
      ],
      u = [
        2277735313,
        289559509
      ],
      s = [
        1291169091,
        658871167
      ];
      for (n = 0; n < a; n += 16) l = [
        255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24,
        255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24
      ],
      c = [
        255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24,
        255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24
      ],
      l = el(l = $o(l, u), 31),
      i = Qo(i = el(i = nl(i, l = $o(l, s)), 27), o),
      i = Qo($o(i, [
        0,
        5
      ]), [
        0,
        1390208809
      ]),
      c = el(c = $o(c, s), 33),
      o = Qo(o = el(o = nl(o, c = $o(c, u)), 31), i),
      o = Qo($o(o, [
        0,
        5
      ]), [
        0,
        944331445
      ]);
      switch (l = [
          0,
          0
        ], c = [
          0,
          0
        ], r) {
        case 15:
          c = nl(c, tl([0,
          e.charCodeAt(n + 14)], 48));
        case 14:
          c = nl(c, tl([0,
          e.charCodeAt(n + 13)], 40));
        case 13:
          c = nl(c, tl([0,
          e.charCodeAt(n + 12)], 32));
        case 12:
          c = nl(c, tl([0,
          e.charCodeAt(n + 11)], 24));
        case 11:
          c = nl(c, tl([0,
          e.charCodeAt(n + 10)], 16));
        case 10:
          c = nl(c, tl([0,
          e.charCodeAt(n + 9)], 8));
        case 9:
          c = $o(c = nl(c, [
            0,
            e.charCodeAt(n + 8)
          ]), s),
          o = nl(o, c = $o(c = el(c, 33), u));
        case 8:
          l = nl(l, tl([0,
          e.charCodeAt(n + 7)], 56));
        case 7:
          l = nl(l, tl([0,
          e.charCodeAt(n + 6)], 48));
        case 6:
          l = nl(l, tl([0,
          e.charCodeAt(n + 5)], 40));
        case 5:
          l = nl(l, tl([0,
          e.charCodeAt(n + 4)], 32));
        case 4:
          l = nl(l, tl([0,
          e.charCodeAt(n + 3)], 24));
        case 3:
          l = nl(l, tl([0,
          e.charCodeAt(n + 2)], 16));
        case 2:
          l = nl(l, tl([0,
          e.charCodeAt(n + 1)], 8));
        case 1:
          l = $o(l = nl(l, [
            0,
            e.charCodeAt(n)
          ]), u),
          i = nl(i, l = $o(l = el(l, 31), s))
      }
      return i = Qo(i = nl(i, [
        0,
        e.length
      ]), o = nl(o, [
        0,
        e.length
      ])),
      o = Qo(o, i),
      i = Qo(i = rl(i), o = rl(o)),
      o = Qo(o, i),
      ('00000000' + (i[0] >>> 0).toString(16)).slice( - 8) + ('00000000' + (i[1] >>> 0).toString(16)).slice( - 8) + ('00000000' + (o[0] >>> 0).toString(16)).slice( - 8) + ('00000000' + (o[1] >>> 0).toString(16)).slice( - 8)
    }
    function il(e) {
      return parseInt(e)
    }
    function ol(e) {
      return parseFloat(e)
    }
    function ll(e, t) {
      return 'number' == typeof e &&
      isNaN(e) ? t : e
    }
    function cl(e) {
      return e.reduce((function (e, t) {
        return e + (t ? 1 : 0)
      }), 0)
    }
    function ul(e, t) {
      if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
      var n = 1 / t;
      return Math.round(e * n) / n
    }
    function sl(e) {
      return e &&
      'object' == typeof e &&
      'message' in e ? e : {
        message: e
      }
    }
    function dl(e) {
      return 'function' != typeof e
    }
    function pl(e, t, n) {
      var r = Object.keys(e).filter(
        (
          function (e) {
            return !function (e, t) {
              for (var n = 0, r = e.length; n < r; ++n) if (e[n] === t) return !0;
              return !1
            }(n, e)
          }
        )
      ),
      a = Array(r.length);
      return Jo(
        r,
        (
          function (n, r) {
            a[r] = function (e, t) {
              var n = new Promise(
                (
                  function (n) {
                    var r = Date.now();
                    Ko(
                      e.bind(null, t),
                      (
                        function () {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          var a = Date.now() - r;
                          if (!e[0]) return n((function () {
                            return {
                              error: sl(e[1]),
                              duration: a
                            }
                          }));
                          var i = e[1];
                          if (dl(i)) return n((function () {
                            return {
                              value: i,
                              duration: a
                            }
                          }));
                          n(
                            (
                              function () {
                                return new Promise(
                                  (
                                    function (e) {
                                      var t = Date.now();
                                      Ko(
                                        i,
                                        (
                                          function () {
                                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                            var i = a + Date.now() - t;
                                            if (!n[0]) return e({
                                              error: sl(n[1]),
                                              duration: i
                                            });
                                            e({
                                              value: n[1],
                                              duration: i
                                            })
                                          }
                                        )
                                      )
                                    }
                                  )
                                )
                              }
                            )
                          )
                        }
                      )
                    )
                  }
                )
              );
              return Xo(n),
              function () {
                return n.then((function (e) {
                  return e()
                }))
              }
            }(e[n], t)
          }
        )
      ),
      function () {
        return Fo(
          this,
          void 0,
          void 0,
          (
            function () {
              var e,
              t,
              n,
              i,
              o,
              l;
              return Bo(
                this,
                (
                  function (c) {
                    switch (c.label) {
                      case 0:
                        for (e = {}, t = 0, n = r; t < n.length; t++) i = n[t],
                        e[i] = void 0;
                        o = Array(r.length),
                        l = function () {
                          var t;
                          return Bo(
                            this,
                            (
                              function (n) {
                                switch (n.label) {
                                  case 0:
                                    return t = !0,
                                    [
                                      4,
                                      Jo(
                                        r,
                                        (
                                          function (n, r) {
                                            if (!o[r]) if (a[r]) {
                                              var i = a[r]().then((function (t) {
                                                return e[n] = t
                                              }));
                                              Xo(i),
                                              o[r] = i
                                            } else t = !1
                                          }
                                        )
                                      )
                                    ];
                                  case 1:
                                    return n.sent(),
                                    t ? [
                                      2,
                                      'break'
                                    ] : [
                                      4,
                                      jo(1)
                                    ];
                                  case 2:
                                    return n.sent(),
                                    [
                                      2
                                    ]
                                }
                              }
                            )
                          )
                        },
                        c.label = 1;
                      case 1:
                        return [5,
                        l()];
                      case 2:
                        if ('break' === c.sent()) return [3,
                        4];
                        c.label = 3;
                      case 3:
                        return [3,
                        1];
                      case 4:
                        return [4,
                        Promise.all(o)];
                      case 5:
                        return c.sent(),
                        [
                          2,
                          e
                        ]
                    }
                  }
                )
              )
            }
          )
        )
      }
    }
    function hl() {
      var e = window,
      t = navigator;
      return cl(
        ['MSCSSMatrix' in e,
        'msSetImmediate' in e,
        'msIndexedDB' in e,
        'msMaxTouchPoints' in t,
        'msPointerEnabled' in t]
      ) >= 4
    }
    function fl() {
      var e = window,
      t = navigator;
      return cl(
        ['webkitPersistentStorage' in t,
        'webkitTemporaryStorage' in t,
        0 === t.vendor.indexOf('Google'),
        'webkitResolveLocalFileSystemURL' in e,
        'BatteryManager' in e,
        'webkitMediaStream' in e,
        'webkitSpeechGrammar' in e]
      ) >= 5
    }
    function vl() {
      var e = window,
      t = navigator;
      return cl(
        ['ApplePayError' in e,
        'CSSPrimitiveValue' in e,
        'Counter' in e,
        0 === t.vendor.indexOf('Apple'),
        'getStorageUpdates' in t,
        'WebKitMediaKeys' in e]
      ) >= 4
    }
    function ml() {
      var e = window;
      return cl(
        ['safari' in e,
        !('DeviceMotionEvent' in e),
        !('ongestureend' in e),
        !('standalone' in navigator)]
      ) >= 3
    }
    function yl() {
      var e = document;
      return (
        e.exitFullscreen ||
        e.msExitFullscreen ||
        e.mozCancelFullScreen ||
        e.webkitExitFullscreen
      ).call(e)
    }
    function El() {
      var e = fl(),
      t = function () {
        var e,
        t,
        n = window;
        return cl(
          ['buildID' in navigator,
          'MozAppearance' in (
            null !== (
              t = null === (e = document.documentElement) ||
              void 0 === e ? void 0 : e.style
            ) &&
            void 0 !== t ? t : {
            }
          ),
          'onmozfullscreenchange' in n,
          'mozInnerScreenX' in n,
          'CSSMozDocumentRule' in n,
          'CanvasCaptureMediaStream' in n]
        ) >= 4
      }();
      if (!e && !t) return !1;
      var n = window;
      return cl(
        ['onorientationchange' in n,
        'orientation' in n,
        e &&
        !('SharedWorker' in n),
        t &&
        /android/i.test(navigator.appVersion)]
      ) >= 2
    }
    function gl(e) {
      var t = new Error(e);
      return t.name = e,
      t
    }
    function Cl(e, t, n) {
      var r,
      a,
      i;
      return void 0 === n &&
      (n = 50),
      Fo(
        this,
        void 0,
        void 0,
        (
          function () {
            var o,
            l;
            return Bo(
              this,
              (
                function (c) {
                  switch (c.label) {
                    case 0:
                      o = document,
                      c.label = 1;
                    case 1:
                      return o.body ? [
                        3,
                        3
                      ] : [
                        4,
                        jo(n)
                      ];
                    case 2:
                      return c.sent(),
                      [
                        3,
                        1
                      ];
                    case 3:
                      l = o.createElement('iframe'),
                      c.label = 4;
                    case 4:
                      return c.trys.push([4,
                      ,
                      10,
                      11]),
                      [
                        4,
                        new Promise(
                          (
                            function (e, n) {
                              var r = !1,
                              a = function () {
                                r = !0,
                                e()
                              };
                              l.onload = a,
                              l.onerror = function (e) {
                                r = !0,
                                n(e)
                              };
                              var i = l.style;
                              i.setProperty('display', 'block', 'important'),
                              i.position = 'absolute',
                              i.top = '0',
                              i.left = '0',
                              i.visibility = 'hidden',
                              t &&
                              'srcdoc' in l ? l.srcdoc = t : l.src = 'about:blank',
                              o.body.appendChild(l);
                              var c = function () {
                                var e,
                                t;
                                r ||
                                (
                                  'complete' === (
                                    null === (t = null === (e = l.contentWindow) || void 0 === e ? void 0 : e.document) ||
                                    void 0 === t ? void 0 : t.readyState
                                  ) ? a() : setTimeout(c, 10)
                                )
                              };
                              c()
                            }
                          )
                        )
                      ];
                    case 5:
                      c.sent(),
                      c.label = 6;
                    case 6:
                      return (
                        null === (a = null === (r = l.contentWindow) || void 0 === r ? void 0 : r.document) ||
                        void 0 === a ? void 0 : a.body
                      ) ? [
                        3,
                        8
                      ] : [
                        4,
                        jo(n)
                      ];
                    case 7:
                      return c.sent(),
                      [
                        3,
                        6
                      ];
                    case 8:
                      return [4,
                      e(l, l.contentWindow)];
                    case 9:
                      return [2,
                      c.sent()];
                    case 10:
                      return null === (i = l.parentNode) ||
                      void 0 === i ||
                      i.removeChild(l),
                      [
                        7
                      ];
                    case 11:
                      return [2]
                  }
                }
              )
            )
          }
        )
      )
    }
    function bl(e) {
      for (
        var t = function (e) {
          for (
            var t,
            n,
            r = 'Unexpected syntax \''.concat(e, '\''),
            a = /^\s*([a-z-]*)(.*)$/i.exec(e),
            i = a[1] ||
            void 0,
            o = {},
            l = /([.:#][\w-]+|\[.+?\])/gi,
            c = function (e, t) {
              o[e] = o[e] ||
              [],
              o[e].push(t)
            };
            ;
          ) {
            var u = l.exec(a[2]);
            if (!u) break;
            var s = u[0];
            switch (s[0]) {
              case '.':
                c('class', s.slice(1));
                break;
              case '#':
                c('id', s.slice(1));
                break;
              case '[':
                var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                if (!d) throw new Error(r);
                c(
                  d[1],
                  null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) &&
                  void 0 !== n ? n : ''
                );
                break;
              default:
                throw new Error(r)
            }
          }
          return [i,
          o]
        }(e),
        n = t[0],
        r = t[1],
        a = document.createElement(null != n ? n : 'div'),
        i = 0,
        o = Object.keys(r);
        i < o.length;
        i++
      ) {
        var l = o[i],
        c = r[l].join(' ');
        'style' === l ? Il(a.style, c) : a.setAttribute(l, c)
      }
      return a
    }
    function Il(e, t) {
      for (var n = 0, r = t.split(';'); n < r.length; n++) {
        var a = r[n],
        i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
        if (i) {
          var o = i[1],
          l = i[2],
          c = i[4];
          e.setProperty(o, l, c || '')
        }
      }
    }
    var Tl = [
      'monospace',
      'sans-serif',
      'serif'
    ],
    Sl = [
      'sans-serif-thin',
      'ARNO PRO',
      'Agency FB',
      'Arabic Typesetting',
      'Arial Unicode MS',
      'AvantGarde Bk BT',
      'BankGothic Md BT',
      'Batang',
      'Bitstream Vera Sans Mono',
      'Calibri',
      'Century',
      'Century Gothic',
      'Clarendon',
      'EUROSTILE',
      'Franklin Gothic',
      'Futura Bk BT',
      'Futura Md BT',
      'GOTHAM',
      'Gill Sans',
      'HELV',
      'Haettenschweiler',
      'Helvetica Neue',
      'Humanst521 BT',
      'Leelawadee',
      'Letter Gothic',
      'Levenim MT',
      'Lucida Bright',
      'Lucida Sans',
      'Menlo',
      'MS Mincho',
      'MS Outlook',
      'MS Reference Specialty',
      'MS UI Gothic',
      'MT Extra',
      'MYRIAD PRO',
      'Marlett',
      'Meiryo UI',
      'Microsoft Uighur',
      'Minion Pro',
      'Monotype Corsiva',
      'PMingLiU',
      'Pristina',
      'SCRIPTINA',
      'Segoe UI Light',
      'Serifa',
      'SimHei',
      'Small Fonts',
      'Staccato222 BT',
      'TRAJAN PRO',
      'Univers CE 55 Medium',
      'Vrinda',
      'ZWAdobeF'
    ];
    function _l(e) {
      return e.toDataURL()
    }
    var Al,
    Nl;
    function Ll() {
      var e = this;
      return function () {
        if (void 0 === Nl) {
          var e = function () {
            var t = Dl();
            wl(t) ? Nl = setTimeout(e, 2500) : (Al = t, Nl = void 0)
          };
          e()
        }
      }(),
      function () {
        return Fo(
          e,
          void 0,
          void 0,
          (
            function () {
              var e;
              return Bo(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return wl(e = Dl()) ? Al ? [
                          2,
                          qo([], Al, !0)
                        ] : (n = document).fullscreenElement ||
                        n.msFullscreenElement ||
                        n.mozFullScreenElement ||
                        n.webkitFullscreenElement ? [
                          4,
                          yl()
                        ] : [
                          3,
                          2
                        ] : [
                          3,
                          2
                        ];
                      case 1:
                        t.sent(),
                        e = Dl(),
                        t.label = 2;
                      case 2:
                        return wl(e) ||
                        (Al = e),
                        [
                          2,
                          e
                        ]
                    }
                    var n
                  }
                )
              )
            }
          )
        )
      }
    }
    function Dl() {
      var e = screen;
      return [ll(ol(e.availTop), null),
      ll(ol(e.width) - ol(e.availWidth) - ll(ol(e.availLeft), 0), null),
      ll(ol(e.height) - ol(e.availHeight) - ll(ol(e.availTop), 0), null),
      ll(ol(e.availLeft), null)]
    }
    function wl(e) {
      for (var t = 0; t < 4; ++t) if (e[t]) return !1;
      return !0
    }
    function Ol(e) {
      var t;
      return Fo(
        this,
        void 0,
        void 0,
        (
          function () {
            var n,
            r,
            a,
            i,
            o,
            l,
            c;
            return Bo(
              this,
              (
                function (u) {
                  switch (u.label) {
                    case 0:
                      for (
                        n = document,
                        r = n.createElement('div'),
                        a = new Array(e.length),
                        i = {},
                        kl(r),
                        c = 0;
                        c < e.length;
                        ++c
                      ) o = bl(e[c]),
                      kl(l = n.createElement('div')),
                      l.appendChild(o),
                      r.appendChild(l),
                      a[c] = o;
                      u.label = 1;
                    case 1:
                      return n.body ? [
                        3,
                        3
                      ] : [
                        4,
                        jo(50)
                      ];
                    case 2:
                      return u.sent(),
                      [
                        3,
                        1
                      ];
                    case 3:
                      n.body.appendChild(r);
                      try {
                        for (c = 0; c < e.length; ++c) a[c].offsetParent ||
                        (i[e[c]] = !0)
                      } finally {
                        null === (t = r.parentNode) ||
                        void 0 === t ||
                        t.removeChild(r)
                      }
                      return [2,
                      i]
                  }
                }
              )
            )
          }
        )
      )
    }
    function kl(e) {
      e.style.setProperty('display', 'block', 'important')
    }
    function Rl(e) {
      return matchMedia('(inverted-colors: '.concat(e, ')')).matches
    }
    function Pl(e) {
      return matchMedia('(forced-colors: '.concat(e, ')')).matches
    }
    function Ml(e) {
      return matchMedia('(prefers-contrast: '.concat(e, ')')).matches
    }
    function xl(e) {
      return matchMedia('(prefers-reduced-motion: '.concat(e, ')')).matches
    }
    function Vl(e) {
      return matchMedia('(dynamic-range: '.concat(e, ')')).matches
    }
    var Hl = Math,
    Wl = function () {
      return 0
    };
    var Ul = {
    default:
      [],
      apple: [
        {
          font: '-apple-system-body'
        }
      ],
      serif: [
        {
          fontFamily: 'serif'
        }
      ],
      sans: [
        {
          fontFamily: 'sans-serif'
        }
      ],
      mono: [
        {
          fontFamily: 'monospace'
        }
      ],
      min: [
        {
          fontSize: '1px'
        }
      ],
      system: [
        {
          fontFamily: 'system-ui'
        }
      ]
    };
    var Gl = {
      fonts: function () {
        return Cl(
          (
            function (e, t) {
              var n = t.document,
              r = n.body;
              r.style.fontSize = '48px';
              var a = n.createElement('div'),
              i = {},
              o = {},
              l = function (e) {
                var t = n.createElement('span'),
                r = t.style;
                return r.position = 'absolute',
                r.top = '0',
                r.left = '0',
                r.fontFamily = e,
                t.textContent = 'mmMwWLliI0O&1',
                a.appendChild(t),
                t
              },
              c = Tl.map(l),
              u = function () {
                for (
                  var e = {},
                  t = function (t) {
                    e[t] = Tl.map(
                      (
                        function (e) {
                          return function (e, t) {
                            return l('\''.concat(e, '\',').concat(t))
                          }(t, e)
                        }
                      )
                    )
                  },
                  n = 0,
                  r = Sl;
                  n < r.length;
                  n++
                ) {
                  t(r[n])
                }
                return e
              }();
              r.appendChild(a);
              for (var s = 0; s < Tl.length; s++) i[Tl[s]] = c[s].offsetWidth,
              o[Tl[s]] = c[s].offsetHeight;
              return Sl.filter(
                (
                  function (e) {
                    return t = u[e],
                    Tl.some(
                      (
                        function (e, n) {
                          return t[n].offsetWidth !== i[e] ||
                          t[n].offsetHeight !== o[e]
                        }
                      )
                    );
                    var t
                  }
                )
              )
            }
          )
        )
      },
      domBlockers: function (e) {
        var t = (void 0 === e ? {
        }
         : e).debug;
        return Fo(
          this,
          void 0,
          void 0,
          (
            function () {
              var e,
              n,
              r,
              a,
              i;
              return Bo(
                this,
                (
                  function (o) {
                    switch (o.label) {
                      case 0:
                        return vl() ||
                        El() ? (
                          l = atob,
                          e = {
                            abpIndo: [
                              '#Iklan-Melayang',
                              '#Kolom-Iklan-728',
                              '#SidebarIklan-wrapper',
                              l('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
                              '[title="ALIENBOLA" i]'
                            ],
                            abpvn: [
                              '#quangcaomb',
                              l('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
                              '.quangcao',
                              l('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
                              l('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=')
                            ],
                            adBlockFinland: [
                              '.mainostila',
                              l('LnNwb25zb3JpdA=='),
                              '.ylamainos',
                              l('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
                              l('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd')
                            ],
                            adBlockPersian: [
                              '#navbar_notice_50',
                              '.kadr',
                              'TABLE[width="140px"]',
                              '#divAgahi',
                              l('I2FkMl9pbmxpbmU=')
                            ],
                            adBlockWarningRemoval: [
                              '#adblock-honeypot',
                              '.adblocker-root',
                              '.wp_adblock_detect',
                              l('LmhlYWRlci1ibG9ja2VkLWFk'),
                              l('I2FkX2Jsb2NrZXI=')
                            ],
                            adGuardAnnoyances: [
                              'amp-embed[type="zen"]',
                              '.hs-sosyal',
                              '#cookieconsentdiv',
                              'div[class^="app_gdpr"]',
                              '.as-oil'
                            ],
                            adGuardBase: [
                              '.BetterJsPopOverlay',
                              l('I2FkXzMwMFgyNTA='),
                              l('I2Jhbm5lcmZsb2F0MjI='),
                              l('I2FkLWJhbm5lcg=='),
                              l('I2NhbXBhaWduLWJhbm5lcg==')
                            ],
                            adGuardChinese: [
                              l('LlppX2FkX2FfSA=='),
                              l('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
                              l('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
                              '.qq_nr_lad',
                              '#widget-quan'
                            ],
                            adGuardFrench: [
                              l('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
                              '#pavePub',
                              l('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
                              '.mobile_adhesion',
                              '.widgetadv'
                            ],
                            adGuardGerman: [
                              l('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
                              l('LmJveHN0YXJ0d2VyYnVuZw=='),
                              l('LndlcmJ1bmcz'),
                              l(
                                'YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='
                              ),
                              l(
                                'YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0='
                              )
                            ],
                            adGuardJapanese: [
                              '#kauli_yad_1',
                              l('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
                              l('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
                              l('LmFkZ29vZ2xl'),
                              l('LmFkX3JlZ3VsYXIz')
                            ],
                            adGuardMobile: [
                              l('YW1wLWF1dG8tYWRz'),
                              l('LmFtcF9hZA=='),
                              'amp-embed[type="24smi"]',
                              '#mgid_iframe1',
                              l('I2FkX2ludmlld19hcmVh')
                            ],
                            adGuardRussian: [
                              l('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
                              l('LnJlY2xhbWE='),
                              'div[id^="smi2adblock"]',
                              l('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
                              l('I2FkX3NxdWFyZQ==')
                            ],
                            adGuardSocial: [
                              l(
                                'YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='
                              ),
                              l('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
                              '.etsy-tweet',
                              '#inlineShare',
                              '.popup-social'
                            ],
                            adGuardSpanishPortuguese: [
                              '#barraPublicidade',
                              '#Publicidade',
                              '#publiEspecial',
                              '#queTooltip',
                              l('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=')
                            ],
                            adGuardTrackingProtection: [
                              '#qoo-counter',
                              l('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
                              l(
                                'YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='
                              ),
                              l('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
                              '#top100counter'
                            ],
                            adGuardTurkish: [
                              '#backkapat',
                              l('I3Jla2xhbWk='),
                              l('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
                              l('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
                              l('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==')
                            ],
                            bulgarian: [
                              l('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
                              '#ea_intext_div',
                              '.lapni-pop-over',
                              '#xenium_hot_offers',
                              l('I25ld0Fk')
                            ],
                            easyList: [
                              l('I0FEX0NPTlRST0xfMjg='),
                              l('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
                              '.universalboxADVBOX03',
                              l('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
                              l('LnNxdWFyZV9hZHM=')
                            ],
                            easyListChina: [
                              l('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
                              l('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
                              l('LmZyb250cGFnZUFkdk0='),
                              '#taotaole',
                              '#aafoot.top_box'
                            ],
                            easyListCookie: [
                              '#AdaCompliance.app-notice',
                              '.text-center.rgpd',
                              '.panel--cookie',
                              '.js-cookies-andromeda',
                              '.elxtr-consent'
                            ],
                            easyListCzechSlovak: [
                              '#onlajny-stickers',
                              l('I3Jla2xhbW5pLWJveA=='),
                              l('LnJla2xhbWEtbWVnYWJvYXJk'),
                              '.sklik',
                              l('W2lkXj0ic2tsaWtSZWtsYW1hIl0=')
                            ],
                            easyListDutch: [
                              l('I2FkdmVydGVudGll'),
                              l('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
                              '.adstekst',
                              l('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
                              '#semilo-lrectangle'
                            ],
                            easyListGermany: [
                              l('I0FkX1dpbjJkYXk='),
                              l('I3dlcmJ1bmdzYm94MzAw'),
                              l(
                                'YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'
                              ),
                              l('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
                              l(
                                'YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0='
                              )
                            ],
                            easyListItaly: [
                              l('LmJveF9hZHZfYW5udW5jaQ=='),
                              '.sb-box-pubbliredazionale',
                              l('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
                              l('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
                              l(
                                'YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='
                              )
                            ],
                            easyListLithuania: [
                              l('LnJla2xhbW9zX3RhcnBhcw=='),
                              l('LnJla2xhbW9zX251b3JvZG9z'),
                              l('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
                              l('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
                              l('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd')
                            ],
                            estonian: [
                              l('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')
                            ],
                            fanboyAnnoyances: [
                              '#feedback-tab',
                              '#taboola-below-article',
                              '.feedburnerFeedBlock',
                              '.widget-feedburner-counter',
                              '[title="Subscribe to our blog"]'
                            ],
                            fanboyAntiFacebook: [
                              '.util-bar-module-firefly-visible'
                            ],
                            fanboyEnhancedTrackers: [
                              '.open.pushModal',
                              '#issuem-leaky-paywall-articles-zero-remaining-nag',
                              '#sovrn_container',
                              'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
                              '.BlockNag__Card'
                            ],
                            fanboySocial: [
                              '.td-tags-and-social-wrapper-box',
                              '.twitterContainer',
                              '.youtube-social',
                              'a[title^="Like us on Facebook"]',
                              'img[alt^="Share on Digg"]'
                            ],
                            frellwitSwedish: [
                              l('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
                              l('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
                              'article.category-samarbete',
                              l('ZGl2LmhvbGlkQWRz'),
                              'ul.adsmodern'
                            ],
                            greekAdBlock: [
                              l('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
                              l('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
                              l(
                                'QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'
                              ),
                              'DIV.agores300',
                              'TABLE.advright'
                            ],
                            hungarian: [
                              '#cemp_doboz',
                              '.optimonk-iframe-container',
                              l('LmFkX19tYWlu'),
                              l('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
                              '#hirdetesek_box'
                            ],
                            iDontCareAboutCookies: [
                              '.alert-info[data-block-track*="CookieNotice"]',
                              '.ModuleTemplateCookieIndicator',
                              '.o--cookies--container',
                              '.cookie-msg-info-container',
                              '#cookies-policy-sticky'
                            ],
                            icelandicAbp: [
                              l(
                                'QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ=='
                              )
                            ],
                            latvian: [
                              l(
                                'YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='
                              ),
                              l(
                                'YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='
                              )
                            ],
                            listKr: [
                              l('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
                              l('I2xpdmVyZUFkV3JhcHBlcg=='),
                              l('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
                              l('aW5zLmZhc3R2aWV3LWFk'),
                              '.revenue_unit_item.dable'
                            ],
                            listeAr: [
                              l('LmdlbWluaUxCMUFk'),
                              '.right-and-left-sponsers',
                              l('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
                              l('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
                              l('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd')
                            ],
                            listeFr: [
                              l('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
                              l('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
                              l('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
                              '.site-pub-interstitiel',
                              'div[id^="crt-"][data-criteo-id]'
                            ],
                            officialPolish: [
                              '#ceneo-placeholder-ceneo-12',
                              l('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
                              l(
                                'YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='
                              ),
                              l(
                                'YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='
                              ),
                              l('ZGl2I3NrYXBpZWNfYWQ=')
                            ],
                            ro: [
                              l('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
                              'a[href^="/magazin/"]',
                              l(
                                'YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'
                              ),
                              l(
                                'YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='
                              ),
                              l('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd')
                            ],
                            ruAd: [
                              l('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
                              l('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
                              l('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
                              '#pgeldiz',
                              '.yandex-rtb-block'
                            ],
                            thaiAds: [
                              'a[href*=macau-uta-popup]',
                              l('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
                              l('LmFkczMwMHM='),
                              '.bumq',
                              '.img-kosana'
                            ],
                            webAnnoyancesUltralist: [
                              '#mod-social-share-2',
                              '#social-tools',
                              l('LmN0cGwtZnVsbGJhbm5lcg=='),
                              '.zergnet-recommend',
                              '.yt.btn-link.btn-md.btn'
                            ]
                          },
                          n = Object.keys(e),
                          [
                            4,
                            Ol((i = []).concat.apply(i, n.map((function (t) {
                              return e[t]
                            }))))
                          ]
                        ) : [
                          2,
                          void 0
                        ];
                      case 1:
                        return r = o.sent(),
                        t &&
                        function (e, t) {
                          for (
                            var n = 'DOM blockers debug:\n```',
                            r = 0,
                            a = Object.keys(e);
                            r < a.length;
                            r++
                          ) {
                            var i = a[r];
                            n += '\n'.concat(i, ':');
                            for (var o = 0, l = e[i]; o < l.length; o++) {
                              var c = l[o];
                              n += '\n  '.concat(t[c] ? '🚫' : '➡️', ' ').concat(c)
                            }
                          }
                          console.log(''.concat(n, '\n```'))
                        }(e, r),
                        (
                          a = n.filter(
                            (
                              function (t) {
                                var n = e[t];
                                return cl(n.map((function (e) {
                                  return r[e]
                                }))) > 0.6 * n.length
                              }
                            )
                          )
                        ).sort(),
                        [
                          2,
                          a
                        ]
                    }
                    var l
                  }
                )
              )
            }
          )
        )
      },
      fontPreferences: function () {
        return function (e, t) {
          void 0 === t &&
          (t = 4000);
          return Cl(
            (
              function (n, r) {
                var a = r.document,
                i = a.body,
                o = i.style;
                o.width = ''.concat(t, 'px'),
                o.webkitTextSizeAdjust = o.textSizeAdjust = 'none',
                fl() ? i.style.zoom = ''.concat(1 / r.devicePixelRatio) : vl() &&
                (i.style.zoom = 'reset');
                var l = a.createElement('div');
                return l.textContent = qo([], Array(t / 20 << 0), !0).map((function () {
                  return 'word'
                })).join(' '),
                i.appendChild(l),
                e(a, i)
              }
            ),
            '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">'
          )
        }(
          (
            function (e, t) {
              for (var n = {}, r = {}, a = 0, i = Object.keys(Ul); a < i.length; a++) {
                var o = i[a],
                l = Ul[o],
                c = l[0],
                u = void 0 === c ? {
                }
                 : c,
                s = l[1],
                d = void 0 === s ? 'mmMwWLliI0fiflO&1' : s,
                p = e.createElement('span');
                p.textContent = d,
                p.style.whiteSpace = 'nowrap';
                for (var h = 0, f = Object.keys(u); h < f.length; h++) {
                  var v = f[h],
                  m = u[v];
                  void 0 !== m &&
                  (p.style[v] = m)
                }
                n[o] = p,
                t.appendChild(e.createElement('br')),
                t.appendChild(p)
              }
              for (var y = 0, E = Object.keys(Ul); y < E.length; y++) {
                r[o = E[y]] = n[o].getBoundingClientRect().width
              }
              return r
            }
          )
        )
      },
      audio: function () {
        var e = window,
        t = e.OfflineAudioContext ||
        e.webkitOfflineAudioContext;
        if (!t) return - 2;
        if (
          vl() &&
          !ml() &&
          !function () {
            var e = window;
            return cl(
              ['DOMRectList' in e,
              'RTCPeerConnectionIceEvent' in e,
              'SVGGeometryElement' in e,
              'ontransitioncancel' in e]
            ) >= 3
          }()
        ) return - 1;
        var n = new t(1, 5000, 44100),
        r = n.createOscillator();
        r.type = 'triangle',
        r.frequency.value = 10000;
        var a = n.createDynamicsCompressor();
        a.threshold.value = - 50,
        a.knee.value = 40,
        a.ratio.value = 12,
        a.attack.value = 0,
        a.release.value = 0.25,
        r.connect(a),
        a.connect(n.destination),
        r.start(0);
        var i = function (e) {
          var t = 3,
          n = 500,
          r = 500,
          a = 5000,
          i = function () {
          };
          return [new Promise(
            (
              function (o, l) {
                var c = !1,
                u = 0,
                s = 0;
                e.oncomplete = function (e) {
                  return o(e.renderedBuffer)
                };
                var d = function () {
                  setTimeout(
                    (function () {
                      return l(gl('timeout'))
                    }),
                    Math.min(r, s + a - Date.now())
                  )
                },
                p = function () {
                  try {
                    var r = e.startRendering();
                    switch (Yo(r) && Xo(r), e.state) {
                      case 'running':
                        s = Date.now(),
                        c &&
                        d();
                        break;
                      case 'suspended':
                        document.hidden ||
                        u++,
                        c &&
                        u >= t ? l(gl('suspended')) : setTimeout(p, n)
                    }
                  } catch (e) {
                    l(e)
                  }
                };
                p(),
                i = function () {
                  c ||
                  (c = !0, s > 0 && d())
                }
              }
            )
          ),
          i]
        }(n),
        o = i[0],
        l = i[1],
        c = o.then(
          (
            function (e) {
              return function (e) {
                for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                return t
              }(e.getChannelData(0).subarray(4500))
            }
          ),
          (
            function (e) {
              if ('timeout' === e.name || 'suspended' === e.name) return - 3;
              throw e
            }
          )
        );
        return Xo(c),
        function () {
          return l(),
          c
        }
      },
      screenFrame: function () {
        var e = this,
        t = Ll();
        return function () {
          return Fo(
            e,
            void 0,
            void 0,
            (
              function () {
                var e,
                n;
                return Bo(
                  this,
                  (
                    function (r) {
                      switch (r.label) {
                        case 0:
                          return [4,
                          t()];
                        case 1:
                          return e = r.sent(),
                          [
                            2,
                            [
                              (n = function (e) {
                                return null === e ? null : ul(e, 10)
                              }) (e[0]),
                              n(e[1]),
                              n(e[2]),
                              n(e[3])
                            ]
                          ]
                      }
                    }
                  )
                )
              }
            )
          )
        }
      },
      osCpu: function () {
        return navigator.oscpu
      },
      languages: function () {
        var e,
        t = navigator,
        n = [],
        r = t.language ||
        t.userLanguage ||
        t.browserLanguage ||
        t.systemLanguage;
        if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) fl() &&
        cl(
          [!('MediaSettingsRange' in (e = window)),
          'RTCEncodedAudioFrame' in e,
          '' + e.Intl == '[object Intl]',
          '' + e.Reflect == '[object Reflect]']
        ) >= 3 ||
        n.push(t.languages);
         else if ('string' == typeof t.languages) {
          var a = t.languages;
          a &&
          n.push(a.split(','))
        }
        return n
      },
      colorDepth: function () {
        return window.screen.colorDepth
      },
      deviceMemory: function () {
        return ll(ol(navigator.deviceMemory), void 0)
      },
      screenResolution: function () {
        var e = screen,
        t = function (e) {
          return ll(il(e), null)
        },
        n = [
          t(e.width),
          t(e.height)
        ];
        return n.sort().reverse(),
        n
      },
      hardwareConcurrency: function () {
        return ll(il(navigator.hardwareConcurrency), void 0)
      },
      timezone: function () {
        var e,
        t = null === (e = window.Intl) ||
        void 0 === e ? void 0 : e.DateTimeFormat;
        if (t) {
          var n = (new t).resolvedOptions().timeZone;
          if (n) return n
        }
        var r,
        a = (
          r = (new Date).getFullYear(),
          - Math.max(
            ol(new Date(r, 0, 1).getTimezoneOffset()),
            ol(new Date(r, 6, 1).getTimezoneOffset())
          )
        );
        return 'UTC'.concat(a >= 0 ? '+' : '').concat(Math.abs(a))
      },
      sessionStorage: function () {
        try {
          return !!window.sessionStorage
        } catch (e) {
          return !0
        }
      },
      localStorage: function () {
        try {
          return !!window.localStorage
        } catch (e) {
          return !0
        }
      },
      indexedDB: function () {
        var e,
        t;
        if (
          !(
            hl() ||
            (
              e = window,
              t = navigator,
              cl(
                ['msWriteProfilerMark' in e,
                'MSStream' in e,
                'msLaunchUri' in t,
                'msSaveBlob' in t]
              ) >= 3 &&
              !hl()
            )
          )
        ) try {
          return !!window.indexedDB
        } catch (e) {
          return !0
        }
      },
      openDatabase: function () {
        return !!window.openDatabase
      },
      cpuClass: function () {
        return navigator.cpuClass
      },
      platform: function () {
        var e = navigator.platform;
        return 'MacIntel' === e &&
        vl() &&
        !ml() ? function () {
          if ('iPad' === navigator.platform) return !0;
          var e = screen,
          t = e.width / e.height;
          return cl(
            ['MediaSource' in window,
            !!Element.prototype.webkitRequestFullscreen,
            t > 0.65 &&
            t < 1.53]
          ) >= 2
        }() ? 'iPad' : 'iPhone' : e
      },
      plugins: function () {
        var e = navigator.plugins;
        if (e) {
          for (var t = [], n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r) {
              for (var a = [], i = 0; i < r.length; ++i) {
                var o = r[i];
                a.push({
                  type: o.type,
                  suffixes: o.suffixes
                })
              }
              t.push({
                name: r.name,
                description: r.description,
                mimeTypes: a
              })
            }
          }
          return t
        }
      },
      canvas: function () {
        var e,
        t,
        n = !1,
        r = function () {
          var e = document.createElement('canvas');
          return e.width = 1,
          e.height = 1,
          [
            e,
            e.getContext('2d')
          ]
        }(),
        a = r[0],
        i = r[1];
        if (function (e, t) {
          return !(!t || !e.toDataURL)
        }(a, i)) {
          n = function (e) {
            return e.rect(0, 0, 10, 10),
            e.rect(2, 2, 6, 6),
            !e.isPointInPath(5, 5, 'evenodd')
          }(i),
          function (e, t) {
            e.width = 240,
            e.height = 60,
            t.textBaseline = 'alphabetic',
            t.fillStyle = '#f60',
            t.fillRect(100, 1, 62, 20),
            t.fillStyle = '#069',
            t.font = '11pt "Times New Roman"';
            var n = 'Cwm fjordbank gly '.concat(String.fromCharCode(55357, 56835));
            t.fillText(n, 2, 15),
            t.fillStyle = 'rgba(102, 204, 0, 0.2)',
            t.font = '18pt Arial',
            t.fillText(n, 4, 45)
          }(a, i);
          var o = _l(a);
          o !== _l(a) ? e = t = 'unstable' : (
            t = o,
            function (e, t) {
              e.width = 122,
              e.height = 110,
              t.globalCompositeOperation = 'multiply';
              for (
                var n = 0,
                r = [
                  ['#f2f',
                  40,
                  40],
                  [
                    '#2ff',
                    80,
                    40
                  ],
                  [
                    '#ff2',
                    60,
                    80
                  ]
                ];
                n < r.length;
                n++
              ) {
                var a = r[n],
                i = a[0],
                o = a[1],
                l = a[2];
                t.fillStyle = i,
                t.beginPath(),
                t.arc(o, l, 40, 0, 2 * Math.PI, !0),
                t.closePath(),
                t.fill()
              }
              t.fillStyle = '#f9c',
              t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
              t.arc(60, 60, 20, 0, 2 * Math.PI, !0),
              t.fill('evenodd')
            }(a, i),
            e = _l(a)
          )
        } else e = t = '';
        return {
          winding: n,
          geometry: e,
          text: t
        }
      },
      touchSupport: function () {
        var e,
        t = navigator,
        n = 0;
        void 0 !== t.maxTouchPoints ? n = il(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints &&
        (n = t.msMaxTouchPoints);
        try {
          document.createEvent('TouchEvent'),
          e = !0
        } catch (t) {
          e = !1
        }
        return {
          maxTouchPoints: n,
          touchEvent: e,
          touchStart: 'ontouchstart' in window
        }
      },
      vendor: function () {
        return navigator.vendor ||
        ''
      },
      vendorFlavors: function () {
        for (
          var e = [],
          t = 0,
          n = [
            'chrome',
            'safari',
            '__crWeb',
            '__gCrWeb',
            'yandex',
            '__yb',
            '__ybro',
            '__firefox__',
            '__edgeTrackingPreventionStatistics',
            'webkit',
            'oprt',
            'samsungAr',
            'ucweb',
            'UCShellJava',
            'puffinDevice'
          ];
          t < n.length;
          t++
        ) {
          var r = n[t],
          a = window[r];
          a &&
          'object' == typeof a &&
          e.push(r)
        }
        return e.sort()
      },
      cookiesEnabled: function () {
        var e = document;
        try {
          e.cookie = 'cookietest=1; SameSite=Strict;';
          var t = - 1 !== e.cookie.indexOf('cookietest=');
          return e.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT',
          t
        } catch (e) {
          return !1
        }
      },
      colorGamut: function () {
        for (var e = 0, t = [
          'rec2020',
          'p3',
          'srgb'
        ]; e < t.length; e++) {
          var n = t[e];
          if (matchMedia('(color-gamut: '.concat(n, ')')).matches) return n
        }
      },
      invertedColors: function () {
        return !!Rl('inverted') ||
        !Rl('none') &&
        void 0
      },
      forcedColors: function () {
        return !!Pl('active') ||
        !Pl('none') &&
        void 0
      },
      monochrome: function () {
        if (matchMedia('(min-monochrome: 0)').matches) {
          for (var e = 0; e <= 100; ++e) if (matchMedia('(max-monochrome: '.concat(e, ')')).matches) return e;
          throw new Error('Too high value')
        }
      },
      contrast: function () {
        return Ml('no-preference') ? 0 : Ml('high') ||
        Ml('more') ? 1 : Ml('low') ||
        Ml('less') ? - 1 : Ml('forced') ? 10 : void 0
      },
      reducedMotion: function () {
        return !!xl('reduce') ||
        !xl('no-preference') &&
        void 0
      },
      hdr: function () {
        return !!Vl('high') ||
        !Vl('standard') &&
        void 0
      },
      math: function () {
        var e,
        t = Hl.acos ||
        Wl,
        n = Hl.acosh ||
        Wl,
        r = Hl.asin ||
        Wl,
        a = Hl.asinh ||
        Wl,
        i = Hl.atanh ||
        Wl,
        o = Hl.atan ||
        Wl,
        l = Hl.sin ||
        Wl,
        c = Hl.sinh ||
        Wl,
        u = Hl.cos ||
        Wl,
        s = Hl.cosh ||
        Wl,
        d = Hl.tan ||
        Wl,
        p = Hl.tanh ||
        Wl,
        h = Hl.exp ||
        Wl,
        f = Hl.expm1 ||
        Wl,
        v = Hl.log1p ||
        Wl;
        return {
          acos: t(0.12312423423423424),
          acosh: n(1e+308),
          acoshPf: (e = 1e+154, Hl.log(e + Hl.sqrt(e * e - 1))),
          asin: r(0.12312423423423424),
          asinh: a(1),
          asinhPf: function (e) {
            return Hl.log(e + Hl.sqrt(e * e + 1))
          }(1),
          atanh: i(0.5),
          atanhPf: function (e) {
            return Hl.log((1 + e) / (1 - e)) / 2
          }(0.5),
          atan: o(0.5),
          sin: l( - 1e+300),
          sinh: c(1),
          sinhPf: function (e) {
            return Hl.exp(e) - 1 / Hl.exp(e) / 2
          }(1),
          cos: u(10.000000000123),
          cosh: s(1),
          coshPf: function (e) {
            return (Hl.exp(e) + 1 / Hl.exp(e)) / 2
          }(1),
          tan: d( - 1e+300),
          tanh: p(1),
          tanhPf: function (e) {
            return (Hl.exp(2 * e) - 1) / (Hl.exp(2 * e) + 1)
          }(1),
          exp: h(1),
          expm1: f(1),
          expm1Pf: function (e) {
            return Hl.exp(e) - 1
          }(1),
          log1p: v(10),
          log1pPf: function (e) {
            return Hl.log(1 + e)
          }(10),
          powPI: function (e) {
            return Hl.pow(Hl.PI, e)
          }( - 100)
        }
      },
      videoCard: function () {
        var e,
        t = document.createElement('canvas'),
        n = null !== (e = t.getContext('webgl')) &&
        void 0 !== e ? e : t.getContext('experimental-webgl');
        if (n && 'getExtension' in n) {
          var r = n.getExtension('WEBGL_debug_renderer_info');
          if (r) return {
            vendor: (n.getParameter(r.UNMASKED_VENDOR_WEBGL) || '').toString(),
            renderer: (n.getParameter(r.UNMASKED_RENDERER_WEBGL) || '').toString()
          }
        }
      },
      pdfViewerEnabled: function () {
        return navigator.pdfViewerEnabled
      },
      architecture: function () {
        var e = new Float32Array(1),
        t = new Uint8Array(e.buffer);
        return e[0] = 1 / 0,
        e[0] = e[0] - e[0],
        t[3]
      }
    };
    function zl(e) {
      var t = function (e) {
        if (El()) return 0.4;
        if (vl()) return ml() ? 0.5 : 0.3;
        var t = e.platform.value ||
        '';
        if (/^Win/.test(t)) return 0.6;
        if (/^Mac/.test(t)) return 0.5;
        return 0.7
      }(e),
      n = function (e) {
        return ul(0.99 + 0.01 * e, 0.0001)
      }(t);
      return {
        score: t,
        comment: '$ if upgrade to Pro: https://fpjs.dev/pro'.replace(/\$/g, ''.concat(n))
      }
    }
    function Fl(e) {
      return JSON.stringify(
        e,
        (
          function (e, t) {
            return t instanceof Error ? function (e) {
              var t;
              return zo({
                name: e.name,
                message: e.message,
                stack: null === (t = e.stack) ||
                void 0 === t ? void 0 : t.split('\n')
              }, e)
            }(t) : t
          }
        ),
        2
      )
    }
    function Bl(e) {
      return al(
        function (e) {
          for (var t = '', n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
            var a = r[n],
            i = e[a],
            o = i.error ? 'error' : JSON.stringify(i.value);
            t += ''.concat(t ? '|' : '').concat(a.replace(/([:|\\])/g, '\\$1'), ':').concat(o)
          }
          return t
        }(e)
      )
    }
    function ql(e) {
      return void 0 === e &&
      (e = 50),
      function (e, t) {
        void 0 === t &&
        (t = 1 / 0);
        var n = window.requestIdleCallback;
        return n ? new Promise(
          (
            function (e) {
              return n.call(window, (function () {
                return e()
              }), {
                timeout: t
              })
            }
          )
        ) : jo(Math.min(e, t))
      }(e, 2 * e)
    }
    function Zl(e, t) {
      var n = Date.now();
      return {
        get: function (r) {
          return Fo(
            this,
            void 0,
            void 0,
            (
              function () {
                var a,
                i,
                o;
                return Bo(
                  this,
                  (
                    function (l) {
                      switch (l.label) {
                        case 0:
                          return a = Date.now(),
                          [
                            4,
                            e()
                          ];
                        case 1:
                          return i = l.sent(),
                          o = function (e) {
                            var t;
                            return {
                              get visitorId() {
                                return void 0 === t &&
                                (t = Bl(this.components)),
                                t
                              },
                              set visitorId(e) {
                                t = e
                              },
                              confidence: zl(e),
                              components: e,
                              version: Zo
                            }
                          }(i),
                          (t || (null == r ? void 0 : r.debug)) &&
                          console.log(
                            'Copy the text below to get the debug data:\n\n```\nversion: '.concat(o.version, '\nuserAgent: ').concat(navigator.userAgent, '\ntimeBetweenLoadAndGet: ').concat(a - n, '\nvisitorId: ').concat(o.visitorId, '\ncomponents: ').concat(Fl(i), '\n```')
                          ),
                          [
                            2,
                            o
                          ]
                      }
                    }
                  )
                )
              }
            )
          )
        }
      }
    }
    var jl,
    Yl,
    Kl = {
      load: function (e) {
        var t = void 0 === e ? {
        }
         : e,
        n = t.delayFallback,
        r = t.debug,
        a = t.monitoring,
        i = void 0 === a ||
        a;
        return Fo(
          this,
          void 0,
          void 0,
          (
            function () {
              return Bo(
                this,
                (
                  function (e) {
                    switch (e.label) {
                      case 0:
                        return i &&
                        function () {
                          if (!(window.__fpjs_d_m || Math.random() >= 0.001)) try {
                            var e = new XMLHttpRequest;
                            e.open(
                              'get',
                              'https://m1.openfpcdn.io/fingerprintjs/v'.concat(Zo, '/npm-monitoring'),
                              !0
                            ),
                            e.send()
                          } catch (e) {
                            console.error(e)
                          }
                        }(),
                        [
                          4,
                          ql(n)
                        ];
                      case 1:
                        return e.sent(),
                        [
                          2,
                          Zl(pl(Gl, {
                            debug: r
                          }, []), r)
                        ]
                    }
                  }
                )
              )
            }
          )
        )
      },
      hashComponents: Bl,
      componentsToDebugString: Fl
    },
    Jl = {
      url: (
        null !== (jl = H.EnvironmentUrls.apiGatewayUrl) &&
        void 0 !== jl ? jl : 'URL_NOT_FOUND'
      ) + '/rotating-client-service' + '/v1/prelude/latest',
      timeout: 1000
    },
    Xl = 'otp-challenge-container',
    Ql = 'accountSecurityChallengeEmailVerificationEvent',
    $l = {
      challengeInitialized: 'challengeInitialized',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned'
    },
    ec = {
      challengeInitialized: 'ChallengeInitialized',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned'
    },
    tc = {
      challengeSolveTime: 'ChallengeSolveTime'
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 2] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 3] = 'SHOW_MODAL_CHALLENGE'
    }(Yl || (Yl = {}));
    var nc,
    rc = function () {
      return (
        rc = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    ac = function (e, t) {
      var n,
      r = rc({
      }, e);
      switch (t.type) {
        case Yl.SET_CHALLENGE_COMPLETED:
          return r.onChallengeCompletedData = t.onChallengeCompletedData,
          r.isModalVisible = !1,
          r;
        case Yl.SET_CHALLENGE_INVALIDATED:
          return r.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: (n = e.resources, t.errorCode, n.Message.Error.Default)
          },
          r.isModalVisible = !1,
          r;
        case Yl.HIDE_MODAL_CHALLENGE:
          return r.isModalVisible = !1,
          r;
        case Yl.SHOW_MODAL_CHALLENGE:
          return r.isModalVisible = !0,
          r;
        default:
          return e
      }
    },
    ic = (0, ue.createContext) (null),
    oc = function (e) {
      var t = e.challengeId,
      n = e.renderInline,
      r = e.eventService,
      a = e.metricsService,
      i = e.translate,
      o = e.onChallengeCompleted,
      l = e.onChallengeInvalidated,
      c = e.onModalChallengeAbandoned,
      u = e.children,
      s = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Header: {
                  VerifyYourAccount: e('Header.VerifyYourAccount'),
                  EnterCode: e('Header.EnterCode'),
                  ConfirmAbandon: e('Header.ConfirmAbandon')
                },
                Description: {
                  SuspiciousActivityEmailVerification: e('Description.SuspiciousActivityEmailVerificationV1'),
                  EnterCode: e('Description.EnterCode'),
                  ConfirmAbandon: e('Description.ConfirmAbandon')
                },
                Message: {
                  Error: {
                    Default: e('Message.Error.Default')
                  }
                },
                Label: {
                  ConfirmAbandon: e('Label.ConfirmAbandon'),
                  RejectAbandon: e('Label.RejectAbandon')
                }
              }
            }(i)
          }
        )
      ) [0],
      d = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              renderInline: n,
              translate: i,
              resources: s,
              eventService: r,
              metricsService: a,
              onModalChallengeAbandoned: c,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !0
            }
          }
        )
      ) [0],
      p = (0, ue.useReducer) (ac, d),
      h = p[0],
      f = p[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== h.onChallengeCompletedData &&
            null === h.onChallengeInvalidatedData &&
            o(h.onChallengeCompletedData)
          }
        ),
        [
          h.onChallengeCompletedData,
          h.onChallengeInvalidatedData,
          o
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === h.onChallengeCompletedData &&
            null !== h.onChallengeInvalidatedData &&
            (
              r.sendChallengeInvalidatedEvent(),
              a.fireChallengeInvalidatedEvent(),
              l(h.onChallengeInvalidatedData)
            )
          }
        ),
        [
          r,
          a,
          h.onChallengeCompletedData,
          h.onChallengeInvalidatedData,
          l
        ]
      ),
      se().createElement(ic.Provider, {
        value: {
          state: h,
          dispatch: f
        }
      }, u)
    },
    lc = function () {
      var e = (0, ue.useContext) (ic);
      if (null === e) throw new Error(
        'EmailVerificationContext was not provided in the current scope'
      );
      return e
    },
    cc = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    uc = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    sc = function (e, t, n, r) {
      var a = e ? Si : Ii.Modal.Body,
      i = e ? Io : To;
      return se().createElement(
        se().Fragment,
        null,
        se().createElement(a, null, se().createElement('p', null, t)),
        se().createElement(i, {
          positiveButton: n,
          negativeButton: r
        })
      )
    },
    dc = function (e) {
      var t = e.renderInline,
      n = e.confirmAbandonLabel,
      r = e.rejectAbandonLabel,
      a = e.abandonConfirmationTitle,
      i = e.abandonConfirmationDescription,
      o = e.isConfirmationModalVisible,
      l = e.handleContinue,
      c = e.handleConfirmAbandon,
      u = {
        content: r,
        label: r,
        enabled: !0,
        action: l
      },
      s = {
        content: n,
        label: n,
        enabled: !0,
        action: c
      };
      return se().createElement(
        se().Fragment,
        null,
        t ? se().createElement(Ti, {
          titleText: a
        }, sc(t, i, s, u)) : se().createElement(
          Ii.Modal,
          {
            className: 'modal-modern',
            show: o,
            onHide: c,
            backdrop: 'static'
          },
          se().createElement(
            Ao,
            {
              headerText: a,
              buttonType: go.CLOSE,
              buttonAction: c,
              buttonEnabled: !0,
              headerInfo: null
            }
          ),
          sc(t, i, s, u)
        )
      )
    },
    pc = function () {
      var e = lc(),
      t = e.state,
      n = t.renderInline,
      r = t.resources,
      a = t.translate,
      i = t.eventService,
      o = t.metricsService,
      l = t.isModalVisible,
      c = e.dispatch,
      u = function () {
        var e = (0, ue.useState) (6),
        t = e[0],
        n = e[1];
        return (0, ue.useEffect) (
          (
            function () {
              cc(
                void 0,
                void 0,
                Promise,
                (
                  function () {
                    var e;
                    return uc(
                      this,
                      (
                        function (t) {
                          switch (t.label) {
                            case 0:
                              return [4,
                              dt(et.Challenge)];
                            case 1:
                              return (e = t.sent()).isError ||
                              n(e.value.OtpCodeLength),
                              [
                                2
                              ]
                          }
                        }
                      )
                    )
                  }
                )
              )
            }
          ),
          []
        ),
        t
      }(),
      s = (0, ue.useState) (!1),
      d = s[0],
      p = s[1],
      h = (0, ue.useCallback) ((function () {
        p(!0),
        c({
          type: Yl.HIDE_MODAL_CHALLENGE
        })
      }), [
        c
      ]),
      f = (0, ue.useCallback) ((function () {
        p(!1),
        c({
          type: Yl.SHOW_MODAL_CHALLENGE
        })
      }), [
        c
      ]),
      v = (0, ue.useCallback) (
        (
          function () {
            p(!1),
            c({
              type: Yl.SET_CHALLENGE_INVALIDATED,
              errorCode: 0
            }),
            o.fireChallengeInvalidatedEvent(),
            i.sendChallengeInvalidatedEvent()
          }
        ),
        [
          c,
          i,
          o
        ]
      );
      (0, ue.useEffect) (
        (
          function () {
            l &&
            H.EmailVerifyCodeModalService &&
            H.EmailVerifyCodeModalService.renderEmailVerifyCodeModal({
              containerId: Xl,
              codeLength: u,
              onEmailCodeEntered: function (e, t) {
                c({
                  type: Yl.SET_CHALLENGE_COMPLETED,
                  onChallengeCompletedData: {
                    otpSession: e
                  }
                }),
                i.sendChallengeCompletedEvent(),
                o.fireChallengeCompletedEvent()
              },
              onModalAbandoned: h,
              enterEmailTitle: r.Header.VerifyYourAccount,
              enterEmailDescription: r.Description.SuspiciousActivityEmailVerification,
              enterCodeTitle: r.Header.EnterCode,
              enterCodeDescription: r.Description.EnterCode,
              origin: et.Challenge,
              translate: a,
              renderInWebview: n
            })
          }
        ),
        [
          l
        ]
      );
      var m = function () {
        var e = n ? Si : Ii.Modal.Body;
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(e, null, se().createElement('div', {
            id: Xl
          }))
        )
      };
      return se().createElement(
        se().Fragment,
        null,
        d ? se().createElement(
          dc,
          {
            renderInline: n,
            confirmAbandonLabel: r.Label.ConfirmAbandon,
            rejectAbandonLabel: r.Label.RejectAbandon,
            abandonConfirmationTitle: r.Header.ConfirmAbandon,
            abandonConfirmationDescription: r.Description.ConfirmAbandon,
            isConfirmationModalVisible: d,
            handleContinue: f,
            handleConfirmAbandon: v
          }
        ) : n ? se().createElement(Ti, {
          titleText: ''
        }, m()) : se().createElement(
          Ii.Modal,
          {
            className: 'modal-modern',
            backdrop: 'static',
            show: l
          },
          m()
        )
      )
    },
    hc = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.renderInline,
          r = e.eventService,
          a = e.metricsService,
          i = e.translate,
          o = e.onChallengeCompleted,
          l = e.onChallengeInvalidated,
          c = e.onModalChallengeAbandoned;
          return se().createElement(
            oc,
            {
              challengeId: t,
              renderInline: n,
              eventService: r,
              metricsService: a,
              translate: i,
              onChallengeCompleted: o,
              onChallengeInvalidated: l,
              onModalChallengeAbandoned: c
            },
            se().createElement(pc, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.EmailVerificationChallenge'
      }
    ),
    fc = function () {
      function e(e) {
        this.challengeId = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Ql,
          $l.challengeInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Ql,
          $l.challengeCompleted,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Ql,
          $l.challengeInvalidated,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    vc = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'EmailVerification_' + tc.challengeSolveTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(ec.challengeInitialized),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(ec.challengeCompleted),
        this.fireSolveTimeEvent(ec.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(ec.challengeInvalidated),
        this.fireSolveTimeEvent(ec.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(ec.challengeAbandoned),
        this.fireSolveTimeEvent(ec.challengeAbandoned)
      },
      e.prototype.fireEvent = function (e) {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventEmailVerification,
          value: 1,
          labelValues: {
            event_type: 'EmailVerification_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimeEmailVerification,
          value: t,
          labelValues: {
            event_type: 'EmailVerification_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }();
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.ABANDONED = 1] = 'ABANDONED'
    }(nc || (nc = {}));
    var mc,
    yc = new hi;
    !function (e) {
      e.CAPTCHA = 'captcha',
      e.FORCE_AUTHENTICATOR = 'forceauthenticator',
      e.FORCE_TWO_STEP_VERIFICATION = 'forcetwostepverification',
      e.TWO_STEP_VERIFICATION = 'twostepverification',
      e.SECURITY_QUESTIONS = 'securityquestions',
      e.REAUTHENTICATION = 'reauthentication',
      e.PROOF_OF_WORK = 'proofofwork',
      e.ROSTILE = 'rostile',
      e.PRIVATE_ACCESS_TOKEN = 'privateaccesstoken',
      e.DEVICE_INTEGRITY = 'deviceintegrity',
      e.PROOF_OF_SPACE = 'proofofspace',
      e.PHONE_VERIFICATION = 'phoneverification',
      e.EMAIL_VERIFICATION = 'emailverification',
      e.BLOCK_SESSION = 'blocksession'
    }(mc || (mc = {}));
    var Ec,
    gc,
    Cc,
    bc,
    Ic,
    Tc,
    Sc,
    _c,
    Ac,
    Nc,
    Lc,
    Dc,
    wc,
    Oc,
    kc,
    Rc = mc;
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(Ec || (Ec = {})),
    function (e) {
      e.UNKNOWN = 'unknown',
      e.ABANDONED = 'abandoned',
      e.INVALIDATED = 'invalidated'
    }(gc || (gc = {})),
    function (e) {
      e.CHALLENGE_COMPLETED = 'challengeCompleted',
      e.CHALLENGE_DISPLAYED = 'challengeDisplayed',
      e.CHALLENGE_INITIALIZED = 'challengeInitialized',
      e.CHALLENGE_INVALIDATED = 'challengeInvalidated',
      e.CHALLENGE_PAGE_LOADED = 'challengePageLoaded',
      e.CHALLENGE_PARSED = 'challengeParsed'
    }(Cc || (Cc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(bc || (bc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.SESSION_INVALID = 1] = 'SESSION_INVALID',
      e[e.ANSWER_INVALID = 2] = 'ANSWER_INVALID',
      e[e.WORKER_LOAD_ERROR = 3] = 'WORKER_LOAD_ERROR',
      e[e.TIMEOUT = 4] = 'TIMEOUT'
    }(Ic || (Ic = {})),
    function (e) {
      e.INVALID = 'PROOF_OF_SPACE_PUZZLE_TYPE_INVALID',
      e.NONINTERACTIVE = 'PROOF_OF_SPACE_PUZZLE_TYPE_NONINTERACTIVE',
      e.INTERACTIVE = 'PROOF_OF_SPACE_PUZZLE_TYPE_INTERACTIVE'
    }(Tc || (Tc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.SESSION_INVALID = 1] = 'SESSION_INVALID',
      e[e.ANSWER_INVALID = 2] = 'ANSWER_INVALID',
      e[e.WORKER_LOAD_ERROR = 3] = 'WORKER_LOAD_ERROR'
    }(Sc || (Sc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.OTP_CODE_EXPIRED = 1] = 'OTP_CODE_EXPIRED'
    }(_c || (_c = {})),
    function (e) {
      e.Password = 'Password',
      e.OtpEmail = 'Otp_Email',
      e.Passkey = 'Passkey'
    }(Ac || (Ac = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.INVALID_SESSION = 1] = 'INVALID_SESSION'
    }(Nc || (Nc = {})),
    function (e) {
      e.INVALID = 'ROSTILE_PUZZLE_TYPE_INVALID',
      e.VISIBLE = 'ROSTILE_PUZZLE_TYPE_VISIBLE',
      e.INVISIBLE = 'ROSTILE_PUZZLE_TYPE_INVISIBLE'
    }(Lc || (Lc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.SESSION_EXPIRED = 1] = 'SESSION_EXPIRED',
      e[e.USER_WAS_FORCE_RESET = 2] = 'USER_WAS_FORCE_RESET'
    }(Dc || (Dc = {})),
    function (e) {
      e.Unknown = 'Unknown',
      e.Login = 'Login',
      e.RobuxSpend = 'RobuxSpend',
      e.ItemTrade = 'ItemTrade',
      e.Resale = 'Resale',
      e.PasswordReset = 'PasswordReset',
      e.RevertAccount = 'RevertAccount',
      e.Generic = 'Generic',
      e.GenericWithRecoveryCodes = 'GenericWithRecoveryCodes'
    }(wc || (wc = {})),
    function (e) {
      e.Email = 'Email',
      e.Authenticator = 'Authenticator',
      e.RecoveryCode = 'RecoveryCode',
      e.SMS = 'SMS',
      e.SecurityKey = 'SecurityKey',
      e.CrossDevice = 'CrossDevice',
      e.Password = 'Password',
      e.Passkey = 'Passkey'
    }(Oc || (Oc = {})),
    function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN',
      e[e.SESSION_EXPIRED = 1] = 'SESSION_EXPIRED'
    }(kc || (kc = {}));
    var Pc,
    Mc = 'phoneverification-challenge-container',
    xc = {
      SuspiciousActivityPhoneVerification: 'Description.SuspiciousActivityPhoneVerificationV1',
      LegalText: 'Description.ChallengeLegalDisclaimerV1'
    },
    Vc = {
      VerifyYourAccountHeader: 'Header.VerifyYourAccountHeader'
    },
    Hc = 'accountSecurityChallengePhoneVerificationEvent',
    Wc = {
      challengeInitialized: 'challengeInitialized',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned'
    },
    Uc = {
      challengeInitialized: 'ChallengeInitialized',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned'
    },
    Gc = {
      challengeSolveTime: 'ChallengeSolveTime'
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 2] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 3] = 'SHOW_MODAL_CHALLENGE'
    }(Pc || (Pc = {}));
    var zc,
    Fc = function () {
      return (
        Fc = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Bc = function (e, t) {
      var n,
      r = Fc({
      }, e);
      switch (t.type) {
        case Pc.SET_CHALLENGE_COMPLETED:
          return r.onChallengeCompletedData = t.onChallengeCompletedData,
          r.isModalVisible = !1,
          r;
        case Pc.SET_CHALLENGE_INVALIDATED:
          return r.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: (n = e.resources, t.errorCode, n.Message.Error.Default)
          },
          r.isModalVisible = !1,
          r;
        case Pc.HIDE_MODAL_CHALLENGE:
          return r.isModalVisible = !1,
          r;
        case Pc.SHOW_MODAL_CHALLENGE:
          return r.isModalVisible = !0,
          r;
        default:
          return e
      }
    },
    qc = (0, ue.createContext) (null),
    Zc = function (e) {
      var t = e.challengeId,
      n = e.renderInline,
      r = e.eventService,
      a = e.metricsService,
      i = e.translate,
      o = e.onChallengeCompleted,
      l = e.onChallengeInvalidated,
      c = e.onModalChallengeAbandoned,
      u = e.children,
      s = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Header: {
                  ConfirmAbandon: e('Header.ConfirmAbandon')
                },
                Description: {
                  ConfirmAbandon: e('Description.ConfirmAbandon')
                },
                Message: {
                  Error: {
                    Default: e('Message.Error.Default')
                  }
                },
                Label: {
                  ConfirmAbandon: e('Label.ConfirmAbandon'),
                  RejectAbandon: e('Label.RejectAbandon')
                }
              }
            }(i)
          }
        )
      ) [0],
      d = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              renderInline: n,
              translate: i,
              resources: s,
              eventService: r,
              metricsService: a,
              onModalChallengeAbandoned: c,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !0
            }
          }
        )
      ) [0],
      p = (0, ue.useReducer) (Bc, d),
      h = p[0],
      f = p[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== h.onChallengeCompletedData &&
            null === h.onChallengeInvalidatedData &&
            o(h.onChallengeCompletedData)
          }
        ),
        [
          h.onChallengeCompletedData,
          h.onChallengeInvalidatedData,
          o
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === h.onChallengeCompletedData &&
            null !== h.onChallengeInvalidatedData &&
            (
              r.sendChallengeInvalidatedEvent(),
              a.fireChallengeInvalidatedEvent(),
              l(h.onChallengeInvalidatedData)
            )
          }
        ),
        [
          t,
          r,
          a,
          h.onChallengeCompletedData,
          h.onChallengeInvalidatedData,
          l
        ]
      ),
      se().createElement(qc.Provider, {
        value: {
          state: h,
          dispatch: f
        }
      }, u)
    },
    jc = function () {
      var e = (0, ue.useContext) (qc);
      if (null === e) throw new Error(
        'PhoneVerificationContext was not provided in the current scope'
      );
      return e
    },
    Yc = function () {
      var e = jc(),
      t = e.state,
      n = t.renderInline,
      r = t.resources,
      a = t.metricsService,
      i = t.eventService,
      o = t.isModalVisible,
      l = e.dispatch,
      c = (0, ue.useState) (!1),
      u = c[0],
      s = c[1],
      d = (0, ue.useCallback) (
        (
          function (e) {
            if (e) return l({
              type: Pc.SET_CHALLENGE_COMPLETED,
              onChallengeCompletedData: {
              }
            }),
            i.sendChallengeCompletedEvent(),
            void a.fireChallengeCompletedEvent();
            s(!0),
            l({
              type: Pc.HIDE_MODAL_CHALLENGE
            })
          }
        ),
        [
          l,
          i,
          a
        ]
      ),
      p = (0, ue.useCallback) ((function () {
        s(!1),
        l({
          type: Pc.SHOW_MODAL_CHALLENGE
        })
      }), [
        l
      ]),
      h = (0, ue.useCallback) (
        (
          function () {
            s(!1),
            l({
              type: Pc.SET_CHALLENGE_INVALIDATED,
              errorCode: 0
            }),
            i.sendChallengeInvalidatedEvent(),
            a.fireChallengeInvalidatedEvent()
          }
        ),
        [
          l,
          i,
          a
        ]
      );
      (0, ue.useEffect) (
        (
          function () {
            o &&
            H.UpsellService.renderPhoneUpsell({
              onClose: d,
              origin: 'challenge',
              addPhoneHeadingKey: Vc.VerifyYourAccountHeader,
              addPhoneDescriptionKey: xc.SuspiciousActivityPhoneVerification,
              containerId: Mc,
              addPhoneLegalTextKey: xc.LegalText,
              renderInWebview: n
            })
          }
        ),
        [
          d,
          o
        ]
      );
      var f = function () {
        var e = n ? Si : Ii.Modal.Body;
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(e, null, se().createElement('div', {
            id: Mc
          }))
        )
      };
      return se().createElement(
        se().Fragment,
        null,
        u ? se().createElement(
          dc,
          {
            renderInline: n,
            confirmAbandonLabel: r.Label.ConfirmAbandon,
            rejectAbandonLabel: r.Label.RejectAbandon,
            abandonConfirmationTitle: r.Header.ConfirmAbandon,
            abandonConfirmationDescription: r.Description.ConfirmAbandon,
            isConfirmationModalVisible: u,
            handleContinue: p,
            handleConfirmAbandon: h
          }
        ) : n ? se().createElement(Ti, {
          titleText: ''
        }, f()) : se().createElement(
          Ii.Modal,
          {
            className: 'modal-modern',
            backdrop: 'static',
            show: o
          },
          f()
        )
      )
    },
    Kc = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.renderInline,
          r = e.eventService,
          a = e.metricsService,
          i = e.translate,
          o = e.onChallengeCompleted,
          l = e.onChallengeInvalidated,
          c = e.onModalChallengeAbandoned;
          return se().createElement(
            Zc,
            {
              challengeId: t,
              renderInline: n,
              eventService: r,
              metricsService: a,
              translate: i,
              onChallengeCompleted: o,
              onChallengeInvalidated: l,
              onModalChallengeAbandoned: c
            },
            se().createElement(Yc, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.PhoneVerificationChallenge'
      }
    ),
    Jc = function () {
      function e(e) {
        this.challengeId = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Hc,
          Wc.challengeInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Hc,
          Wc.challengeCompleted,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Hc,
          Wc.challengeInvalidated,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Xc = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'PhoneVerification_' + Gc.challengeSolveTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(Uc.challengeInitialized),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(Uc.challengeCompleted),
        this.fireSolveTimeEvent(Uc.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(Uc.challengeInvalidated),
        this.fireSolveTimeEvent(Uc.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(Uc.challengeAbandoned),
        this.fireSolveTimeEvent(Uc.challengeAbandoned)
      },
      e.prototype.fireEvent = function (e) {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventPhoneVerification,
          value: 1,
          labelValues: {
            event_type: 'PhoneVerification_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimePhoneVerification,
          value: t,
          labelValues: {
            event_type: 'PhoneVerification_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }();
    !function (e) {
      e[e.UNKNOWN = 0] = 'UNKNOWN'
    }(zc || (zc = {}));
    var Qc,
    $c,
    eu = new hi,
    tu = 'accountSecurityChallengePrivateAccessTokenEvent',
    nu = {
      challengeInitialized: 'challengeInitialized',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned'
    },
    ru = {
      challengeInitialized: 'ChallengeInitialized',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned'
    },
    au = {
      challengeSolveTime: 'ChallengeSolveTime'
    };
    !function (e) {
      e[e.INITIAL = 0] = 'INITIAL',
      e[e.COMPLETED_ERROR = 1] = 'COMPLETED_ERROR',
      e[e.COMPLETED_SUCCESS = 2] = 'COMPLETED_SUCCESS'
    }(Qc || (Qc = {})),
    function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED'
    }($c || ($c = {}));
    var iu,
    ou = function () {
      return (
        ou = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    lu = function (e, t) {
      var n = ou({
      }, e);
      switch (t.type) {
        case $c.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n;
        case $c.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData,
          n;
        default:
          return e
      }
    },
    cu = (0, ue.createContext) (null),
    uu = function (e) {
      var t = e.challengeId,
      n = e.renderInline,
      r = e.eventService,
      a = e.metricsService,
      i = e.requestService,
      o = e.translate,
      l = e.onChallengeDisplayed,
      c = e.onChallengeCompleted,
      u = e.onChallengeInvalidated,
      s = e.onModalChallengeAbandoned,
      d = e.children,
      p = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Description: {
                  VerificationError: e('Description.VerificationError'),
                  VerificationSuccess: e('Description.VerificationSuccess'),
                  VerifyingYouAreNotBot: e('Description.VerifyingYouAreNotBot')
                }
              }
            }(o)
          }
        )
      ) [0],
      h = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              renderInline: n,
              resources: p,
              eventService: r,
              metricsService: a,
              requestService: i,
              onChallengeDisplayed: l,
              onModalChallengeAbandoned: s,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !1
            }
          }
        )
      ) [0],
      f = (0, ue.useReducer) (lu, h),
      v = f[0],
      m = f[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== v.onChallengeCompletedData &&
            null === v.onChallengeInvalidatedData &&
            c(v.onChallengeCompletedData)
          }
        ),
        [
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          c
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== v.onChallengeInvalidatedData &&
            null === v.onChallengeCompletedData &&
            (
              r.sendChallengeInvalidatedEvent(),
              a.fireChallengeInvalidatedEvent(),
              u(v.onChallengeInvalidatedData)
            )
          }
        ),
        [
          r,
          a,
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          u
        ]
      ),
      se().createElement(cu.Provider, {
        value: {
          state: v,
          dispatch: m
        }
      }, d)
    },
    su = function () {
      var e = (0, ue.useContext) (cu);
      if (null === e) throw new Error(
        'PrivateAccessTokenContext was not provided in the current scope'
      );
      return e
    },
    du = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    pu = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    hu = function () {
      var e = su(),
      t = e.state,
      n = t.renderInline,
      r = t.challengeId,
      a = t.resources,
      i = t.requestService,
      o = t.metricsService,
      l = t.eventService,
      c = e.dispatch,
      u = (0, ue.useState) (Qc.INITIAL),
      s = u[0],
      d = u[1],
      p = 'ChallengeId',
      h = (0, ue.useCallback) (
        (
          function () {
            return du(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  var e,
                  t;
                  return pu(
                    this,
                    (
                      function (n) {
                        switch (n.label) {
                          case 0:
                            return s !== Qc.INITIAL ? [
                              2
                            ] : (
                              e = sr.localStorageService.getLocalStorage(p),
                              r === e ? [
                                2
                              ] : (
                                sr.localStorageService.setLocalStorage(p, r),
                                [
                                  4,
                                  i.privateAccessToken.getPatToken(r)
                                ]
                              )
                            );
                          case 1:
                            if ((t = n.sent()).isError) {
                              if (t.errorStatusCode === pe.httpResponseCodes.unauthorized) return d(Qc.COMPLETED_SUCCESS),
                              c({
                                type: $c.SET_CHALLENGE_COMPLETED,
                                onChallengeCompletedData: {
                                  redemptionToken: ''
                                }
                              }),
                              l.sendChallengeCompletedEvent(!1),
                              o.fireChallengeCompletedEvent(),
                              [
                                2
                              ];
                              d(Qc.COMPLETED_ERROR),
                              c({
                                type: $c.SET_CHALLENGE_INVALIDATED,
                                onChallengeInvalidatedData: {
                                  errorCode: (t.error, bc.UNKNOWN),
                                  errorMessage: a.Description.VerificationError
                                }
                              })
                            } else d(Qc.COMPLETED_SUCCESS),
                            l.sendChallengeCompletedEvent(!0),
                            o.fireChallengeCompletedEvent(),
                            c({
                              type: $c.SET_CHALLENGE_COMPLETED,
                              onChallengeCompletedData: {
                                redemptionToken: t.value.redemptionToken
                              }
                            });
                            return [2]
                        }
                      }
                    )
                  )
                }
              )
            )
          }
        ),
        [
          a,
          c,
          i.privateAccessToken,
          s,
          o,
          l,
          r
        ]
      );
      return (0, ue.useEffect) ((function () {
        h()
      }), []),
      n ? se().createElement(
        Ti,
        {
          titleText: a.Description.VerifyingYouAreNotBot
        },
        se().createElement(
          Si,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin'
            }
          )
        )
      ) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          backdrop: 'static'
        },
        se().createElement(
          Ii.Modal.Body,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin'
            }
          )
        )
      )
    },
    fu = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.renderInline,
          r = e.eventService,
          a = e.metricsService,
          i = e.requestService,
          o = e.translate,
          l = e.onChallengeDisplayed,
          c = e.onChallengeCompleted,
          u = e.onChallengeInvalidated,
          s = e.onModalChallengeAbandoned;
          return se().createElement(
            uu,
            {
              challengeId: t,
              renderInline: n,
              eventService: r,
              metricsService: a,
              requestService: i,
              translate: o,
              onChallengeDisplayed: l,
              onChallengeCompleted: c,
              onChallengeInvalidated: u,
              onModalChallengeAbandoned: s
            },
            se().createElement(hu, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.PrivateAccessTokenChallenge'
      }
    ),
    vu = function () {
      function e(e) {
        this.challengeId = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          tu,
          nu.challengeInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          tu,
          nu.challengeCompleted,
          {
            challengeId: this.challengeId,
            supportPAT: e
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          tu,
          nu.challengeInvalidated,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function () {
        W().EventStream.SendEventWithTarget(
          tu,
          nu.challengeAbandoned,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    mu = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'PrivateAccessToken_' + au.challengeSolveTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(ru.challengeInitialized),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(ru.challengeCompleted),
        this.fireSolveTimeEvent(ru.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(ru.challengeInvalidated),
        this.fireSolveTimeEvent(ru.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(ru.challengeAbandoned),
        this.fireSolveTimeEvent(ru.challengeAbandoned)
      },
      e.prototype.fireEvent = function (e) {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventPat,
          value: 1,
          labelValues: {
            event_type: 'PrivateAccessToken_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimePat,
          value: t,
          labelValues: {
            event_type: 'PrivateAccessToken_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    yu = new hi,
    Eu = function (e) {
      var t = e.containerId,
      n = e.challengeId,
      r = e.appType,
      a = e.renderInline,
      i = e.onChallengeDisplayed,
      o = e.onChallengeCompleted,
      l = e.onChallengeInvalidated,
      c = e.onModalChallengeAbandoned,
      u = document.getElementById(t);
      if (null !== u) {
        (0, de.unmountComponentAtNode) (u);
        var s = new vu(n),
        d = new mu(r, yu);
        return (0, de.render) (
          se().createElement(
            fu,
            {
              challengeId: n,
              renderInline: a,
              eventService: s,
              metricsService: d,
              requestService: yu,
              onChallengeDisplayed: i,
              onChallengeCompleted: o,
              onChallengeInvalidated: l,
              onModalChallengeAbandoned: c
            }
          ),
          u
        ),
        s.sendChallengeInitializedEvent(),
        d.fireChallengeInitializedEvent(),
        !0
      }
      return !1
    },
    gu = 'Proof-of-Space:',
    Cu = 'accountSecurityChallengeProofOfSpaceEvent',
    bu = {
      challengeInitialized: 'challengeInitialized',
      puzzleInitialized: 'puzzleInitialized',
      puzzleCompleted: 'puzzleCompleted',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned',
      challengeTimeout: 'challengeTimeout'
    },
    Iu = {
      challengeInitialized: 'ChallengeInitialized',
      puzzleInitialized: 'PuzzleInitialized',
      puzzleCompleted: 'PuzzleCompleted',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned',
      challengeTimeout: 'ChallengeTimeout'
    },
    Tu = {
      puzzleWorkingTime: 'PuzzleWorkingTime',
      challengeSolveTime: 'ChallengeSolveTime'
    },
    Su = function () {
      function e(e, t, n) {
        this.blocks = [],
        this.length = e,
        this.blockSize = Math.pow(2, Math.floor(Math.log2(t))),
        this.blockIndexShift = Math.log2(this.blockSize) >>> 0,
        this.blockOffsetMask = this.blockSize - 1 >>> 0,
        this.head = 0,
        n ||
        this.allocate(this.length)
      }
      return e.prototype.allocate = function (e) {
        for (var t = 0; t < Math.ceil(e / this.blockSize); t++) this.blocks.push(new Uint32Array(this.blockSize))
      },
      e.prototype.destructor = function () {
        this.blocks = []
      },
      e.prototype.push = function (e) {
        this.blocks[this.head >>> this.blockIndexShift][this.head & this.blockOffsetMask] = e,
        this.head += 1
      },
      e.prototype.concat = function (e) {
        for (var t = 0; t < e.blocks.length; t++) this.blocks.push(e.blocks[t]),
        this.head += this.blockSize
      },
      e.prototype.get = function (e) {
        return this.blocks[e >>> this.blockIndexShift][e & this.blockOffsetMask]
      },
      e.prototype.getHead = function () {
        return this.head
      },
      e
    }(),
    _u = function () {
      function e(e) {
        this.seed = parseInt(e, 10)
      }
      return e.prototype.hash = function (e) {
        for (var t = this.seed, n = 0; n < e.length; n++) {
          var r = e[n];
          r = (r = Math.imul(r, 3432918353)) << 15 | r >>> 17,
          t = (t ^= r = Math.imul(r >>> 0, 461845907) >>> 0) << 13 | t >>> 19,
          t = 3864292196 + (Math.imul(t >>> 0, 5) >>> 0) >>> 0
        }
        return t ^= 4 * e.length,
        t ^= t >>> 16,
        t = Math.imul(t, 2246822507),
        t ^= t >>> 13,
        t = Math.imul(t, 3266489909),
        (t ^= t >>> 16) >>> 0
      },
      e.prototype.hashOneValue = function (e) {
        var t = this.seed,
        n = e;
        return n = (n = Math.imul(n, 3432918353)) << 15 | n >>> 17,
        t = (t ^= n = Math.imul(n >>> 0, 461845907) >>> 0) << 13 | t >>> 19,
        t = 3864292196 + (Math.imul(t >>> 0, 5) >>> 0) >>> 0,
        t ^= 4,
        t ^= t >>> 16,
        t = Math.imul(t, 2246822507),
        t ^= t >>> 13,
        t = Math.imul(t, 3266489909),
        (t ^= t >>> 16) >>> 0
      },
      e.prototype.hashTwoValues = function (e, t) {
        var n = this.seed,
        r = e;
        return r = (r = Math.imul(r, 3432918353)) << 15 | r >>> 17,
        n = (n ^= r = Math.imul(r >>> 0, 461845907) >>> 0) << 13 | n >>> 19,
        n = 3864292196 + (Math.imul(n >>> 0, 5) >>> 0) >>> 0,
        r = t,
        r = (r = Math.imul(r, 3432918353)) << 15 | r >>> 17,
        n = (n ^= r = Math.imul(r >>> 0, 461845907) >>> 0) << 13 | n >>> 19,
        n = 3864292196 + (Math.imul(n >>> 0, 5) >>> 0) >>> 0,
        n ^= 8,
        n ^= n >>> 16,
        n = Math.imul(n, 2246822507),
        n ^= n >>> 13,
        n = Math.imul(n, 3266489909),
        (n ^= n >>> 16) >>> 0
      },
      e.prototype.hashThreeValues = function (e, t, n) {
        var r = this.seed,
        a = e;
        return a = (a = Math.imul(a, 3432918353)) << 15 | a >>> 17,
        r = (r ^= a = Math.imul(a >>> 0, 461845907) >>> 0) << 13 | r >>> 19,
        r = 3864292196 + (Math.imul(r >>> 0, 5) >>> 0) >>> 0,
        a = t,
        a = (a = Math.imul(a, 3432918353)) << 15 | a >>> 17,
        r = (r ^= a = Math.imul(a >>> 0, 461845907) >>> 0) << 13 | r >>> 19,
        r = 3864292196 + (Math.imul(r >>> 0, 5) >>> 0) >>> 0,
        a = n,
        a = (a = Math.imul(a, 3432918353)) << 15 | a >>> 17,
        r = (r ^= a = Math.imul(a >>> 0, 461845907) >>> 0) << 13 | r >>> 19,
        r = 3864292196 + (Math.imul(r >>> 0, 5) >>> 0) >>> 0,
        r ^= 12,
        r ^= r >>> 16,
        r = Math.imul(r, 2246822507),
        r ^= r >>> 13,
        r = Math.imul(r, 3266489909),
        (r ^= r >>> 16) >>> 0
      },
      e
    }(),
    Au = Math.pow(2, 18);
    !function (e) {
      e[e.INIT_GRAPH = 0] = 'INIT_GRAPH',
      e[e.PEBBLE_GRAPH = 1] = 'PEBBLE_GRAPH',
      e[e.CREATE_MERKLE_TREE = 2] = 'CREATE_MERKLE_TREE',
      e[e.GENERATE_SOLUTION = 3] = 'GENERATE_SOLUTION'
    }(iu || (iu = {}));
    var Nu,
    Lu = function () {
      function e(e) {
        this.layers = e.layers,
        this.rounds = e.rounds,
        this.hasher = new _u(e.seed),
        this.merkleLayers = Math.pow(2, Math.floor(Math.log2(this.layers))),
        this.blockSize = Math.pow(2, Math.min(this.layers, 17)),
        this.layerSize = Math.pow(2, this.layers),
        this.prevLayer = new Su(this.layerSize, this.blockSize, !0),
        this.curLayer = new Su(this.layerSize, this.blockSize, !0),
        this.merkleTree = new Su(2 * this.merkleLayers * this.layerSize - 1, this.blockSize, !0),
        this.step = iu.INIT_GRAPH,
        this.pebblingLayer = 0,
        this.totalComputedNodes = (this.layers + this.merkleLayers + 1) * this.layerSize - 1,
        this.isCancelled = !1
      }
      return e.prototype.initPebbling = function (e) {
        0 === this.curLayer.getHead() &&
        this.curLayer.allocate(this.layerSize);
        for (var t = 0; t < e && this.curLayer.getHead() < this.layerSize; ++t) this.curLayer.push(this.hasher.hashOneValue(this.curLayer.getHead()));
        this.curLayer.getHead() === this.layerSize &&
        (
          this.pebblingLayer += 1,
          this.prevLayer = this.curLayer,
          this.curLayer = new Su(this.layerSize, this.blockSize),
          this.step = iu.PEBBLE_GRAPH
        )
      },
      e.prototype.pebble = function (e) {
        for (var t = 0; t < e && this.curLayer.getHead() < this.layerSize; ++t) {
          var n = this.curLayer.getHead() | 1 << this.layers - this.pebblingLayer,
          r = this.curLayer.getHead() & ~(1 << this.layers - this.pebblingLayer);
          this.curLayer.push(
            this.hasher.hashThreeValues(
              this.curLayer.getHead() + this.pebblingLayer * this.layerSize,
              this.prevLayer.get(n),
              this.prevLayer.get(r)
            )
          )
        }
        this.curLayer.getHead() === this.layerSize &&
        (
          this.layers - this.pebblingLayer < this.merkleLayers &&
          this.merkleTree.concat(this.curLayer),
          this.pebblingLayer += 1,
          this.prevLayer = this.curLayer,
          this.curLayer = new Su(this.layerSize, this.blockSize)
        ),
        this.pebblingLayer === this.layers + 1 &&
        (
          this.prevLayer.destructor(),
          this.curLayer.destructor(),
          this.step = iu.CREATE_MERKLE_TREE,
          this.merkleTree.allocate(this.merkleLayers * this.layerSize - 1)
        )
      },
      e.prototype.createMerkleTree = function (e) {
        for (
          var t = 2 * (
            this.merkleTree.getHead() - Math.ceil(this.merkleTree.length / 2)
          ),
          n = 0;
          n < e &&
          this.merkleTree.getHead() < this.merkleTree.length;
          n++
        ) this.merkleTree.push(
          this.hasher.hashTwoValues(this.merkleTree.get(t), this.merkleTree.get(t + 1))
        ),
        t += 2;
        this.merkleTree.getHead() === this.merkleTree.length &&
        (this.step = iu.GENERATE_SOLUTION)
      },
      e.prototype.dispatch = function (e) {
        try {
          switch (this.step) {
            case iu.INIT_GRAPH:
              this.initPebbling(e);
              break;
            case iu.PEBBLE_GRAPH:
              this.pebble(e);
              break;
            case iu.CREATE_MERKLE_TREE:
              this.createMerkleTree(e)
          }
        } catch (e) {
          return e instanceof Error ? e.message : String(e)
        }
        return null
      },
      e.prototype.run = function (e, t, n) {
        for (var r = Math.ceil(this.totalComputedNodes / 1000); !this.isDone(); ) {
          var a = this.dispatch(r);
          if (null !== a) return void n(a);
          e(this.progress())
        }
        t(this.answer()),
        this.merkleTree.destructor()
      },
      e.prototype.runAsync = function (e, t, n, r) {
        var a = this,
        i = function () {
          var o = a.dispatch(r || Au);
          null === o ? (
            e(a.progress()),
            a.isCancelled ||
            (a.isDone() ? t(a.answer()) : setTimeout(i, 0))
          ) : n(o)
        };
        setTimeout(i, 0),
        this.merkleTree.destructor()
      },
      e.prototype.cancelRunAsync = function () {
        this.isCancelled = !0
      },
      e.prototype.generateChallenge = function (e) {
        var t = this.hasher.hashOneValue(e),
        n = (this.layers - this.merkleLayers + 1 + 1) * this.layerSize;
        return t % ((this.merkleLayers - 1) * this.layerSize) + n
      },
      e.prototype.open = function (e) {
        var t = [],
        n = e - (this.layers - this.merkleLayers + 1) * this.layerSize;
        t.push(this.merkleTree.get(n));
        for (var r = 0; r < this.layers + Math.log2(this.merkleLayers); r++) n = n % 2 == 0 ? n + 1 : n - 1,
        t.push(this.merkleTree.get(n)),
        n = this.merkleTree.length - Math.floor((this.merkleTree.length - n) / 2);
        return t
      },
      e.prototype.answer = function () {
        if (!this.isDone()) return null;
        for (
          var e = [],
          t = this.merkleTree.get(this.merkleTree.length - 1),
          n = this.generateChallenge(t),
          r = 0;
          r < this.rounds;
          r++
        ) {
          var a = this.open(n),
          i = n >>> this.layers,
          o = (n | 1 << this.layers - i) - this.layerSize,
          l = (n & ~(1 << this.layers - i)) - this.layerSize;
          a = (a = a.concat(this.open(o))).concat(this.open(l)),
          e.push(a.map((function (e) {
            return e.toString()
          }))),
          n = this.generateChallenge(n)
        }
        return {
          commitment: t.toString(),
          solutions: e
        }
      },
      e.prototype.progress = function () {
        return (
          this.pebblingLayer * this.layerSize + this.curLayer.getHead() + Math.max(this.merkleTree.getHead() - this.merkleLayers * this.layerSize, 0)
        ) / this.totalComputedNodes
      },
      e.prototype.isDone = function () {
        return this.step === iu.GENERATE_SOLUTION
      },
      e
    }();
    !function (e) {
      e[e.TIME_LOCK_PUZZLE = 0] = 'TIME_LOCK_PUZZLE',
      e[e.GRAPH_PEBBLING_PUZZLE = 1] = 'GRAPH_PEBBLING_PUZZLE'
    }(Nu || (Nu = {}));
    var Du,
    wu = 10000,
    Ou = 'PoSTChallengeId';
    !function (e) {
      e[e.INITIAL = 0] = 'INITIAL',
      e[e.READY_TO_COMPUTE = 1] = 'READY_TO_COMPUTE',
      e[e.COMPUTING = 2] = 'COMPUTING',
      e[e.COMPUTING_DONE = 3] = 'COMPUTING_DONE',
      e[e.VERIFIED_CORRECT = 4] = 'VERIFIED_CORRECT',
      e[e.VERIFIED_INCORRECT = 5] = 'VERIFIED_INCORRECT'
    }(Du || (Du = {}));
    var ku,
    Ru = function (e) {
      switch (e) {
        case Zt.INVALID_SESSION:
          return Ic.SESSION_INVALID;
        default:
          return Ic.UNKNOWN
      }
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.SET_CHALLENGE_ABANDONED = 2] = 'SET_CHALLENGE_ABANDONED',
      e[e.SET_CHALLENGE_TIMEOUT = 3] = 'SET_CHALLENGE_TIMEOUT',
      e[e.HIDE_MODAL_CHALLENGE = 4] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 5] = 'SHOW_MODAL_CHALLENGE'
    }(ku || (ku = {}));
    var Pu,
    Mu,
    xu,
    Vu = function () {
      return (
        Vu = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Hu = function (e, t) {
      var n = Vu({
      }, e);
      switch (t.type) {
        case ku.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n;
        case ku.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData,
          n;
        case ku.SET_CHALLENGE_ABANDONED:
          return n.isAbandoned = !0,
          n;
        case ku.SET_CHALLENGE_TIMEOUT:
          return n.progressWhenTimedOut = t.progress,
          n;
        case ku.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case ku.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    Wu = (0, ue.createContext) (null),
    Uu = function (e) {
      var t = e.challengeId,
      n = e.renderInline,
      r = e.artifacts,
      a = e.eventService,
      i = e.metricsService,
      o = e.requestService,
      l = e.translate,
      c = e.onChallengeDisplayed,
      u = e.onChallengeCompleted,
      s = e.onChallengeInvalidated,
      d = e.onModalChallengeAbandoned,
      p = e.children,
      h = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Description: {
                  VerificationError: e('Description.VerificationError'),
                  VerificationSuccess: e('Description.VerificationSuccess'),
                  VerifyingYouAreNotBot: e('Description.VerifyingYouAreNotBot')
                }
              }
            }(l)
          }
        )
      ) [0],
      f = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              renderInline: n,
              artifacts: r,
              resources: h,
              eventService: a,
              metricsService: i,
              requestService: o,
              onChallengeDisplayed: c,
              onModalChallengeAbandoned: d,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !1,
              isAbandoned: !1,
              progressWhenTimedOut: null
            }
          }
        )
      ) [0],
      v = (0, ue.useReducer) (Hu, f),
      m = v[0],
      y = v[1];
      return (0, ue.useEffect) (
        (
          function () {
            null === m.onChallengeCompletedData ||
            null !== m.onChallengeInvalidatedData ||
            m.isAbandoned ||
            null !== m.progressWhenTimedOut ||
            (
              a.sendChallengeCompletedEvent(),
              i.fireChallengeCompletedEvent(),
              u(m.onChallengeCompletedData)
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          m.isAbandoned,
          m.progressWhenTimedOut,
          u
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeCompletedData ||
            null === m.onChallengeInvalidatedData ||
            m.isAbandoned ||
            null !== m.progressWhenTimedOut ||
            (
              a.sendChallengeInvalidatedEvent(),
              i.fireChallengeInvalidatedEvent(),
              s(m.onChallengeInvalidatedData)
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          m.isAbandoned,
          m.progressWhenTimedOut,
          s
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === m.onChallengeCompletedData &&
            null === m.onChallengeInvalidatedData &&
            m.isAbandoned &&
            null === m.progressWhenTimedOut &&
            (
              a.sendChallengeAbandonedEvent(),
              i.fireChallengeAbandonedEvent(),
              null !== d &&
              d((function () {
                return y({
                  type: ku.SHOW_MODAL_CHALLENGE
                })
              }))
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          m.isAbandoned,
          m.progressWhenTimedOut,
          d
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeCompletedData ||
            null !== m.onChallengeInvalidatedData ||
            m.isAbandoned ||
            null === m.progressWhenTimedOut ||
            (
              a.sendChallengeTimeoutEvent(m.progressWhenTimedOut),
              i.fireChallengeTimeoutEvent(),
              u({
                redemptionToken: ''
              })
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          m.isAbandoned,
          m.progressWhenTimedOut,
          u
        ]
      ),
      se().createElement(Wu.Provider, {
        value: {
          state: m,
          dispatch: y
        }
      }, p)
    },
    Gu = function () {
      var e = (0, ue.useContext) (Wu);
      if (null === e) throw new Error('ProofOfSpaceContext was not provided in the current scope');
      return e
    },
    zu = (
      null !== (Pu = H.EnvironmentUrls.websiteUrl) &&
      void 0 !== Pu ? Pu : 'URL_NOT_FOUND'
    ) + '/worker-resources/script/?component=ChallengeWebWorkers',
    Fu = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Bu = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    qu = function (e) {
      return e.toFixed(0) + '%'
    },
    Zu = function () {
      var e = Gu(),
      t = e.state,
      n = t.challengeId,
      r = t.artifacts,
      a = t.renderInline,
      i = t.resources,
      o = t.eventService,
      l = t.metricsService,
      c = t.requestService,
      u = t.onChallengeDisplayed,
      s = t.isModalVisible,
      d = e.dispatch,
      p = (0, ue.useState) (null),
      h = p[0],
      f = p[1],
      v = (0, ue.useState) (Du.INITIAL),
      m = v[0],
      y = v[1],
      E = (0, ue.useState) (0),
      g = E[0],
      C = E[1],
      b = (0, ue.useRef) (null),
      I = (0, ue.useRef) (null),
      T = (0, ue.useRef) (null),
      S = (0, ue.useRef) (0),
      _ = (0, ue.useRef) (0),
      A = (0, ue.useCallback) (
        (
          function () {
            T.current = setTimeout(
              (
                function () {
                  d({
                    type: ku.SHOW_MODAL_CHALLENGE
                  }),
                  u({
                    displayed: !0
                  })
                }
              ),
              5000
            )
          }
        ),
        [
          d,
          u
        ]
      ),
      N = function () {
        clearTimeout(T.current || void 0),
        b.current &&
        (b.current.terminate(), b.current = null),
        I.current &&
        (I.current.cancelRunAsync(), I.current = null),
        f(null),
        y(Du.INITIAL)
      },
      L = function () {
        return d({
          type: ku.HIDE_MODAL_CHALLENGE
        })
      },
      D = function () {
        d({
          type: ku.SET_CHALLENGE_ABANDONED
        }),
        N(),
        L()
      },
      w = function () {
        d({
          type: ku.SET_CHALLENGE_TIMEOUT,
          progress: S.current
        }),
        N(),
        L()
      },
      O = function () {
        1 !== S.current &&
        (
          S.current < _.current + 0.33 ? w() : (_.current = S.current, setTimeout(O, wu))
        )
      },
      k = function () {
        N();
        try {
          b.current = new Worker(zu)
        } catch (e) {
          b.current = null
        }
        y(Du.READY_TO_COMPUTE)
      },
      R = function () {
        return Fu(
          void 0,
          void 0,
          void 0,
          (
            function () {
              return Bu(
                this,
                (
                  function (e) {
                    switch (e.label) {
                      case 0:
                        switch (m) {
                          case Du.READY_TO_COMPUTE:
                            return [3,
                            1];
                          case Du.COMPUTING_DONE:
                            return [3,
                            2]
                        }
                        return [3,
                        4];
                      case 1:
                        return o.sendPuzzleInitializedEvent(),
                        l.firePuzzleInitializedEvent(),
                        A(),
                        function () {
                          if (m !== Du.READY_TO_COMPUTE) return y(Du.VERIFIED_INCORRECT),
                          d({
                            type: ku.SET_CHALLENGE_INVALIDATED,
                            onChallengeInvalidatedData: {
                              errorCode: Ic.UNKNOWN,
                              errorMessage: i.Description.VerificationError
                            }
                          }),
                          void L();
                          var e = {
                            seed: r.seed,
                            layers: parseInt(r.layers, 10),
                            rounds: parseInt(r.rounds, 10)
                          };
                          if (null == b.current) return I.current = new Lu(e),
                          y(Du.COMPUTING),
                          I.current.runAsync(
                            (function (e) {
                              C(e),
                              S.current = e
                            }),
                            (function (e) {
                              f(e),
                              y(Du.COMPUTING_DONE)
                            }),
                            (
                              function (e) {
                                console.error(gu, 'exception caught in fallback solver:', e),
                                w()
                              }
                            )
                          ),
                          void setTimeout(O, wu);
                          y(Du.COMPUTING),
                          b.current.onmessage = function (e) {
                            var t = 'object' == typeof e.data ? e.data : JSON.parse(e.data);
                            if (t.error) return console.error(gu, 'exception caught in worker:', t.error),
                            void w();
                            C(t.progress),
                            S.current = t.progress,
                            t.answer &&
                            (f(t.answer), y(Du.COMPUTING_DONE))
                          },
                          b.current.postMessage(
                            JSON.stringify({
                              solverType: Nu.GRAPH_PEBBLING_PUZZLE,
                              solverParameters: e
                            })
                          ),
                          setTimeout(O, wu)
                        }(),
                        [
                          3,
                          5
                        ];
                      case 2:
                        return o.sendPuzzleCompletedEvent(),
                        l.firePuzzleCompletedEvent(),
                        [
                          4,
                          Fu(
                            void 0,
                            void 0,
                            void 0,
                            (
                              function () {
                                var e;
                                return Bu(
                                  this,
                                  (
                                    function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return null == h ? [
                                            2
                                          ] : [
                                            4,
                                            c.proofOfSpace.verifyPuzzle(n, h)
                                          ];
                                        case 1:
                                          return (e = t.sent()).isError ? (
                                            d({
                                              type: ku.SET_CHALLENGE_INVALIDATED,
                                              onChallengeInvalidatedData: {
                                                errorCode: Ru(e.error),
                                                errorMessage: i.Description.VerificationError
                                              }
                                            }),
                                            [
                                              2
                                            ]
                                          ) : (
                                            e.value.redemptionToken ? (
                                              y(Du.VERIFIED_CORRECT),
                                              d({
                                                type: ku.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                  redemptionToken: e.value.redemptionToken
                                                }
                                              })
                                            ) : (
                                              y(Du.VERIFIED_INCORRECT),
                                              d({
                                                type: ku.SET_CHALLENGE_INVALIDATED,
                                                onChallengeInvalidatedData: {
                                                  errorCode: Ic.ANSWER_INVALID,
                                                  errorMessage: i.Description.VerificationError
                                                }
                                              })
                                            ),
                                            [
                                              2
                                            ]
                                          )
                                      }
                                    }
                                  )
                                )
                              }
                            )
                          )
                        ];
                      case 3:
                        return e.sent(),
                        N(),
                        L(),
                        [
                          3,
                          5
                        ];
                      case 4:
                        return [3,
                        5];
                      case 5:
                        return [2]
                    }
                  }
                )
              )
            }
          )
        )
      };
      (0, ue.useEffect) (
        (
          function () {
            var e = sr.localStorageService.getLocalStorage(Ou);
            return n === e ? function () {
            }
             : (
              sr.localStorageService.setLocalStorage(Ou, n),
              o.sendChallengeInitializedEvent(),
              l.fireChallengeInitializedEvent(),
              k(),
              N
            )
          }
        ),
        []
      ),
      (0, ue.useEffect) ((function () {
        R()
      }), [
        m
      ]);
      var P = function () {
        var e = a ? Si : Ii.Modal.Body,
        t = 100 * (g || 0);
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(
            e,
            null,
            se().createElement(
              'div',
              {
                className: 'computation-progress-body'
              },
              se().createElement(Ii.ProgressBar, {
                now: t,
                label: qu(t),
                striped: !0
              })
            )
          )
        )
      };
      return a ? se().createElement(Ti, {
        titleText: i.Description.VerifyingYouAreNotBot
      }, P()) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern modal-modern-challenge-computation-progress',
          show: s,
          onHide: D,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: i.Description.VerifyingYouAreNotBot,
            buttonType: go.CLOSE,
            buttonAction: D,
            buttonEnabled: !0,
            headerInfo: null
          }
        ),
        P()
      )
    },
    ju = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.renderInline,
          r = e.artifacts,
          a = e.eventService,
          i = e.metricsService,
          o = e.requestService,
          l = e.translate,
          c = e.onChallengeDisplayed,
          u = e.onChallengeCompleted,
          s = e.onChallengeInvalidated,
          d = e.onModalChallengeAbandoned;
          return se().createElement(
            Uu,
            {
              challengeId: t,
              renderInline: n,
              artifacts: r,
              eventService: a,
              metricsService: i,
              requestService: o,
              translate: l,
              onChallengeDisplayed: c,
              onChallengeCompleted: u,
              onChallengeInvalidated: s,
              onModalChallengeAbandoned: d
            },
            se().createElement(Zu, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.ProofOfSpaceChallenge'
      }
    ),
    Yu = function () {
      function e(e) {
        this.challengeId = e,
        this.startTime = null
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        this.startTime = Date.now(),
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.challengeInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendPuzzleInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.puzzleInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendPuzzleCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.puzzleCompleted,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.challengeCompleted,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.challengeInvalidated,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.challengeAbandoned,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeTimeoutEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          Cu,
          bu.challengeTimeout,
          {
            challengeId: this.challengeId,
            timeoutProgress: e,
            timeoutElapsedTime: null !== this.startTime ? Date.now() - this.startTime : 0
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Ku = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'ProofOfSpace_' + Tu.challengeSolveTime,
        this.puzzleWorkingTimeSequenceName = 'ProofOfSpace_' + Tu.puzzleWorkingTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(Iu.challengeInitialized),
        ji &&
        ji.start(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.firePuzzleInitializedEvent = function () {
        this.fireEvent(Iu.puzzleInitialized),
        ji &&
        ji.start(
          this.puzzleWorkingTimeSequenceName,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        ),
        this.eventTimer.start(this.puzzleWorkingTimeSequenceName)
      },
      e.prototype.firePuzzleCompletedEvent = function () {
        this.fireEvent(Iu.puzzleCompleted),
        ji &&
        ji.endSuccess(
          this.puzzleWorkingTimeSequenceName,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        );
        var e = this.eventTimer.end(this.puzzleWorkingTimeSequenceName);
        null !== e &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.PuzzleComputeTimePos,
          value: e,
          labelValues: {
            event_type: 'ProofOfSpace_' + Iu.puzzleCompleted,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(Iu.challengeCompleted),
        ji &&
        ji.endSuccess(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(Iu.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(Iu.challengeInvalidated),
        ji &&
        ji.endFailure(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(Iu.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(Iu.challengeAbandoned),
        ji &&
        ji.endCancel(
          this.challengeSolveTimeSequenceName,
          this.puzzleWorkingTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(Iu.challengeAbandoned)
      },
      e.prototype.fireChallengeTimeoutEvent = function () {
        this.fireEvent(Iu.challengeTimeout),
        ji &&
        ji.endFailure(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(Iu.challengeTimeout)
      },
      e.prototype.fireEvent = function (e) {
        if (ji) {
          var t = 'ProofOfSpace_' + e;
          ji.fireEvent(t, t + '_' + this.appType)
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventPos,
          value: 1,
          labelValues: {
            event_type: 'ProofOfSpace_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimePos,
          value: t,
          labelValues: {
            event_type: 'ProofOfSpace_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    Ju = new hi,
    Xu = function (e) {
      var t = e.containerId,
      n = e.challengeId,
      r = e.artifacts,
      a = e.appType,
      i = e.renderInline,
      o = e.onChallengeDisplayed,
      l = e.onChallengeCompleted,
      c = e.onChallengeInvalidated,
      u = e.onModalChallengeAbandoned,
      s = document.getElementById(t);
      if (null !== s) {
        (0, de.unmountComponentAtNode) (s);
        var d = new Yu(n),
        p = new Ku(a, Ju);
        return (0, de.render) (
          se().createElement(
            ju,
            {
              challengeId: n,
              renderInline: i,
              artifacts: r,
              eventService: d,
              metricsService: p,
              requestService: Ju,
              onChallengeDisplayed: o,
              onChallengeCompleted: l,
              onChallengeInvalidated: c,
              onModalChallengeAbandoned: u
            }
          ),
          s
        ),
        !0
      }
      return !1
    },
    Qu = 'accountSecurityChallengeProofOfWorkEvent',
    $u = {
      challengeInitialized: 'challengeInitialized',
      puzzleInitialized: 'puzzleInitialized',
      puzzleCompleted: 'puzzleCompleted',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned',
      challengeTimeout: 'challengeTimeout'
    },
    es = {
      challengeInitialized: 'ChallengeInitialized',
      puzzleInitialized: 'PuzzleInitialized',
      puzzleCompleted: 'PuzzleCompleted',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned',
      challengeTimeout: 'ChallengeTimeout'
    },
    ts = {
      puzzleWorkingTime: 'PuzzleWorkingTime',
      challengeSolveTime: 'ChallengeSolveTime'
    },
    ns = n(135),
    rs = n.n(ns),
    as = function () {
      function e(e) {
        this.n = rs() (e.N),
        this.a = rs() (e.A),
        this.t = e.T,
        this.curBase = this.a,
        this.curT = 0,
        this.isCancelled = !1
      }
      return e.prototype.run = function (e, t) {
        for (var n = Math.max(1, this.t / 1000); !this.isDone(); ) this.doRepeatedSquaring(n),
        e(this.progress());
        t(this.answer())
      },
      e.prototype.runAsync = function (e, t, n) {
        var r = this,
        a = function () {
          r.doRepeatedSquaring(n || 200),
          e(r.progress()),
          r.isCancelled ||
          (r.isDone() ? t(r.answer()) : setTimeout(a, 0))
        };
        setTimeout(a, 0)
      },
      e.prototype.cancelRunAsync = function () {
        this.isCancelled = !0
      },
      e.prototype.doRepeatedSquaring = function (e) {
        for (
          var t = void 0 !== e ? Math.min(this.t, this.curT + e) : this.t;
          this.curT < t;
          this.curT += 1
        ) this.curBase = this.curBase.square().mod(this.n)
      },
      e.prototype.answer = function () {
        return this.isDone() ? this.curBase.toString() : null
      },
      e.prototype.progress = function () {
        return this.curT / this.t
      },
      e.prototype.isDone = function () {
        return this.curT === this.t
      },
      e
    }(),
    is = function (e) {
      switch (e) {
        case tn.SESSION_INACTIVE:
          return Sc.SESSION_INVALID;
        default:
          return Sc.UNKNOWN
      }
    };
    !function (e) {
      e[e.INITIAL = 0] = 'INITIAL',
      e[e.READY_TO_COMPUTE = 1] = 'READY_TO_COMPUTE',
      e[e.COMPUTING = 2] = 'COMPUTING',
      e[e.COMPUTING_DONE = 3] = 'COMPUTING_DONE',
      e[e.VERIFIED_CORRECT = 4] = 'VERIFIED_CORRECT',
      e[e.VERIFIED_INCORRECT = 5] = 'VERIFIED_INCORRECT'
    }(Mu || (Mu = {})),
    function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.SET_CHALLENGE_ABANDONED = 2] = 'SET_CHALLENGE_ABANDONED',
      e[e.SET_CHALLENGE_TIMEOUT = 3] = 'SET_CHALLENGE_TIMEOUT',
      e[e.HIDE_MODAL_CHALLENGE = 4] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 5] = 'SHOW_MODAL_CHALLENGE'
    }(xu || (xu = {}));
    var os,
    ls,
    cs = function () {
      return (
        cs = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    us = function (e, t) {
      var n = cs({
      }, e);
      switch (t.type) {
        case xu.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n;
        case xu.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData,
          n;
        case xu.SET_CHALLENGE_ABANDONED:
          return n.isAbandoned = !0,
          n;
        case xu.SET_CHALLENGE_TIMEOUT:
          return n.isTimeout = !0,
          n;
        case xu.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case xu.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    ss = (0, ue.createContext) (null),
    ds = function (e) {
      var t = e.sessionId,
      n = e.renderInline,
      r = e.eventService,
      a = e.metricsService,
      i = e.requestService,
      o = e.translate,
      l = e.onChallengeDisplayed,
      c = e.onChallengeCompleted,
      u = e.onChallengeInvalidated,
      s = e.onModalChallengeAbandoned,
      d = e.children,
      p = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Description: {
                  VerificationError: e('Description.VerificationError'),
                  VerificationSuccess: e('Description.VerificationSuccess'),
                  VerifyingYouAreNotBot: e('Description.VerifyingYouAreNotBot')
                }
              }
            }(o)
          }
        )
      ) [0],
      h = (0, ue.useState) (
        (
          function () {
            return {
              sessionId: t,
              renderInline: n,
              resources: p,
              eventService: r,
              metricsService: a,
              requestService: i,
              onChallengeDisplayed: l,
              onModalChallengeAbandoned: s,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !1,
              isAbandoned: !1,
              isTimeout: !1
            }
          }
        )
      ) [0],
      f = (0, ue.useReducer) (us, h),
      v = f[0],
      m = f[1];
      return (0, ue.useEffect) (
        (
          function () {
            null === v.onChallengeCompletedData ||
            null !== v.onChallengeInvalidatedData ||
            v.isAbandoned ||
            v.isTimeout ||
            (
              r.sendChallengeCompletedEvent(),
              a.fireChallengeCompletedEvent(),
              c(v.onChallengeCompletedData)
            )
          }
        ),
        [
          r,
          a,
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          v.isAbandoned,
          v.isTimeout,
          c
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== v.onChallengeCompletedData ||
            null === v.onChallengeInvalidatedData ||
            v.isAbandoned ||
            v.isTimeout ||
            (
              r.sendChallengeInvalidatedEvent(),
              a.fireChallengeInvalidatedEvent(),
              u(v.onChallengeInvalidatedData)
            )
          }
        ),
        [
          r,
          a,
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          v.isAbandoned,
          v.isTimeout,
          u
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === v.onChallengeCompletedData &&
            null === v.onChallengeInvalidatedData &&
            v.isAbandoned &&
            !v.isTimeout &&
            (
              r.sendChallengeAbandonedEvent(),
              a.fireChallengeAbandonedEvent(),
              null !== s &&
              s((function () {
                return m({
                  type: xu.SHOW_MODAL_CHALLENGE
                })
              }))
            )
          }
        ),
        [
          r,
          a,
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          v.isAbandoned,
          u,
          s
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null === v.onChallengeCompletedData &&
            null === v.onChallengeInvalidatedData &&
            !v.isAbandoned &&
            v.isTimeout &&
            (
              r.sendChallengeTimeoutEvent(),
              a.fireChallengeTimeoutEvent(),
              c({
                redemptionToken: ''
              })
            )
          }
        ),
        [
          r,
          a,
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          v.isAbandoned,
          v.isTimeout,
          c
        ]
      ),
      se().createElement(ss.Provider, {
        value: {
          state: v,
          dispatch: m
        }
      }, d)
    },
    ps = function () {
      var e = (0, ue.useContext) (ss);
      if (null === e) throw new Error('ProofOfWorkContext was not provided in the current scope');
      return e
    },
    hs = (
      null !== (os = H.EnvironmentUrls.websiteUrl) &&
      void 0 !== os ? os : 'URL_NOT_FOUND'
    ) + '/worker-resources/script/?component=ChallengeWebWorkers',
    fs = 10000,
    vs = 'PoWSessionId',
    ms = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    ys = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Es = function (e) {
      return e.toFixed(0) + '%'
    },
    gs = function () {
      var e = ps(),
      t = e.state,
      n = t.sessionId,
      r = t.renderInline,
      a = t.resources,
      i = t.eventService,
      o = t.metricsService,
      l = t.requestService,
      c = t.onChallengeDisplayed,
      u = t.isModalVisible,
      s = e.dispatch,
      d = (0, ue.useState) (null),
      p = d[0],
      h = d[1],
      f = (0, ue.useState) (null),
      v = f[0],
      m = f[1],
      y = (0, ue.useState) (Mu.INITIAL),
      E = y[0],
      g = y[1],
      C = (0, ue.useState) (0),
      b = C[0],
      I = C[1],
      T = (0, ue.useRef) (null),
      S = (0, ue.useRef) (null),
      _ = (0, ue.useRef) (null),
      A = (0, ue.useRef) (0),
      N = (
        (0, ue.useRef) (0),
        (0, ue.useCallback) (
          (
            function () {
              _.current = setTimeout(
                (
                  function () {
                    s({
                      type: xu.SHOW_MODAL_CHALLENGE
                    }),
                    c({
                      displayed: !0
                    })
                  }
                ),
                5000
              )
            }
          ),
          [
            s,
            c
          ]
        )
      ),
      L = function () {
        clearTimeout(_.current || void 0),
        T.current &&
        (T.current.terminate(), T.current = null),
        S.current &&
        (S.current.cancelRunAsync(), S.current = null),
        h(null),
        m(null),
        g(Mu.INITIAL)
      },
      D = function () {
        return s({
          type: xu.HIDE_MODAL_CHALLENGE
        })
      },
      w = function () {
        s({
          type: xu.SET_CHALLENGE_ABANDONED
        }),
        L(),
        D()
      },
      O = function () {
        A.current
      },
      k = function () {
        return ms(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return ys(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        L();
                        try {
                          T.current = new Worker(hs)
                        } catch (e) {
                          T.current = null
                        }
                        return [4,
                        l.proofOfWork.getPuzzle(n)];
                      case 1:
                        return (e = t.sent()).isError ? (
                          s({
                            type: xu.SET_CHALLENGE_INVALIDATED,
                            onChallengeInvalidatedData: {
                              errorCode: Sc.UNKNOWN,
                              errorMessage: a.Description.VerificationError
                            }
                          }),
                          D(),
                          [
                            2
                          ]
                        ) : (h(e.value.artifacts), g(Mu.READY_TO_COMPUTE), [
                          2
                        ])
                    }
                  }
                )
              )
            }
          )
        )
      },
      R = function () {
        return ms(
          void 0,
          void 0,
          void 0,
          (
            function () {
              return ys(
                this,
                (
                  function (e) {
                    switch (e.label) {
                      case 0:
                        switch (E) {
                          case Mu.READY_TO_COMPUTE:
                            return [3,
                            1];
                          case Mu.COMPUTING_DONE:
                            return [3,
                            2]
                        }
                        return [3,
                        4];
                      case 1:
                        return i.sendPuzzleInitializedEvent(),
                        o.firePuzzleInitializedEvent(),
                        N(),
                        function () {
                          if (null == p || E !== Mu.READY_TO_COMPUTE) return g(Mu.VERIFIED_INCORRECT),
                          s({
                            type: xu.SET_CHALLENGE_INVALIDATED,
                            onChallengeInvalidatedData: {
                              errorCode: Sc.UNKNOWN,
                              errorMessage: a.Description.VerificationError
                            }
                          }),
                          void D();
                          var e = JSON.parse(p);
                          if (null == T.current) return S.current = new as(e),
                          g(Mu.COMPUTING),
                          S.current.runAsync(
                            (function (e) {
                              I(e),
                              A.current = e
                            }),
                            (function (e) {
                              m(e),
                              g(Mu.COMPUTING_DONE)
                            })
                          ),
                          void setTimeout(O, fs);
                          g(Mu.COMPUTING),
                          T.current.onmessage = function (e) {
                            var t = 'object' == typeof e.data ? e.data : JSON.parse(e.data);
                            I(t.progress),
                            A.current = t.progress,
                            t.answer &&
                            (m(t.answer), g(Mu.COMPUTING_DONE))
                          },
                          T.current.postMessage(
                            JSON.stringify({
                              solverType: Nu.TIME_LOCK_PUZZLE,
                              solverParameters: e
                            })
                          ),
                          setTimeout(O, fs)
                        }(),
                        [
                          3,
                          5
                        ];
                      case 2:
                        return i.sendPuzzleCompletedEvent(),
                        o.firePuzzleCompletedEvent(),
                        [
                          4,
                          ms(
                            void 0,
                            void 0,
                            void 0,
                            (
                              function () {
                                var e;
                                return ys(
                                  this,
                                  (
                                    function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return null == v ? [
                                            2
                                          ] : [
                                            4,
                                            l.proofOfWork.verifyPuzzle(n, v)
                                          ];
                                        case 1:
                                          return (e = t.sent()).isError ? (
                                            s({
                                              type: xu.SET_CHALLENGE_INVALIDATED,
                                              onChallengeInvalidatedData: {
                                                errorCode: is(e.error),
                                                errorMessage: a.Description.VerificationError
                                              }
                                            }),
                                            [
                                              2
                                            ]
                                          ) : (
                                            e.value.answerCorrect ? (
                                              g(Mu.VERIFIED_CORRECT),
                                              s({
                                                type: xu.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                  redemptionToken: e.value.redemptionToken
                                                }
                                              })
                                            ) : (
                                              g(Mu.VERIFIED_INCORRECT),
                                              s({
                                                type: xu.SET_CHALLENGE_INVALIDATED,
                                                onChallengeInvalidatedData: {
                                                  errorCode: Sc.ANSWER_INVALID,
                                                  errorMessage: a.Description.VerificationError
                                                }
                                              })
                                            ),
                                            [
                                              2
                                            ]
                                          )
                                      }
                                    }
                                  )
                                )
                              }
                            )
                          )
                        ];
                      case 3:
                        return e.sent(),
                        L(),
                        D(),
                        [
                          3,
                          5
                        ];
                      case 4:
                        return [3,
                        5];
                      case 5:
                        return [2]
                    }
                  }
                )
              )
            }
          )
        )
      };
      (0, ue.useEffect) (
        (
          function () {
            var e = sr.localStorageService.getLocalStorage(vs);
            return n === e ? function () {
            }
             : (
              sr.localStorageService.setLocalStorage(vs, n),
              i.sendChallengeInitializedEvent(),
              o.fireChallengeInitializedEvent(),
              k(),
              L
            )
          }
        ),
        []
      ),
      (0, ue.useEffect) ((function () {
        R()
      }), [
        E
      ]);
      var P = function () {
        var e = r ? Si : Ii.Modal.Body,
        t = 100 * (b || 0);
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(
            e,
            null,
            se().createElement(
              'div',
              {
                className: 'computation-progress-body'
              },
              se().createElement(Ii.ProgressBar, {
                now: t,
                label: Es(t),
                striped: !0
              })
            )
          )
        )
      };
      return r ? se().createElement(Ti, {
        titleText: a.Description.VerifyingYouAreNotBot
      }, P()) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern modal-modern-challenge-computation-progress',
          show: u,
          onHide: w,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: a.Description.VerifyingYouAreNotBot,
            buttonType: go.CLOSE,
            buttonAction: w,
            buttonEnabled: !0,
            headerInfo: null
          }
        ),
        P()
      )
    },
    Cs = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.sessionId,
          n = e.renderInline,
          r = e.eventService,
          a = e.metricsService,
          i = e.requestService,
          o = e.translate,
          l = e.onChallengeDisplayed,
          c = e.onChallengeCompleted,
          u = e.onChallengeInvalidated,
          s = e.onModalChallengeAbandoned;
          return se().createElement(
            ds,
            {
              sessionId: t,
              renderInline: n,
              eventService: r,
              metricsService: a,
              requestService: i,
              translate: o,
              onChallengeDisplayed: l,
              onChallengeCompleted: c,
              onChallengeInvalidated: u,
              onModalChallengeAbandoned: s
            },
            se().createElement(gs, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.ProofOfWorkChallenge'
      }
    ),
    bs = function () {
      function e(e) {
        this.sessionId = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.challengeInitialized,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendPuzzleInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.puzzleInitialized,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendPuzzleCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.puzzleCompleted,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.challengeCompleted,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.challengeInvalidated,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.challengeAbandoned,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeTimeoutEvent = function () {
        W().EventStream.SendEventWithTarget(
          Qu,
          $u.challengeTimeout,
          {
            sessionId: this.sessionId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Is = function () {
      function e(e, t) {
        this.appType = e ||
        'unknown',
        this.requestServiceDefault = t,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'ProofOfWork_' + ts.challengeSolveTime,
        this.puzzleWorkingTimeSequenceName = 'ProofOfWork_' + ts.puzzleWorkingTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(es.challengeInitialized),
        ji &&
        ji.start(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.firePuzzleInitializedEvent = function () {
        this.fireEvent(es.puzzleInitialized),
        ji &&
        ji.start(
          this.puzzleWorkingTimeSequenceName,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        ),
        this.eventTimer.start(this.puzzleWorkingTimeSequenceName)
      },
      e.prototype.firePuzzleCompletedEvent = function () {
        this.fireEvent(es.puzzleCompleted),
        ji &&
        ji.endSuccess(
          this.puzzleWorkingTimeSequenceName,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        );
        var e = this.eventTimer.end(this.puzzleWorkingTimeSequenceName);
        null !== e &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.PuzzleComputeTimePow,
          value: e,
          labelValues: {
            event_type: 'ProofOfWork_' + es.puzzleCompleted,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(es.challengeCompleted),
        ji &&
        ji.endSuccess(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(es.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(es.challengeInvalidated),
        ji &&
        ji.endFailure(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(es.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(es.challengeAbandoned),
        ji &&
        ji.endCancel(
          this.challengeSolveTimeSequenceName,
          this.puzzleWorkingTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType,
          this.puzzleWorkingTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(es.challengeAbandoned)
      },
      e.prototype.fireChallengeTimeoutEvent = function () {
        this.fireEvent(es.challengeTimeout),
        ji &&
        ji.endFailure(
          this.challengeSolveTimeSequenceName,
          this.challengeSolveTimeSequenceName + '_' + this.appType
        ),
        this.fireSolveTimeEvent(es.challengeTimeout)
      },
      e.prototype.fireEvent = function (e) {
        if (ji) {
          var t = 'ProofOfWork_' + e;
          ji.fireEvent(t, t + '_' + this.appType)
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventPow,
          value: 1,
          labelValues: {
            event_type: 'ProofOfWork_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimePow,
          value: t,
          labelValues: {
            event_type: 'ProofOfWork_' + e,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    Ts = new hi,
    Ss = function (e) {
      var t = e.containerId,
      n = e.sessionId,
      r = e.appType,
      a = e.renderInline,
      i = e.onChallengeDisplayed,
      o = e.onChallengeCompleted,
      l = e.onChallengeInvalidated,
      c = e.onModalChallengeAbandoned,
      u = document.getElementById(t);
      if (null !== u) {
        (0, de.unmountComponentAtNode) (u);
        var s = new bs(n),
        d = new Is(r, Ts);
        return (0, de.render) (
          se().createElement(
            Cs,
            {
              sessionId: n,
              renderInline: a,
              eventService: s,
              metricsService: d,
              requestService: Ts,
              onChallengeDisplayed: i,
              onChallengeCompleted: o,
              onChallengeInvalidated: l,
              onModalChallengeAbandoned: c
            }
          ),
          u
        ),
        !0
      }
      return !1
    },
    _s = ReactRouterDOM,
    As = 'accountSecurityChallengeReauthenticationEvent',
    Ns = {
      challengeInitialized: 'challengeInitialized',
      userConfigurationLoaded: 'userConfigurationLoaded',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned',
      challengeCompleted: 'challengeCompleted',
      otpResendRequested: 'otpResendRequested',
      reauthenticationTypeChanged: 'reauthenticationTypeChanged',
      codeSubmitted: 'codeSubmitted',
      codeVerificationFailed: 'codeVerificationFailed',
      codeVerified: 'codeVerified',
      noEnabledMethodsReturned: 'noEnabledMethodsReturned'
    },
    Ls = {
      initialized: 'Initialized',
      verified: 'Verified',
      invalidated: 'Invalidated',
      abandoned: 'Abandoned'
    },
    Ds = {
      solveTime: 'SolveTime'
    },
    ws = ReactRouter,
    Os = function () {
      var e = (0, ws.useLocation) (),
      t = (0, ws.matchPath) (
        e.pathname,
        {
          path: '/:activeReauthenticationType',
          exact: !0,
          strict: !1
        }
      );
      return (null == t ? void 0 : t.params) ? null == t ? void 0 : t.params.activeReauthenticationType : null
    },
    ks = function (e) {
      return '/' + (e || '')
    },
    Rs = function (e, t) {
      switch (t) {
        case _c.OTP_CODE_EXPIRED:
          return e.Message.Error.OtpCodeExpired;
        default:
          return e.Message.Error.Default
      }
    },
    Ps = function (e, t) {
      switch (t) {
        case sn.PASSWORD_INCORRECT:
          return e.Message.Error.PasswordIncorrect;
        case sn.OTP_EMAIL_REDEEM_FAILURE:
          return e.Message.Error.OtpRedeemFailure;
        default:
          return e.Message.Error.Default
      }
    },
    Ms = function (e, t) {
      switch (t) {
        case Ke.INVALID_CODE:
          return e.Message.Error.OtpCodeIncorrect;
        case Ke.TOO_MANY_REQUESTS:
          return e.Message.Error.OtpCodeThrottled;
        default:
          return e.Message.Error.Default
      }
    },
    xs = function (e) {
      switch (e) {
        case Ke.CODE_EXPIRED:
        case Ke.INVALID_SESSION_TOKEN:
          return _c.OTP_CODE_EXPIRED;
        default:
          return _c.UNKNOWN
      }
    };
    !function (e) {
      e[e.SET_REAUTHENTICATION_TYPES = 0] = 'SET_REAUTHENTICATION_TYPES',
      e[e.SET_CHALLENGE_COMPLETED = 1] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 2] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 3] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 4] = 'SHOW_MODAL_CHALLENGE',
      e[e.SET_CURRENT_REAUTHENTICATION_TYPE = 5] = 'SET_CURRENT_REAUTHENTICATION_TYPE',
      e[e.INITIALIZE_EMAIL_OTP_SESSION = 6] = 'INITIALIZE_EMAIL_OTP_SESSION'
    }(ls || (ls = {}));
    var Vs,
    Hs = function () {
      return (
        Hs = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Ws = function (e, t) {
      var n = Hs({
      }, e);
      switch (t.type) {
        case ls.SET_REAUTHENTICATION_TYPES:
          return n.defaultType = t.defaultType,
          n.availableTypes = t.availableTypes,
          n;
        case ls.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n.isModalVisible = !1,
          n;
        case ls.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: Rs(e.resources, t.errorCode)
          },
          n.isModalVisible = !1,
          n;
        case ls.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case ls.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        case ls.INITIALIZE_EMAIL_OTP_SESSION:
          return n.initialOtpSessionId = t.sessionId,
          n;
        default:
          return e
      }
    },
    Us = (0, ue.createContext) (null),
    Gs = function (e) {
      var t = e.renderInline,
      n = e.requestService,
      r = e.metricsService,
      a = e.eventService,
      i = e.defaultType,
      o = e.availableTypes,
      l = e.defaultTypeMetadata,
      c = e.translate,
      u = e.onChallengeCompleted,
      s = e.onChallengeInvalidated,
      d = e.onModalChallengeAbandoned,
      p = e.children,
      h = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Action: {
                  ForgotYourPassword: function (t, n) {
                    return e('Action.ForgotYourPassword', {
                      linkStart: t,
                      linkEnd: n
                    })
                  },
                  PleaseTryAgain: e('Action.PleaseTryAgain'),
                  Verify: e('Action.Verify'),
                  CodeSent: e('Action.CodeSent'),
                  ResendCode: e('Action.ResendCode'),
                  ChangeVerificationMethod: e('Action.ChangeVerificationMethod'),
                  TryAlternativeMethod: e('Action.TryAlternativeMethod')
                },
                Description: {
                  EnterYourPassword: e('Description.EnterYourPassword'),
                  EnterYourOtpCode: e('Description.EnterYourOtpCode', {
                    lineBreak: '\n'
                  })
                },
                Header: {
                  PasskeyVerification: e('Header.PasskeyVerification'),
                  PasswordVerification: e('Header.PasswordVerification'),
                  OtpVerification: e('Header.OtpVerification'),
                  VerificationMethodSelection: e('Header.VerificationMethodSelection')
                },
                Label: {
                  Passkey: e('Label.Passkey'),
                  PasskeyDirections: e('Label.PasskeyDirections'),
                  Password: e('Label.Password'),
                  OneTimeCode: e('Label.OneTimeCode'),
                  VerifyWithPasskey: e('Label.VerifyWithPasskey'),
                  YourPassword: e('Label.YourPassword'),
                  YourOtpCode: e('Label.YourOtpCode'),
                  ChooseVerificationMethod: e('Label.ChooseVerificationMethod')
                },
                Message: {
                  Error: {
                    Default: e('Message.Error.Default'),
                    NoCredentialsFound: e('Message.Error.NoCredentialsFound'),
                    PasswordIncorrect: e('Message.Error.PasswordIncorrect'),
                    OtpCodeIncorrect: e('Message.Error.OtpCodeIncorrect'),
                    OtpCodeExpired: e('Message.Error.OtpCodeExpired'),
                    OtpRedeemFailure: e('Message.Error.OtpRedeemFailure'),
                    OtpCodeThrottled: e('Message.Error.OtpCodeThrottled')
                  }
                }
              }
            }(c)
          }
        )
      ) [0],
      f = (0, ue.useState) (
        (
          function () {
            return {
              renderInline: t,
              resources: h,
              requestService: n,
              metricsService: r,
              eventService: a,
              defaultType: i,
              availableTypes: o,
              defaultTypeMetadata: l,
              onModalChallengeAbandoned: d,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !0,
              initialOtpSessionId: null
            }
          }
        )
      ) [0],
      v = (0, ue.useReducer) (Ws, f),
      m = v[0],
      y = v[1],
      E = Os();
      return (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeCompletedData &&
            null === m.onChallengeInvalidatedData &&
            (
              r.fireVerifiedEvent(E),
              a.sendChallengeCompletedEvent(E),
              u(m.onChallengeCompletedData)
            )
          }
        ),
        [
          E,
          r,
          a,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          u
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeInvalidatedData &&
            null === m.onChallengeCompletedData &&
            (
              r.fireInvalidatedEvent(E),
              a.sendChallengeInvalidatedEvent(E),
              s(m.onChallengeInvalidatedData)
            )
          }
        ),
        [
          E,
          r,
          a,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          s
        ]
      ),
      (0, ue.useEffect) (
        (function () {
          a.sendReauthenticationTypeChangedEvent(E)
        }),
        [
          E,
          a
        ]
      ),
      se().createElement(Us.Provider, {
        value: {
          state: m,
          dispatch: y
        }
      }, p)
    },
    zs = function () {
      var e = (0, ue.useContext) (Us);
      if (null === e) throw new Error(
        'ReauthenticationContext was not provided in the current scope'
      );
      return e
    },
    Fs = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestError,
      r = zs().state,
      a = r.resources,
      i = r.renderInline,
      o = (0, ws.useHistory) (),
      l = i ? 'inline-challenge-body-button-link' : 'modal-body-button-link';
      return se().createElement(
        'p',
        null,
        se().createElement(
          'button',
          {
            type: 'button',
            className: l + ' small',
            onClick: function () {
              return n(null),
              void o.push(ks(null))
            },
            disabled: t
          },
          a.Action.ChangeVerificationMethod
        )
      )
    },
    Bs = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    qs = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Zs = function (e) {
      var t = e.requestInFlightState,
      n = e.requestErrorState,
      r = e.children,
      a = zs(),
      i = a.state,
      o = i.renderInline,
      l = i.resources,
      c = i.requestService,
      u = i.defaultTypeMetadata,
      s = a.dispatch,
      d = t[0],
      p = t[1],
      h = n[0],
      f = n[1],
      v = o ? Si : Ii.Modal.Body,
      m = o ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      y = o ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      E = o ? 'inline-challenge-action-button' : 'modal-action-button';
      E = (E = E.concat(' ', 'btn-cta-md')).concat(' ', y);
      var g = (o ? 'inline-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge').concat(' ', 'text-error xsmall'),
      C = o ? 'inline-challenge-margin-bottom-sm' : 'modal-margin-bottom-sm';
      return u &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          v,
          null,
          se().createElement('div', {
            className: m
          }),
          se().createElement('p', {
            className: C
          }, l.Label.VerifyWithPasskey),
          se().createElement('p', {
            className: y
          }, l.Label.PasskeyDirections),
          se().createElement(
            'button',
            {
              type: 'button',
              className: E,
              'aria-label': l.Action.Verify,
              disabled: d,
              onClick: function () {
                return Bs(
                  void 0,
                  void 0,
                  void 0,
                  (
                    function () {
                      var e,
                      t,
                      n,
                      r,
                      a,
                      i;
                      return qs(
                        this,
                        (
                          function (o) {
                            switch (o.label) {
                              case 0:
                                return p(!0),
                                f(null),
                                null === u ||
                                void 0 === u.passkeyAuthOptions ||
                                void 0 === u.passkeySessionId ? (
                                  f(l.Message.Error.Default + ' ' + l.Action.PleaseTryAgain),
                                  p(!1),
                                  [
                                    2
                                  ]
                                ) : (
                                  e = !(
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp &&
                                    (0, H.DeviceMeta) ().isAndroidApp
                                  ),
                                  (
                                    t = e ? sr.fido2Util.convertPublicKeyParametersToStandardBase64(u.passkeyAuthOptions) : JSON.parse(u.passkeyAuthOptions)
                                  ).publicKey ? (
                                    n = '',
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp ? (
                                      t.keyType = 'platform',
                                      [
                                        4,
                                        c.fido2.getNativeResponse(
                                          sr.hybridResponseService.FeatureTarget.GET_CREDENTIALS,
                                          {
                                            authenticationOptionsJSON: JSON.stringify(t)
                                          },
                                          300000
                                        )
                                      ]
                                    ) : [
                                      3,
                                      2
                                    ]
                                  ) : (
                                    f(l.Message.Error.Default + ' ' + l.Action.PleaseTryAgain),
                                    p(!1),
                                    [
                                      2
                                    ]
                                  )
                                );
                              case 1:
                                return (r = o.sent()).isError ? (
                                  f(
                                    function (e, t) {
                                      switch (t) {
                                        case ei.UNKNOWN:
                                          return e.Message.Error.Default + ' ' + e.Action.PleaseTryAgain;
                                        case ei.NO_CREDENTIALS_FOUND:
                                          return e.Message.Error.NoCredentialsFound;
                                        default:
                                          return e.Message.Error.Default + ' ' + e.Action.PleaseTryAgain
                                      }
                                    }(l, r.error)
                                  ),
                                  p(!1),
                                  [
                                    2
                                  ]
                                ) : null === r.value ? (
                                  f(l.Message.Error.Default + ' ' + l.Action.PleaseTryAgain),
                                  p(!1),
                                  [
                                    2
                                  ]
                                ) : (n = r.value, [
                                  3,
                                  4
                                ]);
                              case 2:
                                return [4,
                                c.fido2.getNavigatorCredentials({
                                  publicKey: sr.fido2Util.formatCredentialRequestWeb(JSON.stringify(t))
                                })];
                              case 3:
                                if ((a = o.sent()).isError || null == a.value) return f(l.Message.Error.Default + ' ' + l.Action.PleaseTryAgain),
                                p(!1),
                                [
                                  2
                                ];
                                n = a.value,
                                o.label = 4;
                              case 4:
                                return [4,
                                c.reauthentication.generateToken({
                                  password: n,
                                  sessionId: u.passkeySessionId,
                                  type: Ac.Passkey
                                })];
                              case 5:
                                return (i = o.sent()).isError ? (f(Ps(l, i.error) + ' ' + l.Action.PleaseTryAgain), p(!1), [
                                  2
                                ]) : (
                                  f(null),
                                  s({
                                    type: ls.SET_CHALLENGE_COMPLETED,
                                    onChallengeCompletedData: {
                                      reauthenticationToken: i.value.token
                                    }
                                  }),
                                  [
                                    2
                                  ]
                                )
                            }
                          }
                        )
                      )
                    }
                  )
                )
              }
            },
            d ? se().createElement('span', {
              className: 'spinner spinner-xs spinner-no-margin'
            }) : l.Action.Verify
          ),
          r,
          se().createElement('p', {
            className: g
          }, h)
        )
      )
    },
    js = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Ys = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Ks = function (e, t) {
      return function (n) {
        return js(
          void 0,
          void 0,
          Promise,
          (
            function () {
              return Ys(
                this,
                (
                  function (r) {
                    switch (r.label) {
                      case 0:
                        return 'Enter' === n.key &&
                        t ? (n.preventDefault(), n.stopPropagation(), [
                          4,
                          e()
                        ]) : [
                          3,
                          2
                        ];
                      case 1:
                        r.sent(),
                        r.label = 2;
                      case 2:
                        return [2]
                    }
                  }
                )
              )
            }
          )
        )
      }
    },
    Js = function () {
      return Promise.resolve(null)
    },
    Xs = function (e, t, n, r, a, i) {
      return function (o) {
        return js(
          void 0,
          void 0,
          Promise,
          (
            function () {
              var l,
              c;
              return Ys(
                this,
                (
                  function (u) {
                    switch (u.label) {
                      case 0:
                        return l = o.currentTarget.value,
                        void 0 === t ||
                        t.test(l) ||
                        (l = e),
                        void 0 !== i &&
                        i(l),
                        r(l),
                        c = a,
                        [
                          4,
                          n(l)
                        ];
                      case 1:
                        return c.apply(void 0, [
                          u.sent()
                        ]),
                        [
                          2
                        ]
                    }
                  }
                )
              )
            }
          )
        )
      }
    },
    Qs = function (e) {
      var t = e.id,
      n = e.inputType,
      r = e.placeholder,
      a = e.disabled,
      i = e.value,
      o = e.error,
      l = e.canSubmit,
      c = e.validate,
      u = e.setValue,
      s = e.setError,
      d = e.handleSubmit,
      p = e.onChange,
      h = e.label,
      f = e.bottomLabel,
      v = e.inputMode,
      m = e.autoComplete,
      y = e.maxLength,
      E = e.validCharactersRegEx,
      g = e.hideFeedback,
      C = e.concealInput,
      b = e.autoFocus,
      I = '' !== i &&
      null === o,
      T = '' !== i &&
      null !== o,
      S = I ||
      T;
      return se().createElement(
        'div',
        {
          className: 'input-control-wrapper'
        },
        h &&
        se().createElement('label', {
          className: 'text-label xsmall',
          htmlFor: t
        }, h),
        se().createElement(
          Ii.FormGroup,
          {
            controlId: t,
            className: (S ? 'form-has-feedback' : '') + ' ' + (I ? 'form-has-success' : '') + ' ' + (T ? 'form-has-error' : '')
          },
          se().createElement(
            Ii.FormControl,
            {
              as: 'input',
              className: 'input-field' + (C && i.length > 0 ? ' input-field-concealed' : ''),
              type: n,
              inputMode: v,
              autoComplete: m,
              maxLength: y,
              disabled: a,
              value: i,
              placeholder: r,
              onChange: Xs(i, E, c, u, s, p),
              onKeyDown: Ks(d, l),
              autoFocus: b
            }
          ),
          !a &&
          !g &&
          I &&
          se().createElement('span', {
            className: 'icon-checkmark-on'
          }),
          !a &&
          !g &&
          T &&
          se().createElement('span', {
            className: 'icon-close'
          }),
          se().createElement(
            'div',
            {
              className: 'form-control-label bottom-label xsmall'
            },
            !a &&
            T ? o : f ||
            ' '
          )
        )
      )
    },
    $s = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    ed = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    td = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    nd = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    rd = function (e) {
      var t = e.otpResendCodeRemainingTimeState,
      n = e.requestInFlightState,
      r = e.requestErrorState,
      a = e.children,
      i = zs(),
      o = i.state,
      l = o.renderInline,
      c = o.resources,
      u = o.requestService,
      s = o.metricsService,
      d = o.eventService,
      p = o.initialOtpSessionId,
      h = i.dispatch,
      f = function () {
        var e = (0, ue.useState) (6),
        t = e[0],
        n = e[1];
        return (0, ue.useEffect) (
          (
            function () {
              $s(
                void 0,
                void 0,
                Promise,
                (
                  function () {
                    var e;
                    return ed(
                      this,
                      (
                        function (t) {
                          switch (t.label) {
                            case 0:
                              return [4,
                              dt(et.Reauth)];
                            case 1:
                              return (e = t.sent()).isError ||
                              n(e.value.OtpCodeLength),
                              [
                                2
                              ]
                          }
                        }
                      )
                    )
                  }
                )
              )
            }
          ),
          []
        ),
        t
      }(),
      v = (0, ue.useState) (''),
      m = v[0],
      y = v[1],
      E = (0, ue.useState) (p),
      g = E[0],
      C = E[1],
      b = t[0],
      I = t[1],
      T = (0, ue.useState) (null),
      S = T[0],
      _ = T[1],
      A = n[0],
      N = n[1],
      L = r[0],
      D = r[1],
      w = (0, ue.useCallback) (
        (
          function () {
            return td(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  var e,
                  t,
                  n,
                  r,
                  a;
                  return nd(
                    this,
                    (
                      function (i) {
                        switch (i.label) {
                          case 0:
                            return N(!0),
                            null === g ? (D(Ps(c, sn.UNKNOWN) + ' ' + c.Action.PleaseTryAgain), N(!1), [
                              2
                            ]) : (
                              d.sendCodeSubmittedEvent(Ac.OtpEmail),
                              [
                                4,
                                u.otp.validateCode($e.Email, g, m)
                              ]
                            );
                          case 1:
                            if ((e = i.sent()).isError) {
                              t = void 0;
                              try {
                                t = e.errorRaw.data
                              } catch (e) {
                                t = null
                              }
                              return n = e.error ||
                              t,
                              r = Ms(c, n),
                              D(r + ' ' + c.Action.PleaseTryAgain),
                              d.sendCodeVerificationFailedEvent(Ac.OtpEmail, r),
                              n !== Ke.CODE_EXPIRED &&
                              n !== Ke.INVALID_SESSION_TOKEN ||
                              h({
                                type: ls.SET_CHALLENGE_INVALIDATED,
                                errorCode: xs(n)
                              }),
                              N(!1),
                              [
                                2
                              ]
                            }
                            return d.sendCodeVerifiedEvent(Ac.OtpEmail),
                            [
                              4,
                              u.reauthentication.generateToken({
                                sessionId: g,
                                type: Ac.OtpEmail
                              })
                            ];
                          case 2:
                            return (a = i.sent()).isError ? (D(Ps(c, a.error) + ' ' + c.Action.PleaseTryAgain), N(!1), [
                              2
                            ]) : (
                              s.fireVerifiedEvent(Ac.OtpEmail),
                              D(null),
                              h({
                                type: ls.SET_CHALLENGE_COMPLETED,
                                onChallengeCompletedData: {
                                  reauthenticationToken: a.value.token
                                }
                              }),
                              [
                                2
                              ]
                            )
                        }
                      }
                    )
                  )
                }
              )
            )
          }
        ),
        [
          h,
          m,
          g,
          u.otp,
          u.reauthentication,
          s,
          d,
          c,
          D,
          N
        ]
      ),
      O = function () {
        var e = Date.now() + 30000;
        I(30);
        var t = setInterval(
          (
            function () {
              var n = Math.round((e - Date.now()) / 1000),
              r = Math.max(0, n);
              r <= 0 &&
              clearInterval(t),
              I(r)
            }
          ),
          1000
        );
        _(t)
      };
      (0, ue.useEffect) (
        (
          function () {
            return td(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  var e;
                  return nd(
                    this,
                    (
                      function (t) {
                        switch (t.label) {
                          case 0:
                            return null !== p ? [
                              2
                            ] : [
                              4,
                              u.otp.sendCodeForUser($e.Email)
                            ];
                          case 1:
                            return (e = t.sent()).isError ? (D(Ps(c, sn.UNKNOWN) + ' ' + c.Action.TryAlternativeMethod), [
                              2
                            ]) : (
                              C(e.value.otpSessionToken),
                              O(),
                              h({
                                type: ls.INITIALIZE_EMAIL_OTP_SESSION,
                                sessionId: e.value.otpSessionToken
                              }),
                              [
                                2
                              ]
                            )
                        }
                      }
                    )
                  )
                }
              )
            ),
            function () {
              null !== S &&
              (clearInterval(S), _(null))
            }
          }
        ),
        []
      ),
      (0, ue.useEffect) (
        (
          function () {
            m.length === f &&
            td(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  return nd(
                    this,
                    (
                      function (e) {
                        switch (e.label) {
                          case 0:
                            return [4,
                            w()];
                          case 1:
                            return e.sent(),
                            [
                              2
                            ]
                        }
                      }
                    )
                  )
                }
              )
            )
          }
        ),
        [
          m,
          f,
          w
        ]
      );
      var k,
      R = {
        content: A ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : (
          k = b > 0 ? c.Action.CodeSent + ' (' + b + ')' : '' + c.Action.ResendCode,
          L ? c.Message.Error.Default : k
        ),
        label: c.Action.ResendCode,
        enabled: !A &&
        b <= 0,
        action: function () {
          return td(
            void 0,
            void 0,
            void 0,
            (
              function () {
                var e;
                return nd(
                  this,
                  (
                    function (t) {
                      switch (t.label) {
                        case 0:
                          return N(!0),
                          null === g ? (D(Ps(c, sn.UNKNOWN) + ' ' + c.Action.PleaseTryAgain), N(!1), [
                            2
                          ]) : [
                            4,
                            u.otp.resendCode($e.Email, g)
                          ];
                        case 1:
                          return (e = t.sent()).isError ? (D(Ms(c, Ke.UNKNOWN) + ' ' + c.Action.PleaseTryAgain), N(!1), [
                            2
                          ]) : (
                            d.sendOtpResendRequestedEvent(),
                            O(),
                            D(null),
                            C(e.value.otpSessionToken),
                            N(!1),
                            [
                              2
                            ]
                          )
                      }
                    }
                  )
                )
              }
            )
          )
        }
      },
      P = l ? Si : Ii.Modal.Body,
      M = l ? Io : To,
      x = l ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      V = l ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return se().createElement(
        se().Fragment,
        null,
        se().createElement(
          P,
          null,
          se().createElement('div', {
            className: x
          }),
          se().createElement('p', {
            className: V
          }, L || c.Description.EnterYourOtpCode),
          se().createElement(
            Qs,
            {
              id: 'reauthentication-email-otp-input',
              inputType: 'password',
              disabled: A,
              value: m,
              setValue: y,
              error: L,
              setError: D,
              validate: Js,
              canSubmit: m.length === f,
              handleSubmit: w,
              onChange: function () {
                return D(null)
              },
              autoComplete: 'off',
              placeholder: c.Label.YourOtpCode,
              hideFeedback: !0
            }
          ),
          se().createElement('p', null, a)
        ),
        se().createElement(M, {
          positiveButton: R,
          negativeButton: null
        })
      )
    },
    ad = function () {
      var e = zs().state.resources.Action.ForgotYourPassword(
        '<a class="text-name text-footer" href="https://en.help.roblox.com/hc/articles/203313070-I-Forgot-My-Password" target="_blank">',
        '</a>'
      );
      return se().createElement('span', {
        dangerouslySetInnerHTML: {
          __html: e
        }
      })
    },
    id = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    od = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    ld = function (e) {
      var t = e.requestInFlightState,
      n = e.requestErrorState,
      r = e.children,
      a = zs(),
      i = a.state,
      o = i.renderInline,
      l = i.resources,
      c = i.requestService,
      u = (i.metricsService, i.eventService, a.dispatch),
      s = (0, ue.useState) (''),
      d = s[0],
      p = s[1],
      h = t[0],
      f = t[1],
      v = n[0],
      m = n[1],
      y = function () {
        return id(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return od(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return f(!0),
                        [
                          4,
                          c.reauthentication.generateToken({
                            password: d
                          })
                        ];
                      case 1:
                        return (e = t.sent()).isError ? (m(Ps(l, e.error) + ' ' + l.Action.PleaseTryAgain), f(!1), [
                          2
                        ]) : (
                          m(null),
                          u({
                            type: ls.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              reauthenticationToken: e.value.token
                            }
                          }),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      E = {
        content: h ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : l.Action.Verify,
        label: l.Action.Verify,
        enabled: !h &&
        d.length > 0,
        action: y
      },
      g = o ? Si : Ii.Modal.Body,
      C = o ? Io : To,
      b = o ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      I = o ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return se().createElement(
        se().Fragment,
        null,
        se().createElement(
          g,
          null,
          se().createElement('div', {
            className: b
          }),
          se().createElement('p', {
            className: I
          }, l.Description.EnterYourPassword),
          se().createElement(
            Qs,
            {
              id: 'reauthentication-password-input',
              inputType: 'password',
              disabled: h,
              value: d,
              setValue: p,
              error: v,
              setError: m,
              validate: Js,
              canSubmit: d.length > 0,
              handleSubmit: y,
              onChange: function () {
                return m(null)
              },
              autoComplete: 'off',
              placeholder: l.Label.YourPassword,
              hideFeedback: !0
            }
          ),
          se().createElement('p', null, se().createElement(ad, null), r)
        ),
        se().createElement(C, {
          positiveButton: E,
          negativeButton: null
        })
      )
    },
    cd = function (e) {
      var t = e.rowLabel,
      n = e.rowIcon,
      r = e.requestInFlight,
      a = e.typeToBeSelected,
      i = (0, ws.useHistory) ();
      return se().createElement(
        'tr',
        {
          onClick: r ? void 0 : function () {
            return i.push(ks(a))
          },
          className: r ? 'media-type-row disabled' : 'media-type-row'
        },
        se().createElement('td', null, se().createElement('span', {
          className: n
        })),
        se().createElement('td', {
          className: 'media-type-label'
        }, t),
        se().createElement(
          'td',
          {
            className: 'media-type-selector'
          },
          se().createElement('span', {
            className: 'icon-next'
          }),
          se().createElement('div', {
            className: 'icon-placeholder'
          })
        )
      )
    },
    ud = function (e) {
      var t = e.listItemConfig,
      n = zs().state,
      r = n.resources,
      a = n.renderInline,
      i = a ? Si : Ii.Modal.Body,
      o = a ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      l = a ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge',
      c = a ? '' : 'modal-margin-bottom-large';
      return se().createElement(
        i,
        null,
        se().createElement('div', {
          className: o
        }),
        se().createElement('p', {
          className: l
        }, r.Label.ChooseVerificationMethod),
        se().createElement(
          'table',
          {
            className: 'table table-striped media-type-list ' + c
          },
          se().createElement(
            'tbody',
            null,
            t.map(
              (
                function (e) {
                  return se().createElement(
                    cd,
                    {
                      key: e.rowLabel,
                      rowLabel: e.rowLabel,
                      rowIcon: e.rowIcon,
                      requestInFlight: e.requestInFlight,
                      typeToBeSelected: e.typeToBeSelected
                    }
                  )
                }
              )
            )
          )
        )
      )
    },
    sd = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    dd = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    pd = function () {
      return sd(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var e,
            t,
            n,
            r;
            return dd(
              this,
              (
                function (a) {
                  switch (a.label) {
                    case 0:
                      return e = H.DeviceMeta &&
                      (0, H.DeviceMeta) ().isInApp,
                      t = !0,
                      !e &&
                      function () {
                        try {
                          return void 0 !== PublicKeyCredential
                        } catch (e) {
                          return !1
                        }
                      }() ||
                      (t = !1),
                      n = H.DeviceMeta &&
                      ((0, H.DeviceMeta) ().isIosApp || (0, H.DeviceMeta) ().isAndroidApp),
                      r = !1,
                      e &&
                      n ? [
                        4,
                        sd(
                          void 0,
                          void 0,
                          Promise,
                          (
                            function () {
                              return dd(
                                this,
                                (
                                  function (e) {
                                    switch (e.label) {
                                      case 0:
                                        return e.trys.push([0,
                                        2,
                                        ,
                                        3]),
                                        [
                                          4,
                                          sr.hybridResponseService.getNativeResponse(
                                            sr.hybridResponseService.FeatureTarget.CREDENTIALS_PROTOCOL_AVAILABLE,
                                            {
                                            },
                                            2000
                                          )
                                        ];
                                      case 1:
                                        return 'true' === e.sent() ? [
                                          2,
                                          !0
                                        ] : [
                                          3,
                                          3
                                        ];
                                      case 2:
                                        return e.sent(),
                                        [
                                          2,
                                          !1
                                        ];
                                      case 3:
                                        return [2,
                                        !1]
                                    }
                                  }
                                )
                              )
                            }
                          )
                        )
                      ] : [
                        3,
                        2
                      ];
                    case 1:
                      r = a.sent(),
                      a.label = 2;
                    case 2:
                      return [2,
                      t ||
                      r]
                  }
                }
              )
            )
          }
        )
      )
    },
    hd = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    fd = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    vd = function () {
      var e = zs(),
      t = e.state,
      n = t.availableTypes,
      r = t.resources,
      a = t.defaultType,
      i = t.renderInline,
      o = t.isModalVisible,
      l = t.metricsService,
      c = t.eventService,
      u = t.onModalChallengeAbandoned,
      s = e.dispatch,
      d = (0, ue.useState) (!1),
      p = (0, ue.useState) (''),
      h = (0, ue.useState) (30),
      f = Os(),
      v = function () {
        s({
          type: ls.HIDE_MODAL_CHALLENGE
        }),
        l.fireAbandonedEvent(f),
        c.sendChallengeAbandonedEvent(f),
        null !== u &&
        u((function () {
          return s({
            type: ls.SHOW_MODAL_CHALLENGE
          })
        }))
      },
      m = (0, ws.useHistory) (),
      y = n.length > 1;
      (0, ue.useEffect) (
        (
          function () {
            hd(
              void 0,
              void 0,
              void 0,
              (
                function () {
                  var e,
                  t,
                  r;
                  return fd(
                    this,
                    (
                      function (i) {
                        switch (i.label) {
                          case 0:
                            return a !== Ac.Passkey ? [
                              3,
                              2
                            ] : [
                              4,
                              pd()
                            ];
                          case 1:
                            if (e = i.sent(), t = a, !e) {
                              if (0 === (r = n.filter((function (e) {
                                return e !== Ac.Passkey
                              }))).length) return s({
                                type: ls.SET_CHALLENGE_INVALIDATED,
                                errorCode: 0
                              }),
                              [
                                2
                              ];
                              t = r[r.length - 1],
                              s({
                                type: ls.SET_REAUTHENTICATION_TYPES,
                                defaultType: t,
                                availableTypes: r
                              })
                            }
                            return m.replace(t),
                            [
                              2
                            ];
                          case 2:
                            return m.replace(a),
                            [
                              2
                            ]
                        }
                      }
                    )
                  )
                }
              )
            )
          }
        ),
        []
      );
      var E = function () {
        return se().createElement(
          ws.Switch,
          null,
          se().createElement(
            ws.Route,
            {
              path: ks(Ac.Passkey)
            },
            se().createElement(
              Zs,
              {
                requestInFlightState: d,
                requestErrorState: p
              },
              y &&
              se().createElement(Fs, {
                requestInFlight: d[0],
                setRequestError: p[1]
              })
            )
          ),
          se().createElement(
            ws.Route,
            {
              path: ks(Ac.OtpEmail)
            },
            se().createElement(
              rd,
              {
                otpResendCodeRemainingTimeState: h,
                requestInFlightState: d,
                requestErrorState: p
              },
              y &&
              se().createElement(Fs, {
                requestInFlight: d[0],
                setRequestError: p[1]
              })
            )
          ),
          se().createElement(
            ws.Route,
            {
              path: ks(Ac.Password)
            },
            se().createElement(
              ld,
              {
                requestInFlightState: d,
                requestErrorState: p
              },
              y &&
              se().createElement(Fs, {
                requestInFlight: d[0],
                setRequestError: p[1]
              })
            )
          ),
          y &&
          se().createElement(
            ws.Route,
            null,
            se().createElement(
              ud,
              {
                listItemConfig: n.map(
                  (
                    function (e) {
                      var t;
                      return (
                        t = {},
                        t[Ac.Password] = {
                          rowLabel: r.Label.Password,
                          rowIcon: 'icon-status-private',
                          requestInFlight: d[0],
                          typeToBeSelected: Ac.Password
                        },
                        t[Ac.OtpEmail] = {
                          rowLabel: r.Label.OneTimeCode,
                          rowIcon: 'icon-status-private',
                          requestInFlight: d[0],
                          typeToBeSelected: Ac.OtpEmail
                        },
                        t[Ac.Passkey] = {
                          rowLabel: r.Label.Passkey,
                          rowIcon: 'icon-status-private',
                          requestInFlight: d[0],
                          typeToBeSelected: Ac.Passkey
                        },
                        t
                      ) [e]
                    }
                  )
                )
              }
            )
          )
        )
      },
      g = function () {
        var e;
        return null === f ? r.Header.VerificationMethodSelection : (
          e = {},
          e[Ac.Password] = r.Header.PasswordVerification,
          e[Ac.OtpEmail] = r.Header.OtpVerification,
          e[Ac.Passkey] = r.Header.PasskeyVerification,
          e
        ) [f]
      },
      C = se().createElement(Ti, {
        titleText: g()
      }, E()),
      b = se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          show: o,
          onHide: v,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: g(),
            buttonType: go.CLOSE,
            buttonAction: v,
            buttonEnabled: !d[0],
            headerInfo: null
          }
        ),
        E()
      );
      return i ? C : b
    },
    md = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.renderInline,
          n = e.requestService,
          r = e.metricsService,
          a = e.eventService,
          i = e.defaultType,
          o = e.availableTypes,
          l = e.defaultTypeMetadata,
          c = e.shouldModifyBrowserHistory,
          u = e.translate,
          s = e.onChallengeCompleted,
          d = e.onChallengeInvalidated,
          p = e.onModalChallengeAbandoned,
          h = se().createElement(
            Gs,
            {
              renderInline: t,
              requestService: n,
              metricsService: r,
              eventService: a,
              translate: u,
              defaultType: i,
              availableTypes: o,
              defaultTypeMetadata: l,
              onChallengeCompleted: s,
              onChallengeInvalidated: d,
              onModalChallengeAbandoned: p
            },
            se().createElement(vd, null)
          );
          return c ? se().createElement(_s.HashRouter, {
            hashType: 'noslash'
          }, h) : se().createElement(_s.MemoryRouter, null, h)
        }
      ),
      {
        common: [],
        feature: 'Feature.Reauthentication'
      }
    ),
    yd = function () {
      function e(e) {
        this.defaultType = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.challengeInitialized,
          {
            defaultType: this.defaultType
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendNoEnabledMethodsReturnedEvent = function (e, t) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.noEnabledMethodsReturned,
          {
            defaultType: this.defaultType,
            primaryReauthenticationType: e ||
            'unknown',
            methodsReturned: t
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.challengeInvalidated,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.challengeAbandoned,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.challengeCompleted,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendOtpResendRequestedEvent = function () {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.otpResendRequested,
          {
            defaultType: this.defaultType
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendReauthenticationTypeChangedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.reauthenticationTypeChanged,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeSubmittedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.codeSubmitted,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeVerificationFailedEvent = function (e, t) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.codeVerificationFailed,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown',
            reason: t
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeVerifiedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          As,
          Ns.codeVerified,
          {
            defaultType: this.defaultType,
            reauthenticationType: e ||
            'unknown'
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Ed = function () {
      return {
        hasValue: !1
      }
    },
    gd = {
      of : function (e) {
        return null == e ? {
          hasValue: !1
        }
         : {
          hasValue: !0,
          value: e
        }
      },
      empty: Ed,
      map: function (e, t) {
        return e.hasValue ? gd.of (t(e.value)) : {
          hasValue: !1
        }
      },
      orElse: function (e, t) {
        return e.hasValue ? e : gd.of (t)
      }
    },
    Cd = function () {
      function e(e, t, n) {
        void 0 === n &&
        (n = new Zi),
        this.defaultType = e,
        this.requestServiceDefault = t,
        this.eventTimer = n,
        this.solveTimeSequenceName = 'Reauthentication_' + Ds.solveTime
      }
      return e.prototype.fireInitializedEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventReauthentication,
          value: 1,
          labelValues: {
            event_type: Ls.initialized,
            reauthentication_type: this.defaultType
          }
        }),
        this.eventTimer.start(this.solveTimeSequenceName)
      },
      e.prototype.fireVerifiedEvent = function (e) {
        var t = this;
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventReauthentication,
          value: 1,
          labelValues: {
            event_type: Ls.verified,
            reauthentication_type: null != e ? e : 'unknown'
          }
        }),
        gd.map(
          gd.of (this.eventTimer.end(this.solveTimeSequenceName)),
          (
            function (n) {
              t.requestServiceDefault.metrics.recordMetric({
                name: La.SolveTimeReauthentication,
                value: n,
                labelValues: {
                  event_type: Ls.verified,
                  reauthentication_type: null != e ? e : 'unknown'
                }
              })
            }
          )
        )
      },
      e.prototype.fireInvalidatedEvent = function (e) {
        var t = this;
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventReauthentication,
          value: 1,
          labelValues: {
            event_type: Ls.invalidated,
            reauthentication_type: null != e ? e : 'unknown'
          }
        }),
        gd.map(
          gd.of (this.eventTimer.end(this.solveTimeSequenceName)),
          (
            function (n) {
              t.requestServiceDefault.metrics.recordMetric({
                name: La.SolveTimeReauthentication,
                value: n,
                labelValues: {
                  event_type: '' + Ls.invalidated,
                  reauthentication_type: null != e ? e : 'unknown'
                }
              })
            }
          )
        )
      },
      e.prototype.fireAbandonedEvent = function (e) {
        var t = this;
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventReauthentication,
          value: 1,
          labelValues: {
            event_type: Ls.abandoned,
            reauthentication_type: null != e ? e : 'unknown'
          }
        }),
        gd.map(
          gd.of (this.eventTimer.end(this.solveTimeSequenceName)),
          (
            function (n) {
              t.requestServiceDefault.metrics.recordMetric({
                name: La.SolveTimeReauthentication,
                value: n,
                labelValues: {
                  event_type: '' + Ls.abandoned,
                  reauthentication_type: null != e ? e : 'unknown'
                }
              })
            }
          )
        )
      },
      e
    }(),
    bd = new hi,
    Id = function (e) {
      var t = e.containerId,
      n = e.renderInline,
      r = e.defaultType,
      a = e.availableTypes,
      i = e.defaultTypeMetadata,
      o = e.shouldModifyBrowserHistory,
      l = e.onChallengeCompleted,
      c = e.onChallengeInvalidated,
      u = e.onModalChallengeAbandoned,
      s = document.getElementById(t);
      if (null !== s) {
        (0, de.unmountComponentAtNode) (s);
        var d = new yd(r),
        p = new Cd(r, bd);
        return (0, de.render) (
          se().createElement(
            md,
            {
              renderInline: n,
              requestService: bd,
              metricsService: p,
              eventService: d,
              defaultType: r,
              availableTypes: a,
              defaultTypeMetadata: i,
              shouldModifyBrowserHistory: o ||
              !1,
              onChallengeCompleted: l,
              onChallengeInvalidated: c,
              onModalChallengeAbandoned: u
            }
          ),
          s
        ),
        d.sendChallengeInitializedEvent(),
        p.fireInitializedEvent(),
        !0
      }
      return !1
    },
    Td = function (e) {
      return dm.match(e) &&
      e.parameters.data.challengeType === Rc.REAUTHENTICATION &&
      e.parameters.kind === gc.INVALIDATED &&
      '' !== e.parameters.data.errorMessage ? e.parameters.data.errorMessage : null
    },
    Sd = 'accountSecurityChallengeRostileEvent',
    _d = {
      challengeInitialized: 'challengeInitialized',
      challengeCompleted: 'challengeCompleted',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned'
    },
    Ad = {
      challengeInitialized: 'ChallengeInitialized',
      challengeCompleted: 'ChallengeCompleted',
      challengeInvalidated: 'ChallengeInvalidated',
      challengeAbandoned: 'ChallengeAbandoned'
    },
    Nd = {
      challengeSolveTime: 'ChallengeSolveTime'
    },
    Ld = function (e) {
      return new Promise(
        (
          function (t) {
            return setTimeout((function () {
              return t(void 0)
            }), e)
          }
        )
      )
    },
    Dd = 'RostileChallengeId';
    !function (e) {
      e[e.INITIAL = 0] = 'INITIAL',
      e[e.COMPLETED_UNRESOLVED = 1] = 'COMPLETED_UNRESOLVED',
      e[e.COMPLETED_SUCCESS = 2] = 'COMPLETED_SUCCESS',
      e[e.COMPLETED_ERROR = 3] = 'COMPLETED_ERROR'
    }(Vs || (Vs = {}));
    var wd,
    Od = function (e) {
      switch (e) {
        case gn.INVALID_SESSION:
          return Nc.INVALID_SESSION;
        default:
          return Nc.UNKNOWN
      }
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.SET_CHALLENGE_ABANDONED = 2] = 'SET_CHALLENGE_ABANDONED',
      e[e.HIDE_MODAL_CHALLENGE = 3] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 4] = 'SHOW_MODAL_CHALLENGE'
    }(wd || (wd = {}));
    var kd,
    Rd = function () {
      return (
        Rd = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Pd = function (e, t) {
      var n = Rd({
      }, e);
      switch (t.type) {
        case wd.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n;
        case wd.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData,
          n;
        case wd.SET_CHALLENGE_ABANDONED:
          return n.isAbandoned = !0,
          n;
        case wd.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case wd.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    Md = (0, ue.createContext) (null),
    xd = function (e) {
      var t = e.challengeId,
      n = e.puzzleType,
      r = e.renderInline,
      a = e.eventService,
      i = e.metricsService,
      o = e.requestService,
      l = e.translate,
      c = e.onChallengeDisplayed,
      u = e.onChallengeCompleted,
      s = e.onChallengeInvalidated,
      d = e.onModalChallengeAbandoned,
      p = e.children,
      h = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Description: {
                  VerificationError: e('Description.VerificationError'),
                  VerificationSuccess: e('Description.VerificationSuccess'),
                  VerificationPrompt: e('Description.VerificationPrompt'),
                  VerificationHeader: e('Description.VerificationHeader'),
                  VerificationErrorHeader: e('Description.VerificationErrorHeader'),
                  ImAHuman: e('Description.ImAHuman'),
                  Ok: e('Description.Ok')
                }
              }
            }(l)
          }
        )
      ) [0],
      f = (0, ue.useState) (
        (
          function () {
            return {
              challengeId: t,
              puzzleType: n,
              renderInline: r,
              resources: h,
              eventService: a,
              metricsService: i,
              requestService: o,
              onChallengeDisplayed: c,
              onModalChallengeAbandoned: d,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isAbandoned: !1,
              isModalVisible: !1
            }
          }
        )
      ) [0],
      v = (0, ue.useReducer) (Pd, f),
      m = v[0],
      y = v[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== m.onChallengeCompletedData &&
            null === m.onChallengeInvalidatedData &&
            (
              a.sendChallengeCompletedEvent(),
              i.fireChallengeCompletedEvent(),
              u(m.onChallengeCompletedData)
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          u
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            m.isAbandoned ||
            null === m.onChallengeInvalidatedData ||
            null !== m.onChallengeCompletedData ||
            (
              a.sendChallengeInvalidatedEvent(),
              i.fireChallengeInvalidatedEvent(),
              s(m.onChallengeInvalidatedData)
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          s,
          m.isAbandoned
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            m.isAbandoned &&
            null === m.onChallengeCompletedData &&
            null === m.onChallengeInvalidatedData &&
            (
              a.sendChallengeAbandonedEvent(),
              i.fireChallengeAbandonedEvent(),
              null !== d &&
              d((function () {
                return y({
                  type: wd.SHOW_MODAL_CHALLENGE
                })
              }))
            )
          }
        ),
        [
          a,
          i,
          m.onChallengeCompletedData,
          m.onChallengeInvalidatedData,
          m.isAbandoned,
          s,
          d
        ]
      ),
      se().createElement(Md.Provider, {
        value: {
          state: m,
          dispatch: y
        }
      }, p)
    },
    Vd = function () {
      var e = (0, ue.useContext) (Md);
      if (null === e) throw new Error('RostileContext was not provided in the current scope');
      return e
    },
    Hd = function (e, t) {
      for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
      return e
    },
    Wd = function () {
      var e = Vd().state.puzzleType,
      t = (0, ue.useRef) ([]);
      return (0, ue.useEffect) (
        (
          function () {
            var e,
            n = (
              e = 0,
              function (n) {
                n.timeStamp - e > 20 &&
                (
                  t.current = Hd(
                    Hd([], t.current.slice( - 99)),
                    [
                      {
                        x: n.clientX,
                        y: n.clientY,
                        timestamp: n.timeStamp
                      }
                    ]
                  ),
                  e = n.timeStamp
                )
              }
            );
            return window.addEventListener('mousemove', n),
            function () {
              window.removeEventListener('mousemove', n)
            }
          }
        ),
        [
          e
        ]
      ),
      t
    },
    Ud = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Gd = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    zd = function (e) {
      var t = e.answerState,
      n = e.checkAnswer,
      r = Vd(),
      a = r.state,
      i = a.isModalVisible,
      o = a.renderInline,
      l = a.resources,
      c = r.dispatch,
      u = (0, ue.useState) (!1),
      s = u[0],
      d = u[1],
      p = (0, ue.useRef) (null),
      h = (0, ue.useState) (null),
      f = h[0],
      v = h[1],
      m = (0, ue.useState) (null),
      y = m[0],
      E = m[1],
      g = Wd(),
      C = function () {
        c({
          type: wd.HIDE_MODAL_CHALLENGE
        })
      },
      b = function (e) {
        return Ud(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var t,
              r,
              a,
              i,
              o;
              return Gd(
                this,
                (
                  function (l) {
                    switch (l.label) {
                      case 0:
                        return e.preventDefault(),
                        t = performance.now(),
                        r = {
                          width: window.screen.width,
                          height: window.screen.height
                        },
                        a = {
                          width: window.innerWidth,
                          height: window.innerHeight
                        },
                        p.current ? (
                          i = p.current.getBoundingClientRect(),
                          o = {
                            x: i.x,
                            y: i.y,
                            width: i.width,
                            height: i.height
                          },
                          null == f ||
                          null == y ? [
                            3,
                            2
                          ] : (d(!0), [
                            4,
                            Ld(200)
                          ])
                        ) : [
                          2
                        ];
                      case 1:
                        l.sent(),
                        n({
                          buttonClicked: !0,
                          click: {
                            x: e.clientX,
                            y: e.clientY,
                            timestamp: e.timeStamp,
                            duration: e.timeStamp - y
                          },
                          completionTime: t - f,
                          mouseMovements: g.current,
                          screenSize: r,
                          buttonLocation: o,
                          windowSize: a,
                          isMobile: (c = window.matchMedia, !!c && c('(pointer:coarse)').matches)
                        }).then((function () {
                          return d(!1)
                        }), (function () {
                          return d(!1)
                        })),
                        l.label = 2;
                      case 2:
                        return [2]
                    }
                    var c
                  }
                )
              )
            }
          )
        )
      },
      I = function (e) {
        E(e.timeStamp)
      };
      (0, ue.useEffect) ((function () {
        i &&
        v(performance.now())
      }), [
        i
      ]);
      return se().createElement(
        'div',
        {
          className: 'rostile-visible-puzzle'
        },
        function () {
          if (s) return se().createElement(Ii.Loading, null);
          switch (t) {
            case Vs.INITIAL:
              return se().createElement(
                se().Fragment,
                null,
                se().createElement('span', null, l.Description.VerificationPrompt),
                se().createElement('br', null),
                se().createElement(
                  'span',
                  {
                    ref: p
                  },
                  se().createElement(
                    Ii.Button,
                    {
                      className: 'rostile-verify-button',
                      onClick: b,
                      onMouseDown: I
                    },
                    l.Description.ImAHuman
                  )
                )
              );
            case Vs.COMPLETED_UNRESOLVED:
              return se().createElement(Ii.Loading, null);
            case Vs.COMPLETED_SUCCESS:
              return se().createElement(
                se().Fragment,
                null,
                se().createElement('div', {
                  className: 'icon-checkmark'
                }),
                se().createElement('br', null),
                se().createElement('span', null, l.Description.VerificationSuccess)
              );
            case Vs.COMPLETED_ERROR:
              return se().createElement(
                se().Fragment,
                null,
                se().createElement('span', null, l.Description.VerificationError),
                se().createElement('br', null),
                !o &&
                se().createElement(
                  Ii.Button,
                  {
                    className: 'rostile-verify-button',
                    onClick: C
                  },
                  l.Description.Ok
                )
              );
            default:
              return null
          }
        }()
      )
    },
    Fd = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Bd = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    qd = function () {
      var e = Vd(),
      t = e.state,
      n = t.challengeId,
      r = t.puzzleType,
      a = t.renderInline,
      i = t.resources,
      o = t.requestService,
      l = t.eventService,
      c = t.metricsService,
      u = t.onChallengeDisplayed,
      s = t.isModalVisible,
      d = e.dispatch,
      p = (0, ue.useState) (Vs.INITIAL),
      h = p[0],
      f = p[1],
      v = function () {
        d({
          type: wd.HIDE_MODAL_CHALLENGE
        })
      },
      m = function () {
        f(Vs.INITIAL),
        d({
          type: wd.SET_CHALLENGE_ABANDONED
        }),
        v()
      },
      y = function (e, t) {
        return void 0 === t &&
        (t = !1),
        Fd(
          void 0,
          void 0,
          Promise,
          (
            function () {
              var r;
              return Bd(
                this,
                (
                  function (a) {
                    switch (a.label) {
                      case 0:
                        return f(Vs.COMPLETED_UNRESOLVED),
                        [
                          4,
                          o.rostile.verifyPuzzle(n, e)
                        ];
                      case 1:
                        if ((r = a.sent()).isError) {
                          if (r.error !== gn.INVALID_SESSION && !t) return [2,
                          y(e, !0)];
                          f(Vs.COMPLETED_ERROR),
                          d({
                            type: wd.SET_CHALLENGE_INVALIDATED,
                            onChallengeInvalidatedData: {
                              errorCode: Od(r.error),
                              errorMessage: i.Description.VerificationError
                            }
                          })
                        } else f(Vs.COMPLETED_SUCCESS),
                        d({
                          type: wd.SET_CHALLENGE_COMPLETED,
                          onChallengeCompletedData: {
                            redemptionToken: r.value.redemptionToken
                          }
                        }),
                        setTimeout((function () {
                          return s &&
                          v()
                        }), 2000);
                        return [2,
                        void 0]
                    }
                  }
                )
              )
            }
          )
        )
      };
      (0, ue.useEffect) (
        (
          function () {
            var e = sr.localStorageService.getLocalStorage(Dd);
            if (n !== e) switch (
                sr.localStorageService.setLocalStorage(Dd, n),
                l.sendChallengeInitializedEvent(),
                c.fireChallengeInitializedEvent(),
                r
              ) {
              case Lc.VISIBLE:
                d({
                  type: wd.SHOW_MODAL_CHALLENGE
                }),
                u({
                  displayed: !0
                });
                break;
              case Lc.INVISIBLE:
                Fd(
                  void 0,
                  void 0,
                  void 0,
                  (
                    function () {
                      return Bd(
                        this,
                        (
                          function (e) {
                            switch (e.label) {
                              case 0:
                                return [4,
                                y({
                                })];
                              case 1:
                                return e.sent(),
                                [
                                  2
                                ]
                            }
                          }
                        )
                      )
                    }
                  )
                ).then((function () {
                }), (function () {
                }));
                break;
              default:
                d({
                  type: wd.SET_CHALLENGE_INVALIDATED,
                  onChallengeInvalidatedData: {
                    errorCode: Nc.UNKNOWN,
                    errorMessage: i.Description.VerificationError
                  }
                }),
                s &&
                v()
            }
          }
        ),
        [
          d,
          u,
          r
        ]
      );
      var E = function () {
        var e = a ? Si : Ii.Modal.Body;
        switch (r) {
          case Lc.VISIBLE:
            return se().createElement(
              se().Fragment,
              null,
              se().createElement(e, null, se().createElement(zd, {
                answerState: h,
                checkAnswer: y
              }))
            );
          case Lc.INVISIBLE:
          default:
            return null
        }
      };
      return a ? se().createElement(
        Ti,
        {
          titleText: h !== Vs.COMPLETED_ERROR ? i.Description.VerificationHeader : i.Description.VerificationErrorHeader
        },
        E()
      ) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern modal-modern-challenge-rostile',
          show: s,
          onHide: h === Vs.COMPLETED_ERROR ? v : m,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: h !== Vs.COMPLETED_ERROR ? i.Description.VerificationHeader : i.Description.VerificationErrorHeader,
            buttonType: h === Vs.COMPLETED_ERROR ? go.HIDDEN : go.CLOSE,
            buttonAction: m,
            buttonEnabled: h !== Vs.COMPLETED_ERROR,
            headerInfo: null
          }
        ),
        E()
      )
    },
    Zd = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.challengeId,
          n = e.puzzleType,
          r = e.renderInline,
          a = e.eventService,
          i = e.metricsService,
          o = e.requestService,
          l = e.translate,
          c = e.onChallengeDisplayed,
          u = e.onChallengeCompleted,
          s = e.onChallengeInvalidated,
          d = e.onModalChallengeAbandoned;
          return se().createElement(
            xd,
            {
              challengeId: t,
              puzzleType: n,
              renderInline: r,
              eventService: a,
              metricsService: i,
              requestService: o,
              translate: l,
              onChallengeDisplayed: c,
              onChallengeCompleted: u,
              onChallengeInvalidated: s,
              onModalChallengeAbandoned: d
            },
            se().createElement(qd, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.RostileChallenge'
      }
    ),
    jd = function () {
      function e(e) {
        this.challengeId = e
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Sd,
          _d.challengeInitialized,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeCompletedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Sd,
          _d.challengeCompleted,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Sd,
          _d.challengeInvalidated,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function () {
        W().EventStream.SendEventWithTarget(
          Sd,
          _d.challengeAbandoned,
          {
            challengeId: this.challengeId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Yd = function (e) {
      switch (e) {
        case Lc.VISIBLE:
          return 'Visible';
        case Lc.INVISIBLE:
          return 'Invisible';
        case Lc.INVALID:
        default:
          return 'Invalid'
      }
    },
    Kd = function () {
      function e(e, t, n) {
        this.appType = e ||
        'unknown',
        this.puzzleType = t ||
        Lc.INVALID,
        this.requestServiceDefault = n,
        this.eventTimer = new Zi,
        this.challengeSolveTimeSequenceName = 'Rostile_' + Nd.challengeSolveTime
      }
      return e.prototype.fireChallengeInitializedEvent = function () {
        this.fireEvent(Ad.challengeInitialized),
        this.eventTimer.start(this.challengeSolveTimeSequenceName)
      },
      e.prototype.fireChallengeCompletedEvent = function () {
        this.fireEvent(Ad.challengeCompleted),
        this.fireSolveTimeEvent(Ad.challengeCompleted)
      },
      e.prototype.fireChallengeInvalidatedEvent = function () {
        this.fireEvent(Ad.challengeInvalidated),
        this.fireSolveTimeEvent(Ad.challengeInvalidated)
      },
      e.prototype.fireChallengeAbandonedEvent = function () {
        this.fireEvent(Ad.challengeAbandoned),
        this.fireSolveTimeEvent(Ad.challengeAbandoned)
      },
      e.prototype.fireEvent = function (e) {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventRostile,
          value: 1,
          labelValues: {
            event_type: 'Rostile_' + e,
            application_type: this.appType,
            puzzle_type: Yd(this.puzzleType)
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolveTimeEvent = function (e) {
        var t = this.eventTimer.end(this.challengeSolveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTimeRostile,
          value: t,
          labelValues: {
            event_type: 'Rostile_' + e,
            application_type: this.appType,
            puzzle_type: Yd(this.puzzleType)
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    Jd = new hi,
    Xd = function (e) {
      var t = e.containerId,
      n = e.challengeId,
      r = e.puzzleType,
      a = e.appType,
      i = e.renderInline,
      o = e.onChallengeDisplayed,
      l = e.onChallengeCompleted,
      c = e.onChallengeInvalidated,
      u = e.onModalChallengeAbandoned,
      s = document.getElementById(t);
      if (null !== s) {
        (0, de.unmountComponentAtNode) (s);
        var d = new jd(n),
        p = new Kd(a, r, Jd);
        return (0, de.render) (
          se().createElement(
            Zd,
            {
              challengeId: n,
              puzzleType: r,
              renderInline: i,
              eventService: d,
              metricsService: p,
              requestService: Jd,
              onChallengeDisplayed: o,
              onChallengeCompleted: l,
              onChallengeInvalidated: c,
              onModalChallengeAbandoned: u
            }
          ),
          s
        ),
        !0
      }
      return !1
    },
    Qd = 'securityQuestionsEvent',
    $d = {
      answerChoicesFailedToLoad: 'answerChoicesFailedToLoad'
    },
    ep = {
      initialized: 'Initialized',
      errored: 'Errored',
      solved: 'Solved',
      incorrect: 'Incorrect',
      failed: 'Failed'
    },
    tp = function (e, t) {
      switch (t) {
        case Dc.USER_WAS_FORCE_RESET:
          return e.Message.Error.SecurityQuestions.UserWasForceReset;
        case Dc.SESSION_EXPIRED:
          return e.Message.Error.SecurityQuestions.SessionInactive;
        default:
          return e.Message.Error.Default
      }
    },
    np = function (e, t) {
      switch (t) {
        case Sn.SESSION_INACTIVE:
          return e.Message.Error.SecurityQuestions.SessionInactive;
        default:
          return e.Message.Error.Default
      }
    },
    rp = function (e) {
      switch (e) {
        case Sn.SESSION_INACTIVE:
          return Dc.SESSION_EXPIRED;
        default:
          return Dc.UNKNOWN
      }
    };
    !function (e) {
      e[e.SET_CHALLENGE_COMPLETED = 0] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 1] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 2] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 3] = 'SHOW_MODAL_CHALLENGE'
    }(kd || (kd = {}));
    var ap,
    ip = function () {
      return (
        ip = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    op = function (e, t) {
      var n = ip({
      }, e);
      switch (t.type) {
        case kd.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n.isModalVisible = !1,
          n;
        case kd.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: tp(e.resources, t.errorCode)
          },
          n.isModalVisible = !1,
          n;
        case kd.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case kd.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    lp = (0, ue.createContext) (null),
    cp = function (e) {
      var t = e.userId,
      n = e.sessionId,
      r = e.renderInline,
      a = e.eventService,
      i = e.metricsService,
      o = e.requestService,
      l = e.translate,
      c = e.onChallengeCompleted,
      u = e.onChallengeInvalidated,
      s = e.onModalChallengeAbandoned,
      d = e.children,
      p = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Action: {
                  Confirm: e('Action.Confirm'),
                  Continue: e('Action.Continue'),
                  Ok: e('Action.OK'),
                  PickN: function (t) {
                    return e('Action.PickN', {
                      count: t
                    })
                  },
                  PleaseTryAgain: e('Action.PleaseTryAgain'),
                  Reload: e('Action.Reload'),
                  SelectAllThatApply: e('Action.SelectAllThatApply')
                },
                Description: {
                  RegainAccessGeneric: function (t) {
                    return e('Description.RegainAccessGeneric', {
                      styledLinkText: t
                    })
                  },
                  UnknownChoice: e('Description.UnknownChoice'),
                  VerifyYourIdentity: e('Description.VerifyYourIdentity'),
                  WhichGames: e('Description.WhichGames', {
                    days: 7
                  }),
                  YourPasswordHasBeenReset: e('Description.YourPasswordHasBeenReset')
                },
                Header: {
                  PleaseConfirmYourIdentity: e('Header.PleaseConfirmYourIdentity')
                },
                Message: {
                  Error: {
                    AnswerIncorrect: e('Message.Error.AnswerIncorrect'),
                    Default: e('Message.Error.Default'),
                    MustPickN: e('Message.Error.MustPickN'),
                    SecurityQuestions: {
                      SessionInactive: e('Message.Error.SecurityQuestions.SessionInactive'),
                      UserWasForceReset: e('Message.Error.SecurityQuestions.UserWasForceReset')
                    }
                  }
                }
              }
            }(l)
          }
        )
      ) [0],
      h = (0, ue.useState) (
        (
          function () {
            return {
              userId: t,
              sessionId: n,
              renderInline: r,
              resources: p,
              eventService: a,
              metricsService: i,
              requestService: o,
              onModalChallengeAbandoned: s,
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !0
            }
          }
        )
      ) [0],
      f = (0, ue.useReducer) (op, h),
      v = f[0],
      m = f[1];
      return (0, ue.useEffect) (
        (
          function () {
            null !== v.onChallengeCompletedData &&
            null === v.onChallengeInvalidatedData &&
            c(v.onChallengeCompletedData)
          }
        ),
        [
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          c
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            null !== v.onChallengeInvalidatedData &&
            null === v.onChallengeCompletedData &&
            u(v.onChallengeInvalidatedData)
          }
        ),
        [
          v.onChallengeCompletedData,
          v.onChallengeInvalidatedData,
          u
        ]
      ),
      se().createElement(lp.Provider, {
        value: {
          state: v,
          dispatch: m
        }
      }, d)
    },
    up = function () {
      var e = (0, ue.useContext) (lp);
      if (null === e) throw new Error(
        'SecurityQuestionsContext was not provided in the current scope'
      );
      return e
    },
    sp = function (e) {
      var t = e.setSelected,
      n = e.caption,
      r = e.imageUrl,
      a = e.selected,
      i = up().state.resources,
      o = 'answer-choice-image' + (a ? ' answer-choice-selected' : ''),
      l = n ||
      i.Description.UnknownChoice,
      c = function () {
        return t(!a)
      };
      return se().createElement(
        'div',
        {
          className: 'answer-choice'
        },
        se().createElement(
          'div',
          {
            className: o,
            role: 'checkbox',
            'aria-checked': a,
            onClick: function (e) {
              c(),
              e.currentTarget.blur()
            },
            onKeyDown: function (e) {
              'Enter' === e.key &&
              c()
            },
            tabIndex: 0
          },
          null !== r ? se().createElement('img', {
            src: r,
            alt: l
          }) : se().createElement('div', {
            className: 'answer-choice-img-placeholder'
          }, l)
        ),
        se().createElement('div', {
          className: 'answer-choice-caption xsmall'
        }, l)
      )
    },
    dp = function () {
      return (
        dp = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    pp = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    hp = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    fp = function () {
      var e,
      t = up(),
      n = t.state,
      r = n.userId,
      a = n.sessionId,
      i = n.renderInline,
      o = n.resources,
      l = n.eventService,
      c = n.metricsService,
      u = n.requestService,
      s = n.onModalChallengeAbandoned,
      d = n.isModalVisible,
      p = t.dispatch,
      h = (0, ue.useState) (),
      f = h[0],
      v = h[1],
      m = (0, ue.useState) (null),
      y = m[0],
      E = m[1],
      g = (0, ue.useState) (null),
      C = g[0],
      b = g[1],
      I = (0, ue.useState) (null),
      T = I[0],
      S = I[1],
      _ = (0, ue.useState) (!1),
      A = _[0],
      N = _[1],
      L = (0, ue.useState) (null),
      D = L[0],
      w = L[1],
      O = (0, ue.useState) (!1),
      k = O[0],
      R = O[1],
      P = (0, ue.useState) (!1),
      M = P[0],
      x = P[1],
      V = function () {
        v(null),
        E(null),
        b(null)
      },
      W = function () {
        p({
          type: kd.HIDE_MODAL_CHALLENGE
        }),
        null !== s &&
        s((function () {
          return p({
            type: kd.SHOW_MODAL_CHALLENGE
          })
        }))
      },
      U = function (e) {
        return function (t) {
          var n;
          null !== C &&
          void 0 !== C[e] &&
          b(dp(dp({
          }, C), ((n = {}) [e] = dp(dp({
          }, C[e]), {
            selected: t
          }), n)))
        }
      };
      e = function () {
        return pp(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e,
              t,
              n,
              i,
              c,
              s,
              d,
              h,
              f;
              return hp(
                this,
                (
                  function (m) {
                    switch (m.label) {
                      case 0:
                        return S(null),
                        [
                          4,
                          u.securityQuestions.getQuestion(r, a)
                        ];
                      case 1:
                        return (e = m.sent()).isError ? (
                          e.error === Sn.SESSION_INACTIVE ? p({
                            type: kd.SET_CHALLENGE_INVALIDATED,
                            errorCode: rp(e.error)
                          }) : S(np(o, e.error) + ' ' + o.Action.PleaseTryAgain),
                          [
                            2
                          ]
                        ) : (
                          v(e.value.questionType),
                          e.value.answerPrompt === An.PICK_ALL_CORRECT_CHOICES ? E({
                            answerPrompt: An.PICK_ALL_CORRECT_CHOICES
                          }) : E({
                            answerPrompt: An.PICK_C_CORRECT_CHOICES,
                            correctAnswerChoiceCount: e.value.correctAnswerChoiceCount
                          }),
                          t = {},
                          n = e.value.answerChoices,
                          i = new Set(n),
                          c = new Set(n),
                          [
                            4,
                            u.games.getDetailsForUniverseIds(n)
                          ]
                        );
                      case 2:
                        return (s = m.sent()).isError ? (
                          S(
                            function (e, t) {
                              return e.Message.Error.Default
                            }(o, s.error) + ' ' + o.Action.PleaseTryAgain
                          ),
                          [
                            2
                          ]
                        ) : (
                          d = {},
                          s.value.data.forEach((function (e) {
                            d[e.id] = e.name,
                            i.delete(e.id.toString())
                          })),
                          [
                            4,
                            u.thumbnails.getIconsForUniverseIds(n, '256x256', jn.PNG, !1)
                          ]
                        );
                      case 3:
                        return (h = m.sent()).isError ? (
                          S(
                            function (e, t) {
                              return e.Message.Error.Default
                            }(o, h.error) + ' ' + o.Action.PleaseTryAgain
                          ),
                          [
                            2
                          ]
                        ) : (
                          f = {},
                          h.value.data.forEach(
                            (
                              function (e) {
                                e.state === Yn.COMPLETED &&
                                (f[e.targetId] = e.imageUrl, c.delete(e.targetId.toString()))
                              }
                            )
                          ),
                          n.forEach(
                            (
                              function (e) {
                                t[e] = {
                                  caption: d[e] ||
                                  null,
                                  imageUrl: f[e] ||
                                  null,
                                  selected: !1
                                }
                              }
                            )
                          ),
                          b(t),
                          (i.size > 0 || c.size > 0) &&
                          l.sendAnswerChoicesFailedToLoadEvent(Array.from(i), Array.from(c)),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      (0, ue.useEffect) ((function () {
        return e(),
        function () {
          V()
        }
      }), []);
      var G = null !== C ? Object.entries(C).filter((function (e) {
        return e[1].selected
      })).length : 0,
      z = null !== y &&
      (
        y.answerPrompt === An.PICK_ALL_CORRECT_CHOICES ||
        y.correctAnswerChoiceCount === G
      ),
      F = {
        content: A ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : o.Action.Confirm,
        label: o.Action.Confirm,
        enabled: !A &&
        z,
        action: function () {
          return pp(
            void 0,
            void 0,
            void 0,
            (
              function () {
                var t,
                n;
                return hp(
                  this,
                  (
                    function (i) {
                      switch (i.label) {
                        case 0:
                          return null === C ? [
                            2
                          ] : (
                            t = Object.entries(C).filter((function (e) {
                              return e[1].selected
                            })).map((function (e) {
                              return e[0]
                            })),
                            N(!0),
                            [
                              4,
                              u.securityQuestions.answerQuestion(r, t, a)
                            ]
                          );
                        case 1:
                          return (n = i.sent()).isError ? n.error === Sn.SESSION_INACTIVE ? (
                            p({
                              type: kd.SET_CHALLENGE_INVALIDATED,
                              errorCode: rp(n.error)
                            }),
                            [
                              2
                            ]
                          ) : (
                            c.fireErroredEvent(),
                            w(np(o, n.error) + ' ' + o.Action.PleaseTryAgain),
                            N(!1),
                            [
                              2
                            ]
                          ) : (
                            w(null),
                            n.value.answerCorrect ? (
                              c.fireSolvedEvent(),
                              p({
                                type: kd.SET_CHALLENGE_COMPLETED,
                                onChallengeCompletedData: {
                                  redemptionToken: n.value.redemptionToken
                                }
                              }),
                              [
                                3,
                                6
                              ]
                            ) : [
                              3,
                              2
                            ]
                          );
                        case 2:
                          return n.value.shouldRequestNewQuestion ? (c.fireIncorrectEvent(), V(), [
                            4,
                            Ld(250)
                          ]) : [
                            3,
                            5
                          ];
                        case 3:
                          return i.sent(),
                          R(!0),
                          [
                            4,
                            e()
                          ];
                        case 4:
                          return i.sent(),
                          N(!1),
                          [
                            3,
                            6
                          ];
                        case 5:
                          n.value.userWasForceReset ? (c.fireFailedEvent(), x(!0)) : (
                            c.fireErroredEvent(),
                            c.fireFailedEvent(),
                            p({
                              type: kd.SET_CHALLENGE_INVALIDATED,
                              errorCode: Dc.UNKNOWN
                            })
                          ),
                          i.label = 6;
                        case 6:
                          return [2]
                      }
                    }
                  )
                )
              }
            )
          )
        }
      },
      B = {
        content: o.Action.Reload,
        label: o.Action.Reload,
        enabled: null !== T,
        action: e
      },
      q = {
        content: o.Action.Continue,
        label: o.Action.Continue,
        enabled: !0,
        action: function () {
          window.location.href = H.Endpoints.getAbsoluteUrl('/login/securityNotification')
        }
      },
      Z = function () {
        var e = i ? Si : Ii.Modal.Body,
        t = i ? Io : To,
        n = i ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
        r = i ? 'inline-challenge-margin-bottom-sm' : 'modal-margin-bottom-sm',
        a = i ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
        l = i ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
        if (M) return se().createElement(
          se().Fragment,
          null,
          se().createElement(
            e,
            null,
            se().createElement('div', {
              className: n
            }),
            se().createElement(
              'p',
              {
                className: a + ' font-bold'
              },
              o.Description.YourPasswordHasBeenReset
            ),
            se().createElement(
              'p',
              {
                dangerouslySetInnerHTML: {
                  __html: o.Description.RegainAccessGeneric('<span class="font-bold">' + o.Action.Continue + '</span>')
                }
              }
            )
          ),
          se().createElement(t, {
            positiveButton: q,
            negativeButton: null
          })
        );
        if (null !== T) return se().createElement(
          se().Fragment,
          null,
          se().createElement(e, null, se().createElement('p', null, T)),
          se().createElement(t, {
            positiveButton: B,
            negativeButton: null
          })
        );
        if (null === f || null === y || null === C) return se().createElement(
          e,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin modal-margin-bottom-large'
            }
          )
        );
        var c = Object.keys(C).length % 3 == 1;
        return se().createElement(
          se().Fragment,
          null,
          se().createElement(
            e,
            null,
            se().createElement('div', {
              className: n
            }),
            se().createElement('p', {
              className: r
            }, o.Description.WhichGames),
            se().createElement(
              'p',
              {
                className: l + ' font-bold'
              },
              y.answerPrompt === An.PICK_ALL_CORRECT_CHOICES ? o.Action.SelectAllThatApply : o.Action.PickN(y.correctAnswerChoiceCount)
            ),
            se().createElement(
              'p',
              {
                className: (k ? r : l) + ' small'
              },
              o.Description.VerifyYourIdentity
            ),
            k &&
            se().createElement(
              'p',
              {
                className: l + ' text-error'
              },
              o.Message.Error.AnswerIncorrect,
              ' ',
              o.Action.PleaseTryAgain
            ),
            se().createElement(
              'div',
              {
                className: l + ' answer-choice-area'
              },
              Object.keys(C).map(
                (
                  function (e, t) {
                    return se().createElement(
                      se().Fragment,
                      {
                        key: e
                      },
                      se().createElement(sp, dp({
                        key: e,
                        setSelected: U(e)
                      }, C[e])),
                      c &&
                      t === Object.keys(C).length - 3 ? se().createElement('br', null) : null
                    )
                  }
                )
              )
            ),
            se().createElement('p', {
              className: 'text-error xsmall'
            }, D)
          ),
          se().createElement(t, {
            positiveButton: F,
            negativeButton: null
          })
        )
      };
      return i ? se().createElement(Ti, {
        titleText: o.Header.PleaseConfirmYourIdentity
      }, Z()) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          show: d,
          onHide: W,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: o.Header.PleaseConfirmYourIdentity,
            buttonType: M ? go.HIDDEN : go.CLOSE,
            buttonAction: W,
            buttonEnabled: !A,
            headerInfo: null
          }
        ),
        Z()
      )
    },
    vp = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.userId,
          n = e.sessionId,
          r = e.renderInline,
          a = e.eventService,
          i = e.metricsService,
          o = e.requestService,
          l = e.translate,
          c = e.onChallengeCompleted,
          u = e.onChallengeInvalidated,
          s = e.onModalChallengeAbandoned;
          return se().createElement(
            cp,
            {
              userId: t,
              sessionId: n,
              renderInline: r,
              eventService: a,
              metricsService: i,
              requestService: o,
              translate: l,
              onChallengeCompleted: c,
              onChallengeInvalidated: u,
              onModalChallengeAbandoned: s
            },
            se().createElement(fp, null)
          )
        }
      ),
      {
        common: [
          'CommonUI.Messages'
        ],
        feature: 'Feature.SecurityQuestions'
      }
    ),
    mp = function () {
      function e(e) {
        this.sessionId = e
      }
      return e.prototype.sendAnswerChoicesFailedToLoadEvent = function (e, t) {
        W().EventStream.SendEventWithTarget(
          Qd,
          $d.answerChoicesFailedToLoad,
          {
            sessionId: this.sessionId,
            answerChoicesWithNoCaption: JSON.stringify(e),
            answerChoicesWithNoIcon: JSON.stringify(t)
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    yp = function () {
      function e(e) {
        var t = e.appType,
        n = e.requestServiceDefault;
        this.appType = t ||
        'unknown',
        this.requestServiceDefault = n
      }
      return e.prototype.fireInitializedEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventSecurityQuestion,
          value: 1,
          labelValues: {
            event_type: ep.initialized,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireErroredEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventSecurityQuestion,
          value: 1,
          labelValues: {
            event_type: ep.errored,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireSolvedEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventSecurityQuestion,
          value: 1,
          labelValues: {
            event_type: ep.solved,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireIncorrectEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventSecurityQuestion,
          value: 1,
          labelValues: {
            event_type: ep.incorrect,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireFailedEvent = function () {
        this.requestServiceDefault.metrics.recordMetric({
          name: La.EventSecurityQuestion,
          value: 1,
          labelValues: {
            event_type: ep.failed,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    Ep = new hi,
    gp = function (e) {
      var t = e.containerId,
      n = e.userId,
      r = e.sessionId,
      a = e.appType,
      i = e.renderInline,
      o = e.onChallengeCompleted,
      l = e.onChallengeInvalidated,
      c = e.onModalChallengeAbandoned;
      n = n.toString();
      var u = document.getElementById(t);
      if (null !== u) {
        (0, de.unmountComponentAtNode) (u);
        var s = new mp(r),
        d = new yp({
          appType: a,
          requestServiceDefault: Ep
        });
        return (0, de.render) (
          se().createElement(
            vp,
            {
              userId: n,
              sessionId: r,
              renderInline: i,
              eventService: s,
              metricsService: d,
              requestService: Ep,
              onChallengeCompleted: o,
              onChallengeInvalidated: l,
              onModalChallengeAbandoned: c
            }
          ),
          u
        ),
        d.fireInitializedEvent(),
        !0
      }
      return !1
    },
    Cp = 100,
    bp = 'accountSecurityChallengeTwoStepVerificationEvent',
    Ip = {
      challengeInitialized: 'challengeInitialized',
      userConfigurationLoaded: 'userConfigurationLoaded',
      challengeInvalidated: 'challengeInvalidated',
      challengeAbandoned: 'challengeAbandoned',
      emailResendRequested: 'emailResendRequested',
      smsResendRequested: 'smsResendRequested',
      mediaTypeChanged: 'mediaTypeChanged',
      codeSubmitted: 'codeSubmitted',
      codeVerificationFailed: 'codeVerificationFailed',
      codeVerified: 'codeVerified',
      noEnabledMethodsReturned: 'noEnabledMethodsReturned'
    },
    Tp = {
      initialized: 'Initialized',
      verified: 'Verified',
      invalidated: 'Invalidated',
      abandoned: 'Abandoned'
    },
    Sp = {
      solveTime: 'SolveTime'
    },
    _p = function (e, t) {
      switch (t) {
        case kc.SESSION_EXPIRED:
          return e.Response.SessionExpired;
        default:
          return e.Response.DefaultError
      }
    },
    Ap = function (e, t) {
      switch (t) {
        case lr.FEATURE_DISABLED:
          return e.Response.FeatureNotAvailable;
        case lr.INVALID_CODE:
          return e.Response.InvalidCode;
        case lr.TOO_MANY_REQUESTS:
          return e.Response.TooManyAttempts;
        case lr.INVALID_CHALLENGE_ID:
          return e.Response.SessionExpired;
        case lr.AUTHENTICATOR_CODE_ALREADY_USED:
          return e.Response.AuthenticatorCodeAlreadyUsed;
        default:
          return e.Response.DefaultError
      }
    },
    Np = function (e) {
      switch (e) {
        case lr.INVALID_CHALLENGE_ID:
          return kc.SESSION_EXPIRED;
        default:
          return kc.UNKNOWN
      }
    },
    Lp = function () {
      var e = (0, ws.useLocation) (),
      t = (0, ws.matchPath) (e.pathname, {
        path: '/:activeMediaType',
        exact: !0,
        strict: !1
      });
      return (null == t ? void 0 : t.params) ? null == t ? void 0 : t.params.activeMediaType : null
    },
    Dp = function (e) {
      return '/' + (e || '')
    };
    !function (e) {
      e[e.SET_METADATA = 0] = 'SET_METADATA',
      e[e.SET_USER_CONFIGURATION = 1] = 'SET_USER_CONFIGURATION',
      e[e.SET_CHALLENGE_COMPLETED = 2] = 'SET_CHALLENGE_COMPLETED',
      e[e.SET_CHALLENGE_INVALIDATED = 3] = 'SET_CHALLENGE_INVALIDATED',
      e[e.HIDE_MODAL_CHALLENGE = 4] = 'HIDE_MODAL_CHALLENGE',
      e[e.SHOW_MODAL_CHALLENGE = 5] = 'SHOW_MODAL_CHALLENGE'
    }(ap || (ap = {}));
    var wp,
    Op,
    kp = function () {
      return (
        kp = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    Rp = function (e, t) {
      var n = kp({
      }, e);
      switch (t.type) {
        case ap.SET_METADATA:
          return n.metadata = t.metadata,
          n;
        case ap.SET_USER_CONFIGURATION:
          return n.userConfiguration = t.userConfiguration,
          n.enabledMediaTypes = t.enabledMediaTypes,
          n;
        case ap.SET_CHALLENGE_COMPLETED:
          return n.onChallengeCompletedData = t.onChallengeCompletedData,
          n.isModalVisible = !1,
          n;
        case ap.SET_CHALLENGE_INVALIDATED:
          return n.onChallengeInvalidatedData = {
            errorCode: t.errorCode,
            errorMessage: _p(e.resources, t.errorCode)
          },
          n.isModalVisible = !1,
          n;
        case ap.HIDE_MODAL_CHALLENGE:
          return n.isModalVisible = !1,
          n;
        case ap.SHOW_MODAL_CHALLENGE:
          return n.isModalVisible = !0,
          n;
        default:
          return e
      }
    },
    Pp = (0, ue.createContext) (null),
    Mp = function (e) {
      var t = e.userId,
      n = e.challengeId,
      r = e.actionType,
      a = e.renderInline,
      i = e.shouldShowRememberDeviceCheckbox,
      o = e.eventService,
      l = e.metricsService,
      c = e.requestService,
      u = e.translate,
      s = e.onChallengeCompleted,
      d = e.onChallengeInvalidated,
      p = e.onModalChallengeAbandoned,
      h = e.children,
      f = (0, ue.useState) (
        (
          function () {
            return function (e) {
              return {
                Action: {
                  ChangeMediaType: e('Action.ChangeMediaType'),
                  Okay: e('Action.Okay'),
                  Reload: e('Action.Reload'),
                  Resend: e('Action.Resend'),
                  Retry: e('Action.Retry'),
                  Verify: e('Action.Verify')
                },
                Description: {
                  LoginDenied: e('Description.LoginDenied'),
                  LoginExpired: e('Description.LoginExpired'),
                  SecurityWarningShort: e('Description.SecurityWarningShort', {
                    boldStart: '',
                    boldEnd: ''
                  }),
                  SecurityWarningShortBackupCodes: e(
                    'Description.SecurityWarningShortBackupCodes',
                    {
                      boldStart: '',
                      boldEnd: ''
                    }
                  )
                },
                Heading: {
                  LoginDenied: e('Heading.LoginDenied'),
                  LoginError: e('Heading.LoginError')
                },
                Label: {
                  ApproveWithDevice: e('Label.ApproveWithDevice'),
                  AuthenticatorMediaType: e('Label.AuthenticatorMediaType'),
                  CrossDeviceMediaType: e('Label.UseYourDevice'),
                  ChooseAlternateMediaType: e('Label.ChooseAlternateMediaType'),
                  CharacterCodeInputPlaceholderText: function (t) {
                    return e('Label.CharacterCodeInputPlaceholderText', {
                      codeLength: t
                    })
                  },
                  CodeInputPlaceholderText: function (t) {
                    return e('Label.CodeInputPlaceholderText', {
                      codeLength: t
                    })
                  },
                  EmailMediaType: e('Label.EmailMediaType'),
                  EnterAuthenticatorCode: e('Label.EnterAuthenticatorCode'),
                  EnterEmailCode: e('Label.EnterEmailCode'),
                  EnterRecoveryCode: e('Label.EnterRecoveryCode'),
                  EnterTextCode: e('Label.EnterTextCode'),
                  LearnMore: e('Label.LearnMore'),
                  HelpCenter: e('Label.HelpCenter'),
                  HelpCenterLink: function (t) {
                    return e('Label.HelpCenterLink', {
                      helpCenterLink: t
                    })
                  },
                  NeedHelpContactSupport: function (t) {
                    return e('Label.NeedHelpContactSupport', {
                      supportLink: t
                    })
                  },
                  NewLogin: e('Label.NewLogin'),
                  PasskeyDirections: e('Label.PasskeyDirections'),
                  PasskeyMediaType: e('Label.PasskeyMediaType'),
                  RecoveryCodeMediaType: e('Label.RecoveryCodeMediaType'),
                  RobloxSupport: e('Label.RobloxSupport'),
                  SecurityKeyDirections: e('Label.SecurityKeyDirections'),
                  SecurityKeyMediaType: e('Label.SecurityKeyMediaType'),
                  SmsMediaType: e('Label.SmsMediaType'),
                  TrustThisDevice: e('Label.TrustThisDevice'),
                  TwoStepVerification: e('Label.TwoStepVerification'),
                  VerifyWithPasskey: e('Label.VerifyWithPasskey'),
                  VerifyWithSecurityKey: e('Label.VerifyWithSecurityKey')
                },
                Response: {
                  AuthenticatorCodeAlreadyUsed: e('Response.AuthenticatorCodeAlreadyUsed'),
                  CodeSent: e('Response.CodeSent'),
                  DefaultError: e('Response.DefaultError'),
                  FeatureNotAvailable: e('Response.FeatureNotAvailable'),
                  InvalidCode: e('Response.InvalidCode'),
                  SessionExpired: e('Response.SessionExpired'),
                  SystemErrorSwitchingToEmail: e('Response.SystemErrorSwitchingToEmail'),
                  TooManyAttempts: e('Response.TooManyAttempts'),
                  VerificationError: e('Response.VerificationError')
                }
              }
            }(u)
          }
        )
      ) [0],
      v = (0, ue.useState) (
        (
          function () {
            return {
              userId: t,
              challengeId: n,
              actionType: r,
              renderInline: a,
              shouldShowRememberDeviceCheckbox: i,
              resources: f,
              eventService: o,
              metricsService: l,
              requestService: c,
              onModalChallengeAbandoned: p,
              metadata: null,
              userConfiguration: null,
              enabledMediaTypes: [],
              onChallengeCompletedData: null,
              onChallengeInvalidatedData: null,
              isModalVisible: !0
            }
          }
        )
      ) [0],
      m = Lp(),
      y = (0, ue.useReducer) (Rp, v),
      E = y[0],
      g = y[1];
      return (0, ue.useEffect) (
        (
          function () {
            if (
              null !== E.onChallengeCompletedData &&
              null === E.onChallengeInvalidatedData
            ) {
              var e = E.onChallengeCompletedData;
              setTimeout((function () {
                return s(e)
              }), Cp)
            }
          }
        ),
        [
          E.onChallengeCompletedData,
          E.onChallengeInvalidatedData,
          s
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            if (
              null !== E.onChallengeInvalidatedData &&
              null === E.onChallengeCompletedData
            ) {
              o.sendChallengeInvalidatedEvent(m),
              l.fireInvalidatedEvent();
              var e = E.onChallengeInvalidatedData;
              setTimeout((function () {
                return d(e)
              }), Cp)
            }
          }
        ),
        [
          E.onChallengeCompletedData,
          E.onChallengeInvalidatedData,
          d,
          o,
          l,
          m
        ]
      ),
      (0, ue.useEffect) ((function () {
        null !== m &&
        o.sendMediaTypeChangedEvent(m)
      }), [
        o,
        m
      ]),
      se().createElement(Pp.Provider, {
        value: {
          state: E,
          dispatch: g
        }
      }, h)
    },
    xp = function () {
      var e = (0, ue.useContext) (Pp);
      if (null === e) throw new Error(
        'TwoStepVerificationContext was not provided in the current scope'
      );
      return e
    },
    Vp = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Hp = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Wp = function (e) {
      var t = e.hasSentEmailCode,
      n = e.setHasSentEmailCode,
      r = e.hasSentSmsCode,
      a = e.setHasSentSmsCode,
      i = e.requestInFlight,
      o = e.setRequestInFlight,
      l = e.setModalTitleText,
      c = e.children,
      u = xp(),
      s = u.state,
      d = s.userId,
      p = s.challengeId,
      h = s.actionType,
      f = s.renderInline,
      v = s.resources,
      m = s.requestService,
      y = s.enabledMediaTypes,
      E = u.dispatch,
      g = (0, ws.useHistory) (),
      C = (0, ue.useState) (null),
      b = C[0],
      I = C[1],
      T = function (e) {
        switch (e) {
          case Oc.Authenticator:
            return 'icon-menu-mobile';
          case Oc.Email:
            return 'icon-menu-email';
          case Oc.RecoveryCode:
            return 'icon-menu-recover';
          case Oc.SMS:
            return 'icon-menu-mobile';
          case Oc.SecurityKey:
            return 'icon-menu-usb';
          case Oc.CrossDevice:
            return 'icon-menu-mobile';
          case Oc.Passkey:
            return 'icon-menu-fingerprint';
          default:
            return 'icon-brokenpage'
        }
      },
      S = function (e, l) {
        var c = function (e) {
          switch (e) {
            case Oc.Authenticator:
              return v.Label.AuthenticatorMediaType;
            case Oc.Email:
              return v.Label.EmailMediaType;
            case Oc.RecoveryCode:
              return v.Label.RecoveryCodeMediaType;
            case Oc.SMS:
              return v.Label.SmsMediaType;
            case Oc.SecurityKey:
              return v.Label.SecurityKeyMediaType;
            case Oc.CrossDevice:
              return v.Label.CrossDeviceMediaType;
            case Oc.Passkey:
              return v.Label.PasskeyMediaType;
            default:
              return null
          }
        }(e);
        return c ? se().createElement(
          'tr',
          {
            key: l,
            onClick: i ? void 0 : function () {
              return function (e) {
                return Vp(
                  void 0,
                  void 0,
                  void 0,
                  (
                    function () {
                      var l;
                      return Hp(
                        this,
                        (
                          function (c) {
                            switch (c.label) {
                              case 0:
                                return i ? [
                                  2
                                ] : e !== Oc.CrossDevice &&
                                y.includes(Oc.CrossDevice) ? [
                                  4,
                                  m.twoStepVerification.retractCrossDevice(d, {
                                    challengeId: p,
                                    actionType: h
                                  })
                                ] : [
                                  3,
                                  2
                                ];
                              case 1:
                                c.sent(),
                                c.label = 2;
                              case 2:
                                return e !== Oc.Email ||
                                t ? [
                                  3,
                                  4
                                ] : (
                                  o(!0),
                                  [
                                    4,
                                    m.twoStepVerification.sendEmailCode(d, {
                                      challengeId: p,
                                      actionType: h
                                    })
                                  ]
                                );
                              case 3:
                                if (l = c.sent(), o(!1), l.isError) return l.error === lr.INVALID_USER_ID ||
                                l.error === lr.INVALID_CHALLENGE_ID ? E({
                                  type: ap.SET_CHALLENGE_INVALIDATED,
                                  errorCode: Np(l.error)
                                }) : I(Ap(v, l.error)),
                                [
                                  2
                                ];
                                n(!0),
                                c.label = 4;
                              case 4:
                                return e !== Oc.SMS ||
                                r ? [
                                  3,
                                  6
                                ] : (
                                  o(!0),
                                  [
                                    4,
                                    m.twoStepVerification.sendSmsCode(d, {
                                      challengeId: p,
                                      actionType: h
                                    })
                                  ]
                                );
                              case 5:
                                if (l = c.sent(), o(!1), l.isError) return l.error === lr.INVALID_USER_ID ||
                                l.error === lr.INVALID_CHALLENGE_ID ? E({
                                  type: ap.SET_CHALLENGE_INVALIDATED,
                                  errorCode: Np(l.error)
                                }) : I(Ap(v, l.error)),
                                [
                                  2
                                ];
                                a(!0),
                                c.label = 6;
                              case 6:
                                return e !== Oc.CrossDevice ? [
                                  3,
                                  8
                                ] : (
                                  o(!0),
                                  [
                                    4,
                                    m.twoStepVerification.retryCrossDevice(d, {
                                      challengeId: p,
                                      actionType: h
                                    })
                                  ]
                                );
                              case 7:
                                if (l = c.sent(), o(!1), l.isError) {
                                  if (
                                    l.error === lr.INVALID_USER_ID ||
                                    l.error === lr.INVALID_CHALLENGE_ID
                                  ) return E({
                                    type: ap.SET_CHALLENGE_INVALIDATED,
                                    errorCode: Np(l.error)
                                  }),
                                  [
                                    2
                                  ];
                                  I(Ap(v, l.error))
                                }
                                c.label = 8;
                              case 8:
                                return g.push(Dp(e)),
                                [
                                  2
                                ]
                            }
                          }
                        )
                      )
                    }
                  )
                )
              }(e)
            },
            className: i ? 'media-type-row disabled' : 'media-type-row'
          },
          se().createElement('td', null, se().createElement('span', {
            className: T(e)
          })),
          se().createElement('td', {
            className: 'media-type-label'
          }, c),
          se().createElement(
            'td',
            {
              className: 'media-type-selector'
            },
            se().createElement('span', {
              className: 'icon-next'
            }),
            se().createElement('div', {
              className: 'icon-placeholder'
            })
          )
        ) : null
      };
      l(v.Label.TwoStepVerification);
      var _ = f ? Si : Ii.Modal.Body,
      A = f ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      N = f ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge',
      L = f ? '' : 'modal-margin-bottom-large',
      D = f ? 'inline-challenge-margin-top-large' : 'modal-margin-bottom-large';
      return se().createElement(
        _,
        null,
        se().createElement('div', {
          className: A
        }),
        se().createElement('p', {
          className: N
        }, v.Label.ChooseAlternateMediaType),
        se().createElement(
          'table',
          {
            className: 'table table-striped media-type-list ' + L
          },
          se().createElement('tbody', null, y.map((function (e, t) {
            return S(e, t)
          })))
        ),
        b ? se().createElement('p', {
          className: 'text-error xsmall ' + D
        }, b) : null,
        c
      )
    },
    Up = function (e) {
      var t = e.requestInFlight,
      n = e.className,
      r = xp().state,
      a = r.renderInline,
      i = r.resources,
      o = (0, ws.useHistory) (),
      l = a ? 'inline-challenge-body-button-link' : 'modal-body-button-link';
      return se().createElement(
        'p',
        {
          className: n
        },
        se().createElement(
          'button',
          {
            type: 'button',
            className: l + ' small',
            onClick: function () {
              o.push(Dp(null))
            },
            disabled: t
          },
          i.Action.ChangeMediaType
        )
      )
    },
    Gp = function (e) {
      var t = e.disabled,
      n = e.rememberDevice,
      r = e.setRememberDevice,
      a = e.className,
      i = xp().state.resources;
      return se().createElement(
        'p',
        {
          className: a
        },
        se().createElement(
          'input',
          {
            id: 'remember-device',
            type: 'checkbox',
            onChange: function (e) {
              r(e.target.checked)
            },
            checked: n,
            disabled: t,
            tabIndex: 0
          }
        ),
        ' ',
        se().createElement('label', {
          htmlFor: 'remember-device'
        }, i.Label.TrustThisDevice)
      )
    },
    zp = function (e) {
      var t = e.className,
      n = xp().state.resources,
      r = n.Label.NeedHelpContactSupport(
        '<a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">' + n.Label.RobloxSupport + '</a>'
      );
      return se().createElement(
        'p',
        {
          className: 'text-footer' + (t ? ' ' + t : ''),
          dangerouslySetInnerHTML: {
            __html: r
          }
        }
      )
    },
    Fp = /^[0-9]*$/,
    Bp = /^[A-Za-z0-9]*$/,
    qp = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Zp = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    jp = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.metadata,
      p = i.resources,
      h = i.eventService,
      f = i.metricsService,
      v = i.requestService,
      m = a.dispatch,
      y = Lp(),
      E = (0, ue.useState) (''),
      g = E[0],
      C = E[1],
      b = (0, ue.useState) (null),
      I = b[0],
      T = b[1],
      S = (0, ue.useState) (null),
      _ = S[0],
      A = S[1],
      N = (0, ue.useState) (!1),
      L = N[0],
      D = N[1],
      w = function () {
        return qp(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return Zp(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return n(!0),
                        A(null),
                        h.sendCodeSubmittedEvent(y),
                        [
                          4,
                          v.twoStepVerification.verifyAuthenticatorCode(o, {
                            challengeId: l,
                            actionType: c,
                            code: g
                          })
                        ];
                      case 1:
                        return (e = t.sent()).isError ? (
                          h.sendCodeVerificationFailedEvent(y, lr[e.error ||
                          lr.UNKNOWN]),
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? (
                            m({
                              type: ap.SET_CHALLENGE_INVALIDATED,
                              errorCode: Np(e.error)
                            }),
                            [
                              2
                            ]
                          ) : (n(!1), A(Ap(p, e.error)), [
                            2
                          ])
                        ) : (
                          h.sendCodeVerifiedEvent(y),
                          f.fireVerifiedEvent(y),
                          m({
                            type: ap.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              verificationToken: e.value.verificationToken,
                              rememberDevice: L
                            }
                          }),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      O = null === I &&
      g.length === (null == d ? void 0 : d.authenticatorCodeLength),
      k = {
        content: t ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : p.Action.Verify,
        label: p.Action.Verify,
        enabled: !t &&
        O,
        action: w
      },
      R = u ? Si : Ii.Modal.Body,
      P = u ? Io : To,
      M = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      x = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      V = u ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return d &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          R,
          null,
          se().createElement('div', {
            className: M
          }),
          se().createElement('p', {
            className: V
          }, p.Label.EnterAuthenticatorCode),
          se().createElement(
            Qs,
            {
              id: 'two-step-verification-code-input',
              inputType: 'text',
              disabled: t,
              value: g,
              setValue: C,
              error: _ ||
              I,
              setError: T,
              validate: Js,
              canSubmit: O,
              handleSubmit: w,
              onChange: function () {
                return A(null)
              },
              inputMode: 'numeric',
              autoComplete: 'off',
              placeholder: p.Label.CodeInputPlaceholderText(d.authenticatorCodeLength),
              maxLength: d.authenticatorCodeLength,
              validCharactersRegEx: Fp,
              hideFeedback: !0,
              concealInput: !0,
              autoFocus: !0
            }
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: L,
              setRememberDevice: D,
              className: V
            }
          ),
          r
        ),
        se().createElement(
          P,
          {
            positiveButton: k,
            negativeButton: null
          },
          se().createElement(zp, {
            className: x
          }),
          se().createElement(
            'p',
            {
              className: 'text-footer'
            },
            p.Description.SecurityWarningShort
          )
        )
      )
    },
    Yp = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Kp = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Jp = function (e) {
      var t = e.disabled,
      n = e.setCodeError,
      r = e.mediaType,
      a = e.className,
      i = xp(),
      o = i.state,
      l = o.userId,
      c = o.challengeId,
      u = o.actionType,
      s = o.renderInline,
      d = o.resources,
      p = o.eventService,
      h = o.requestService,
      f = i.dispatch,
      v = (0, ue.useState) (!1),
      m = v[0],
      y = v[1];
      if (m) return se().createElement(
        'p',
        {
          className: a
        },
        se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        })
      );
      var E = s ? 'inline-challenge-body-button-link' : 'modal-body-button-link';
      return se().createElement(
        'p',
        {
          className: a
        },
        se().createElement(
          'button',
          {
            type: 'button',
            className: E + ' small',
            onClick: function () {
              return Yp(
                void 0,
                void 0,
                void 0,
                (
                  function () {
                    var e,
                    t,
                    a;
                    return Kp(
                      this,
                      (
                        function (i) {
                          switch (i.label) {
                            case 0:
                              return e = null,
                              y(!0),
                              r !== Oc.Email ? [
                                3,
                                2
                              ] : (
                                p.sendEmailResendRequestedEvent(),
                                [
                                  4,
                                  h.twoStepVerification.sendEmailCode(l, {
                                    challengeId: c,
                                    actionType: u
                                  })
                                ]
                              );
                            case 1:
                              return (t = i.sent()).isError &&
                              (e = t.error),
                              [
                                3,
                                4
                              ];
                            case 2:
                              return r !== Oc.SMS ? [
                                3,
                                4
                              ] : (
                                p.sendSmsResendRequestedEvent(),
                                [
                                  4,
                                  h.twoStepVerification.sendSmsCode(l, {
                                    challengeId: c,
                                    actionType: u
                                  })
                                ]
                              );
                            case 3:
                              (a = i.sent()).isError &&
                              (e = a.error),
                              i.label = 4;
                            case 4:
                              return y(!1),
                              null != e &&
                              (
                                e === lr.INVALID_USER_ID ||
                                e === lr.INVALID_CHALLENGE_ID ? f({
                                  type: ap.SET_CHALLENGE_INVALIDATED,
                                  errorCode: Np(e)
                                }) : n(Ap(d, e))
                              ),
                              [
                                2
                              ]
                          }
                        }
                      )
                    )
                  }
                )
              )
            },
            disabled: t ||
            m
          },
          d.Action.Resend
        )
      )
    },
    Xp = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Qp = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    $p = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.resources,
      p = i.metadata,
      h = i.eventService,
      f = i.metricsService,
      v = i.requestService,
      m = a.dispatch,
      y = Lp(),
      E = (0, ue.useState) (''),
      g = E[0],
      C = E[1],
      b = (0, ue.useState) (null),
      I = b[0],
      T = b[1],
      S = (0, ue.useState) (null),
      _ = S[0],
      A = S[1],
      N = (0, ue.useState) (!1),
      L = N[0],
      D = N[1],
      w = function () {
        return Xp(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return Qp(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return n(!0),
                        A(null),
                        h.sendCodeSubmittedEvent(y),
                        [
                          4,
                          v.twoStepVerification.verifyEmailCode(o, {
                            challengeId: l,
                            actionType: c,
                            code: g
                          })
                        ];
                      case 1:
                        return (e = t.sent()).isError ? (
                          h.sendCodeVerificationFailedEvent(y, lr[e.error ||
                          lr.UNKNOWN]),
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? (
                            m({
                              type: ap.SET_CHALLENGE_INVALIDATED,
                              errorCode: Np(e.error)
                            }),
                            [
                              2
                            ]
                          ) : (n(!1), A(Ap(d, e.error)), [
                            2
                          ])
                        ) : (
                          h.sendCodeVerifiedEvent(y),
                          f.fireVerifiedEvent(y),
                          m({
                            type: ap.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              verificationToken: e.value.verificationToken,
                              rememberDevice: L
                            }
                          }),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      O = null === I &&
      g.length === (null == p ? void 0 : p.emailCodeLength),
      k = {
        content: t ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : d.Action.Verify,
        label: d.Action.Verify,
        enabled: !t &&
        O,
        action: w
      },
      R = u ? Si : Ii.Modal.Body,
      P = u ? Io : To,
      M = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      x = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      V = u ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return p &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          R,
          null,
          se().createElement('div', {
            className: M
          }),
          se().createElement('p', {
            className: V
          }, d.Label.EnterEmailCode),
          se().createElement(
            Qs,
            {
              id: 'two-step-verification-code-input',
              inputType: 'text',
              disabled: t,
              value: g,
              setValue: C,
              error: _ ||
              I,
              setError: T,
              validate: Js,
              canSubmit: O,
              handleSubmit: w,
              onChange: function () {
                return A(null)
              },
              inputMode: 'numeric',
              autoComplete: 'off',
              placeholder: d.Label.CodeInputPlaceholderText(p.emailCodeLength),
              maxLength: p.emailCodeLength,
              validCharactersRegEx: Fp,
              hideFeedback: !0,
              concealInput: !0,
              autoFocus: !0
            }
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: L,
              setRememberDevice: D,
              className: V
            }
          ),
          se().createElement(Jp, {
            disabled: t,
            setCodeError: T,
            mediaType: y
          }),
          r
        ),
        se().createElement(
          P,
          {
            positiveButton: k,
            negativeButton: null
          },
          se().createElement(zp, {
            className: x
          }),
          se().createElement(
            'p',
            {
              className: 'text-footer'
            },
            d.Description.SecurityWarningShort
          )
        )
      )
    },
    eh = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    th = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    nh = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.resources,
      p = i.eventService,
      h = i.metricsService,
      f = i.requestService,
      v = a.dispatch,
      m = Lp(),
      y = (0, ue.useState) (''),
      E = y[0],
      g = y[1],
      C = (0, ue.useState) (null),
      b = C[0],
      I = C[1],
      T = (0, ue.useState) (null),
      S = T[0],
      _ = T[1],
      A = (0, ue.useState) (!1),
      N = A[0],
      L = A[1],
      D = function () {
        return eh(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return th(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return n(!0),
                        _(null),
                        p.sendCodeSubmittedEvent(m),
                        [
                          4,
                          f.twoStepVerification.verifyRecoveryCode(o, {
                            challengeId: l,
                            actionType: c,
                            code: E
                          })
                        ];
                      case 1:
                        return (e = t.sent()).isError ? (
                          p.sendCodeVerificationFailedEvent(m, lr[e.error ||
                          lr.UNKNOWN]),
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? (
                            v({
                              type: ap.SET_CHALLENGE_INVALIDATED,
                              errorCode: Np(e.error)
                            }),
                            [
                              2
                            ]
                          ) : (n(!1), _(Ap(d, e.error)), [
                            2
                          ])
                        ) : (
                          p.sendCodeVerifiedEvent(m),
                          h.fireVerifiedEvent(m),
                          v({
                            type: ap.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              verificationToken: e.value.verificationToken,
                              rememberDevice: N
                            }
                          }),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      w = null === b &&
      9 === E.length,
      O = {
        content: t ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : d.Action.Verify,
        label: d.Action.Verify,
        enabled: !t &&
        w,
        action: D
      },
      k = u ? Si : Ii.Modal.Body,
      R = u ? Io : To,
      P = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      M = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      x = u ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return se().createElement(
        se().Fragment,
        null,
        se().createElement(
          k,
          null,
          se().createElement('div', {
            className: P
          }),
          se().createElement('p', {
            className: x
          }, d.Label.EnterRecoveryCode),
          se().createElement(
            Qs,
            {
              id: 'two-step-verification-code-input',
              inputType: 'text',
              disabled: t,
              value: E,
              setValue: g,
              error: S ||
              b,
              setError: I,
              validate: Js,
              canSubmit: w,
              handleSubmit: D,
              onChange: function () {
                return _(null)
              },
              autoComplete: 'off',
              placeholder: d.Label.CodeInputPlaceholderText(9),
              maxLength: 9,
              validCharactersRegEx: Bp,
              hideFeedback: !0,
              concealInput: !0,
              autoFocus: !0
            }
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: N,
              setRememberDevice: L,
              className: x
            }
          ),
          r
        ),
        se().createElement(
          R,
          {
            positiveButton: O,
            negativeButton: null
          },
          se().createElement(zp, {
            className: M
          }),
          se().createElement(
            'p',
            {
              className: 'text-footer'
            },
            d.Description.SecurityWarningShortBackupCodes
          )
        )
      )
    },
    rh = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    ah = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    ih = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.resources,
      p = i.metadata,
      h = i.eventService,
      f = i.metricsService,
      v = i.requestService,
      m = a.dispatch,
      y = Lp(),
      E = (0, ue.useState) (null),
      g = E[0],
      C = E[1],
      b = (0, ue.useState) (!1),
      I = b[0],
      T = b[1],
      S = function (e, t) {
        t &&
        h.sendCodeVerificationFailedEvent(y, lr[e ||
        lr.UNKNOWN]),
        e !== lr.INVALID_USER_ID &&
        e !== lr.INVALID_CHALLENGE_ID ? (n(!1), C(Ap(d, e))) : m({
          type: ap.SET_CHALLENGE_INVALIDATED,
          errorCode: Np(e)
        })
      },
      _ = u ? Si : Ii.Modal.Body,
      A = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      N = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      L = u ? 'inline-challenge-action-button' : 'modal-action-button';
      L = (L = L.concat(' ', 'btn-cta-md')).concat(' ', N);
      var D = (u ? 'inline-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge').concat(' ', 'text-error xsmall'),
      w = u ? 'inline-challenge-margin-bottom-sm' : 'modal-margin-bottom-sm';
      return p &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          _,
          null,
          se().createElement('div', {
            className: A
          }),
          se().createElement('p', {
            className: w
          }, d.Label.VerifyWithSecurityKey),
          se().createElement('p', {
            className: N
          }, d.Label.SecurityKeyDirections),
          se().createElement(
            'button',
            {
              type: 'button',
              className: L,
              'aria-label': d.Action.Verify,
              disabled: t,
              onClick: function () {
                return rh(
                  void 0,
                  void 0,
                  void 0,
                  (
                    function () {
                      var e,
                      t,
                      r,
                      a,
                      i,
                      u,
                      s;
                      return ah(
                        this,
                        (
                          function (d) {
                            switch (d.label) {
                              case 0:
                                return n(!0),
                                C(null),
                                [
                                  4,
                                  v.twoStepVerification.getSecurityKeyOptions(o, {
                                    challengeId: l,
                                    actionType: c
                                  })
                                ];
                              case 1:
                                return (e = d.sent()).isError ? (S(e.error, !0), [
                                  2
                                ]) : (
                                  t = !(
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp &&
                                    (0, H.DeviceMeta) ().isAndroidApp
                                  ),
                                  (
                                    r = t ? sr.fido2Util.convertPublicKeyParametersToStandardBase64(e.value.authenticationOptions) : JSON.parse(e.value.authenticationOptions)
                                  ).publicKey ? (
                                    a = '',
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp ? [
                                      4,
                                      sr.hybridResponseService.getNativeResponse(
                                        sr.hybridResponseService.FeatureTarget.GET_CREDENTIALS,
                                        {
                                          authenticationOptionsJSON: JSON.stringify(r)
                                        },
                                        300000
                                      ).catch((function () {
                                        S(lr.UNKNOWN, !1)
                                      }))
                                    ] : [
                                      3,
                                      3
                                    ]
                                  ) : (S(lr.UNKNOWN, !1), [
                                    2
                                  ])
                                );
                              case 2:
                                if (null == (i = d.sent())) return S(lr.UNKNOWN, !1),
                                [
                                  2
                                ];
                                if (void 0 !== (u = JSON.parse(i)).errorCode) return S(lr.UNKNOWN, !1),
                                [
                                  2
                                ];
                                try {
                                  a = t ? sr.fido2Util.formatCredentialAuthenticationResponseApp(i) : i
                                } catch (e) {
                                  return S(lr.UNKNOWN, !1),
                                  [
                                    2
                                  ]
                                }
                                return [3,
                                5];
                              case 3:
                                return [4,
                                navigator.credentials.get({
                                  publicKey: sr.fido2Util.formatCredentialRequestWeb(JSON.stringify(r))
                                }).catch((function () {
                                  S(lr.UNKNOWN, !1)
                                }))];
                              case 4:
                                u = d.sent();
                                try {
                                  a = sr.fido2Util.formatCredentialAuthenticationResponseWeb(u)
                                } catch (e) {
                                  return S(lr.UNKNOWN, !1),
                                  [
                                    2
                                  ]
                                }
                                d.label = 5;
                              case 5:
                                return [4,
                                v.twoStepVerification.verifySecurityKeyCredential(o, {
                                  challengeId: l,
                                  actionType: c,
                                  code: a
                                })];
                              case 6:
                                return (s = d.sent()).isError ? (S(s.error, !0), [
                                  2
                                ]) : (
                                  h.sendCodeVerifiedEvent(y),
                                  f.fireVerifiedEvent(y),
                                  m({
                                    type: ap.SET_CHALLENGE_COMPLETED,
                                    onChallengeCompletedData: {
                                      verificationToken: s.value.verificationToken,
                                      rememberDevice: I
                                    }
                                  }),
                                  [
                                    2
                                  ]
                                )
                            }
                          }
                        )
                      )
                    }
                  )
                )
              }
            },
            t ? se().createElement('span', {
              className: 'spinner spinner-xs spinner-no-margin'
            }) : d.Action.Verify
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: I,
              setRememberDevice: T,
              className: N
            }
          ),
          r,
          se().createElement(zp, {
            className: N
          }),
          se().createElement('p', {
            className: D
          }, g)
        )
      )
    },
    oh = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    lh = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    ch = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.resources,
      p = i.metadata,
      h = i.eventService,
      f = i.metricsService,
      v = i.requestService,
      m = a.dispatch,
      y = Lp(),
      E = (0, ue.useState) (''),
      g = E[0],
      C = E[1],
      b = (0, ue.useState) (null),
      I = b[0],
      T = b[1],
      S = (0, ue.useState) (null),
      _ = S[0],
      A = S[1],
      N = (0, ue.useState) (!1),
      L = N[0],
      D = N[1],
      w = function () {
        return oh(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return lh(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return n(!0),
                        A(null),
                        h.sendCodeSubmittedEvent(y),
                        [
                          4,
                          v.twoStepVerification.verifySmsCode(o, {
                            challengeId: l,
                            actionType: c,
                            code: g
                          })
                        ];
                      case 1:
                        return (e = t.sent()).isError ? (
                          h.sendCodeVerificationFailedEvent(y, lr[e.error ||
                          lr.UNKNOWN]),
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? (
                            m({
                              type: ap.SET_CHALLENGE_INVALIDATED,
                              errorCode: Np(e.error)
                            }),
                            [
                              2
                            ]
                          ) : (n(!1), A(Ap(d, e.error)), [
                            2
                          ])
                        ) : (
                          h.sendCodeVerifiedEvent(y),
                          f.fireVerifiedEvent(y),
                          m({
                            type: ap.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              verificationToken: e.value.verificationToken,
                              rememberDevice: L
                            }
                          }),
                          [
                            2
                          ]
                        )
                    }
                  }
                )
              )
            }
          )
        )
      },
      O = null === I &&
      g.length === (null == p ? void 0 : p.emailCodeLength),
      k = {
        content: t ? se().createElement('span', {
          className: 'spinner spinner-xs spinner-no-margin'
        }) : d.Action.Verify,
        label: d.Action.Verify,
        enabled: !t &&
        O,
        action: w
      },
      R = u ? Si : Ii.Modal.Body,
      P = u ? Io : To,
      M = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      x = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      V = u ? 'inline-challenge-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge';
      return p &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          R,
          null,
          se().createElement('div', {
            className: M
          }),
          se().createElement('p', {
            className: V
          }, d.Label.EnterTextCode),
          se().createElement(
            Qs,
            {
              id: 'two-step-verification-code-input',
              inputType: 'text',
              disabled: t,
              value: g,
              setValue: C,
              error: _ ||
              I,
              setError: T,
              validate: Js,
              canSubmit: O,
              handleSubmit: w,
              onChange: function () {
                return A(null)
              },
              inputMode: 'numeric',
              autoComplete: 'off',
              placeholder: d.Label.CodeInputPlaceholderText(p.emailCodeLength),
              maxLength: p.emailCodeLength,
              validCharactersRegEx: Fp,
              hideFeedback: !0,
              concealInput: !0,
              autoFocus: !0
            }
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: L,
              setRememberDevice: D,
              className: V
            }
          ),
          se().createElement(Jp, {
            disabled: t,
            setCodeError: T,
            mediaType: y
          }),
          r
        ),
        se().createElement(
          P,
          {
            positiveButton: k,
            negativeButton: null
          },
          se().createElement(zp, {
            className: x
          }),
          se().createElement(
            'p',
            {
              className: 'text-footer'
            },
            d.Description.SecurityWarningShort
          )
        )
      )
    },
    uh = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    sh = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    dh = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.setModalTitleText,
      a = e.setShowChangeMediaType,
      i = e.children,
      o = xp(),
      l = o.state,
      c = l.userId,
      u = l.challengeId,
      s = l.actionType,
      d = l.renderInline,
      p = l.resources,
      h = l.metadata,
      f = l.eventService,
      v = l.metricsService,
      m = l.requestService,
      y = l.onModalChallengeAbandoned,
      E = o.dispatch,
      g = Lp(),
      C = (0, ue.useState) (null),
      b = C[0],
      I = C[1],
      T = (0, ue.useState) (p.Label.ApproveWithDevice),
      S = T[0],
      _ = T[1],
      A = (0, ue.useState) (!0),
      N = A[0],
      L = A[1],
      D = (0, ue.useState) (!1),
      w = D[0],
      O = D[1],
      k = (0, ue.useState) (0),
      R = k[0],
      P = k[1],
      M = (0, ue.useState) (!1),
      x = M[0],
      V = M[1],
      H = function () {
        return uh(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e;
              return sh(
                this,
                (
                  function (t) {
                    switch (t.label) {
                      case 0:
                        return R >= 4 ? [
                          4,
                          m.twoStepVerification.retractCrossDevice(c, {
                            challengeId: u,
                            actionType: s
                          })
                        ] : [
                          3,
                          2
                        ];
                      case 1:
                        return t.sent(),
                        r(p.Heading.LoginError),
                        _(p.Description.LoginExpired),
                        a(!1),
                        L(!1),
                        O(!0),
                        [
                          2
                        ];
                      case 2:
                        return P(R + 1),
                        n(!0),
                        I(null),
                        r(p.Label.NewLogin),
                        _(p.Label.ApproveWithDevice),
                        [
                          4,
                          m.twoStepVerification.retryCrossDevice(c, {
                            challengeId: u,
                            actionType: s
                          })
                        ];
                      case 3:
                        return (e = t.sent()).isError ? (
                          f.sendCodeVerificationFailedEvent(g, lr[e.error ||
                          lr.UNKNOWN]),
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? (
                            E({
                              type: ap.SET_CHALLENGE_INVALIDATED,
                              errorCode: Np(e.error)
                            }),
                            [
                              2
                            ]
                          ) : (n(!1), I(Ap(p, e.error)), [
                            2
                          ])
                        ) : (R > 0 && V(!0), n(!1), [
                          2
                        ])
                    }
                  }
                )
              )
            }
          )
        )
      },
      W = d ? Si : Ii.Modal.Body,
      U = d ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      G = d ? 'inline-challenge-action-button' : 'modal-action-button';
      G = (G = G.concat(' ', 'btn-secondary-md')).concat(' ', U);
      var z = d ? 'inline-challenge-action-button' : 'modal-action-button';
      z = (z = z.concat(' ', 'btn-cta-md')).concat(' ', U);
      var F = (d ? 'inline-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge').concat(' ', 'text-error xsmall'),
      B = d ? 'inline-challenge-lock-icon' : 'modal-lock-icon';
      return (0, ue.useEffect) (
        (
          function () {
            if (x) {
              var e = setTimeout((function () {
                V(!1)
              }), 3000);
              return function () {
                return clearTimeout(e)
              }
            }
          }
        ),
        [
          x
        ]
      ),
      (0, ue.useEffect) (
        (
          function () {
            H().then((function () {
              return I(null)
            })).catch((function () {
              return I(Ap(p, lr.UNKNOWN))
            }));
            var e = setInterval(
              (
                function () {
                  m.twoStepVerification.verifyCrossDevice(c, {
                    challengeId: u,
                    actionType: s
                  }).then(
                    (
                      function (t) {
                        if (t.isError) {
                          if (
                            f.sendCodeVerificationFailedEvent(g, lr[t.error ||
                            lr.UNKNOWN]),
                            t.error === lr.CHALLENGE_DENIED
                          ) return r(p.Heading.LoginDenied),
                          _(p.Description.LoginDenied),
                          a(!1),
                          L(!1),
                          void clearInterval(e);
                          if (t.error === lr.CROSS_DEVICE_DIALOG_EXPIRED) return r(p.Heading.LoginError),
                          _(p.Description.LoginExpired),
                          a(!1),
                          L(!1),
                          O(!0),
                          void clearInterval(e);
                          if (
                            t.error === lr.INVALID_USER_ID ||
                            t.error === lr.INVALID_CHALLENGE_ID
                          ) return void E({
                            type: ap.SET_CHALLENGE_INVALIDATED,
                            errorCode: Np(t.error)
                          });
                          I(Ap(p, t.error))
                        } else t.value.verificationToken &&
                        (
                          f.sendCodeVerifiedEvent(g),
                          v.fireVerifiedEvent(g),
                          E({
                            type: ap.SET_CHALLENGE_COMPLETED,
                            onChallengeCompletedData: {
                              verificationToken: t.value.verificationToken,
                              rememberDevice: !1
                            }
                          })
                        )
                      }
                    )
                  ).catch((function () {
                    return I(Ap(p, lr.UNKNOWN))
                  }))
                }
              ),
              1000
            );
            return function () {
              clearInterval(e)
            }
          }
        ),
        []
      ),
      h &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          W,
          null,
          se().createElement('div', {
            className: B
          }),
          se().createElement('p', {
            className: U
          }, S),
          N ? se().createElement(
            'button',
            {
              type: 'button',
              className: G,
              'aria-label': p.Action.Retry,
              disabled: t,
              onClick: H
            },
            t ||
            x ? se().createElement('span', {
              className: 'spinner spinner-xs spinner-no-margin'
            }) : p.Action.Retry
          ) : se().createElement(
            'button',
            {
              type: 'button',
              className: z,
              'aria-label': p.Action.Okay,
              disabled: t,
              onClick: function () {
                E({
                  type: ap.HIDE_MODAL_CHALLENGE
                }),
                f.sendChallengeAbandonedEvent(g),
                v.fireAbandonedEvent(),
                null !== y &&
                setTimeout(
                  (
                    function () {
                      return y((function () {
                        return E({
                          type: ap.SHOW_MODAL_CHALLENGE
                        })
                      }))
                    }
                  ),
                  Cp
                )
              }
            },
            t ? se().createElement('span', {
              className: 'spinner spinner-xs spinner-no-margin'
            }) : p.Action.Okay
          ),
          N ? i : null,
          N ||
          w ? se().createElement(
            'p',
            {
              className: 'text-footer ' + U,
              dangerouslySetInnerHTML: {
                __html: p.Label.HelpCenterLink(
                  '<a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">' + p.Label.HelpCenter + '</a>'
                )
              }
            }
          ) : null,
          se().createElement('p', {
            className: F
          }, b)
        )
      )
    },
    ph = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    hh = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    fh = function (e) {
      var t = e.requestInFlight,
      n = e.setRequestInFlight,
      r = e.children,
      a = xp(),
      i = a.state,
      o = i.userId,
      l = i.challengeId,
      c = i.actionType,
      u = i.renderInline,
      s = i.shouldShowRememberDeviceCheckbox,
      d = i.resources,
      p = i.metadata,
      h = i.eventService,
      f = i.metricsService,
      v = i.requestService,
      m = a.dispatch,
      y = Lp(),
      E = (0, ue.useState) (null),
      g = E[0],
      C = E[1],
      b = (0, ue.useState) (!1),
      I = b[0],
      T = b[1],
      S = function (e, t) {
        t &&
        h.sendCodeVerificationFailedEvent(y, lr[e ||
        lr.UNKNOWN]),
        e !== lr.INVALID_USER_ID &&
        e !== lr.INVALID_CHALLENGE_ID ? (n(!1), C(Ap(d, e))) : m({
          type: ap.SET_CHALLENGE_INVALIDATED,
          errorCode: Np(e)
        })
      },
      _ = u ? Si : Ii.Modal.Body,
      A = u ? 'inline-challenge-lock-icon' : 'modal-lock-icon',
      N = u ? 'inline-challenge-margin-bottom' : 'modal-margin-bottom',
      L = u ? 'inline-challenge-action-button' : 'modal-action-button';
      L = (L = L.concat(' ', 'btn-cta-md')).concat(' ', N);
      var D = (u ? 'inline-margin-bottom-xlarge' : 'modal-margin-bottom-xlarge').concat(' ', 'text-error xsmall'),
      w = u ? 'inline-challenge-margin-bottom-sm' : 'modal-margin-bottom-sm';
      return p &&
      se().createElement(
        se().Fragment,
        null,
        se().createElement(
          _,
          null,
          se().createElement('div', {
            className: A
          }),
          se().createElement('p', {
            className: w
          }, d.Label.VerifyWithPasskey),
          se().createElement('p', {
            className: N
          }, d.Label.PasskeyDirections),
          se().createElement(
            'button',
            {
              type: 'button',
              className: L,
              'aria-label': d.Action.Verify,
              disabled: t,
              onClick: function () {
                return ph(
                  void 0,
                  void 0,
                  void 0,
                  (
                    function () {
                      var e,
                      t,
                      r,
                      a,
                      i,
                      u,
                      s;
                      return hh(
                        this,
                        (
                          function (d) {
                            switch (d.label) {
                              case 0:
                                return n(!0),
                                C(null),
                                [
                                  4,
                                  v.twoStepVerification.getPasskeyOptions(o, {
                                    challengeId: l,
                                    actionType: c
                                  })
                                ];
                              case 1:
                                return (e = d.sent()).isError ? (S(e.error, !0), [
                                  2
                                ]) : (
                                  t = !(
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp &&
                                    (0, H.DeviceMeta) ().isAndroidApp
                                  ),
                                  (
                                    r = t ? sr.fido2Util.convertPublicKeyParametersToStandardBase64(e.value.authenticationOptions) : JSON.parse(e.value.authenticationOptions)
                                  ).publicKey ? (
                                    a = '',
                                    H.DeviceMeta &&
                                    (0, H.DeviceMeta) ().isInApp ? (
                                      r.keyType = 'platform',
                                      [
                                        4,
                                        sr.hybridResponseService.getNativeResponse(
                                          sr.hybridResponseService.FeatureTarget.GET_CREDENTIALS,
                                          {
                                            authenticationOptionsJSON: JSON.stringify(r)
                                          },
                                          300000
                                        ).catch((function () {
                                          S(lr.UNKNOWN, !1)
                                        }))
                                      ]
                                    ) : [
                                      3,
                                      3
                                    ]
                                  ) : (S(lr.UNKNOWN, !1), [
                                    2
                                  ])
                                );
                              case 2:
                                if (null == (i = d.sent())) return S(lr.UNKNOWN, !1),
                                [
                                  2
                                ];
                                if (void 0 !== (u = JSON.parse(i)).errorCode) return S(lr.UNKNOWN, !1),
                                [
                                  2
                                ];
                                try {
                                  a = t ? sr.fido2Util.formatCredentialAuthenticationResponseApp(i) : i
                                } catch (e) {
                                  return S(lr.UNKNOWN, !1),
                                  [
                                    2
                                  ]
                                }
                                return [3,
                                5];
                              case 3:
                                return [4,
                                navigator.credentials.get({
                                  publicKey: sr.fido2Util.formatCredentialRequestWeb(JSON.stringify(r))
                                }).catch((function () {
                                  S(lr.UNKNOWN, !1)
                                }))];
                              case 4:
                                u = d.sent();
                                try {
                                  a = sr.fido2Util.formatCredentialAuthenticationResponseWeb(u)
                                } catch (e) {
                                  return S(lr.UNKNOWN, !1),
                                  [
                                    2
                                  ]
                                }
                                d.label = 5;
                              case 5:
                                return [4,
                                v.twoStepVerification.verifyPasskeyCredential(o, {
                                  challengeId: l,
                                  actionType: c,
                                  code: a
                                })];
                              case 6:
                                return (s = d.sent()).isError ? (S(s.error, !0), [
                                  2
                                ]) : (
                                  h.sendCodeVerifiedEvent(y),
                                  f.fireVerifiedEvent(y),
                                  m({
                                    type: ap.SET_CHALLENGE_COMPLETED,
                                    onChallengeCompletedData: {
                                      verificationToken: s.value.verificationToken,
                                      rememberDevice: I
                                    }
                                  }),
                                  [
                                    2
                                  ]
                                )
                            }
                          }
                        )
                      )
                    }
                  )
                )
              }
            },
            t ? se().createElement('span', {
              className: 'spinner spinner-xs spinner-no-margin'
            }) : d.Action.Verify
          ),
          s &&
          se().createElement(
            Gp,
            {
              disabled: t,
              rememberDevice: I,
              setRememberDevice: T,
              className: N
            }
          ),
          r,
          se().createElement(zp, {
            className: N
          }),
          se().createElement('p', {
            className: D
          }, g)
        )
      )
    },
    vh = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    mh = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    yh = function () {
      var e = xp(),
      t = e.state,
      n = t.userId,
      r = t.challengeId,
      a = t.actionType,
      i = t.renderInline,
      o = t.metadata,
      l = t.enabledMediaTypes,
      c = t.resources,
      u = t.eventService,
      s = t.metricsService,
      d = t.requestService,
      p = t.onModalChallengeAbandoned,
      h = t.isModalVisible,
      f = e.dispatch,
      v = Lp(),
      m = (0, ws.useHistory) (),
      y = (0, ue.useState) (!1),
      E = y[0],
      g = y[1],
      C = (0, ue.useState) (!1),
      b = C[0],
      I = C[1],
      T = (0, ue.useState) (null),
      S = T[0],
      _ = T[1],
      A = (0, ue.useState) (!1),
      N = A[0],
      L = A[1],
      D = (0, ue.useState) (c.Label.TwoStepVerification),
      w = D[0],
      O = D[1],
      k = (0, ue.useState) (!0),
      R = k[0],
      P = k[1],
      M = function () {
        f({
          type: ap.HIDE_MODAL_CHALLENGE
        }),
        u.sendChallengeAbandonedEvent(v),
        s.fireAbandonedEvent(),
        v === Oc.CrossDevice &&
        d.twoStepVerification.retractCrossDevice(n, {
          challengeId: r,
          actionType: a
        }),
        null !== p &&
        setTimeout(
          (
            function () {
              return p((function () {
                return f({
                  type: ap.SHOW_MODAL_CHALLENGE
                })
              }))
            }
          ),
          Cp
        )
      },
      x = function () {
        return vh(
          void 0,
          void 0,
          void 0,
          (
            function () {
              var e,
              t,
              i,
              l,
              s,
              p,
              h,
              v;
              return mh(
                this,
                (
                  function (y) {
                    switch (y.label) {
                      case 0:
                        return _(null),
                        null !== o ? [
                          2
                        ] : [
                          4,
                          d.twoStepVerification.getMetadata({
                            userId: n,
                            challengeId: r,
                            actionType: a
                          })
                        ];
                      case 1:
                        return (e = y.sent()).isError ? (
                          e.error === lr.INVALID_USER_ID ||
                          e.error === lr.INVALID_CHALLENGE_ID ? f({
                            type: ap.SET_CHALLENGE_INVALIDATED,
                            errorCode: Np(e.error)
                          }) : _(Ap(c, e.error)),
                          [
                            2
                          ]
                        ) : [
                          4,
                          d.twoStepVerification.getUserConfiguration(n, {
                            challengeId: r,
                            actionType: a
                          })
                        ];
                      case 2:
                        if ((t = y.sent()).isError) return t.error === lr.INVALID_USER_ID ||
                        t.error === lr.INVALID_CHALLENGE_ID ? f({
                          type: ap.SET_CHALLENGE_INVALIDATED,
                          errorCode: Np(t.error)
                        }) : _(Ap(c, t.error)),
                        [
                          2
                        ];
                        f({
                          type: ap.SET_METADATA,
                          metadata: e.value
                        }),
                        i = Oc[t.value.primaryMediaType] ||
                        null,
                        l = t.value.methods.filter((function (e) {
                          return e.enabled
                        })).map((function (e) {
                          var t = e.mediaType;
                          return Oc[t] ||
                          null
                        })),
                        s = H.DeviceMeta &&
                        (0, H.DeviceMeta) ().isInApp,
                        p = !0;
                        try {
                          (s || void 0 === PublicKeyCredential) &&
                          (p = !1)
                        } catch (e) {
                          p = !1
                        }
                        return h = H.DeviceMeta &&
                        (
                          (0, H.DeviceMeta) ().isIosApp ||
                          (0, H.DeviceMeta) ().isAndroidApp &&
                          e.value.isAndroidSecurityKeyEnabled
                        ),
                        v = !1,
                        i === Oc.SecurityKey &&
                        s &&
                        h &&
                        e.value.isSecurityKeyOnAllPlatformsEnabled ? [
                          4,
                          sr.hybridResponseService.getNativeResponse(
                            sr.hybridResponseService.FeatureTarget.CREDENTIALS_PROTOCOL_AVAILABLE,
                            {
                            },
                            2000
                          )
                        ] : [
                          3,
                          4
                        ];
                      case 3:
                        'true' === y.sent() &&
                        (v = !0),
                        y.label = 4;
                      case 4:
                        return i !== Oc.SecurityKey ||
                        p ||
                        v ||
                        (i = Oc.Authenticator),
                        i !== Oc.Passkey ||
                        p ||
                        v ||
                        (
                          l.includes(Oc.Passkey) &&
                          l.splice(l.indexOf(Oc.Passkey), 1),
                          0 === l.length ? u.sendNoEnabledMethodsReturnedEvent(i, t.value.methods.length) : i = l[0]
                        ),
                        m.replace(Dp(i)),
                        i === Oc.Email &&
                        g(!0),
                        0 !== l.length &&
                        i ||
                        u.sendNoEnabledMethodsReturnedEvent(i, t.value.methods.length),
                        !l.includes(Oc.SecurityKey) ||
                        p ||
                        v ||
                        l.splice(l.indexOf(Oc.SecurityKey), 1),
                        l.length > 0 &&
                        a === wc.Login &&
                        !l.includes(Oc.RecoveryCode) &&
                        l.push(Oc.RecoveryCode),
                        f({
                          type: ap.SET_USER_CONFIGURATION,
                          userConfiguration: t.value,
                          enabledMediaTypes: l
                        }),
                        u.sendUserConfigurationLoadedEvent(i),
                        [
                          2
                        ]
                    }
                  }
                )
              )
            }
          )
        )
      };
      (0, ue.useEffect) ((function () {
        x()
      }), []);
      var V = {
        content: c.Action.Reload,
        label: c.Action.Reload,
        enabled: null !== S,
        action: x
      },
      W = function () {
        var e,
        t = i ? Si : Ii.Modal.Body,
        n = i ? Io : To;
        return S ? se().createElement(
          se().Fragment,
          null,
          se().createElement(t, null, se().createElement('p', null, S)),
          se().createElement(n, {
            positiveButton: V,
            negativeButton: null
          })
        ) : o ? (
          e = se().createElement(
            se().Fragment,
            null,
            v &&
            l.length > 1 &&
            R &&
            se().createElement(Up, {
              requestInFlight: N
            })
          ),
          se().createElement(
            ws.Switch,
            null,
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.Authenticator)
              },
              se().createElement(jp, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.Email)
              },
              se().createElement($p, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.RecoveryCode)
              },
              se().createElement(nh, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.SMS)
              },
              se().createElement(ch, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.SecurityKey)
              },
              se().createElement(ih, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.CrossDevice)
              },
              se().createElement(
                dh,
                {
                  requestInFlight: N,
                  setRequestInFlight: L,
                  setModalTitleText: O,
                  setShowChangeMediaType: P
                },
                e
              )
            ),
            se().createElement(
              ws.Route,
              {
                path: Dp(Oc.Passkey)
              },
              se().createElement(fh, {
                requestInFlight: N,
                setRequestInFlight: L
              }, e)
            ),
            se().createElement(
              ws.Route,
              null,
              se().createElement(
                Wp,
                {
                  hasSentEmailCode: E,
                  setHasSentEmailCode: g,
                  hasSentSmsCode: b,
                  setHasSentSmsCode: I,
                  requestInFlight: N,
                  setRequestInFlight: L,
                  setModalTitleText: O
                },
                e
              )
            )
          )
        ) : se().createElement(
          t,
          null,
          se().createElement(
            'span',
            {
              className: 'spinner spinner-default spinner-no-margin modal-margin-bottom-large'
            }
          )
        )
      };
      return i ? se().createElement(Ti, {
        titleText: w
      }, W()) : se().createElement(
        Ii.Modal,
        {
          className: 'modal-modern',
          show: h,
          onHide: M,
          backdrop: 'static'
        },
        se().createElement(
          Ao,
          {
            headerText: w,
            buttonType: go.CLOSE,
            buttonAction: M,
            buttonEnabled: !N,
            headerInfo: null
          }
        ),
        W()
      )
    },
    Eh = (0, fi.withTranslations) (
      (
        function (e) {
          var t = e.userId,
          n = e.challengeId,
          r = e.actionType,
          a = e.renderInline,
          i = e.shouldModifyBrowserHistory,
          o = e.shouldShowRememberDeviceCheckbox,
          l = e.eventService,
          c = e.metricsService,
          u = e.requestService,
          s = e.translate,
          d = e.onChallengeCompleted,
          p = e.onChallengeInvalidated,
          h = e.onModalChallengeAbandoned,
          f = se().createElement(
            Mp,
            {
              userId: t,
              challengeId: n,
              actionType: r,
              renderInline: a,
              shouldShowRememberDeviceCheckbox: o,
              eventService: l,
              metricsService: c,
              requestService: u,
              translate: s,
              onChallengeCompleted: d,
              onChallengeInvalidated: p,
              onModalChallengeAbandoned: h
            },
            se().createElement(yh, null)
          );
          return i ? se().createElement(_s.HashRouter, {
            hashType: 'noslash'
          }, f) : se().createElement(_s.MemoryRouter, null, f)
        }
      ),
      {
        common: [],
        feature: 'Authentication.TwoStepVerification'
      }
    ),
    gh = function () {
      function e(e, t) {
        this.challengeId = e,
        this.targetUserId = t
      }
      return e.prototype.sendChallengeInitializedEvent = function () {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.challengeInitialized,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendUserConfigurationLoadedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.userConfigurationLoaded,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendNoEnabledMethodsReturnedEvent = function (e, t) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.noEnabledMethodsReturned,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            primaryMediaType: e ||
            '',
            methodsReturned: t
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeInvalidatedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.challengeInvalidated,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendChallengeAbandonedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.challengeAbandoned,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendEmailResendRequestedEvent = function () {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.emailResendRequested,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendSmsResendRequestedEvent = function () {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.smsResendRequested,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendMediaTypeChangedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.mediaTypeChanged,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeSubmittedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.codeSubmitted,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeVerificationFailedEvent = function (e, t) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.codeVerificationFailed,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            '',
            reason: t
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e.prototype.sendCodeVerifiedEvent = function (e) {
        W().EventStream.SendEventWithTarget(
          bp,
          Ip.codeVerified,
          {
            challengeId: this.challengeId,
            targetUserId: this.targetUserId,
            mediaType: e ||
            ''
          },
          W().EventStream.TargetTypes.WWW
        )
      },
      e
    }(),
    Ch = function () {
      function e(e, t, n) {
        this.appType = t ||
        'unknown',
        this.actionType = e,
        this.solveTimeSequenceName = this.actionType + '_' + 'TwoStepVerification_' + Sp.solveTime,
        this.eventTimer = new Zi,
        this.requestServiceDefault = n
      }
      return e.prototype.fireInitializedEvent = function () {
        if (ji) {
          var e = this.actionType + '_' + 'TwoStepVerification_' + Tp.initialized;
          ji.fireEvent(e, e + '_' + this.appType),
          ji.start(
            this.solveTimeSequenceName,
            this.solveTimeSequenceName + '_' + this.appType
          )
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.Event2sv,
          value: 1,
          labelValues: {
            action_type: this.actionType,
            event_type: Tp.initialized,
            application_type: this.appType
          }
        }).catch((function () {
        })),
        this.eventTimer.start(this.solveTimeSequenceName)
      },
      e.prototype.fireVerifiedEvent = function (e) {
        if (null !== e) {
          if (ji) {
            var t = this.actionType + '_' + 'TwoStepVerification_' + Tp.verified + e;
            ji.fireEvent(t, t + '_' + this.appType),
            ji.endSuccess(
              this.solveTimeSequenceName,
              this.solveTimeSequenceName + '_' + this.appType
            )
          }
          this.requestServiceDefault.metrics.recordMetric({
            name: La.Event2sv,
            value: 1,
            labelValues: {
              action_type: this.actionType,
              event_type: '' + Tp.verified + e,
              application_type: this.appType
            }
          }).catch((function () {
          }));
          var n = this.eventTimer.end(this.solveTimeSequenceName);
          null !== n &&
          this.requestServiceDefault.metrics.recordMetric({
            name: La.SolveTime2sv,
            value: n,
            labelValues: {
              action_type: this.actionType,
              event_type: '' + Tp.verified + e,
              application_type: this.appType
            }
          }).catch((function () {
          }))
        }
      },
      e.prototype.fireInvalidatedEvent = function () {
        if (ji) {
          var e = this.actionType + '_' + 'TwoStepVerification_' + Tp.invalidated;
          ji.fireEvent(e, e + '_' + this.appType),
          ji.endFailure(
            this.solveTimeSequenceName,
            this.solveTimeSequenceName + '_' + this.appType
          )
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.Event2sv,
          value: 1,
          labelValues: {
            action_type: this.actionType,
            event_type: Tp.invalidated,
            application_type: this.appType
          }
        }).catch((function () {
        }));
        var t = this.eventTimer.end(this.solveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTime2sv,
          value: t,
          labelValues: {
            action_type: this.actionType,
            event_type: Tp.invalidated,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireAbandonedEvent = function () {
        if (ji) {
          var e = this.actionType + '_' + 'TwoStepVerification_' + Tp.abandoned;
          ji.fireEvent(e, e + '_' + this.appType),
          ji.endCancel(
            this.solveTimeSequenceName,
            this.solveTimeSequenceName + '_' + this.appType
          )
        }
        this.requestServiceDefault.metrics.recordMetric({
          name: La.Event2sv,
          value: 1,
          labelValues: {
            action_type: this.actionType,
            event_type: Tp.abandoned,
            application_type: this.appType
          }
        }).catch((function () {
        }));
        var t = this.eventTimer.end(this.solveTimeSequenceName);
        null !== t &&
        this.requestServiceDefault.metrics.recordMetric({
          name: La.SolveTime2sv,
          value: t,
          labelValues: {
            action_type: this.actionType,
            event_type: Tp.abandoned,
            application_type: this.appType
          }
        }).catch((function () {
        }))
      },
      e
    }(),
    bh = new hi,
    Ih = function (e) {
      var t = e.containerId,
      n = e.userId,
      r = e.challengeId,
      a = e.appType,
      i = e.actionType,
      o = e.renderInline,
      l = e.shouldModifyBrowserHistory,
      c = e.shouldShowRememberDeviceCheckbox,
      u = e.onChallengeCompleted,
      s = e.onChallengeInvalidated,
      d = e.onModalChallengeAbandoned,
      p = document.getElementById(t);
      if (null !== p) {
        (0, de.unmountComponentAtNode) (p);
        var h = new gh(r, n),
        f = new Ch(i, a, bh);
        return (0, de.render) (
          se().createElement(
            Eh,
            {
              userId: n,
              challengeId: r,
              actionType: i,
              renderInline: o,
              shouldModifyBrowserHistory: l ||
              !1,
              shouldShowRememberDeviceCheckbox: c,
              eventService: h,
              metricsService: f,
              requestService: bh,
              onChallengeCompleted: u,
              onChallengeInvalidated: s,
              onModalChallengeAbandoned: d
            }
          ),
          p
        ),
        h.sendChallengeInitializedEvent(),
        f.fireInitializedEvent(),
        !0
      }
      return !1
    },
    Th = 'Generic Challenge:',
    Sh = 'challengeClientAnalysisEventV1',
    _h = {
      onCompleted: 'onCompleted'
    },
    Ah = {
      success: 'Success',
      parseFailure: 'ParseFailure',
      renderFailure: 'RenderFailure',
      continueFailure: 'ContinueFailure'
    },
    Nh = 'unknown',
    Lh = function () {
      function e() {
      }
      return e.prototype.fireSuccessEvent = function (e) {
        Va({
          name: La.EventGeneric,
          value: 1,
          labelValues: {
            event_type: Ah.success,
            challenge_type: e
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireParseFailureEvent = function () {
        Va({
          name: La.EventGeneric,
          value: 1,
          labelValues: {
            event_type: Ah.parseFailure,
            challenge_type: Nh
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireRenderFailureEvent = function (e) {
        Va({
          name: La.EventGeneric,
          value: 1,
          labelValues: {
            event_type: Ah.renderFailure,
            challenge_type: e
          }
        }).catch((function () {
        }))
      },
      e.prototype.fireContinueFailureEvent = function (e) {
        Va({
          name: La.EventGeneric,
          value: 1,
          labelValues: {
            event_type: Ah.continueFailure,
            challenge_type: e
          }
        }).catch((function () {
        }))
      },
      e
    }();
    function Dh(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) ||
      function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
        r = !0,
        a = !1,
        i = void 0;
        try {
          for (
            var o,
            l = e[Symbol.iterator]();
            !(r = (o = l.next()).done) &&
            (n.push(o.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          a = !0,
          i = e
        } finally {
          try {
            r ||
            null == l.return ||
            l.return()
          } finally {
            if (a) throw i
          }
        }
        return n
      }(e, t) ||
      Jh(e, t) ||
      function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }()
    }
    function wh(e, t, n, r, a, i, o) {
      try {
        var l = e[i](o),
        c = l.value
      } catch (e) {
        return void n(e)
      }
      l.done ? t(c) : Promise.resolve(c).then(r, a)
    }
    function Oh(e) {
      return function () {
        var t = this,
        n = arguments;
        return new Promise(
          (
            function (r, a) {
              var i = e.apply(t, n);
              function o(e) {
                wh(i, r, a, o, l, 'next', e)
              }
              function l(e) {
                wh(i, r, a, o, l, 'throw', e)
              }
              o(void 0)
            }
          )
        )
      }
    }
    function kh(e) {
      return function (e) {
        if (Array.isArray(e)) return Xh(e)
      }(e) ||
      function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) ||
      Jh(e) ||
      function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }()
    }
    function Rh(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function Ph(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable ||
        !1,
        r.configurable = !0,
        'value' in r &&
        (r.writable = !0),
        Object.defineProperty(e, r.key, r)
      }
    }
    function Mh(e, t, n) {
      return t &&
      Ph(e.prototype, t),
      n &&
      Ph(e, n),
      e
    }
    function xh(e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
      e.prototype = Object.create(
        t &&
        t.prototype,
        {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }
      ),
      t &&
      Fh(e, t)
    }
    function Vh(e) {
      var t = zh();
      return function () {
        var n,
        r = Bh(e);
        if (t) {
          var a = Bh(this).constructor;
          n = Reflect.construct(r, arguments, a)
        } else n = r.apply(this, arguments);
        return Hh(this, n)
      }
    }
    function Hh(e, t) {
      return !t ||
      'object' !== qh(t) &&
      'function' != typeof t ? Wh(e) : t
    }
    function Wh(e) {
      if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e
    }
    function Uh(e) {
      var t = 'function' == typeof Map ? new Map : void 0;
      return (
        Uh = function (e) {
          if (
            null === e ||
            (n = e, - 1 === Function.toString.call(n).indexOf('[native code]'))
          ) return e;
          var n;
          if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
          }
          function r() {
            return Gh(e, arguments, Bh(this).constructor)
          }
          return r.prototype = Object.create(
            e.prototype,
            {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }
          ),
          Fh(r, e)
        }
      ) (e)
    }
    function Gh(e, t, n) {
      return (
        Gh = zh() ? Reflect.construct : function (e, t, n) {
          var r = [
            null
          ];
          r.push.apply(r, t);
          var a = new (Function.bind.apply(e, r));
          return n &&
          Fh(a, n.prototype),
          a
        }
      ).apply(null, arguments)
    }
    function zh() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
        }))),
        !0
      } catch (e) {
        return !1
      }
    }
    function Fh(e, t) {
      return (
        Fh = Object.setPrototypeOf ||
        function (e, t) {
          return e.__proto__ = t,
          e
        }
      ) (e, t)
    }
    function Bh(e) {
      return (
        Bh = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ ||
          Object.getPrototypeOf(e)
        }
      ) (e)
    }
    function qh(e) {
      return (
        qh = 'function' == typeof Symbol &&
        'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
         : function (e) {
          return e &&
          'function' == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype ? 'symbol' : typeof e
        }
      ) (e)
    }
    function Zh(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
        (
          r = r.filter(
            (
              function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
            )
          )
        ),
        n.push.apply(n, r)
      }
      return n
    }
    function jh(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {
        };
        t % 2 ? Zh(Object(n), !0).forEach((function (t) {
          Yh(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zh(Object(n)).forEach(
          (
            function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
          )
        )
      }
      return e
    }
    function Yh(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
      e
    }
    function Kh(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = Jh(e)) || t && e && 'number' == typeof e.length) {
          n &&
          (e = n);
          var r = 0,
          a = function () {
          };
          return {
            s: a,
            n: function () {
              return r >= e.length ? {
                done: !0
              }
               : {
                done: !1,
                value: e[r++]
              }
            },
            e: function (e) {
              throw e
            },
            f: a
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      var i,
      o = !0,
      l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]()
        },
        n: function () {
          var e = n.next();
          return o = e.done,
          e
        },
        e: function (e) {
          l = !0,
          i = e
        },
        f: function () {
          try {
            o ||
            null == n.return ||
            n.return()
          } finally {
            if (l) throw i
          }
        }
      }
    }
    function Jh(e, t) {
      if (e) {
        if ('string' == typeof e) return Xh(e, t);
        var n = Object.prototype.toString.call(e).slice(8, - 1);
        return 'Object' === n &&
        e.constructor &&
        (n = e.constructor.name),
        'Map' === n ||
        'Set' === n ? Array.from(e) : 'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xh(e, t) : void 0
      }
    }
    function Xh(e, t) {
      (null == t || t > e.length) &&
      (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    !function (e) {
      e.assertEqual = function (e) {
        return e
      },
      e.assertIs = function (e) {
      },
      e.assertNever = function (e) {
        throw new Error
      },
      e.arrayToEnum = function (e) {
        var t,
        n = {},
        r = Kh(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var a = t.value;
            n[a] = a
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        return n
      },
      e.getValidEnumValues = function (t) {
        var n,
        r = {},
        a = Kh(
          e.objectKeys(t).filter((function (e) {
            return 'number' != typeof t[t[e]]
          }))
        );
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var i = n.value;
            r[i] = t[i]
          }
        } catch (e) {
          a.e(e)
        } finally {
          a.f()
        }
        return e.objectValues(r)
      },
      e.objectValues = function (t) {
        return e.objectKeys(t).map((function (e) {
          return t[e]
        }))
      },
      e.objectKeys = 'function' == typeof Object.keys ? function (e) {
        return Object.keys(e)
      }
       : function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) &&
        t.push(n);
        return t
      },
      e.find = function (e, t) {
        var n,
        r = Kh(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a = n.value;
            if (t(a)) return a
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
      },
      e.isInteger = 'function' == typeof Number.isInteger ? function (e) {
        return Number.isInteger(e)
      }
       : function (e) {
        return 'number' == typeof e &&
        isFinite(e) &&
        Math.floor(e) === e
      },
      e.joinValues = function (e) {
        var t = arguments.length > 1 &&
        void 0 !== arguments[1] ? arguments[1] : ' | ';
        return e.map((function (e) {
          return 'string' == typeof e ? '\''.concat(e, '\'') : e
        })).join(t)
      },
      e.jsonStringifyReplacer = function (e, t) {
        return 'bigint' == typeof t ? t.toString() : t
      }
    }(wp || (wp = {})),
    function (e) {
      e.mergeShapes = function (e, t) {
        return jh(jh({
        }, e), t)
      }
    }(Op || (Op = {}));
    var Qh = wp.arrayToEnum(
      ['string',
      'nan',
      'number',
      'integer',
      'float',
      'boolean',
      'date',
      'bigint',
      'symbol',
      'function',
      'undefined',
      'null',
      'array',
      'object',
      'unknown',
      'promise',
      'void',
      'never',
      'map',
      'set']
    ),
    $h = function (e) {
      switch (qh(e)) {
        case 'undefined':
          return Qh.undefined;
        case 'string':
          return Qh.string;
        case 'number':
          return isNaN(e) ? Qh.nan : Qh.number;
        case 'boolean':
          return Qh.boolean;
        case 'function':
          return Qh.function;
        case 'bigint':
          return Qh.bigint;
        case 'symbol':
          return Qh.symbol;
        case 'object':
          return Array.isArray(e) ? Qh.array : null === e ? Qh.null : e.then &&
          'function' == typeof e.then &&
          e.catch &&
          'function' == typeof e.catch ? Qh.promise : 'undefined' != typeof Map &&
          e instanceof Map ? Qh.map : 'undefined' != typeof Set &&
          e instanceof Set ? Qh.set : 'undefined' != typeof Date &&
          e instanceof Date ? Qh.date : Qh.object;
        default:
          return Qh.unknown
      }
    },
    ef = wp.arrayToEnum(
      ['invalid_type',
      'invalid_literal',
      'custom',
      'invalid_union',
      'invalid_union_discriminator',
      'invalid_enum_value',
      'unrecognized_keys',
      'invalid_arguments',
      'invalid_return_type',
      'invalid_date',
      'invalid_string',
      'too_small',
      'too_big',
      'invalid_intersection_types',
      'not_multiple_of',
      'not_finite']
    ),
    tf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n(e) {
        var r;
        Rh(this, n),
        (r = t.call(this)).issues = [],
        r.addIssue = function (e) {
          r.issues = [].concat(kh(r.issues), [
            e
          ])
        },
        r.addIssues = function () {
          var e = arguments.length > 0 &&
          void 0 !== arguments[0] ? arguments[0] : [];
          r.issues = [].concat(kh(r.issues), kh(e))
        };
        var a = (this instanceof n ? this.constructor : void 0).prototype;
        return Object.setPrototypeOf ? Object.setPrototypeOf(Wh(r), a) : r.__proto__ = a,
        r.name = 'ZodError',
        r.issues = e,
        r
      }
      return Mh(
        n,
        [
          {
            key: 'format',
            value: function (e) {
              var t = e ||
              function (e) {
                return e.message
              },
              n = {
                _errors: []
              };
              return function e(r) {
                var a,
                i = Kh(r.issues);
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var o = a.value;
                    if ('invalid_union' === o.code) o.unionErrors.map(e);
                     else if ('invalid_return_type' === o.code) e(o.returnTypeError);
                     else if ('invalid_arguments' === o.code) e(o.argumentsError);
                     else if (0 === o.path.length) n._errors.push(t(o));
                     else for (var l = n, c = 0; c < o.path.length; ) {
                      var u = o.path[c];
                      c === o.path.length - 1 ? (l[u] = l[u] || {
                        _errors: []
                      }, l[u]._errors.push(t(o))) : l[u] = l[u] ||
                      {
                        _errors: []
                      },
                      l = l[u],
                      c++
                    }
                  }
                } catch (e) {
                  i.e(e)
                } finally {
                  i.f()
                }
              }(this),
              n
            }
          },
          {
            key: 'toString',
            value: function () {
              return this.message
            }
          },
          {
            key: 'flatten',
            value: function () {
              var e,
              t = arguments.length > 0 &&
              void 0 !== arguments[0] ? arguments[0] : function (e) {
                return e.message
              },
              n = {},
              r = [],
              a = Kh(this.issues);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var i = e.value;
                  i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i))
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              return {
                formErrors: r,
                fieldErrors: n
              }
            }
          },
          {
            key: 'errors',
            get: function () {
              return this.issues
            }
          },
          {
            key: 'message',
            get: function () {
              return JSON.stringify(this.issues, wp.jsonStringifyReplacer, 2)
            }
          },
          {
            key: 'isEmpty',
            get: function () {
              return 0 === this.issues.length
            }
          },
          {
            key: 'formErrors',
            get: function () {
              return this.flatten()
            }
          }
        ],
        [
          {
            key: 'assert',
            value: function (e) {
              if (!(e instanceof n)) throw new Error('Not a ZodError: '.concat(e))
            }
          }
        ]
      ),
      n
    }(Uh(Error));
    tf.create = function (e) {
      return new tf(e)
    };
    var nf = function (e, t) {
      var n;
      switch (e.code) {
        case ef.invalid_type:
          n = e.received === Qh.undefined ? 'Required' : 'Expected '.concat(e.expected, ', received ').concat(e.received);
          break;
        case ef.invalid_literal:
          n = 'Invalid literal value, expected '.concat(JSON.stringify(e.expected, wp.jsonStringifyReplacer));
          break;
        case ef.unrecognized_keys:
          n = 'Unrecognized key(s) in object: '.concat(wp.joinValues(e.keys, ', '));
          break;
        case ef.invalid_union:
          n = 'Invalid input';
          break;
        case ef.invalid_union_discriminator:
          n = 'Invalid discriminator value. Expected '.concat(wp.joinValues(e.options));
          break;
        case ef.invalid_enum_value:
          n = 'Invalid enum value. Expected '.concat(wp.joinValues(e.options), ', received \'').concat(e.received, '\'');
          break;
        case ef.invalid_arguments:
          n = 'Invalid function arguments';
          break;
        case ef.invalid_return_type:
          n = 'Invalid function return type';
          break;
        case ef.invalid_date:
          n = 'Invalid date';
          break;
        case ef.invalid_string:
          'object' === qh(e.validation) ? 'includes' in e.validation ? (
            n = 'Invalid input: must include "'.concat(e.validation.includes, '"'),
            'number' == typeof e.validation.position &&
            (
              n = ''.concat(n, ' at one or more positions greater than or equal to ').concat(e.validation.position)
            )
          ) : 'startsWith' in e.validation ? n = 'Invalid input: must start with "'.concat(e.validation.startsWith, '"') : 'endsWith' in e.validation ? n = 'Invalid input: must end with "'.concat(e.validation.endsWith, '"') : wp.assertNever(e.validation) : n = 'regex' !== e.validation ? 'Invalid '.concat(e.validation) : 'Invalid';
          break;
        case ef.too_small:
          n = 'array' === e.type ? 'Array must contain '.concat(e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than', ' ').concat(e.minimum, ' element(s)') : 'string' === e.type ? 'String must contain '.concat(e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over', ' ').concat(e.minimum, ' character(s)') : 'number' === e.type ? 'Number must be '.concat(
            e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '
          ).concat(e.minimum) : 'date' === e.type ? 'Date must be '.concat(
            e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '
          ).concat(new Date(Number(e.minimum))) : 'Invalid input';
          break;
        case ef.too_big:
          n = 'array' === e.type ? 'Array must contain '.concat(e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than', ' ').concat(e.maximum, ' element(s)') : 'string' === e.type ? 'String must contain '.concat(e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under', ' ').concat(e.maximum, ' character(s)') : 'number' === e.type ? 'Number must be '.concat(
            e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than',
            ' '
          ).concat(e.maximum) : 'bigint' === e.type ? 'BigInt must be '.concat(
            e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than',
            ' '
          ).concat(e.maximum) : 'date' === e.type ? 'Date must be '.concat(
            e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than',
            ' '
          ).concat(new Date(Number(e.maximum))) : 'Invalid input';
          break;
        case ef.custom:
          n = 'Invalid input';
          break;
        case ef.invalid_intersection_types:
          n = 'Intersection results could not be merged';
          break;
        case ef.not_multiple_of:
          n = 'Number must be a multiple of '.concat(e.multipleOf);
          break;
        case ef.not_finite:
          n = 'Number must be finite';
          break;
        default:
          n = t.defaultError,
          wp.assertNever(e)
      }
      return {
        message: n
      }
    },
    rf = nf;
    function af() {
      return rf
    }
    var of = function (e) {
      var t = e.data,
      n = e.path,
      r = e.errorMaps,
      a = e.issueData,
      i = [].concat(kh(n), kh(a.path || [])),
      o = jh(jh({
      }, a), {
      }, {
        path: i
      });
      if (void 0 !== a.message) return jh(jh({
      }, a), {
      }, {
        path: i,
        message: a.message
      });
      var l,
      c = '',
      u = Kh(r.filter((function (e) {
        return !!e
      })).slice().reverse());
      try {
        for (u.s(); !(l = u.n()).done; ) {
          c = (0, l.value) (o, {
            data: t,
            defaultError: c
          }).message
        }
      } catch (e) {
        u.e(e)
      } finally {
        u.f()
      }
      return jh(jh({
      }, a), {
      }, {
        path: i,
        message: c
      })
    };
    function lf(e, t) {
      var n = af(),
      r = of ({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          n,
          n === nf ? void 0 : nf
        ].filter((function (e) {
          return !!e
        }))
      });
      e.common.issues.push(r)
    }
    var cf,
    uf,
    sf,
    df = function () {
      function e() {
        Rh(this, e),
        this.value = 'valid'
      }
      var t;
      return Mh(
        e,
        [
          {
            key: 'dirty',
            value: function () {
              'valid' === this.value &&
              (this.value = 'dirty')
            }
          },
          {
            key: 'abort',
            value: function () {
              'aborted' !== this.value &&
              (this.value = 'aborted')
            }
          }
        ],
        [
          {
            key: 'mergeArray',
            value: function (e, t) {
              var n,
              r = [],
              a = Kh(t);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var i = n.value;
                  if ('aborted' === i.status) return pf;
                  'dirty' === i.status &&
                  e.dirty(),
                  r.push(i.value)
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              return {
                status: e.value,
                value: r
              }
            }
          },
          {
            key: 'mergeObjectAsync',
            value: (
              t = Oh(
                regeneratorRuntime.mark(
                  (
                    function t(n, r) {
                      var a,
                      i,
                      o,
                      l,
                      c,
                      u;
                      return regeneratorRuntime.wrap(
                        (
                          function (t) {
                            for (; ; ) switch (t.prev = t.next) {
                              case 0:
                                a = [],
                                i = Kh(r),
                                t.prev = 2,
                                i.s();
                              case 4:
                                if ((o = i.n()).done) {
                                  t.next = 15;
                                  break
                                }
                                return l = o.value,
                                t.next = 8,
                                l.key;
                              case 8:
                                return c = t.sent,
                                t.next = 11,
                                l.value;
                              case 11:
                                u = t.sent,
                                a.push({
                                  key: c,
                                  value: u
                                });
                              case 13:
                                t.next = 4;
                                break;
                              case 15:
                                t.next = 20;
                                break;
                              case 17:
                                t.prev = 17,
                                t.t0 = t.catch(2),
                                i.e(t.t0);
                              case 20:
                                return t.prev = 20,
                                i.f(),
                                t.finish(20);
                              case 23:
                                return t.abrupt('return', e.mergeObjectSync(n, a));
                              case 24:
                              case 'end':
                                return t.stop()
                            }
                          }
                        ),
                        t,
                        null,
                        [
                          [2,
                          17,
                          20,
                          23]
                        ]
                      )
                    }
                  )
                )
              ),
              function (e, n) {
                return t.apply(this, arguments)
              }
            )
          },
          {
            key: 'mergeObjectSync',
            value: function (e, t) {
              var n,
              r = {},
              a = Kh(t);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var i = n.value,
                  o = i.key,
                  l = i.value;
                  if ('aborted' === o.status) return pf;
                  if ('aborted' === l.status) return pf;
                  'dirty' === o.status &&
                  e.dirty(),
                  'dirty' === l.status &&
                  e.dirty(),
                  '__proto__' === o.value ||
                  void 0 === l.value &&
                  !i.alwaysSet ||
                  (r[o.value] = l.value)
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              return {
                status: e.value,
                value: r
              }
            }
          }
        ]
      ),
      e
    }(),
    pf = Object.freeze({
      status: 'aborted'
    }),
    hf = function (e) {
      return {
        status: 'dirty',
        value: e
      }
    },
    ff = function (e) {
      return {
        status: 'valid',
        value: e
      }
    },
    vf = function (e) {
      return 'aborted' === e.status
    },
    mf = function (e) {
      return 'dirty' === e.status
    },
    yf = function (e) {
      return 'valid' === e.status
    },
    Ef = function (e) {
      return 'undefined' != typeof Promise &&
      e instanceof Promise
    };
    function gf(e, t, n, r) {
      if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter');
      if ('function' == typeof t ? e !== t ||
      !r : !t.has(e)) throw new TypeError(
        'Cannot read private member from an object whose class did not declare it'
      );
      return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
    }
    function Cf(e, t, n, r, a) {
      if ('m' === r) throw new TypeError('Private method is not writable');
      if ('a' === r && !a) throw new TypeError('Private accessor was defined without a setter');
      if ('function' == typeof t ? e !== t ||
      !a : !t.has(e)) throw new TypeError(
        'Cannot write private member to an object whose class did not declare it'
      );
      return 'a' === r ? a.call(e, n) : a ? a.value = n : t.set(e, n),
      n
    }
    'function' == typeof SuppressedError &&
    SuppressedError,
    function (e) {
      e.errToObj = function (e) {
        return 'string' == typeof e ? {
          message: e
        }
         : e ||
        {
        }
      },
      e.toString = function (e) {
        return 'string' == typeof e ? e : null == e ? void 0 : e.message
      }
    }(cf || (cf = {}));
    var bf = function () {
      function e(t, n, r, a) {
        Rh(this, e),
        this._cachedPath = [],
        this.parent = t,
        this.data = n,
        this._path = r,
        this._key = a
      }
      return Mh(
        e,
        [
          {
            key: 'path',
            get: function () {
              var e,
              t;
              this._cachedPath.length ||
              (
                this._key instanceof Array ? (e = this._cachedPath).push.apply(e, kh(this._path).concat(kh(this._key))) : (t = this._cachedPath).push.apply(t, kh(this._path).concat([this._key]))
              );
              return this._cachedPath
            }
          }
        ]
      ),
      e
    }(),
    If = function (e, t) {
      if (yf(t)) return {
        success: !0,
        data: t.value
      };
      if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.');
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          var t = new tf(e.common.issues);
          return this._error = t,
          this._error
        }
      }
    };
    function Tf(e) {
      if (!e) return {
      };
      var t = e.errorMap,
      n = e.invalid_type_error,
      r = e.required_error,
      a = e.description;
      if (t && (n || r)) throw new Error(
        'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
      );
      if (t) return {
        errorMap: t,
        description: a
      };
      return {
        errorMap: function (t, a) {
          var i,
          o,
          l = e.message;
          return 'invalid_enum_value' === t.code ? {
            message: null != l ? l : a.defaultError
          }
           : void 0 === a.data ? {
            message: null !== (i = null != l ? l : r) &&
            void 0 !== i ? i : a.defaultError
          }
           : 'invalid_type' !== t.code ? {
            message: a.defaultError
          }
           : {
            message: null !== (o = null != l ? l : n) &&
            void 0 !== o ? o : a.defaultError
          }
        },
        description: a
      }
    }
    var Sf,
    _f = function () {
      function e(t) {
        Rh(this, e),
        this.spa = this.safeParseAsync,
        this._def = t,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this)
      }
      var t,
      n;
      return Mh(
        e,
        [
          {
            key: '_getType',
            value: function (e) {
              return $h(e.data)
            }
          },
          {
            key: '_getOrReturnCtx',
            value: function (e, t) {
              return t ||
              {
                common: e.parent.common,
                data: e.data,
                parsedType: $h(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
              }
            }
          },
          {
            key: '_processInputParams',
            value: function (e) {
              return {
                status: new df,
                ctx: {
                  common: e.parent.common,
                  data: e.data,
                  parsedType: $h(e.data),
                  schemaErrorMap: this._def.errorMap,
                  path: e.path,
                  parent: e.parent
                }
              }
            }
          },
          {
            key: '_parseSync',
            value: function (e) {
              var t = this._parse(e);
              if (Ef(t)) throw new Error('Synchronous parse encountered promise.');
              return t
            }
          },
          {
            key: '_parseAsync',
            value: function (e) {
              var t = this._parse(e);
              return Promise.resolve(t)
            }
          },
          {
            key: 'parse',
            value: function (e, t) {
              var n = this.safeParse(e, t);
              if (n.success) return n.data;
              throw n.error
            }
          },
          {
            key: 'safeParse',
            value: function (e, t) {
              var n,
              r = {
                common: {
                  issues: [],
                  async: null !== (n = null == t ? void 0 : t.async) &&
                  void 0 !== n &&
                  n,
                  contextualErrorMap: null == t ? void 0 : t.errorMap
                },
                path: (null == t ? void 0 : t.path) ||
                [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: $h(e)
              },
              a = this._parseSync({
                data: e,
                path: r.path,
                parent: r
              });
              return If(r, a)
            }
          },
          {
            key: 'parseAsync',
            value: (
              n = Oh(
                regeneratorRuntime.mark(
                  (
                    function e(t, n) {
                      var r;
                      return regeneratorRuntime.wrap(
                        (
                          function (e) {
                            for (; ; ) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2,
                                this.safeParseAsync(t, n);
                              case 2:
                                if (!(r = e.sent).success) {
                                  e.next = 5;
                                  break
                                }
                                return e.abrupt('return', r.data);
                              case 5:
                                throw r.error;
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                          }
                        ),
                        e,
                        this
                      )
                    }
                  )
                )
              ),
              function (e, t) {
                return n.apply(this, arguments)
              }
            )
          },
          {
            key: 'safeParseAsync',
            value: (
              t = Oh(
                regeneratorRuntime.mark(
                  (
                    function e(t, n) {
                      var r,
                      a,
                      i;
                      return regeneratorRuntime.wrap(
                        (
                          function (e) {
                            for (; ; ) switch (e.prev = e.next) {
                              case 0:
                                return r = {
                                  common: {
                                    issues: [],
                                    contextualErrorMap: null == n ? void 0 : n.errorMap,
                                    async: !0
                                  },
                                  path: (null == n ? void 0 : n.path) ||
                                  [],
                                  schemaErrorMap: this._def.errorMap,
                                  parent: null,
                                  data: t,
                                  parsedType: $h(t)
                                },
                                a = this._parse({
                                  data: t,
                                  path: r.path,
                                  parent: r
                                }),
                                e.next = 4,
                                Ef(a) ? a : Promise.resolve(a);
                              case 4:
                                return i = e.sent,
                                e.abrupt('return', If(r, i));
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                          }
                        ),
                        e,
                        this
                      )
                    }
                  )
                )
              ),
              function (e, n) {
                return t.apply(this, arguments)
              }
            )
          },
          {
            key: 'refine',
            value: function (e, t) {
              return this._refinement(
                (
                  function (n, r) {
                    var a = e(n),
                    i = function () {
                      return r.addIssue(
                        jh({
                          code: ef.custom
                        }, function (e) {
                          return 'string' == typeof t ||
                          void 0 === t ? {
                            message: t
                          }
                           : 'function' == typeof t ? t(e) : t
                        }(n))
                      )
                    };
                    return 'undefined' != typeof Promise &&
                    a instanceof Promise ? a.then((function (e) {
                      return !!e ||
                      (i(), !1)
                    })) : !!a ||
                    (i(), !1)
                  }
                )
              )
            }
          },
          {
            key: 'refinement',
            value: function (e, t) {
              return this._refinement(
                (
                  function (n, r) {
                    return !!e(n) ||
                    (r.addIssue('function' == typeof t ? t(n, r) : t), !1)
                  }
                )
              )
            }
          },
          {
            key: '_refinement',
            value: function (e) {
              return new Ev({
                schema: this,
                typeName: Nv.ZodEffects,
                effect: {
                  type: 'refinement',
                  refinement: e
                }
              })
            }
          },
          {
            key: 'superRefine',
            value: function (e) {
              return this._refinement(e)
            }
          },
          {
            key: 'optional',
            value: function () {
              return gv.create(this, this._def)
            }
          },
          {
            key: 'nullable',
            value: function () {
              return Cv.create(this, this._def)
            }
          },
          {
            key: 'nullish',
            value: function () {
              return this.nullable().optional()
            }
          },
          {
            key: 'array',
            value: function () {
              return $f.create(this, this._def)
            }
          },
          {
            key: 'promise',
            value: function () {
              return yv.create(this, this._def)
            }
          },
          {
            key: 'or',
            value: function (e) {
              return nv.create([this,
              e], this._def)
            }
          },
          {
            key: 'and',
            value: function (e) {
              return ov.create(this, e, this._def)
            }
          },
          {
            key: 'transform',
            value: function (e) {
              return new Ev(
                jh(
                  jh({
                  }, Tf(this._def)),
                  {
                  },
                  {
                    schema: this,
                    typeName: Nv.ZodEffects,
                    effect: {
                      type: 'transform',
                      transform: e
                    }
                  }
                )
              )
            }
          },
          {
            key: 'default',
            value: function (e) {
              var t = 'function' == typeof e ? e : function () {
                return e
              };
              return new bv(
                jh(
                  jh({
                  }, Tf(this._def)),
                  {
                  },
                  {
                    innerType: this,
                    defaultValue: t,
                    typeName: Nv.ZodDefault
                  }
                )
              )
            }
          },
          {
            key: 'brand',
            value: function () {
              return new Sv(jh({
                typeName: Nv.ZodBranded,
                type: this
              }, Tf(this._def)))
            }
          },
          {
            key: 'catch',
            value: function (e) {
              var t = 'function' == typeof e ? e : function () {
                return e
              };
              return new Iv(
                jh(
                  jh({
                  }, Tf(this._def)),
                  {
                  },
                  {
                    innerType: this,
                    catchValue: t,
                    typeName: Nv.ZodCatch
                  }
                )
              )
            }
          },
          {
            key: 'describe',
            value: function (e) {
              return new (0, this.constructor) (jh(jh({
              }, this._def), {
              }, {
                description: e
              }))
            }
          },
          {
            key: 'pipe',
            value: function (e) {
              return _v.create(this, e)
            }
          },
          {
            key: 'readonly',
            value: function () {
              return Av.create(this)
            }
          },
          {
            key: 'isOptional',
            value: function () {
              return this.safeParse(void 0).success
            }
          },
          {
            key: 'isNullable',
            value: function () {
              return this.safeParse(null).success
            }
          },
          {
            key: 'description',
            get: function () {
              return this._def.description
            }
          }
        ]
      ),
      e
    }(),
    Af = /^c[^\s-]{8,}$/i,
    Nf = /^[0-9a-z]+$/,
    Lf = /^[0-9A-HJKMNP-TV-Z]{26}$/,
    Df = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    wf = /^[a-z0-9_-]{21}$/i,
    Of = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    kf = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Rf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Pf = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    Mf = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    xf = '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
    Vf = new RegExp('^'.concat(xf, '$'));
    function Hf(e) {
      var t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
      return e.precision ? t = ''.concat(t, '\\.\\d{').concat(e.precision, '}') : null == e.precision &&
      (t = ''.concat(t, '(\\.\\d+)?')),
      t
    }
    function Wf(e) {
      var t = ''.concat(xf, 'T').concat(Hf(e)),
      n = [];
      return n.push(e.local ? 'Z?' : 'Z'),
      e.offset &&
      n.push('([+-]\\d{2}:?\\d{2})'),
      t = ''.concat(t, '(').concat(n.join('|'), ')'),
      new RegExp('^'.concat(t, '$'))
    }
    function Uf(e, t) {
      return !('v4' !== t && t || !Rf.test(e)) ||
      !('v6' !== t && t || !Pf.test(e))
    }
    var Gf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (
                this._def.coerce &&
                (e.data = String(e.data)),
                this._getType(e) !== Qh.string
              ) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.string,
                    received: t.parsedType
                  }
                ),
                pf
              }
              var n,
              r = new df,
              a = void 0,
              i = Kh(this._def.checks);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  if ('min' === o.kind) e.data.length < o.value &&
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.too_small,
                        minimum: o.value,
                        type: 'string',
                        inclusive: !0,
                        exact: !1,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('max' === o.kind) e.data.length > o.value &&
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.too_big,
                        maximum: o.value,
                        type: 'string',
                        inclusive: !0,
                        exact: !1,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('length' === o.kind) {
                    var l = e.data.length > o.value,
                    c = e.data.length < o.value;
                    (l || c) &&
                    (
                      a = this._getOrReturnCtx(e, a),
                      l ? lf(
                        a,
                        {
                          code: ef.too_big,
                          maximum: o.value,
                          type: 'string',
                          inclusive: !0,
                          exact: !0,
                          message: o.message
                        }
                      ) : c &&
                      lf(
                        a,
                        {
                          code: ef.too_small,
                          minimum: o.value,
                          type: 'string',
                          inclusive: !0,
                          exact: !0,
                          message: o.message
                        }
                      ),
                      r.dirty()
                    )
                  } else if ('email' === o.kind) kf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'email',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('emoji' === o.kind) Sf ||
                  (
                    Sf = new RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u')
                  ),
                  Sf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'emoji',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('uuid' === o.kind) Df.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'uuid',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('nanoid' === o.kind) wf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'nanoid',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('cuid' === o.kind) Af.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'cuid',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('cuid2' === o.kind) Nf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'cuid2',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('ulid' === o.kind) Lf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'ulid',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('url' === o.kind) try {
                    new URL(e.data)
                  } catch (t) {
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'url',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  } else if ('regex' === o.kind) {
                    o.regex.lastIndex = 0,
                    o.regex.test(e.data) ||
                    (
                      lf(
                        a = this._getOrReturnCtx(e, a),
                        {
                          validation: 'regex',
                          code: ef.invalid_string,
                          message: o.message
                        }
                      ),
                      r.dirty()
                    )
                  } else if ('trim' === o.kind) e.data = e.data.trim();
                   else if ('includes' === o.kind) e.data.includes(o.value, o.position) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.invalid_string,
                        validation: {
                          includes: o.value,
                          position: o.position
                        },
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('toLowerCase' === o.kind) e.data = e.data.toLowerCase();
                   else if ('toUpperCase' === o.kind) e.data = e.data.toUpperCase();
                   else if ('startsWith' === o.kind) e.data.startsWith(o.value) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.invalid_string,
                        validation: {
                          startsWith: o.value
                        },
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('endsWith' === o.kind) e.data.endsWith(o.value) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.invalid_string,
                        validation: {
                          endsWith: o.value
                        },
                        message: o.message
                      }
                    ),
                    r.dirty()
                  );
                   else if ('datetime' === o.kind) {
                    Wf(o).test(e.data) ||
                    (
                      lf(
                        a = this._getOrReturnCtx(e, a),
                        {
                          code: ef.invalid_string,
                          validation: 'datetime',
                          message: o.message
                        }
                      ),
                      r.dirty()
                    )
                  } else if ('date' === o.kind) {
                    Vf.test(e.data) ||
                    (
                      lf(
                        a = this._getOrReturnCtx(e, a),
                        {
                          code: ef.invalid_string,
                          validation: 'date',
                          message: o.message
                        }
                      ),
                      r.dirty()
                    )
                  } else if ('time' === o.kind) {
                    new RegExp('^'.concat(Hf(o), '$')).test(e.data) ||
                    (
                      lf(
                        a = this._getOrReturnCtx(e, a),
                        {
                          code: ef.invalid_string,
                          validation: 'time',
                          message: o.message
                        }
                      ),
                      r.dirty()
                    )
                  } else 'duration' === o.kind ? Of.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'duration',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  ) : 'ip' === o.kind ? Uf(e.data, o.version) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'ip',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  ) : 'base64' === o.kind ? Mf.test(e.data) ||
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        validation: 'base64',
                        code: ef.invalid_string,
                        message: o.message
                      }
                    ),
                    r.dirty()
                  ) : wp.assertNever(o)
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              return {
                status: r.value,
                value: e.data
              }
            }
          },
          {
            key: '_regex',
            value: function (e, t, n) {
              return this.refinement(
                (function (t) {
                  return e.test(t)
                }),
                jh({
                  validation: t,
                  code: ef.invalid_string
                }, cf.errToObj(n))
              )
            }
          },
          {
            key: '_addCheck',
            value: function (e) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      e
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'email',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'email'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'url',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'url'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'emoji',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'emoji'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'uuid',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'uuid'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'nanoid',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'nanoid'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'cuid',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'cuid'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'cuid2',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'cuid2'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'ulid',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'ulid'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'base64',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'base64'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'ip',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'ip'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'datetime',
            value: function (e) {
              var t,
              n;
              return 'string' == typeof e ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                local: !1,
                message: e
              }) : this._addCheck(
                jh({
                  kind: 'datetime',
                  precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                  offset: null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                  local: null !== (n = null == e ? void 0 : e.local) &&
                  void 0 !== n &&
                  n
                }, cf.errToObj(null == e ? void 0 : e.message))
              )
            }
          },
          {
            key: 'date',
            value: function (e) {
              return this._addCheck({
                kind: 'date',
                message: e
              })
            }
          },
          {
            key: 'time',
            value: function (e) {
              return 'string' == typeof e ? this._addCheck({
                kind: 'time',
                precision: null,
                message: e
              }) : this._addCheck(
                jh({
                  kind: 'time',
                  precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision
                }, cf.errToObj(null == e ? void 0 : e.message))
              )
            }
          },
          {
            key: 'duration',
            value: function (e) {
              return this._addCheck(jh({
                kind: 'duration'
              }, cf.errToObj(e)))
            }
          },
          {
            key: 'regex',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'regex',
                regex: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'includes',
            value: function (e, t) {
              return this._addCheck(
                jh({
                  kind: 'includes',
                  value: e,
                  position: null == t ? void 0 : t.position
                }, cf.errToObj(null == t ? void 0 : t.message))
              )
            }
          },
          {
            key: 'startsWith',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'startsWith',
                value: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'endsWith',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'endsWith',
                value: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'min',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'min',
                value: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'max',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'max',
                value: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'length',
            value: function (e, t) {
              return this._addCheck(jh({
                kind: 'length',
                value: e
              }, cf.errToObj(t)))
            }
          },
          {
            key: 'nonempty',
            value: function (e) {
              return this.min(1, cf.errToObj(e))
            }
          },
          {
            key: 'trim',
            value: function () {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      {
                        kind: 'trim'
                      }
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'toLowerCase',
            value: function () {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      {
                        kind: 'toLowerCase'
                      }
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'toUpperCase',
            value: function () {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      {
                        kind: 'toUpperCase'
                      }
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'isDatetime',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'datetime' === e.kind
              }))
            }
          },
          {
            key: 'isDate',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'date' === e.kind
              }))
            }
          },
          {
            key: 'isTime',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'time' === e.kind
              }))
            }
          },
          {
            key: 'isDuration',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'duration' === e.kind
              }))
            }
          },
          {
            key: 'isEmail',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'email' === e.kind
              }))
            }
          },
          {
            key: 'isURL',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'url' === e.kind
              }))
            }
          },
          {
            key: 'isEmoji',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'emoji' === e.kind
              }))
            }
          },
          {
            key: 'isUUID',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'uuid' === e.kind
              }))
            }
          },
          {
            key: 'isNANOID',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'nanoid' === e.kind
              }))
            }
          },
          {
            key: 'isCUID',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'cuid' === e.kind
              }))
            }
          },
          {
            key: 'isCUID2',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'cuid2' === e.kind
              }))
            }
          },
          {
            key: 'isULID',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'ulid' === e.kind
              }))
            }
          },
          {
            key: 'isIP',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'ip' === e.kind
              }))
            }
          },
          {
            key: 'isBase64',
            get: function () {
              return !!this._def.checks.find((function (e) {
                return 'base64' === e.kind
              }))
            }
          },
          {
            key: 'minLength',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'min' === r.kind &&
                  (null === t || r.value > t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'maxLength',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'max' === r.kind &&
                  (null === t || r.value < t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          }
        ]
      ),
      n
    }(_f);
    Gf.create = function (e) {
      var t;
      return new Gf(
        jh({
          checks: [],
          typeName: Nv.ZodString,
          coerce: null !== (t = null == e ? void 0 : e.coerce) &&
          void 0 !== t &&
          t
        }, Tf(e))
      )
    };
    var zf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments)).min = e.gte,
        e.max = e.lte,
        e.step = e.multipleOf,
        e
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (
                this._def.coerce &&
                (e.data = Number(e.data)),
                this._getType(e) !== Qh.number
              ) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.number,
                    received: t.parsedType
                  }
                ),
                pf
              }
              var n,
              r,
              a,
              i,
              o,
              l,
              c = void 0,
              u = new df,
              s = Kh(this._def.checks);
              try {
                for (s.s(); !(n = s.n()).done; ) {
                  var d = n.value;
                  if ('int' === d.kind) wp.isInteger(e.data) ||
                  (
                    lf(
                      c = this._getOrReturnCtx(e, c),
                      {
                        code: ef.invalid_type,
                        expected: 'integer',
                        received: 'float',
                        message: d.message
                      }
                    ),
                    u.dirty()
                  );
                   else if ('min' === d.kind) {
                    (d.inclusive ? e.data < d.value : e.data <= d.value) &&
                    (
                      lf(
                        c = this._getOrReturnCtx(e, c),
                        {
                          code: ef.too_small,
                          minimum: d.value,
                          type: 'number',
                          inclusive: d.inclusive,
                          exact: !1,
                          message: d.message
                        }
                      ),
                      u.dirty()
                    )
                  } else if ('max' === d.kind) {
                    (d.inclusive ? e.data > d.value : e.data >= d.value) &&
                    (
                      lf(
                        c = this._getOrReturnCtx(e, c),
                        {
                          code: ef.too_big,
                          maximum: d.value,
                          type: 'number',
                          inclusive: d.inclusive,
                          exact: !1,
                          message: d.message
                        }
                      ),
                      u.dirty()
                    )
                  } else 'multipleOf' === d.kind ? 0 != (
                    r = e.data,
                    a = d.value,
                    i = void 0,
                    o = void 0,
                    l = void 0,
                    i = (r.toString().split('.') [1] || '').length,
                    o = (a.toString().split('.') [1] || '').length,
                    l = i > o ? i : o,
                    parseInt(r.toFixed(l).replace('.', '')) % parseInt(a.toFixed(l).replace('.', '')) / Math.pow(10, l)
                  ) &&
                  (
                    lf(
                      c = this._getOrReturnCtx(e, c),
                      {
                        code: ef.not_multiple_of,
                        multipleOf: d.value,
                        message: d.message
                      }
                    ),
                    u.dirty()
                  ) : 'finite' === d.kind ? Number.isFinite(e.data) ||
                  (
                    lf(
                      c = this._getOrReturnCtx(e, c),
                      {
                        code: ef.not_finite,
                        message: d.message
                      }
                    ),
                    u.dirty()
                  ) : wp.assertNever(d)
                }
              } catch (e) {
                s.e(e)
              } finally {
                s.f()
              }
              return {
                status: u.value,
                value: e.data
              }
            }
          },
          {
            key: 'gte',
            value: function (e, t) {
              return this.setLimit('min', e, !0, cf.toString(t))
            }
          },
          {
            key: 'gt',
            value: function (e, t) {
              return this.setLimit('min', e, !1, cf.toString(t))
            }
          },
          {
            key: 'lte',
            value: function (e, t) {
              return this.setLimit('max', e, !0, cf.toString(t))
            }
          },
          {
            key: 'lt',
            value: function (e, t) {
              return this.setLimit('max', e, !1, cf.toString(t))
            }
          },
          {
            key: 'setLimit',
            value: function (e, t, r, a) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(
                      kh(this._def.checks),
                      [
                        {
                          kind: e,
                          value: t,
                          inclusive: r,
                          message: cf.toString(a)
                        }
                      ]
                    )
                  }
                )
              )
            }
          },
          {
            key: '_addCheck',
            value: function (e) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      e
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'int',
            value: function (e) {
              return this._addCheck({
                kind: 'int',
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'positive',
            value: function (e) {
              return this._addCheck({
                kind: 'min',
                value: 0,
                inclusive: !1,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'negative',
            value: function (e) {
              return this._addCheck({
                kind: 'max',
                value: 0,
                inclusive: !1,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'nonpositive',
            value: function (e) {
              return this._addCheck({
                kind: 'max',
                value: 0,
                inclusive: !0,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'nonnegative',
            value: function (e) {
              return this._addCheck({
                kind: 'min',
                value: 0,
                inclusive: !0,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'multipleOf',
            value: function (e, t) {
              return this._addCheck({
                kind: 'multipleOf',
                value: e,
                message: cf.toString(t)
              })
            }
          },
          {
            key: 'finite',
            value: function (e) {
              return this._addCheck({
                kind: 'finite',
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'safe',
            value: function (e) {
              return this._addCheck({
                kind: 'min',
                inclusive: !0,
                value: Number.MIN_SAFE_INTEGER,
                message: cf.toString(e)
              })._addCheck({
                kind: 'max',
                inclusive: !0,
                value: Number.MAX_SAFE_INTEGER,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'minValue',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'min' === r.kind &&
                  (null === t || r.value > t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'maxValue',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'max' === r.kind &&
                  (null === t || r.value < t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'isInt',
            get: function () {
              return !!this._def.checks.find(
                (
                  function (e) {
                    return 'int' === e.kind ||
                    'multipleOf' === e.kind &&
                    wp.isInteger(e.value)
                  }
                )
              )
            }
          },
          {
            key: 'isFinite',
            get: function () {
              var e,
              t = null,
              n = null,
              r = Kh(this._def.checks);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var a = e.value;
                  if ('finite' === a.kind || 'int' === a.kind || 'multipleOf' === a.kind) return !0;
                  'min' === a.kind ? (null === n || a.value > n) &&
                  (n = a.value) : 'max' === a.kind &&
                  (null === t || a.value < t) &&
                  (t = a.value)
                }
              } catch (e) {
                r.e(e)
              } finally {
                r.f()
              }
              return Number.isFinite(n) &&
              Number.isFinite(t)
            }
          }
        ]
      ),
      n
    }(_f);
    zf.create = function (e) {
      return new zf(
        jh({
          checks: [],
          typeName: Nv.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) ||
          !1
        }, Tf(e))
      )
    };
    var Ff = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments)).min = e.gte,
        e.max = e.lte,
        e
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (
                this._def.coerce &&
                (e.data = BigInt(e.data)),
                this._getType(e) !== Qh.bigint
              ) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.bigint,
                    received: t.parsedType
                  }
                ),
                pf
              }
              var n,
              r = void 0,
              a = new df,
              i = Kh(this._def.checks);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  if ('min' === o.kind) (o.inclusive ? e.data < o.value : e.data <= o.value) &&
                  (
                    lf(
                      r = this._getOrReturnCtx(e, r),
                      {
                        code: ef.too_small,
                        type: 'bigint',
                        minimum: o.value,
                        inclusive: o.inclusive,
                        message: o.message
                      }
                    ),
                    a.dirty()
                  );
                   else if ('max' === o.kind) {
                    (o.inclusive ? e.data > o.value : e.data >= o.value) &&
                    (
                      lf(
                        r = this._getOrReturnCtx(e, r),
                        {
                          code: ef.too_big,
                          type: 'bigint',
                          maximum: o.value,
                          inclusive: o.inclusive,
                          message: o.message
                        }
                      ),
                      a.dirty()
                    )
                  } else 'multipleOf' === o.kind ? e.data % o.value !== BigInt(0) &&
                  (
                    lf(
                      r = this._getOrReturnCtx(e, r),
                      {
                        code: ef.not_multiple_of,
                        multipleOf: o.value,
                        message: o.message
                      }
                    ),
                    a.dirty()
                  ) : wp.assertNever(o)
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              return {
                status: a.value,
                value: e.data
              }
            }
          },
          {
            key: 'gte',
            value: function (e, t) {
              return this.setLimit('min', e, !0, cf.toString(t))
            }
          },
          {
            key: 'gt',
            value: function (e, t) {
              return this.setLimit('min', e, !1, cf.toString(t))
            }
          },
          {
            key: 'lte',
            value: function (e, t) {
              return this.setLimit('max', e, !0, cf.toString(t))
            }
          },
          {
            key: 'lt',
            value: function (e, t) {
              return this.setLimit('max', e, !1, cf.toString(t))
            }
          },
          {
            key: 'setLimit',
            value: function (e, t, r, a) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(
                      kh(this._def.checks),
                      [
                        {
                          kind: e,
                          value: t,
                          inclusive: r,
                          message: cf.toString(a)
                        }
                      ]
                    )
                  }
                )
              )
            }
          },
          {
            key: '_addCheck',
            value: function (e) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      e
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'positive',
            value: function (e) {
              return this._addCheck({
                kind: 'min',
                value: BigInt(0),
                inclusive: !1,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'negative',
            value: function (e) {
              return this._addCheck({
                kind: 'max',
                value: BigInt(0),
                inclusive: !1,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'nonpositive',
            value: function (e) {
              return this._addCheck({
                kind: 'max',
                value: BigInt(0),
                inclusive: !0,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'nonnegative',
            value: function (e) {
              return this._addCheck({
                kind: 'min',
                value: BigInt(0),
                inclusive: !0,
                message: cf.toString(e)
              })
            }
          },
          {
            key: 'multipleOf',
            value: function (e, t) {
              return this._addCheck({
                kind: 'multipleOf',
                value: e,
                message: cf.toString(t)
              })
            }
          },
          {
            key: 'minValue',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'min' === r.kind &&
                  (null === t || r.value > t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'maxValue',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'max' === r.kind &&
                  (null === t || r.value < t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          }
        ]
      ),
      n
    }(_f);
    Ff.create = function (e) {
      var t;
      return new Ff(
        jh({
          checks: [],
          typeName: Nv.ZodBigInt,
          coerce: null !== (t = null == e ? void 0 : e.coerce) &&
          void 0 !== t &&
          t
        }, Tf(e))
      )
    };
    var Bf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (
                this._def.coerce &&
                (e.data = Boolean(e.data)),
                this._getType(e) !== Qh.boolean
              ) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.boolean,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return ff(e.data)
            }
          }
        ]
      ),
      n
    }(_f);
    Bf.create = function (e) {
      return new Bf(
        jh({
          typeName: Nv.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) ||
          !1
        }, Tf(e))
      )
    };
    var qf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (
                this._def.coerce &&
                (e.data = new Date(e.data)),
                this._getType(e) !== Qh.date
              ) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.date,
                    received: t.parsedType
                  }
                ),
                pf
              }
              if (isNaN(e.data.getTime())) return lf(this._getOrReturnCtx(e), {
                code: ef.invalid_date
              }),
              pf;
              var n,
              r = new df,
              a = void 0,
              i = Kh(this._def.checks);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = n.value;
                  'min' === o.kind ? e.data.getTime() < o.value &&
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.too_small,
                        message: o.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: o.value,
                        type: 'date'
                      }
                    ),
                    r.dirty()
                  ) : 'max' === o.kind ? e.data.getTime() > o.value &&
                  (
                    lf(
                      a = this._getOrReturnCtx(e, a),
                      {
                        code: ef.too_big,
                        message: o.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: o.value,
                        type: 'date'
                      }
                    ),
                    r.dirty()
                  ) : wp.assertNever(o)
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              return {
                status: r.value,
                value: new Date(e.data.getTime())
              }
            }
          },
          {
            key: '_addCheck',
            value: function (e) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    checks: [].concat(kh(this._def.checks), [
                      e
                    ])
                  }
                )
              )
            }
          },
          {
            key: 'min',
            value: function (e, t) {
              return this._addCheck({
                kind: 'min',
                value: e.getTime(),
                message: cf.toString(t)
              })
            }
          },
          {
            key: 'max',
            value: function (e, t) {
              return this._addCheck({
                kind: 'max',
                value: e.getTime(),
                message: cf.toString(t)
              })
            }
          },
          {
            key: 'minDate',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'min' === r.kind &&
                  (null === t || r.value > t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return null != t ? new Date(t) : null
            }
          },
          {
            key: 'maxDate',
            get: function () {
              var e,
              t = null,
              n = Kh(this._def.checks);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  'max' === r.kind &&
                  (null === t || r.value < t) &&
                  (t = r.value)
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return null != t ? new Date(t) : null
            }
          }
        ]
      ),
      n
    }(_f);
    qf.create = function (e) {
      return new qf(
        jh({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) ||
          !1,
          typeName: Nv.ZodDate
        }, Tf(e))
      )
    };
    var Zf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.symbol) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.symbol,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return ff(e.data)
            }
          }
        ]
      ),
      n
    }(_f);
    Zf.create = function (e) {
      return new Zf(jh({
        typeName: Nv.ZodSymbol
      }, Tf(e)))
    };
    var jf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.undefined) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.undefined,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return ff(e.data)
            }
          }
        ]
      ),
      n
    }(_f);
    jf.create = function (e) {
      return new jf(jh({
        typeName: Nv.ZodUndefined
      }, Tf(e)))
    };
    var Yf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.null) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.null,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return ff(e.data)
            }
          }
        ]
      ),
      n
    }(_f);
    Yf.create = function (e) {
      return new Yf(jh({
        typeName: Nv.ZodNull
      }, Tf(e)))
    };
    var Kf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments))._any = !0,
        e
      }
      return Mh(n, [
        {
          key: '_parse',
          value: function (e) {
            return ff(e.data)
          }
        }
      ]),
      n
    }(_f);
    Kf.create = function (e) {
      return new Kf(jh({
        typeName: Nv.ZodAny
      }, Tf(e)))
    };
    var Jf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments))._unknown = !0,
        e
      }
      return Mh(n, [
        {
          key: '_parse',
          value: function (e) {
            return ff(e.data)
          }
        }
      ]),
      n
    }(_f);
    Jf.create = function (e) {
      return new Jf(jh({
        typeName: Nv.ZodUnknown
      }, Tf(e)))
    };
    var Xf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._getOrReturnCtx(e);
              return lf(
                t,
                {
                  code: ef.invalid_type,
                  expected: Qh.never,
                  received: t.parsedType
                }
              ),
              pf
            }
          }
        ]
      ),
      n
    }(_f);
    Xf.create = function (e) {
      return new Xf(jh({
        typeName: Nv.ZodNever
      }, Tf(e)))
    };
    var Qf = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.undefined) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.void,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return ff(e.data)
            }
          }
        ]
      ),
      n
    }(_f);
    Qf.create = function (e) {
      return new Qf(jh({
        typeName: Nv.ZodVoid
      }, Tf(e)))
    };
    var $f = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e),
              n = t.ctx,
              r = t.status,
              a = this._def;
              if (n.parsedType !== Qh.array) return lf(
                n,
                {
                  code: ef.invalid_type,
                  expected: Qh.array,
                  received: n.parsedType
                }
              ),
              pf;
              if (null !== a.exactLength) {
                var i = n.data.length > a.exactLength.value,
                o = n.data.length < a.exactLength.value;
                (i || o) &&
                (
                  lf(
                    n,
                    {
                      code: i ? ef.too_big : ef.too_small,
                      minimum: o ? a.exactLength.value : void 0,
                      maximum: i ? a.exactLength.value : void 0,
                      type: 'array',
                      inclusive: !0,
                      exact: !0,
                      message: a.exactLength.message
                    }
                  ),
                  r.dirty()
                )
              }
              if (
                null !== a.minLength &&
                n.data.length < a.minLength.value &&
                (
                  lf(
                    n,
                    {
                      code: ef.too_small,
                      minimum: a.minLength.value,
                      type: 'array',
                      inclusive: !0,
                      exact: !1,
                      message: a.minLength.message
                    }
                  ),
                  r.dirty()
                ),
                null !== a.maxLength &&
                n.data.length > a.maxLength.value &&
                (
                  lf(
                    n,
                    {
                      code: ef.too_big,
                      maximum: a.maxLength.value,
                      type: 'array',
                      inclusive: !0,
                      exact: !1,
                      message: a.maxLength.message
                    }
                  ),
                  r.dirty()
                ),
                n.common.async
              ) return Promise.all(
                kh(n.data).map(
                  (function (e, t) {
                    return a.type._parseAsync(new bf(n, e, n.path, t))
                  })
                )
              ).then((function (e) {
                return df.mergeArray(r, e)
              }));
              var l = kh(n.data).map(
                (function (e, t) {
                  return a.type._parseSync(new bf(n, e, n.path, t))
                })
              );
              return df.mergeArray(r, l)
            }
          },
          {
            key: 'min',
            value: function (e, t) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    minLength: {
                      value: e,
                      message: cf.toString(t)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'max',
            value: function (e, t) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    maxLength: {
                      value: e,
                      message: cf.toString(t)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'length',
            value: function (e, t) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    exactLength: {
                      value: e,
                      message: cf.toString(t)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'nonempty',
            value: function (e) {
              return this.min(1, e)
            }
          },
          {
            key: 'element',
            get: function () {
              return this._def.type
            }
          }
        ]
      ),
      n
    }(_f);
    function ev(e) {
      if (e instanceof tv) {
        var t = {};
        for (var n in e.shape) {
          var r = e.shape[n];
          t[n] = gv.create(ev(r))
        }
        return new tv(jh(jh({
        }, e._def), {
        }, {
          shape: function () {
            return t
          }
        }))
      }
      return e instanceof $f ? new $f(jh(jh({
      }, e._def), {
      }, {
        type: ev(e.element)
      })) : e instanceof gv ? gv.create(ev(e.unwrap())) : e instanceof Cv ? Cv.create(ev(e.unwrap())) : e instanceof lv ? lv.create(e.items.map((function (e) {
        return ev(e)
      }))) : e
    }
    $f.create = function (e, t) {
      return new $f(
        jh({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: Nv.ZodArray
        }, Tf(t))
      )
    };
    var tv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments))._cached = null,
        e.nonstrict = e.passthrough,
        e.augment = e.extend,
        e
      }
      return Mh(
        n,
        [
          {
            key: '_getCached',
            value: function () {
              if (null !== this._cached) return this._cached;
              var e = this._def.shape(),
              t = wp.objectKeys(e);
              return this._cached = {
                shape: e,
                keys: t
              }
            }
          },
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.object) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.object,
                    received: t.parsedType
                  }
                ),
                pf
              }
              var n = this._processInputParams(e),
              r = n.status,
              a = n.ctx,
              i = this._getCached(),
              o = i.shape,
              l = i.keys,
              c = [];
              if (
                !(
                  this._def.catchall instanceof Xf &&
                  'strip' === this._def.unknownKeys
                )
              ) for (var u in a.data) l.includes(u) ||
              c.push(u);
              var s,
              d = [],
              p = Kh(l);
              try {
                for (p.s(); !(s = p.n()).done; ) {
                  var h = s.value,
                  f = o[h],
                  v = a.data[h];
                  d.push({
                    key: {
                      status: 'valid',
                      value: h
                    },
                    value: f._parse(new bf(a, v, a.path, h)),
                    alwaysSet: h in a.data
                  })
                }
              } catch (e) {
                p.e(e)
              } finally {
                p.f()
              }
              if (this._def.catchall instanceof Xf) {
                var m = this._def.unknownKeys;
                if ('passthrough' === m) {
                  var y,
                  E = Kh(c);
                  try {
                    for (E.s(); !(y = E.n()).done; ) {
                      var g = y.value;
                      d.push({
                        key: {
                          status: 'valid',
                          value: g
                        },
                        value: {
                          status: 'valid',
                          value: a.data[g]
                        }
                      })
                    }
                  } catch (e) {
                    E.e(e)
                  } finally {
                    E.f()
                  }
                } else if ('strict' === m) c.length > 0 &&
                (lf(a, {
                  code: ef.unrecognized_keys,
                  keys: c
                }), r.dirty());
                 else if ('strip' !== m) throw new Error('Internal ZodObject error: invalid unknownKeys value.')
              } else {
                var C,
                b = this._def.catchall,
                I = Kh(c);
                try {
                  for (I.s(); !(C = I.n()).done; ) {
                    var T = C.value,
                    S = a.data[T];
                    d.push({
                      key: {
                        status: 'valid',
                        value: T
                      },
                      value: b._parse(new bf(a, S, a.path, T)),
                      alwaysSet: T in a.data
                    })
                  }
                } catch (e) {
                  I.e(e)
                } finally {
                  I.f()
                }
              }
              return a.common.async ? Promise.resolve().then(
                Oh(
                  regeneratorRuntime.mark(
                    (
                      function e() {
                        var t,
                        n,
                        r,
                        a,
                        i,
                        o;
                        return regeneratorRuntime.wrap(
                          (
                            function (e) {
                              for (; ; ) switch (e.prev = e.next) {
                                case 0:
                                  t = [],
                                  n = Kh(d),
                                  e.prev = 2,
                                  n.s();
                                case 4:
                                  if ((r = n.n()).done) {
                                    e.next = 15;
                                    break
                                  }
                                  return a = r.value,
                                  e.next = 8,
                                  a.key;
                                case 8:
                                  return i = e.sent,
                                  e.next = 11,
                                  a.value;
                                case 11:
                                  o = e.sent,
                                  t.push({
                                    key: i,
                                    value: o,
                                    alwaysSet: a.alwaysSet
                                  });
                                case 13:
                                  e.next = 4;
                                  break;
                                case 15:
                                  e.next = 20;
                                  break;
                                case 17:
                                  e.prev = 17,
                                  e.t0 = e.catch(2),
                                  n.e(e.t0);
                                case 20:
                                  return e.prev = 20,
                                  n.f(),
                                  e.finish(20);
                                case 23:
                                  return e.abrupt('return', t);
                                case 24:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          ),
                          e,
                          null,
                          [
                            [2,
                            17,
                            20,
                            23]
                          ]
                        )
                      }
                    )
                  )
                )
              ).then((function (e) {
                return df.mergeObjectSync(r, e)
              })) : df.mergeObjectSync(r, d)
            }
          },
          {
            key: 'strict',
            value: function (e) {
              var t = this;
              return cf.errToObj,
              new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    unknownKeys: 'strict'
                  },
                  void 0 !== e ? {
                    errorMap: function (n, r) {
                      var a,
                      i,
                      o,
                      l,
                      c = null !== (
                        o = null === (i = (a = t._def).errorMap) ||
                        void 0 === i ? void 0 : i.call(a, n, r).message
                      ) &&
                      void 0 !== o ? o : r.defaultError;
                      return 'unrecognized_keys' === n.code ? {
                        message: null !== (l = cf.errToObj(e).message) &&
                        void 0 !== l ? l : c
                      }
                       : {
                        message: c
                      }
                    }
                  }
                   : {
                  }
                )
              )
            }
          },
          {
            key: 'strip',
            value: function () {
              return new n(jh(jh({
              }, this._def), {
              }, {
                unknownKeys: 'strip'
              }))
            }
          },
          {
            key: 'passthrough',
            value: function () {
              return new n(jh(jh({
              }, this._def), {
              }, {
                unknownKeys: 'passthrough'
              }))
            }
          },
          {
            key: 'extend',
            value: function (e) {
              var t = this;
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    shape: function () {
                      return jh(jh({
                      }, t._def.shape()), e)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'merge',
            value: function (e) {
              var t = this;
              return new n({
                unknownKeys: e._def.unknownKeys,
                catchall: e._def.catchall,
                shape: function () {
                  return jh(jh({
                  }, t._def.shape()), e._def.shape())
                },
                typeName: Nv.ZodObject
              })
            }
          },
          {
            key: 'setKey',
            value: function (e, t) {
              return this.augment(Yh({
              }, e, t))
            }
          },
          {
            key: 'catchall',
            value: function (e) {
              return new n(jh(jh({
              }, this._def), {
              }, {
                catchall: e
              }))
            }
          },
          {
            key: 'pick',
            value: function (e) {
              var t = this,
              r = {};
              return wp.objectKeys(e).forEach((function (n) {
                e[n] &&
                t.shape[n] &&
                (r[n] = t.shape[n])
              })),
              new n(jh(jh({
              }, this._def), {
              }, {
                shape: function () {
                  return r
                }
              }))
            }
          },
          {
            key: 'omit',
            value: function (e) {
              var t = this,
              r = {};
              return wp.objectKeys(this.shape).forEach((function (n) {
                e[n] ||
                (r[n] = t.shape[n])
              })),
              new n(jh(jh({
              }, this._def), {
              }, {
                shape: function () {
                  return r
                }
              }))
            }
          },
          {
            key: 'deepPartial',
            value: function () {
              return ev(this)
            }
          },
          {
            key: 'partial',
            value: function (e) {
              var t = this,
              r = {};
              return wp.objectKeys(this.shape).forEach(
                (
                  function (n) {
                    var a = t.shape[n];
                    e &&
                    !e[n] ? r[n] = a : r[n] = a.optional()
                  }
                )
              ),
              new n(jh(jh({
              }, this._def), {
              }, {
                shape: function () {
                  return r
                }
              }))
            }
          },
          {
            key: 'required',
            value: function (e) {
              var t = this,
              r = {};
              return wp.objectKeys(this.shape).forEach(
                (
                  function (n) {
                    if (e && !e[n]) r[n] = t.shape[n];
                     else {
                      for (var a = t.shape[n]; a instanceof gv; ) a = a._def.innerType;
                      r[n] = a
                    }
                  }
                )
              ),
              new n(jh(jh({
              }, this._def), {
              }, {
                shape: function () {
                  return r
                }
              }))
            }
          },
          {
            key: 'keyof',
            value: function () {
              return fv(wp.objectKeys(this.shape))
            }
          },
          {
            key: 'shape',
            get: function () {
              return this._def.shape()
            }
          }
        ]
      ),
      n
    }(_f);
    tv.create = function (e, t) {
      return new tv(
        jh({
          shape: function () {
            return e
          },
          unknownKeys: 'strip',
          catchall: Xf.create(),
          typeName: Nv.ZodObject
        }, Tf(t))
      )
    },
    tv.strictCreate = function (e, t) {
      return new tv(
        jh({
          shape: function () {
            return e
          },
          unknownKeys: 'strict',
          catchall: Xf.create(),
          typeName: Nv.ZodObject
        }, Tf(t))
      )
    },
    tv.lazycreate = function (e, t) {
      return new tv(
        jh({
          shape: e,
          unknownKeys: 'strip',
          catchall: Xf.create(),
          typeName: Nv.ZodObject
        }, Tf(t))
      )
    };
    var nv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx,
              n = this._def.options;
              if (t.common.async) return Promise.all(
                n.map(
                  function () {
                    var e = Oh(
                      regeneratorRuntime.mark(
                        (
                          function e(n) {
                            var r;
                            return regeneratorRuntime.wrap(
                              (
                                function (e) {
                                  for (; ; ) switch (e.prev = e.next) {
                                    case 0:
                                      return r = jh(
                                        jh({
                                        }, t),
                                        {
                                        },
                                        {
                                          common: jh(jh({
                                          }, t.common), {
                                          }, {
                                            issues: []
                                          }),
                                          parent: null
                                        }
                                      ),
                                      e.next = 3,
                                      n._parseAsync({
                                        data: t.data,
                                        path: t.path,
                                        parent: r
                                      });
                                    case 3:
                                      return e.t0 = e.sent,
                                      e.t1 = r,
                                      e.abrupt('return', {
                                        result: e.t0,
                                        ctx: e.t1
                                      });
                                    case 6:
                                    case 'end':
                                      return e.stop()
                                  }
                                }
                              ),
                              e
                            )
                          }
                        )
                      )
                    );
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  }()
                )
              ).then(
                (
                  function (e) {
                    var n,
                    r = Kh(e);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var a = n.value;
                        if ('valid' === a.result.status) return a.result
                      }
                    } catch (e) {
                      r.e(e)
                    } finally {
                      r.f()
                    }
                    var i,
                    o = Kh(e);
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var l,
                        c = i.value;
                        if ('dirty' === c.result.status) return (l = t.common.issues).push.apply(l, kh(c.ctx.common.issues)),
                        c.result
                      }
                    } catch (e) {
                      o.e(e)
                    } finally {
                      o.f()
                    }
                    var u = e.map((function (e) {
                      return new tf(e.ctx.common.issues)
                    }));
                    return lf(t, {
                      code: ef.invalid_union,
                      unionErrors: u
                    }),
                    pf
                  }
                )
              );
              var r,
              a,
              i = void 0,
              o = [],
              l = Kh(n);
              try {
                for (l.s(); !(r = l.n()).done; ) {
                  var c = r.value,
                  u = jh(
                    jh({
                    }, t),
                    {
                    },
                    {
                      common: jh(jh({
                      }, t.common), {
                      }, {
                        issues: []
                      }),
                      parent: null
                    }
                  ),
                  s = c._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: u
                  });
                  if ('valid' === s.status) return s;
                  'dirty' !== s.status ||
                  i ||
                  (i = {
                    result: s,
                    ctx: u
                  }),
                  u.common.issues.length &&
                  o.push(u.common.issues)
                }
              } catch (e) {
                l.e(e)
              } finally {
                l.f()
              }
              if (i) return (a = t.common.issues).push.apply(a, kh(i.ctx.common.issues)),
              i.result;
              var d = o.map((function (e) {
                return new tf(e)
              }));
              return lf(t, {
                code: ef.invalid_union,
                unionErrors: d
              }),
              pf
            }
          },
          {
            key: 'options',
            get: function () {
              return this._def.options
            }
          }
        ]
      ),
      n
    }(_f);
    nv.create = function (e, t) {
      return new nv(jh({
        options: e,
        typeName: Nv.ZodUnion
      }, Tf(t)))
    };
    var rv = function e(t) {
      return t instanceof pv ? e(t.schema) : t instanceof Ev ? e(t.innerType()) : t instanceof hv ? [
        t.value
      ] : t instanceof vv ? t.options : t instanceof mv ? wp.objectValues(t.enum) : t instanceof bv ? e(t._def.innerType) : t instanceof jf ? [
        void 0
      ] : t instanceof Yf ? [
        null
      ] : t instanceof gv ? [
        void 0
      ].concat(kh(e(t.unwrap()))) : t instanceof Cv ? [
        null
      ].concat(kh(e(t.unwrap()))) : t instanceof Sv ||
      t instanceof Av ? e(t.unwrap()) : t instanceof Iv ? e(t._def.innerType) : []
    },
    av = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx;
              if (t.parsedType !== Qh.object) return lf(
                t,
                {
                  code: ef.invalid_type,
                  expected: Qh.object,
                  received: t.parsedType
                }
              ),
              pf;
              var n = this.discriminator,
              r = t.data[n],
              a = this.optionsMap.get(r);
              return a ? t.common.async ? a._parseAsync({
                data: t.data,
                path: t.path,
                parent: t
              }) : a._parseSync({
                data: t.data,
                path: t.path,
                parent: t
              }) : (
                lf(
                  t,
                  {
                    code: ef.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [
                      n
                    ]
                  }
                ),
                pf
              )
            }
          },
          {
            key: 'discriminator',
            get: function () {
              return this._def.discriminator
            }
          },
          {
            key: 'options',
            get: function () {
              return this._def.options
            }
          },
          {
            key: 'optionsMap',
            get: function () {
              return this._def.optionsMap
            }
          }
        ],
        [
          {
            key: 'create',
            value: function (e, t, r) {
              var a,
              i = new Map,
              o = Kh(t);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var l = a.value,
                  c = rv(l.shape[e]);
                  if (!c.length) throw new Error(
                    'A discriminator value for key `'.concat(e, '` could not be extracted from all schema options')
                  );
                  var u,
                  s = Kh(c);
                  try {
                    for (s.s(); !(u = s.n()).done; ) {
                      var d = u.value;
                      if (i.has(d)) throw new Error(
                        'Discriminator property '.concat(String(e), ' has duplicate value ').concat(String(d))
                      );
                      i.set(d, l)
                    }
                  } catch (e) {
                    s.e(e)
                  } finally {
                    s.f()
                  }
                }
              } catch (e) {
                o.e(e)
              } finally {
                o.f()
              }
              return new n(
                jh({
                  typeName: Nv.ZodDiscriminatedUnion,
                  discriminator: e,
                  options: t,
                  optionsMap: i
                }, Tf(r))
              )
            }
          }
        ]
      ),
      n
    }(_f);
    function iv(e, t) {
      var n = $h(e),
      r = $h(t);
      if (e === t) return {
        valid: !0,
        data: e
      };
      if (n === Qh.object && r === Qh.object) {
        var a,
        i = wp.objectKeys(t),
        o = wp.objectKeys(e).filter((function (e) {
          return - 1 !== i.indexOf(e)
        })),
        l = jh(jh({
        }, e), t),
        c = Kh(o);
        try {
          for (c.s(); !(a = c.n()).done; ) {
            var u = a.value,
            s = iv(e[u], t[u]);
            if (!s.valid) return {
              valid: !1
            };
            l[u] = s.data
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        return {
          valid: !0,
          data: l
        }
      }
      if (n === Qh.array && r === Qh.array) {
        if (e.length !== t.length) return {
          valid: !1
        };
        for (var d = [], p = 0; p < e.length; p++) {
          var h = iv(e[p], t[p]);
          if (!h.valid) return {
            valid: !1
          };
          d.push(h.data)
        }
        return {
          valid: !0,
          data: d
        }
      }
      return n === Qh.date &&
      r === Qh.date &&
      + e == + t ? {
        valid: !0,
        data: e
      }
       : {
        valid: !1
      }
    }
    var ov = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e),
              n = t.status,
              r = t.ctx,
              a = function (e, t) {
                if (vf(e) || vf(t)) return pf;
                var a = iv(e.value, t.value);
                return a.valid ? ((mf(e) || mf(t)) && n.dirty(), {
                  status: n.value,
                  value: a.data
                }) : (lf(r, {
                  code: ef.invalid_intersection_types
                }), pf)
              };
              return r.common.async ? Promise.all(
                [this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r
                })]
              ).then((function (e) {
                var t = Dh(e, 2),
                n = t[0],
                r = t[1];
                return a(n, r)
              })) : a(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r
                })
              )
            }
          }
        ]
      ),
      n
    }(_f);
    ov.create = function (e, t, n) {
      return new ov(jh({
        left: e,
        right: t,
        typeName: Nv.ZodIntersection
      }, Tf(n)))
    };
    var lv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this,
              n = this._processInputParams(e),
              r = n.status,
              a = n.ctx;
              if (a.parsedType !== Qh.array) return lf(
                a,
                {
                  code: ef.invalid_type,
                  expected: Qh.array,
                  received: a.parsedType
                }
              ),
              pf;
              if (a.data.length < this._def.items.length) return lf(
                a,
                {
                  code: ef.too_small,
                  minimum: this._def.items.length,
                  inclusive: !0,
                  exact: !1,
                  type: 'array'
                }
              ),
              pf;
              !this._def.rest &&
              a.data.length > this._def.items.length &&
              (
                lf(
                  a,
                  {
                    code: ef.too_big,
                    maximum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: 'array'
                  }
                ),
                r.dirty()
              );
              var i = kh(a.data).map(
                (
                  function (e, n) {
                    var r = t._def.items[n] ||
                    t._def.rest;
                    return r ? r._parse(new bf(a, e, a.path, n)) : null
                  }
                )
              ).filter((function (e) {
                return !!e
              }));
              return a.common.async ? Promise.all(i).then((function (e) {
                return df.mergeArray(r, e)
              })) : df.mergeArray(r, i)
            }
          },
          {
            key: 'rest',
            value: function (e) {
              return new n(jh(jh({
              }, this._def), {
              }, {
                rest: e
              }))
            }
          },
          {
            key: 'items',
            get: function () {
              return this._def.items
            }
          }
        ]
      ),
      n
    }(_f);
    lv.create = function (e, t) {
      if (!Array.isArray(e)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
      return new lv(jh({
        items: e,
        typeName: Nv.ZodTuple,
        rest: null
      }, Tf(t)))
    };
    var cv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e),
              n = t.status,
              r = t.ctx;
              if (r.parsedType !== Qh.object) return lf(
                r,
                {
                  code: ef.invalid_type,
                  expected: Qh.object,
                  received: r.parsedType
                }
              ),
              pf;
              var a = [],
              i = this._def.keyType,
              o = this._def.valueType;
              for (var l in r.data) a.push({
                key: i._parse(new bf(r, l, r.path, l)),
                value: o._parse(new bf(r, r.data[l], r.path, l)),
                alwaysSet: l in r.data
              });
              return r.common.async ? df.mergeObjectAsync(n, a) : df.mergeObjectSync(n, a)
            }
          },
          {
            key: 'keySchema',
            get: function () {
              return this._def.keyType
            }
          },
          {
            key: 'valueSchema',
            get: function () {
              return this._def.valueType
            }
          },
          {
            key: 'element',
            get: function () {
              return this._def.valueType
            }
          }
        ],
        [
          {
            key: 'create',
            value: function (e, t, r) {
              return new n(
                t instanceof _f ? jh({
                  keyType: e,
                  valueType: t,
                  typeName: Nv.ZodRecord
                }, Tf(r)) : jh({
                  keyType: Gf.create(),
                  valueType: e,
                  typeName: Nv.ZodRecord
                }, Tf(t))
              )
            }
          }
        ]
      ),
      n
    }(_f),
    uv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e),
              n = t.status,
              r = t.ctx;
              if (r.parsedType !== Qh.map) return lf(
                r,
                {
                  code: ef.invalid_type,
                  expected: Qh.map,
                  received: r.parsedType
                }
              ),
              pf;
              var a = this._def.keyType,
              i = this._def.valueType,
              o = kh(r.data.entries()).map(
                (
                  function (e, t) {
                    var n = Dh(e, 2),
                    o = n[0],
                    l = n[1];
                    return {
                      key: a._parse(new bf(r, o, r.path, [
                        t,
                        'key'
                      ])),
                      value: i._parse(new bf(r, l, r.path, [
                        t,
                        'value'
                      ]))
                    }
                  }
                )
              );
              if (r.common.async) {
                var l = new Map;
                return Promise.resolve().then(
                  Oh(
                    regeneratorRuntime.mark(
                      (
                        function e() {
                          var t,
                          r,
                          a,
                          i,
                          c;
                          return regeneratorRuntime.wrap(
                            (
                              function (e) {
                                for (; ; ) switch (e.prev = e.next) {
                                  case 0:
                                    t = Kh(o),
                                    e.prev = 1,
                                    t.s();
                                  case 3:
                                    if ((r = t.n()).done) {
                                      e.next = 17;
                                      break
                                    }
                                    return a = r.value,
                                    e.next = 7,
                                    a.key;
                                  case 7:
                                    return i = e.sent,
                                    e.next = 10,
                                    a.value;
                                  case 10:
                                    if (c = e.sent, 'aborted' !== i.status && 'aborted' !== c.status) {
                                      e.next = 13;
                                      break
                                    }
                                    return e.abrupt('return', pf);
                                  case 13:
                                    'dirty' !== i.status &&
                                    'dirty' !== c.status ||
                                    n.dirty(),
                                    l.set(i.value, c.value);
                                  case 15:
                                    e.next = 3;
                                    break;
                                  case 17:
                                    e.next = 22;
                                    break;
                                  case 19:
                                    e.prev = 19,
                                    e.t0 = e.catch(1),
                                    t.e(e.t0);
                                  case 22:
                                    return e.prev = 22,
                                    t.f(),
                                    e.finish(22);
                                  case 25:
                                    return e.abrupt('return', {
                                      status: n.value,
                                      value: l
                                    });
                                  case 26:
                                  case 'end':
                                    return e.stop()
                                }
                              }
                            ),
                            e,
                            null,
                            [
                              [1,
                              19,
                              22,
                              25]
                            ]
                          )
                        }
                      )
                    )
                  )
                )
              }
              var c,
              u = new Map,
              s = Kh(o);
              try {
                for (s.s(); !(c = s.n()).done; ) {
                  var d = c.value,
                  p = d.key,
                  h = d.value;
                  if ('aborted' === p.status || 'aborted' === h.status) return pf;
                  'dirty' !== p.status &&
                  'dirty' !== h.status ||
                  n.dirty(),
                  u.set(p.value, h.value)
                }
              } catch (e) {
                s.e(e)
              } finally {
                s.f()
              }
              return {
                status: n.value,
                value: u
              }
            }
          },
          {
            key: 'keySchema',
            get: function () {
              return this._def.keyType
            }
          },
          {
            key: 'valueSchema',
            get: function () {
              return this._def.valueType
            }
          }
        ]
      ),
      n
    }(_f);
    uv.create = function (e, t, n) {
      return new uv(jh({
        valueType: t,
        keyType: e,
        typeName: Nv.ZodMap
      }, Tf(n)))
    };
    var sv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e),
              n = t.status,
              r = t.ctx;
              if (r.parsedType !== Qh.set) return lf(
                r,
                {
                  code: ef.invalid_type,
                  expected: Qh.set,
                  received: r.parsedType
                }
              ),
              pf;
              var a = this._def;
              null !== a.minSize &&
              r.data.size < a.minSize.value &&
              (
                lf(
                  r,
                  {
                    code: ef.too_small,
                    minimum: a.minSize.value,
                    type: 'set',
                    inclusive: !0,
                    exact: !1,
                    message: a.minSize.message
                  }
                ),
                n.dirty()
              ),
              null !== a.maxSize &&
              r.data.size > a.maxSize.value &&
              (
                lf(
                  r,
                  {
                    code: ef.too_big,
                    maximum: a.maxSize.value,
                    type: 'set',
                    inclusive: !0,
                    exact: !1,
                    message: a.maxSize.message
                  }
                ),
                n.dirty()
              );
              var i = this._def.valueType;
              function o(e) {
                var t,
                r = new Set,
                a = Kh(e);
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var i = t.value;
                    if ('aborted' === i.status) return pf;
                    'dirty' === i.status &&
                    n.dirty(),
                    r.add(i.value)
                  }
                } catch (e) {
                  a.e(e)
                } finally {
                  a.f()
                }
                return {
                  status: n.value,
                  value: r
                }
              }
              var l = kh(r.data.values()).map((function (e, t) {
                return i._parse(new bf(r, e, r.path, t))
              }));
              return r.common.async ? Promise.all(l).then((function (e) {
                return o(e)
              })) : o(l)
            }
          },
          {
            key: 'min',
            value: function (e, t) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    minSize: {
                      value: e,
                      message: cf.toString(t)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'max',
            value: function (e, t) {
              return new n(
                jh(
                  jh({
                  }, this._def),
                  {
                  },
                  {
                    maxSize: {
                      value: e,
                      message: cf.toString(t)
                    }
                  }
                )
              )
            }
          },
          {
            key: 'size',
            value: function (e, t) {
              return this.min(e, t).max(e, t)
            }
          },
          {
            key: 'nonempty',
            value: function (e) {
              return this.min(1, e)
            }
          }
        ]
      ),
      n
    }(_f);
    sv.create = function (e, t) {
      return new sv(
        jh({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: Nv.ZodSet
        }, Tf(t))
      )
    };
    var dv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        (e = t.apply(this, arguments)).validate = e.implement,
        e
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx;
              if (t.parsedType !== Qh.function) return lf(
                t,
                {
                  code: ef.invalid_type,
                  expected: Qh.function,
                  received: t.parsedType
                }
              ),
              pf;
              function n(e, n) {
                return of ({
                  data: e,
                  path: t.path,
                  errorMaps: [
                    t.common.contextualErrorMap,
                    t.schemaErrorMap,
                    af(),
                    nf
                  ].filter((function (e) {
                    return !!e
                  })),
                  issueData: {
                    code: ef.invalid_arguments,
                    argumentsError: n
                  }
                })
              }
              function r(e, n) {
                return of ({
                  data: e,
                  path: t.path,
                  errorMaps: [
                    t.common.contextualErrorMap,
                    t.schemaErrorMap,
                    af(),
                    nf
                  ].filter((function (e) {
                    return !!e
                  })),
                  issueData: {
                    code: ef.invalid_return_type,
                    returnTypeError: n
                  }
                })
              }
              var a = {
                errorMap: t.common.contextualErrorMap
              },
              i = t.data;
              if (this._def.returns instanceof yv) {
                var o = this;
                return ff(
                  Oh(
                    regeneratorRuntime.mark(
                      (
                        function e() {
                          var t,
                          l,
                          c,
                          u,
                          s,
                          d,
                          p,
                          h = arguments;
                          return regeneratorRuntime.wrap(
                            (
                              function (e) {
                                for (; ; ) switch (e.prev = e.next) {
                                  case 0:
                                    for (t = h.length, l = new Array(t), c = 0; c < t; c++) l[c] = h[c];
                                    return u = new tf([]),
                                    e.next = 4,
                                    o._def.args.parseAsync(l, a).catch((function (e) {
                                      throw u.addIssue(n(l, e)),
                                      u
                                    }));
                                  case 4:
                                    return s = e.sent,
                                    e.next = 7,
                                    Reflect.apply(i, this, s);
                                  case 7:
                                    return d = e.sent,
                                    e.next = 10,
                                    o._def.returns._def.type.parseAsync(d, a).catch((function (e) {
                                      throw u.addIssue(r(d, e)),
                                      u
                                    }));
                                  case 10:
                                    return p = e.sent,
                                    e.abrupt('return', p);
                                  case 12:
                                  case 'end':
                                    return e.stop()
                                }
                              }
                            ),
                            e,
                            this
                          )
                        }
                      )
                    )
                  )
                )
              }
              var l = this;
              return ff(
                (
                  function () {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    var c = l._def.args.safeParse(t, a);
                    if (!c.success) throw new tf([n(t, c.error)]);
                    var u = Reflect.apply(i, this, c.data),
                    s = l._def.returns.safeParse(u, a);
                    if (!s.success) throw new tf([r(u, s.error)]);
                    return s.data
                  }
                )
              )
            }
          },
          {
            key: 'parameters',
            value: function () {
              return this._def.args
            }
          },
          {
            key: 'returnType',
            value: function () {
              return this._def.returns
            }
          },
          {
            key: 'args',
            value: function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
              return new n(
                jh(jh({
                }, this._def), {
                }, {
                  args: lv.create(t).rest(Jf.create())
                })
              )
            }
          },
          {
            key: 'returns',
            value: function (e) {
              return new n(jh(jh({
              }, this._def), {
              }, {
                returns: e
              }))
            }
          },
          {
            key: 'implement',
            value: function (e) {
              return this.parse(e)
            }
          },
          {
            key: 'strictImplement',
            value: function (e) {
              return this.parse(e)
            }
          }
        ],
        [
          {
            key: 'create',
            value: function (e, t, r) {
              return new n(
                jh({
                  args: e ||
                  lv.create([]).rest(Jf.create()),
                  returns: t ||
                  Jf.create(),
                  typeName: Nv.ZodFunction
                }, Tf(r))
              )
            }
          }
        ]
      ),
      n
    }(_f),
    pv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx;
              return this._def.getter()._parse({
                data: t.data,
                path: t.path,
                parent: t
              })
            }
          },
          {
            key: 'schema',
            get: function () {
              return this._def.getter()
            }
          }
        ]
      ),
      n
    }(_f);
    pv.create = function (e, t) {
      return new pv(jh({
        getter: e,
        typeName: Nv.ZodLazy
      }, Tf(t)))
    };
    var hv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (e.data !== this._def.value) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    received: t.data,
                    code: ef.invalid_literal,
                    expected: this._def.value
                  }
                ),
                pf
              }
              return {
                status: 'valid',
                value: e.data
              }
            }
          },
          {
            key: 'value',
            get: function () {
              return this._def.value
            }
          }
        ]
      ),
      n
    }(_f);
    function fv(e, t) {
      return new vv(jh({
        values: e,
        typeName: Nv.ZodEnum
      }, Tf(t)))
    }
    hv.create = function (e, t) {
      return new hv(jh({
        value: e,
        typeName: Nv.ZodLiteral
      }, Tf(t)))
    };
    var vv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        e = t.apply(this, arguments),
        uf.set(Wh(e), void 0),
        e
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if ('string' != typeof e.data) {
                var t = this._getOrReturnCtx(e),
                n = this._def.values;
                return lf(
                  t,
                  {
                    expected: wp.joinValues(n),
                    received: t.parsedType,
                    code: ef.invalid_type
                  }
                ),
                pf
              }
              if (
                gf(this, uf, 'f') ||
                Cf(this, uf, new Set(this._def.values), 'f'),
                !gf(this, uf, 'f').has(e.data)
              ) {
                var r = this._getOrReturnCtx(e),
                a = this._def.values;
                return lf(r, {
                  received: r.data,
                  code: ef.invalid_enum_value,
                  options: a
                }),
                pf
              }
              return ff(e.data)
            }
          },
          {
            key: 'extract',
            value: function (e) {
              var t = arguments.length > 1 &&
              void 0 !== arguments[1] ? arguments[1] : this._def;
              return n.create(e, jh(jh({
              }, this._def), t))
            }
          },
          {
            key: 'exclude',
            value: function (e) {
              var t = arguments.length > 1 &&
              void 0 !== arguments[1] ? arguments[1] : this._def;
              return n.create(
                this.options.filter((function (t) {
                  return !e.includes(t)
                })),
                jh(jh({
                }, this._def), t)
              )
            }
          },
          {
            key: 'options',
            get: function () {
              return this._def.values
            }
          },
          {
            key: 'enum',
            get: function () {
              var e,
              t = {},
              n = Kh(this._def.values);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  t[r] = r
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'Values',
            get: function () {
              var e,
              t = {},
              n = Kh(this._def.values);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  t[r] = r
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          },
          {
            key: 'Enum',
            get: function () {
              var e,
              t = {},
              n = Kh(this._def.values);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  t[r] = r
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
              return t
            }
          }
        ]
      ),
      n
    }(_f);
    uf = new WeakMap,
    vv.create = fv;
    var mv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        var e;
        return Rh(this, n),
        e = t.apply(this, arguments),
        sf.set(Wh(e), void 0),
        e
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = wp.getValidEnumValues(this._def.values),
              n = this._getOrReturnCtx(e);
              if (n.parsedType !== Qh.string && n.parsedType !== Qh.number) {
                var r = wp.objectValues(t);
                return lf(
                  n,
                  {
                    expected: wp.joinValues(r),
                    received: n.parsedType,
                    code: ef.invalid_type
                  }
                ),
                pf
              }
              if (
                gf(this, sf, 'f') ||
                Cf(this, sf, new Set(wp.getValidEnumValues(this._def.values)), 'f'),
                !gf(this, sf, 'f').has(e.data)
              ) {
                var a = wp.objectValues(t);
                return lf(n, {
                  received: n.data,
                  code: ef.invalid_enum_value,
                  options: a
                }),
                pf
              }
              return ff(e.data)
            }
          },
          {
            key: 'enum',
            get: function () {
              return this._def.values
            }
          }
        ]
      ),
      n
    }(_f);
    sf = new WeakMap,
    mv.create = function (e, t) {
      return new mv(jh({
        values: e,
        typeName: Nv.ZodNativeEnum
      }, Tf(t)))
    };
    var yv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: 'unwrap',
            value: function () {
              return this._def.type
            }
          },
          {
            key: '_parse',
            value: function (e) {
              var t = this,
              n = this._processInputParams(e).ctx;
              if (n.parsedType !== Qh.promise && !1 === n.common.async) return lf(
                n,
                {
                  code: ef.invalid_type,
                  expected: Qh.promise,
                  received: n.parsedType
                }
              ),
              pf;
              var r = n.parsedType === Qh.promise ? n.data : Promise.resolve(n.data);
              return ff(
                r.then(
                  (
                    function (e) {
                      return t._def.type.parseAsync(e, {
                        path: n.path,
                        errorMap: n.common.contextualErrorMap
                      })
                    }
                  )
                )
              )
            }
          }
        ]
      ),
      n
    }(_f);
    yv.create = function (e, t) {
      return new yv(jh({
        type: e,
        typeName: Nv.ZodPromise
      }, Tf(t)))
    };
    var Ev = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: 'innerType',
            value: function () {
              return this._def.schema
            }
          },
          {
            key: 'sourceType',
            value: function () {
              return this._def.schema._def.typeName === Nv.ZodEffects ? this._def.schema.sourceType() : this._def.schema
            }
          },
          {
            key: '_parse',
            value: function (e) {
              var t = this,
              n = this._processInputParams(e),
              r = n.status,
              a = n.ctx,
              i = this._def.effect ||
              null,
              o = {
                addIssue: function (e) {
                  lf(a, e),
                  e.fatal ? r.abort() : r.dirty()
                },
                get path() {
                  return a.path
                }
              };
              if (o.addIssue = o.addIssue.bind(o), 'preprocess' === i.type) {
                var l = i.transform(a.data, o);
                if (a.common.async) return Promise.resolve(l).then(
                  function () {
                    var e = Oh(
                      regeneratorRuntime.mark(
                        (
                          function e(n) {
                            var i;
                            return regeneratorRuntime.wrap(
                              (
                                function (e) {
                                  for (; ; ) switch (e.prev = e.next) {
                                    case 0:
                                      if ('aborted' !== r.value) {
                                        e.next = 2;
                                        break
                                      }
                                      return e.abrupt('return', pf);
                                    case 2:
                                      return e.next = 4,
                                      t._def.schema._parseAsync({
                                        data: n,
                                        path: a.path,
                                        parent: a
                                      });
                                    case 4:
                                      if ('aborted' !== (i = e.sent).status) {
                                        e.next = 7;
                                        break
                                      }
                                      return e.abrupt('return', pf);
                                    case 7:
                                      if ('dirty' !== i.status) {
                                        e.next = 9;
                                        break
                                      }
                                      return e.abrupt('return', hf(i.value));
                                    case 9:
                                      if ('dirty' !== r.value) {
                                        e.next = 11;
                                        break
                                      }
                                      return e.abrupt('return', hf(i.value));
                                    case 11:
                                      return e.abrupt('return', i);
                                    case 12:
                                    case 'end':
                                      return e.stop()
                                  }
                                }
                              ),
                              e
                            )
                          }
                        )
                      )
                    );
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  }()
                );
                if ('aborted' === r.value) return pf;
                var c = this._def.schema._parseSync({
                  data: l,
                  path: a.path,
                  parent: a
                });
                return 'aborted' === c.status ? pf : 'dirty' === c.status ||
                'dirty' === r.value ? hf(c.value) : c
              }
              if ('refinement' === i.type) {
                var u = function (e) {
                  var t = i.refinement(e, o);
                  if (a.common.async) return Promise.resolve(t);
                  if (t instanceof Promise) throw new Error(
                    'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                  );
                  return e
                };
                if (!1 === a.common.async) {
                  var s = this._def.schema._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: a
                  });
                  return 'aborted' === s.status ? pf : (
                    'dirty' === s.status &&
                    r.dirty(),
                    u(s.value),
                    {
                      status: r.value,
                      value: s.value
                    }
                  )
                }
                return this._def.schema._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a
                }).then(
                  (
                    function (e) {
                      return 'aborted' === e.status ? pf : (
                        'dirty' === e.status &&
                        r.dirty(),
                        u(e.value).then((function () {
                          return {
                            status: r.value,
                            value: e.value
                          }
                        }))
                      )
                    }
                  )
                )
              }
              if ('transform' === i.type) {
                if (!1 === a.common.async) {
                  var d = this._def.schema._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: a
                  });
                  if (!yf(d)) return d;
                  var p = i.transform(d.value, o);
                  if (p instanceof Promise) throw new Error(
                    'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                  );
                  return {
                    status: r.value,
                    value: p
                  }
                }
                return this._def.schema._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a
                }).then(
                  (
                    function (e) {
                      return yf(e) ? Promise.resolve(i.transform(e.value, o)).then((function (e) {
                        return {
                          status: r.value,
                          value: e
                        }
                      })) : e
                    }
                  )
                )
              }
              wp.assertNever(i)
            }
          }
        ]
      ),
      n
    }(_f);
    Ev.create = function (e, t, n) {
      return new Ev(jh({
        schema: e,
        typeName: Nv.ZodEffects,
        effect: t
      }, Tf(n)))
    },
    Ev.createWithPreprocess = function (e, t, n) {
      return new Ev(
        jh({
          schema: t,
          effect: {
            type: 'preprocess',
            transform: e
          },
          typeName: Nv.ZodEffects
        }, Tf(n))
      )
    };
    var gv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              return this._getType(e) === Qh.undefined ? ff(void 0) : this._def.innerType._parse(e)
            }
          },
          {
            key: 'unwrap',
            value: function () {
              return this._def.innerType
            }
          }
        ]
      ),
      n
    }(_f);
    gv.create = function (e, t) {
      return new gv(jh({
        innerType: e,
        typeName: Nv.ZodOptional
      }, Tf(t)))
    };
    var Cv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              return this._getType(e) === Qh.null ? ff(null) : this._def.innerType._parse(e)
            }
          },
          {
            key: 'unwrap',
            value: function () {
              return this._def.innerType
            }
          }
        ]
      ),
      n
    }(_f);
    Cv.create = function (e, t) {
      return new Cv(jh({
        innerType: e,
        typeName: Nv.ZodNullable
      }, Tf(t)))
    };
    var bv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx,
              n = t.data;
              return t.parsedType === Qh.undefined &&
              (n = this._def.defaultValue()),
              this._def.innerType._parse({
                data: n,
                path: t.path,
                parent: t
              })
            }
          },
          {
            key: 'removeDefault',
            value: function () {
              return this._def.innerType
            }
          }
        ]
      ),
      n
    }(_f);
    bv.create = function (e, t) {
      return new bv(
        jh({
          innerType: e,
          typeName: Nv.ZodDefault,
          defaultValue: 'function' == typeof t.default ? t.default : function () {
            return t.default
          }
        }, Tf(t))
      )
    };
    var Iv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this,
              n = this._processInputParams(e).ctx,
              r = jh(jh({
              }, n), {
              }, {
                common: jh(jh({
                }, n.common), {
                }, {
                  issues: []
                })
              }),
              a = this._def.innerType._parse({
                data: r.data,
                path: r.path,
                parent: jh({
                }, r)
              });
              return Ef(a) ? a.then(
                (
                  function (e) {
                    return {
                      status: 'valid',
                      value: 'valid' === e.status ? e.value : t._def.catchValue({
                        get error() {
                          return new tf(r.common.issues)
                        },
                        input: r.data
                      })
                    }
                  }
                )
              ) : {
                status: 'valid',
                value: 'valid' === a.status ? a.value : this._def.catchValue({
                  get error() {
                    return new tf(r.common.issues)
                  },
                  input: r.data
                })
              }
            }
          },
          {
            key: 'removeCatch',
            value: function () {
              return this._def.innerType
            }
          }
        ]
      ),
      n
    }(_f);
    Iv.create = function (e, t) {
      return new Iv(
        jh({
          innerType: e,
          typeName: Nv.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : function () {
            return t.catch
          }
        }, Tf(t))
      )
    };
    var Tv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              if (this._getType(e) !== Qh.nan) {
                var t = this._getOrReturnCtx(e);
                return lf(
                  t,
                  {
                    code: ef.invalid_type,
                    expected: Qh.nan,
                    received: t.parsedType
                  }
                ),
                pf
              }
              return {
                status: 'valid',
                value: e.data
              }
            }
          }
        ]
      ),
      n
    }(_f);
    Tv.create = function (e) {
      return new Tv(jh({
        typeName: Nv.ZodNaN
      }, Tf(e)))
    };
    Symbol('zod_brand');
    var Sv = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._processInputParams(e).ctx,
              n = t.data;
              return this._def.type._parse({
                data: n,
                path: t.path,
                parent: t
              })
            }
          },
          {
            key: 'unwrap',
            value: function () {
              return this._def.type
            }
          }
        ]
      ),
      n
    }(_f),
    _v = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this,
              n = this._processInputParams(e),
              r = n.status,
              a = n.ctx;
              if (a.common.async) return function () {
                var e = Oh(
                  regeneratorRuntime.mark(
                    (
                      function e() {
                        var n;
                        return regeneratorRuntime.wrap(
                          (
                            function (e) {
                              for (; ; ) switch (e.prev = e.next) {
                                case 0:
                                  return e.next = 2,
                                  t._def.in._parseAsync({
                                    data: a.data,
                                    path: a.path,
                                    parent: a
                                  });
                                case 2:
                                  if ('aborted' !== (n = e.sent).status) {
                                    e.next = 5;
                                    break
                                  }
                                  return e.abrupt('return', pf);
                                case 5:
                                  if ('dirty' !== n.status) {
                                    e.next = 10;
                                    break
                                  }
                                  return r.dirty(),
                                  e.abrupt('return', hf(n.value));
                                case 10:
                                  return e.abrupt(
                                    'return',
                                    t._def.out._parseAsync({
                                      data: n.value,
                                      path: a.path,
                                      parent: a
                                    })
                                  );
                                case 11:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          ),
                          e
                        )
                      }
                    )
                  )
                );
                return function () {
                  return e.apply(this, arguments)
                }
              }() ();
              var i = this._def.in._parseSync({
                data: a.data,
                path: a.path,
                parent: a
              });
              return 'aborted' === i.status ? pf : 'dirty' === i.status ? (r.dirty(), {
                status: 'dirty',
                value: i.value
              }) : this._def.out._parseSync({
                data: i.value,
                path: a.path,
                parent: a
              })
            }
          }
        ],
        [
          {
            key: 'create',
            value: function (e, t) {
              return new n({
                in : e,
                out: t,
                typeName: Nv.ZodPipeline
              })
            }
          }
        ]
      ),
      n
    }(_f),
    Av = function (e) {
      xh(n, e);
      var t = Vh(n);
      function n() {
        return Rh(this, n),
        t.apply(this, arguments)
      }
      return Mh(
        n,
        [
          {
            key: '_parse',
            value: function (e) {
              var t = this._def.innerType._parse(e),
              n = function (e) {
                return yf(e) &&
                (e.value = Object.freeze(e.value)),
                e
              };
              return Ef(t) ? t.then((function (e) {
                return n(e)
              })) : n(t)
            }
          },
          {
            key: 'unwrap',
            value: function () {
              return this._def.innerType
            }
          }
        ]
      ),
      n
    }(_f);
    Av.create = function (e, t) {
      return new Av(jh({
        innerType: e,
        typeName: Nv.ZodReadonly
      }, Tf(t)))
    };
    var Nv;
    tv.lazycreate;
    !function (e) {
      e.ZodString = 'ZodString',
      e.ZodNumber = 'ZodNumber',
      e.ZodNaN = 'ZodNaN',
      e.ZodBigInt = 'ZodBigInt',
      e.ZodBoolean = 'ZodBoolean',
      e.ZodDate = 'ZodDate',
      e.ZodSymbol = 'ZodSymbol',
      e.ZodUndefined = 'ZodUndefined',
      e.ZodNull = 'ZodNull',
      e.ZodAny = 'ZodAny',
      e.ZodUnknown = 'ZodUnknown',
      e.ZodNever = 'ZodNever',
      e.ZodVoid = 'ZodVoid',
      e.ZodArray = 'ZodArray',
      e.ZodObject = 'ZodObject',
      e.ZodUnion = 'ZodUnion',
      e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion',
      e.ZodIntersection = 'ZodIntersection',
      e.ZodTuple = 'ZodTuple',
      e.ZodRecord = 'ZodRecord',
      e.ZodMap = 'ZodMap',
      e.ZodSet = 'ZodSet',
      e.ZodFunction = 'ZodFunction',
      e.ZodLazy = 'ZodLazy',
      e.ZodLiteral = 'ZodLiteral',
      e.ZodEnum = 'ZodEnum',
      e.ZodEffects = 'ZodEffects',
      e.ZodNativeEnum = 'ZodNativeEnum',
      e.ZodOptional = 'ZodOptional',
      e.ZodNullable = 'ZodNullable',
      e.ZodDefault = 'ZodDefault',
      e.ZodCatch = 'ZodCatch',
      e.ZodPromise = 'ZodPromise',
      e.ZodBranded = 'ZodBranded',
      e.ZodPipeline = 'ZodPipeline',
      e.ZodReadonly = 'ZodReadonly'
    }(Nv || (Nv = {}));
    var Lv,
    Dv,
    wv = Gf.create,
    Ov = (zf.create, Tv.create, Ff.create, Bf.create),
    kv = (qf.create, Zf.create, jf.create, Yf.create, Kf.create),
    Rv = (Jf.create, Xf.create, Qf.create, $f.create),
    Pv = tv.create,
    Mv = (tv.strictCreate, nv.create),
    xv = (
      av.create,
      ov.create,
      lv.create,
      cv.create,
      uv.create,
      sv.create,
      dv.create,
      pv.create,
      hv.create
    ),
    Vv = (vv.create, mv.create),
    Hv = (
      yv.create,
      Ev.create,
      gv.create,
      Cv.create,
      Ev.createWithPreprocess
    );
    _v.create;
    !function (e) {
      e.ZERO = 'FRICTION_CONTEXT_INVALID',
      e.ONE = 'FRICTION_CONTEXT_ONE'
    }(Lv || (Lv = {}));
    var Wv,
    Uv = Pv({
      sharedParameters: Pv({
        shouldAnalyze: Ov().optional(),
        useContinueMode: Ov().optional(),
        genericChallengeId: wv().optional()
      }).optional()
    }),
    Gv = Pv({
      userId: wv(),
      challengeId: wv(),
      shouldShowRememberDeviceCheckbox: Ov(),
      actionType: Vv(wc)
    }).and(Uv),
    zv = Pv({
      actionType: Vv(_i),
      dataExchangeBlob: wv(),
      unifiedCaptchaId: wv()
    }).and(Uv),
    Fv = Pv({
      userId: wv(),
      sessionId: wv()
    }).and(Uv),
    Bv = Pv({
      defaultType: Vv(Ac),
      availableTypes: Rv(Vv(Ac)),
      defaultTypeMetadata: Pv({
        passkeyAuthOptions: wv().optional(),
        passkeySessionId: wv().optional()
      }).nullable()
    }).and(Uv),
    qv = Pv({
    }).and(Uv),
    Zv = Pv({
    }).and(Uv),
    jv = Pv({
      sessionId: wv()
    }).and(Uv),
    Yv = Pv({
      challengeId: wv(),
      puzzleType: Vv(Lc)
    }).and(Uv),
    Kv = Pv({
      challengeId: wv()
    }).and(Uv),
    Jv = Pv({
      integrityType: wv(),
      requestHash: wv()
    }).and(Uv),
    Xv = Pv({
      challengeId: wv(),
      artifacts: Pv({
        puzzleType: Vv(Tc),
        seed: wv(),
        rounds: wv(),
        layers: wv()
      })
    }).and(Uv),
    Qv = Pv({
      frictionContext: Vv(Lv).optional()
    }).and(Uv),
    $v = Pv({
      otpSession: wv(),
      frictionContext: Vv(Lv).optional()
    }).and(Uv),
    em = kv(),
    tm = (
      (Dv = {}) [Rc.TWO_STEP_VERIFICATION] = Gv,
      Dv[Rc.CAPTCHA] = zv,
      Dv[Rc.FORCE_AUTHENTICATOR] = qv,
      Dv[Rc.FORCE_TWO_STEP_VERIFICATION] = Zv,
      Dv[Rc.SECURITY_QUESTIONS] = Fv,
      Dv[Rc.REAUTHENTICATION] = Bv,
      Dv[Rc.PROOF_OF_WORK] = jv,
      Dv[Rc.ROSTILE] = Yv,
      Dv[Rc.PRIVATE_ACCESS_TOKEN] = Kv,
      Dv[Rc.DEVICE_INTEGRITY] = Jv,
      Dv[Rc.PROOF_OF_SPACE] = Xv,
      Dv[Rc.PHONE_VERIFICATION] = Qv,
      Dv[Rc.EMAIL_VERIFICATION] = $v,
      Dv[Rc.BLOCK_SESSION] = em,
      Dv
    ),
    nm = function () {
      var e = function (t, n) {
        return (
          e = Object.setPrototypeOf ||
          {
            __proto__: []
          }
          instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }
          ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) &&
            (e[n] = t[n])
          }
        ) (t, n)
      };
      return function (t, n) {
        if ('function' != typeof n && null !== n) throw new TypeError(
          'Class extends value ' + String(n) + ' is not a constructor or null'
        );
        function r() {
          this.constructor = t
        }
        e(t, n),
        t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
      }
    }(),
    rm = function () {
      return (
        rm = Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) &&
          (e[a] = t[a]);
          return e
        }
      ).apply(this, arguments)
    },
    am = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    im = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    om = new hi,
    lm = new Lh,
    cm = function (e, t, n) {
      var r,
      a = Object.values(Rc).includes(t) ? t : null;
      if (null === a) return null;
      try {
        r = null === n ||
        '' === n ? {
        }
         : JSON.parse(n)
      } catch (e) {
        return null
      }
      var i = tm[a].safeParse(r);
      return i.success ? {
        challengeId: e,
        challengeType: a,
        challengeMetadata: r
      }
       : (console.error(Th, i.error), null)
    },
    um = function (e) {
      var t = e.challengeBaseProperties,
      n = e.challengeSpecificProperties;
      return am(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var e,
            r,
            a,
            i,
            o,
            l,
            c,
            u,
            s,
            d,
            p,
            h,
            f,
            v,
            m,
            y,
            E,
            g,
            C,
            b,
            I,
            T,
            S,
            _;
            return im(
              this,
              (
                function (A) {
                  switch (
                      e = n.challengeMetadata.sharedParameters,
                      r = t.onChallengeCompleted,
                      t.onChallengeCompleted = function (a) {
                        return am(
                          void 0,
                          void 0,
                          void 0,
                          (
                            function () {
                              var i,
                              o;
                              return im(
                                this,
                                (
                                  function (l) {
                                    switch (l.label) {
                                      case 0:
                                        return [4,
                                        om.genericChallenge.continueChallenge(
                                          (null == e ? void 0 : e.genericChallengeId) ||
                                          n.challengeId,
                                          a.challengeType,
                                          JSON.stringify(a.metadata)
                                        )];
                                      case 1:
                                        return (i = l.sent()).isError ? (
                                          lm.fireContinueFailureEvent(n.challengeType),
                                          t.onChallengeInvalidated({
                                            challengeType: n.challengeType,
                                            errorCode: Ec.UNKNOWN,
                                            errorMessage: ''
                                          }),
                                          [
                                            2
                                          ]
                                        ) : '' === i.value.challengeType ? (r(a), [
                                          2
                                        ]) : null === (
                                          o = cm(
                                            i.value.challengeId,
                                            i.value.challengeType,
                                            i.value.challengeMetadata
                                          )
                                        ) ? (
                                          console.error(Th, 'Challenge headers failed to be parsed'),
                                          lm.fireParseFailureEvent(),
                                          t.onChallengeInvalidated({
                                            challengeType: n.challengeType,
                                            errorCode: Ec.UNKNOWN,
                                            errorMessage: ''
                                          }),
                                          [
                                            2
                                          ]
                                        ) : (
                                          t.onChallengeCompleted = r,
                                          um({
                                            challengeBaseProperties: t,
                                            challengeSpecificProperties: o
                                          }).then(
                                            (
                                              function (e) {
                                                if (!e) return lm.fireRenderFailureEvent(o.challengeType),
                                                console.error(Th, 'Challenge component failed to initialize'),
                                                void t.onChallengeInvalidated({
                                                  challengeType: o.challengeType,
                                                  errorCode: Ec.UNKNOWN,
                                                  errorMessage: ''
                                                });
                                                lm.fireSuccessEvent(o.challengeType)
                                              }
                                            )
                                          ).catch(
                                            (
                                              function () {
                                                lm.fireRenderFailureEvent(o.challengeType),
                                                console.error(Th, 'Exception on rendering challenge component'),
                                                t.onChallengeInvalidated({
                                                  challengeType: o.challengeType,
                                                  errorCode: Ec.UNKNOWN,
                                                  errorMessage: ''
                                                })
                                              }
                                            )
                                          ),
                                          [
                                            2
                                          ]
                                        )
                                    }
                                  }
                                )
                              )
                            }
                          )
                        )
                      },
                      !0 === (null == e ? void 0 : e.shouldAnalyze) &&
                      (
                        a = Kl.load({
                          monitoring: !1
                        }),
                        i = t.onChallengeCompleted,
                        t.onChallengeCompleted = function (e) {
                          return am(
                            void 0,
                            void 0,
                            void 0,
                            (
                              function () {
                                var t,
                                r;
                                return im(
                                  this,
                                  (
                                    function (o) {
                                      switch (o.label) {
                                        case 0:
                                          return o.trys.push([0,
                                          3,
                                          ,
                                          4]),
                                          [
                                            4,
                                            a
                                          ];
                                        case 1:
                                          return [4,
                                          o.sent().get()];
                                        case 2:
                                          return t = o.sent(),
                                          r = {},
                                          Object.entries(t.components).forEach(
                                            (
                                              function (e) {
                                                var t = e[0],
                                                n = e[1];
                                                'canvas' !== t &&
                                                (r[t] = 'object' == typeof n.value ? JSON.stringify(n.value) : n.value)
                                              }
                                            )
                                          ),
                                          W().EventStream.SendEventWithTarget(
                                            Sh,
                                            _h.onCompleted,
                                            rm({
                                              challengeId: n.challengeId,
                                              library: 'FPJS',
                                              version: t.version
                                            }, r),
                                            W().EventStream.TargetTypes.WWW
                                          ),
                                          [
                                            3,
                                            4
                                          ];
                                        case 3:
                                          return o.sent(),
                                          [
                                            3,
                                            4
                                          ];
                                        case 4:
                                          return [2,
                                          i(e)]
                                      }
                                    }
                                  )
                                )
                              }
                            )
                          )
                        }
                      ),
                      n.challengeType
                    ) {
                    case Rc.CAPTCHA:
                      return o = n.challengeType,
                      l = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          },
                          appType: null
                        }, t), l),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: o
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: o,
                              metadata: {
                                unifiedCaptchaId: e.captchaId,
                                captchaToken: e.captchaToken,
                                actionType: l.actionType
                              }
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Qi(S)
                      ];
                    case Rc.FORCE_AUTHENTICATOR:
                      return T = n.challengeMetadata,
                      S = rm(
                        rm({
                          forceActionRedirectChallengeType: _o.ForceAuthenticator
                        }, t),
                        T
                      ),
                      (_ = Go(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.FORCE_TWO_STEP_VERIFICATION:
                      return T = n.challengeMetadata,
                      S = rm(
                        rm({
                          forceActionRedirectChallengeType: _o.ForceTwoStepVerification
                        }, t),
                        T
                      ),
                      (_ = Go(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.TWO_STEP_VERIFICATION:
                      return c = n.challengeType,
                      u = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                        }, t), u),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: c
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: c,
                              metadata: rm(rm({
                              }, e), {
                                challengeId: u.challengeId,
                                actionType: u.actionType
                              })
                            })
                          }
                        }
                      ),
                      (_ = Ih(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.SECURITY_QUESTIONS:
                      return s = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: s
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: s,
                              metadata: e
                            })
                          }
                        }
                      ),
                      (_ = gp(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.REAUTHENTICATION:
                      return d = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: d
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: d,
                              metadata: e
                            })
                          }
                        }
                      ),
                      (_ = Id(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.PROOF_OF_WORK:
                      return p = n.challengeType,
                      h = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          }
                        }, t), h),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: p
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: p,
                              metadata: rm(rm({
                              }, e), {
                                sessionId: h.sessionId
                              })
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Promise.resolve(Ss(S))
                      ];
                    case Rc.ROSTILE:
                      return f = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          }
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: f
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: f,
                              metadata: rm({
                              }, e)
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Promise.resolve(Xd(S))
                      ];
                    case Rc.PRIVATE_ACCESS_TOKEN:
                      return v = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          }
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: v
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: v,
                              metadata: rm({
                              }, e)
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Promise.resolve(Eu(S))
                      ];
                    case Rc.DEVICE_INTEGRITY:
                      return C = n.challengeId,
                      m = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          },
                          challengeId: C
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: m
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: m,
                              metadata: rm({
                              }, e)
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Promise.resolve(bo(S))
                      ];
                    case Rc.PROOF_OF_SPACE:
                      return y = n.challengeType,
                      T = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          }
                        }, t), T),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: y
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: y,
                              metadata: rm({
                              }, e)
                            })
                          }
                        }
                      ),
                      [
                        2,
                        Promise.resolve(Xu(S))
                      ];
                    case Rc.PHONE_VERIFICATION:
                      return C = n.challengeId,
                      E = n.challengeType,
                      g = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          },
                          challengeId: C
                        }, t), g),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: E
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: E,
                              metadata: rm({
                                frictionContext: g.frictionContext
                              }, e)
                            })
                          }
                        }
                      ),
                      (
                        _ = function (e) {
                          var t = e.containerId,
                          n = e.challengeId,
                          r = e.appType,
                          a = e.renderInline,
                          i = e.onChallengeCompleted,
                          o = e.onChallengeInvalidated,
                          l = e.onModalChallengeAbandoned,
                          c = document.getElementById(t);
                          if (null !== c) {
                            (0, de.unmountComponentAtNode) (c);
                            var u = new Jc(n),
                            s = new Xc(r, eu);
                            return (0, de.render) (
                              se().createElement(
                                Kc,
                                {
                                  challengeId: n,
                                  renderInline: a,
                                  eventService: u,
                                  metricsService: s,
                                  onChallengeCompleted: i,
                                  onChallengeInvalidated: o,
                                  onModalChallengeAbandoned: l
                                }
                              ),
                              c
                            ),
                            u.sendChallengeInitializedEvent(),
                            s.fireChallengeInitializedEvent(),
                            !0
                          }
                          return !1
                        }(S)
                      ) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.EMAIL_VERIFICATION:
                      return C = n.challengeId,
                      b = n.challengeType,
                      I = n.challengeMetadata,
                      S = rm(
                        rm(rm({
                          onChallengeDisplayed: function () {
                          },
                          challengeId: C
                        }, t), I),
                        {
                          onChallengeInvalidated: function (e) {
                            return t.onChallengeInvalidated(rm({
                              challengeType: b
                            }, e))
                          },
                          onChallengeCompleted: function (e) {
                            return t.onChallengeCompleted({
                              challengeType: b,
                              metadata: rm({
                                frictionContext: I.frictionContext
                              }, e)
                            })
                          }
                        }
                      ),
                      (
                        _ = function (e) {
                          var t = e.containerId,
                          n = e.challengeId,
                          r = e.renderInline,
                          a = e.appType,
                          i = e.onChallengeCompleted,
                          o = e.onChallengeInvalidated,
                          l = e.onModalChallengeAbandoned,
                          c = document.getElementById(t);
                          if (null !== c) {
                            (0, de.unmountComponentAtNode) (c);
                            var u = new fc(n),
                            s = new vc(a, yc);
                            return (0, de.render) (
                              se().createElement(
                                hc,
                                {
                                  challengeId: n,
                                  renderInline: r,
                                  eventService: u,
                                  metricsService: s,
                                  onChallengeCompleted: i,
                                  onChallengeInvalidated: o,
                                  onModalChallengeAbandoned: l
                                }
                              ),
                              c
                            ),
                            u.sendChallengeInitializedEvent(),
                            s.fireChallengeInitializedEvent(),
                            !0
                          }
                          return !1
                        }(S)
                      ) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    case Rc.BLOCK_SESSION:
                      return T = n.challengeMetadata,
                      S = rm(rm({
                        forceActionRedirectChallengeType: _o.BlockSession
                      }, t), T),
                      (_ = Go(S)) &&
                      void 0 !== t.onChallengeDisplayed &&
                      t.onChallengeDisplayed({
                        displayed: !0
                      }),
                      [
                        2,
                        Promise.resolve(_)
                      ];
                    default:
                      return n,
                      [
                        2,
                        !1
                      ]
                  }
                  return [2]
                }
              )
            )
          }
        )
      )
    },
    sm = 'generic-challenge-error',
    dm = function (e) {
      function t(n) {
        var r = e.call(this, t.getMessage(n)) ||
        this;
        return Object.setPrototypeOf(r, t.prototype),
        r.name = t.name,
        r._parameters = n,
        r._className = sm,
        r
      }
      return nm(t, e),
      t.match = function (e) {
        return 'object' == typeof e &&
        null !== e &&
        e._className === sm
      },
      t.matchAbandoned = function (e) {
        return t.match(e) &&
        e.parameters.kind === gc.ABANDONED
      },
      t.getMessage = function (e) {
        return 'Got (' + ['Kind: ' + e.kind,
        'Type: ' + (e.data.challengeType || 'unknown'),
        'Code: ' + (e.kind === gc.INVALIDATED ? e.data.errorCode : 'null')].join('; ') + ')'
      },
      Object.defineProperty(
        t.prototype,
        'parameters',
        {
          get: function () {
            return this._parameters
          },
          enumerable: !1,
          configurable: !0
        }
      ),
      t
    }(Error),
    pm = function (e) {
      return new Promise(
        (
          function (t, n) {
            var r,
            a = e.retryRequest,
            i = e.containerId,
            o = e.challengeId,
            l = e.challengeTypeRaw,
            c = e.challengeMetadataJsonBase64;
            try {
              r = atob(c)
            } catch (e) {
              if (
                e instanceof DOMException &&
                e.code === DOMException.INVALID_CHARACTER_ERR
              ) return console.error(Th, 'Base-64 decoding failed', e),
              void n(new dm({
                kind: gc.UNKNOWN,
                data: {
                }
              }));
              throw e
            }
            var u = cm(o, l, r);
            if (null === u) return console.error(Th, 'Challenge headers failed to be parsed'),
            n(new dm({
              kind: gc.UNKNOWN,
              data: {
              }
            })),
            void lm.fireParseFailureEvent();
            var s = i + '-' + l;
            if (null === document.getElementById(s)) {
              var d = document.createElement('div');
              d.id = s,
              document.body.appendChild(d)
            }
            um({
              challengeBaseProperties: {
                containerId: s,
                renderInline: !1,
                onChallengeCompleted: function (e) {
                  try {
                    t(a(o, btoa(JSON.stringify(e.metadata))))
                  } catch (e) {
                    if (
                      !(
                        e instanceof DOMException &&
                        e.code === DOMException.INVALID_CHARACTER_ERR
                      )
                    ) throw e;
                    console.error(Th, 'Base-64 encoding failed', e),
                    n(
                      new dm({
                        kind: gc.UNKNOWN,
                        data: {
                          challengeType: u.challengeType
                        }
                      })
                    )
                  }
                },
                onChallengeInvalidated: function (e) {
                  return n(new dm({
                    kind: gc.INVALIDATED,
                    data: e
                  }))
                },
                onModalChallengeAbandoned: function () {
                  return n(
                    new dm({
                      kind: gc.ABANDONED,
                      data: {
                        challengeType: u.challengeType
                      }
                    })
                  )
                }
              },
              challengeSpecificProperties: u
            }).then(
              (
                function (e) {
                  e ? lm.fireSuccessEvent(u.challengeType) : (
                    lm.fireRenderFailureEvent(u.challengeType),
                    console.error(Th, 'Challenge component failed to initialize'),
                    n(
                      new dm({
                        kind: gc.UNKNOWN,
                        data: {
                          challengeType: u.challengeType
                        }
                      })
                    )
                  )
                }
              )
            )
          }
        )
      )
    },
    hm = function () {
      if (null === document.getElementById('prelude')) {
        var e = document.createElement('script');
        e.src = Jl.url,
        e.async = !0,
        e.id = 'prelude',
        document.body.appendChild(e)
      }
    },
    fm = 'Hybrid Wrapper:';
    !function (e) {
      e.ACTION_TYPE = 'action-type',
      e.ALLOW_REMEMBER_DEVICE = 'allow-remember-device',
      e.APP_TYPE = 'app-type',
      e.BARISTA_MODE = 'barista-mode',
      e.CAPTCHA_ID = 'captcha-id',
      e.CHALLENGE_ID = 'challenge-id',
      e.CHALLENGE_METADATA_JSON = 'challenge-metadata-json',
      e.CHALLENGE_TYPE = 'challenge-type',
      e.DARK_MODE = 'dark-mode',
      e.DATA_EXCHANGE_BLOB = 'data-exchange-blob',
      e.GENERIC_CHALLENGE_TYPE = 'generic-challenge-type',
      e.INTEGRITY_TYPE = 'integrity-type',
      e.REQUEST_HASH = 'request-hash',
      e.PROOF_OF_SPACE_ARTIFACTS = 'proof-of-space-artifacts',
      e.PUZZLE_TYPE = 'puzzle-type',
      e.SESSION_ID = 'session-id',
      e.USER_ID = 'user-id',
      e.DEFAULT_TYPE = 'default-type',
      e.AVAILABLE_TYPES = 'available-types',
      e.DEFAULT_TYPE_METADATA_JSON = 'default-type-metadata-json',
      e.GENERIC_CHALLENGE_ID = 'generic-challenge-id',
      e.ORIGIN = 'origin'
    }(Wv || (Wv = {}));
    var vm = function (e) {
      var t = e.replace(/[^A-Za-z0-9-_]/g, ''),
      n = sr.fido2Util.base64UrlStringToBase64String(t);
      try {
        return atob(n)
      } catch (e) {
        if (
          e instanceof DOMException &&
          e.code === DOMException.INVALID_CHARACTER_ERR
        ) return console.error(fm, 'Base-64 decoding failed', e),
        null;
        throw e
      }
    },
    mm = Pv({
      challengeType: Hv(
        (function (e) {
          return 'string' == typeof e ? e.replace(/-/g, '') : e
        }),
        Mv([Vv(Rc),
        xv('generic')])
      ),
      darkMode: Mv([xv('false'),
      xv('true')]).default('false').transform((function (e) {
        return 'true' === e
      })),
      appType: wv().default('unknown'),
      baristaMode: Mv([xv('false'),
      xv('true')]).default('false').transform((function (e) {
        return 'true' === e
      })),
      origin: wv().default('')
    }),
    ym = Pv({
      actionType: Vv(_i),
      dataExchangeBlob: wv(),
      unifiedCaptchaId: wv()
    }),
    Em = Pv({
      userId: wv(),
      challengeId: wv(),
      actionType: Vv(wc),
      allowRememberDevice: Mv([xv('false'),
      xv('true')]).transform((function (e) {
        return 'true' === e
      }))
    }),
    gm = Pv({
      userId: wv(),
      sessionId: wv()
    }),
    Cm = Pv({
      defaultType: Vv(Ac),
      availableTypes: Rv(Vv(Ac)),
      defaultTypeMetadataJSON: wv().optional()
    }),
    bm = Pv({
      sessionId: wv()
    }),
    Im = Pv({
      challengeId: wv(),
      puzzleType: Vv(Lc)
    }),
    Tm = Pv({
      challengeId: wv()
    }),
    Sm = Pv({
      challengeId: wv(),
      integrityType: wv(),
      requestHash: wv()
    }),
    _m = Pv({
      challengeId: wv(),
      artifacts: Pv({
        puzzleType: Vv(Tc),
        seed: wv(),
        rounds: wv(),
        layers: wv()
      })
    }),
    Am = Pv({
      challengeId: wv().default(''),
      challengeType: Vv(Rc),
      challengeMetadataJson: wv()
    }),
    Nm = function (e, t, n, r) {
      return new (n || (n = Promise)) (
        (
          function (a, i) {
            function o(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              var t;
              e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(o, l)
            }
            c((r = r.apply(e, t || [])).next())
          }
        )
      )
    },
    Lm = function (e, t) {
      var n,
      r,
      a,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: l(0),
        throw : l(1),
        return : l(2)
      },
      'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this
      }),
      i;
      function l(i) {
        return function (l) {
          return function (i) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; o; ) try {
              if (
                n = 1,
                r &&
                (
                  a = 2 & i[0] ? r.return : i[0] ? r.throw ||
                  ((a = r.return) && a.call(r), 0) : r.next
                ) &&
                !(a = a.call(r, i[1])).done
              ) return a;
              switch (r = 0, a && (i = [
                  2 & i[0],
                  a.value
                ]), i[0]) {
                case 0:
                case 1:
                  a = i;
                  break;
                case 4:
                  return o.label++,
                  {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  o.label++,
                  r = i[1],
                  i = [
                    0
                  ];
                  continue;
                case 7:
                  i = o.ops.pop(),
                  o.trys.pop();
                  continue;
                default:
                  if (
                    !(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])
                  ) {
                    o = 0;
                    continue
                  }
                  if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    o.label = i[1];
                    break
                  }
                  if (6 === i[0] && o.label < a[1]) {
                    o.label = a[1],
                    a = i;
                    break
                  }
                  if (a && o.label < a[2]) {
                    o.label = a[2],
                    o.ops.push(i);
                    break
                  }
                  a[2] &&
                  o.ops.pop(),
                  o.trys.pop();
                  continue
              }
              i = t.call(e, o)
            } catch (e) {
              i = [
                6,
                e
              ],
              r = 0
            } finally {
              n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i,
          l])
        }
      }
    },
    Dm = 'light-theme',
    wm = 'dark-theme',
    Om = function (e, t, n) {
      if (window.parent) {
        var r = H.EnvironmentUrls.domain ? 'https://' + n + '.' + (
          H.EnvironmentUrls.domain.includes('sitetest') ? 'robloxlabs.com' : 'roblox.com'
        ) : 'URL_NOT_FOUND';
        window.parent.postMessage({
          genericChallengeResponse: {
            type: e,
            data: t
          }
        }, r)
      }
    },
    km = function (e, t, n, r) {
      var a,
      i;
      console.log(fm, 'Sending hybrid call:', t),
      null === (i = H.Hybrid.Navigation) ||
      void 0 === i ||
      i.navigateToFeature(
        ((a = {}).feature = t, a.data = n, a),
        (function () {
          return console.log(fm, 'Sent hybrid call:', t)
        })
      );
      var o = e[t],
      l = document.getElementById(o);
      if (null !== l && 'INPUT' === l.tagName) {
        l.value = JSON.stringify(n);
        var c = document.createEvent('HTMLEvents');
        c.initEvent('callbackInputChanged', !1, !1),
        l.dispatchEvent(c)
      }
      try {
        r &&
        Om(t, n, r)
      } catch (e) {
        console.error(fm, e)
      }
    },
    Rm = function (e, t, n) {
      return Nm(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var r,
            a,
            i,
            o;
            return Lm(
              this,
              (
                function (l) {
                  switch (l.label) {
                    case 0:
                      return null === (
                        r = function () {
                          var e = H.UrlParser.getParametersAsObject(),
                          t = {
                            actionType: e[Wv.ACTION_TYPE],
                            dataExchangeBlob: e[Wv.DATA_EXCHANGE_BLOB],
                            unifiedCaptchaId: e[Wv.CAPTCHA_ID]
                          },
                          n = ym.safeParse(t);
                          return n.success ? n.data : (console.error(fm, n.error), null)
                        }()
                      ) ? (km(t, Cc.CHALLENGE_PARSED, {
                        parsed: !1
                      }), [
                        2,
                        !1
                      ]) : (
                        km(t, Cc.CHALLENGE_PARSED, {
                          parsed: !0
                        }),
                        a = r.actionType,
                        i = r.dataExchangeBlob,
                        o = r.unifiedCaptchaId,
                        [
                          4,
                          Qi({
                            containerId: e,
                            actionType: a,
                            appType: n,
                            dataExchangeBlob: i,
                            unifiedCaptchaId: o,
                            renderInline: !0,
                            onChallengeDisplayed: function (e) {
                              return km(t, Cc.CHALLENGE_DISPLAYED, e)
                            },
                            onChallengeCompleted: function (e) {
                              return km(t, Cc.CHALLENGE_COMPLETED, e)
                            },
                            onChallengeInvalidated: function (e) {
                              return km(t, Cc.CHALLENGE_INVALIDATED, e)
                            },
                            onModalChallengeAbandoned: null
                          })
                        ]
                      );
                    case 1:
                      return !1 === l.sent() ? (km(t, Cc.CHALLENGE_INITIALIZED, {
                        initialized: !1
                      }), [
                        2,
                        !1
                      ]) : (km(t, Cc.CHALLENGE_INITIALIZED, {
                        initialized: !0
                      }), [
                        2,
                        !0
                      ])
                  }
                }
              )
            )
          }
        )
      )
    },
    Pm = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          userId: e[Wv.USER_ID],
          challengeId: e[Wv.CHALLENGE_ID],
          actionType: e[Wv.ACTION_TYPE],
          allowRememberDevice: e[Wv.ALLOW_REMEMBER_DEVICE]
        },
        n = Em.safeParse(t);
        return n.success ? n.data : (console.error(fm, n.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.userId,
      i = r.challengeId,
      o = r.actionType,
      l = r.allowRememberDevice;
      return !1 === Ih({
        containerId: e,
        userId: a,
        challengeId: i,
        actionType: o,
        appType: n,
        renderInline: !0,
        shouldModifyBrowserHistory: !0,
        shouldShowRememberDeviceCheckbox: l,
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    Mm = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          userId: e[Wv.USER_ID],
          sessionId: e[Wv.SESSION_ID]
        },
        n = gm.safeParse(t);
        return n.success ? n.data : (console.error(fm, n.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.userId,
      i = r.sessionId;
      return !1 === gp({
        containerId: e,
        userId: a,
        sessionId: i,
        appType: n,
        renderInline: !0,
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    xm = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          defaultType: e[Wv.DEFAULT_TYPE],
          availableTypes: e[Wv.AVAILABLE_TYPES].split(','),
          defaultTypeMetadataJSON: e[Wv.DEFAULT_TYPE_METADATA_JSON]
        },
        n = Cm.safeParse(t);
        if (!n.success) return console.error(fm, n.error),
        null;
        var r = n.data,
        a = r.defaultType,
        i = r.availableTypes,
        o = r.defaultTypeMetadataJSON;
        if (void 0 === o) return n.data;
        var l = vm(o);
        return null === l ? null : {
          defaultType: a,
          availableTypes: i,
          defaultTypeMetadataJSON: l
        }
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.defaultType,
      i = r.availableTypes,
      o = r.defaultTypeMetadataJSON,
      l = null;
      if (void 0 !== o) try {
        l = JSON.parse(o)
      } catch (e) {
        return !1
      }
      return !1 === Id({
        containerId: e,
        renderInline: !0,
        defaultType: a,
        availableTypes: i,
        defaultTypeMetadata: l,
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    Vm = function (e, t, n) {
      var r = function () {
        var e = {
          challengeId: H.UrlParser.getParametersAsObject() [Wv.CHALLENGE_ID]
        },
        t = Tm.safeParse(e);
        return t.success ? t.data : (console.error(fm, t.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.challengeId;
      return !1 === Eu({
        containerId: e,
        challengeId: a,
        renderInline: !0,
        onChallengeDisplayed: function (e) {
          return km(t, Cc.CHALLENGE_DISPLAYED, e)
        },
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !0
      }), !0)
    },
    Hm = function (e, t, n) {
      var r = function () {
        var e = {
          sessionId: H.UrlParser.getParametersAsObject() [Wv.SESSION_ID]
        },
        t = bm.safeParse(e);
        return t.success ? t.data : (console.error(fm, t.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.sessionId;
      return !1 === Ss({
        containerId: e,
        sessionId: a,
        renderInline: !0,
        onChallengeDisplayed: function (e) {
          return km(t, Cc.CHALLENGE_DISPLAYED, e)
        },
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !0
      }), !0)
    },
    Wm = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          challengeId: e[Wv.CHALLENGE_ID],
          puzzleType: e[Wv.PUZZLE_TYPE]
        },
        n = Im.safeParse(t);
        return n.success ? n.data : (console.error(fm, n.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.challengeId,
      i = r.puzzleType;
      return !1 === Xd({
        containerId: e,
        challengeId: a,
        puzzleType: i,
        appType: n,
        renderInline: !0,
        onChallengeDisplayed: function (e) {
          return km(t, Cc.CHALLENGE_DISPLAYED, e)
        },
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !0
      }), !0)
    },
    Um = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          challengeId: e[Wv.CHALLENGE_ID],
          integrityType: e[Wv.INTEGRITY_TYPE],
          requestHash: e[Wv.REQUEST_HASH]
        },
        n = Sm.safeParse(t);
        return n.success ? n.data : (console.error(fm, n.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.challengeId,
      i = r.integrityType,
      o = r.requestHash;
      return !1 === bo({
        containerId: e,
        challengeId: a,
        integrityType: i,
        requestHash: o,
        renderInline: !0,
        onChallengeDisplayed: function (e) {
          return km(t, Cc.CHALLENGE_DISPLAYED, e)
        },
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !0
      }), !0)
    },
    Gm = function (e, t, n) {
      var r = function () {
        var e = H.UrlParser.getParametersAsObject(),
        t = {
          challengeId: e[Wv.CHALLENGE_ID],
          artifacts: e[Wv.PROOF_OF_SPACE_ARTIFACTS]
        },
        n = _m.safeParse(t);
        return n.success ? n.data : (console.error(fm, n.error), null)
      }();
      if (null === r) return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !1
      }),
      !1;
      km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      });
      var a = r.challengeId,
      i = r.artifacts;
      return !1 === Xu({
        containerId: e,
        challengeId: a,
        artifacts: i,
        renderInline: !0,
        onChallengeDisplayed: function (e) {
          return km(t, Cc.CHALLENGE_DISPLAYED, e)
        },
        onChallengeCompleted: function (e) {
          return km(t, Cc.CHALLENGE_COMPLETED, e)
        },
        onChallengeInvalidated: function (e) {
          return km(t, Cc.CHALLENGE_INVALIDATED, e)
        },
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !0
      }), !0)
    },
    zm = function (e, t, n, r) {
      return Nm(
        void 0,
        void 0,
        Promise,
        (
          function () {
            var a,
            i,
            o;
            return Lm(
              this,
              (
                function (l) {
                  switch (l.label) {
                    case 0:
                      return a = window.location.href.split('?') [0],
                      null === (
                        i = function () {
                          var e = H.UrlParser.getParametersAsObject(),
                          t = {
                            challengeId: e[Wv.GENERIC_CHALLENGE_ID],
                            challengeType: e[Wv.GENERIC_CHALLENGE_TYPE],
                            challengeMetadataJson: e[Wv.CHALLENGE_METADATA_JSON]
                          },
                          n = Am.safeParse(t);
                          if (!n.success) return console.error(fm, n.error),
                          null;
                          var r = n.data,
                          a = r.challengeId,
                          i = r.challengeType,
                          o = r.challengeMetadataJson,
                          l = vm(o);
                          return null === l ? null : cm(a, i, l)
                        }()
                      ) ? (km(t, Cc.CHALLENGE_PARSED, {
                        parsed: !1
                      }), [
                        2,
                        !1
                      ]) : (
                        km(t, Cc.CHALLENGE_PARSED, {
                          parsed: !0
                        }),
                        r.length > 0 ? [
                          4,
                          um({
                            challengeBaseProperties: {
                              containerId: e,
                              renderInline: !1,
                              appType: n,
                              shouldModifyBrowserHistory: !0,
                              onChallengeCompleted: function (e) {
                                window.history.replaceState(null, '', a),
                                km(t, Cc.CHALLENGE_COMPLETED, e, r)
                              },
                              onChallengeInvalidated: function (e) {
                                window.history.replaceState(null, '', a),
                                km(t, Cc.CHALLENGE_INVALIDATED, e, r)
                              },
                              onChallengeDisplayed: function (e) {
                                km(t, Cc.CHALLENGE_DISPLAYED, e, r)
                              },
                              onModalChallengeAbandoned: function () {
                                km(t, Cc.CHALLENGE_INVALIDATED, {
                                  abandoned: !0
                                }, r)
                              }
                            },
                            challengeSpecificProperties: i
                          })
                        ] : [
                          3,
                          2
                        ]
                      );
                    case 1:
                      return o = l.sent(),
                      [
                        3,
                        4
                      ];
                    case 2:
                      return [4,
                      um({
                        challengeBaseProperties: {
                          containerId: e,
                          renderInline: !0,
                          appType: n,
                          shouldModifyBrowserHistory: !0,
                          onChallengeCompleted: function (e) {
                            window.history.replaceState(null, '', a),
                            km(t, Cc.CHALLENGE_COMPLETED, e)
                          },
                          onChallengeInvalidated: function (e) {
                            window.history.replaceState(null, '', a),
                            km(t, Cc.CHALLENGE_INVALIDATED, e)
                          },
                          onChallengeDisplayed: function (e) {
                            km(t, Cc.CHALLENGE_DISPLAYED, e)
                          },
                          onModalChallengeAbandoned: null
                        },
                        challengeSpecificProperties: i
                      })];
                    case 3:
                      o = l.sent(),
                      l.label = 4;
                    case 4:
                      return !1 === o ? (km(t, Cc.CHALLENGE_INITIALIZED, {
                        initialized: !1
                      }, r), [
                        2,
                        !1
                      ]) : (km(t, Cc.CHALLENGE_INITIALIZED, {
                        initialized: !0
                      }, r), [
                        2,
                        !0
                      ])
                  }
                }
              )
            )
          }
        )
      )
    },
    Fm = function (e, t, n) {
      return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      }),
      !1 === Go({
        containerId: e,
        forceActionRedirectChallengeType: _o.ForceAuthenticator,
        renderInline: !0,
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    Bm = function (e, t, n) {
      return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      }),
      !1 === Go({
        containerId: e,
        forceActionRedirectChallengeType: _o.ForceTwoStepVerification,
        renderInline: !0,
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    qm = function (e, t, n) {
      return km(t, Cc.CHALLENGE_PARSED, {
        parsed: !0
      }),
      !1 === Go({
        containerId: e,
        forceActionRedirectChallengeType: _o.BlockSession,
        renderInline: !0,
        onModalChallengeAbandoned: null
      }) ? (km(t, Cc.CHALLENGE_INITIALIZED, {
        initialized: !1
      }), !1) : (
        km(t, Cc.CHALLENGE_INITIALIZED, {
          initialized: !0
        }),
        km(t, Cc.CHALLENGE_DISPLAYED, {
          displayed: !0
        }),
        !0
      )
    },
    Zm = function (e) {
      var t = e.containerId,
      n = e.hybridTargetToCallbackInputId;
      return Nm(
        void 0,
        void 0,
        void 0,
        (
          function () {
            var e;
            return Lm(
              this,
              (
                function (r) {
                  var a,
                  i,
                  o;
                  if (
                    km(n, Cc.CHALLENGE_PAGE_LOADED, {
                      pageLoaded: !0
                    }),
                    a = H.UrlParser.getParametersAsObject(),
                    i = {
                      challengeType: a[Wv.CHALLENGE_TYPE],
                      darkMode: a[Wv.DARK_MODE],
                      appType: a[Wv.APP_TYPE],
                      baristaMode: a[Wv.BARISTA_MODE],
                      origin: a[Wv.ORIGIN]
                    },
                    o = mm.safeParse(i),
                    null === (e = o.success ? o.data : (console.error(fm, o.error), null))
                  ) return km(n, Cc.CHALLENGE_PARSED, {
                    parsed: !1
                  }),
                  [
                    2,
                    !1
                  ];
                  switch (
                      e.baristaMode &&
                      (document.body.style.backgroundColor = 'transparent'),
                      e.darkMode ? (
                        document.body.classList.remove(Dm),
                        document.body.classList.add(wm)
                      ) : (
                        document.body.classList.remove(wm),
                        document.body.classList.add(Dm)
                      ),
                      e.challengeType
                    ) {
                    case Rc.CAPTCHA:
                      return [2,
                      Rm(t, n, e.appType)];
                    case Rc.FORCE_AUTHENTICATOR:
                      return [2,
                      Fm(t, n, e.appType)];
                    case Rc.FORCE_TWO_STEP_VERIFICATION:
                      return [2,
                      Bm(t, n, e.appType)];
                    case Rc.TWO_STEP_VERIFICATION:
                      return [2,
                      Pm(t, n, e.appType)];
                    case Rc.SECURITY_QUESTIONS:
                      return [2,
                      Mm(t, n, e.appType)];
                    case Rc.REAUTHENTICATION:
                      return [2,
                      xm(t, n, e.appType)];
                    case Rc.PROOF_OF_WORK:
                      return [2,
                      Hm(t, n, e.appType)];
                    case Rc.ROSTILE:
                      return [2,
                      Wm(t, n, e.appType)];
                    case Rc.PRIVATE_ACCESS_TOKEN:
                      return [2,
                      Vm(t, n, e.appType)];
                    case Rc.DEVICE_INTEGRITY:
                      return [2,
                      Um(t, n, e.appType)];
                    case Rc.PROOF_OF_SPACE:
                      return [2,
                      Gm(t, n, e.appType)];
                    case Rc.PHONE_VERIFICATION:
                    case Rc.EMAIL_VERIFICATION:
                      return [2,
                      !1];
                    case Rc.BLOCK_SESSION:
                      return [2,
                      qm(t, n, e.appType)];
                    case 'generic':
                      return [2,
                      zm(t, n, e.appType, e.origin)];
                    default:
                      return e.challengeType,
                      [
                        2,
                        !1
                      ]
                  }
                  return [2]
                }
              )
            )
          }
        )
      )
    },
    jm = {
      Captcha: A,
      DeviceIntegrity: N,
      ForceActionRedirect: L,
      Generic: x,
      HybridWrapper: V,
      PrivateAccessToken: D,
      ProofOfSpace: w,
      ProofOfWork: O,
      Reauthentication: k,
      Rostile: R,
      SecurityQuestions: P,
      TwoStepVerification: M
    };
    Object.assign(W(), {
      AccountIntegrityChallengeService: jm
    }),
    hm()
  }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/9b2baaf1aaa3d75775ace9df7d7f78d0-challenge.bundle.min.js.map
/* Bundle detector */
window.Roblox &&
window.Roblox.BundleDetector &&
window.Roblox.BundleDetector.bundleDetected('Challenge');
