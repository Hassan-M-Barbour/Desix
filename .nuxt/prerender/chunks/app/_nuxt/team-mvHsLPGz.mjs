import { _ as __nuxt_component_0 } from './PageTitleSE-A5S6cQtO.mjs';
import { _ as __nuxt_component_1 } from './Team2SE-qnE5bN8A.mjs';
import { useSSRContext } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-kpaqSJk0.mjs';
import 'file://C:/projects/desix/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file://C:/projects/desix/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/desix/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/desix/node_modules/defu/dist/defu.mjs';
import 'file://C:/projects/desix/node_modules/vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/projects/desix/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/projects/desix/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/klona/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/ohash/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/projects/desix/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/projects/desix/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/projects/desix/node_modules/pathe/dist/index.mjs';
import './layal-53PPdohT.mjs';
import '../../renderer.mjs';
import 'file://C:/projects/desix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/projects/desix/node_modules/devalue/index.js';
import 'file://C:/projects/desix/node_modules/@unhead/ssr/dist/index.mjs';

const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0;
      const _component_SectionsInnerpagesTeam2SE = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "Team" }, null, _parent));
      _push(`<br><br>`);
      _push(ssrRenderComponent(_component_SectionsInnerpagesTeam2SE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=team-mvHsLPGz.mjs.map
