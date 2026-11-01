// analysis/pretty/main.js:69797; webpack module 761
function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.innerText = t.textContent = t.getText = t.getInnerHTML = t.getOuterHTML = void 0;
    var i = n(142), o = r(n(1608)), a = n(169);
    function s(e, t) {
        return (0, o.default)(e, t);
    }
    t.getOuterHTML = s, t.getInnerHTML = function(e, t) {
        return (0, i.hasChildren)(e) ? e.children.map(function(e) {
            return s(e, t);
        }).join("") : "";
    }, t.getText = function e(t) {
        return Array.isArray(t) ? t.map(e).join("") : (0, i.isTag)(t) ? "br" === t.name ? "\n" : e(t.children) : (0, 
        i.isCDATA)(t) ? e(t.children) : (0, i.isText)(t) ? t.data : "";
    }, t.textContent = function e(t) {
        return Array.isArray(t) ? t.map(e).join("") : (0, i.hasChildren)(t) && !(0, i.isComment)(t) ? e(t.children) : (0, 
        i.isText)(t) ? t.data : "";
    }, t.innerText = function e(t) {
        return Array.isArray(t) ? t.map(e).join("") : (0, i.hasChildren)(t) && (t.type === a.ElementType.Tag || (0, 
        i.isCDATA)(t)) ? e(t.children) : (0, i.isText)(t) ? t.data : "";
    };
}
