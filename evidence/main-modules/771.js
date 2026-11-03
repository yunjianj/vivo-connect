// analysis/pretty/main.js:70757; webpack module 771
function(e, t) {
    var n = e.exports = {
        get firstChild() {
            var e = this.children;
            return e && e[0] || null;
        },
        get lastChild() {
            var e = this.children;
            return e && e[e.length - 1] || null;
        },
        get nodeType() {
            return i[this.type] || i.element;
        }
    }, r = {
        tagName: "name",
        childNodes: "children",
        parentNode: "parent",
        previousSibling: "prev",
        nextSibling: "next",
        nodeValue: "data"
    }, i = {
        element: 1,
        text: 3,
        cdata: 4,
        comment: 8
    };
    Object.keys(r).forEach(function(e) {
        var t = r[e];
        Object.defineProperty(n, e, {
            get: function() {
                return this[t] || null;
            },
            set: function(e) {
                return this[t] = e, e;
            }
        });
    });
}
