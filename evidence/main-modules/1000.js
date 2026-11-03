// analysis/pretty/main.js:81764; webpack module 1000
function(e, t) {
    e.exports = function(e, t) {
        e = e || "   he is here   ";
        var n = {
            up: [ "̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈", "͊", "͋", "͌", "̃", "̂", "̌", "͐", "̀", "́", "̋", "̏", "̒", "̓", "̔", "̽", "̉", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ", "̾", "͛", "͆", "̚" ],
            down: [ "̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣" ],
            mid: [ "̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", " ҉" ]
        }, r = [].concat(n.up, n.down, n.mid);
        function i(e) {
            return Math.floor(Math.random() * e);
        }
        function o(e) {
            var t = !1;
            return r.filter(function(n) {
                t = n === e;
            }), t;
        }
        return function(e, t) {
            var r, a, s = "";
            for (a in (t = t || {}).up = void 0 === t.up || t.up, t.mid = void 0 === t.mid || t.mid, 
            t.down = void 0 === t.down || t.down, t.size = void 0 !== t.size ? t.size : "maxi", 
            e = e.split("")) if (!o(a)) {
                switch (s += e[a], r = {
                    up: 0,
                    down: 0,
                    mid: 0
                }, t.size) {
                  case "mini":
                    r.up = i(8), r.mid = i(2), r.down = i(8);
                    break;

                  case "maxi":
                    r.up = i(16) + 3, r.mid = i(4) + 1, r.down = i(64) + 3;
                    break;

                  default:
                    r.up = i(8) + 1, r.mid = i(6) / 2, r.down = i(8) + 1;
                }
                var l = [ "up", "mid", "down" ];
                for (var c in l) for (var u = l[c], d = 0; d <= r[u]; d++) t[u] && (s += n[u][i(n[u].length)]);
            }
            return s;
        }(e, t);
    };
}
