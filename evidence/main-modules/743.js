// analysis/pretty/main.js:66864; webpack module 743
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BridgeErrorResponse = t.BridgeSuccessResponse = t.BridgeResponse = t.WSResponseError = t.WSResponseSuccess = t.RequestInfo = void 0;
    t.RequestInfo = class {
        constructor(e, t, n) {
            this.callback = t, this.requestId = e, this.requestData = n;
        }
    };
    t.WSResponseSuccess = class {
        constructor(e) {
            this.type = "success", this.response = e;
        }
        toJson() {
            return {
                type: this.type,
                data: this.response
            };
        }
    };
    t.WSResponseError = class {
        constructor(e, t) {
            this.type = "error", this.message = "", this.response = e, this.message = t;
        }
        toJson() {
            return {
                type: this.type,
                message: this.message,
                data: this.response
            };
        }
    };
    class r {
        constructor(e, t, n) {
            this.code = e, this.data = t, this.message = n;
        }
    }
    t.BridgeResponse = r;
    t.BridgeSuccessResponse = class extends r {
        constructor(e) {
            super(0, e, "success");
        }
    };
    t.BridgeErrorResponse = class extends r {
        constructor(e) {
            super(-1, {}, e);
        }
    };
}
