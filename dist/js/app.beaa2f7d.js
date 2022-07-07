(function (t) {
  function e(e) {
    for (
      var a, o, i = e[0], u = e[1], l = e[2], c = 0, h = [];
      c < i.length;
      c++
    )
      (o = i[c]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]),
        (r[o] = 0);
    for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (t[a] = u[a]);
    f && f(e);
    while (h.length) h.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], a = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== r[u] && (a = !1);
      }
      a && (s.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var a = {},
    r = { app: 0 },
    s = [];
  function o(t) {
    return (
      i.p +
      "js/" +
      ({}[t] || t) +
      "." +
      { "chunk-2d22d746": "c973c401" }[t] +
      ".js"
    );
  }
  function i(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function (t) {
    var e = [],
      n = r[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var a = new Promise(function (e, a) {
          n = r[t] = [e, a];
        });
        e.push((n[2] = a));
        var s,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          i.nc && u.setAttribute("nonce", i.nc),
          (u.src = o(t));
        var l = new Error();
        s = function (e) {
          (u.onerror = u.onload = null), clearTimeout(c);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                s = e && e.target && e.target.src;
              (l.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = s),
                n[1](l);
            }
            r[t] = void 0;
          }
        };
        var c = setTimeout(function () {
          s({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = s), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (i.m = t),
    (i.c = a),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/"),
    (i.oe = function (t) {
      throw (console.error(t), t);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = e), (u = u.slice());
  for (var c = 0; c < u.length; c++) e(u[c]);
  var f = l;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a = n("2b0e"),
      r = n("7496"),
      s = n("40dc"),
      o = n("8336"),
      i = n("132d"),
      u = n("adda"),
      l = n("f6c4"),
      c = n("2fa4"),
      f = function () {
        var t = this,
          e = t._self._c;
        return e(
          r["a"],
          [
            e(
              s["a"],
              { attrs: { app: "", color: "primary", dark: "" } },
              [
                e(
                  "div",
                  { staticClass: "d-flex align-center" },
                  [
                    e(u["a"], {
                      staticClass: "shrink mr-2",
                      attrs: {
                        alt: "Vuetify Logo",
                        contain: "",
                        src: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
                        transition: "scale-transition",
                        width: "40",
                      },
                    }),
                    e(u["a"], {
                      staticClass: "shrink mt-1 hidden-sm-and-down",
                      attrs: {
                        alt: "Vuetify Name",
                        contain: "",
                        "min-width": "100",
                        src: "https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",
                        width: "100",
                      },
                    }),
                  ],
                  1
                ),
                e(c["a"]),
                e(
                  o["a"],
                  {
                    attrs: {
                      href: "https://github.com/vuetifyjs/vuetify/releases/latest",
                      target: "_blank",
                      text: "",
                    },
                  },
                  [
                    e("span", { staticClass: "mr-2" }, [
                      t._v("Latest Release"),
                    ]),
                    e(i["a"], [t._v("mdi-open-in-new")]),
                  ],
                  1
                ),
              ],
              1
            ),
            e(l["a"], [e("HelloWorld")], 1),
          ],
          1
        );
      },
      h = [],
      d = n("62ad"),
      p = n("a523"),
      m = n("0fd9"),
      v = function () {
        var t = this,
          e = t._self._c;
        return e(
          p["a"],
          [
            e(
              m["a"],
              { staticClass: "text-center" },
              [
                e(
                  d["a"],
                  { attrs: { cols: "12" } },
                  [
                    e(u["a"], {
                      staticClass: "my-3",
                      attrs: { src: n("9b19"), contain: "", height: "200" },
                    }),
                  ],
                  1
                ),
                e(d["a"], { staticClass: "mb-4" }, [
                  e("h1", { staticClass: "display-2 font-weight-bold mb-3" }, [
                    t._v(" Welcome to Vuetify "),
                  ]),
                  e("p", { staticClass: "subheading font-weight-regular" }, [
                    t._v(
                      " For help and collaboration with other Vuetify developers, "
                    ),
                    e("br"),
                    t._v("please join our online "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://community.vuetifyjs.com",
                          target: "_blank",
                        },
                      },
                      [t._v("Discord Community")]
                    ),
                  ]),
                ]),
                e(
                  d["a"],
                  { staticClass: "mb-5", attrs: { cols: "12" } },
                  [
                    e("h2", { staticClass: "headline font-weight-bold mb-3" }, [
                      t._v(" What's next? "),
                    ]),
                    e(
                      m["a"],
                      { attrs: { justify: "center" } },
                      t._l(t.whatsNext, function (n, a) {
                        return e(
                          "a",
                          {
                            key: a,
                            staticClass: "subheading mx-3",
                            attrs: { href: n.href, target: "_blank" },
                          },
                          [t._v(" " + t._s(n.text) + " ")]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
                e(
                  d["a"],
                  { staticClass: "mb-5", attrs: { cols: "12" } },
                  [
                    e("h2", { staticClass: "headline font-weight-bold mb-3" }, [
                      t._v(" Important Links "),
                    ]),
                    e(
                      m["a"],
                      { attrs: { justify: "center" } },
                      t._l(t.importantLinks, function (n, a) {
                        return e(
                          "a",
                          {
                            key: a,
                            staticClass: "subheading mx-3",
                            attrs: { href: n.href, target: "_blank" },
                          },
                          [t._v(" " + t._s(n.text) + " ")]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
                e(
                  d["a"],
                  { staticClass: "mb-5", attrs: { cols: "12" } },
                  [
                    e("h2", { staticClass: "headline font-weight-bold mb-3" }, [
                      t._v(" Ecosystem "),
                    ]),
                    e(
                      m["a"],
                      { attrs: { justify: "center" } },
                      t._l(t.ecosystem, function (n, a) {
                        return e(
                          "a",
                          {
                            key: a,
                            staticClass: "subheading mx-3",
                            attrs: { href: n.href, target: "_blank" },
                          },
                          [t._v(" " + t._s(n.text) + " ")]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      y = [],
      g = {
        name: "HelloWorld",
        data: function () {
          return {
            ecosystem: [
              {
                text: "vuetify-loader",
                href: "https://github.com/vuetifyjs/vuetify-loader",
              },
              { text: "github", href: "https://github.com/vuetifyjs/vuetify" },
              {
                text: "awesome-vuetify",
                href: "https://github.com/vuetifyjs/awesome-vuetify",
              },
            ],
            importantLinks: [
              { text: "Documentation", href: "https://vuetifyjs.com" },
              { text: "Chat", href: "https://community.vuetifyjs.com" },
              {
                text: "Made with Vuetify",
                href: "https://madewithvuejs.com/vuetify",
              },
              { text: "Twitter", href: "https://twitter.com/vuetifyjs" },
              { text: "Articles", href: "https://medium.com/vuetify" },
            ],
            whatsNext: [
              {
                text: "Explore components",
                href: "https://vuetifyjs.com/components/api-explorer",
              },
              {
                text: "Select a layout",
                href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
              },
              {
                text: "Frequently Asked Questions",
                href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
              },
            ],
          };
        },
      },
      b = g,
      w = n("2877"),
      x = Object(w["a"])(b, v, y, !1, null, null, null),
      _ = x.exports,
      j = {
        name: "App",
        components: { HelloWorld: _ },
        data: function () {
          return {};
        },
      },
      k = j,
      C = Object(w["a"])(k, f, h, !1, null, null, null),
      O = C.exports,
      P = n("8c4f"),
      L = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "home" },
          [
            e("img", {
              attrs: { alt: "Vue logo", src: n("d10d"), width: "350" },
            }),
            e("HelloWorld", { attrs: { msg: "Default Boilerplate Template" } }),
          ],
          1
        );
      },
      T = [],
      W = { name: "home", components: { HelloWorld: _ } },
      S = W,
      V = Object(w["a"])(S, L, T, !1, null, null, null),
      E = V.exports;
    a["a"].use(P["a"]);
    var H = new P["a"]({
        mode: "history",
        base: "/",
        routes: [
          { path: "/", name: "home", component: E },
          {
            path: "/about",
            name: "about",
            component: function () {
              return n.e("chunk-2d22d746").then(n.bind(null, "f820"));
            },
          },
        ],
      }),
      M = n("f309");
    a["a"].use(M["a"]);
    var q = new M["a"]({});
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: H,
        vuetify: q,
        render: function (t) {
          return t(O);
        },
      }).$mount("#app");
  },
  "9b19": function (t, e, n) {
    t.exports = n.p + "img/logo.63a7d78d.svg";
  },
  d10d: function (t, e, n) {
    t.exports = n.p + "img/mevn.310c7301.jpg";
  },
});
//# sourceMappingURL=app.beaa2f7d.js.map
