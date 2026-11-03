// analysis/pretty/main.js:108042; webpack module 1452
function(e, t, n) {
    "use strict";
    var r = n(1453), i = n(1454), o = function() {
        this._rsv1 = this._rsv2 = this._rsv3 = null, this._byName = {}, this._inOrder = [], 
        this._sessions = [], this._index = {};
    };
    o.MESSAGE_OPCODES = [ 1, 2 ];
    var a = {
        add: function(e) {
            if ("string" != typeof e.name) throw new TypeError("extension.name must be a string");
            if ("permessage" !== e.type) throw new TypeError('extension.type must be "permessage"');
            if ("boolean" != typeof e.rsv1) throw new TypeError("extension.rsv1 must be true or false");
            if ("boolean" != typeof e.rsv2) throw new TypeError("extension.rsv2 must be true or false");
            if ("boolean" != typeof e.rsv3) throw new TypeError("extension.rsv3 must be true or false");
            if (this._byName.hasOwnProperty(e.name)) throw new TypeError('An extension with name "' + e.name + '" is already registered');
            this._byName[e.name] = e, this._inOrder.push(e);
        },
        generateOffer: function() {
            var e = [], t = [], n = {};
            return this._inOrder.forEach(function(i) {
                var o = i.createClientSession();
                if (o) {
                    var a = [ i, o ];
                    e.push(a), n[i.name] = a;
                    var s = o.generateOffer();
                    (s = s ? [].concat(s) : []).forEach(function(e) {
                        t.push(r.serializeParams(i.name, e));
                    }, this);
                }
            }, this), this._sessions = e, this._index = n, t.length > 0 ? t.join(", ") : null;
        },
        activate: function(e) {
            var t = r.parseHeader(e), n = [];
            t.eachOffer(function(e, t) {
                var i = this._index[e];
                if (!i) throw new Error('Server sent an extension response for unknown extension "' + e + '"');
                var o = i[0], a = i[1], s = this._reserved(o);
                if (s) throw new Error("Server sent two extension responses that use the RSV" + s[0] + ' bit: "' + s[1] + '" and "' + o.name + '"');
                if (!0 !== a.activate(t)) throw new Error("Server sent unacceptable extension parameters: " + r.serializeParams(e, t));
                this._reserve(o), n.push(i);
            }, this), this._sessions = n, this._pipeline = new i(n);
        },
        generateResponse: function(e) {
            var t = [], n = [], o = r.parseHeader(e);
            return this._inOrder.forEach(function(e) {
                var i = o.byName(e.name);
                if (0 !== i.length && !this._reserved(e)) {
                    var a = e.createServerSession(i);
                    a && (this._reserve(e), t.push([ e, a ]), n.push(r.serializeParams(e.name, a.generateResponse())));
                }
            }, this), this._sessions = t, this._pipeline = new i(t), n.length > 0 ? n.join(", ") : null;
        },
        validFrameRsv: function(e) {
            var t, n = {
                rsv1: !1,
                rsv2: !1,
                rsv3: !1
            };
            if (o.MESSAGE_OPCODES.indexOf(e.opcode) >= 0) for (var r = 0, i = this._sessions.length; r < i; r++) t = this._sessions[r][0], 
            n.rsv1 = n.rsv1 || t.rsv1, n.rsv2 = n.rsv2 || t.rsv2, n.rsv3 = n.rsv3 || t.rsv3;
            return (n.rsv1 || !e.rsv1) && (n.rsv2 || !e.rsv2) && (n.rsv3 || !e.rsv3);
        },
        processIncomingMessage: function(e, t, n) {
            this._pipeline.processIncomingMessage(e, t, n);
        },
        processOutgoingMessage: function(e, t, n) {
            this._pipeline.processOutgoingMessage(e, t, n);
        },
        close: function(e, t) {
            if (!this._pipeline) return e.call(t);
            this._pipeline.close(e, t);
        },
        _reserve: function(e) {
            this._rsv1 = this._rsv1 || e.rsv1 && e.name, this._rsv2 = this._rsv2 || e.rsv2 && e.name, 
            this._rsv3 = this._rsv3 || e.rsv3 && e.name;
        },
        _reserved: function(e) {
            return this._rsv1 && e.rsv1 ? [ 1, this._rsv1 ] : this._rsv2 && e.rsv2 ? [ 2, this._rsv2 ] : !(!this._rsv3 || !e.rsv3) && [ 3, this._rsv3 ];
        }
    };
    for (var s in a) o.prototype[s] = a[s];
    e.exports = o;
}
