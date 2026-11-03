// analysis/pretty/main.js:22967; webpack module 160
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.WinAnimation = t.easeInOut = t.easeOut = t.easeIn = t.ease = t.cubicBezier = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(12));
    function a(e, t, n, r) {
        const i = 3 * e - 3 * n + 1, o = 3 * n - 6 * e, a = 3 * e, s = 3 * t - 3 * r + 1, l = 3 * r - 6 * t, c = 3 * t;
        function u(e) {
            return ((i * e + o) * e + a) * e;
        }
        return function(e) {
            return function(e) {
                return ((s * e + l) * e + c) * e;
            }(function(e) {
                let t, n, r = e;
                for (let l = 0; l < 8; l++) {
                    if (n = u(r) - e, Math.abs(n) < 1e-6) return r;
                    if (t = (3 * i * (s = r) + 2 * o) * s + a, Math.abs(t) < 1e-6) break;
                    r -= n / t;
                }
                var s;
                let l = 1, c = 0;
                for (r = e; l > c; ) {
                    if (n = u(r) - e, Math.abs(n) < 1e-6) return r;
                    n > 0 ? l = r : c = r, r = (l + c) / 2;
                }
                return r;
            }(e));
        };
    }
    t.cubicBezier = a, t.ease = a(.25, .1, .25, 1), t.easeIn = a(.42, 0, 1, 1), t.easeOut = a(0, 0, .58, 1), 
    t.easeInOut = a(.42, 0, .58, 1);
    class s extends o.default {
        constructor(e, n, r, i, o, s = 0, l = "ease-in") {
            switch (super(), this.delay = 0, this.cubicBezierParam = "ease", this.easeFunc = e => e, 
            this._aniState = "READY", this.win = e, this.winSize = n, this.startBounds = r, 
            this.endBounds = i, this.duration = o, this.cubicBezierParam = l, this.delay = s, 
            this.cubicBezierParam) {
              case "liner":
                break;

              case "ease":
                this.easeFunc = t.ease;
                break;

              case "ease-in":
                this.easeFunc = t.easeIn;
                break;

              case "ease-out":
                this.easeFunc = t.easeOut;
                break;

              case "ease-in-out":
                this.easeFunc = t.easeInOut;
                break;

              default:
                this.cubicBezierParam instanceof Array && 4 == this.cubicBezierParam.length && (this.easeFunc = a.apply(null, this.cubicBezierParam));
            }
        }
        step(e) {
            try {
                const t = Object.assign({}, this.winSize);
                this.win && !this.win.isDestroyed() && (null != this.startBounds.x && null != this.endBounds.x && (t.x = Math.ceil(this.startBounds.x + this.easeFunc(e / this.duration) * (this.endBounds.x - this.startBounds.x))), 
                null != this.startBounds.y && null != this.endBounds.y && (t.y = Math.ceil(this.startBounds.y + this.easeFunc(e / this.duration) * (this.endBounds.y - this.startBounds.y))), 
                this.win.setBounds(t));
            } catch (e) {
                global.__log.info("win-animation error: " + (e.meesage || e));
            }
        }
        tick() {
            try {
                this._tickTimer = setTimeout(() => {
                    clearTimeout(this._tickTimer);
                    let e = Date.now();
                    if (e > this._startTime) {
                        let t = e - this._startTime;
                        if (t > this.duration && (t = this.duration), this.step(t), t < this.duration) return void this.tick();
                        this._aniState = "END", global.__log.info("win-animation tick end " + JSON.stringify(this.win.getBounds())), 
                        this.emit("end");
                    }
                }, 10);
            } catch (e) {
                global.__log.info("win-animation tick error: " + (e.meesage || e));
            }
        }
        start() {
            global.__log.info(`win-animation start, delay : ${this.delay}  ${JSON.stringify(this.win.getBounds())}`), 
            this._aniState = "ING";
            const e = setTimeout(() => {
                clearTimeout(e), this._startTime = Date.now(), global.__log.info("win-animation start, time :" + this._startTime), 
                this.tick();
            }, this.delay || 0);
        }
        stop() {
            clearTimeout(this._tickTimer);
        }
        getAniState() {
            return this._aniState;
        }
        static mainWindowHasRightDisplay(e) {
            let t = i.screen.getAllDisplays();
            if (t.length <= 1 || !global.__mainWindow) return !1;
            const n = global.__mainWindow.getBounds(), r = i.screen.getDisplayMatching(n), {y: o, height: a} = r.workArea;
            if (t = t.filter(e => e.id == r.id || e.workArea.y + e.workArea.height >= o && e.workArea.y < o + a), 
            t.length <= 1) return !1;
            t = t.sort((e, t) => e.workArea.x - t.workArea.x);
            const s = t.findIndex(e => e.id == r.id), l = t[s + 1];
            return null != l && (!e || l.workArea.y + l.workArea.height >= e);
        }
        on(e, t) {
            return super.on(e, t);
        }
        emit(e, ...t) {
            return super.emit.apply(this, [ e, ...t ]);
        }
    }
    t.WinAnimation = s;
}
