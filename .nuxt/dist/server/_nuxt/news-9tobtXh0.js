import { _ as __nuxt_component_0 } from "./PageTitle-hN5-99eD.js";
import { _ as __nuxt_component_1 } from "./Blog-2ulY7AM9.js";
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
import "./news-3-PMzgSBs0.js";
import "./content-strategy-frq9L_et.js";
const _sfc_main = {
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0;
      const _component_SectionsHome1Blog = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "News" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Blog, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/en/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=news-9tobtXh0.js.map
