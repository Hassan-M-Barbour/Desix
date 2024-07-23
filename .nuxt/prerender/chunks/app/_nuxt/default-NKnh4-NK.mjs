import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_1$1, b as __nuxt_component_2$1 } from './Footer1-DVlaCZ_J.mjs';
import { mergeProps, useSSRContext, ref, onUnmounted, withCtx, createTextVNode, createVNode } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_2, a as _imports_0 } from './BackToTop-Km4QQZ62.mjs';
import { _ as _imports_1 } from './logo-7mFUR9zJ.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/projects/desix/node_modules/ufo/dist/index.mjs';
import '../../renderer.mjs';
import 'file://C:/projects/desix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/projects/desix/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/devalue/index.js';
import 'file://C:/projects/desix/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/projects/desix/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/desix/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/projects/desix/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/klona/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/defu/dist/defu.mjs';
import 'file://C:/projects/desix/node_modules/ohash/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/projects/desix/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/projects/desix/node_modules/pathe/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/desix/node_modules/vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js';

const _sfc_main$1 = {
  __name: "Header1",
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
      const _component_LayoutMenu = __nuxt_component_1$1;
      const _component_LayoutMobileMenu = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["main-header header-style-one", { "moblie-search-active": isSearch.value }]
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
      _push(`</li><li><i class="fa fa-map-marker"></i>RoseTech AB, F\xF6retagsv\xE4gen 10, P.O. 227 61 Lund</li></ul></div><div class="top-right"><ul class="useful-links"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/profile.php?id=61558032923218",
        target: "_blank"
      }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.instagram.com/ROSETECH2/",
        target: "_blank"
      }, {
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/in/rosetech-solutions-71b814301/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-linkedin"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-linkedin" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><div class="header-lower"><div class="inner-container"><div class="main-box"><div class="logo-box"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nav-outer"><nav class="nav main-menu">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav></div><div class="outer-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tel:+46 7 35 35 34 34",
        class: "info-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="icon lnr-icon-phone-handset"${_scopeId}></i><small${_scopeId}>Call Anytime</small> +46 7 35 35 34 34 `);
          } else {
            return [
              createVNode("i", { class: "icon lnr-icon-phone-handset" }),
              createVNode("small", null, "Call Anytime"),
              createTextVNode(" +46 7 35 35 34 34 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div><div class="mobile-menu"><div class="menu-backdrop"></div><nav class="menu-box"><div class="upper-box"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title="RoseTec AB"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: "RoseTec AB"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="close-btn"><i class="icon fa fa-times"></i></div></div>`);
      _push(ssrRenderComponent(_component_LayoutMobileMenu, null, null, _parent));
      _push(`<ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Call Now</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+46 7 35 35 34 34" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+46 7 35 35 34 34`);
          } else {
            return [
              createTextVNode("+46 7 35 35 34 34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Send Email</span>`);
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
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Fri 8:00 - 17:00, Saturday ,Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/profile.php?id=61558032923218",
        target: "_blank"
      }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.instagram.com/ROSETECH2/",
        target: "_blank"
      }, {
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/in/rosetech-solutions-71b814301/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-linkedin"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-linkedin" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><div class="${ssrRenderClass([{ "fixed-header animated slideInDown": scroll.value }, "sticky-header"])}"><div class="auto-container"><div class="inner-container"><div class="logo">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader1 = __nuxt_component_0;
  const _component_LayoutFooter1 = __nuxt_component_1;
  const _component_ElementsBackToTop = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader1, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-NKnh4-NK.mjs.map
