// analysis/pretty/main.js:64394; webpack module 726
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(1)), o = r.__importDefault(n(26)), a = n(1482);
    class s {
        constructor() {
            this.segment = new a, this.init();
        }
        static getInstance() {
            return null == s.instance && (s.instance = new s), s.instance;
        }
        init() {
            const e = o.default.getSysEnv.isDev, t = e ? "../../../" : "../../";
            this.segment.use("URLTokenizer").use("WildcardTokenizer").use("PunctuationTokenizer").use("ForeignTokenizer").use("DictTokenizer").use("ChsNameTokenizer").use("EmailOptimizer").use("ChsNameOptimizer").use("DictOptimizer").use("DatetimeOptimizer").loadDict("dict.txt").loadDict("dict2.txt").loadDict("dict3.txt").loadDict("names.txt").loadDict("wildcard.txt", "WILDCARD", !0).loadSynonymDict("synonym.txt");
            const n = i.default.resolve(__dirname, `${t}${e ? "" : "dist/electron/"}static/stop_words.txt`);
            try {
                this.segment.loadStopwordDict(n);
            } catch (e) {
                console.log(e);
            }
        }
        getWordTokenizer(e) {
            let t = [];
            try {
                t = this.segment.doSegment(e.trim(), {
                    stripStopword: !0,
                    stripPunctuation: !0
                }).map(e => e.w), global.__log.info("getWordTokenizer success: " + t), t = this.filterTokenizers(e, t), 
                global.__log.info("getWordTokenizer filter success: " + t);
            } catch (e) {
                global.__log.error("getWordTokenizer error: " + e);
            }
            return [ ...new Set(t) ];
        }
        filterTokenizers(e, t) {
            return console.log("filterTokenizers", e, t), t.filter(t => t !== e);
        }
    }
    t.default = s.getInstance();
}
