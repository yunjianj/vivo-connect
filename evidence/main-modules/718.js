// analysis/pretty/main.js:63817; webpack module 718
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(356)), o = n(141), a = n(139), s = n(721), l = n(2), c = n(722), u = n(240), d = r.__importDefault(n(71));
    class h {
        static getInstance() {
            return h.instance || (h.instance = new h, h.instance.init()), h.instance;
        }
        init() {
            l.ipcMain.on(a.IPC_NOTICE_WIN_MSG_HANDLE.WIN_CLOSE, () => {
                c.cancelOriginIsland(), u.cancelVivoShare();
            }), l.ipcMain.on(a.IPC_NOTICE_WIN_MSG_HANDLE.ABORT, (e, t) => {
                t.from == o.NOTICE_WIN_MSG_ITEM_FROM.ORIGIN_ISLAND && c.cancelOriginIsland(), t.from == o.NOTICE_WIN_MSG_ITEM_FROM.VIVOSHARE && u.cancelVivoShare();
            }), l.ipcMain.on(a.IPC_NOTICE_WIN_MSG_HANDLE.RECEIVE, (e, t) => {
                t.from == o.NOTICE_WIN_MSG_ITEM_FROM.VIVOSHARE && u.startDownloadVivoShare();
            }), l.ipcMain.on(a.IPC_NOTICE_WIN_MSG_HANDLE.LOOK, (e, t) => {
                t.from == o.NOTICE_WIN_MSG_ITEM_FROM.ORIGIN_ISLAND && c.openOriginIslandFolder(), 
                t.from == o.NOTICE_WIN_MSG_ITEM_FROM.VIVOSHARE && u.openVivoShareFolder();
            });
        }
        preAdd(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.getItemByInfo(e, s.TransStatusEnum.IsReceive);
                i.default.send(a.IPC_NOTICE_WIN_MSG.ADD_NOTICE, t);
            });
        }
        add(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.getItemByInfo(e, s.TransStatusEnum.Progress);
                i.default.send(a.IPC_NOTICE_WIN_MSG.ADD_NOTICE, t);
            });
        }
        updateProgress(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.getItemByInfo(e, s.TransStatusEnum.Progress);
                i.default.send(a.IPC_NOTICE_WIN_MSG.UPDATE_NOTICE, t);
            });
        }
        updateResult(e, t = 0, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {totalCount: r} = e;
                let o = s.TransStatusEnum.Success;
                o = t ? r == t ? s.TransStatusEnum.Success : s.TransStatusEnum.Interrupt : s.TransStatusEnum.Fail;
                const l = yield this.getItemByInfo(e, o, t, n);
                i.default.send(a.IPC_NOTICE_WIN_MSG.UPDATE_NOTICE, l);
            });
        }
        getItemByInfo(e, t, n = 0, o) {
            return new Promise(s => r.__awaiter(this, void 0, void 0, function*() {
                const r = d.default();
                l.ipcMain.on(`${a.IPC_COMMON_ENUM.GET_STR_RES}${r}`, (e, t) => {
                    s(t);
                }), i.default.send(a.IPC_COMMON_ENUM.GET_STR_RES, {
                    baseInfo: e,
                    status: t,
                    successCount: n,
                    code: o,
                    ipcId: r
                });
            }));
        }
    }
    t.default = h.getInstance();
}
