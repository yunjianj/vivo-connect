// analysis/pretty/main.js:64544; webpack module 729
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importStar(n(8)), o = r.__importDefault(n(1)), a = n(2), s = n(2), l = n(63), c = n(11), u = r.__importDefault(n(157)), d = n(46), h = n(11), p = "darwin" === i.platform(), f = "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "");
    let _;
    function m(e) {
        _ = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? d.getLocalesJson("framework") : {};
        const t = s.Menu.buildFromTemplate([ {
            label: (null == _ ? void 0 : _.winRightMenuTitle1) ? null == _ ? void 0 : _.winRightMenuTitle1 : "打开主窗口",
            click: () => {
                let e = global.__windows.get("welcome");
                e ? e.show() : (global.__log.info("appIcon open:mainWindow initialized completed"), 
                null === l.mainWindow || void 0 === l.mainWindow || l.mainWindow.show());
            }
        }, {
            label: (null == _ ? void 0 : _.winRightMenuTitle2) ? null == _ ? void 0 : _.winRightMenuTitle2 : "退出应用",
            click: () => {
                a.app.quit();
            }
        } ]);
        e.setToolTip(_.winRightMenuTitle3 ? f ? _.winRightMenuTitle3.replace(/vivo/gi, "JOVI") : _.winRightMenuTitle3 : "vivo办公套件"), 
        e.setContextMenu(t);
    }
    t.default = () => r.__awaiter(void 0, void 0, void 0, function*() {
        let e;
        e = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", "Resources/macIconTemplate@2x.png");
        let t = p ? e : "logo.ico";
        global.__log.info("iconpath:" + t), global.__appIcon = new s.Tray(t), m(global.__appIcon), 
        a.ipcMain.on(h.LocaleManagerMsg.ON_LOCALE_CHANGE, () => {
            m(global.__appIcon);
        }), global.__appIcon.on("click", () => {
            var e;
            global.__log.info("appIcon restore");
            const t = global.__windows.get("welcome");
            t ? t.show() : (global.__log.info("appIcon restore:mainWindow initialized completed"), 
            global.__windows.forEach((e, t) => {
                ("ai-talk" != t || u.default.getInstance().isAdsorption()) && e.showInactive();
            }), null === l.mainWindow || void 0 === l.mainWindow || l.mainWindow.show(), null === (e = null === l.mainWindow || void 0 === l.mainWindow ? void 0 : l.mainWindow.webContents) || void 0 === e || e.send(c.APP_MESSAGE_ENUM.EXPORT_PCSUITE_REPORT));
        });
    });
}
