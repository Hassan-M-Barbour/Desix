import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./about-2-YbPt-nwF.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-7" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 order-2 wow fadeInRight"><div class="inner-column"><div class="sec-title"><span class="sub-title">LÄR KÄNNA OSS</span><h2>Förhöj er digitala upplevelse med våra banbrytande mjukvarulösningar </h2><div class="text"> På ROSETECH är vi mycket mer än bara ett mjukvaruutvecklingsföretag; vi är innovatörer och mästare på digital excellens. Vi vet att i dagens snabba och ständigt skiftande digitala landskap är er framgång beroende av effektiviteten hos era mjukvarulösningar. Det är där vi kommer in - för att tillsammans med er förverkliga era visioner till konkreta, skräddarsydda och kraftfulla lösningar. </div></div><div class="info-box"><div class="inner"><i class="icon flaticon-targeted-marketing"></i><h5 class="title">Ledare inom mjukvaruutveckling</h5><div class="text">Vi säkerställer att vårt omfattande utbud av utvecklingstjänster är helt rätt beslut för ert företag, oavsett storlek.</div></div></div><div class="info-box"><div class="inner"><i class="icon flaticon-diplomat"></i><h5 class="title">Expertutvecklare</h5><div class="text"> Vårt team av erfarna utvecklare har kompetens inom en rad olika programmeringsspråk och ramverk, vilket gör det möjligt för oss att skapa skräddarsydda lösningar för era specifika behov. </div></div></div><div class="other-info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Upptäck Mer</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Upptäck Mer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="image-column col-lg-6 wow fadeInLeft"><div class="image-box"><span class="icon-dots bounce-y"></span><span class="icon-circle zoom-one"></span><figure class="image-1 wow fadeIn"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><figure class="image-2 wow fadeIn" data-wow-delay="600ms"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><div class="exp-box"><div class="inner"><i class="icon flaticon-promotion"></i><span class="count">Flera</span><div class="text">Års Erfarenhet</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/AboutSE.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=AboutSE-emiZDD-A.js.map
