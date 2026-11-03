// analysis/pretty/main.js:17612; webpack module 115
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = r.__importDefault(n(1)), s = r.__importDefault(n(6)), l = r.__importDefault(n(1487)), c = r.__importDefault(n(76)), u = n(41), d = n(46), {app: h} = n(2), p = {
        openId: "",
        storageDir: "",
        configDir: "",
        albumSyncOn: 0,
        calendarSyncOn: 1,
        infoSyncOn: 1,
        noteSyncOn: 1,
        recordSyncOn: 1,
        notifyOn: 1,
        autoStartOn: 0,
        logOutMode: 0,
        updateOn: 1,
        noteSkipOn: 0,
        noteSortType: 0,
        noteIncomplete: 0,
        calendarWeekStartDate: 0,
        extData5: "12",
        timeZoneOn: 0,
        otherCalendar: 1,
        timeZoneType: "Asia/Shanghai",
        daySchedule: 5
    };
    class f extends i.default {
        constructor(e) {
            super(e), this.LOG = new c.default([ u.LogModule.FRAMEWORK, this.constructor.name ]).getExpandLog();
        }
        static getInstance() {
            return this.instance || (this.instance = new f(o.CommonDataBase.DATA_BASE_NAME)), 
            this.instance;
        }
        setUserInfo(e) {
            const {nickName: t, smallAvatar: n, openId: i, token: a, phone: s, email: l, userId: c, regionCode: u, regionName: d} = e;
            this.getUserInfo({
                openId: e.openId
            }).then(e => r.__awaiter(this, void 0, void 0, function*() {
                e && e.openId ? this.update(o.CommonDataBase.USER_TABLE_NAME, {
                    nickName: t,
                    smallAvatar: n,
                    openId: i,
                    token: a,
                    phone: s,
                    email: l,
                    userId: c,
                    regionCode: u,
                    regionName: d
                }, "openId") : (yield this.initUserTable(), this.insert(o.CommonDataBase.USER_TABLE_NAME, {
                    nickName: t,
                    smallAvatar: n,
                    openId: i,
                    token: a,
                    phone: s,
                    email: l,
                    userId: c,
                    regionCode: u,
                    regionName: d
                }));
            })).catch(e => {
                this.LOG.error("setUserInfo:" + e);
            });
        }
        getUserInfo(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {openId: t} = e, n = {
                    openId: "",
                    nickName: "",
                    smallAvatar: "",
                    token: "",
                    phone: "",
                    email: "",
                    userId: "",
                    regionCode: "",
                    regionName: ""
                };
                try {
                    let e = yield this.get(l.default.getSelectUserSql(), t);
                    return console.log("--------用户信息查询结果:" + e), e || n;
                } catch (e) {
                    return this.LOG.error("getUserInfo:" + e), -1 !== ((null == e ? void 0 : e.toString()) || "").indexOf("SQLITE_ERROR: no such table: User") && (this.LOG.error("SQLITE_ERROR: no such table: User - createUserSql"), 
                    this.db.run(l.default.getCreateUserSql())), n;
                }
            });
        }
        getTableUser() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const e = {
                    openId: "",
                    nickName: "",
                    smallAvatar: "",
                    token: "",
                    phone: "",
                    email: "",
                    userId: "",
                    regionCode: "",
                    regionName: ""
                };
                try {
                    let t = yield this.all(l.default.getTableUserSql());
                    return console.log("-----getTableUser---用户信息查询结果:" + t), t || 0 !== t.length ? t[0] : e;
                } catch (t) {
                    return this.LOG.error("getUserInfo:" + t), -1 !== ((null == t ? void 0 : t.toString()) || "").indexOf("SQLITE_ERROR: no such table: User") && (this.LOG.error("SQLITE_ERROR: no such table: User - createUserSql"), 
                    this.db.run(l.default.getCreateUserSql())), e;
                }
            });
        }
        initUserTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.run(l.default.getClearUserSql(), {}), yield this.db.run(l.default.getCreateUserSql());
                } catch (e) {
                    this.LOG.error("initUserTable ERROR:" + e);
                }
            });
        }
        initAppConfig(e) {
            try {
                const t = a.default.join(h.getPath("appData"), `pcsuite${d.getPlatformSlash()}database`), n = a.default.join(h.getPath("appData"), `pcsuite${d.getPlatformSlash()}data`), r = Object.assign(Object.assign({}, p), {
                    storageDir: n,
                    configDir: t
                });
                return this.insert(o.CommonDataBase.CONFIG_TABLE_NAME, Object.assign(Object.assign({}, r), e));
            } catch (e) {
                throw this.LOG.error("initAppConfig ERROR:" + e), e;
            }
        }
        logOut(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {openId: t} = e;
                this.LOG.info("clear user:" + t), yield this.initUserTable();
            });
        }
        updateAppConfig(e) {
            console.log("updateAppConfig fn", Object.assign({}, e));
            const {noteWordTotalOn: t, noteEncryFolderOn: n, noteDefaulteFontSize: r, noteCliOn: i, extData4: a, noteSortTypeNew: s, recordSortType: l, todoSortType: c, docSortType: u} = e;
            try {
                if (a && "string" == typeof a) {
                    let t = d.deserializeJson(a);
                    t.noteEncryFolderOn = n, t.noteDefaulteFontSize = r, t.noteCliOn = i, t.noteSortTypeNew = s, 
                    t.recordSortType = l, t.todoSortType = c, t.docSortType = u, e.extData4 = JSON.stringify(t);
                }
                delete e.noteWordTotalOn, delete e.noteEncryFolderOn, delete e.noteDefaulteFontSize, 
                delete e.noteCliOn, delete e.docSortType, delete e.todoSortType, delete e.noteSortTypeNew, 
                delete e.recordSortType, console.log("updateAppConfig", Object.assign(Object.assign({}, e), {
                    extData3: t
                })), this.update(o.CommonDataBase.CONFIG_TABLE_NAME, Object.assign(Object.assign({}, e), {
                    extData3: t
                }), "openId");
            } catch (n) {
                this.update(o.CommonDataBase.CONFIG_TABLE_NAME, Object.assign(Object.assign({}, e), {
                    extData3: t
                }), "openId"), this.LOG.error("updateAppConfig catch:" + n);
            }
        }
        getAppConfig({openId: e}) {
            return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let n = yield this.get(l.default.getConfigSql(), e);
                    if (this.LOG.info("getAppConfig", n && JSON.stringify(n)), n) {
                        let {extData3: e, extData4: t} = n, r = !1, i = "16", o = !1, a = 1, l = 2, c = s.default.getItem("todoSortType") || ("undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? 2 : 5), u = 7;
                        if (t && "string" == typeof t) {
                            let e = JSON.parse(t);
                            r = (null == e ? void 0 : e.noteEncryFolderOn) || !1, i = (null == e ? void 0 : e.noteDefaulteFontSize) || "16", 
                            o = (null == e ? void 0 : e.noteCliOn) || !1, a = (null == e ? void 0 : e.noteSortTypeNew) || 1, 
                            l = (null == e ? void 0 : e.recordSortType) || 2, c = (null == e ? void 0 : e.todoSortType) || s.default.getItem("todoSortType") || ("undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? 2 : 5), 
                            u = (null == e ? void 0 : e.docSortType) || 7;
                        }
                        n = Object.assign(Object.assign({}, n), {
                            noteWordTotalOn: e || "1",
                            noteEncryFolderOn: r,
                            noteDefaulteFontSize: i,
                            noteCliOn: o,
                            noteSortTypeNew: a,
                            recordSortType: l,
                            todoSortType: c,
                            docSortType: u
                        });
                    }
                    t(n);
                } catch (e) {
                    throw this.LOG.error("getAppConfig catch:" + e), new Error(e);
                }
            }));
        }
        getHomeFunSort() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const e = yield s.default.getItem("userInfo"), t = (null == e ? void 0 : e.openId) || "v100000", n = yield this.getAppConfig({
                    openId: t
                });
                return null == n ? void 0 : n.moduleSort;
            });
        }
        saveHomeFunSort(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield s.default.getItem("userInfo");
                let n = {
                    openId: (null == t ? void 0 : t.openId) || "v100000",
                    ModuleSort: JSON.stringify(e.funSort)
                };
                return yield this.updateAppConfig(n);
            });
        }
        initAuthTokenTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.db.run(l.default.getCreateAuthTokenSql());
                } catch (e) {
                    this.LOG.error("initAuthTokenTable ERROR:" + e);
                }
            });
        }
        createAuthToken(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = (new Date).toISOString();
                return yield this.ensureAuthTokenTable(), this.insertWithResult(o.CommonDataBase.AUTH_TOKEN_TABLE_NAME, Object.assign(Object.assign({}, e), {
                    createdAt: t
                }));
            });
        }
        getAllValidAuthTokens() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.ensureAuthTokenTable();
                const e = (new Date).toISOString();
                return this.allWithParams(l.default.getSelectAllValidAuthTokensSql(), [ e ]);
            });
        }
        getAuthTokenByToken(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.ensureAuthTokenTable(), this.get(l.default.getSelectAuthTokenByTokenSql(), e);
            });
        }
        getAuthTokenById(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.ensureAuthTokenTable(), this.get(l.default.getSelectAuthTokenByIdSql(), e);
            });
        }
        deleteAuthToken(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.ensureAuthTokenTable(), this.run(l.default.getDeleteAuthTokenSql(), e);
            });
        }
        deleteAuthTokenByToken(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.ensureAuthTokenTable(), this.run(l.default.getDeleteAuthTokenByTokenSql(), e);
            });
        }
        getAllAuthTokens() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.ensureAuthTokenTable(), this.all(`select * from ${o.CommonDataBase.AUTH_TOKEN_TABLE_NAME} order by Id desc`);
            });
        }
        ensureAuthTokenTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.all("select count(*) from " + o.CommonDataBase.AUTH_TOKEN_TABLE_NAME);
                } catch (e) {
                    if (-1 === ((null == e ? void 0 : e.toString()) || "").indexOf("SQLITE_ERROR: no such table")) throw e;
                    yield this.db.run(l.default.getCreateAuthTokenSql());
                }
            });
        }
    }
    e.exports = f;
}
