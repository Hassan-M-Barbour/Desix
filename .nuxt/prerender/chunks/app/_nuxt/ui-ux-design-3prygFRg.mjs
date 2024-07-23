import { _ as __nuxt_component_0 } from './PageTitleSE-A5S6cQtO.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './service-3-WjbJiV9N.mjs';
import '../server.mjs';
import 'file://C:/projects/desix/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/desix/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/desix/node_modules/ufo/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/defu/dist/defu.mjs';
import 'file://C:/projects/desix/node_modules/vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/projects/desix/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/projects/desix/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/klona/dist/index.mjs';
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
import '../../renderer.mjs';
import 'file://C:/projects/desix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/projects/desix/node_modules/devalue/index.js';
import 'file://C:/projects/desix/node_modules/@unhead/ssr/dist/index.mjs';

const _sfc_main$1 = {
  __name: "UiuxSE",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      status: false,
      key: 1
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4"><div class="service-sidebar"><div class="sidebar-widget service-sidebar-single"><div class="sidebar-service-list"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "website-development",
        class: "current"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Webbutveckling</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Webbutveckling")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "graphic-design" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Grafisk Design</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Grafisk Design")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="current">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "ui-ux-design" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>UI / UX Design</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "UI / UX Design")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mobile-apps-development" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Mobilapplikationer</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Mobilapplikationer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="service-details-help"><div class="help-shape-1"></div><div class="help-shape-2"></div><h2 class="help-title">Contact with <br> us for any <br> advice</h2><div class="help-icon"><span class="lnr-icon-phone-handset"></span></div><div class="help-contact"><p>Need help? Talk to an expert</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+46 7 35 35 34 34" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+46735353434`);
          } else {
            return [
              createTextVNode("+46735353434")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="col-xl-8 col-lg-8"><div class="services-details__content"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3 class="mt-4">UI / UX Design</h3><p style="${ssrRenderStyle({ "text-align": "justify" })}"> Ge dig ut p\xE5 en anv\xE4ndarcentrerad resa med v\xE5ra professionella UI/UX-tj\xE4nster. V\xE5r expertis \xE4r s\xF6ml\xF6st integrerad i din webbplats och f\xF6rb\xE4ttrar anv\xE4ndarupplevelsen till en helt ny niv\xE5. Vi tror p\xE5 att skapa gr\xE4nssnitt som inte bara f\xE4ngslar utan ocks\xE5 engagerar, vilket s\xE4kerst\xE4ller att din digitala n\xE4rvaro sticker ut i ett myllrande onlinelandskap. </p><div class="content mt-40"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/UiuxSE.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "ui-ux-design",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0;
      const _component_SectionsInnerpagesUiuxSE = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "UI / UX Design" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesUiuxSE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-ux-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ui-ux-design-3prygFRg.mjs.map
