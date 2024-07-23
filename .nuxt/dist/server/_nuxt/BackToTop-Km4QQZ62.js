import { ref, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _imports_0$1 = "" + __buildAssetsURL("pricing-1.3uT-hU0C.png");
const _imports_0 = "" + __publicAssetsURL("images/logo.png");
const _sfc_main = {
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    const handleScroll = () => {
      const scrollCheck = (void 0).scrollY > 100;
      if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: ["scroll-to-top scroll-to-target", { "d-block": scroll.value }],
        href: "#__nuxt"
      }, _attrs))}><span class="fa fa-angle-up"></span></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/BackToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
export {
  _imports_0 as _,
  __nuxt_component_2 as a,
  _imports_0$1 as b
};
//# sourceMappingURL=BackToTop-Km4QQZ62.js.map
