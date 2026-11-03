// analysis/pretty/main.js:36899; webpack module 342
function(e, t, n) {
    var r = n(5), i = n(111), o = n(12).EventEmitter, a = n(692), s = n(1405), l = n(1406), c = i.bufferAllocUnsafe, u = i.bufferFromString;
    var d = "setImmediate" in global ? global.setImmediate.bind(global) : process.nextTick.bind(process), h = 0;
    function p(e, t, n, r, l) {
        if (this._debug = i.BufferingLogger("websocket:connection", ++h), this._debug("constructor"), 
        this._debug.enabled && function(e, t) {
            if (!e._debug.enabled) return;
            var n = t.emit;
            for (var r in t.emit = function(t) {
                e._debug("||| Socket Event  '%s'", t), n.apply(this, arguments);
            }, t) "function" == typeof t[r] && -1 === [ "emit" ].indexOf(r) && function(n) {
                var r = t[n];
                t[n] = "on" !== n ? function() {
                    return e._debug("||| Socket method called:  %s", n), r.apply(this, arguments);
                } : function() {
                    return e._debug("||| Socket method called:  %s (%s)", n, arguments[0]), r.apply(this, arguments);
                };
            }(r);
        }(this, e), o.call(this), this._pingListenerCount = 0, this.on("newListener", function(e) {
            "ping" === e && this._pingListenerCount++;
        }).on("removeListener", function(e) {
            "ping" === e && this._pingListenerCount--;
        }), this.config = l, this.socket = e, this.protocol = n, this.extensions = t, this.remoteAddress = e.remoteAddress, 
        this.closeReasonCode = -1, this.closeDescription = null, this.closeEventEmitted = !1, 
        this.maskOutgoingPackets = r, this.maskBytes = c(4), this.frameHeader = c(10), this.bufferList = new s, 
        this.currentFrame = new a(this.maskBytes, this.frameHeader, this.config), this.fragmentationSize = 0, 
        this.frameQueue = [], this.connected = !0, this.state = "open", this.waitingForCloseResponse = !1, 
        this.receivedEnd = !1, this.closeTimeout = this.config.closeTimeout, this.assembleFragments = this.config.assembleFragments, 
        this.maxReceivedMessageSize = this.config.maxReceivedMessageSize, this.outputBufferFull = !1, 
        this.inputPaused = !1, this.receivedDataHandler = this.processReceivedData.bind(this), 
        this._closeTimerHandler = this.handleCloseTimer.bind(this), this.socket.setNoDelay(this.config.disableNagleAlgorithm), 
        this.socket.setTimeout(0), this.config.keepalive && !this.config.useNativeKeepalive) {
            if ("number" != typeof this.config.keepaliveInterval) throw new Error("keepaliveInterval must be specified and numeric if keepalive is true.");
            if (this._keepaliveTimerHandler = this.handleKeepaliveTimer.bind(this), this.setKeepaliveTimer(), 
            this.config.dropConnectionOnKeepaliveTimeout) {
                if ("number" != typeof this.config.keepaliveGracePeriod) throw new Error("keepaliveGracePeriod  must be specified and numeric if dropConnectionOnKeepaliveTimeout is true.");
                this._gracePeriodTimerHandler = this.handleGracePeriodTimer.bind(this);
            }
        } else if (this.config.keepalive && this.config.useNativeKeepalive) {
            if (!("setKeepAlive" in this.socket)) throw new Error("Unable to use native keepalive: unsupported by this version of Node.");
            this.socket.setKeepAlive(!0, this.config.keepaliveInterval);
        }
        this.socket.removeAllListeners("error");
    }
    function f(e) {
        return !(e < 1e3) && (e >= 1e3 && e <= 2999 ? -1 !== [ 1e3, 1001, 1002, 1003, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015 ].indexOf(e) : e >= 3e3 && e <= 3999 || (e >= 4e3 && e <= 4999 || !(e >= 5e3) && void 0));
    }
    p.CLOSE_REASON_NORMAL = 1e3, p.CLOSE_REASON_GOING_AWAY = 1001, p.CLOSE_REASON_PROTOCOL_ERROR = 1002, 
    p.CLOSE_REASON_UNPROCESSABLE_INPUT = 1003, p.CLOSE_REASON_RESERVED = 1004, p.CLOSE_REASON_NOT_PROVIDED = 1005, 
    p.CLOSE_REASON_ABNORMAL = 1006, p.CLOSE_REASON_INVALID_DATA = 1007, p.CLOSE_REASON_POLICY_VIOLATION = 1008, 
    p.CLOSE_REASON_MESSAGE_TOO_BIG = 1009, p.CLOSE_REASON_EXTENSION_REQUIRED = 1010, 
    p.CLOSE_REASON_INTERNAL_SERVER_ERROR = 1011, p.CLOSE_REASON_TLS_HANDSHAKE_FAILED = 1015, 
    p.CLOSE_DESCRIPTIONS = {
        1e3: "Normal connection closure",
        1001: "Remote peer is going away",
        1002: "Protocol error",
        1003: "Unprocessable input",
        1004: "Reserved",
        1005: "Reason not provided",
        1006: "Abnormal closure, no further detail available",
        1007: "Invalid data received",
        1008: "Policy violation",
        1009: "Message too big",
        1010: "Extension requested by client is required",
        1011: "Internal Server Error",
        1015: "TLS Handshake Failed"
    }, r.inherits(p, o), p.prototype._addSocketEventListeners = function() {
        this.socket.on("error", this.handleSocketError.bind(this)), this.socket.on("end", this.handleSocketEnd.bind(this)), 
        this.socket.on("close", this.handleSocketClose.bind(this)), this.socket.on("drain", this.handleSocketDrain.bind(this)), 
        this.socket.on("pause", this.handleSocketPause.bind(this)), this.socket.on("resume", this.handleSocketResume.bind(this)), 
        this.socket.on("data", this.handleSocketData.bind(this));
    }, p.prototype.setKeepaliveTimer = function() {
        this._debug("setKeepaliveTimer"), this.config.keepalive && !this.config.useNativeKeepalive && (this.clearKeepaliveTimer(), 
        this.clearGracePeriodTimer(), this._keepaliveTimeoutID = setTimeout(this._keepaliveTimerHandler, this.config.keepaliveInterval));
    }, p.prototype.clearKeepaliveTimer = function() {
        this._keepaliveTimeoutID && clearTimeout(this._keepaliveTimeoutID);
    }, p.prototype.handleKeepaliveTimer = function() {
        this._debug("handleKeepaliveTimer"), this._keepaliveTimeoutID = null, this.ping(), 
        this.config.dropConnectionOnKeepaliveTimeout ? this.setGracePeriodTimer() : this.setKeepaliveTimer();
    }, p.prototype.setGracePeriodTimer = function() {
        this._debug("setGracePeriodTimer"), this.clearGracePeriodTimer(), this._gracePeriodTimeoutID = setTimeout(this._gracePeriodTimerHandler, this.config.keepaliveGracePeriod);
    }, p.prototype.clearGracePeriodTimer = function() {
        this._gracePeriodTimeoutID && clearTimeout(this._gracePeriodTimeoutID);
    }, p.prototype.handleGracePeriodTimer = function() {
        this._debug("handleGracePeriodTimer"), this._gracePeriodTimeoutID = null, this.drop(p.CLOSE_REASON_ABNORMAL, "Peer not responding.", !0);
    }, p.prototype.handleSocketData = function(e) {
        this._debug("handleSocketData"), this.setKeepaliveTimer(), this.bufferList.write(e), 
        this.processReceivedData();
    }, p.prototype.processReceivedData = function() {
        if (this._debug("processReceivedData"), this.connected && !this.inputPaused) {
            var e = this.currentFrame;
            if (e.addData(this.bufferList)) {
                var t = this;
                if (e.protocolError) return this._debug("-- protocol error"), void process.nextTick(function() {
                    t.drop(p.CLOSE_REASON_PROTOCOL_ERROR, e.dropReason);
                });
                if (e.frameTooLarge) return this._debug("-- frame too large"), void process.nextTick(function() {
                    t.drop(p.CLOSE_REASON_MESSAGE_TOO_BIG, e.dropReason);
                });
                if (e.rsv1 || e.rsv2 || e.rsv3) return this._debug("-- illegal rsv flag"), void process.nextTick(function() {
                    t.drop(p.CLOSE_REASON_PROTOCOL_ERROR, "Unsupported usage of rsv bits without negotiated extension.");
                });
                this.assembleFragments || (this._debug("-- emitting frame"), process.nextTick(function() {
                    t.emit("frame", e);
                })), process.nextTick(function() {
                    t.processFrame(e);
                }), this.currentFrame = new a(this.maskBytes, this.frameHeader, this.config), this.bufferList.length > 0 && d(this.receivedDataHandler);
            } else this._debug("-- insufficient data for frame");
        }
    }, p.prototype.handleSocketError = function(e) {
        this._debug("handleSocketError: %j", e), "closed" !== this.state ? (this.closeReasonCode = p.CLOSE_REASON_ABNORMAL, 
        this.closeDescription = "Socket Error: " + e.syscall + " " + e.code, this.connected = !1, 
        this.state = "closed", this.fragmentationSize = 0, i.eventEmitterListenerCount(this, "error") > 0 && this.emit("error", e), 
        this.socket.destroy(), this._debug.printOutput()) : this._debug("  --- Socket 'error' after 'close'");
    }, p.prototype.handleSocketEnd = function() {
        this._debug("handleSocketEnd: received socket end.  state = %s", this.state), this.receivedEnd = !0, 
        "closed" !== this.state ? "peer_requested_close" !== this.state && "ending" !== this.state && (this._debug("  --- UNEXPECTED socket end."), 
        this.socket.end()) : this._debug("  --- Socket 'end' after 'close'");
    }, p.prototype.handleSocketClose = function(e) {
        this._debug("handleSocketClose: received socket close"), this.socketHadError = e, 
        this.connected = !1, this.state = "closed", -1 === this.closeReasonCode && (this.closeReasonCode = p.CLOSE_REASON_ABNORMAL, 
        this.closeDescription = "Connection dropped by remote peer."), this.clearCloseTimer(), 
        this.clearKeepaliveTimer(), this.clearGracePeriodTimer(), this.closeEventEmitted || (this.closeEventEmitted = !0, 
        this._debug("-- Emitting WebSocketConnection close event"), this.emit("close", this.closeReasonCode, this.closeDescription));
    }, p.prototype.handleSocketDrain = function() {
        this._debug("handleSocketDrain: socket drain event"), this.outputBufferFull = !1, 
        this.emit("drain");
    }, p.prototype.handleSocketPause = function() {
        this._debug("handleSocketPause: socket pause event"), this.inputPaused = !0, this.emit("pause");
    }, p.prototype.handleSocketResume = function() {
        this._debug("handleSocketResume: socket resume event"), this.inputPaused = !1, this.emit("resume"), 
        this.processReceivedData();
    }, p.prototype.pause = function() {
        this._debug("pause: pause requested"), this.socket.pause();
    }, p.prototype.resume = function() {
        this._debug("resume: resume requested"), this.socket.resume();
    }, p.prototype.close = function(e, t) {
        if (this.connected) {
            if (this._debug("close: Initating clean WebSocket close sequence."), "number" != typeof e && (e = p.CLOSE_REASON_NORMAL), 
            !f(e)) throw new Error("Close code " + e + " is not valid.");
            "string" != typeof t && (t = p.CLOSE_DESCRIPTIONS[e]), this.closeReasonCode = e, 
            this.closeDescription = t, this.setCloseTimer(), this.sendCloseFrame(this.closeReasonCode, this.closeDescription), 
            this.state = "ending", this.connected = !1;
        }
    }, p.prototype.drop = function(e, t, n) {
        this._debug("drop"), "number" != typeof e && (e = p.CLOSE_REASON_PROTOCOL_ERROR), 
        "string" != typeof t && (t = p.CLOSE_DESCRIPTIONS[e]), this._debug("Forcefully dropping connection. skipCloseFrame: %s, code: %d, description: %s", n, e, t), 
        this.closeReasonCode = e, this.closeDescription = t, this.frameQueue = [], this.fragmentationSize = 0, 
        n || this.sendCloseFrame(e, t), this.connected = !1, this.state = "closed", this.clearCloseTimer(), 
        this.clearKeepaliveTimer(), this.clearGracePeriodTimer(), this.closeEventEmitted || (this.closeEventEmitted = !0, 
        this._debug("Emitting WebSocketConnection close event"), this.emit("close", this.closeReasonCode, this.closeDescription)), 
        this._debug("Drop: destroying socket"), this.socket.destroy();
    }, p.prototype.setCloseTimer = function() {
        this._debug("setCloseTimer"), this.clearCloseTimer(), this._debug("Setting close timer"), 
        this.waitingForCloseResponse = !0, this.closeTimer = setTimeout(this._closeTimerHandler, this.closeTimeout);
    }, p.prototype.clearCloseTimer = function() {
        this._debug("clearCloseTimer"), this.closeTimer && (this._debug("Clearing close timer"), 
        clearTimeout(this.closeTimer), this.waitingForCloseResponse = !1, this.closeTimer = null);
    }, p.prototype.handleCloseTimer = function() {
        this._debug("handleCloseTimer"), this.closeTimer = null, this.waitingForCloseResponse && (this._debug("Close response not received from client.  Forcing socket end."), 
        this.waitingForCloseResponse = !1, this.state = "closed", this.socket.end());
    }, p.prototype.processFrame = function(e) {
        if (this._debug("processFrame"), this._debug(" -- frame: %s", e), 0 !== this.frameQueue.length && e.opcode > 0 && e.opcode < 8) this.drop(p.CLOSE_REASON_PROTOCOL_ERROR, "Illegal frame opcode 0x" + e.opcode.toString(16) + " received in middle of fragmented message."); else switch (e.opcode) {
          case 2:
            this._debug("-- Binary Frame"), this.assembleFragments && (e.fin ? (this._debug("---- Emitting 'message' event"), 
            this.emit("message", {
                type: "binary",
                binaryData: e.binaryPayload
            })) : (this.frameQueue.push(e), this.fragmentationSize = e.length));
            break;

          case 1:
            if (this._debug("-- Text Frame"), this.assembleFragments) if (e.fin) {
                if (!l(e.binaryPayload)) return void this.drop(p.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
                this._debug("---- Emitting 'message' event"), this.emit("message", {
                    type: "utf8",
                    utf8Data: e.binaryPayload.toString("utf8")
                });
            } else this.frameQueue.push(e), this.fragmentationSize = e.length;
            break;

          case 0:
            if (this._debug("-- Continuation Frame"), this.assembleFragments) {
                if (0 === this.frameQueue.length) return void this.drop(p.CLOSE_REASON_PROTOCOL_ERROR, "Unexpected Continuation Frame");
                if (this.fragmentationSize += e.length, this.fragmentationSize > this.maxReceivedMessageSize) return void this.drop(p.CLOSE_REASON_MESSAGE_TOO_BIG, "Maximum message size exceeded.");
                if (this.frameQueue.push(e), e.fin) {
                    var t = 0, n = c(this.fragmentationSize), r = this.frameQueue[0].opcode;
                    switch (this.frameQueue.forEach(function(e) {
                        e.binaryPayload.copy(n, t), t += e.binaryPayload.length;
                    }), this.frameQueue = [], this.fragmentationSize = 0, r) {
                      case 2:
                        this.emit("message", {
                            type: "binary",
                            binaryData: n
                        });
                        break;

                      case 1:
                        if (!l(n)) return void this.drop(p.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
                        this.emit("message", {
                            type: "utf8",
                            utf8Data: n.toString("utf8")
                        });
                        break;

                      default:
                        return void this.drop(p.CLOSE_REASON_PROTOCOL_ERROR, "Unexpected first opcode in fragmentation sequence: 0x" + r.toString(16));
                    }
                }
            }
            break;

          case 9:
            if (this._debug("-- Ping Frame"), this._pingListenerCount > 0) {
                var i = !1;
                this.emit("ping", function() {
                    i = !0;
                }, e.binaryPayload), i || this.pong(e.binaryPayload);
            } else this.pong(e.binaryPayload);
            break;

          case 10:
            this._debug("-- Pong Frame"), this.emit("pong", e.binaryPayload);
            break;

          case 8:
            if (this._debug("-- Close Frame"), this.waitingForCloseResponse) return this._debug("---- Got close response from peer.  Completing closing handshake."), 
            this.clearCloseTimer(), this.waitingForCloseResponse = !1, this.state = "closed", 
            void this.socket.end();
            var o;
            if (this._debug("---- Closing handshake initiated by peer."), this.state = "peer_requested_close", 
            e.invalidCloseFrameLength ? (this.closeReasonCode = 1005, o = p.CLOSE_REASON_PROTOCOL_ERROR) : -1 === e.closeStatus || f(e.closeStatus) ? (this.closeReasonCode = e.closeStatus, 
            o = p.CLOSE_REASON_NORMAL) : (this.closeReasonCode = e.closeStatus, o = p.CLOSE_REASON_PROTOCOL_ERROR), 
            e.binaryPayload.length > 1) {
                if (!l(e.binaryPayload)) return void this.drop(p.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
                this.closeDescription = e.binaryPayload.toString("utf8");
            } else this.closeDescription = p.CLOSE_DESCRIPTIONS[this.closeReasonCode];
            this._debug("------ Remote peer %s - code: %d - %s - close frame payload length: %d", this.remoteAddress, this.closeReasonCode, this.closeDescription, e.length), 
            this._debug("------ responding to remote peer's close request."), this.sendCloseFrame(o, null), 
            this.connected = !1;
            break;

          default:
            this._debug("-- Unrecognized Opcode %d", e.opcode), this.drop(p.CLOSE_REASON_PROTOCOL_ERROR, "Unrecognized Opcode: 0x" + e.opcode.toString(16));
        }
    }, p.prototype.send = function(e, t) {
        if (this._debug("send"), Buffer.isBuffer(e)) this.sendBytes(e, t); else {
            if ("function" != typeof e.toString) throw new Error("Data provided must either be a Node Buffer or implement toString()");
            this.sendUTF(e, t);
        }
    }, p.prototype.sendUTF = function(e, t) {
        e = u(e.toString(), "utf8"), this._debug("sendUTF: %d bytes", e.length);
        var n = new a(this.maskBytes, this.frameHeader, this.config);
        n.opcode = 1, n.binaryPayload = e, this.fragmentAndSend(n, t);
    }, p.prototype.sendBytes = function(e, t) {
        if (this._debug("sendBytes"), !Buffer.isBuffer(e)) throw new Error("You must pass a Node Buffer object to WebSocketConnection.prototype.sendBytes()");
        var n = new a(this.maskBytes, this.frameHeader, this.config);
        n.opcode = 2, n.binaryPayload = e, this.fragmentAndSend(n, t);
    }, p.prototype.ping = function(e) {
        this._debug("ping");
        var t = new a(this.maskBytes, this.frameHeader, this.config);
        t.opcode = 9, t.fin = !0, e && (Buffer.isBuffer(e) || (e = u(e.toString(), "utf8")), 
        e.length > 125 && (this._debug("WebSocket: Data for ping is longer than 125 bytes.  Truncating."), 
        e = e.slice(0, 124)), t.binaryPayload = e), this.sendFrame(t);
    }, p.prototype.pong = function(e) {
        this._debug("pong");
        var t = new a(this.maskBytes, this.frameHeader, this.config);
        t.opcode = 10, Buffer.isBuffer(e) && e.length > 125 && (this._debug("WebSocket: Data for pong is longer than 125 bytes.  Truncating."), 
        e = e.slice(0, 124)), t.binaryPayload = e, t.fin = !0, this.sendFrame(t);
    }, p.prototype.fragmentAndSend = function(e, t) {
        if (this._debug("fragmentAndSend"), e.opcode > 7) throw new Error("You cannot fragment control frames.");
        var n = this.config.fragmentationThreshold, r = e.binaryPayload.length;
        if (!this.config.fragmentOutgoingMessages || e.binaryPayload && r <= n) return e.fin = !0, 
        void this.sendFrame(e, t);
        for (var i = Math.ceil(r / n), o = 0, s = function(e) {
            e ? "function" == typeof t && (t(e), t = null) : ++o === i && "function" == typeof t && t();
        }, l = 1; l <= i; l++) {
            var c = new a(this.maskBytes, this.frameHeader, this.config);
            c.opcode = 1 === l ? e.opcode : 0, c.fin = l === i;
            var u = l === i ? r - n * (l - 1) : n, d = n * (l - 1);
            c.binaryPayload = e.binaryPayload.slice(d, d + u), this.sendFrame(c, s);
        }
    }, p.prototype.sendCloseFrame = function(e, t, n) {
        if ("number" != typeof e && (e = p.CLOSE_REASON_NORMAL), this._debug("sendCloseFrame state: %s, reasonCode: %d, description: %s", this.state, e, t), 
        "open" === this.state || "peer_requested_close" === this.state) {
            var r = new a(this.maskBytes, this.frameHeader, this.config);
            r.fin = !0, r.opcode = 8, r.closeStatus = e, "string" == typeof t && (r.binaryPayload = u(t, "utf8")), 
            this.sendFrame(r, n), this.socket.end();
        }
    }, p.prototype.sendFrame = function(e, t) {
        this._debug("sendFrame"), e.mask = this.maskOutgoingPackets;
        var n = this.socket.write(e.toBuffer(), t);
        return this.outputBufferFull = !n, n;
    }, e.exports = p;
}
