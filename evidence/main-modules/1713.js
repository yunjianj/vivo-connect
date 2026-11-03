// analysis/pretty/main.js:131631; webpack module 1713
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getMenuTemplate = void 0;
    const r = n(0), i = n(2), o = n(11), a = n(46), s = n(1714), l = "darwin" == process.platform, c = "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "");
    t.getMenuTemplate = function(e = !1) {
        let t, n = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? a.getLocalesJson("framework") : null;
        if (l) {
            if (t = [ {
                label: "",
                submenu: [ {
                    label: n ? c ? n.menuTempLaPcTeTitle1.replace(/vivo/gi, "JOVI") : n.menuTempLaPcTeTitle1 : "关于vivo办公套件",
                    role: "about"
                }, {
                    type: "separator"
                }, {
                    label: n ? c ? n.menuTempLaPcTeTitle2.replace(/vivo/gi, "JOVI") : n.menuTempLaPcTeTitle2 : "隐藏vivo办公套件",
                    visible: !0,
                    accelerator: "Command+H",
                    click: (e, t, n) => {
                        var r;
                        i.app.hide(), n.triggeredByAccelerator && (null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.EXTRA_GLOBAL_SHORTCUT_REPORT, s.TrackerShortcutKey.KEY_COMMAND_H_MAC));
                    }
                }, {
                    label: n ? n.menuTempLaPcTeTitle3 : "隐藏其他各项",
                    role: "hideOthers"
                }, {
                    label: n ? n.menuTempLaPcTeTitle4 : "全部显示",
                    role: "unhide"
                }, {
                    type: "separator"
                }, {
                    label: n ? c ? n.menuTempLaPcTeTitle5.replace(/vivo/gi, "JOVI") : n.menuTempLaPcTeTitle5 : "退出vivo办公套件",
                    accelerator: "Command+Q",
                    visible: !0,
                    click: (e, t, n) => {
                        var r;
                        n.triggeredByAccelerator && (null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.EXTRA_GLOBAL_SHORTCUT_REPORT, s.TrackerShortcutKey.KEY_CTRL_Q)), 
                        i.app.quit();
                    }
                } ]
            }, {
                label: n ? n.menuTempLaFnTeTitle1 : "编辑",
                role: "editMenu",
                submenu: [ {
                    label: n ? n.menuTempLaFnTeTitle2 : "撤销",
                    role: "undo"
                }, {
                    label: n ? n.menuTempLaFnTeTitle3 : "重做",
                    role: "redo"
                }, {
                    type: "separator"
                }, {
                    label: n ? n.menuTempLaFnTeTitle4 : "剪切",
                    role: "cut"
                }, {
                    label: n ? n.menuTempLaFnTeTitle5 : "复制",
                    role: "copy"
                }, {
                    label: n ? n.menuTempLaFnTeTitle6 : "粘贴",
                    role: "paste"
                }, {
                    label: n ? n.menuTempLaFnTeTitle7 : "粘贴并匹配格式",
                    role: "pasteAndMatchStyle"
                }, {
                    label: n ? n.menuTempLaFnTeTitle8 : "删除",
                    role: "delete"
                }, {
                    label: n ? n.menuTempLaFnTeTitle9 : "全选",
                    accelerator: "CmdOrCtrl+A",
                    click: (e, t) => {
                        (null == t ? void 0 : t.webContents) && (t.webContents.selectAll(), t.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.SELECT_ALL));
                    }
                } ]
            }, {
                label: n ? n.menuTempLaWinTeTitle1 : "窗口",
                role: "windowMenu",
                submenu: [ {
                    label: n ? n.menuTempLaWinTeTitle2 : "最小化",
                    click: (e, t, n) => {
                        var r;
                        console.log("menu minmize", t), (null == t ? void 0 : t.isMinimizable()) ? t.minimize() : null === (r = global.__mainWindow) || void 0 === r || r.minimize();
                    },
                    role: "minimize"
                }, {
                    label: n ? n.menuTempLaWinTeTitle3 : "缩放窗口",
                    role: "zoom"
                }, {
                    type: "separator"
                }, {
                    label: n ? n.menuTempLaWinTeTitle4 : "前置全部窗口",
                    role: "front"
                }, {
                    label: "关闭窗口",
                    accelerator: "CommandOrControl+W",
                    click: (e, t, n) => {
                        const r = global.__mainWindow;
                        null == r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.COMMAND_OR_CONTRL_W, n.triggeredByAccelerator);
                    },
                    visible: !1
                }, {
                    label: "关闭全部窗口",
                    accelerator: "CommandOrControl+Option+W",
                    click: (e, t, n) => {
                        const r = global.__mainWindow;
                        null == r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.COMMAND_OR_CONTRL_OPTION_W, n.triggeredByAccelerator);
                    },
                    visible: !1
                }, {
                    label: "进入/退出全屏幕",
                    accelerator: "Command+Control+F",
                    click: () => {
                        const e = global.__mainWindow;
                        (null == e ? void 0 : e.isFullScreen()) ? null == e || e.setFullScreen(!1) : null == e || e.setFullScreen(!0);
                    },
                    visible: !1
                } ]
            }, {
                label: n ? n.menuTempLaHelpTeTitle1 : "帮助",
                submenu: [ {
                    label: n ? n.menuTempLaHelpTeTitle2 : "检查更新",
                    click: () => {
                        var e;
                        if (a.welcomeWindowIsExist()) return void global.__log.info("click checkupdate. welcomeWindowIsExist return");
                        const t = global.__mainWindow;
                        null == t || t.moveTop(), null == t || t.focus(), null === (e = null == t ? void 0 : t.webContents) || void 0 === e || e.send(o.MENU_MESSAGE_ENUM.MENU_CHECK_UPDATE);
                    }
                }, {
                    label: n ? n.menuTempLaHelpTeTitle3 : "意见反馈",
                    click: () => {
                        var e;
                        if (a.welcomeWindowIsExist()) return void global.__log.info("click feedback. welcomeWindowIsExist return");
                        const t = global.__mainWindow;
                        null == t || t.moveTop(), null == t || t.focus(), null === (e = null == t ? void 0 : t.webContents) || void 0 === e || e.send(o.MENU_MESSAGE_ENUM.REDIRECT_FEEDBACK);
                    }
                } ]
            } ], e) {
                const e = (null == n ? void 0 : n.menuTempLaHelpTeTitle1) || "帮助", r = t.findIndex(t => t.label == e);
                -1 !== r && t[r].submenu.push({
                    role: "toggleDevTools"
                });
            }
        } else t = [ {
            label: "",
            accelerator: "Ctrl+H",
            click: () => {
                i.BrowserWindow.getAllWindows().forEach(e => {
                    !e.isDestroyed() && (null == e || e.minimize());
                });
            }
        }, {
            label: "",
            accelerator: "Ctrl+Q",
            click: () => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                null === (e = global.__mainWindow) || void 0 === e || e.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.EXTRA_GLOBAL_SHORTCUT_REPORT, s.TrackerShortcutKey.KEY_CTRL_Q), 
                yield a.delay(800, () => {
                    i.app.quit();
                });
            })
        } ], e && t.push({
            role: "help",
            submenu: [ {
                role: "toggleDevTools"
            } ]
        });
        return i.Menu.buildFromTemplate(t);
    };
}
