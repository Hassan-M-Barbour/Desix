import { _ as __nuxt_component_0$1 } from "./PageTitle-hN5-99eD.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./service-4-UyLq7Y5o.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "vue-recaptcha-v3";
const _sfc_main$1 = {
  __name: "Mobiledevelopment",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      status: false,
      key: 1
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4"><div class="service-sidebar"><div class="sidebar-widget service-sidebar-single"><div class="sidebar-service-list"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "website-development",
        class: "current"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Web Apps Development</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Web Apps Development")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "graphic-design" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Graphic Designing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Graphic Designing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "ui-ux-design" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>UI / UX Designing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "UI / UX Designing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="current">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mobile-apps-development" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Mobile Apps Development</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Mobile Apps Development")
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
      _push(`</div></div></div></div></div><div class="col-xl-8 col-lg-8"><div class="services-details__content"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3 class="mt-4">Mobile Applications Development</h3><p style="${ssrRenderStyle({ "text-align": "justify" })}"> Transform your mobile presence with our seamless mobile app development services. From concept to deployment, our team ensures your mobile application not only meets but exceeds user expectations. Unleash the power of customization and innovation for a truly unique mobile experience. </p><div class="content mt-40"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Mobiledevelopment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "mobile-apps-development",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0$1;
      const _component_SectionsInnerpagesMobiledevelopment = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Mobile Applications Development" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesMobiledevelopment, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/en/mobile-apps-development.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=mobile-apps-development-9TaCtoFf.js.map
