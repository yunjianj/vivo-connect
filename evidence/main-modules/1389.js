// analysis/pretty/main.js:102987; webpack module 1389
function(e, t, n) {
    let r;
    try {
        r = n(20);
    } catch (e) {
        r = n(4);
    }
    const i = n(23), {stringify: o, stripBom: a} = n(338);
    const s = i.fromPromise(async function(e, t = {}) {
        "string" == typeof t && (t = {
            encoding: t
        });
        const n = t.fs || r, o = !("throws" in t) || t.throws;
        let s, l = await i.fromCallback(n.readFile)(e, t);
        l = a(l);
        try {
            s = JSON.parse(l, t ? t.reviver : null);
        } catch (t) {
            if (o) throw t.message = `${e}: ${t.message}`, t;
            return null;
        }
        return s;
    });
    const l = i.fromPromise(async function(e, t, n = {}) {
        const a = n.fs || r, s = o(t, n);
        await i.fromCallback(a.writeFile)(e, s, n);
    });
    e.exports = {
        readFile: s,
        readFileSync: function(e, t = {}) {
            "string" == typeof t && (t = {
                encoding: t
            });
            const n = t.fs || r, i = !("throws" in t) || t.throws;
            try {
                let r = n.readFileSync(e, t);
                return r = a(r), JSON.parse(r, t.reviver);
            } catch (t) {
                if (i) throw t.message = `${e}: ${t.message}`, t;
                return null;
            }
        },
        writeFile: l,
        writeFileSync: function(e, t, n = {}) {
            const i = n.fs || r, a = o(t, n);
            return i.writeFileSync(e, a, n);
        }
    };
}
