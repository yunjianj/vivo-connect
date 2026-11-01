// analysis/pretty/main.js:132077; webpack module 1719
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = n(2), o = n(1720), a = r.__importDefault(n(116)), s = r.__importDefault(n(4));
    function l() {
        i.ipcMain.on(o.IpcAction.SAVE_ACTION, c), i.ipcMain.on(o.IpcAction.RENAME_ACTION, d), 
        i.ipcMain.on(o.IpcAction.COPY_ACTION, u), i.ipcMain.on(o.IpcAction.MOVE_ACTION, h);
    }
    t.init = l;
    const c = (e, t) => {
        console.log("--onSaveImage--"), i.dialog.showSaveDialog({
            title: "文件另存为",
            buttonLabel: "保存",
            filters: [ {
                name: "图片",
                extensions: [ "jpg", "png", "gif" ]
            }, {
                name: "视频",
                extensions: [ "mp4", "avi" ]
            } ]
        }).then(e => {
            if (e.filePath) {
                let n = e.filePath;
                if (console.log("typeof filePath", typeof n), n) {
                    const e = s.default.createReadStream(t);
                    e.on("end", () => {
                        console.info("onSaveImage end");
                    }), e.on("error", e => {
                        console.error(e);
                    }), e.pipe(s.default.createWriteStream(n));
                }
            }
        });
    }, u = (e, t, n) => {
        console.log("originPath---", t), console.log("savePath---", n);
        const r = s.default.createReadStream(t);
        r.on("end", () => {
            console.info("onSaveImage end");
        }), r.on("error", e => {
            console.error(e);
        }), r.pipe(s.default.createWriteStream(n));
    }, d = () => {
        try {
            a.default.rename("D:/所有项目/storage/emulated/0/DCIM/Camera/IMG_20180823_173732.jpg", "D:/所有项目/test/IMG_20180823_173732.jpg").then(e => {
                console.log("--res--", e);
            });
        } catch (e) {}
    }, h = (e, t, n) => {
        try {
            a.default.rename(t, n).then(e => {
                console.log("--res--", e);
            });
        } catch (e) {}
    };
    t.default = {
        init: l
    };
}
