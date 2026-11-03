// analysis/pretty/main.js:120847; webpack module 1579
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(4), o = n(1580), a = n(1581), s = n(1594), l = n(1595), c = n(9);
    e.exports = class extends c {
        constructor() {
            super(), this.readable = !0;
        }
        format(e, t) {
            const n = t instanceof Buffer ? t : new Buffer(t);
            return this.base64 = n.toString("base64"), this.createMetadata(e), this;
        }
        createMetadata(e) {
            return this.fileName = e, this.mimetype = o(e), this.content = s(this), this;
        }
        runCallback(e, t) {
            return t ? e(t) : e.call(this, null, this.content, this);
        }
        encode(e, t) {
            return this.async(e, e => t && this.runCallback(t, e));
        }
        async(e, t) {
            const n = [], r = e => this.emit("data", e);
            r(this.createMetadata(e).content), i.createReadStream(e, {
                encoding: "base64"
            }).on("data", r).on("data", e => n.push(e)).on("error", e => {
                t(e), this.emit("error", e);
            }).on("end", () => {
                this.base64 = n.join(""), this.emit("end"), t.call(this.createMetadata(e)), this.emit("encoded", this.content, this);
            });
        }
        encodeSync(e) {
            if (!e || !e.trim || "" === e.trim()) throw new Error("Insert a File path as string argument");
            if (i.existsSync(e)) {
                const t = i.readFileSync(e);
                return this.format(e, t).content;
            }
            throw new Error(`The file ${e} was not found!`);
        }
        getCSS(e) {
            if (e = e || {}, !this.content) throw new Error("Create a data-uri config using the method encodeSync");
            return e.class = e.class || r.basename(this.fileName, r.extname(this.fileName)), 
            e.background = this.content, (e.width || e.height || e["background-size"]) && (e.dimensions = a(this.fileName)), 
            l(e);
        }
    };
}
