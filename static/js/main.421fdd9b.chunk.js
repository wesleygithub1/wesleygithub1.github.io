(this["webpackJsonpnft-minter"] = this["webpackJsonpnft-minter"] || []).push([
    [0], { 257: function(n, e, t) {}, 258: function(n, e, t) {}, 281: function(n) { n.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]') }, 295: function(n, e) {}, 297: function(n, e) {}, 299: function(n, e) {}, 303: function(n, e) {}, 330: function(n, e) {}, 332: function(n, e) {}, 341: function(n, e) {}, 343: function(n, e) {}, 353: function(n, e) {}, 355: function(n, e) {}, 386: function(n, e) {}, 388: function(n, e) {}, 479: function(n, e) {}, 481: function(n, e) {}, 488: function(n, e) {}, 489: function(n, e) {}, 580: function(n, e, t) { "use strict";
            t.r(e); var r = t(8),
                a = t.n(r),
                i = t(233),
                s = t.n(i),
                o = (t(257), t(258), t(234)),
                u = t(15),
                c = t.n(u),
                p = t(25),
                d = t(61);
            t(235);
            t(134).config(); var l = t(82),
                m = t.n(l),
                f = t(5);
            t(134).config();
            t(281), (0, t(581).createAlchemyWeb3)("https://eth-mainnet.alchemyapi.io/v2/c-Tc8sI6lJgd6Ed8czyebR3k6MkiGfUp"); var y = function() { var n = Object(p.a)(c.a.mark((function n() { var e, t, r; return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e = window.innerWidth <= 479, t = function(n) { return new Promise((function(e) { return setTimeout(e, n) })) }, r = function() { var n = Object(p.a)(c.a.mark((function n() { var e, t; return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            if (e = window, !(t = e.ethereum)) { n.next = 5; break } return n.abrupt("return", t.request({ method: "eth_requestAccounts" }).then((function(n) { return { status: "\ud83d\udc46\ud83c\udffd Wallet already connected.", address: n[0] } })).catch((function(n) { return { address: "", status: "\ud83d\ude25 " + n.message } })));
                                                        case 5:
                                                            return n.abrupt("return", Promise.resolve({ address: "", status: Object(f.jsx)("span", { children: Object(f.jsxs)("p", { children: [" ", "\ud83e\udd8a", " ", Object(f.jsx)("a", { target: "_blank", href: "https://metamask.io/download.html", children: "You must install Metamask, a virtual Ethereum wallet, in your browser." })] }) }) }));
                                                        case 6:
                                                        case "end":
                                                            return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }(), !1 !== e) { n.next = 7; break } return n.abrupt("return", r());
                                case 7:
                                    if (!window.ethereum) { n.next = 11; break } return n.abrupt("return", r());
                                case 11:
                                    return window.addEventListener("ethereum#initialized", r, { once: !0 }), window.location.assign("https://metamask.app.link/dapp/thecompanion-nft.com"), n.abrupt("return", t(3e3).then((function() { return r() })));
                                case 14:
                                case "end":
                                    return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }(),
                b = function() { var n = Object(p.a)(c.a.mark((function n() { var e, t; return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, m()();
                                case 2:
                                    if (!(e = n.sent)) { n.next = 20; break } return n.prev = 4, n.next = 7, e.request({ method: "eth_accounts" });
                                case 7:
                                    if (!((t = n.sent).length > 0)) { n.next = 12; break } return n.abrupt("return", { address: t[0], status: "\ud83d\udc46\ud83c\udffd MINT 3 GET 3 FREE" });
                                case 12:
                                    return n.abrupt("return", { address: "", status: "\ud83e\udd8a Connect to Metamask using the top right button." });
                                case 13:
                                    n.next = 18; break;
                                case 15:
                                    return n.prev = 15, n.t0 = n.catch(4), n.abrupt("return", { address: "", status: "\ud83d\ude25 " + n.t0.message });
                                case 18:
                                    n.next = 21; break;
                                case 20:
                                    return n.abrupt("return", { address: "", status: Object(f.jsx)("span", { children: Object(f.jsxs)("p", { children: [" ", "\ud83e\udd8a", " ", Object(f.jsx)("a", { target: "_blank", href: "https://metamask.io/download.html", children: "You must install Metamask, a virtual Ethereum wallet, in your browser." })] }) }) });
                                case 21:
                                case "end":
                                    return n.stop() } }), n, null, [
                            [4, 15]
                        ]) }))); return function() { return n.apply(this, arguments) } }(); 
                // var h, x = t.p + "static/media/bgVideo.a3051ac3.mp4",
                var h, x = t.p ,
                j = t(246),
                // g = t.p + "static/media/coolcats.f62b8ebd.gif",
                // w = t.p + "static/media/logo.4157455d.jfif",
                g = t.p + "static/media/gifius.gif",
                w = t.p ,
                v = j.a.div(h || (h = Object(o.a)(['\n  @import url("https://fonts.googleapis.com/css2?family=Pushster&display=swap");\n  @import url("https://fonts.googleapis.com/css2?family=Genos:wght@800&display=swap");\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 100vh;\n  position: relative;\n /* background-color: black; */  \n  /* background-image: url(', '); */\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 0;\n  overflow: hidden;\n  flex-wrap: wrap;\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    h1 {\n      color: white;\n      font-family: "Pushster", cursive;\n      background-color: red;\n      padding: 0.8rem 1rem;\n      border-radius: 20px;\n    }\n    .logo-img {\n      display: none;\n      align-items: center;\n      justify-content: center;\n      font-family: "Genos", sans-serif;\n      text-shadow: 0 2px 1px #ec1c24;\n      white-space: nowrap;\n      background-color: rgba(0, 0, 0, 0.7);\n      padding: 0.5% 1%;\n      border-radius: 20px;\n      margin-top: 2rem;\n      h2 {\n        font-size: 40px;\n      }\n      img {\n        margin-top: 1rem;\n        border-radius: 8px;\n        margin-right: 1%;\n      }\n    }\n  }\n  video {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n  .slider {\n    display: flex;\n    display: ', "; \n opacity: 0.0000001; \n    align-items: center;\n    justify-content: center;\n    img {\n      border-radius: 20px;\n      width: 400px;\n    }\n    div {\n      position: absolute;\n      display: none;\n      flex-direction: column;\n      top: 100%;\n      /* transform: translate(0, -100%, 0); */\n      animation: slideAnimation 20s linear infinite 0s;\n      img {\n        width: 400px;\n        margin: 0.4rem;\n      }\n    }\n  }\n  .right {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    .logo {\n      margin-top: 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      img {\n        border-radius: 50%;\n      }\n    }\n    h1,\n    h3,\n    p {\n      margin: 0.8rem;\n    }\n    .values {\n      width: 100%;\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      * {\n        margin: 0.4rem;\n      }\n    }\n    .minter-container {\n      display: flex;\n      width: 100%;\n      min-height: 65vh;\n      border-radius: 2%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n      background-color: rgba(0, 0, 0, 0.9);\n      h2 {\n        font-size: 3rem;\n      }\n      h3 {\n        font-size: 1.2rem;\n      }\n      .text {\n        display: flex;\n        flex-direction: column;\n        white-space: nowrap;\n      }\n      .box {\n        display: flex;\n        border: 1px solid white;\n        width: 85%;\n        border-radius: 12px;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px 12px;\n      }\n      .price {\n        img {\n          width: 82px;\n          height: 82px;\n          border-radius: 12px;\n        }\n      }\n      .count {\n        .min-plus {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          button {\n            border: none;\n            background: transparent;\n            color: white;\n            font-size: 1.6rem;\n            padding: 0;\n            font-weight: normal;\n            box-shadow: none;\n          }\n          * {\n            margin: auto 4px;\n          }\n        }\n        #walletButton {\n          font-size: 0.8rem;\n          font-weight: normal;\n          padding: 6px 8px;\n        }\n      }\n      .total {\n        border: none;\n        border-top: 1px solid white;\n        border-bottom: 1px solid white;\n        border-radius: 0;\n        * {\n          margin: 2px;\n        }\n      }\n      #mintButton {\n        margin-top: 2%;\n      }\n    }\n  }\n  @keyframes slideAnimation {\n    from {\n      top: 100%;\n    }\n    to {\n      top: -680%;\n    }\n  }\n  @media (min-width: 1000px) {\n    video {\n      width: 100%;\n    }\n    .right {\n      min-width: 34%;\n      .logo {\n        img {\n          width: 80px;\n        }\n      }\n    }\n    .minter-container {\n      margin-top: 2rem;\n    }\n  }\n  @media (max-width: 800px) {\n    .minter-container {\n      width: 80%;\n    }\n  }\n  @media (max-width: 600px) {\n    .right {\n      min-width: 90%;\n      .minter-container {\n      min-height: 65vh;\n      .text {\n        h2 {\n          font-size: 2rem;\n        }\n    }\n    }\n    h1 {\n      font-size: 2rem;\n    }\n    p,\n    button {\n      font-size: 0.8rem;\n    }\n    #mintButton {\n      margin-top: 20px;\n    }\n    .logo {\n      img {\n        width: 60px;\n      }\n      h2 {\n        font-size: 26px;\n      }\n    }\n    .counter {\n      margin: 0px auto 0.4rem auto;\n    }\n  }\n"])), (function(n) { return n.bgImg }), (function(n) { return n.mobile && "none" })),
                O = function(n) { var e = Object(r.useState)(""),
                        t = Object(d.a)(e, 2),
                        a = t[0],
                        i = t[1],
                        s = (window.innerWidth, Object(r.useState)("")),
                        o = Object(d.a)(s, 2),
                        u = (o[0], o[1]),
                        l = Object(r.useState)(0.26),
                        h = Object(d.a)(l, 2),
                        j = h[0],
                        O = h[1],
                        T = Object(r.useState)(321),
                        k = Object(d.a)(T, 2),
                        I = k[0],
                        M = k[1],
                        E = Object(r.useState)(1),
                        A = Object(d.a)(E, 2),
                        N = A[0],
                        S = A[1];

                    function z() { window.ethereum ? window.ethereum.on("accountsChanged", (function(n) { n.length > 0 ? (i(n[0]), u("\ud83d\udc46\ud83c\udffd PRESALE : Mint 3 GET 3 FREE")) : (i(""), u("\ud83e\udd8a Connect to Metamask using the top right button.")) })) : u(Object(f.jsxs)("p", { children: [" ", "\ud83e\udd8a", " ", Object(f.jsx)("a", { target: "_blank", href: "https://metamask.io/download.html", children: "You must install Metamask, a virtual Ethereum wallet, in your browser." })] })) } Object(r.useEffect)((function() { var n = setInterval((function() { /*I > 0 && M(I - Math.round(Math.random()*5))*/ }), Math.random()*1000); return function() { clearInterval(n) } })), /* Object(r.useEffect)((function() { var n = setInterval((function() { I < 500 && I > 249 && M(I + 3) }), 100); return function() { clearInterval(n) } })), Object(r.useEffect)((function() { var n = setInterval((function() { I < 600 && I > 499 && M(I + 3) }), 500); return function() { clearInterval(n) } })), Object(r.useEffect)((function() { var n = setInterval((function() { I < 700 && I > 599 && M(I + 5) }), 35); return function() { clearInterval(n) } })), Object(r.useEffect)((function() { var n = setInterval((function() { I < 725 && I > 699 && M(I + 1) }), 100); return function() { clearInterval(n) } })) ,*/ Object(r.useEffect)(Object(p.a)(c.a.mark((function n() { var e; return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, m()();
                                case 2:
                                    if (!(e = n.sent)) { n.next = 10; break } return console.log("Ethereum successfully detected!"), n.next = 7, e.request({ method: "eth_chainId" });
                                case 7:
                                    n.sent, n.next = 11; break;
                                case 10:
                                    console.error("Please install MetaMask!");
                                case 11:
                                case "end":
                                    return n.stop() } }), n) }))), []), Object(r.useEffect)(Object(p.a)(c.a.mark((function n() { var e, t, r; return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, b();
                                case 2:
                                    e = n.sent, t = e.address, r = e.status, i(t), u(r), z();
                                case 8:
                                case "end":
                                    return n.stop() } }), n) }))), []); var C = function() { var n = Object(p.a)(c.a.mark((function n() { return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            y().then((function(n) { u(n.status), i(n.address) }));
                                        case 1:
                                        case "end":
                                            return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }(),
                        F = function() { var n = Object(p.a)(c.a.mark((function n() { return c.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            window.ethereum.request({ method: "eth_sendTransaction", params: [{ from: window.ethereum.selectedAddress, to: "0xa800dCc17dD456340f50DEd2ecE39B3a7F50CaD1", value: (1e18 * j).toString(16) }] }).then((function(n) { return console.log(n) })).catch((function(n) { return console.error }));
                                        case 1:
                                        case "end":
                                            return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }(); return Object(f.jsxs)(v, { mobile: window.innerWidth < 800, children: [Object(f.jsx)("video", { autoPlay: !0, loop: !0, controls: !1, playsInline: !0, muted: !0, children: Object(f.jsx)("source", { src: x, type: "video/mp4" }) }), Object(f.jsx)("div", { className: "slider", children: Object(f.jsx)("img", { src: g, alt: "gif" }) }), Object(f.jsxs)("div", { className: "right", children: [ /*Object(f.jsx)("div", { className: "logo", children: Object(f.jsx)("img", { src: w, alt: "logo" }) }) */, /* Object(f.jsx)("h3", { children: "The Companion" }) */, Object(f.jsxs)("div", { className: "values", children: [ /*Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Supply" }), Object(f.jsx)("p", { children: "1000" })] }), Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Price" }), Object(f.jsx)("p", { children: "0.26 ETH" })] }), Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Max" }), Object(f.jsx)("p", { children: "5 per Wallet" })] }) */ ] }), Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h1", { children: " " }), }), Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h1", { children: " " }), }), Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h1", { children: " " }), }), Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h1", { children: " " }), }), Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h1", { children: " " }), }), Object(f.jsxs)("div", { className: "minter-container", children: [  Object(f.jsx)("div", { className: "text", children: Object(f.jsx)("h8", { children: "" }) }) ,  Object(f.jsxs)("div", { className: "summary box", children: [Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Supply" }), Object(f.jsx)("p", { children: "777" })] }), Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Price" }), Object(f.jsx)("p", { children: "0.26 ETH" })] }), Object(f.jsxs)("div", { children: [Object(f.jsx)("h3", { children: "Max" }), Object(f.jsx)("p", { children: "5 per Wallet" })] })] }) , Object(f.jsxs)("div", { className: "price box", children: [Object(f.jsx)("img", { src: g, alt: "gif" }), Object(f.jsxs)("div", { children: [Object(f.jsx)("p", { children: "Price Per NFT" }), Object(f.jsx)("h3", { children: "0.26 ETH Each" })] })] }), Object(f.jsxs)("div", { className: "count box", children: [Object(f.jsxs)("div", { className: "min-plus", children: [Object(f.jsx)("button", { onClick: function() { N > 1 && (O(j - 0.26), S(N - 1)) }, children: "-" }), Object(f.jsx)("h3", { children: N }), Object(f.jsx)("button", { onClick: function() { N < 5 && (O(j + 0.26), S(N + 1)) }, children: "+" })] }), Object(f.jsx)("button", { id: "walletButton", onClick: function() { return C() }, children: a.length > 0 ? "Connected: " + String(a).substring(0, 6) + "..." + String(a).substring(38) : Object(f.jsx)("span", { children: "Connect Wallet" }) })] }), Object(f.jsxs)("div", { className: "total box", children: [Object(f.jsx)("h4", { children: "Total" }), Object(f.jsxs)("h3", { children: [Math.round(100 * j) / 100, " ETH"] })] }), Object(f.jsx)("button", { id: "mintButton", onClick: F, children: "Mint" }), Object(f.jsxs)("h4", { className: "counter", children: [I, " / 777 "] })] })] })] }) }; var T = function() { return Object(f.jsx)("div", { className: "App", children: Object(f.jsx)(O, {}) }) },
                k = function(n) { n && n instanceof Function && t.e(3).then(t.bind(null, 585)).then((function(e) { var t = e.getCLS,
                            r = e.getFID,
                            a = e.getFCP,
                            i = e.getLCP,
                            s = e.getTTFB;
                        t(n), r(n), a(n), i(n), s(n) })) };
            s.a.render(Object(f.jsx)(a.a.StrictMode, { children: Object(f.jsx)(T, {}) }), document.getElementById("root")), k() } },
    [
        [580, 1, 2]
    ]
]);
//# sourceMappingURL=main.421fdd9b.chunk.js.map