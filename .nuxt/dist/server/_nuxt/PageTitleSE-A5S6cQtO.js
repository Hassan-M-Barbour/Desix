import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  name: "PageTitleSE",
  props: {
    title: {
      type: String
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "page-title",
    style: { "background-image": "url(/images/background/page-title.jpg)" }
  }, _attrs))}><div class="auto-container"><div class="title-outer text-center"><h1 class="title">${ssrInterpolate($props.title)}</h1><ul class="page-breadcrumb"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Hem`);
      } else {
        return [
          createTextVNode("Hem")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sidor`);
      } else {
        return [
          createTextVNode("Sidor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>${ssrInterpolate($props.title)}</li></ul></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/PageTitleSE.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=PageTitleSE-A5S6cQtO.js.map
