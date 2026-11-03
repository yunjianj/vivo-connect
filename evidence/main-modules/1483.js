// analysis/pretty/main.js:110149; webpack module 1483
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NoteClawService = t.NOTE_CLAW_ENUM = void 0;
    const r = n(0), i = n(58), o = n(2), a = r.__importDefault(n(4)), s = r.__importDefault(n(1));
    class l extends Error {
        constructor(e, t, n) {
            super(n), this.status = e, this.code = t;
        }
    }
    var c;
    !function(e) {
        e.NOTE_SAVE_HTML_TO_NOTE = "note:saveHtmlToNote", e.NOTE_REPLY_SAVE_HTML_TO_NOTE = "note:reply:saveHtmlToNote", 
        e.NOTE_SEARCH_NOTES = "note:searchNotes", e.NOTE_REPLY_SEARCH_NOTES = "note:reply:searchNotes", 
        e.NOTE_UPDATE_NOTE = "note:updateNote", e.NOTE_REPLY_UPDATE_NOTE = "note:reply:updateNote", 
        e.NOTE_CREATE_FOLDER = "note:createFolder", e.NOTE_REPLY_CREATE_FOLDER = "note:reply:createFolder", 
        e.NOTE_RENAME_FOLDER = "note:renameFolder", e.NOTE_REPLY_RENAME_FOLDER = "note:reply:renameFolder", 
        e.NOTE_MOVE_FOLDER = "note:moveFolder", e.NOTE_REPLY_MOVE_FOLDER = "note:reply:moveFolder", 
        e.NOTE_GET_ALL_FOLDERS = "note:getAllFolders", e.NOTE_REPLY_GET_ALL_FOLDERS = "note:reply:getAllFolders", 
        e.NOTE_FIND_FOLDER = "note:findFolder", e.NOTE_REPLY_FIND_FOLDER = "note:reply:findFolder", 
        e.NOTE_GET_NOTE_DETAIL = "note:getNoteDetail", e.NOTE_REPLY_GET_NOTE_DETAIL = "note:reply:getNoteDetail", 
        e.NOTE_SEARCH_TODOS = "note:searchTodos", e.NOTE_REPLY_SEARCH_TODOS = "note:reply:searchTodos", 
        e.NOTE_CREATE_TODO = "note:createTodo", e.NOTE_REPLY_CREATE_TODO = "note:reply:createTodo", 
        e.NOTE_UPDATE_TODO = "note:updateTodo", e.NOTE_REPLY_UPDATE_TODO = "note:reply:updateTodo";
    }(c = t.NOTE_CLAW_ENUM || (t.NOTE_CLAW_ENUM = {}));
    class u {
        static getInstance() {
            return u.instance || (u.instance = new u), u.instance;
        }
        saveHtmlToNote(e) {
            return this.sendMsg(c.NOTE_SAVE_HTML_TO_NOTE, c.NOTE_REPLY_SAVE_HTML_TO_NOTE, e);
        }
        searchNotes(e) {
            return this.sendMsg(c.NOTE_SEARCH_NOTES, c.NOTE_REPLY_SEARCH_NOTES, e);
        }
        updateNote(e) {
            return this.sendMsg(c.NOTE_UPDATE_NOTE, c.NOTE_REPLY_UPDATE_NOTE, e);
        }
        createFolder(e) {
            return this.sendMsg(c.NOTE_CREATE_FOLDER, c.NOTE_REPLY_CREATE_FOLDER, e);
        }
        renameFolder(e) {
            return this.sendMsg(c.NOTE_RENAME_FOLDER, c.NOTE_REPLY_RENAME_FOLDER, e);
        }
        moveFolder(e) {
            return this.sendMsg(c.NOTE_MOVE_FOLDER, c.NOTE_REPLY_MOVE_FOLDER, e);
        }
        getAllFolders(e = {}) {
            return this.sendMsg(c.NOTE_GET_ALL_FOLDERS, c.NOTE_REPLY_GET_ALL_FOLDERS, e);
        }
        findFolder(e) {
            return this.sendMsg(c.NOTE_FIND_FOLDER, c.NOTE_REPLY_FIND_FOLDER, e);
        }
        getNoteDetail(e) {
            return this.sendMsg(c.NOTE_GET_NOTE_DETAIL, c.NOTE_REPLY_GET_NOTE_DETAIL, e);
        }
        searchTodos(e) {
            return this.sendMsg(c.NOTE_SEARCH_TODOS, c.NOTE_REPLY_SEARCH_TODOS, e);
        }
        createTodo(e) {
            return this.sendMsg(c.NOTE_CREATE_TODO, c.NOTE_REPLY_CREATE_TODO, e);
        }
        updateTodo(e) {
            return this.sendMsg(c.NOTE_UPDATE_TODO, c.NOTE_REPLY_UPDATE_TODO, e);
        }
        sendMsg(e, t, n) {
            return new Promise(r => {
                var a;
                const s = i.v4().replace(/-/g, "");
                null === (a = global.__mainWindow) || void 0 === a || a.webContents.send(e, Object.assign({
                    _requestId: s
                }, n));
                const l = setTimeout(() => {
                    r(new Error("Request timeout"));
                }, 5e3);
                o.ipcMain.once(`${t}:${s}`, (e, n) => {
                    console.log(`[NoteClawServiceInstance] ${t}:${s} data`, n), clearTimeout(l), r(n);
                });
            });
        }
        getIsForwardRequest(e) {
            return null == e ? void 0 : e.includes("pc_note");
        }
        forwardRequest(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = (e.url || "").split("?")[0] || "";
                let i = "";
                e.on("data", e => {
                    i += null == e ? void 0 : e.toString();
                }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    if ("application/json" !== e.headers["content-type"]) return void this.endHttpError(t, "Unsupported content type", 415);
                    let r = {};
                    try {
                        r = JSON.parse(i);
                    } catch (e) {
                        return global.__log.info(`req path=${n} body json parse error: ${e.message}`), void this.endError(t, "JSON解析失败", 10001);
                    }
                    if (/pc_note\/save_html/.test(n)) {
                        const e = yield this.saveHtmlToNote(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, "html保存到笔记失败");
                    } else if (/pc_note\/search_notes/.test(n)) {
                        const e = yield this.searchNotes(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "搜索笔记失败");
                    } else if (/pc_note\/update_note/.test(n)) {
                        const e = yield this.updateNote(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "更新笔记失败");
                    } else if (/pc_note\/create_folder/.test(n)) {
                        const e = yield this.createFolder(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "创建文件夹失败");
                    } else if (/pc_note\/rename_folder/.test(n)) {
                        const e = yield this.renameFolder(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "重命名文件夹失败");
                    } else if (/pc_note\/move_folder/.test(n)) {
                        const e = yield this.moveFolder(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "移动文件夹失败");
                    } else if (/pc_note\/get_all_folders/.test(n)) {
                        const e = yield this.getAllFolders(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "获取文件夹列表失败");
                    } else if (/pc_note\/find_folder/.test(n)) {
                        const e = yield this.findFolder(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "查找文件夹失败");
                    } else if (/pc_note\/get_note_detail/.test(n)) {
                        const e = yield this.getNoteDetail(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "获取笔记详情失败");
                    } else if (/pc_note\/search_todos/.test(n)) {
                        const e = yield this.searchTodos(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "搜索待办失败");
                    } else if (/pc_note\/create_todo/.test(n)) {
                        const e = yield this.createTodo(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "创建待办失败");
                    } else if (/pc_note\/update_todo/.test(n)) {
                        const e = yield this.updateTodo(r);
                        (null == e ? void 0 : e.success) ? this.endOk(t, e) : this.endError(t, (null == e ? void 0 : e.error) || "更新待办失败");
                    } else this.endHttpError(t, "not found");
                }));
            });
        }
        getIsThirdPartyRequest(e) {
            const t = (e || "").split("?")[0] || "";
            return /^\/third-party\/(notes|folders|version|cli)(\/|$)/.test(t);
        }
        forwardThirdPartyRequest(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = (e.method || "GET").toUpperCase(), i = e.url || "", o = i.split("?")[0] || "", a = new URLSearchParams(i.split("?")[1] || ""), s = "POST" === n || "PUT" === n;
                let c = "";
                s && e.on("data", e => {
                    c += null == e ? void 0 : e.toString();
                });
                const u = () => r.__awaiter(this, void 0, void 0, function*() {
                    var e;
                    let r = {};
                    if (s && c) try {
                        r = JSON.parse(c);
                    } catch (e) {
                        return void this.endDocError(t, 400, "VALIDATION_ERROR", "Invalid JSON body");
                    }
                    try {
                        const e = yield this.routeThirdParty(n, o, a, r);
                        if (!e) return void this.endDocError(t, 404, "NOT_FOUND", `Unknown endpoint: ${n} ${o}`);
                        this.endDocSuccess(t, e.data, e.meta);
                    } catch (n) {
                        n instanceof l ? this.endDocError(t, n.status, n.code, n.message) : (null === (e = global.__log) || void 0 === e || e.info("[NoteClawService] third-party error: " + ((null == n ? void 0 : n.message) || n)), 
                        this.endDocError(t, 500, "INTERNAL_ERROR", (null == n ? void 0 : n.message) || "Internal error"));
                    }
                });
                s ? e.on("end", u) : u();
            });
        }
        routeThirdParty(e, t, n, i) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("GET" === e && /^\/third-party\/cli\/version\/?$/.test(t)) return this.tpCliVersion();
                if ("GET" === e && /^\/third-party\/version\/?$/.test(t)) return this.tpVersion();
                if ("GET" === e && /^\/third-party\/notes\/search\/?$/.test(t)) return this.tpSearchNotes(n);
                if ("GET" === e && /^\/third-party\/notes\/?$/.test(t)) return this.tpListNotes(n);
                if ("POST" === e && /^\/third-party\/notes\/?$/.test(t)) return this.tpCreateNote(i);
                const r = t.match(/^\/third-party\/notes\/([^/]+)\/?$/);
                if (r) {
                    const t = decodeURIComponent(r[1]);
                    if ("GET" === e) return this.tpGetNote(t);
                    if ("PUT" === e) return this.tpUpdateNote(t, i);
                }
                const o = t.match(/^\/third-party\/folders\/([^/]+)\/notes\/?$/);
                if ("GET" === e && o) return this.tpFolderNotes(decodeURIComponent(o[1]), n);
                if ("GET" === e && /^\/third-party\/folders\/?$/.test(t)) return this.tpListFolders(n);
                if ("POST" === e && /^\/third-party\/folders\/?$/.test(t)) return this.tpCreateFolder(i);
                const a = t.match(/^\/third-party\/folders\/([^/]+)\/?$/);
                if (a) {
                    const t = decodeURIComponent(a[1]);
                    if ("GET" === e) return this.tpGetFolder(t);
                    if ("PUT" === e) return this.tpUpdateFolder(t, i);
                }
                return null;
            });
        }
        tpVersion() {
            return {
                data: {
                    appVersion: o.app.getVersion(),
                    apiVersion: "v1"
                }
            };
        }
        tpCliVersion() {
            const e = this.getSkillDir(), t = s.default.join(e, "SKILL.md");
            return {
                data: {
                    skill_version: this.skillVersion(t),
                    skill_path: e,
                    upgrade_prompt: `Please check and upgrade the Skill:\n\n1. First check whether the current Skill has an update:\n\n\`\`\`bash\nnotes cli:check\n\`\`\`\n\n2. If an update is available, the new Skill directory is located at:\n\n\`\`\`txt\n${e}\n\`\`\`\n\n3. Copy the whole Skill directory (SKILL.md and the CLI scripts) to the skill directory you are using, overwriting the old version.\n\n4. Run \`notes cli:check\` again to confirm it is up to date.\n\nAfter the upgrade, if the Agent has already loaded the old Skill, restart the Agent session.`
                }
            };
        }
        skillVersion(e) {
            var t;
            try {
                if (!a.default.existsSync(e)) return "unknown";
                const t = a.default.readFileSync(e, "utf-8").match(/^version:\s*["']?([\w.\-]+)["']?/m);
                return t ? t[1] : "unknown";
            } catch (e) {
                return null === (t = global.__log) || void 0 === t || t.info("[NoteClawService] read skill version error: " + e), 
                "unknown";
            }
        }
        getSkillDir() {
            return "darwin" === process.platform ? s.default.resolve(o.app.getAppPath(), "../skills/office-suite-notes") : s.default.resolve(o.app.getAppPath(), "../../skills/office-suite-notes");
        }
        tpListNotes(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.get("folder") || "", n = this.clampInt(e.get("limit"), 20, 1, 100), r = Math.max(1, this.clampInt(e.get("page"), 1, 1, Number.MAX_SAFE_INTEGER)), i = {
                    pageSize: 1e5
                };
                t && (i.notebookGuid = t);
                const o = this.ipcData(yield this.searchNotes(i)), a = this.normalizeNotesResult(o).filter(e => 0 !== e.deleted), s = a.length, l = (r - 1) * n;
                return {
                    data: a.slice(l, l + n).map(e => this.mapNoteBrief(e)),
                    meta: {
                        total: s,
                        page: r,
                        page_size: n
                    }
                };
            });
        }
        tpGetNote(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = this.ipcData(yield this.getNoteDetail({
                    noteGuid: e
                }));
                if (!t || !t.guid) throw new l(404, "NOTE_NOT_FOUND", `Note with id '${e}' does not exist`);
                return {
                    data: this.mapNoteDetail(t)
                };
            });
        }
        tpCreateNote(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = null == e ? void 0 : e.title;
                if (!t || !String(t).trim()) throw new l(400, "VALIDATION_ERROR", "title is required");
                const n = (null == e ? void 0 : e.content) || "", r = null == e ? void 0 : e.folder, i = {
                    title: String(t),
                    html: n
                };
                r && "default" !== r && (i.notebookGuid = r);
                const o = this.ipcData(yield this.saveHtmlToNote(i)), a = null == o ? void 0 : o.noteGuid;
                if (!a) throw new l(500, "INTERNAL_ERROR", "Failed to create note");
                const s = this.ipcData(yield this.getNoteDetail({
                    noteGuid: a
                }));
                return {
                    data: this.mapNoteDetail(s || {
                        guid: a,
                        title: t,
                        content: n,
                        noteBookGuid: r
                    })
                };
            });
        }
        tpUpdateNote(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = this.ipcData(yield this.getNoteDetail({
                    noteGuid: e
                }));
                if (!n || !n.guid) throw new l(404, "NOTE_NOT_FOUND", `Note with id '${e}' does not exist`);
                const r = {
                    noteGuid: e
                };
                void 0 !== (null == t ? void 0 : t.title) && null !== (null == t ? void 0 : t.title) && "" !== String(t.title) && (r.title = String(t.title)), 
                void 0 !== (null == t ? void 0 : t.content) && null !== (null == t ? void 0 : t.content) && "" !== String(t.content) && (r.appendHtml = String(t.content)), 
                void 0 !== (null == t ? void 0 : t.folder) && null !== (null == t ? void 0 : t.folder) && "" !== String(t.folder) && (r.noteBookGuid = String(t.folder)), 
                (r.appendHtml || r.noteBookGuid || r.title) && this.ipcData(yield this.updateNote(r));
                const i = this.ipcData(yield this.getNoteDetail({
                    noteGuid: e
                }));
                return {
                    data: this.mapNoteDetail(i || n)
                };
            });
        }
        tpSearchNotes(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.get("query") || "";
                if (!t.trim()) throw new l(400, "VALIDATION_ERROR", "query is required");
                const n = this.clampInt(e.get("limit"), 10, 1, 100), r = e.get("folder") || "", i = {
                    keyword: t,
                    pageSize: 1e5
                };
                r && (i.notebookGuid = r);
                const o = this.ipcData(yield this.searchNotes(i)), a = this.normalizeNotesResult(o).filter(e => 0 !== e.deleted), s = t.toLowerCase(), c = e => {
                    const t = (e.title || "").toLowerCase();
                    return t.startsWith(s) ? 0 : t.includes(s) ? 1 : 2;
                };
                a.sort((e, t) => {
                    const n = c(e), r = c(t);
                    return n !== r ? n - r : Number(t.updateTime || 0) - Number(e.updateTime || 0);
                });
                return {
                    data: a.slice(0, n).map(e => {
                        var n, r, i;
                        return Object.assign(Object.assign({}, this.mapNoteBrief(e)), {
                            snippet: this.makeSnippet(null !== (i = null !== (r = null !== (n = e.content) && void 0 !== n ? n : e.html) && void 0 !== r ? r : e.summary) && void 0 !== i ? i : "", t)
                        });
                    }),
                    meta: {
                        total: a.length,
                        page: 1,
                        page_size: n,
                        query: t
                    }
                };
            });
        }
        tpListFolders(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = this.ipcData(yield this.getAllFolders()), n = Array.isArray(t) ? t : [];
                let r = n;
                if (e.has("parent")) {
                    const t = e.get("parent");
                    if ("null" === t || "" === t || null === t) r = n.filter(e => null === this.normalizeParent(e.parentGuid)); else {
                        if (!n.some(e => e.guid === t)) throw new l(404, "FOLDER_NOT_FOUND", `Folder with id '${t}' does not exist`);
                        r = n.filter(e => e.parentGuid === t);
                    }
                }
                return {
                    data: r.map(e => this.mapFolder(e))
                };
            });
        }
        tpGetFolder(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = this.ipcData(yield this.getAllFolders()), n = (Array.isArray(t) ? t : []).find(t => t.guid === e);
                if (!n) throw new l(404, "FOLDER_NOT_FOUND", `Folder with id '${e}' does not exist`);
                return {
                    data: this.mapFolder(n)
                };
            });
        }
        tpCreateFolder(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = null == e ? void 0 : e.name;
                if (!t || !String(t).trim()) throw new l(400, "VALIDATION_ERROR", "name is required");
                const n = null == e ? void 0 : e.parent_id, r = {
                    name: String(t)
                };
                n && (r.parentGuid = String(n));
                return {
                    data: {
                        id: this.ipcData(yield this.createFolder(r), 400, "VALIDATION_ERROR").folderGuid,
                        name: String(t),
                        parent_id: n ? String(n) : null,
                        note_count: 0
                    }
                };
            });
        }
        tpUpdateFolder(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = void 0 !== (null == t ? void 0 : t.name), r = void 0 !== (null == t ? void 0 : t.parent_id);
                if (!n && !r) throw new l(400, "VALIDATION_ERROR", "At least one field (name or parent_id) is required");
                if (n && (!t.name || !String(t.name).trim())) throw new l(400, "VALIDATION_ERROR", "name cannot be empty");
                const i = this.ipcData(yield this.getAllFolders());
                if (!(Array.isArray(i) ? i : []).some(t => t.guid === e)) throw new l(404, "FOLDER_NOT_FOUND", `Folder with id '${e}' does not exist`);
                n && this.ipcData(yield this.renameFolder({
                    folderGuid: e,
                    name: String(t.name)
                }), 400, "VALIDATION_ERROR"), r && this.ipcData(yield this.moveFolder({
                    folderGuid: e,
                    targetParentGuid: t.parent_id ? String(t.parent_id) : "-1"
                }), 400, "VALIDATION_ERROR");
                const o = this.ipcData(yield this.getAllFolders()), a = (Array.isArray(o) ? o : []).find(t => t.guid === e);
                if (!a) throw new l(404, "FOLDER_NOT_FOUND", `Folder with id '${e}' does not exist`);
                return {
                    data: this.mapFolder(a)
                };
            });
        }
        tpFolderNotes(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = this.ipcData(yield this.getAllFolders());
                if (!(Array.isArray(n) ? n : []).some(t => t.guid === e)) throw new l(404, "FOLDER_NOT_FOUND", `Folder with id '${e}' does not exist`);
                const r = this.clampInt(t.get("limit"), 20, 1, 100), i = Math.max(1, this.clampInt(t.get("page"), 1, 1, Number.MAX_SAFE_INTEGER)), o = this.ipcData(yield this.searchNotes({
                    notebookGuid: e,
                    pageSize: 1e5
                })), a = this.normalizeNotesResult(o).filter(e => 0 !== e.deleted), s = a.length, c = (i - 1) * r;
                return {
                    data: a.slice(c, c + r).map(e => this.mapNoteBrief(e)),
                    meta: {
                        total: s,
                        page: i,
                        page_size: r
                    }
                };
            });
        }
        ipcData(e, t = 500, n = "INTERNAL_ERROR") {
            if (e instanceof Error) throw new l(t, n, e.message);
            if (e && e.success) return e.data;
            throw new l(t, n, (null == e ? void 0 : e.error) || "operation failed");
        }
        normalizeNotesResult(e) {
            return Array.isArray(e) ? e : e && Array.isArray(e.notes) ? e.notes : [];
        }
        clampInt(e, t, n, r) {
            const i = parseInt(e, 10);
            return isNaN(i) ? t : Math.min(r, Math.max(n, i));
        }
        toIso(e) {
            const t = Number(e);
            if (!t) return "";
            const n = new Date(t), r = e => String(e).padStart(2, "0");
            return `${n.getFullYear()}-${r(n.getMonth() + 1)}-${r(n.getDate())}T${r(n.getHours())}:${r(n.getMinutes())}:${r(n.getSeconds())}`;
        }
        makeSnippet(e, t) {
            if (!e) return "";
            const n = String(e).replace(/<[^>]+>/g, ""), r = t ? n.toLowerCase().indexOf(t.toLowerCase()) : -1;
            if (r < 0) return n.slice(0, 60);
            const i = Math.max(0, r - 30), o = Math.min(n.length, r + t.length + 30);
            return (i > 0 ? "..." : "") + n.slice(i, o) + (o < n.length ? "..." : "");
        }
        normalizeParent(e) {
            return e && "-1" !== e ? e : null;
        }
        mapNoteBrief(e) {
            return {
                id: e.guid,
                title: e.title || "",
                folder: e.noteBookGuid || "",
                updated: this.toIso(e.updateTime)
            };
        }
        mapNoteDetail(e) {
            var t, n, r;
            return {
                id: e.guid,
                title: e.title || "",
                content: null !== (r = null !== (n = null !== (t = e.content) && void 0 !== t ? t : e.html) && void 0 !== n ? n : e.summary) && void 0 !== r ? r : "",
                folder: e.noteBookGuid || "",
                created: this.toIso(e.createTime),
                updated: this.toIso(e.updateTime)
            };
        }
        mapFolder(e) {
            return {
                id: e.guid,
                name: e.nameNew || e.name || "",
                parent_id: this.normalizeParent(e.parentGuid),
                note_count: Number(e.count || 0)
            };
        }
        endDocSuccess(e, t, n) {
            e.writeHead(200, {
                "Content-Type": "application/json"
            });
            const r = {
                status: "success",
                data: t
            };
            void 0 !== n && (r.meta = n), e.end(JSON.stringify(r));
        }
        endDocError(e, t, n, r) {
            e.writeHead(t, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                status: "error",
                error: {
                    code: n,
                    message: r
                }
            }));
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
    t.NoteClawService = u.getInstance();
}
