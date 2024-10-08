import { _ as __nuxt_component_0 } from './PageTitleSE-A5S6cQtO.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import '../server.mjs';
import 'file://C:/projects/desix/node_modules/ofetch/dist/node.mjs';
import 'file://C:/projects/desix/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/desix/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/projects/desix/node_modules/ufo/dist/index.mjs';
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

const _sfc_main$1 = {
  __name: "ContactSE",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const subject = ref("");
    const telephone = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-7 col-lg-6"><div class="sec-title"><span class="sub-title">SKICKA ETT MAIL</span><h3>Skriv g\xE4rna dina funderingar</h3></div><form id="contact_form" name="contact_form" class=""><div class="row"><div class="col-sm-6"><div class="mb-3"><input name="form_name"${ssrRenderAttr("value", unref(name))} class="form-control" type="text" placeholder="Namn" required></div></div><div class="col-sm-6"><div class="mb-3"><input name="form_email"${ssrRenderAttr("value", unref(email))} class="form-control required email" type="email" placeholder="E-post" required></div></div></div><div class="row"><div class="col-sm-6"><div class="mb-3"><input name="form_subject"${ssrRenderAttr("value", unref(subject))} class="form-control required" type="text" placeholder="\xC4mne" required></div></div><div class="col-sm-6"><div class="mb-3"><input name="form_phone"${ssrRenderAttr("value", unref(telephone))} class="form-control" type="text" placeholder="Telefon" required></div></div></div><div class="mb-3"><textarea name="form_message" class="form-control required" rows="7" placeholder="Meddelande" required minlength="8">${ssrInterpolate(unref(message))}</textarea></div><div class="mb-3"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Skicka</span></button><button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">\xC5terst\xE4ll</span></button></div></form></div><div class="col-xl-5 col-lg-6"><div class="contact-details__right"><div class="sec-title"><span class="sub-title">BEH\xD6VER DU HJ\xC4LP?</span><h3>Kontakta oss</h3><div class="text"></div></div><ul class="list-unstyled contact-details__info"><li><div class="icon"><span class="lnr-icon-phone-plus"></span></div><div class="text"><h6>Har du n\xE5gra fr\xE5gor?</h6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+46 7 35 35 34 34" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Ring oss p\xE5</span> +46 7 35 35 34 34`);
          } else {
            return [
              createVNode("span", null, "Ring oss p\xE5"),
              createTextVNode(" +46 7 35 35 34 34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="icon"><span class="lnr-icon-envelope1"></span></div><div class="text"><h6>Maila oss till</h6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:info@rosetech.se" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`info@rosetech.se`);
          } else {
            return [
              createTextVNode("info@rosetech.se")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="icon"><span class="lnr-icon-location"></span></div><div class="text"><h6>Bes\xF6k n\xE4r som helst</h6><span>F\xF6retagsv\xE4gen 10, P.O. 227 61 Lund</span></div></li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/ContactSE.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0;
      const _component_SectionsInnerpagesContactSE = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "Kontakta Oss" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesContactSE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-KybL4NcD.mjs.map
