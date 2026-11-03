// analysis/pretty/main.js:19548; webpack module 151
function(e, t, n) {
    (function() {
        var t;
        function n(e, t, n) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t));
        }
        function r() {
            return new n(null);
        }
        var i = "undefined" != typeof navigator;
        i && "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = function(e, t, n, r, i, o) {
            for (var a = 32767 & t, s = t >> 15; --o >= 0; ) {
                var l = 32767 & this[e], c = this[e++] >> 15, u = s * l + c * a;
                i = ((l = a * l + ((32767 & u) << 15) + n[r] + (1073741823 & i)) >>> 30) + (u >>> 15) + s * c + (i >>> 30), 
                n[r++] = 1073741823 & l;
            }
            return i;
        }, t = 30) : i && "Netscape" != navigator.appName ? (n.prototype.am = function(e, t, n, r, i, o) {
            for (;--o >= 0; ) {
                var a = t * this[e++] + n[r] + i;
                i = Math.floor(a / 67108864), n[r++] = 67108863 & a;
            }
            return i;
        }, t = 26) : (n.prototype.am = function(e, t, n, r, i, o) {
            for (var a = 16383 & t, s = t >> 14; --o >= 0; ) {
                var l = 16383 & this[e], c = this[e++] >> 14, u = s * l + c * a;
                i = ((l = a * l + ((16383 & u) << 14) + n[r] + i) >> 28) + (u >> 14) + s * c, n[r++] = 268435455 & l;
            }
            return i;
        }, t = 28), n.prototype.DB = t, n.prototype.DM = (1 << t) - 1, n.prototype.DV = 1 << t;
        n.prototype.FV = Math.pow(2, 52), n.prototype.F1 = 52 - t, n.prototype.F2 = 2 * t - 52;
        var o, a, s = new Array;
        for (o = "0".charCodeAt(0), a = 0; a <= 9; ++a) s[o++] = a;
        for (o = "a".charCodeAt(0), a = 10; a < 36; ++a) s[o++] = a;
        for (o = "A".charCodeAt(0), a = 10; a < 36; ++a) s[o++] = a;
        function l(e) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
        }
        function c(e, t) {
            var n = s[e.charCodeAt(t)];
            return null == n ? -1 : n;
        }
        function u(e) {
            var t = r();
            return t.fromInt(e), t;
        }
        function d(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 
            0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, 
            n += 1), n;
        }
        function h(e) {
            this.m = e;
        }
        function p(e) {
            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
        }
        function f(e, t) {
            return e & t;
        }
        function _(e, t) {
            return e | t;
        }
        function m(e, t) {
            return e ^ t;
        }
        function g(e, t) {
            return e & ~t;
        }
        function v(e) {
            if (0 == e) return -1;
            var t = 0;
            return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 
            0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, 
            t;
        }
        function y(e) {
            for (var t = 0; 0 != e; ) e &= e - 1, ++t;
            return t;
        }
        function E() {}
        function b(e) {
            return e;
        }
        function w(e) {
            this.r2 = r(), this.q3 = r(), n.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), 
            this.m = e;
        }
        h.prototype.convert = function(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }, h.prototype.revert = function(e) {
            return e;
        }, h.prototype.reduce = function(e) {
            e.divRemTo(this.m, null, e);
        }, h.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n);
        }, h.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        }, p.prototype.convert = function(e) {
            var t = r();
            return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t), 
            t;
        }, p.prototype.revert = function(e) {
            var t = r();
            return e.copyTo(t), this.reduce(t), t;
        }, p.prototype.reduce = function(e) {
            for (;e.t <= this.mt2; ) e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t], r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; ) e[n] -= e.DV, 
                e[++n]++;
            }
            e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }, p.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n);
        }, p.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        }, n.prototype.copyTo = function(e) {
            for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
            e.t = this.t, e.s = this.s;
        }, n.prototype.fromInt = function(e) {
            this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
        }, n.prototype.fromString = function(e, t) {
            var r;
            if (16 == t) r = 4; else if (8 == t) r = 3; else if (256 == t) r = 8; else if (2 == t) r = 1; else if (32 == t) r = 5; else {
                if (4 != t) return void this.fromRadix(e, t);
                r = 2;
            }
            this.t = 0, this.s = 0;
            for (var i = e.length, o = !1, a = 0; --i >= 0; ) {
                var s = 8 == r ? 255 & e[i] : c(e, i);
                s < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1, 0 == a ? this[this.t++] = s : a + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a, 
                this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a, (a += r) >= this.DB && (a -= this.DB));
            }
            8 == r && 0 != (128 & e[0]) && (this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)), 
            this.clamp(), o && n.ZERO.subTo(this, this);
        }, n.prototype.clamp = function() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) --this.t;
        }, n.prototype.dlShiftTo = function(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n) t[n] = 0;
            t.t = this.t + e, t.s = this.s;
        }, n.prototype.drShiftTo = function(e, t) {
            for (var n = e; n < this.t; ++n) t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0), t.s = this.s;
        }, n.prototype.lShiftTo = function(e, t) {
            var n, r = e % this.DB, i = this.DB - r, o = (1 << i) - 1, a = Math.floor(e / this.DB), s = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n) t[n + a + 1] = this[n] >> i | s, s = (this[n] & o) << r;
            for (n = a - 1; n >= 0; --n) t[n] = 0;
            t[a] = s, t.t = this.t + a + 1, t.s = this.s, t.clamp();
        }, n.prototype.rShiftTo = function(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t) t.t = 0; else {
                var r = e % this.DB, i = this.DB - r, o = (1 << r) - 1;
                t[0] = this[n] >> r;
                for (var a = n + 1; a < this.t; ++a) t[a - n - 1] |= (this[a] & o) << i, t[a - n] = this[a] >> r;
                r > 0 && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp();
            }
        }, n.prototype.subTo = function(e, t) {
            for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; ) r += this[n] - e[n], 
            t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r -= e.s; n < this.t; ) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; n < e.t; ) r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
                r -= e.s;
            }
            t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, 
            t.clamp();
        }, n.prototype.multiplyTo = function(e, t) {
            var r = this.abs(), i = e.abs(), o = r.t;
            for (t.t = o + i.t; --o >= 0; ) t[o] = 0;
            for (o = 0; o < i.t; ++o) t[o + r.t] = r.am(0, i[o], t, o, 0, r.t);
            t.s = 0, t.clamp(), this.s != e.s && n.ZERO.subTo(t, t);
        }, n.prototype.squareTo = function(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; ) e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, 
                e[n + t.t + 1] = 1);
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp();
        }, n.prototype.divRemTo = function(e, t, i) {
            var o = e.abs();
            if (!(o.t <= 0)) {
                var a = this.abs();
                if (a.t < o.t) return null != t && t.fromInt(0), void (null != i && this.copyTo(i));
                null == i && (i = r());
                var s = r(), l = this.s, c = e.s, u = this.DB - d(o[o.t - 1]);
                u > 0 ? (o.lShiftTo(u, s), a.lShiftTo(u, i)) : (o.copyTo(s), a.copyTo(i));
                var h = s.t, p = s[h - 1];
                if (0 != p) {
                    var f = p * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0), _ = this.FV / f, m = (1 << this.F1) / f, g = 1 << this.F2, v = i.t, y = v - h, E = null == t ? r() : t;
                    for (s.dlShiftTo(y, E), i.compareTo(E) >= 0 && (i[i.t++] = 1, i.subTo(E, i)), n.ONE.dlShiftTo(h, E), 
                    E.subTo(s, s); s.t < h; ) s[s.t++] = 0;
                    for (;--y >= 0; ) {
                        var b = i[--v] == p ? this.DM : Math.floor(i[v] * _ + (i[v - 1] + g) * m);
                        if ((i[v] += s.am(0, b, i, y, 0, h)) < b) for (s.dlShiftTo(y, E), i.subTo(E, i); i[v] < --b; ) i.subTo(E, i);
                    }
                    null != t && (i.drShiftTo(h, t), l != c && n.ZERO.subTo(t, t)), i.t = h, i.clamp(), 
                    u > 0 && i.rShiftTo(u, i), l < 0 && n.ZERO.subTo(i, i);
                }
            }
        }, n.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var e = this[0];
            if (0 == (1 & e)) return 0;
            var t = 3 & e;
            return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t;
        }, n.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }, n.prototype.exp = function(e, t) {
            if (e > 4294967295 || e < 1) return n.ONE;
            var i = r(), o = r(), a = t.convert(this), s = d(e) - 1;
            for (a.copyTo(i); --s >= 0; ) if (t.sqrTo(i, o), (e & 1 << s) > 0) t.mulTo(o, a, i); else {
                var l = i;
                i = o, o = l;
            }
            return t.revert(i);
        }, n.prototype.toString = function(e) {
            if (this.s < 0) return "-" + this.negate().toString(e);
            var t;
            if (16 == e) t = 4; else if (8 == e) t = 3; else if (2 == e) t = 1; else if (32 == e) t = 5; else {
                if (4 != e) return this.toRadix(e);
                t = 2;
            }
            var n, r = (1 << t) - 1, i = !1, o = "", a = this.t, s = this.DB - a * this.DB % t;
            if (a-- > 0) for (s < this.DB && (n = this[a] >> s) > 0 && (i = !0, o = l(n)); a >= 0; ) s < t ? (n = (this[a] & (1 << s) - 1) << t - s, 
            n |= this[--a] >> (s += this.DB - t)) : (n = this[a] >> (s -= t) & r, s <= 0 && (s += this.DB, 
            --a)), n > 0 && (i = !0), i && (o += l(n));
            return i ? o : "0";
        }, n.prototype.negate = function() {
            var e = r();
            return n.ZERO.subTo(this, e), e;
        }, n.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, n.prototype.compareTo = function(e) {
            var t = this.s - e.s;
            if (0 != t) return t;
            var n = this.t;
            if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
            for (;--n >= 0; ) if (0 != (t = this[n] - e[n])) return t;
            return 0;
        }, n.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM);
        }, n.prototype.mod = function(e) {
            var t = r();
            return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t), 
            t;
        }, n.prototype.modPowInt = function(e, t) {
            var n;
            return n = e < 256 || t.isEven() ? new h(t) : new p(t), this.exp(e, n);
        }, n.ZERO = u(0), n.ONE = u(1), E.prototype.convert = b, E.prototype.revert = b, 
        E.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n);
        }, E.prototype.sqrTo = function(e, t) {
            e.squareTo(t);
        }, w.prototype.convert = function(e) {
            if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
            if (e.compareTo(this.m) < 0) return e;
            var t = r();
            return e.copyTo(t), this.reduce(t), t;
        }, w.prototype.revert = function(e) {
            return e;
        }, w.prototype.reduce = function(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, 
            e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; ) e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) e.subTo(this.m, e);
        }, w.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n);
        }, w.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        };
        var S, T, A, O = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], C = (1 << 26) / O[O.length - 1];
        function N() {
            var e;
            e = (new Date).getTime(), T[A++] ^= 255 & e, T[A++] ^= e >> 8 & 255, T[A++] ^= e >> 16 & 255, 
            T[A++] ^= e >> 24 & 255, A >= P && (A -= P);
        }
        if (n.prototype.chunkSize = function(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e));
        }, n.prototype.toRadix = function(e) {
            if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
            var t = this.chunkSize(e), n = Math.pow(e, t), i = u(n), o = r(), a = r(), s = "";
            for (this.divRemTo(i, o, a); o.signum() > 0; ) s = (n + a.intValue()).toString(e).substr(1) + s, 
            o.divRemTo(i, o, a);
            return a.intValue().toString(e) + s;
        }, n.prototype.fromRadix = function(e, t) {
            this.fromInt(0), null == t && (t = 10);
            for (var r = this.chunkSize(t), i = Math.pow(t, r), o = !1, a = 0, s = 0, l = 0; l < e.length; ++l) {
                var u = c(e, l);
                u < 0 ? "-" == e.charAt(l) && 0 == this.signum() && (o = !0) : (s = t * s + u, ++a >= r && (this.dMultiply(i), 
                this.dAddOffset(s, 0), a = 0, s = 0));
            }
            a > 0 && (this.dMultiply(Math.pow(t, a)), this.dAddOffset(s, 0)), o && n.ZERO.subTo(this, this);
        }, n.prototype.fromNumber = function(e, t, r) {
            if ("number" == typeof t) if (e < 2) this.fromInt(1); else for (this.fromNumber(e, r), 
            this.testBit(e - 1) || this.bitwiseTo(n.ONE.shiftLeft(e - 1), _, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t); ) this.dAddOffset(2, 0), 
            this.bitLength() > e && this.subTo(n.ONE.shiftLeft(e - 1), this); else {
                var i = new Array, o = 7 & e;
                i.length = 1 + (e >> 3), t.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, 
                this.fromString(i, 256);
            }
        }, n.prototype.bitwiseTo = function(e, t, n) {
            var r, i, o = Math.min(e.t, this.t);
            for (r = 0; r < o; ++r) n[r] = t(this[r], e[r]);
            if (e.t < this.t) {
                for (i = e.s & this.DM, r = o; r < this.t; ++r) n[r] = t(this[r], i);
                n.t = this.t;
            } else {
                for (i = this.s & this.DM, r = o; r < e.t; ++r) n[r] = t(i, e[r]);
                n.t = e.t;
            }
            n.s = t(this.s, e.s), n.clamp();
        }, n.prototype.changeBit = function(e, t) {
            var r = n.ONE.shiftLeft(e);
            return this.bitwiseTo(r, t, r), r;
        }, n.prototype.addTo = function(e, t) {
            for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; ) r += this[n] + e[n], 
            t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r += e.s; n < this.t; ) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; n < e.t; ) r += e[n], t[n++] = r & this.DM, r >>= this.DB;
                r += e.s;
            }
            t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, 
            t.clamp();
        }, n.prototype.dMultiply = function(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, n.prototype.dAddOffset = function(e, t) {
            if (0 != e) {
                for (;this.t <= t; ) this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV; ) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), 
                ++this[t];
            }
        }, n.prototype.multiplyLowerTo = function(e, t, n) {
            var r, i = Math.min(this.t + e.t, t);
            for (n.s = 0, n.t = i; i > 0; ) n[--i] = 0;
            for (r = n.t - this.t; i < r; ++i) n[i + this.t] = this.am(0, e[i], n, i, 0, this.t);
            for (r = Math.min(e.t, t); i < r; ++i) this.am(0, e[i], n, i, 0, t - i);
            n.clamp();
        }, n.prototype.multiplyUpperTo = function(e, t, n) {
            --t;
            var r = n.t = this.t + e.t - t;
            for (n.s = 0; --r >= 0; ) n[r] = 0;
            for (r = Math.max(t - this.t, 0); r < e.t; ++r) n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
            n.clamp(), n.drShiftTo(1, n);
        }, n.prototype.modInt = function(e) {
            if (e <= 0) return 0;
            var t = this.DV % e, n = this.s < 0 ? e - 1 : 0;
            if (this.t > 0) if (0 == t) n = this[0] % e; else for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
            return n;
        }, n.prototype.millerRabin = function(e) {
            var t = this.subtract(n.ONE), i = t.getLowestSetBit();
            if (i <= 0) return !1;
            var o = t.shiftRight(i);
            (e = e + 1 >> 1) > O.length && (e = O.length);
            for (var a = r(), s = 0; s < e; ++s) {
                a.fromInt(O[Math.floor(Math.random() * O.length)]);
                var l = a.modPow(o, this);
                if (0 != l.compareTo(n.ONE) && 0 != l.compareTo(t)) {
                    for (var c = 1; c++ < i && 0 != l.compareTo(t); ) if (0 == (l = l.modPowInt(2, this)).compareTo(n.ONE)) return !1;
                    if (0 != l.compareTo(t)) return !1;
                }
            }
            return !0;
        }, n.prototype.clone = function() {
            var e = r();
            return this.copyTo(e), e;
        }, n.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, n.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, n.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, n.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, n.prototype.toByteArray = function() {
            var e = this.t, t = new Array;
            t[0] = this.s;
            var n, r = this.DB - e * this.DB % 8, i = 0;
            if (e-- > 0) for (r < this.DB && (n = this[e] >> r) != (this.s & this.DM) >> r && (t[i++] = n | this.s << this.DB - r); e >= 0; ) r < 8 ? (n = (this[e] & (1 << r) - 1) << 8 - r, 
            n |= this[--e] >> (r += this.DB - 8)) : (n = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
            --e)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, 
            (i > 0 || n != this.s) && (t[i++] = n);
            return t;
        }, n.prototype.equals = function(e) {
            return 0 == this.compareTo(e);
        }, n.prototype.min = function(e) {
            return this.compareTo(e) < 0 ? this : e;
        }, n.prototype.max = function(e) {
            return this.compareTo(e) > 0 ? this : e;
        }, n.prototype.and = function(e) {
            var t = r();
            return this.bitwiseTo(e, f, t), t;
        }, n.prototype.or = function(e) {
            var t = r();
            return this.bitwiseTo(e, _, t), t;
        }, n.prototype.xor = function(e) {
            var t = r();
            return this.bitwiseTo(e, m, t), t;
        }, n.prototype.andNot = function(e) {
            var t = r();
            return this.bitwiseTo(e, g, t), t;
        }, n.prototype.not = function() {
            for (var e = r(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
            return e.t = this.t, e.s = ~this.s, e;
        }, n.prototype.shiftLeft = function(e) {
            var t = r();
            return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }, n.prototype.shiftRight = function(e) {
            var t = r();
            return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }, n.prototype.getLowestSetBit = function() {
            for (var e = 0; e < this.t; ++e) if (0 != this[e]) return e * this.DB + v(this[e]);
            return this.s < 0 ? this.t * this.DB : -1;
        }, n.prototype.bitCount = function() {
            for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n) e += y(this[n] ^ t);
            return e;
        }, n.prototype.testBit = function(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB);
        }, n.prototype.setBit = function(e) {
            return this.changeBit(e, _);
        }, n.prototype.clearBit = function(e) {
            return this.changeBit(e, g);
        }, n.prototype.flipBit = function(e) {
            return this.changeBit(e, m);
        }, n.prototype.add = function(e) {
            var t = r();
            return this.addTo(e, t), t;
        }, n.prototype.subtract = function(e) {
            var t = r();
            return this.subTo(e, t), t;
        }, n.prototype.multiply = function(e) {
            var t = r();
            return this.multiplyTo(e, t), t;
        }, n.prototype.divide = function(e) {
            var t = r();
            return this.divRemTo(e, t, null), t;
        }, n.prototype.remainder = function(e) {
            var t = r();
            return this.divRemTo(e, null, t), t;
        }, n.prototype.divideAndRemainder = function(e) {
            var t = r(), n = r();
            return this.divRemTo(e, t, n), new Array(t, n);
        }, n.prototype.modPow = function(e, t) {
            var n, i, o = e.bitLength(), a = u(1);
            if (o <= 0) return a;
            n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, i = o < 8 ? new h(t) : t.isEven() ? new w(t) : new p(t);
            var s = new Array, l = 3, c = n - 1, f = (1 << n) - 1;
            if (s[1] = i.convert(this), n > 1) {
                var _ = r();
                for (i.sqrTo(s[1], _); l <= f; ) s[l] = r(), i.mulTo(_, s[l - 2], s[l]), l += 2;
            }
            var m, g, v = e.t - 1, y = !0, E = r();
            for (o = d(e[v]) - 1; v >= 0; ) {
                for (o >= c ? m = e[v] >> o - c & f : (m = (e[v] & (1 << o + 1) - 1) << c - o, v > 0 && (m |= e[v - 1] >> this.DB + o - c)), 
                l = n; 0 == (1 & m); ) m >>= 1, --l;
                if ((o -= l) < 0 && (o += this.DB, --v), y) s[m].copyTo(a), y = !1; else {
                    for (;l > 1; ) i.sqrTo(a, E), i.sqrTo(E, a), l -= 2;
                    l > 0 ? i.sqrTo(a, E) : (g = a, a = E, E = g), i.mulTo(E, s[m], a);
                }
                for (;v >= 0 && 0 == (e[v] & 1 << o); ) i.sqrTo(a, E), g = a, a = E, E = g, --o < 0 && (o = this.DB - 1, 
                --v);
            }
            return i.revert(a);
        }, n.prototype.modInverse = function(e) {
            var t = e.isEven();
            if (this.isEven() && t || 0 == e.signum()) return n.ZERO;
            for (var r = e.clone(), i = this.clone(), o = u(1), a = u(0), s = u(0), l = u(1); 0 != r.signum(); ) {
                for (;r.isEven(); ) r.rShiftTo(1, r), t ? (o.isEven() && a.isEven() || (o.addTo(this, o), 
                a.subTo(e, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                for (;i.isEven(); ) i.rShiftTo(1, i), t ? (s.isEven() && l.isEven() || (s.addTo(this, s), 
                l.subTo(e, l)), s.rShiftTo(1, s)) : l.isEven() || l.subTo(e, l), l.rShiftTo(1, l);
                r.compareTo(i) >= 0 ? (r.subTo(i, r), t && o.subTo(s, o), a.subTo(l, a)) : (i.subTo(r, i), 
                t && s.subTo(o, s), l.subTo(a, l));
            }
            return 0 != i.compareTo(n.ONE) ? n.ZERO : l.compareTo(e) >= 0 ? l.subtract(e) : l.signum() < 0 ? (l.addTo(e, l), 
            l.signum() < 0 ? l.add(e) : l) : l;
        }, n.prototype.pow = function(e) {
            return this.exp(e, new E);
        }, n.prototype.gcd = function(e) {
            var t = this.s < 0 ? this.negate() : this.clone(), n = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(n) < 0) {
                var r = t;
                t = n, n = r;
            }
            var i = t.getLowestSetBit(), o = n.getLowestSetBit();
            if (o < 0) return t;
            for (i < o && (o = i), o > 0 && (t.rShiftTo(o, t), n.rShiftTo(o, n)); t.signum() > 0; ) (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t), 
            (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), t.compareTo(n) >= 0 ? (t.subTo(n, t), 
            t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n));
            return o > 0 && n.lShiftTo(o, n), n;
        }, n.prototype.isProbablePrime = function(e) {
            var t, n = this.abs();
            if (1 == n.t && n[0] <= O[O.length - 1]) {
                for (t = 0; t < O.length; ++t) if (n[0] == O[t]) return !0;
                return !1;
            }
            if (n.isEven()) return !1;
            for (t = 1; t < O.length; ) {
                for (var r = O[t], i = t + 1; i < O.length && r < C; ) r *= O[i++];
                for (r = n.modInt(r); t < i; ) if (r % O[t++] == 0) return !1;
            }
            return n.millerRabin(e);
        }, n.prototype.square = function() {
            var e = r();
            return this.squareTo(e), e;
        }, n.prototype.Barrett = w, null == T) {
            var I;
            if (T = new Array, A = 0, "undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
                var R = new Uint8Array(32);
                for (window.crypto.getRandomValues(R), I = 0; I < 32; ++I) T[A++] = R[I];
            } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                var D = window.crypto.random(32);
                for (I = 0; I < D.length; ++I) T[A++] = 255 & D.charCodeAt(I);
            }
            for (;A < P; ) I = Math.floor(65536 * Math.random()), T[A++] = I >>> 8, T[A++] = 255 & I;
            A = 0, N();
        }
        function L() {
            if (null == S) {
                for (N(), (S = new M).init(T), A = 0; A < T.length; ++A) T[A] = 0;
                A = 0;
            }
            return S.next();
        }
        function k() {}
        function M() {
            this.i = 0, this.j = 0, this.S = new Array;
        }
        k.prototype.nextBytes = function(e) {
            var t;
            for (t = 0; t < e.length; ++t) e[t] = L();
        }, M.prototype.init = function(e) {
            var t, n, r;
            for (t = 0; t < 256; ++t) this.S[t] = t;
            for (n = 0, t = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], 
            this.S[t] = this.S[n], this.S[n] = r;
            this.i = 0, this.j = 0;
        }, M.prototype.next = function() {
            var e;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], 
            this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
        };
        var P = 256;
        n.SecureRandom = k, n.BigInteger = n, e.exports = n;
    }).call(this);
}
