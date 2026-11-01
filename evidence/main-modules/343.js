// analysis/pretty/main.js:37193; webpack module 343
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(266), o = r.__importDefault(n(6)), a = r.__importDefault(n(26)), s = n(41), l = r.__importDefault(n(161)), c = n(2);
    class u extends l.default {
        constructor() {
            super([ s.LogModule.FRAMEWORK, "RtlManager" ]), this._isRtl = !1, this._currentLanguage = "zh_CN";
        }
        get isRtl() {
            return this._isRtl;
        }
        get currentLanguage() {
            return this._currentLanguage;
        }
        get vivoLang() {
            var e;
            return (null === (e = i.langMap.find(e => e.region === this.currentLanguage)) || void 0 === e ? void 0 : e.vRegion) || "vus";
        }
        setRtl(e, t) {
            this._currentLanguage = e, this._isRtl = t;
        }
        isRtlSysEnv() {
            let e = c.app.getLocale().replace(/-/g, "_");
            [ "id_ID", "id-ID" ].includes(e) && (e = "in_ID"), e.startsWith("zh_Hans") && (e = "zh_CN"), 
            e.startsWith("zh_Hant") && (e = "zh_TW");
            const t = i.RTL_Lang_Set.some(t => e.startsWith(t));
            return this.log.info(`system-env-language: ${e}, system-env-rtl: ${t}`), t;
        }
        isRealRtl() {
            return this.isRtlSysEnv() ? !this.isRtl : this.isRtl;
        }
        init() {
            const e = !o.default.getItem("useLogin"), t = !o.default.getItem("currentLanguage");
            if (e || t) {
                const e = a.default.getConfigIni();
                if (e) {
                    let t = e.LanguageTag;
                    if (!t) return void this.getNativeLanguage();
                    [ "id_ID", "id-ID" ].includes(t) && (t = "in_ID"), [ "zh_Hans", "zh-Hans" ].some(e => t.startsWith(e)) && (t = "zh_CN"), 
                    [ "zh_Hant", "zh-Hant" ].some(e => t.startsWith(e)) && (t = "zh_TW");
                    const n = i.langMap.map(e => e.region);
                    n.includes(t) || n.includes(t.split("_")[0]) || (t = "en_US");
                    const r = i.langMap.find(e => e.region == t || e.region.startsWith(t) || e.region.startsWith(t.split("_")[0]));
                    this.log.info(`langCode: ${t}, lang: ${JSON.stringify(r)}`), r ? (this._currentLanguage = r.region, 
                    this._isRtl = i.RTL_Lang_Set.some(e => r.region.startsWith(e)), o.default.setItem("currentLanguage", this.currentLanguage), 
                    o.default.setItem("vLang", this.vivoLang), o.default.setItem("isRtl", this.isRtl)) : this.getNativeLanguage();
                } else this.getNativeLanguage();
            } else this._currentLanguage = o.default.getItem("currentLanguage"), this._isRtl = o.default.getItem("isRtl");
        }
        getNativeLanguage() {
            c.app.on("ready", () => {
                let e = c.app.getLocale().replace(/-/g, "_");
                this.log.info("getNativeLanguage region: " + e), "id_ID" === e && (e = "in_ID"), 
                e.startsWith("zh_Hans") && (e = "zh_CN"), e.startsWith("zh_Hant") && (e = "zh_TW");
                const t = i.langMap.map(e => e.region);
                t.includes(e) || t.includes(e.split("_")[0]) || (e = "en_US");
                const n = i.langMap.find(t => t.region == e || t.region.startsWith(e) || t.region.startsWith(e.split("_")[0]));
                this._currentLanguage = (null == n ? void 0 : n.region) || "en_US", this.log.info("getNativeLanguage: _currentLanguage, lang: " + this._currentLanguage), 
                this._isRtl = i.RTL_Lang_Set.some(e => this.currentLanguage.startsWith(e)), o.default.setItem("currentLanguage", this.currentLanguage), 
                o.default.setItem("vLang", this.vivoLang), o.default.setItem("isRtl", this.isRtl);
            });
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
    }
    t.default = u.getInstance();
}
