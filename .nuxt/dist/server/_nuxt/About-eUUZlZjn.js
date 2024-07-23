import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./about-2-YbPt-nwF.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-7" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 order-2 wow fadeInRight"><div class="inner-column"><div class="sec-title"><span class="sub-title">get to know us</span><h2>Elevate Your Digital Experience with Cutting-Edge Software Solutions</h2><div class="text">At ROSETECH, we are not just a software development company; we are architects of innovation, engineers of progress, and creators of digital excellence. We understand that in today&#39;s fast-paced and ever-evolving digital landscape, your success hinges on the efficiency and effectiveness of your software solutions. That&#39;s where we come in – to transform your ideas into seamless, powerful, and intuitive digital experiences.</div></div><div class="info-box"><div class="inner"><i class="icon flaticon-targeted-marketing"></i><h5 class="title">Leading in software development</h5><div class="text">We offer a comprehensive range of development services to meet the needs of businesses of all sizes.</div></div></div><div class="info-box"><div class="inner"><i class="icon flaticon-diplomat"></i><h5 class="title">Expert developers</h5><div class="text">Our team of experienced developers are skilled in various programming languages and frameworks, allowing us to create custom solutions tailored to your specific requirements.</div></div></div><div class="other-info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Discover more</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Discover more")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="image-column col-lg-6 wow fadeInLeft"><div class="image-box"><span class="icon-dots bounce-y"></span><span class="icon-circle zoom-one"></span><figure class="image-1 wow fadeIn"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><figure class="image-2 wow fadeIn" data-wow-delay="600ms"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><div class="exp-box"><div class="inner"><i class="icon flaticon-promotion"></i><span class="count">Tens</span><div class="text">Work Experience</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=About-eUUZlZjn.js.map
