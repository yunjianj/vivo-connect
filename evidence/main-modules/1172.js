// analysis/pretty/main.js:92382; webpack module 1172
function(e, t, n) {
    "use strict";
    /*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */    var r = n(626).Store, i = n(627).permuteDomain, o = n(628).pathMatch, a = n(5);
    function s() {
        r.call(this), this.idx = {};
    }
    a.inherits(s, r), t.MemoryCookieStore = s, s.prototype.idx = null, s.prototype.synchronous = !0, 
    s.prototype.inspect = function() {
        return "{ idx: " + a.inspect(this.idx, !1, 2) + " }";
    }, a.inspect.custom && (s.prototype[a.inspect.custom] = s.prototype.inspect), s.prototype.findCookie = function(e, t, n, r) {
        return this.idx[e] && this.idx[e][t] ? r(null, this.idx[e][t][n] || null) : r(null, void 0);
    }, s.prototype.findCookies = function(e, t, n) {
        var r, a = [];
        if (!e) return n(null, []);
        r = t ? function(e) {
            Object.keys(e).forEach(function(n) {
                if (o(t, n)) {
                    var r = e[n];
                    for (var i in r) a.push(r[i]);
                }
            });
        } : function(e) {
            for (var t in e) {
                var n = e[t];
                for (var r in n) a.push(n[r]);
            }
        };
        var s = i(e) || [ e ], l = this.idx;
        s.forEach(function(e) {
            var t = l[e];
            t && r(t);
        }), n(null, a);
    }, s.prototype.putCookie = function(e, t) {
        this.idx[e.domain] || (this.idx[e.domain] = {}), this.idx[e.domain][e.path] || (this.idx[e.domain][e.path] = {}), 
        this.idx[e.domain][e.path][e.key] = e, t(null);
    }, s.prototype.updateCookie = function(e, t, n) {
        this.putCookie(t, n);
    }, s.prototype.removeCookie = function(e, t, n, r) {
        this.idx[e] && this.idx[e][t] && this.idx[e][t][n] && delete this.idx[e][t][n], 
        r(null);
    }, s.prototype.removeCookies = function(e, t, n) {
        return this.idx[e] && (t ? delete this.idx[e][t] : delete this.idx[e]), n(null);
    }, s.prototype.removeAllCookies = function(e) {
        return this.idx = {}, e(null);
    }, s.prototype.getAllCookies = function(e) {
        var t = [], n = this.idx;
        Object.keys(n).forEach(function(e) {
            Object.keys(n[e]).forEach(function(r) {
                Object.keys(n[e][r]).forEach(function(i) {
                    null !== i && t.push(n[e][r][i]);
                });
            });
        }), t.sort(function(e, t) {
            return (e.creationIndex || 0) - (t.creationIndex || 0);
        }), e(null, t);
    };
}
