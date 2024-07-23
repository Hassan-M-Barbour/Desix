import { _ as __nuxt_component_0 } from "./PageTitleSE-A5S6cQtO.js";
import { _ as __nuxt_component_1 } from "./ServiceSE-2nPgYfec.js";
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
import "./service-1-cuLn2F_7.js";
import "./service-2-cs_6HRf9.js";
import "./service-3-WjbJiV9N.js";
import "./service-4-UyLq7Y5o.js";
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0;
      const _component_SectionsHome1ServiceSE = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "Tjänster" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1ServiceSE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=services-6dlosLI8.js.map
