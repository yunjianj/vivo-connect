// analysis/pretty/main.js:18812; webpack module 140
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sleep = t.hideWinInactiveOnMac = t.send2Main = t.revealAndSelectFiles = t.buildFailedMsg = t.commonNotificationOpt = void 0;
    const r = n(0), i = n(2), o = n(28), a = n(74), s = n(11);
    function l(e, t) {
        const n = global.__mainWindow;
        null == n || n.isDestroyed() ? global.__log.error("[oi]send 2 main error") : n.webContents.send(e, t);
    }
    t.commonNotificationOpt = {
        body: "",
        silent: !1,
        hasReply: !1,
        timeoutType: "default",
        urgency: "normal"
    }, t.buildFailedMsg = function(e, t, n) {
        const r = (t > 0 ? `${t} ${n.fileType}接收成功，` : "") + `${n.totalCount - t} ${n.fileType}接收失败`, i = `“${n.nickName}${n.deviceName}”`;
        let o = t > 0 ? "接收中断" : "接收失败", s = "未知原因", l = `来自${i}的` + r;
        switch (e) {
          case a.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE:
            s = "电脑存储空间不足";
            break;

          case a.TRANSFER_FAIL_CODE.FILE_NOT_EXIST:
            s = "文件不存在";
            break;

          case a.TRANSFER_FAIL_CODE.NETWORK:
            o = "接收中断", s = `电脑与${i}连接异常`, l = r;
            break;

          case a.TRANSFER_FAIL_CODE.CANCEL_FROM_PHONE:
            o = "接收中断", s = i + "已取消发送", l = r;
        }
        return {
            title: o,
            content: `${s}。${l}。`
        };
    }, t.revealAndSelectFiles = function(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            try {
                const n = {
                    path: e,
                    files: t
                };
                o.openFolderAndSelectItems(JSON.stringify(n));
            } catch (t) {
                i.shell.openPath(e), global.__log.error("revealAndSelectFiles err: " + t);
            }
        });
    }, t.send2Main = l, t.hideWinInactiveOnMac = function(e) {
        i.ipcMain.once(s.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE_REPLY, (t, n) => {
            global.__log.info("visibleState:" + n.visibleState);
            const r = global.__mainWindow;
            "hidden" != n.visibleState || null == r || r.isDestroyed() || r.isFullScreen() || null == r || r.hide(), 
            e();
        }), l(s.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE);
    }, t.sleep = function(e) {
        return new Promise(t => setTimeout(t, e));
    };
}
