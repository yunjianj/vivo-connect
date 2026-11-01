// analysis/pretty/main.js:32671; webpack module 284
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(11), o = n(2);
    class a {
        constructor() {
            this.isRenderingProcessLoadingCompleted = !1;
        }
        static getInstance() {
            return null == a.instance && (a.instance = new a), a.instance;
        }
        sendTask(e) {
            var t;
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.renderingProcessLoadingCompleted(), null === (t = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === t || t.webContents.send(i.TRACKING_POINT_MESSAGE_ENUM.SEND_TASK, e);
            });
        }
        init() {
            o.ipcMain.on(i.TRACKING_POINT_MESSAGE_ENUM.RENDERING_PROCESS_LOADING_COMPLETED, () => {
                this.isRenderingProcessLoadingCompleted = !0;
            });
        }
        renderingProcessLoadingCompleted() {
            return !!this.isRenderingProcessLoadingCompleted || new Promise(e => {
                o.ipcMain.on(i.TRACKING_POINT_MESSAGE_ENUM.RENDERING_PROCESS_LOADING_COMPLETED, () => {
                    this.isRenderingProcessLoadingCompleted = !0, e(!0);
                });
            });
        }
    }
    t.default = a.getInstance();
}
