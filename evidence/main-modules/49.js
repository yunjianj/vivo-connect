// analysis/pretty/main.js:9815; webpack module 49
function(e, t, n) {
    "use strict";
    const r = n(226), {MAX_LENGTH: i, MAX_SAFE_INTEGER: o} = n(225), {safeRe: a, t: s} = n(159), l = n(327), {compareIdentifiers: c} = n(666);
    class u {
        constructor(e, t) {
            if (t = l(t), e instanceof u) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version;
            } else if ("string" != typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
            if (e.length > i) throw new TypeError(`version is longer than ${i} characters`);
            r("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
            const n = e.trim().match(t.loose ? a[s.LOOSE] : a[s.FULL]);
            if (!n) throw new TypeError("Invalid Version: " + e);
            if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
            n[4] ? this.prerelease = n[4].split(".").map(e => {
                if (/^[0-9]+$/.test(e)) {
                    const t = +e;
                    if (t >= 0 && t < o) return t;
                }
                return e;
            }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), 
            this.version;
        }
        toString() {
            return this.version;
        }
        compare(e) {
            if (r("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new u(e, this.options);
            }
            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
        }
        compareMain(e) {
            return e instanceof u || (e = new u(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
        }
        comparePre(e) {
            if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            let t = 0;
            do {
                const n = this.prerelease[t], i = e.prerelease[t];
                if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === n) return -1;
                if (n !== i) return c(n, i);
            } while (++t);
        }
        compareBuild(e) {
            e instanceof u || (e = new u(e, this.options));
            let t = 0;
            do {
                const n = this.build[t], i = e.build[t];
                if (r("build compare", t, n, i), void 0 === n && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === n) return -1;
                if (n !== i) return c(n, i);
            } while (++t);
        }
        inc(e, t, n) {
            if (e.startsWith("pre")) {
                if (!t && !1 === n) throw new Error("invalid increment argument: identifier is empty");
                if (t) {
                    const e = ("-" + t).match(this.options.loose ? a[s.PRERELEASELOOSE] : a[s.PRERELEASE]);
                    if (!e || e[1] !== t) throw new Error("invalid identifier: " + t);
                }
            }
            switch (e) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
                break;

              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
                break;

              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
                break;

              case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t, n), this.inc("pre", t, n);
                break;

              case "release":
                if (0 === this.prerelease.length) throw new Error(`version ${this.raw} is not a prerelease`);
                this.prerelease.length = 0;
                break;

              case "major":
                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, 
                this.minor = 0, this.patch = 0, this.prerelease = [];
                break;

              case "minor":
                0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, 
                this.prerelease = [];
                break;

              case "patch":
                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                break;

              case "pre":
                {
                    const e = Number(n) ? 1 : 0;
                    if (0 === this.prerelease.length) this.prerelease = [ e ]; else {
                        let r = this.prerelease.length;
                        for (;--r >= 0; ) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, 
                        r = -2);
                        if (-1 === r) {
                            if (t === this.prerelease.join(".") && !1 === n) throw new Error("invalid increment argument: identifier already exists");
                            this.prerelease.push(e);
                        }
                    }
                    if (t) {
                        let r = [ t, e ];
                        !1 === n && (r = [ t ]), 0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = r) : this.prerelease = r;
                    }
                    break;
                }

              default:
                throw new Error("invalid increment argument: " + e);
            }
            return this.raw = this.format(), this.build.length && (this.raw += "+" + this.build.join(".")), 
            this;
        }
    }
    e.exports = u;
}
