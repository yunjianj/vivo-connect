// analysis/pretty/main.js:21320; webpack module 155
function(e, t, n) {
    e.exports = u;
    var r = n(21), i = (n(42), n(7), n(150), n(77), n(69), n(5), n(35)), o = n(78), a = n(17).Buffer, s = /^([*]|[a-z0-9][a-z0-9\-]{0,62})(?:\.([*]|[a-z0-9][a-z0-9\-]{0,62}))*$/i, l = {
        cn: "2.5.4.3",
        o: "2.5.4.10",
        ou: "2.5.4.11",
        l: "2.5.4.7",
        s: "2.5.4.8",
        c: "2.5.4.6",
        sn: "2.5.4.4",
        postalCode: "2.5.4.17",
        serialNumber: "2.5.4.5",
        street: "2.5.4.9",
        x500UniqueIdentifier: "2.5.4.45",
        role: "2.5.4.72",
        telephoneNumber: "2.5.4.20",
        description: "2.5.4.13",
        dc: "0.9.2342.19200300.100.1.25",
        uid: "0.9.2342.19200300.100.1.1",
        mail: "0.9.2342.19200300.100.1.3",
        title: "2.5.4.12",
        gn: "2.5.4.42",
        initials: "2.5.4.43",
        pseudonym: "2.5.4.65",
        emailAddress: "1.2.840.113549.1.9.1"
    }, c = {};
    function u(e) {
        var t = this;
        if (r.object(e, "options"), r.arrayOfObject(e.components, "options.components"), 
        this.components = e.components, this.componentLookup = {}, this.components.forEach(function(e) {
            e.name && !e.oid && (e.oid = l[e.name]), e.oid && !e.name && (e.name = c[e.oid]), 
            void 0 === t.componentLookup[e.name] && (t.componentLookup[e.name] = []), t.componentLookup[e.name].push(e);
        }), this.componentLookup.cn && this.componentLookup.cn.length > 0 && (this.cn = this.componentLookup.cn[0].value), 
        r.optionalString(e.type, "options.type"), void 0 === e.type) 1 === this.components.length && this.componentLookup.cn && 1 === this.componentLookup.cn.length && this.componentLookup.cn[0].value.match(s) ? (this.type = "host", 
        this.hostname = this.componentLookup.cn[0].value) : this.componentLookup.dc && this.components.length === this.componentLookup.dc.length ? (this.type = "host", 
        this.hostname = this.componentLookup.dc.map(function(e) {
            return e.value;
        }).join(".")) : this.componentLookup.uid && this.components.length === this.componentLookup.uid.length ? (this.type = "user", 
        this.uid = this.componentLookup.uid[0].value) : this.componentLookup.cn && 1 === this.componentLookup.cn.length && this.componentLookup.cn[0].value.match(s) ? (this.type = "host", 
        this.hostname = this.componentLookup.cn[0].value) : this.componentLookup.uid && 1 === this.componentLookup.uid.length ? (this.type = "user", 
        this.uid = this.componentLookup.uid[0].value) : this.componentLookup.mail && 1 === this.componentLookup.mail.length ? (this.type = "email", 
        this.email = this.componentLookup.mail[0].value) : this.componentLookup.cn && 1 === this.componentLookup.cn.length ? (this.type = "user", 
        this.uid = this.componentLookup.cn[0].value) : this.type = "unknown"; else if (this.type = e.type, 
        "host" === this.type) this.hostname = e.hostname; else if ("user" === this.type) this.uid = e.uid; else {
            if ("email" !== this.type) throw new Error("Unknown type " + this.type);
            this.email = e.email;
        }
    }
    Object.keys(l).forEach(function(e) {
        c[l[e]] = e;
    }), u.prototype.toString = function() {
        return this.components.map(function(e) {
            var t = e.name.toUpperCase();
            t = t.replace(/=/g, "\\=");
            var n = e.value;
            return t + "=" + (n = n.replace(/,/g, "\\,"));
        }).join(", ");
    }, u.prototype.get = function(e, t) {
        r.string(e, "name");
        var n = this.componentLookup[e];
        if (void 0 !== n && 0 !== n.length) {
            if (!t && n.length > 1) throw new Error("Multiple values for attribute " + e);
            return t ? n.map(function(e) {
                return e.value;
            }) : n[0].value;
        }
    }, u.prototype.toArray = function(e) {
        return this.components.map(function(e) {
            return {
                name: e.name,
                value: e.value
            };
        });
    };
    var d = /[^a-zA-Z0-9 '(),+.\/:=?-]/, h = /[^\x00-\x7f]/;
    function p(e, t) {
        if ("**" === e || "**" === t) return !0;
        var n = e.split("."), r = t.split(".");
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; ++i) if ("*" !== n[i] && "*" !== r[i] && n[i] !== r[i]) return !1;
        return !0;
    }
    u.prototype.toAsn1 = function(e, t) {
        e.startSequence(t), this.components.forEach(function(t) {
            if (e.startSequence(o.Ber.Constructor | o.Ber.Set), e.startSequence(), e.writeOID(t.oid), 
            t.asn1type === o.Ber.Utf8String || t.value.match(h)) {
                var n = a.from(t.value, "utf8");
                e.writeBuffer(n, o.Ber.Utf8String);
            } else if (t.asn1type === o.Ber.IA5String || t.value.match(d)) e.writeString(t.value, o.Ber.IA5String); else {
                var r = o.Ber.PrintableString;
                void 0 !== t.asn1type && (r = t.asn1type), e.writeString(t.value, r);
            }
            e.endSequence(), e.endSequence();
        }), e.endSequence();
    }, u.prototype.equals = function(e) {
        if (!u.isIdentity(e, [ 1, 0 ])) return !1;
        if (e.components.length !== this.components.length) return !1;
        for (var t = 0; t < this.components.length; ++t) {
            if (this.components[t].oid !== e.components[t].oid) return !1;
            if (!p(this.components[t].value, e.components[t].value)) return !1;
        }
        return !0;
    }, u.forHost = function(e) {
        return r.string(e, "hostname"), new u({
            type: "host",
            hostname: e,
            components: [ {
                name: "cn",
                value: e
            } ]
        });
    }, u.forUser = function(e) {
        return r.string(e, "uid"), new u({
            type: "user",
            uid: e,
            components: [ {
                name: "uid",
                value: e
            } ]
        });
    }, u.forEmail = function(e) {
        return r.string(e, "email"), new u({
            type: "email",
            email: e,
            components: [ {
                name: "mail",
                value: e
            } ]
        });
    }, u.parseDN = function(e) {
        r.string(e, "dn");
        for (var t = [ "" ], n = 0, i = e; i.length > 0; ) {
            var o;
            if (null !== (o = /^,/.exec(i))) t[++n] = "", i = i.slice(o[0].length); else if (null !== (o = /^\\,/.exec(i))) t[n] += ",", 
            i = i.slice(o[0].length); else if (null !== (o = /^\\./.exec(i))) t[n] += o[0], 
            i = i.slice(o[0].length); else {
                if (null === (o = /^[^\\,]+/.exec(i))) throw new Error("Failed to parse DN");
                t[n] += o[0], i = i.slice(o[0].length);
            }
        }
        return new u({
            components: t.map(function(e) {
                for (var t = (e = e.trim()).indexOf("="); t > 0 && "\\" === e.charAt(t - 1); ) t = e.indexOf("=", t + 1);
                if (-1 === t) throw new Error("Failed to parse DN");
                return {
                    name: e.slice(0, t).toLowerCase().replace(/\\=/g, "="),
                    value: e.slice(t + 1)
                };
            })
        });
    }, u.fromArray = function(e) {
        return r.arrayOfObject(e, "components"), e.forEach(function(e) {
            if (r.object(e, "component"), r.string(e.name, "component.name"), !a.isBuffer(e.value) && "string" != typeof e.value) throw new Error("Invalid component value");
        }), new u({
            components: e
        });
    }, u.parseAsn1 = function(e, t) {
        var n = [];
        e.readSequence(t);
        for (var r = e.offset + e.length; e.offset < r; ) {
            e.readSequence(o.Ber.Constructor | o.Ber.Set);
            var i = e.offset + e.length;
            e.readSequence();
            var a, s = e.readOID(), l = e.peek();
            switch (l) {
              case o.Ber.PrintableString:
              case o.Ber.IA5String:
              case o.Ber.OctetString:
              case o.Ber.T61String:
                a = e.readString(l);
                break;

              case o.Ber.Utf8String:
                a = (a = e.readString(l, !0)).toString("utf8");
                break;

              case o.Ber.CharacterString:
              case o.Ber.BMPString:
                a = (a = e.readString(l, !0)).toString("utf16le");
                break;

              default:
                throw new Error("Unknown asn1 type " + l);
            }
            n.push({
                oid: s,
                asn1type: l,
                value: a
            }), e._offset = i;
        }
        return e._offset = r, new u({
            components: n
        });
    }, u.isIdentity = function(e, t) {
        return i.isCompatible(e, u, t);
    }, u.prototype._sshpkApiVersion = [ 1, 0 ], u._oldVersionDetect = function(e) {
        return [ 1, 0 ];
    };
}
