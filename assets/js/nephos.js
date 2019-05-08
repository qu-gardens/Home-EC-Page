/*var _0x376d = ["use strict", "length", ".navbar-burger", "click", "is-active", "toggleClass", "hasClass", ".navbar-menu", "removeClass", "addClass", "on", ".pageloader", "load", ".infraloader", "replace", ".has-background-image", "data-background", "attr", "background-image", "url(", ")", "css", "each", ".slider-wrapper", "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "slick", ".fullscreen-slick", ".is-carousel", "matches", "(max-width: 767px)", "matchMedia", "popover-removed", "has-simple-popover", ".has-simple-popover", ".popover-removed", "resize", "has-popover-top", ".has-popover-top", "popover-complex-removed", ".popover-complex-removed", "active", ".menu-toggle .icon-box-toggle", ".category-quickview", ".hamburger-btn", ".icon-menu li a.is-active", ".icon-menu li a", ".search-overlay", "is-opened is-hidden", "is-hidden", "#close-search", "is-inactive", ".search-input-wrapper", ".search-input-wrapper .control", "#open-search", "is-inactive is-hidden", "is-opened", "", "val", "input", "siblings", "#clear-search", ".cart-quickview, .filters-quickview", "dismissed", ".menu-fab", ".shop-quickview", "#open-shop", ".shop-quickview, #open-shop", "#close-shop-sidebar", ".shop-quickview, .cart-quickview", ".filters-quickview", "#open-filters", ".filters-quickview, #open-filters", "#close-filters-sidebar", ".shop-quickview, .filters-quickview", ".cart-quickview", "#open-cart", ".cart-quickview, #open-cart", "#close-cart-sidebar", ".price-range-wrapper", ".input-range", ".range-value", "$0", " ", "-", "$", "value", "html", "is-active gelatine", "success-toast", "fa fa-heart-o", "Successfuly removed from Wishlist", "#fff", "#FF7273", "#444F60", "bottomRight", "fadeInUp", "show", "fa fa-heart", "Successfuly added to Wishlist", ".flat-card .actions .like svg, .sidebar-whishlist svg", "fa fa-shopping-cart", "Successfuly removed from Cart", "#0023ff", "fa fa-cart-plus", "Successfuly added to Cart", ".flat-card .actions .add svg", ".cart-button", ".chosen-select-no-single", "100%", "Oops, nothing found!", "95%", "hasOwnProperty", "chosen", ".chosen-select", ".product-action.is-active", ".product-action", "#meta-view, #ratings-view", "#product-view", "#show-product", "#product-view, #ratings-view", "#meta-view", "#show-meta", "#meta-view, #product-view", "#ratings-view", "#show-ratings", "is-liked gelatine", ".product-panel .panel-header .likes svg", ".sidebar-whishlist", "data-modal", "scaleIn", ".box", "find", "#", ".modal-trigger", ".modal", "closest", ".modal-delete", ".inputfile", "querySelectorAll", "nextElementSibling", "innerHTML", "change", "files", "{count}", "data-multiple-caption", "getAttribute", "pop", "\/", "split", "target", "span", "querySelector", "addEventListener", "call", "forEach", "prototype", ".field-input", "[type='file']", "[data-js-label]", "onchange", "onmouseout", "className", " -chosen", "innerText", "stopPropagation", ".dropdown", ".dropdown-trigger", "hover", "top", "webuiPopover", ".shipping-wrapper .mini-card", "gelatine", ".active-indicator", "data-method", "#payment-header, #payment-methods", ".payment-method", "#paypal, #bank-transfer, #cash, #credit-card", ".back-to-methods", "#credit-card", ".active form", ".card-wrapper", "data-tab", "li", ".navtab-content", "children", ".tabs-wrapper", ".tabs li", "#mobile-mode, #sidebar-mode", ".mobile-navbar", "is-mobile-mode", ".shop-wrapper", "is-pushed-mobile", ".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview", "is-full", ".pageloader, .infraloader", "(max-width: 768px)", ".action-bar", "is-mobile", "#avatar-upload", "onload", "src", "result", ".profile-pic", "readAsDataURL", ".file-upload", ".upload-button", "is-loading", "will-upload", ".button.is-loading", "fa fa-check", "Your profile picture has been saved", "#00b289", "topRight", "fadeInDown", ".button.will-upload", "is-disabled", ".card-body", ".flat-card", ".form-switch .is-switch", ".list-card ul li", "data-order", ".order-list-card", "ready"];
console.log(_0x376d);*/
$(document)["ready"](function() {
    "use strict";
    if ($(".navbar-burger")["length"]) {
        $(".navbar-burger")[ "on"]("click", function() {
            $(this)["toggleClass"]("is-active");
            if ($(".navbar-menu")["hasClass"]("is-active")) {
                $(".navbar-menu")["removeClass"]("is-active")
            } else {
                $(".navbar-menu")["addClass"]("is-active")
            }
        })
    };
    if ($(".pageloader")["length"]) {
        $(".pageloader")["toggleClass"]("is-active");
        $(window)[ "on"]("load", function() {
            var _0xfb30x1 = setTimeout(function() {
                $(".pageloader")["toggleClass"]("is-active");
                $( ".infraloader")["toggleClass"]("is-active");
                clearTimeout(_0xfb30x1)
            }, 700)
        })
    };
    feather[ "replace"]();
    if ($( ".has-background-image")["length"]) {
        $( ".has-background-image")["each"](function() {
            var _0xfb30x2 = $(this)[ "attr"]("data-background");
            if (_0xfb30x2 !== undefined) {
                $(this)[ "css"]( "background-image", "url(" + _0xfb30x2 + ")")
            }
        })
    };
    if ($(".slider-wrapper")["length"]) {
        $(".fullscreen-slick")["slick"]({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase:  "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        })
    };
    if ($( ".is-carousel")["length"]) {
        $( ".is-carousel")["slick"]({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase:  "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            arrows: false
        })
    };
    if (window["matchMedia"]( "(max-width: 767px)")["matches"]) {
        $( ".has-simple-popover")["removeClass"]("has-simple-popover")["addClass"]( "popover-removed")
    } else {
        $(".popover-removed")["addClass"]("has-simple-popover")["removeClass"]( "popover-removed")
    };
    $(window)[ "on"]("resize", function() {
        if (window["matchMedia"]( "(max-width: 767px)")["matches"]) {
            $( ".has-simple-popover")["removeClass"]("has-simple-popover")["addClass"]( "popover-removed")
        } else {
            $(".popover-removed")["addClass"]("has-simple-popover")["removeClass"]( "popover-removed")
        }
    });
    if (window["matchMedia"]( "(max-width: 767px)")["matches"]) {
        $(".has-popover-top")["removeClass"]("has-popover-top")["addClass"]( "popover-removed")
    } else {
        $( ".popover-complex-removed")["addClass"]("has-popover-top")["removeClass"]( "popover-complex-removed")
    };
    $(window)[ "on"]("resize", function() {
        if (window["matchMedia"]( "(max-width: 767px)")["matches"]) {
            $(".has-popover-top")["removeClass"]("has-popover-top")["addClass"]( "popover-removed")
        } else {
            $( ".popover-complex-removed")["addClass"]("has-popover-top")["removeClass"]( "popover-complex-removed")
        }
    });
    $(".hamburger-btn")[ "on"]("click", function() {
        $(".menu-toggle .icon-box-toggle")["toggleClass"]("active");
        $(".category-quickview")["toggleClass"]("is-active")
    });
    $(".icon-menu li a")[ "on"]("click", function() {
        $(".icon-menu li a.is-active")["removeClass"]("is-active");
        $(this)["addClass"]("is-active")
    });
    $("#open-search")[ "on"]("click", function() {
        $(".search-overlay")["toggleClass"]("is-active");
        $(this)["addClass"]("is-opened is-hidden");
        $("#close-search")["removeClass"]("is-hidden");
        setTimeout(function() {
            $("#close-search")["removeClass"]( "is-inactive")
        }, 50);
        $(".search-input-wrapper")["removeClass"]("is-hidden");
        setTimeout(function() {
            $( ".search-input-wrapper .control")["addClass"]("is-active")
        }, 300)
    });
    $("#close-search")[ "on"]("click", function() {
        $(".search-overlay")["toggleClass"]("is-active");
        $(this)["addClass"]("is-inactive is-hidden");
        $("#open-search")["removeClass"]("is-hidden");
        setTimeout(function() {
            $("#open-search")["removeClass"]( "is-opened")
        }, 50);
        $( ".search-input-wrapper .control")["removeClass"]("is-active");
        setTimeout(function() {
            $(".search-input-wrapper")["addClass"]("is-hidden")
        }, 150)
    });
    $("#clear-search")[ "on"]("click", function() {
        $(this)["siblings"]("input")[ "val"]("")
    });
    $("#open-shop")[ "on"]("click", function() {
        if ($(".cart-quickview, .filters-quickview")["hasClass"]("is-active")) {
            $(".cart-quickview, .filters-quickview")["removeClass"]("is-active")
        };
        if ($(".menu-fab")["hasClass"]("dismissed")) {
            $(".menu-fab")["removeClass"]("dismissed")
        };
        $(".shop-quickview")["toggleClass"]("is-active")
    });
    $( "#close-shop-sidebar")[ "on"]("click", function() {
        $(".shop-quickview, #open-shop")["toggleClass"]("is-active")
    });
    $("#open-filters")[ "on"]("click", function() {
        if ($( ".shop-quickview, .cart-quickview")["hasClass"]("is-active")) {
            $( ".shop-quickview, .cart-quickview")["removeClass"]("is-active")
        };
        if (!$(".menu-fab")["hasClass"]("dismissed")) {
            $(".menu-fab")["addClass"]("dismissed")
        };
        $(".filters-quickview")["toggleClass"]("is-active")
    });
    $("#close-filters-sidebar")[ "on"]("click", function() {
        $(".menu-fab")["removeClass"]("dismissed");
        $( ".filters-quickview, #open-filters")["toggleClass"]("is-active")
    });
    $("#open-cart")[ "on"]("click", function() {
        if ($( ".shop-quickview, .filters-quickview")["hasClass"]("is-active")) {
            $( ".shop-quickview, .filters-quickview")["removeClass"]("is-active")
        };
        if (!$(".menu-fab")["hasClass"]("dismissed")) {
            $(".menu-fab")["addClass"]("dismissed")
        };
        $( ".cart-quickview")["toggleClass"]("is-active")
    });
    $("#close-cart-sidebar")[ "on"]("click", function() {
        $(".menu-fab")["removeClass"]("dismissed");
        $(".cart-quickview, #open-cart")["toggleClass"]("is-active")
    });
    if ($( ".price-range-wrapper")["length"]) {
        var _0xfb30x3 = $(".input-range"),
            _0xfb30x4 = $(".range-value");
        _0xfb30x4[ "html"]("$0" +  " " +  "-" +  " " +  "$" + _0xfb30x3[ "attr"]( "value"));
        _0xfb30x3[ "on"]("input", function() {
            _0xfb30x4[ "html"]("$0" +  " " +  "-" +  " " +  "$" + this[ "value"])
        })
    };
    $(".flat-card .actions .like svg, .sidebar-whishlist svg")[ "on"]("click", function() {
        $(this)["toggleClass"]("is-active gelatine");
        if (!$(this)["hasClass"]("is-active")) {
            iziToast["show"]({
                class: "success-toast",
                icon:  "fa fa-heart-o",
                title: "Successfuly removed from Wishlist",
                message: "",
                titleColor: "#fff",
                messageColor: "#fff",
                iconColor: "#fff",
                backgroundColor: "#FF7273",
                progressBarColor: "#444F60",
                position:  "bottomRight",
                transitionIn: "fadeInUp",
                close: false,
                timeout: 2000,
                zindex: 99999
            })
        } else {
            iziToast["show"]({
                class: "success-toast",
                icon: "fa fa-heart",
                title: "Successfuly added to Wishlist",
                message: "",
                titleColor: "#fff",
                messageColor: "#fff",
                iconColor: "#fff",
                backgroundColor: "#FF7273",
                progressBarColor: "#444F60",
                position:  "bottomRight",
                transitionIn: "fadeInUp",
                close: false,
                timeout: 2000,
                zindex: 99999
            })
        }
    });
    $(".flat-card .actions .add svg")[ "on"]("click", function() {
        $(this)["toggleClass"]("is-active gelatine");
        if (!$(this)["hasClass"]("is-active")) {
            iziToast["show"]({
                class: "success-toast",
                icon: "fa fa-shopping-cart",
                title:  "Successfuly removed from Cart",
                message: "",
                titleColor: "#fff",
                messageColor: "#fff",
                iconColor: "#fff",
                backgroundColor: "#0023ff",
                progressBarColor: "#444F60",
                position:  "bottomRight",
                transitionIn: "fadeInUp",
                close: false,
                timeout: 2000,
                zindex: 99999
            })
        } else {
            iziToast["show"]({
                class: "success-toast",
                icon: "fa fa-cart-plus",
                title: "Successfuly added to Cart",
                message: "",
                titleColor: "#fff",
                messageColor: "#fff",
                iconColor: "#fff",
                backgroundColor: "#0023ff",
                progressBarColor: "#444F60",
                position:  "bottomRight",
                transitionIn: "fadeInUp",
                close: false,
                timeout: 2000,
                zindex: 99999
            })
        }
    });
    $(".cart-button")[ "on"]("click", function() {
        $(this)["toggleClass"]("is-active gelatine");
        iziToast["show"]({
            class: "success-toast",
            icon: "fa fa-cart-plus",
            title: "Successfuly added to Cart",
            message: "",
            titleColor: "#fff",
            messageColor: "#fff",
            iconColor: "#fff",
            backgroundColor: "#0023ff",
            progressBarColor: "#444F60",
            position:  "bottomRight",
            transitionIn: "fadeInUp",
            close: false,
            timeout: 2000,
            zindex: 99999
        })
    });
    if ($(".chosen-select-no-single")["length"]) {
        var _0xfb30x5 = {
            ".chosen-select": {
                disable_search_threshold: 10,
                width: "100%"
            },
            ".chosen-select-deselect": {
                allow_single_deselect: true,
                width: "100%"
            },
            ".chosen-select-no-single": {
                disable_search_threshold: 100,
                width: "100%"
            },
            ".chosen-select-no-single.no-search": {
                disable_search_threshold: 10,
                width: "100%"
            },
            ".chosen-select-no-results": {
                no_results_text:  "Oops, nothing found!"
            },
            ".chosen-select-width": {
                width: "95%"
            }
        };
        for (var _0xfb30x6 in _0xfb30x5) {
            if (_0xfb30x5[ "hasOwnProperty"](_0xfb30x6)) {
                $(_0xfb30x6)["chosen"](_0xfb30x5[_0xfb30x6])
            }
        }
    };
    if ($(".chosen-select")["length"]) {
        $(".chosen-select")["chosen"]({
            disable_search_threshold: 6,
            width: "100%"
        })
    };
    $(".product-action")[ "on"]("click", function() {
        $( ".product-action.is-active")["removeClass"]("is-active");
        $(this)["addClass"]("is-active")
    });
    $("#show-product")[ "on"]("click", function() {
        $( "#meta-view, #ratings-view")["addClass"]("is-hidden");
        $("#product-view")["removeClass"]("is-hidden")
    });
    $( "#show-meta")[ "on"]("click", function() {
        $( "#product-view, #ratings-view")["addClass"]("is-hidden");
        $("#meta-view")["removeClass"]("is-hidden")
    });
    $("#show-ratings")[ "on"]("click", function() {
        $("#meta-view, #product-view")["addClass"]("is-hidden");
        $( "#ratings-view")["removeClass"]("is-hidden")
    });
    $( ".sidebar-whishlist")[ "on"]("click", function() {
        $(this)["toggleClass"]("is-active");
        $(".product-panel .panel-header .likes svg")["toggleClass"]("is-liked gelatine")
    });
    $( ".modal-trigger")[ "on"]("click", function() {
        var _0xfb30x7 = $(this)[ "attr"]( "data-modal");
        $("#" + _0xfb30x7)["toggleClass"]("is-active")[ "find"]( ".box")["addClass"]( "scaleIn")
    });
    $(".modal-delete")[ "on"]("click", function() {
        $(this)["closest"](".modal")["removeClass"]("is-active")
    });
    var _0xfb30x8 = document["querySelectorAll"]( ".inputfile");
    Array[ "prototype"][ "forEach"][ "call"](_0xfb30x8, function(_0xfb30x9) {
        var _0xfb30xa = _0xfb30x9["nextElementSibling"],
            _0xfb30xb = _0xfb30xa["innerHTML"];
        _0xfb30x9["addEventListener"]( "change", function(_0xfb30xc) {
            var _0xfb30xd = "";
            if (this["files"] && this["files"]["length"] > 1) {
                _0xfb30xd = (this["getAttribute"]("data-multiple-caption") || "")[ "replace"]("{count}", this["files"]["length"])
            } else {
                _0xfb30xd = _0xfb30xc["target"][ "value"]["split"]("/")[ "pop"]()
            };
            if (_0xfb30xd) {
                _0xfb30xa["querySelector"]( "span")["innerHTML"] = _0xfb30xd
            } else {
                _0xfb30xa["innerHTML"] = _0xfb30xb
            }
        })
    });
    var _0xfb30xe = document["querySelectorAll"](".field-input");
    for (var _0xfb30xf = 0, _0xfb30x10 = _0xfb30xe["length"]; _0xfb30xf < _0xfb30x10; _0xfb30xf++) {
        _0xfb30x11(_0xfb30xe[_0xfb30xf])
    };

    function _0xfb30x11(_0xfb30x12) {
        const _0xfb30x13 = _0xfb30x12["querySelector"]("[type='file']");
        const _0xfb30xa = _0xfb30x12["querySelector"]("[data-js-label]");
        _0xfb30x13["onchange"] = _0xfb30x13[ "onmouseout"] = function() {
            if (!_0xfb30x13[ "value"]) {
                return
            };
            var _0xfb30x4 = _0xfb30x13[ "value"][ "replace"](/^.*[\\\/]/, "");
            _0xfb30x12[ "className"] += " -chosen";
            _0xfb30xa[ "innerText"] = _0xfb30x4
        }
    }
    $(".dropdown-trigger")[ "on"]("click", function(_0xfb30x14) {
        _0xfb30x14["stopPropagation"]();
        $(".dropdown")["removeClass"]("is-active");
        $(this)["closest"](".dropdown")["addClass"]("is-active")
    });
    $(window)[ "on"]("click", function(_0xfb30x14) {
        if ($(".dropdown")["hasClass"]("is-active")) {
            $(".dropdown")["removeClass"]("is-active")
        }
    });
    if ($(".has-popover-top")["length"]) {
        $(".has-popover-top")[ "webuiPopover"]({
            trigger:  "hover",
            placement:  "top",
            width: 280,
            animation:  "pop"
        })
    };
    if ($( ".has-simple-popover")["length"]) {
        $( ".has-simple-popover")[ "webuiPopover"]({
            trigger:  "hover",
            animation:  "pop"
        })
    };
    $(".shipping-wrapper .mini-card")[ "on"]("click", function() {
        $(".shipping-wrapper .mini-card")["removeClass"]("is-active");
        $( ".active-indicator")["removeClass"]("gelatine");
        $(this)["addClass"]("is-active");
        $(this)[ "find"]( ".active-indicator")["addClass"]("gelatine")
    });
    $(".payment-method")[ "on"]("click", function() {
        var _0xfb30x15 = $(this)[ "attr"]( "data-method");
        $("#payment-header, #payment-methods")["addClass"]("is-hidden");
        $("#" + _0xfb30x15)["removeClass"]("is-hidden")
    });
    $( ".back-to-methods")[ "on"]("click", function() {
        $("#paypal, #bank-transfer, #cash, #credit-card")["addClass"]("is-hidden");
        $("#payment-header, #payment-methods")["removeClass"]("is-hidden")
    });
    if ($("#credit-card")["length"]) {
        var _0xfb30x16 = new Card({
            form:  ".active form",
            container:  ".card-wrapper"
        })
    };
    $(".tabs li")[ "on"]("click", function() {
        var _0xfb30x17 = $(this)[ "attr"]( "data-tab");
        $(this)["siblings"]( "li")["removeClass"]("is-active");
        $(this)["closest"]( ".tabs-wrapper")["children"](".navtab-content")["removeClass"]("is-active");
        $(this)["addClass"]("is-active");
        $("#" + _0xfb30x17)["addClass"]("is-active")
    });
    if ($("#mobile-mode, #sidebar-mode")["length"]) {
        $("#mobile-mode, #sidebar-mode")[ "on"]("click", function() {
            $(".icon-menu li a.is-active")["removeClass"]("is-active");
            $( ".mobile-navbar")["toggleClass"]("is-active");
            $(".shop-wrapper")["toggleClass"]( "is-mobile-mode");
            $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["toggleClass"]( "is-pushed-mobile");
            $(".pageloader, .infraloader")["toggleClass"]("is-full")
        });
        if (window["matchMedia"]("(max-width: 768px)")["matches"]) {
            $( ".mobile-navbar")["addClass"]("is-active");
            $(".shop-wrapper")["addClass"]( "is-mobile-mode");
            $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["addClass"]( "is-pushed-mobile");
            $(".pageloader, .infraloader")["addClass"]("is-full")
        } else {
            $( ".mobile-navbar")["removeClass"]("is-active");
            $(".shop-wrapper")["removeClass"]( "is-mobile-mode");
            $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["removeClass"]( "is-pushed-mobile");
            $(".pageloader, .infraloader")["removeClass"]("is-full")
        };
        $(window)[ "on"]("resize", function() {
            if (window["matchMedia"]("(max-width: 768px)")["matches"]) {
                $( ".mobile-navbar")["addClass"]("is-active");
                $(".shop-wrapper")["addClass"]( "is-mobile-mode");
                $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["addClass"]( "is-pushed-mobile");
                $(".pageloader, .infraloader")["addClass"]("is-full")
            } else {
                $( ".mobile-navbar")["removeClass"]("is-active");
                $(".shop-wrapper")["removeClass"]( "is-mobile-mode");
                $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["removeClass"]( "is-pushed-mobile");
                $(".pageloader, .infraloader")["removeClass"]("is-full")
            }
        })
    };
    if ($(".action-bar")["length"]) {
        if (window["matchMedia"]("(max-width: 768px)")["matches"]) {
            $(".action-bar")["addClass"]("is-mobile");
            $(".shop-wrapper")["addClass"]( "is-mobile-mode");
            $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["addClass"]( "is-pushed-mobile");
            $(".pageloader, .infraloader")["addClass"]("is-full")
        } else {
            $(".shop-wrapper")["removeClass"]( "is-mobile-mode");
            $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["removeClass"]( "is-pushed-mobile");
            $(".pageloader, .infraloader")["removeClass"]("is-full")
        };
        $(window)[ "on"]("resize", function() {
            if (window["matchMedia"]("(max-width: 768px)")["matches"]) {
                $(".action-bar")["addClass"]("is-mobile");
                $(".shop-wrapper")["addClass"]( "is-mobile-mode");
                $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["addClass"]( "is-pushed-mobile");
                $(".pageloader, .infraloader")["addClass"]("is-full")
            } else {
                $(".shop-wrapper")["removeClass"]( "is-mobile-mode");
                $(".main-sidebar, .shop-quickview, .cart-quickview, .filters-quickview")["removeClass"]( "is-pushed-mobile");
                $(".pageloader, .infraloader")["removeClass"]("is-full")
            }
        })
    };
    if ($("#avatar-upload")["length"]) {
        var _0xfb30x18 = function(_0xfb30x9) {
            if (_0xfb30x9["files"] && _0xfb30x9["files"][0]) {
                var _0xfb30x19 = new FileReader();
                _0xfb30x19["onload"] = function(_0xfb30xc) {
                    $(".profile-pic")[ "attr"]( "src", _0xfb30xc["target"]["result"])
                };
                _0xfb30x19["readAsDataURL"](_0xfb30x9["files"][0])
            }
        };
        $(".file-upload")[ "on"]( "change", function() {
            _0xfb30x18(this)
        });
        $(".upload-button")[ "on"]("click", function() {
            $(".file-upload")["click"]()
        })
    };
    $(".button.will-upload")[ "on"]("click", function() {
        $(this)["removeClass"]("will-upload")["addClass"]("is-loading");
        setTimeout(function() {
            $(".button.is-loading")["removeClass"]("is-loading")["addClass"]("will-upload");
            iziToast["show"]({
                class: "success-toast",
                icon: "fa fa-check",
                title: "Your profile picture has been saved",
                message: "",
                titleColor: "#fff",
                messageColor: "#fff",
                iconColor: "#fff",
                backgroundColor: "#00b289",
                progressBarColor: "#444F60",
                position: "topRight",
                transitionIn:  "fadeInDown",
                close: false,
                timeout: 2000,
                zindex: 99999
            })
        }, 2000)
    });
    $( ".form-switch .is-switch")[ "on"]( "change", function() {
        $(this)["closest"](".flat-card")[ "find"](".card-body")["toggleClass"]( "is-disabled")
    });
    $(".list-card ul li")[ "on"]("click", function() {
        $(".list-card ul li")["removeClass"]("is-active");
        $(this)["addClass"]("is-active");
        var _0xfb30x1a = $(this)[ "attr"]("data-order");
        $(".order-list-card")["addClass"]("is-hidden");
        $("#" + _0xfb30x1a)["removeClass"]("is-hidden")
    })
})