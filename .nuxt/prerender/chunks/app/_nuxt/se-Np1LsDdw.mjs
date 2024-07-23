import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { useSSRContext, mergeProps, ref, onUnmounted, withCtx, createTextVNode, createVNode } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_2$1, a as _imports_0, b as _imports_0$1 } from './BackToTop-Km4QQZ62.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_1 } from './logo-7mFUR9zJ.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))}><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Hem`);
      } else {
        return [
          createTextVNode("Hem")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Om Oss`);
      } else {
        return [
          createTextVNode("Om Oss")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tj\xE4nster`);
      } else {
        return [
          createTextVNode("Tj\xE4nster")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projekt`);
      } else {
        return [
          createTextVNode("Projekt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nyheter`);
      } else {
        return [
          createTextVNode("Nyheter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kontakt`);
      } else {
        return [
          createTextVNode("Kontakt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} width="25"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            width: "25"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Swedish`);
      } else {
        return [
          createTextVNode("Swedish")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/en" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`English`);
      } else {
        return [
          createTextVNode("English")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MenuSE.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "MobileMenuSE",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref({
      status: false,
      key: ""
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navigation clearfix" }, _attrs))}><li class="${ssrRenderClass([{ "current": isActive.value.key === 1 }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hem`);
          } else {
            return [
              createTextVNode("Hem")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Om Oss`);
          } else {
            return [
              createTextVNode("Om Oss")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Team`);
          } else {
            return [
              createTextVNode("Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tj\xE4nster`);
          } else {
            return [
              createTextVNode("Tj\xE4nster")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projekt`);
          } else {
            return [
              createTextVNode("Projekt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nyheter`);
          } else {
            return [
              createTextVNode("Nyheter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontakt`);
          } else {
            return [
              createTextVNode("Kontakt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Swedish`);
          } else {
            return [
              createTextVNode("Swedish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/en" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`English`);
          } else {
            return [
              createTextVNode("English")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MobileMenuSE.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "HeaderSE",
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
      const _component_LayoutMenuSE = __nuxt_component_1$1;
      const _component_LayoutMobileMenuSE = __nuxt_component_2;
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
            _push2(`Hj\xE4lp`);
          } else {
            return [
              createTextVNode("Hj\xE4lp")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontakt`);
          } else {
            return [
              createTextVNode("Kontakt")
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
      _push(ssrRenderComponent(_component_LayoutMenuSE, null, null, _parent));
      _push(`</nav></div><div class="outer-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tel:+46 7 35 35 34 34",
        class: "info-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="icon lnr-icon-phone-handset"${_scopeId}></i><small${_scopeId}>Ring Oss</small> +46 7 35 35 34 34 `);
          } else {
            return [
              createVNode("i", { class: "icon lnr-icon-phone-handset" }),
              createVNode("small", null, "Ring Oss"),
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
      _push(ssrRenderComponent(_component_LayoutMobileMenuSE, null, null, _parent));
      _push(`<ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Ring Oss</span>`);
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
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Maila Oss</span>`);
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
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Maila Oss</span> Mon - Fri 8:00 - 17:00, Saturday ,Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
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
      _push(ssrRenderComponent(_component_LayoutMenuSE, null, null, _parent));
      _push(`</div></nav><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/HeaderSE.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer" }, _attrs))}><div class="bg bg-pattern-6"></div><div class="footer-upper"><div class="auto-container"><div class="row"><div class="contact-info-block col-lg-4 col-md-6"><div class="inner"><i class="icon fa fa-phone-square"></i><span class="sub-title">Ring Oss</span><div class="text">`);
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
  _push(`</div></div></div><div class="contact-info-block col-lg-4 col-md-6"><div class="inner"><i class="icon fa fa-envelope"></i><span class="sub-title">Maila Oss</span><div class="text">`);
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
  _push(`</div></div></div><div class="contact-info-block col-lg-4 col-md-6"><div class="inner"><i class="icon fa fa-map-marker"></i><span class="sub-title">Adress</span><div class="text">RoseTech AB, F\xF6retagsv\xE4gen 10, P.O. 227 61 Lund</div></div></div></div></div></div><div class="widgets-section"><div class="auto-container"><div class="row"><div class="footer-column col-xl-6 col-lg-6"><div class="footer-widget about-widget"><div class="widget-content"><div class="logo">`);
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
  _push(`</div><div class="text">V\xE4lkommen till ROSETECH. Vi tar ditt f\xF6retag till n\xE4sta niv\xE5. </div><ul class="social-icon-two"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.facebook.com/profile.php?id=61558032923218",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
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
  _push(`</li></ul></div></div></div><div class="footer-column col-xl-6 col-lg-6 col-md-12"><div class="widget links-widget"><h5 class="widget-title">Explore</h5><div class="widget-content"><ul class="user-links two-column"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tr\xE4ffa V\xE5rt Team`);
      } else {
        return [
          createTextVNode("Tr\xE4ffa V\xE5rt Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Om Oss`);
      } else {
        return [
          createTextVNode("Om Oss")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vad Vi G\xF6r`);
      } else {
        return [
          createTextVNode("Vad Vi G\xF6r")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
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
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Senaste Nytt`);
      } else {
        return [
          createTextVNode("Senaste Nytt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nya Projekt`);
      } else {
        return [
          createTextVNode("Nya Projekt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kontakt`);
      } else {
        return [
          createTextVNode("Kontakt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div></div></div><div class="footer-bottom"><div class="auto-container"><div class="copyright-text">\xA9 Copyright ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} reserved by ROSETECH</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/FooterSE.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeaderSE = __nuxt_component_0;
  const _component_LayoutFooterSE = __nuxt_component_1;
  const _component_ElementsBackToTop = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeaderSE, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooterSE, null, null, _parent));
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/se.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const se = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { se as default };
//# sourceMappingURL=se-Np1LsDdw.mjs.map
