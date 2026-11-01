// analysis/pretty/main.js:129416; webpack module 1696
function(e, t, n) {
    const r = n(44), i = n(797), o = n(177), {join: a} = n(1), s = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform);
    e.exports = () => {
        const e = new Map, t = new Map, n = new Set, l = n => {
            const {paths: r, dirs: i} = (n => {
                const r = t.get(n);
                if (!r) throw new Error("function does not have any path reservations");
                return {
                    paths: r.paths.map(t => e.get(t)),
                    dirs: [ ...r.dirs ].map(t => e.get(t))
                };
            })(n);
            return r.every(e => e[0] === n) && i.every(e => e[0] instanceof Set && e[0].has(n));
        }, c = e => !(n.has(e) || !l(e)) && (n.add(e), e(() => u(e)), !0), u = i => {
            if (!n.has(i)) return !1;
            const {paths: o, dirs: a} = t.get(i), s = new Set;
            return o.forEach(t => {
                const n = e.get(t);
                r.equal(n[0], i), 1 === n.length ? e.delete(t) : (n.shift(), "function" == typeof n[0] ? s.add(n[0]) : n[0].forEach(e => s.add(e)));
            }), a.forEach(t => {
                const n = e.get(t);
                r(n[0] instanceof Set), 1 === n[0].size && 1 === n.length ? e.delete(t) : 1 === n[0].size ? (n.shift(), 
                s.add(n[0])) : n[0].delete(i);
            }), n.delete(i), s.forEach(e => c(e)), !0;
        };
        return {
            check: l,
            reserve: (n, r) => {
                n = s ? [ "win32 parallelization disabled" ] : n.map(e => o(a(i(e))).toLowerCase());
                const l = new Set(n.map(e => (e => e.split("/").slice(0, -1).reduce((e, t) => (e.length && (t = a(e[e.length - 1], t)), 
                e.push(t || "/"), e), []))(e)).reduce((e, t) => e.concat(t)));
                return t.set(r, {
                    dirs: l,
                    paths: n
                }), n.forEach(t => {
                    const n = e.get(t);
                    n ? n.push(r) : e.set(t, [ r ]);
                }), l.forEach(t => {
                    const n = e.get(t);
                    n ? n[n.length - 1] instanceof Set ? n[n.length - 1].add(r) : n.push(new Set([ r ])) : e.set(t, [ new Set([ r ]) ]);
                }), c(r);
            }
        };
    };
}
