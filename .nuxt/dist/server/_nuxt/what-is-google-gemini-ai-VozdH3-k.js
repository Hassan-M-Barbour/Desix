import { _ as __nuxt_component_0$1 } from "./PageTitleSE-A5S6cQtO.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./news-details-1-ftZV_1rG.js";
import { _ as _imports_1, a as _imports_3 } from "./news-3-PMzgSBs0.js";
import { _ as _imports_2 } from "./news-2-HR0ydR-i.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-8 col-lg-7"><div class="blog-details__left"><div class="blog-details__img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="blog-details__date"><span class="day">28</span><span class="month">Aug</span></div></div><div class="blog-details__content"><ul class="list-unstyled blog-details__meta"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-user-circle"${_scopeId}></i>av Admin`);
      } else {
        return [
          createVNode("i", { class: "fas fa-user-circle" }),
          createTextVNode("av Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Google försöker röra om på marknaden med Gemini, deras främsta kollektion av generativa AI-modeller, appar och tjänster. Men vad är Google Gemini, exakt? Hur kan du använda det och hur klarar sig Gemini i konkurrensen? För att göra det lättare att hänga med i den senaste Gemini-utvecklingen har vi sammanställt den här praktiska guiden som vi kommer att hålla uppdaterad när nya Gemini-modeller, funktioner och nyheter om Googles planer för Gemini släpps. </p><h3 class="blog-details__title">Vad är Gemini?</h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Gemini är Googles sedan länge utlovade, nästa generations generativa AI-modellfamilj, utvecklad av Googles AI-forskningslabb DeepMind och Google Research. Den finns i fyra olika varianter. </p><ul style="${ssrRenderStyle({ "padding-left": "2rem" })}"><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Ultra, den mest presterande Gemini-modellen. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Pro, ett lätt alternativ till Ultra. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Flash, en snabbare, &quot;destillerad&quot; version av Pro. </li><li style="${ssrRenderStyle({ "list-style-type": "disc" })}"> Gemini Nano, som kommer i två små modeller. Nano-1 och den mer kapabla Nano2, båda avsedda för att köras offline på mobila enheter. </li></ul><p style="${ssrRenderStyle({ "text-align": "justify" })}"> Alla Gemini-modeller tränades för att vara inbyggt multimodala, med andra ord, kunna arbeta med och analysera mer än bara text. Google säger att de var förtränade och finjusterade på en mängd olika offentliga, proprietära och licensierade ljud, bilder och videor, en stor uppsättning kodbaser och text på olika språk. Detta skiljer Gemini från modeller som Googles egna LaMDA, som tränades uteslutande på textdata. LaMDA kan inte förstå eller generera något utöver text (t.ex. uppsatser eller e-postutkast), men det är inte nödvändigtvis fallet med Gemini-modeller. Vi kommer att notera här att etiken och legaliteten för utbildningsmodeller på offentlig data, i vissa fall utan dataägarnas vetskap eller samtycke, är minst sagt oklar. Google har en AI-ersättningspolicy för att skydda vissa Google Cloud-kunder från stämningar ifall de skulle ställas inför dem, men denna policy är inte fri från undantag. Vi rekommenderar att du fortsätter med försiktighet, särskilt om du tänker använda Gemini kommersiellt. </p><h3 class="blog-details__title"> Vad är skillnaden mellan Gemini-apparna och Geminimodellerna? </h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Google, som ännu en gång inte uppfyllde förväntnigarna när det kommer till marknadsföring, gjorde det inte klart från början att Gemini är separat och skilt från Gemini-apparna på webben och mobilen (tidigare känt som Bard). (hittills Gemini Ultra (med Gemini Advanced, se nedan) och Gemini Pro) . Se på dem som front ends för Googles generativa AI, analogt med OpenAIs ChatGPT och Anthropics Claude-familj av appar. </p><h3 class="blog-details__title"> Gemini i Gmail, Dokument, Chrome, utvecklarverktyg och mer </h3><p class="blog-details__text-2" style="${ssrRenderStyle({ "text-align": "justify" })}"> Gemini-apparna är inte det enda sättet att rekrytera Gemini-modellers hjälp med uppgifter. Sakta men säkert nästlar sig Gemini-funktioner in i Googles standardtjänster och appar, som Gmail och Google Docs. För att kunna dra nytta av alla dessa funktioner behöver du Google One AI Premium-planen. AI Premium-planen är ett tillägg till Google One och kostar 255kr/månaden vilket ger dig tillgång till Gemini i Google Workspace-appar, som Docs, Slides, Sheets och Meet. Det möjliggör också för det som Google kallar “Gemini Advanced”, vilket Gemini Ultra med Gemini-apparna, samt ger stöd för att analysera och svara på frågor om uppladdade filer. </p></div></div></div><div class="col-xl-4 col-lg-5"><div class="sidebar"><div class="sidebar__single sidebar__search"></div><div class="sidebar__single sidebar__post"><h3 class="sidebar__title">Latest Posts</h3><ul class="sidebar__post-list list-unstyled"><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>av Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "what-is-google-gemini-ai" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vad är Google Gemini Ai?`);
      } else {
        return [
          createTextVNode("Vad är Google Gemini Ai?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>av Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "content-strategy-examples" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Väx ditt företag med rätt innehållsstrategi`);
      } else {
        return [
          createTextVNode("Väx ditt företag med rätt innehållsstrategi")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>av Admin</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "what-are-keywords" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vad är nyckelord och hur kan de hjälpa din webbsida att få mer trafik?`);
      } else {
        return [
          createTextVNode("Vad är nyckelord och hur kan de hjälpa din webbsida att få mer trafik?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/NewsdetailsSE.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "what-is-google-gemini-ai",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitleSE = __nuxt_component_0$1;
      const _component_SectionsInnerpagesNewsdetailsSE = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitleSE, { title: "Vad är Google Gemini Ai?" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesNewsdetailsSE, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/what-is-google-gemini-ai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=what-is-google-gemini-ai-VozdH3-k.js.map
