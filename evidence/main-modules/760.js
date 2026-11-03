// analysis/pretty/main.js:69746; webpack module 760
function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        });
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    }), i = this && this.__exportStar || function(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasChildren = t.isDocument = t.isComment = t.isText = t.isCDATA = t.isTag = void 0, 
    i(n(761), t), i(n(1611), t), i(n(1612), t), i(n(765), t), i(n(766), t), i(n(1613), t), 
    i(n(1614), t);
    var o = n(142);
    Object.defineProperty(t, "isTag", {
        enumerable: !0,
        get: function() {
            return o.isTag;
        }
    }), Object.defineProperty(t, "isCDATA", {
        enumerable: !0,
        get: function() {
            return o.isCDATA;
        }
    }), Object.defineProperty(t, "isText", {
        enumerable: !0,
        get: function() {
            return o.isText;
        }
    }), Object.defineProperty(t, "isComment", {
        enumerable: !0,
        get: function() {
            return o.isComment;
        }
    }), Object.defineProperty(t, "isDocument", {
        enumerable: !0,
        get: function() {
            return o.isDocument;
        }
    }), Object.defineProperty(t, "hasChildren", {
        enumerable: !0,
        get: function() {
            return o.hasChildren;
        }
    });
}
