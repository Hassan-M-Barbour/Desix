import { _ as __nuxt_component_0 } from "./PageTitleSE-A5S6cQtO.js";
import { _ as __nuxt_component_1 } from "./AboutSE-LMgvy-Z_.js";
import { _ as __nuxt_component_1$1 } from "./ServiceSE-2nPgYfec.js";
import { _ as __nuxt_component_1$2 } from "./Team2SE-qnE5bN8A.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-kpaqSJk0.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "vue-recaptcha-v3";
import "./about-2-YbPt-nwF.js";
import "./service-1-cuLn2F_7.js";
import "./service-2-cs_6HRf9.js";
import "./service-3-WjbJiV9N.js";
import "./service-4-UyLq7Y5o.js";
import "./layal-53PPdohT.js";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0;
      const _component_SectionsHome1AboutSE = __nuxt_component_1;
      const _component_SectionsHome1ServiceSE = __nuxt_component_1$1;
      const _component_SectionsInnerpagesTeam2SE = __nuxt_component_1$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "Om Oss" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1AboutSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1ServiceSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesTeam2SE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-kTpmoOkq.js.map
