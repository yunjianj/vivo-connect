// analysis/pretty/main.js:122284; webpack module 1595
function(e, t, n) {
    "use strict";
    const r = e => /(width|height|background\-size)/g.test(e), i = (e, t) => `    ${t}: ${((e, t) => "background-size" === t ? `${e.width}px ${e.height}px` : e[t] + "px")(e, t)};`;
    e.exports = e => (e => [ "", `.${e.class.replace(/\s+/gi, "_")} {`, `    background-image: url('${e.background}');` ])(e).concat((e => Object.keys(e).filter(r).map(i.bind(null, e.dimensions)))(e), [ "}" ]).join("\n");
}
