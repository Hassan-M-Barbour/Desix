import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './news-details-1-ftZV_1rG.mjs';
import { _ as _imports_1, a as _imports_3 } from './news-3-PMzgSBs0.mjs';
import { _ as _imports_2 } from './news-2-HR0ydR-i.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-8 col-lg-7"><div class="blog-details__left"><div class="blog-details__img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="blog-details__date"><span class="day">28</span><span class="month">Aug</span></div></div><div class="blog-details__content"><ul class="list-unstyled blog-details__meta"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-user-circle"${_scopeId}></i> Admin`);
      } else {
        return [
          createVNode("i", { class: "fas fa-user-circle" }),
          createTextVNode(" Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Google\u2019s trying to make waves with Gemini, its flagship suite of generative AI models, apps and services. So what\u2019s Google Gemini, exactly? How can you use it? And how does Gemini stack up to the competition? To make it easier to keep up with the latest Gemini developments, we\u2019ve put together this handy guide, which we\u2019ll keep updated as new Gemini models, features and news about Google\u2019s plans for Gemini are released. </p><h3 class="blog-details__title">What is Gemini?</h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Gemini is Google\u2019s long-promised, next-gen generative AI model family, developed by Google\u2019s AI research labs DeepMind and Google Research. It comes in four flavors: </p><ul style="${ssrRenderStyle({ "padding-left": "2rem" })}"><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Ultra, the most performant Gemini model. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Pro, a lightweight alternative to Ultra. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Flash, a speedier, \u201Cdistilled\u201D version of Pro. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Nano, two small models \u2014 Nano-1 and the more capable Nano-2 \u2014 meant to run offline on mobile devices. </li></ul><p style="${ssrRenderStyle({ "text-align": "justify" })}"> All Gemini models were trained to be natively multimodal \u2014 in other words, able to work with and analyze more than just text. Google says that they were pre-trained and fine-tuned on a variety of public, proprietary and licensed audio, images and videos, a large set of codebases and text in different languages. This sets Gemini apart from models such as Google\u2019s own LaMDA, which was trained exclusively on text data. LaMDA can\u2019t understand or generate anything beyond text (e.g., essays, email drafts), but that isn\u2019t necessarily the case with Gemini models. We\u2019ll note here that the ethics and legality of training models on public data, in some cases without the data owners\u2019 knowledge or consent, are murky indeed. Google has an AI indemnification policy to shield certain Google Cloud customers from lawsuits should they face them, but this policy contains carve-outs. Proceed with caution, particularly if you\u2019re intending on using Gemini commercially. </p><h3 class="blog-details__title"> What\u2019s the difference between the Gemini apps and Gemini models? </h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Google, proving once again that it lacks a knack for branding, didn\u2019t make it clear from the outset that Gemini is separate and distinct from the Gemini apps on the web and mobile (formerly Bard). \u2014 Gemini Ultra (with Gemini Advanced, see below) and Gemini Pro so far \u2014 Think of them as front ends for Google\u2019s generative AI, analogous to OpenAI\u2019s ChatGPT and Anthropic\u2019s Claude family of apps. </p><h3 class="blog-details__title"> Gemini in Gmail, Docs, Chrome, dev tools and more </h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> The Gemini apps aren\u2019t the only means of recruiting Gemini models\u2019 assistance with tasks. Slowly but surely, Gemini-imbued features are making their way into staple Google apps and services like Gmail and Google Docs. To take advantage of most of these, you\u2019ll need the Google One AI Premium Plan. Technically a part of Google One, the AI Premium Plan costs $20 and provides access to Gemini in Google Workspace apps like Docs, Slides, Sheets and Meet. It also enables what Google calls Gemini Advanced, which brings Gemini Ultra to the Gemini apps plus support for analyzing and answering questions about uploaded files. </p></div></div></div><div class="col-xl-4 col-lg-5"><div class="sidebar"><div class="sidebar__single sidebar__search"></div><div class="sidebar__single sidebar__post"><h3 class="sidebar__title">Latest Posts</h3><ul class="sidebar__post-list list-unstyled"><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "what-is-google-gemini-ai" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Google Gemini: Everything you need to know`);
      } else {
        return [
          createTextVNode("Google Gemini: Everything you need to know")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "content-strategy-examples" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3 Unique Content Strategy Examples`);
      } else {
        return [
          createTextVNode("3 Unique Content Strategy Examples")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "what-are-keywords" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`What Are Keywords? How to Use Them for SEO`);
      } else {
        return [
          createTextVNode("What Are Keywords? How to Use Them for SEO")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Newsdetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Newsdetails-gQCD_SSM.mjs.map
