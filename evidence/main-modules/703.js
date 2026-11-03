// analysis/pretty/main.js:62892; webpack module 703
function(e, t, n) {
    var r = n(47).Buffer, i = r.isEncoding || function(e) {
        switch (e && e.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;

          default:
            return !1;
        }
    };
    var o = t.StringDecoder = function(e) {
        switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), function(e) {
            if (e && !i(e)) throw new Error("Unknown encoding: " + e);
        }(e), this.encoding) {
          case "utf8":
            this.surrogateSize = 3;
            break;

          case "ucs2":
          case "utf16le":
            this.surrogateSize = 2, this.detectIncompleteChar = s;
            break;

          case "base64":
            this.surrogateSize = 3, this.detectIncompleteChar = l;
            break;

          default:
            return void (this.write = a);
        }
        this.charBuffer = new r(6), this.charReceived = 0, this.charLength = 0;
    };
    function a(e) {
        return e.toString(this.encoding);
    }
    function s(e) {
        this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0;
    }
    function l(e) {
        this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0;
    }
    o.prototype.write = function(e) {
        for (var t = ""; this.charLength; ) {
            var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
            if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
            if (e = e.slice(n, e.length), !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
                if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                break;
            }
            this.charLength += this.surrogateSize, t = "";
        }
        this.detectIncompleteChar(e);
        var r = e.length;
        this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), 
        r -= this.charReceived);
        var i;
        r = (t += e.toString(this.encoding, 0, r)).length - 1;
        if ((i = t.charCodeAt(r)) >= 55296 && i <= 56319) {
            var o = this.surrogateSize;
            return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), 
            e.copy(this.charBuffer, 0, 0, o), t.substring(0, r);
        }
        return t;
    }, o.prototype.detectIncompleteChar = function(e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
            var n = e[e.length - t];
            if (1 == t && n >> 5 == 6) {
                this.charLength = 2;
                break;
            }
            if (t <= 2 && n >> 4 == 14) {
                this.charLength = 3;
                break;
            }
            if (t <= 3 && n >> 3 == 30) {
                this.charLength = 4;
                break;
            }
        }
        this.charReceived = t;
    }, o.prototype.end = function(e) {
        var t = "";
        if (e && e.length && (t = this.write(e)), this.charReceived) {
            var n = this.charReceived, r = this.charBuffer, i = this.encoding;
            t += r.slice(0, n).toString(i);
        }
        return t;
    };
}
