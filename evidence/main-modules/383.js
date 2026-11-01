// analysis/pretty/main.js:41569; webpack module 383
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deserialize = t.serialize = t.isSerializableObject = t.isPromise = void 0;
    const r = n(2);
    t.isPromise = function(e) {
        return e && e.then && e.then instanceof Function && e.constructor && e.constructor.reject && e.constructor.reject instanceof Function && e.constructor.resolve && e.constructor.resolve instanceof Function;
    };
    const i = [ Boolean, Number, String, Date, Error, RegExp, ArrayBuffer ];
    function o(e) {
        return null === e || ArrayBuffer.isView(e) || i.some(t => e instanceof t);
    }
    t.isSerializableObject = o;
    const a = function(e, t) {
        const n = Object.entries(e).map(([e, n]) => [ e, t(n) ]);
        return Object.fromEntries(n);
    };
    t.serialize = function e(t) {
        return t && t.constructor && "NativeImage" === t.constructor.name ? function(e) {
            const t = [], n = e.getScaleFactors();
            if (1 === n.length) {
                const r = n[0], i = e.getSize(r), o = e.toBitmap({
                    scaleFactor: r
                });
                t.push({
                    scaleFactor: r,
                    size: i,
                    buffer: o
                });
            } else for (const r of n) {
                const n = e.getSize(r), i = e.toDataURL({
                    scaleFactor: r
                });
                t.push({
                    scaleFactor: r,
                    size: n,
                    dataURL: i
                });
            }
            return {
                __ELECTRON_SERIALIZED_NativeImage__: !0,
                representations: t
            };
        }(t) : Array.isArray(t) ? t.map(e) : o(t) ? t : t instanceof Object ? a(t, e) : t;
    }, t.deserialize = function e(t) {
        return t && t.__ELECTRON_SERIALIZED_NativeImage__ ? function(e) {
            const t = r.nativeImage.createEmpty();
            if (1 === e.representations.length) {
                const {buffer: n, size: r, scaleFactor: i} = e.representations[0], {width: o, height: a} = r;
                t.addRepresentation({
                    buffer: n,
                    scaleFactor: i,
                    width: o,
                    height: a
                });
            } else for (const n of e.representations) {
                const {dataURL: e, size: r, scaleFactor: i} = n, {width: o, height: a} = r;
                t.addRepresentation({
                    dataURL: e,
                    scaleFactor: i,
                    width: o,
                    height: a
                });
            }
            return t;
        }(t) : Array.isArray(t) ? t.map(e) : o(t) ? t : t instanceof Object ? a(t, e) : t;
    };
}
