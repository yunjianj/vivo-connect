// analysis/pretty/main.js:22804; webpack module 158
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(1306)), o = n(1307), a = r.__importDefault(n(76)), s = n(41), l = r.__importDefault(n(26)), c = n(2), u = r.__importDefault(n(1)), d = c.app.getPath("appData"), h = c.app.getPath("temp");
    class p {
        constructor() {
            this.filterFolder = [ u.default.join(d, "pcsuite", "fm_file_temp"), u.default.join(d, "pcsuite", "fm_thumb_cache") ], 
            this.filterMacFolder = [ ...this.filterFolder ], this.filterWinFolder = [ ...this.filterFolder, u.default.join(h, "VDFS") ], 
            this.searchVersion = 0, this.log = new a.default([ s.LogModule.FRAMEWORK, "LocalSearchManager" ]).getExpandLog();
        }
        static getInstance() {
            return this.instance || (this.instance = new p), this.instance;
        }
        initPlugins() {
            "win32" === process.platform ? this.useWinPlugins() : this.useMacPlugins(), this.clearThumbCache();
        }
        useMacPlugins() {
            try {
                this.log.info("useMacPlugins init"), i.default.init();
            } catch (e) {
                this.log.error("useMacPlugins error: " + e);
            }
        }
        useWinPlugins() {
            this.log.info("useWinPlugins init everything"), i.default.init();
        }
        getFilter(e) {
            return e == o.SEARCH_TYPE.ALL ? o.FILTER.FILTER_ALL : e == o.SEARCH_TYPE.FOLDER ? o.FILTER.FILTER_FOLDER : e == o.SEARCH_TYPE.IMAGE ? o.FILTER.FILTER_IMAGE : e == o.SEARCH_TYPE.VIDEO ? o.FILTER.FILTER_MOVIE : e == o.SEARCH_TYPE.AUDIO ? o.FILTER.FILTER_AUDIO : e == o.SEARCH_TYPE.DOC ? o.FILTER.FILTER_DOCUMENT : e == o.SEARCH_TYPE.OTHER ? o.FILTER.FILTER_OTHER : e == o.SEARCH_TYPE.ARCH ? o.FILTER.FILTER_ARCHIVE : e == o.SEARCH_TYPE.EXE ? o.FILTER.FILTER_EXCUTABLE : o.FILTER.FILTER_ALL;
        }
        init() {
            this.initPlugins();
        }
        getThumbnail(e) {
            const {path: t, width: n = 128, height: r = 128, saveFileName: o = ""} = e;
            return new Promise(e => {
                i.default.getThumbnail(t, o, n, r, t => {
                    e(t);
                });
            });
        }
        doSearch(e) {
            this.log.info("doSearch startQuery start, " + JSON.stringify(e)), console.log("FileSearch>>>>", i.default);
            const {keyword: t, type: n, pageIndex: r, pageNumber: o, tokenizedWords: a, data: s, sortType: l = 4, isFolder: c = !1} = e, u = this.getFilter(n), d = Object.assign(Object.assign({}, e), {
                searchKey: t,
                pageIndex: r,
                pageSize: o,
                filter: u
            });
            let h = c ? {
                searchKey: "",
                searchPaths: [ s ]
            } : Object.assign(Object.assign({}, d), {
                filter: u,
                sortType: l,
                searchToken: a,
                searchPaths: []
            });
            h.excludePaths = "win32" === process.platform ? this.filterWinFolder : this.filterMacFolder, 
            this.log.info("doSearch startQuery, " + JSON.stringify(h));
            const p = ++this.searchVersion;
            return new Promise(e => {
                r ? (i.default.queryNext(t => {
                    p === this.searchVersion ? (console.log("doSearch queryNext GetResults=>", t), this.log.info("doSearch startQuery end, " + t.length), 
                    e(t)) : this.log.info(`doSearch queryNext discarded, version: ${p}, latest: ${this.searchVersion}`);
                }), console.log("doSearch queryNext", Object.assign({}, h))) : (i.default.startQuery(Object.assign({}, h), t => {
                    p === this.searchVersion ? (console.log("doSearch startQuery GetResults=>", t), 
                    this.log.info("doSearch startQuery end, " + t.length), e(t)) : this.log.info(`doSearch startQuery discarded, version: ${p}, latest: ${this.searchVersion}`);
                }), console.log("doSearch startQuery", Object.assign({}, h)));
            });
        }
        openFileDetailsByNative(e) {
            const {fullPathName: t} = e;
            this.log.info("openFileDetailsByNative, " + t), i.default.showFileInfo(t);
        }
        trashFile(e) {
            var t, o;
            if (!this.winId) {
                const e = null === (o = null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.getNativeWindowHandle()) || void 0 === o ? void 0 : o.readUInt32LE(0);
                this.winId = e;
            }
            if (l.default.getSysEnv.isMac) {
                const {shell: t} = n(2);
                let i = e.map(e => r.__awaiter(this, void 0, void 0, function*() {
                    return t.trashItem(e.savePath);
                }));
                return console.log("trashFile", i), Promise.allSettled(i);
            }
            return new Promise(t => {
                i.default.moveFileToTrash(e.map(e => e.savePath), 0, e => {
                    global.__log.info("filesResult:" + JSON.stringify(e)), t(e);
                });
            });
        }
        uninit() {
            try {
                this.log.info("uninit"), i.default.uninit();
            } catch (e) {
                this.log.error("uninit error: " + e);
            }
        }
        startSearchService() {
            const {isWin: e} = l.default.getSysEnv;
            e && this.installEverything();
        }
        isSearchServiceRunning() {
            const {isWin: e} = l.default.getSysEnv;
            return !e || this.isEverythingRunning();
        }
        installEverything() {
            this.log.info("installEverything startEverything"), i.default.startEverything();
        }
        isEverythingRunning() {
            const e = i.default.everythingServiceIsRunning();
            return this.log.info("checkEverything, isRunning: " + e), e;
        }
        everythingIsDBLoaded() {
            const e = i.default.everythingIsDBLoaded();
            return this.log.info("everythingIsDBLoaded, isDBLoaded: " + e), e;
        }
        clearThumbCache() {
            this.log.info("clearThumbCache"), i.default.clearThumbnail();
        }
    }
    t.default = p;
}
