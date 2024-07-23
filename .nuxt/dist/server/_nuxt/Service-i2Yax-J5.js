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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-shape"></div><div class="bg bg-pattern-1"></div><div class="auto-container"><div class="sec-title light"><div class="row"><div class="col-lg-7"><span class="sub-title">our services</span><h2>Let&#39;s Build the Future Together</h2></div><div class="col-lg-5"><div class="text">Explore what services we’re offering</div></div></div></div><div class="row"><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-web-development"></i><h5 class="title">Web Applications <br>development</h5></div><div class="hover-content"><i class="icon flaticon-web-development"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "website-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Web Applications <br${_scopeId}>Development`);
      } else {
        return [
          createTextVNode("Web Applications "),
          createVNode("br"),
          createTextVNode("Development")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Experience comprehensive web app development services ...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-design"></i><h5 class="title">Graphic <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-design"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "graphic-design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Graphic <br${_scopeId}>Design`);
      } else {
        return [
          createTextVNode("Graphic "),
          createVNode("br"),
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">We are pleased to provide a professional graphic design services that seamlessly...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-megaphone"></i><h5 class="title">UI / UX <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-megaphone"></i><h5 class="title">`);
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
  _push(`</h5><div class="text">Embark on a user-centric journey with our professional UI/UX services....</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-visitor"></i><h5 class="title">Mobile <br>applications</h5></div><div class="hover-content"><i class="icon flaticon-visitor"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "mobile-apps-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mobile <br${_scopeId}>Applictions`);
      } else {
        return [
          createTextVNode("Mobile "),
          createVNode("br"),
          createTextVNode("Applictions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Transform your mobile presence with our seamless mobile app development services....</div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=Service-i2Yax-J5.js.map
