// analysis/pretty/main.js:9782; webpack module 48
function(e, t) {
    function n(e) {
        return Object.prototype.toString.call(e);
    }
    t.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
    }, t.isBoolean = function(e) {
        return "boolean" == typeof e;
    }, t.isNull = function(e) {
        return null === e;
    }, t.isNullOrUndefined = function(e) {
        return null == e;
    }, t.isNumber = function(e) {
        return "number" == typeof e;
    }, t.isString = function(e) {
        return "string" == typeof e;
    }, t.isSymbol = function(e) {
        return "symbol" == typeof e;
    }, t.isUndefined = function(e) {
        return void 0 === e;
    }, t.isRegExp = function(e) {
        return "[object RegExp]" === n(e);
    }, t.isObject = function(e) {
        return "object" == typeof e && null !== e;
    }, t.isDate = function(e) {
        return "[object Date]" === n(e);
    }, t.isError = function(e) {
        return "[object Error]" === n(e) || e instanceof Error;
    }, t.isFunction = function(e) {
        return "function" == typeof e;
    }, t.isPrimitive = function(e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
    }, t.isBuffer = Buffer.isBuffer;
}
