import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1 } from './about-2-YbPt-nwF.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-7" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 order-2 wow fadeInRight"><div class="inner-column"><div class="sec-title"><span class="sub-title">L\xC4R K\xC4NNA OSS</span><h2>F\xF6rh\xF6j er digitala upplevelse med v\xE5ra banbrytande mjukvarul\xF6sningar </h2><div class="text"> P\xE5 ROSETECH \xE4r vi mycket mer \xE4n bara ett mjukvaruutvecklingsf\xF6retag; vi \xE4r innovat\xF6rer och m\xE4stare p\xE5 digital excellens. Vi vet att i dagens snabba och st\xE4ndigt skiftande digitala landskap \xE4r er framg\xE5ng beroende av effektiviteten hos era mjukvarul\xF6sningar. Det \xE4r d\xE4r vi kommer in - f\xF6r att tillsammans med er f\xF6rverkliga era visioner till konkreta, skr\xE4ddarsydda och kraftfulla l\xF6sningar. </div></div><div class="info-box"><div class="inner"><i class="icon flaticon-targeted-marketing"></i><h5 class="title">Ledare inom mjukvaruutveckling</h5><div class="text">Vi s\xE4kerst\xE4ller att v\xE5rt omfattande utbud av utvecklingstj\xE4nster \xE4r helt r\xE4tt beslut f\xF6r ert f\xF6retag, oavsett storlek.</div></div></div><div class="info-box"><div class="inner"><i class="icon flaticon-diplomat"></i><h5 class="title">Expertutvecklare</h5><div class="text"> V\xE5rt team av erfarna utvecklare har kompetens inom en rad olika programmeringsspr\xE5k och ramverk, vilket g\xF6r det m\xF6jligt f\xF6r oss att skapa skr\xE4ddarsydda l\xF6sningar f\xF6r era specifika behov. </div></div></div><div class="other-info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Uppt\xE4ck Mer</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Uppt\xE4ck Mer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="image-column col-lg-6 wow fadeInLeft"><div class="image-box"><span class="icon-dots bounce-y"></span><span class="icon-circle zoom-one"></span><figure class="image-1 wow fadeIn"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><figure class="image-2 wow fadeIn" data-wow-delay="600ms"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><div class="exp-box"><div class="inner"><i class="icon flaticon-promotion"></i><span class="count">Flera</span><div class="text">\xC5rs Erfarenhet</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/AboutSE.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AboutSE-emiZDD-A.mjs.map
