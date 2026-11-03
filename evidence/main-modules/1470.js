// analysis/pretty/main.js:108958; webpack module 1470
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = r.__importDefault(n(52));
    class c extends l.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
        get executePath() {
            return "darwin" === o.platform() ? a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/vivoScreen/vScreenCapture.app/Contents/MacOS/vScreenCapture") : a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./vivoScreen/vScreenCapture.exe");
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[VivoScreenCaptureProcessMain] (hashId=${e}) executePath:${this.executePath}, params: ${JSON.stringify(t)}`);
                return i.spawn(this.executePath, [ e ], {
                    stdio: "ignore"
                });
            });
        }
    }
    t.default = c;
}
