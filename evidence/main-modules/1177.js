// analysis/pretty/main.js:92944; webpack module 1177
function(e, t, n) {
    /*!
 *  Copyright 2010 LearnBoost <dev@learnboost.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var r = n(7), i = n(15).parse, o = [ "acl", "location", "logging", "notification", "partNumber", "policy", "requestPayment", "torrent", "uploadId", "uploads", "versionId", "versioning", "versions", "website" ];
    function a(e) {
        return "AWS " + e.key + ":" + l(e);
    }
    function s(e) {
        return r.createHmac("sha1", e.secret).update(e.message).digest("base64");
    }
    function l(e) {
        return e.message = c(e), s(e);
    }
    function c(e) {
        var t = e.amazonHeaders || "";
        return t && (t += "\n"), [ e.verb, e.md5, e.contentType, e.date ? e.date.toUTCString() : "", t + e.resource ].join("\n");
    }
    function u(e) {
        return "GET\n\n\n" + e.date + "\n" + e.resource;
    }
    e.exports = a, e.exports.authorization = a, e.exports.hmacSha1 = s, e.exports.sign = l, 
    e.exports.signQuery = function(e) {
        return e.message = u(e), s(e);
    }, e.exports.stringToSign = c, e.exports.queryStringToSign = u, e.exports.canonicalizeHeaders = function(e) {
        for (var t = [], n = Object.keys(e), r = 0, i = n.length; r < i; ++r) {
            var o, a = e[o = n[r]];
            0 === (o = o.toLowerCase()).indexOf("x-amz") && t.push(o + ":" + a);
        }
        return t.sort().join("\n");
    }, e.exports.canonicalizeResource = function(e) {
        var t = i(e, !0), n = t.pathname, r = [];
        return Object.keys(t.query).forEach(function(e) {
            if (~o.indexOf(e)) {
                var n = "" == t.query[e] ? "" : "=" + encodeURIComponent(t.query[e]);
                r.push(e + n);
            }
        }), n + (r.length ? "?" + r.sort().join("&") : "");
    };
}
