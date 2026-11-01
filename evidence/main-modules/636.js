// analysis/pretty/main.js:58190; webpack module 636
function(e, t) {
    e.exports = i, i.strict = o, i.loose = a;
    var n = Object.prototype.toString, r = {
        "[object Int8Array]": !0,
        "[object Int16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Uint16Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0
    };
    function i(e) {
        return o(e) || a(e);
    }
    function o(e) {
        return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
    }
    function a(e) {
        return r[n.call(e)];
    }
}
