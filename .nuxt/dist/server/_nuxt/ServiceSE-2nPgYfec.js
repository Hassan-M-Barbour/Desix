import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./service-1-cuLn2F_7.js";
import { _ as _imports_0$1 } from "./service-2-cs_6HRf9.js";
import { _ as _imports_0$2 } from "./service-3-WjbJiV9N.js";
import { _ as _imports_0$3 } from "./service-4-UyLq7Y5o.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-shape"></div><div class="bg bg-pattern-1"></div><div class="auto-container"><div class="sec-title light"><div class="row"><div class="col-lg-7"><span class="sub-title">VÅRA TJÄNSTER</span><h2>Tillsammans Bygger Vi Framtiden</h2></div><div class="col-lg-5"><div class="text">Utforska våra tjänster</div></div></div></div><div class="row"><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-web-development"></i><h5 class="title">Webbutveckling <br>  </h5></div><div class="hover-content"><i class="icon flaticon-web-development"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "website-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Webbutveckling <br${_scopeId}>  `);
      } else {
        return [
          createTextVNode("Webbutveckling "),
          createVNode("br"),
          createTextVNode("  ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Upptäck våra omfattande webbapputvecklingstjänster...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-design"></i><h5 class="title">Grafisk <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-design"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "graphic-design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Grafisk <br${_scopeId}>Design`);
      } else {
        return [
          createTextVNode("Grafisk "),
          createVNode("br"),
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Vi är glada att kunna tillhandahålla en professionell grafisk designtjänster som sömlöst...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-megaphone"></i><h5 class="title">UI / UX <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-megaphone"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "ui-ux-design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`UI / UX <br${_scopeId}>Design`);
      } else {
        return [
          createTextVNode("UI / UX "),
          createVNode("br"),
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Påbörja er resa med våra professionella UI / UX tjänster där användaren är i fokus...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-visitor"></i><h5 class="title">Mobilapplikationer <br> </h5></div><div class="hover-content"><i class="icon flaticon-visitor"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "mobile-apps-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mobilapplikationer <br${_scopeId}> `);
      } else {
        return [
          createTextVNode("Mobilapplikationer "),
          createVNode("br"),
          createTextVNode(" ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Förvandla er mobila upplevelse med våra sömlösa mobilapputvecklingstjänster...</div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/ServiceSE.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=ServiceSE-2nPgYfec.js.map
