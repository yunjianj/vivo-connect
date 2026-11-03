// analysis/pretty/main.js:14827; webpack module 82
function(e, t) {
    e.exports = {
        Text: "text",
        Directive: "directive",
        Comment: "comment",
        Script: "script",
        Style: "style",
        Tag: "tag",
        CDATA: "cdata",
        Doctype: "doctype",
        isTag: function(e) {
            return "tag" === e.type || "script" === e.type || "style" === e.type;
        }
    };
}
