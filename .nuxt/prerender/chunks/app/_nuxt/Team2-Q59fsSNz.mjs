import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5 } from './layal-53PPdohT.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section pt-0 pb-0" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">meet our team members</span><h2>Meet our professional team <br>behind the success</h2></div><div class="row"><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms"><div class="inner-box"><div class="info-box"><h4 class="name"> Hassan M Barbour </h4><span class="designation">co-founder <br> CTO</span></div><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div></div></div><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp"><div class="inner-box"><div class="info-box"><h4 class="name"> Ibrahim Abdulaziz </h4><span class="designation">founder <br>CEO</span></div><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div></div></div><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms"><div class="inner-box"><div class="info-box"><h4 class="name"> Mohammad H Taresh </h4><span class="designation">co-founder<br> \xA0</span></div><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure></div></div></div><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp"><div class="inner-box"><div class="info-box"><h4 class="name"> Ghadir Alshomari </h4><span class="designation">Senior Web Developer</span></div><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div></div></div><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms"><div class="inner-box"><div class="info-box"><h4 class="name"> Aya Al Halabi </h4><span class="designation">Senior Web Developer</span></div><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_4)} alt=""></figure></div></div></div><div class="team-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms"><div class="inner-box"><div class="info-box"><h4 class="name"> Layal Ballan </h4><span class="designation">Graphic Designer</span></div><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_5)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Team2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Team2-Q59fsSNz.mjs.map
