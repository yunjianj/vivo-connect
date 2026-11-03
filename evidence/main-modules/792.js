// analysis/pretty/main.js:72467; webpack module 792
function(e, t, n) {
    const {isAbsolute: r, parse: i} = n(1).win32;
    e.exports = e => {
        let t = "", n = i(e);
        for (;r(e) || n.root; ) {
            const r = "/" === e.charAt(0) && "//?/" !== e.slice(0, 4) ? "/" : n.root;
            e = e.slice(r.length), t += r, n = i(e);
        }
        return [ t, e ];
    };
}
