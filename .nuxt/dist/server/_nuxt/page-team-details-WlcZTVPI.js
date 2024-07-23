import { _ as __nuxt_component_0 } from "./PageTitle-hN5-99eD.js";
import { _ as __nuxt_component_1 } from "./Teamdetails-x5FtLGwl.js";
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
const _sfc_main = {
  __name: "page-team-details",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0;
      const _component_SectionsInnerpagesTeamdetails = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Team Details" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesTeamdetails, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-team-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-team-details-WlcZTVPI.js.map
