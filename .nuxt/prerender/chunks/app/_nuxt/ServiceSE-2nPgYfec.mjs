import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './service-1-cuLn2F_7.mjs';
import { _ as _imports_0$1 } from './service-2-cs_6HRf9.mjs';
import { _ as _imports_0$2 } from './service-3-WjbJiV9N.mjs';
import { _ as _imports_0$3 } from './service-4-UyLq7Y5o.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-shape"></div><div class="bg bg-pattern-1"></div><div class="auto-container"><div class="sec-title light"><div class="row"><div class="col-lg-7"><span class="sub-title">V\xC5RA TJ\xC4NSTER</span><h2>Tillsammans Bygger Vi Framtiden</h2></div><div class="col-lg-5"><div class="text">Utforska v\xE5ra tj\xE4nster</div></div></div></div><div class="row"><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-web-development"></i><h5 class="title">Webbutveckling <br> \xA0</h5></div><div class="hover-content"><i class="icon flaticon-web-development"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "website-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Webbutveckling <br${_scopeId}> \xA0`);
      } else {
        return [
          createTextVNode("Webbutveckling "),
          createVNode("br"),
          createTextVNode(" \xA0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Uppt\xE4ck v\xE5ra omfattande webbapputvecklingstj\xE4nster...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-design"></i><h5 class="title">Grafisk <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-design"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "graphic-design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Grafisk <br${_scopeId}>Design`);
      } else {
        return [
          createTextVNode("Grafisk "),
          createVNode("br"),
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">Vi \xE4r glada att kunna tillhandah\xE5lla en professionell grafisk designtj\xE4nster som s\xF6ml\xF6st...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-megaphone"></i><h5 class="title">UI / UX <br>Design</h5></div><div class="hover-content"><i class="icon flaticon-megaphone"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "ui-ux-design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`UI / UX <br${_scopeId}>Design`);
      } else {
        return [
          createTextVNode("UI / UX "),
          createVNode("br"),
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">P\xE5b\xF6rja er resa med v\xE5ra professionella UI / UX tj\xE4nster d\xE4r anv\xE4ndaren \xE4r i fokus...</div></div></div></div><div class="service-block col-lg-3 col-md-6 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div><div class="content-box"><i class="icon flaticon-visitor"></i><h5 class="title">Mobilapplikationer <br>\xA0</h5></div><div class="hover-content"><i class="icon flaticon-visitor"></i><h5 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "mobile-apps-development" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mobilapplikationer <br${_scopeId}>\xA0`);
      } else {
        return [
          createTextVNode("Mobilapplikationer "),
          createVNode("br"),
          createTextVNode("\xA0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="text">F\xF6rvandla er mobila upplevelse med v\xE5ra s\xF6ml\xF6sa mobilapputvecklingstj\xE4nster...</div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/ServiceSE.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ServiceSE-2nPgYfec.mjs.map
