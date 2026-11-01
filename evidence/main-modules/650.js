// analysis/pretty/main.js:58631; webpack module 650
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = n(2), s = r.__importDefault(n(651)), l = r.__importDefault(n(8)), c = r.__importDefault(n(25)), u = n(56), d = n(10);
    var h;
    !function(e) {
        e.HOME_ROUTE = "/home", e.FILE_MANAGER = "/filemanager";
    }(h || (h = {}));
    let p = {
        text1: "",
        text2: "",
        text3: ""
    };
    class f {
        constructor() {
            this.configPath = "darwin" === l.default.platform() ? "/com.vivo.pcsuite.pcsuite-ex/Data" : "pcsuite/RightClickMenu", 
            this.configName = "config.xml", this._exePath = "", this._configFilePath = "", this._isInit = !1, 
            this._logFunction = null, this.initMacConfigFileCommands = [ "pluginkit -a  /Applications/pcsuite.app/Contents/Resources/PlugIns/pcsuite_ex.appex", "pluginkit -e use -i com.vivo.pcsuite.pcsuite-ex" ], 
            setTimeout(() => {
                this.getConfigPath();
            }, 1e3);
        }
        static getInstance() {
            return this.instance || (this.instance = new f), this.instance;
        }
        get logFun() {
            return this._logFunction ? this._logFunction : global.__log && "function" == typeof global.__log.info ? (this._logFunction = global.__log.info.bind(global.__log), 
            this._logFunction) : console.log;
        }
        get exePath() {
            return this._exePath ? this._exePath : this._exePath = a.app.getPath("exe");
        }
        get initData() {
            return {
                root: {
                    menu: [ {
                        $: {
                            text: p.text1,
                            name: "initmenu",
                            icon: this.iconPath
                        },
                        item: [ {
                            $: {
                                text: p.text2,
                                name: "default",
                                path: this.exePath,
                                arguments: "--target=" + h.HOME_ROUTE,
                                workpath: this.exePath
                            }
                        } ]
                    } ]
                }
            };
        }
        getConfigPath() {
            return r.__awaiter(this, void 0, void 0, function*() {
                this._exePath = a.app.getPath("exe");
                const e = o.default.join(o.default.dirname(a.app.getPath("exe")), "tjicon.png");
                if ("darwin" === l.default.platform()) {
                    try {
                        for (let e = 0; e < this.initMacConfigFileCommands.length; e++) {
                            const t = this.initMacConfigFileCommands[e];
                            yield this._execCommand(t);
                        }
                    } catch (e) {
                        this.logFun("[RightMenuManger.ts][getConfigPath](initMacConfigFileCommand) error: " + e);
                    }
                    const e = l.default.homedir(), t = o.default.join(e, "Library", "Containers");
                    this._configFilePath = o.default.join(t, this.configPath, this.configName), this.logFun(`[RightMenuManger.ts][getConfigPath] mac homeDir: ${e},  ${t}`);
                } else this._configFilePath = o.default.join(a.app.getPath("appData"), this.configPath, this.configName);
                this.logFun(`[RightMenuManger.ts][getConfigPath] filePath: ${this._configFilePath}, iconPath: ${e}`), 
                this.updateDevices = c.default.debounce(this.updateDevices.bind(this), 1500, {
                    leading: !0
                }), this.iconPath = e, i.default.existsSync(this._configFilePath) ? (this.logFun(`[RightMenuManger.ts][getConfigPath] File exists:${this._configFilePath} iconpath: ${e}`), 
                this.filePath = this._configFilePath) : this.logFun("[RightMenuManger.ts][getConfigPath] File not found"), 
                this._isInit = !0;
            });
        }
        _execCommand(e) {
            return new Promise((t, n) => {
                this.logFun(`[RightMenuManger.ts][execCommand](${e}) start`);
                let r = setTimeout(() => {
                    n(e + " timeout 5s");
                }, 5e3);
                d.exec(e, (i, o, a) => {
                    r && (clearTimeout(r), r = null), i ? (n(i), this.logFun(`[RightMenuManger.ts][execCommand](${e}) stderr: ${a}`)) : (this.logFun(`[RightMenuManger.ts][execCommand](${e}) execute succ`), 
                    t(!0));
                });
            });
        }
        initMenu() {
            return new Promise((e, t) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (this._isInit) this.logFun("[RightMenuManger.ts][initMenu]_isInit: " + this._isInit); else try {
                        yield this.getConfigPath();
                    } catch (e) {
                        this.logFun("[RightMenuManger.ts][initMenu][getConfigPath] error: " + e);
                    }
                    const t = this.initData;
                    yield this.writeData(t), e("init menu succ");
                } catch (e) {
                    t("init menu err" + e);
                }
            }));
        }
        readData() {
            this.initData;
            return new Promise((e, t) => {
                if (!this.filePath) {
                    if (!i.default.existsSync(this._configFilePath)) return t("[RightMenuManger.ts][readData] FilePath not found");
                    this.logFun("[RightMenuManger.ts][readData] File exists:" + this._configFilePath), 
                    this.filePath = this._configFilePath;
                }
                i.default.readFile(this.filePath, function(n, r) {
                    n && t(n), (new s.default.Parser).parseString(r, function(n, r) {
                        n && t(n), e(r);
                    });
                });
            });
        }
        writeData(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (!this.filePath) {
                        if (!i.default.existsSync(this._configFilePath)) return n("[RightMenuManger.ts][writeData] FilePath not found");
                        this.logFun("[RightMenuManger.ts][writeData] File exists:" + this._configFilePath), 
                        this.filePath = this._configFilePath;
                    }
                    var r = (new s.default.Builder).buildObject(e);
                    this.logFun("[RightMenuManger.ts][writeData] FilePath read " + JSON.stringify(r)), 
                    i.default.writeFileSync(this.filePath, r), this.logFun("[RightMenuManger.ts][writeData] FilePath write succ"), 
                    t(!0);
                } catch (e) {
                    this.logFun("[RightMenuManger.ts] writeData err : " + e), n(!1);
                }
            }));
        }
        addDevice(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let n = yield this.readData();
                    this.logFun("[RightMenuManger.ts][addDevice] result.root.menu[0]: " + JSON.stringify(n.root.menu[0])), 
                    n.root.menu[0].item = [];
                    let r = a.app.getPath("exe"), i = {
                        $: {
                            text: p.text3,
                            name: "default",
                            path: r,
                            arguments: "--target=" + h.HOME_ROUTE,
                            workpath: r
                        }
                    };
                    e.forEach(e => {
                        n.root.menu[0].item.push({
                            $: {
                                text: e.deviceName,
                                name: e.deviceId,
                                path: r,
                                arguments: `--target=${h.FILE_MANAGER} --deviceid=${e.deviceId} --filepath=\${selection}`,
                                workpath: r
                            }
                        });
                    }), n.root.menu[0].item.push(i), yield this.writeData(n), t(!0);
                } catch (e) {
                    this.logFun("[RightMenuManger.ts][addDevice] err : " + e), n(!1);
                }
            }));
        }
        removeDevice(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let r = yield this.readData();
                    if (this.logFun("[RightMenuManger.ts][removeDevice] result['root']['menu'][0]: " + JSON.stringify(r.root.menu[0])), 
                    r.root.menu[0].item) if (r.root.menu[0].item.length > 0) {
                        let t = r.root.menu[0].item.filter(t => (this.logFun(`[RightMenuManger.ts][removeDevice] result['root']['menu'][0]: ${t.$.name}-- ${e}`), 
                        t.$.name !== e));
                        1 == t.length && "default" == t[0].$.name && (t[0].$.text = p.text2), r.root.menu[0].item = t, 
                        this.logFun("[RightMenuManger.ts][removeDevice] result['root']['menu'][0]: " + JSON.stringify(r.root.menu[0]));
                    } else this.logFun("[RightMenuManger.ts][removeDevice] items.length : " + JSON.stringify(r.root.menu[0].item.length)), 
                    n(); else n("配置文件中没有item子项");
                    yield this.writeData(r), t(!0);
                } catch (e) {
                    this.logFun("[RightMenuManger.ts][removeDevice] err : " + e), n(!1);
                }
            }));
        }
        updateDevices(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                var r;
                try {
                    const n = this.initData;
                    this.logFun("[RightMenuManger.ts][updateDevices] result.root.menu[0].item: " + (null === (r = n.root.menu[0].item) || void 0 === r ? void 0 : r.length)), 
                    n.root.menu[0].item = [];
                    const i = {
                        $: {
                            text: p.text3,
                            name: "default",
                            path: this.exePath,
                            arguments: "--target=" + h.HOME_ROUTE,
                            workpath: this.exePath
                        }
                    };
                    e.forEach(e => {
                        n.root.menu[0].item.push({
                            $: {
                                text: e.deviceName,
                                name: e.deviceId,
                                path: this.exePath,
                                arguments: `--target=${e.isConnected ? h.FILE_MANAGER : h.HOME_ROUTE} --deviceid=${e.deviceId} --filepath=\${selection}`,
                                workpath: this.exePath
                            }
                        });
                    }), n.root.menu[0].item.push(i), yield this.writeData(n), t(!0);
                } catch (e) {
                    this.logFun("[RightMenuManger.ts][addDevice] err : " + e), n(!1);
                }
            }));
        }
        clearDevice() {
            return new Promise((e, t) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let t = a.app.getPath("exe"), n = {
                        root: {
                            menu: [ {
                                $: {
                                    text: p.text1,
                                    name: "initmenu",
                                    icon: this.iconPath
                                },
                                item: [ {
                                    $: {
                                        text: p.text2,
                                        name: "default",
                                        path: t,
                                        arguments: "--target=" + h.HOME_ROUTE,
                                        workpath: t
                                    }
                                } ]
                            } ]
                        }
                    };
                    yield this.writeData(n), e();
                } catch (e) {
                    t(e);
                }
            }));
        }
    }
    a.ipcMain.on("WINDOW_RIGHT_MENU", (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
        var e;
        f.getInstance().logFun("[RightMenuManger.ts] ConnectionMainEvent.WINDOW_RIGHT_MENU : " + JSON.stringify(t));
        const {event: n, data: r} = t;
        if ("init" === n) {
            p = Object.assign(Object.assign({}, p), null == r ? void 0 : r.initData);
            try {
                const e = yield f.getInstance().initMenu();
                f.getInstance().logFun("[RightMenuManger.ts] [initMenu] msg : " + e);
            } catch (e) {
                f.getInstance().logFun("[RightMenuManger.ts] [initMenu]  err : " + e);
            }
            (null === (e = null == r ? void 0 : r.deviceList) || void 0 === e ? void 0 : e.length) && f.getInstance().addDevice(r.deviceList);
        } else "addDevice" === n ? f.getInstance().addDevice(r.deviceList) : "removeDevice" === n ? f.getInstance().removeDevice(r.deviceId) : f.getInstance().logFun("[RightMenuManger.ts] ipcMain WINDOW_RIGHT_MENU event nor found");
    })), a.ipcMain.on(u.ConnectionRendererEvent.UPDATE_RIGHT_MENU_DEVICES, (e, t) => {
        f.getInstance().logFun(`[RightMenuManger.ts] ${u.ConnectionRendererEvent.UPDATE_RIGHT_MENU_DEVICES}: ${JSON.stringify(t)}`), 
        Array.isArray(null == t ? void 0 : t.devices) ? f.getInstance().updateDevices(t.devices) : f.getInstance().logFun(`[RightMenuManger.ts] ${u.ConnectionRendererEvent.UPDATE_RIGHT_MENU_DEVICES} devices is empty`);
    }), t.default = f.getInstance();
}
