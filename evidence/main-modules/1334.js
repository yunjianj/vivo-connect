// analysis/pretty/main.js:100925; webpack module 1334
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.XElement = void 0, t.parseXml = function(e) {
        let t = null;
        const n = r.parser(!0, {}), i = [];
        return n.onopentag = e => {
            const n = new o(e.name);
            if (n.attributes = e.attributes, null === t) t = n; else {
                const e = i[i.length - 1];
                null == e.elements && (e.elements = []), e.elements.push(n);
            }
            i.push(n);
        }, n.onclosetag = () => {
            i.pop();
        }, n.ontext = e => {
            i.length > 0 && (i[i.length - 1].value = e);
        }, n.oncdata = e => {
            const t = i[i.length - 1];
            t.value = e, t.isCData = !0;
        }, n.onerror = e => {
            throw e;
        }, n.write(e), t;
    };
    const r = n(658), i = n(224);
    class o {
        constructor(e) {
            if (this.name = e, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, 
            !e) throw (0, i.newError)("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
            if (!function(e) {
                return a.test(e);
            }(e)) throw (0, i.newError)("Invalid element name: " + e, "ERR_XML_ELEMENT_INVALID_NAME");
        }
        attribute(e) {
            const t = null === this.attributes ? null : this.attributes[e];
            if (null == t) throw (0, i.newError)(`No attribute "${e}"`, "ERR_XML_MISSED_ATTRIBUTE");
            return t;
        }
        removeAttribute(e) {
            null !== this.attributes && delete this.attributes[e];
        }
        element(e, t = !1, n = null) {
            const r = this.elementOrNull(e, t);
            if (null === r) throw (0, i.newError)(n || `No element "${e}"`, "ERR_XML_MISSED_ELEMENT");
            return r;
        }
        elementOrNull(e, t = !1) {
            if (null === this.elements) return null;
            for (const n of this.elements) if (s(n, e, t)) return n;
            return null;
        }
        getElements(e, t = !1) {
            return null === this.elements ? [] : this.elements.filter(n => s(n, e, t));
        }
        elementValueOrEmpty(e, t = !1) {
            const n = this.elementOrNull(e, t);
            return null === n ? "" : n.value;
        }
    }
    t.XElement = o;
    const a = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);
    function s(e, t, n) {
        const r = e.name;
        return r === t || !0 === n && r.length === t.length && r.toLowerCase() === t.toLowerCase();
    }
}
