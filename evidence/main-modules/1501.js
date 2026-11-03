// analysis/pretty/main.js:112285; webpack module 1501
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(209)), a = n(11), s = n(201), l = r.__importDefault(n(158)), c = r.__importDefault(n(726)), u = r.__importDefault(n(1502)), d = r.__importDefault(n(110)), h = r.__importDefault(n(28));
    class p extends o.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new p), this.instance;
        }
        registerIpcEvent() {
            i.ipcMain.on(a.LOG_MESSAGE_ENUM.PACK_LOG_FILES, (e, t) => {
                try {
                    global.__log.info("DragFile.queryPCSuiteInfo() start"), h.default.queryPCSuiteInfo(), 
                    global.__log.info("DragFile.queryPCSuiteInfo() end");
                } catch (e) {
                    global.__log.error("DragFile.queryPCSuiteInfo() error :" + e);
                }
                s.getLogZip(t).then(t => {
                    global.__log.info("getLogZip sucess"), e.reply(a.LOG_MESSAGE_ENUM.PACK_LOG_FILES_REPLY, {
                        errCode: 0,
                        zipBuffer: t
                    });
                }).catch(n => {
                    global.__log.error("getLogZip打包日志失败:" + n), s.getTxtFileZip(t).then(t => {
                        e.reply(a.LOG_MESSAGE_ENUM.PACK_LOG_FILES_REPLY, {
                            errCode: 1,
                            zipBuffer: t
                        });
                    }).catch(e => {
                        global.__log.error("getTxtFileZip打包txt文件失败:" + e);
                    });
                });
            }), i.ipcMain.on(a.LOG_MESSAGE_ENUM.LAUNCH_DUMP_REPORT, e => r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("LOG_MESSAGE_ENUM.LAUNCH_DUMP_REPORT:'"), d.default.getInstance().launchDumpReportApp();
            })), i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_LOCAL_SEARCH, (e, t) => {
                global.__log.info("GS_MESSAGE_ENUM.GS_LOCAL_SEARCH[start]' " + JSON.stringify(t));
                const n = l.default.getInstance().doSearch(t);
                return global.__log.info("GS_MESSAGE_ENUM.GS_LOCAL_SEARCH[end] " + (n ? n.length : 0)), 
                n;
            }), i.ipcMain.on(a.GS_MESSAGE_ENUM.GS_OPEN_FILE_DETAILE, (e, t) => {
                console.log("GS_MESSAGE_ENUM.GS_OPEN_FILE_DETAILE", t), l.default.getInstance().openFileDetailsByNative(t);
            }), i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_GET_THUMB, (e, t) => u.default.getInstance().getThumb(t)), 
            i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_TOKENIZER, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                return global.__log.info("GS_MESSAGE_ENUM.GS_LOCAL_SEARCH', " + t), yield c.default.getWordTokenizer(t);
            })), i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_TRASHITEM, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                return global.__log.info("GS_MESSAGE_ENUM.GS_TRASHITEM"), l.default.getInstance().trashFile(t);
            })), i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_IS_SEARCH_SERVICE_RUNNING, e => r.__awaiter(this, void 0, void 0, function*() {
                return global.__log.info("GS_MESSAGE_ENUM.GS_IS_SEARCH_SERVICE_RUNNING"), l.default.getInstance().isSearchServiceRunning();
            })), i.ipcMain.handle(a.GS_MESSAGE_ENUM.GS_IS_SEARCH_SERVICE_DB_LOAD, e => r.__awaiter(this, void 0, void 0, function*() {
                return global.__log.info("GS_MESSAGE_ENUM.GS_IS_SEARCH_SERVICE_DB_LOAD"), l.default.getInstance().everythingIsDBLoaded();
            })), i.ipcMain.on(a.GS_MESSAGE_ENUM.GS_START_SEARCH_SERVICE, e => r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("GS_MESSAGE_ENUM.GS_START_SEARCH_SERVICE"), l.default.getInstance().startSearchService();
            }));
        }
    }
    t.default = p;
}
