// analysis/pretty/main.js:68813; webpack module 752
function(e, t, n) {
    var r = n(1600), i = {};
    for (var o in r) r.hasOwnProperty(o) && (i[r[o]] = o);
    var a = e.exports = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: [ "hex" ]
        },
        keyword: {
            channels: 1,
            labels: [ "keyword" ]
        },
        ansi16: {
            channels: 1,
            labels: [ "ansi16" ]
        },
        ansi256: {
            channels: 1,
            labels: [ "ansi256" ]
        },
        hcg: {
            channels: 3,
            labels: [ "h", "c", "g" ]
        },
        apple: {
            channels: 3,
            labels: [ "r16", "g16", "b16" ]
        },
        gray: {
            channels: 1,
            labels: [ "gray" ]
        }
    };
    for (var s in a) if (a.hasOwnProperty(s)) {
        if (!("channels" in a[s])) throw new Error("missing channels property: " + s);
        if (!("labels" in a[s])) throw new Error("missing channel labels property: " + s);
        if (a[s].labels.length !== a[s].channels) throw new Error("channel and label counts mismatch: " + s);
        var l = a[s].channels, c = a[s].labels;
        delete a[s].channels, delete a[s].labels, Object.defineProperty(a[s], "channels", {
            value: l
        }), Object.defineProperty(a[s], "labels", {
            value: c
        });
    }
    a.rgb.hsl = function(e) {
        var t, n, r = e[0] / 255, i = e[1] / 255, o = e[2] / 255, a = Math.min(r, i, o), s = Math.max(r, i, o), l = s - a;
        return s === a ? t = 0 : r === s ? t = (i - o) / l : i === s ? t = 2 + (o - r) / l : o === s && (t = 4 + (r - i) / l), 
        (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + s) / 2, [ t, 100 * (s === a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n ];
    }, a.rgb.hsv = function(e) {
        var t, n, r, i, o, a = e[0] / 255, s = e[1] / 255, l = e[2] / 255, c = Math.max(a, s, l), u = c - Math.min(a, s, l), d = function(e) {
            return (c - e) / 6 / u + .5;
        };
        return 0 === u ? i = o = 0 : (o = u / c, t = d(a), n = d(s), r = d(l), a === c ? i = r - n : s === c ? i = 1 / 3 + t - r : l === c && (i = 2 / 3 + n - t), 
        i < 0 ? i += 1 : i > 1 && (i -= 1)), [ 360 * i, 100 * o, 100 * c ];
    }, a.rgb.hwb = function(e) {
        var t = e[0], n = e[1], r = e[2];
        return [ a.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r))) ];
    }, a.rgb.cmyk = function(e) {
        var t, n = e[0] / 255, r = e[1] / 255, i = e[2] / 255;
        return [ 100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t ];
    }, a.rgb.keyword = function(e) {
        var t = i[e];
        if (t) return t;
        var n, o, a, s = 1 / 0;
        for (var l in r) if (r.hasOwnProperty(l)) {
            var c = r[l], u = (o = e, a = c, Math.pow(o[0] - a[0], 2) + Math.pow(o[1] - a[1], 2) + Math.pow(o[2] - a[2], 2));
            u < s && (s = u, n = l);
        }
        return n;
    }, a.keyword.rgb = function(e) {
        return r[e];
    }, a.rgb.xyz = function(e) {
        var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
        return [ 100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r) ];
    }, a.rgb.lab = function(e) {
        var t = a.rgb.xyz(e), n = t[0], r = t[1], i = t[2];
        return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, 
        [ 116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)) ];
    }, a.hsl.rgb = function(e) {
        var t, n, r, i, o, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100;
        if (0 === s) return [ o = 255 * l, o, o ];
        t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), i = [ 0, 0, 0 ];
        for (var c = 0; c < 3; c++) (r = a + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, 
        o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, 
        i[c] = 255 * o;
        return i;
    }, a.hsl.hsv = function(e) {
        var t = e[0], n = e[1] / 100, r = e[2] / 100, i = n, o = Math.max(r, .01);
        return n *= (r *= 2) <= 1 ? r : 2 - r, i *= o <= 1 ? o : 2 - o, [ t, 100 * (0 === r ? 2 * i / (o + i) : 2 * n / (r + n)), 100 * ((r + n) / 2) ];
    }, a.hsv.rgb = function(e) {
        var t = e[0] / 60, n = e[1] / 100, r = e[2] / 100, i = Math.floor(t) % 6, o = t - Math.floor(t), a = 255 * r * (1 - n), s = 255 * r * (1 - n * o), l = 255 * r * (1 - n * (1 - o));
        switch (r *= 255, i) {
          case 0:
            return [ r, l, a ];

          case 1:
            return [ s, r, a ];

          case 2:
            return [ a, r, l ];

          case 3:
            return [ a, s, r ];

          case 4:
            return [ l, a, r ];

          case 5:
            return [ r, a, s ];
        }
    }, a.hsv.hsl = function(e) {
        var t, n, r, i = e[0], o = e[1] / 100, a = e[2] / 100, s = Math.max(a, .01);
        return r = (2 - o) * a, n = o * s, [ i, 100 * (n = (n /= (t = (2 - o) * s) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2) ];
    }, a.hwb.rgb = function(e) {
        var t, n, r, i, o, a, s, l = e[0] / 360, c = e[1] / 100, u = e[2] / 100, d = c + u;
        switch (d > 1 && (c /= d, u /= d), r = 6 * l - (t = Math.floor(6 * l)), 0 != (1 & t) && (r = 1 - r), 
        i = c + r * ((n = 1 - u) - c), t) {
          default:
          case 6:
          case 0:
            o = n, a = i, s = c;
            break;

          case 1:
            o = i, a = n, s = c;
            break;

          case 2:
            o = c, a = n, s = i;
            break;

          case 3:
            o = c, a = i, s = n;
            break;

          case 4:
            o = i, a = c, s = n;
            break;

          case 5:
            o = n, a = c, s = i;
        }
        return [ 255 * o, 255 * a, 255 * s ];
    }, a.cmyk.rgb = function(e) {
        var t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, i = e[3] / 100;
        return [ 255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i)) ];
    }, a.xyz.rgb = function(e) {
        var t, n, r, i = e[0] / 100, o = e[1] / 100, a = e[2] / 100;
        return n = -.9689 * i + 1.8758 * o + .0415 * a, r = .0557 * i + -.204 * o + 1.057 * a, 
        t = (t = 3.2406 * i + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, 
        n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, 
        [ 255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1)) ];
    }, a.xyz.lab = function(e) {
        var t = e[0], n = e[1], r = e[2];
        return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, 
        [ 116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)) ];
    }, a.lab.xyz = function(e) {
        var t, n, r, i = e[0];
        t = e[1] / 500 + (n = (i + 16) / 116), r = n - e[2] / 200;
        var o = Math.pow(n, 3), a = Math.pow(t, 3), s = Math.pow(r, 3);
        return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, 
        r = s > .008856 ? s : (r - 16 / 116) / 7.787, [ t *= 95.047, n *= 100, r *= 108.883 ];
    }, a.lab.lch = function(e) {
        var t, n = e[0], r = e[1], i = e[2];
        return (t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (t += 360), [ n, Math.sqrt(r * r + i * i), t ];
    }, a.lch.lab = function(e) {
        var t, n = e[0], r = e[1];
        return t = e[2] / 360 * 2 * Math.PI, [ n, r * Math.cos(t), r * Math.sin(t) ];
    }, a.rgb.ansi16 = function(e) {
        var t = e[0], n = e[1], r = e[2], i = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
        if (0 === (i = Math.round(i / 50))) return 30;
        var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
        return 2 === i && (o += 60), o;
    }, a.hsv.ansi16 = function(e) {
        return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
    }, a.rgb.ansi256 = function(e) {
        var t = e[0], n = e[1], r = e[2];
        return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, a.ansi16.rgb = function(e) {
        var t = e % 10;
        if (0 === t || 7 === t) return e > 50 && (t += 3.5), [ t = t / 10.5 * 255, t, t ];
        var n = .5 * (1 + ~~(e > 50));
        return [ (1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255 ];
    }, a.ansi256.rgb = function(e) {
        if (e >= 232) {
            var t = 10 * (e - 232) + 8;
            return [ t, t, t ];
        }
        var n;
        return e -= 16, [ Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255 ];
    }, a.rgb.hex = function(e) {
        var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
        return "000000".substring(t.length) + t;
    }, a.hex.rgb = function(e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [ 0, 0, 0 ];
        var n = t[0];
        3 === t[0].length && (n = n.split("").map(function(e) {
            return e + e;
        }).join(""));
        var r = parseInt(n, 16);
        return [ r >> 16 & 255, r >> 8 & 255, 255 & r ];
    }, a.rgb.hcg = function(e) {
        var t, n = e[0] / 255, r = e[1] / 255, i = e[2] / 255, o = Math.max(Math.max(n, r), i), a = Math.min(Math.min(n, r), i), s = o - a;
        return t = s <= 0 ? 0 : o === n ? (r - i) / s % 6 : o === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4, 
        t /= 6, [ 360 * (t %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0) ];
    }, a.hsl.hcg = function(e) {
        var t = e[1] / 100, n = e[2] / 100, r = 1, i = 0;
        return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)), 
        [ e[0], 100 * r, 100 * i ];
    }, a.hsv.hcg = function(e) {
        var t = e[1] / 100, n = e[2] / 100, r = t * n, i = 0;
        return r < 1 && (i = (n - r) / (1 - r)), [ e[0], 100 * r, 100 * i ];
    }, a.hcg.rgb = function(e) {
        var t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
        if (0 === n) return [ 255 * r, 255 * r, 255 * r ];
        var i, o = [ 0, 0, 0 ], a = t % 1 * 6, s = a % 1, l = 1 - s;
        switch (Math.floor(a)) {
          case 0:
            o[0] = 1, o[1] = s, o[2] = 0;
            break;

          case 1:
            o[0] = l, o[1] = 1, o[2] = 0;
            break;

          case 2:
            o[0] = 0, o[1] = 1, o[2] = s;
            break;

          case 3:
            o[0] = 0, o[1] = l, o[2] = 1;
            break;

          case 4:
            o[0] = s, o[1] = 0, o[2] = 1;
            break;

          default:
            o[0] = 1, o[1] = 0, o[2] = l;
        }
        return i = (1 - n) * r, [ 255 * (n * o[0] + i), 255 * (n * o[1] + i), 255 * (n * o[2] + i) ];
    }, a.hcg.hsv = function(e) {
        var t = e[1] / 100, n = t + e[2] / 100 * (1 - t), r = 0;
        return n > 0 && (r = t / n), [ e[0], 100 * r, 100 * n ];
    }, a.hcg.hsl = function(e) {
        var t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, r = 0;
        return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), 
        [ e[0], 100 * r, 100 * n ];
    }, a.hcg.hwb = function(e) {
        var t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
        return [ e[0], 100 * (n - t), 100 * (1 - n) ];
    }, a.hwb.hcg = function(e) {
        var t = e[1] / 100, n = 1 - e[2] / 100, r = n - t, i = 0;
        return r < 1 && (i = (n - r) / (1 - r)), [ e[0], 100 * r, 100 * i ];
    }, a.apple.rgb = function(e) {
        return [ e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255 ];
    }, a.rgb.apple = function(e) {
        return [ e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535 ];
    }, a.gray.rgb = function(e) {
        return [ e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255 ];
    }, a.gray.hsl = a.gray.hsv = function(e) {
        return [ 0, 0, e[0] ];
    }, a.gray.hwb = function(e) {
        return [ 0, 100, e[0] ];
    }, a.gray.cmyk = function(e) {
        return [ 0, 0, 0, e[0] ];
    }, a.gray.lab = function(e) {
        return [ e[0], 0, 0 ];
    }, a.gray.hex = function(e) {
        var t = 255 & Math.round(e[0] / 100 * 255), n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return "000000".substring(n.length) + n;
    }, a.rgb.gray = function(e) {
        return [ (e[0] + e[1] + e[2]) / 3 / 255 * 100 ];
    };
}
