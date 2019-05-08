/*var _0x42e7 = ["use strict", "length", ".pageloader", "is-active", "toggleClass", "load", ".infraloader", "on", "#navbar-clone", "scrollTop", "addClass", "removeClass", "scroll", ".navbar-burger", "click", "hasClass", ".navbar-menu", "is-dark-mobile", ".navbar", ".typed-hero", "Hello, Iam Nephos ^2000", "Premium UI Kit ^2000", "For Ecommerce ^2000", "replace", "", "pathname", "hostname", "hash", "[name=", "slice", "]", "preventDefault", "top", "offset", "focus", ":focus", "is", "tabindex", "-1", "attr", "animate", "html, body", "[href='#0']", "not", "[href='#']", "a[href*='#']", ".is-title-reveal, .is-feature-reveal ", "sr", ".is-title-reveal", "bottom", "20px", "cubic-bezier(0.215, 0.61, 0.355, 1)", "documentElement", "document", "always", "reveal", ".is-feature-reveal", "innerWidth", "push", "innerHeight", "random", "floor", "#canvas", "transparent", "create", "center", "#fcfcfc", "ellipse", "display", "addChild", "1000", "linear", "remove", "width", "height", "resize", "ready"];
console.log(_0x42e7);*/
$(document)["ready"](function() {
    "use strict";
    if ($(".pageloader")["length"]) {
        $(".pageloader")["toggleClass"]("is-active");
        $(window)["on"]("load", function() {
            var _0xf435x1 = setTimeout(function() {
                $(".pageloader")["toggleClass"]("is-active");
                $(".infraloader")["toggleClass"]("is-active");
                clearTimeout(_0xf435x1)
            }, 700)
        })
    };
    if ($("#navbar-clone")["length"]) {
        $(window)["scroll"](function() {
            var _0xf435x2 = $(window)["scrollTop"]();
            if (_0xf435x2 > 50) {
                $("#navbar-clone")["addClass"]("is-active")
            } else {
                $("#navbar-clone")["removeClass"]("is-active")
            }
        })
    };
    if ($( ".navbar-burger")["length"]) {
        $( ".navbar-burger")["on"]("click", function() {
            $( ".navbar-burger")["toggleClass"]("is-active");
            if ($(".navbar-menu")["hasClass"]("is-active")) {
                $(".navbar-menu")["removeClass"]("is-active");
                $( ".navbar")["removeClass"]("is-dark-mobile")
            } else {
                $(".navbar-menu")["addClass"]("is-active");
                $( ".navbar")["addClass"]("is-dark-mobile")
            }
        })
    };
    var _0xf435x3 = new Typed(".typed-hero", {
        strings: ["Hello, Iam Nephos ^2000", "Premium UI Kit ^2000", "For Ecommerce ^2000"],
        typeSpeed: 45,
        loop: true,
        loopCount: Infinity,
        backSpeed: 20
    });
    feather["replace"]();
    $( "a[href*='#']")["not"]("[href='#']")["not"]("[href='#0']")["on"]("click", function(_0xf435x4) {
        if (location[ "pathname"]["replace"](/^\//, "") == this[ "pathname"]["replace"](/^\//, "") && location["hostname"] == this["hostname"]) {
            var _0xf435x5 = $(this[ "hash"]);
            _0xf435x5 = _0xf435x5["length"] ? _0xf435x5 : $( "[name=" + this[ "hash"]["slice"](1) + "]");
            if (_0xf435x5["length"]) {
                _0xf435x4[ "preventDefault"]();
                $("html, body")["animate"]({
                    scrollTop: _0xf435x5["offset"]()[ "top"]
                }, 550, function() {
                    var _0xf435x6 = $(_0xf435x5);
                    _0xf435x6[ "focus"]();
                    if (_0xf435x6["is"](":focus")) {
                        return false
                    } else {
                        _0xf435x6[ "attr"]( "tabindex",  "-1");
                        _0xf435x6[ "focus"]()
                    }
                })
            }
        }
    });
    if ($(".is-title-reveal, .is-feature-reveal ")["length"]) {
        window["sr"] = ScrollReveal();
        sr["reveal"](".is-title-reveal", {
            origin: "bottom",
            distance: "20px",
            duration: 600,
            delay: 100,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: 1,
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            container: window[ "document"]["documentElement"],
            mobile: true,
            reset: false,
            useDelay: "always",
            viewFactor: 0.2
        });
        sr["reveal"]( ".is-feature-reveal", {
            origin: "bottom",
            distance: "20px",
            duration: 600,
            delay: 100,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            opacity: 0,
            scale: 1,
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            container: window[ "document"]["documentElement"],
            mobile: true,
            reset: true,
            useDelay: "always",
            viewFactor: 0.2
        }, 160)
    };
    var _0xf435x7 = [],
        _0xf435x8 = [];
    for (var _0xf435x9 = 0; _0xf435x9 < $(window)["innerWidth"](); _0xf435x9++) {
        _0xf435x7[ "push"](_0xf435x9)
    };
    for (var _0xf435x9 = 0; _0xf435x9 < $(window)["innerHeight"](); _0xf435x9++) {
        _0xf435x8[ "push"](_0xf435x9)
    };

    function _0xf435xa(_0xf435xb) {
        var _0xf435xc = _0xf435xb[Math[ "floor"](Math["random"]() * _0xf435xb["length"])];
        return _0xf435xc
    }
    var _0xf435xd = oCanvas[ "create"]({
        canvas:  "#canvas",
        background: "transparent",
        fps: 60
    });
    setInterval(function() {
        var _0xf435xe = _0xf435xd["display"]["ellipse"]({
            x: _0xf435xa(_0xf435x7),
            y: _0xf435xa(_0xf435x8),
            origin: {
                x: "center",
                y: "center"
            },
            radius: 0,
            fill: "#fcfcfc",
            opacity: 1
        });
        _0xf435xd["addChild"](_0xf435xe);
        _0xf435xe["animate"]({
            radius: 10,
            opacity: 0
        }, {
            duration: "1000",
            easing: "linear",
            callback: function() {
                this["remove"]()
            }
        })
    }, 250);
    $(window)["resize"](function() {
        _0xf435xd["width"] = $(window)["innerWidth"]();
        _0xf435xd[ "height"] = $(window)["innerHeight"]()
    });
    $(window)["resize"]()
})