// analysis/pretty/main.js:110789; webpack module 1485
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AlbumClawService = t.ALBUM_CLAW_ENUM = void 0;
    const r = n(0), i = n(58);
    var o;
    !function(e) {
        e.ALBUM_IMPORT_EVENT = "album:importEvent", e.ALBUM_REPLY_IMPORT_EVENT = "album:reply:importEvent", 
        e.ALBUM_SEARCH_EVENT = "album:searchEvent", e.ALBUM_REPLY_SEARCH_EVENT = "album:reply:searchEvent", 
        e.ALBUM_MOVE_EVENT = "album:moveEvent", e.ALBUM_REPLY_MOVE_EVENT = "album:reply:moveEvent", 
        e.ALBUM_RENAME_EVENT = "album:renameEvent", e.ALBUM_REPLY_RENAME_EVENT = "album:reply:renameEvent", 
        e.ALBUM_GET_FOLDER_EVENT = "album:getFolderEvent", e.ALBUM_GET_FOLDER_RENAME_EVENT = "album:reply:getFolderEvent";
    }(o = t.ALBUM_CLAW_ENUM || (t.ALBUM_CLAW_ENUM = {}));
    class a {
        static getInstance() {
            return a.instance || (a.instance = new a), a.instance;
        }
        importEvent(e) {
            return this.sendMsg(o.ALBUM_IMPORT_EVENT, e);
        }
        searchEvent(e) {
            return this.sendMsg(o.ALBUM_SEARCH_EVENT, e);
        }
        moveEvent(e) {
            return this.sendMsg(o.ALBUM_MOVE_EVENT, e);
        }
        renameEvent(e) {
            return this.sendMsg(o.ALBUM_RENAME_EVENT, e);
        }
        getFolderEvent(e) {
            return this.sendMsg(o.ALBUM_GET_FOLDER_EVENT, e);
        }
        sendMsg(e, t) {
            return new Promise(r => {
                var o;
                const s = i.v4().replace(/-/g, "");
                null === (o = global.__mainWindow) || void 0 === o || o.webContents.send(e, Object.assign({
                    guid: s
                }, t));
                const l = setTimeout(() => {
                    r(new Error("Request timeout"));
                }, a.REQUEST_TIMEOUT);
                if (!process.env.IS_WEB) {
                    const {ipcMain: t} = n(2), i = this.getReplyEvent(e);
                    t.once(`${i}:${s}`, (e, t) => {
                        console.log("[AlbumClawServiceInstance] data", t), clearTimeout(l), r(t);
                    });
                }
            });
        }
        getReplyEvent(e) {
            const t = {
                [o.ALBUM_IMPORT_EVENT]: o.ALBUM_REPLY_IMPORT_EVENT,
                [o.ALBUM_SEARCH_EVENT]: o.ALBUM_REPLY_SEARCH_EVENT,
                [o.ALBUM_MOVE_EVENT]: o.ALBUM_REPLY_MOVE_EVENT,
                [o.ALBUM_RENAME_EVENT]: o.ALBUM_REPLY_RENAME_EVENT,
                [o.ALBUM_GET_FOLDER_EVENT]: o.ALBUM_GET_FOLDER_RENAME_EVENT
            };
            return e in t ? t[e] : o.ALBUM_REPLY_IMPORT_EVENT;
        }
        getIsForwardRequest(e) {
            return !!e && e.includes("pc_album");
        }
        forwardRequest(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = (e.url || "").split("?")[0] || "", r = /pc_album\/import_album/.test(n), i = /pc_album\/search_album/.test(n), o = /pc_album\/move_album/.test(n), a = /pc_album\/rename_album/.test(n), s = /pc_album\/getFolder_album/.test(n);
                if (r || i || o || a || s) if ("application/json" === e.headers["content-type"]) try {
                    const l = yield this.collectRequestBody(e), c = this.parseJsonBody(l, n);
                    let u;
                    r ? (u = yield this.importEvent(c), this.handleImportResult(t, u)) : i ? (u = yield this.searchEvent(c), 
                    this.handleSearchResult(t, u)) : o ? (u = yield this.moveEvent(c), this.handleMoveResult(t, u)) : a ? (u = yield this.renameEvent(c), 
                    this.handleRenameResult(t, u)) : s && (u = yield this.getFolderEvent(c), this.handleGetFolderResult(t, u));
                } catch (e) {
                    this.handleRequestError(t, e, n);
                } else this.endHttpError(t, "Unsupported Media Type", 415); else this.endHttpError(t, "not found", 404);
            });
        }
        collectRequestBody(e) {
            return new Promise((t, n) => {
                let r = "";
                e.on("data", e => {
                    r += null == e ? void 0 : e.toString();
                }), e.on("end", () => t(r)), e.on("error", n);
            });
        }
        parseJsonBody(e, t) {
            try {
                return JSON.parse(e);
            } catch (e) {
                throw global.__log.info(`req path=${t} body json parse error: ${e.message}`), new Error("JSON解析失败");
            }
        }
        handleImportResult(e, t) {
            this.handleGenericResult(e, t, "导入图片失败");
        }
        handleSearchResult(e, t) {
            this.handleGenericResult(e, t, "搜索图片失败");
        }
        handleMoveResult(e, t) {
            this.handleGenericResult(e, t, "移动图片失败");
        }
        handleRenameResult(e, t) {
            this.handleGenericResult(e, t, "更名失败");
        }
        handleGetFolderResult(e, t) {
            this.handleGenericResult(e, t, "更名失败");
        }
        handleGenericResult(e, t, n) {
            (null == t ? void 0 : t.success) ? this.endOk(e, t) : this.endError(e, n);
        }
        handleRequestError(e, t, n) {
            "JSON解析失败" === t.message ? this.endError(e, t.message, 10001) : (global.__log.info(`req path=${n} error: ${t.message}`), 
            this.endHttpError(e, "Internal Server Error", 500));
        }
        endHttpError(e, t, n = 404) {
            e.writeHead(n, {
                "content-type": "text/plain"
            }), e.end(t);
        }
        endOk(e, t) {
            e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                code: 0,
                data: t
            }));
        }
        endError(e, t, n = 1) {
            e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                code: n,
                data: {},
                message: t
            }));
        }
    }
    a.REQUEST_TIMEOUT = 1e4, t.AlbumClawService = a.getInstance();
}
