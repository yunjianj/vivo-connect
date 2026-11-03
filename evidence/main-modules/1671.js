// analysis/pretty/main.js:127494; webpack module 1671
function(e, t, n) {
    var r = /%20/g, i = /\r?\n/g, o = {
        map: n(1672)
    };
    t.serialize = function() {
        var e = this.serializeArray();
        return o.map(e, function(e) {
            return encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value);
        }).join("&").replace(r, "+");
    }, t.serializeArray = function() {
        var e = this.constructor;
        return this.map(function() {
            var t = e(this);
            return "form" === this.name ? t.find("input,select,textarea,keygen").toArray() : t.filter("input,select,textarea,keygen").toArray();
        }).filter('[name!=""]:not(:disabled):not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map(function(t, n) {
            var r = e(n), a = r.attr("name"), s = r.val();
            return null == s ? null : Array.isArray(s) ? o.map(s, function(e) {
                return {
                    name: a,
                    value: e.replace(i, "\r\n")
                };
            }) : {
                name: a,
                value: s.replace(i, "\r\n")
            };
        }).get();
    };
}
