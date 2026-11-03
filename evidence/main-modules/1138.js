// analysis/pretty/main.js:91198; webpack module 1138
function(e, t, n) {
    "use strict";
    var r = n(617), i = n(1139), o = n(1140), a = n(1141), s = n(1142), l = n(1143), c = n(286), u = n(1144), d = n(1145), h = n(1146), p = n(1147), f = n(1148), _ = n(1149), m = n(1150), g = n(1151), v = Function, y = function(e) {
        try {
            return v('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
    }, E = n(618), b = n(1154), w = function() {
        throw new c;
    }, S = E ? function() {
        try {
            return w;
        } catch (e) {
            try {
                return E(arguments, "callee").get;
            } catch (e) {
                return w;
            }
        }
    }() : w, T = n(1155)(), A = n(1156), O = n(621), C = n(620), N = n(622), I = n(287), R = {}, D = "undefined" != typeof Uint8Array && A ? A(Uint8Array) : void 0, L = {
        __proto__: null,
        "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayIteratorPrototype%": T && A ? A([][Symbol.iterator]()) : void 0,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": R,
        "%AsyncGenerator%": R,
        "%AsyncGeneratorFunction%": R,
        "%AsyncIteratorPrototype%": R,
        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
        "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
        "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": i,
        "%eval%": eval,
        "%EvalError%": o,
        "%Float16Array%": "undefined" == typeof Float16Array ? void 0 : Float16Array,
        "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
        "%Function%": v,
        "%GeneratorFunction%": R,
        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": T && A ? A(A([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%Map%": "undefined" == typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && T && A ? A((new Map)[Symbol.iterator]()) : void 0,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": r,
        "%Object.getOwnPropertyDescriptor%": E,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "%RangeError%": a,
        "%ReferenceError%": s,
        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && T && A ? A((new Set)[Symbol.iterator]()) : void 0,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": T && A ? A(""[Symbol.iterator]()) : void 0,
        "%Symbol%": T ? Symbol : void 0,
        "%SyntaxError%": l,
        "%ThrowTypeError%": S,
        "%TypedArray%": D,
        "%TypeError%": c,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "%URIError%": u,
        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
        "%Function.prototype.call%": I,
        "%Function.prototype.apply%": N,
        "%Object.defineProperty%": b,
        "%Object.getPrototypeOf%": O,
        "%Math.abs%": d,
        "%Math.floor%": h,
        "%Math.max%": p,
        "%Math.min%": f,
        "%Math.pow%": _,
        "%Math.round%": m,
        "%Math.sign%": g,
        "%Reflect.getPrototypeOf%": C
    };
    if (A) try {
        null.error;
    } catch (e) {
        var k = A(A(e));
        L["%Error.prototype%"] = k;
    }
    var M = {
        __proto__: null,
        "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
        "%ArrayPrototype%": [ "Array", "prototype" ],
        "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
        "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
        "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
        "%ArrayProto_values%": [ "Array", "prototype", "values" ],
        "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
        "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
        "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
        "%BooleanPrototype%": [ "Boolean", "prototype" ],
        "%DataViewPrototype%": [ "DataView", "prototype" ],
        "%DatePrototype%": [ "Date", "prototype" ],
        "%ErrorPrototype%": [ "Error", "prototype" ],
        "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
        "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
        "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
        "%FunctionPrototype%": [ "Function", "prototype" ],
        "%Generator%": [ "GeneratorFunction", "prototype" ],
        "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
        "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
        "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
        "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
        "%JSONParse%": [ "JSON", "parse" ],
        "%JSONStringify%": [ "JSON", "stringify" ],
        "%MapPrototype%": [ "Map", "prototype" ],
        "%NumberPrototype%": [ "Number", "prototype" ],
        "%ObjectPrototype%": [ "Object", "prototype" ],
        "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
        "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
        "%PromisePrototype%": [ "Promise", "prototype" ],
        "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
        "%Promise_all%": [ "Promise", "all" ],
        "%Promise_reject%": [ "Promise", "reject" ],
        "%Promise_resolve%": [ "Promise", "resolve" ],
        "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
        "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
        "%RegExpPrototype%": [ "RegExp", "prototype" ],
        "%SetPrototype%": [ "Set", "prototype" ],
        "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
        "%StringPrototype%": [ "String", "prototype" ],
        "%SymbolPrototype%": [ "Symbol", "prototype" ],
        "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
        "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
        "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
        "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
        "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
        "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
        "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
        "%URIErrorPrototype%": [ "URIError", "prototype" ],
        "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
        "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
    }, P = n(211), x = n(212), F = P.call(I, Array.prototype.concat), j = P.call(N, Array.prototype.splice), U = P.call(I, String.prototype.replace), W = P.call(I, String.prototype.slice), B = P.call(I, RegExp.prototype.exec), H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $ = /\\(\\)?/g, Y = function(e) {
        var t = W(e, 0, 1), n = W(e, -1);
        if ("%" === t && "%" !== n) throw new l("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n && "%" !== t) throw new l("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return U(e, H, function(e, t, n, i) {
            r[r.length] = n ? U(i, $, "$1") : t || e;
        }), r;
    }, z = function(e, t) {
        var n, r = e;
        if (x(M, r) && (r = "%" + (n = M[r])[0] + "%"), x(L, r)) {
            var i = L[r];
            if (i === R && (i = function e(t) {
                var n;
                if ("%AsyncFunction%" === t) n = y("async function () {}"); else if ("%GeneratorFunction%" === t) n = y("function* () {}"); else if ("%AsyncGeneratorFunction%" === t) n = y("async function* () {}"); else if ("%AsyncGenerator%" === t) {
                    var r = e("%AsyncGeneratorFunction%");
                    r && (n = r.prototype);
                } else if ("%AsyncIteratorPrototype%" === t) {
                    var i = e("%AsyncGenerator%");
                    i && A && (n = A(i.prototype));
                }
                return L[t] = n, n;
            }(r)), void 0 === i && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: n,
                name: r,
                value: i
            };
        }
        throw new l("intrinsic " + e + " does not exist!");
    };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
        if (null === B(/^%?[^%]*%?$/, e)) throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = Y(e), r = n.length > 0 ? n[0] : "", i = z("%" + r + "%", t), o = i.name, a = i.value, s = !1, u = i.alias;
        u && (r = u[0], j(n, F([ 0, 1 ], u)));
        for (var d = 1, h = !0; d < n.length; d += 1) {
            var p = n[d], f = W(p, 0, 1), _ = W(p, -1);
            if (('"' === f || "'" === f || "`" === f || '"' === _ || "'" === _ || "`" === _) && f !== _) throw new l("property names with quotes must have matching quotes");
            if ("constructor" !== p && h || (s = !0), x(L, o = "%" + (r += "." + p) + "%")) a = L[o]; else if (null != a) {
                if (!(p in a)) {
                    if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                    return;
                }
                if (E && d + 1 >= n.length) {
                    var m = E(a, p);
                    a = (h = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : a[p];
                } else h = x(a, p), a = a[p];
                h && !s && (L[o] = a);
            }
        }
        return a;
    };
}
