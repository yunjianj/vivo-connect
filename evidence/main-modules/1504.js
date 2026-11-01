// analysis/pretty/main.js:112901; webpack module 1504
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.orientationToDegrees = t.degreesToOrientation = t.getOrientationDescription = t.modifyImageExif = t.readImageExif = t.isDng = t.isJpeg = void 0;
    const r = n(0).__importDefault(n(1505)), i = [ "image/jpeg", "image/jpg" ], o = [ "image/x-adobe-dng", "image/dng" ];
    function a(e) {
        return i.includes(e);
    }
    function s(e) {
        return o.includes(e);
    }
    function l(e) {
        return null == e || 0 === e ? 1 : e >= 1 && e <= 8 ? e : (console.warn(`[EXIF] 非标准Orientation值: ${e}，已回退为1(正常)`), 
        1);
    }
    t.isJpeg = a, t.isDng = s, t.readImageExif = function(e, t) {
        var n;
        try {
            if (a(t)) {
                const t = new Uint8Array(e);
                let i = "";
                for (let e = 0; e < t.length; e++) i += String.fromCharCode(t[e]);
                const o = r.default.load(i);
                return l(null === (n = o["0th"]) || void 0 === n ? void 0 : n[r.default.ImageIFD.Orientation]);
            }
            if (s(t)) {
                return l(function(e) {
                    const t = new DataView(e), n = t.byteLength;
                    if (n < 8) return null;
                    const r = t.getUint16(0), i = 18761 === r;
                    if (18761 !== r && 19789 !== r) return null;
                    if (42 !== t.getUint16(2, i)) return null;
                    const o = t.getUint32(4, i);
                    if (0 === o || o >= n) return null;
                    const a = t.getUint16(o, i);
                    for (let e = 0; e < a; e++) {
                        const r = o + 2 + 12 * e;
                        if (r + 12 > n) return null;
                        if (274 === t.getUint16(r, i)) {
                            if (3 === t.getUint16(r + 2, i)) return t.getUint16(r + 8, i);
                        }
                    }
                    return null;
                }(e));
            }
            return 1;
        } catch (e) {
            return console.error("读取图片EXIF失败:", e), 1;
        }
    }, t.modifyImageExif = function(e, t, n) {
        try {
            if (s(t)) return function(e, t) {
                const n = new DataView(e), r = n.byteLength;
                if (r < 8) return null;
                const i = n.getUint16(0), o = 18761 === i;
                if (18761 !== i && 19789 !== i) return null;
                if (42 !== n.getUint16(2, o)) return null;
                const a = n.getUint32(4, o);
                if (0 === a || a >= r) return null;
                const s = n.getUint16(a, o), l = a + 2, c = l + 12 * s, u = c + 4 <= r ? n.getUint32(c, o) : 0;
                for (let r = 0; r < s; r++) {
                    const i = l + 12 * r;
                    if (274 === n.getUint16(i, o)) {
                        const n = e.slice(0);
                        return new DataView(n).setUint16(i + 8, t, o), n;
                    }
                }
                const d = s + 1, h = r, p = new ArrayBuffer(r + (2 + 12 * d + 4)), f = new Uint8Array(p), _ = new Uint8Array(e);
                f.set(_, 0);
                const m = new DataView(p);
                m.setUint32(4, h, o), m.setUint16(h, d, o);
                const g = new ArrayBuffer(12), v = new DataView(g);
                v.setUint16(0, 274, o), v.setUint16(2, 3, o), v.setUint32(4, 1, o), v.setUint16(8, t, o), 
                v.setUint16(10, 0, o);
                let y = 0, E = !1;
                for (let e = 0; e < s; e++) {
                    const t = l + 12 * e, r = n.getUint16(t, o);
                    if (!E && r > 274) {
                        const e = h + 2 + 12 * y;
                        f.set(new Uint8Array(g), e), y++, E = !0;
                    }
                    const i = h + 2 + 12 * y;
                    f.set(_.subarray(t, t + 12), i), y++;
                }
                if (!E) {
                    const e = h + 2 + 12 * y;
                    f.set(new Uint8Array(g), e);
                }
                return m.setUint32(h + 2 + 12 * d, u, o), p;
            }(e, n);
            if (!a(t)) return console.warn(`暂不支持修改 ${t} 格式的EXIF`), null;
            const i = new Uint8Array(e);
            let o, l = "";
            for (let e = 0; e < i.length; e++) l += String.fromCharCode(i[e]);
            try {
                o = r.default.load(l);
            } catch (e) {
                o = {
                    "0th": {},
                    Exif: {},
                    "1st": {},
                    GPS: {}
                };
            }
            o["0th"][r.default.ImageIFD.Orientation] = n;
            const c = r.default.dump(o), u = r.default.insert(c, l), d = new Uint8Array(u.length);
            for (let e = 0; e < u.length; e++) d[e] = u.charCodeAt(e);
            return d.buffer;
        } catch (e) {
            return console.error("修改图片EXIF失败:", e), null;
        }
    }, t.getOrientationDescription = function(e) {
        const t = {
            1: "正常",
            2: "水平翻转",
            3: "旋转180°",
            4: "垂直翻转",
            5: "逆时针90°+水平翻转",
            6: "顺时针90°",
            7: "顺时针90°+水平翻转",
            8: "逆时针90°"
        };
        return t[e] ? t[e] : 0 === e || null == e ? "未设置(默认正常)" : `非标准值(${e})`;
    }, t.degreesToOrientation = function(e) {
        switch ((e % 360 + 360) % 360) {
          case 0:
            return 1;

          case 90:
            return 6;

          case 180:
            return 3;

          case 270:
            return 8;

          default:
            return 1;
        }
    }, t.orientationToDegrees = function(e) {
        switch (e) {
          case 1:
            return 0;

          case 3:
            return 180;

          case 6:
            return 90;

          case 8:
            return 270;

          default:
            return 0;
        }
    };
}
