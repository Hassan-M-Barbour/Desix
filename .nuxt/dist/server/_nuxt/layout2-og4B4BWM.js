import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_1$1 } from "./Footer1-DVlaCZ_J.js";
import { ref, onUnmounted, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0, a as __nuxt_component_2$1 } from "./BackToTop-Km4QQZ62.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "vue-recaptcha-v3";
const _imports_1 = "" + __publicAssetsURL("images/logo-2.png");
const _sfc_main$1 = {
  __name: "Header2",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    const handleScroll = () => {
      const scrollCheck = (void 0).scrollY > 100;
      if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    ref(false);
    const isSearch = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_LayoutMenu = __nuxt_component_1;
      const _component_LayoutMobileMenu = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["main-header header-style-two", { "moblie-search-active": isSearch.value }]
      }, _attrs))}><div class="header-top"><div class="inner-container"><div class="top-left"><ul class="list-style-one"><li><i class="fa fa-envelope"></i> `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:info@rosetech.se" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`info@rosetech.se`);
          } else {
            return [
              createTextVNode("info@rosetech.se")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><i class="fa fa-map-marker"></i> Lund. Sweden</li></ul></div><div class="top-right"><ul class="useful-links"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Help`);
          } else {
            return [
              createTextVNode("Help")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Support`);
          } else {
            return [
              createTextVNode("Support")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><ul class="social-icon-one"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-twitter"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-twitter" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-facebook-square"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-facebook-square" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-pinterest-p"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-pinterest-p" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-instagram"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><div class="header-lower"><div class="inner-container"><div class="main-box"><div class="logo-box"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title="Desix"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: "Desix"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nav-outer"><nav class="nav main-menu">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav></div><div class="outer-box"><button class="ui-btn ui-btn search-btn"><span class="icon lnr lnr-icon-search"></span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tel:+92(8800)9806",
        class: "info-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="icon lnr-icon-phone-handset"${_scopeId}></i><small${_scopeId}>Call Anytime</small> +92 (8800) - 9850 `);
          } else {
            return [
              createVNode("i", { class: "icon lnr-icon-phone-handset" }),
              createVNode("small", null, "Call Anytime"),
              createTextVNode(" +92 (8800) - 9850 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div><div class="mobile-menu"><div class="menu-backdrop"></div><nav class="menu-box"><div class="upper-box"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="close-btn"><i class="icon fa fa-times"></i></div></div>`);
      _push(ssrRenderComponent(_component_LayoutMobileMenu, null, null, _parent));
      _push(`<ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Call Now</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/tel:+92880098670" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+92 (8800) - 98670`);
          } else {
            return [
              createTextVNode("+92 (8800) - 98670")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Send Email</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:help@company.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`help@company.com`);
          } else {
            return [
              createTextVNode("help@company.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-twitter" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-facebook-f" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-pinterest"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-pinterest" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-instagram"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span class="fa fa-times"></span></button><div class="search-inner"><form method="post" action=""><div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..." required=""><button type="submit"><i class="fa fa-search"></i></button></div></form></div></div><div class="${ssrRenderClass([{ "fixed-header animated slideInDown": scroll.value }, "sticky-header"])}"><div class="auto-container"><div class="inner-container"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-outer"><nav class="main-menu"><div class="navbar-collapse show collapse clearfix">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</div></nav><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader2 = __nuxt_component_0;
  const _component_LayoutFooter1 = __nuxt_component_1$1;
  const _component_ElementsBackToTop = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader2, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter1, null, null, _parent));
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  layout2 as default
};
//# sourceMappingURL=layout2-og4B4BWM.js.map
