// analysis/pretty/main.js:98781; webpack module 1287
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(2), o = n(1288), a = n(1289);
    function s(e, t) {
        var n = "[window-position-debug][" + e + "] " + JSON.stringify(t);
        try {
            if (global && global.__log && "function" == typeof global.__log.info) return void global.__log.info(n);
        } catch (e) {}
        console.log(n);
    }
    e.exports = function(e) {
        const t = i.app || i.remote.app, n = i.screen || i.remote.screen;
        let l, c, u;
        const d = Object.assign({
            file: "window-state.json",
            path: t.getPath("userData"),
            maximize: !0,
            fullScreen: !0
        }, e), h = r.join(d.path, d.file);
        function p() {
            return l && Number.isInteger(l.x) && Number.isInteger(l.y) && Number.isInteger(l.width) && l.width > 0 && Number.isInteger(l.height) && l.height > 0;
        }
        function f() {
            const e = n.getPrimaryDisplay().bounds;
            l = {
                width: d.defaultWidth || 800,
                height: d.defaultHeight || 600,
                x: 0,
                y: 0,
                displayBounds: e
            }, s("resetStateToDefault", {
                newState: l,
                allDisplays: n.getAllDisplays().map(function(e) {
                    return {
                        id: e.id,
                        bounds: e.bounds,
                        workArea: e.workArea
                    };
                })
            });
        }
        function _(e) {
            return l.x >= e.x && l.y >= e.y && l.x + l.width <= e.x + e.width && l.y + l.height <= e.y + e.height;
        }
        function m(e) {
            if (e = e || c) try {
                const c = e.getBounds();
                var t = function(e) {
                    return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen();
                }(e), r = e.isMinimized(), i = e.isMaximized(), o = e.isFullScreen(), a = n.getAllDisplays(), u = n.getDisplayMatching(c);
                t && (l.x = c.x, l.y = c.y, l.width = c.width, l.height = c.height), l.isMaximized = i, 
                l.isFullScreen = o, l.displayBounds = u.bounds;
                var d = a.some(function(e) {
                    return c.x < e.bounds.x + e.bounds.width && c.x + c.width > e.bounds.x && c.y < e.bounds.y + e.bounds.height && c.y + c.height > e.bounds.y;
                });
                s("updateState", {
                    winBounds: c,
                    isNormal: t,
                    isMinimized: r,
                    isMaximized: i,
                    isFullScreen: o,
                    nearestDisplayId: u.id,
                    nearestDisplayBounds: u.bounds,
                    allDisplaysCount: a.length,
                    allDisplays: a.map(function(e) {
                        return {
                            id: e.id,
                            bounds: e.bounds,
                            workArea: e.workArea
                        };
                    }),
                    isWindowVisibleOnAnyDisplay: d,
                    savedState: {
                        x: l.x,
                        y: l.y,
                        width: l.width,
                        height: l.height,
                        displayBounds: l.displayBounds
                    }
                }), d || r || s("updateState-CRITICAL-OFFSCREEN", {
                    alert: "窗口不在任何显示器可见区域内且非最小化状态！",
                    winBounds: c,
                    allDisplays: a.map(function(e) {
                        return {
                            id: e.id,
                            bounds: e.bounds
                        };
                    })
                }), (c.x <= -32e3 || c.y <= -32e3) && s("updateState-CRITICAL-MINIMIZE_COORDS", {
                    alert: "捕获到Windows最小化坐标！可能被保存到window-state.json",
                    winBounds: c,
                    isMinimized: r,
                    isNormal: t
                });
            } catch (e) {
                s("updateState-ERROR", {
                    error: e.message
                });
            }
        }
        function g(e) {
            e && m(e), s("saveState", {
                filePath: h,
                state: l
            });
            try {
                a.sync(r.dirname(h)), o.writeFileSync(h, l);
            } catch (e) {
                s("saveState-ERROR", {
                    error: e.message
                });
            }
        }
        function v() {
            clearTimeout(u), u = setTimeout(m, 100);
        }
        function y() {
            m();
        }
        function E() {
            b(), g();
        }
        function b() {
            c && (c.removeListener("resize", v), c.removeListener("move", v), clearTimeout(u), 
            c.removeListener("close", y), c.removeListener("closed", E), c = null);
        }
        try {
            l = o.readFileSync(h), s("loadState", {
                filePath: h,
                loadedState: l
            });
        } catch (e) {
            s("loadState-NONE", {
                info: "无已有window-state.json文件"
            });
        }
        return function() {
            if (!(l && (p() || l.isMaximized || l.isFullScreen))) return l = null, void s("validateState-INVALID", {
                reason: "state无效，置为null"
            });
            p() && l.displayBounds && (s("validateState", {
                state: {
                    x: l.x,
                    y: l.y,
                    width: l.width,
                    height: l.height
                },
                displayBounds: l.displayBounds,
                willCheckVisibility: !0
            }), function() {
                var e = n.getAllDisplays(), t = e.map(function(e) {
                    return {
                        id: e.id,
                        bounds: e.bounds,
                        withinBounds: _(e.bounds)
                    };
                });
                const r = e.some(e => _(e.bounds));
                if (s("ensureWindowVisibleOnSomeDisplay", {
                    currentState: {
                        x: l.x,
                        y: l.y,
                        width: l.width,
                        height: l.height
                    },
                    visible: r,
                    checkResults: t,
                    allDisplaysCount: e.length
                }), !r) s("ensureWindowVisibleOnSomeDisplay-RESET", {
                    reason: "窗口不在任何显示器可见区域内，重置到默认位置",
                    oldState: {
                        x: l.x,
                        y: l.y,
                        width: l.width,
                        height: l.height
                    }
                }), f();
            }());
        }(), l = Object.assign({
            width: d.defaultWidth || 800,
            height: d.defaultHeight || 600
        }, l), s("init", {
            finalState: {
                x: l.x,
                y: l.y,
                width: l.width,
                height: l.height,
                displayBounds: l.displayBounds
            },
            isMaximized: l.isMaximized,
            isFullScreen: l.isFullScreen,
            allDisplays: n.getAllDisplays().map(function(e) {
                return {
                    id: e.id,
                    bounds: e.bounds,
                    workArea: e.workArea
                };
            })
        }), {
            get x() {
                return l.x;
            },
            get y() {
                return l.y;
            },
            get width() {
                return l.width;
            },
            get height() {
                return l.height;
            },
            get displayBounds() {
                return l.displayBounds;
            },
            get isMaximized() {
                return l.isMaximized;
            },
            get isFullScreen() {
                return l.isFullScreen;
            },
            saveState: g,
            unmanage: b,
            manage: function(e) {
                d.maximize && l.isMaximized && e.maximize(), d.fullScreen && l.isFullScreen && e.setFullScreen(!0), 
                e.on("resize", v), e.on("move", v), e.on("close", y), e.on("closed", E), c = e;
                try {
                    s("manage", {
                        winBounds: e.getBounds(),
                        savedState: {
                            x: l.x,
                            y: l.y,
                            width: l.width,
                            height: l.height,
                            displayBounds: l.displayBounds
                        },
                        isMaximized: l.isMaximized,
                        isFullScreen: l.isFullScreen,
                        allDisplays: n.getAllDisplays().map(function(e) {
                            return {
                                id: e.id,
                                bounds: e.bounds,
                                workArea: e.workArea
                            };
                        })
                    });
                } catch (e) {}
            },
            resetStateToDefault: f
        };
    };
}
