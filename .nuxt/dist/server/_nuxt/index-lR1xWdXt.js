import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_0$1, c as _imports_0$2, d as _imports_1$1, e as _imports_2, f as _imports_3, g as _imports_4, h as _imports_5, i as _imports_6, j as _imports_7, k as _imports_0$3 } from "./girl-17ORppLF.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./AboutSE-emiZDD-A.js";
import { _ as __nuxt_component_1$1 } from "./BlogSE-o4U1t2mB.js";
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
import "./about-2-YbPt-nwF.js";
import "./news-3-PMzgSBs0.js";
import "./content-strategy-frq9L_et.js";
const _sfc_main$5 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-slider" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 3e3,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p"
    },
    modules: $setup.modules,
    class: "banner-slider"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="banner-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}><div class="outer-box"${_scopeId2}><div class="auto-container"${_scopeId2}><div class="content-box"${_scopeId2}><h1 data-animation-in="fadeInLeft" data-delay-in="0.2"${_scopeId2}><span class="selected"${_scopeId2}>En Ny</span> Era <br${_scopeId2}> för Teknologi och Design</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/about",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.4",
                class: "theme-btn btn-style-one hover-light mt-20"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Upptäck Mer`);
                  } else {
                    return [
                      createTextVNode("Upptäck Mer")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "banner-slide" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  }),
                  createVNode("div", { class: "outer-box" }, [
                    createVNode("div", { class: "auto-container" }, [
                      createVNode("div", { class: "content-box" }, [
                        createVNode("h1", {
                          "data-animation-in": "fadeInLeft",
                          "data-delay-in": "0.2"
                        }, [
                          createVNode("span", { class: "selected" }, "En Ny"),
                          createTextVNode(" Era "),
                          createVNode("br"),
                          createTextVNode(" för Teknologi och Design")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "/about",
                          "data-animation-in": "fadeInUp",
                          "data-delay-in": "0.4",
                          class: "theme-btn btn-style-one hover-light mt-20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Upptäck Mer")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="banner-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}><div class="outer-box"${_scopeId2}><div class="auto-container"${_scopeId2}><div class="content-box"${_scopeId2}><h1 data-animation-in="fadeInLeft" data-delay-in="0.2"${_scopeId2}><span class="selected"${_scopeId2}>Teknisk</span> Utveckling <br${_scopeId2}>för Framtiden</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/about",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.4",
                class: "theme-btn btn-style-one hover-light mt-20"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Upptäck Mer`);
                  } else {
                    return [
                      createTextVNode("Upptäck Mer")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "banner-slide" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  }),
                  createVNode("div", { class: "outer-box" }, [
                    createVNode("div", { class: "auto-container" }, [
                      createVNode("div", { class: "content-box" }, [
                        createVNode("h1", {
                          "data-animation-in": "fadeInLeft",
                          "data-delay-in": "0.2"
                        }, [
                          createVNode("span", { class: "selected" }, "Teknisk"),
                          createTextVNode(" Utveckling "),
                          createVNode("br"),
                          createTextVNode("för Framtiden")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "/about",
                          "data-animation-in": "fadeInUp",
                          "data-delay-in": "0.4",
                          class: "theme-btn btn-style-one hover-light mt-20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Upptäck Mer")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "banner-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "banner-slide" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: ""
                }),
                createVNode("div", { class: "outer-box" }, [
                  createVNode("div", { class: "auto-container" }, [
                    createVNode("div", { class: "content-box" }, [
                      createVNode("h1", {
                        "data-animation-in": "fadeInLeft",
                        "data-delay-in": "0.2"
                      }, [
                        createVNode("span", { class: "selected" }, "En Ny"),
                        createTextVNode(" Era "),
                        createVNode("br"),
                        createTextVNode(" för Teknologi och Design")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "/about",
                        "data-animation-in": "fadeInUp",
                        "data-delay-in": "0.4",
                        class: "theme-btn btn-style-one hover-light mt-20"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Upptäck Mer")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "banner-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "banner-slide" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("div", { class: "outer-box" }, [
                  createVNode("div", { class: "auto-container" }, [
                    createVNode("div", { class: "content-box" }, [
                      createVNode("h1", {
                        "data-animation-in": "fadeInLeft",
                        "data-delay-in": "0.2"
                      }, [
                        createVNode("span", { class: "selected" }, "Teknisk"),
                        createTextVNode(" Utveckling "),
                        createVNode("br"),
                        createTextVNode("för Framtiden")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "/about",
                        "data-animation-in": "fadeInUp",
                        "data-delay-in": "0.4",
                        class: "theme-btn btn-style-one hover-light mt-20"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Upptäck Mer")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/SliderSE.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee-section" }, _attrs))}><div class="inner-container"><div class="marquee"><div class="marquee-block"><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`GÖR DRÖMMAR TILL VERKLIGHET`);
      } else {
        return [
          createTextVNode("GÖR DRÖMMAR TILL VERKLIGHET")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`INSPIRERAD AV KREATIVITET`);
      } else {
        return [
          createTextVNode("INSPIRERAD AV KREATIVITET")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`LÅS UPP POTENTIALEN`);
      } else {
        return [
          createTextVNode("LÅS UPP POTENTIALEN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`STUDERA VAD DU BEHÖVER`);
      } else {
        return [
          createTextVNode("STUDERA VAD DU BEHÖVER")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div></div><div class="marquee-block"><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HITTA DE BÄSTA LÖSNINGARNA`);
      } else {
        return [
          createTextVNode("HITTA DE BÄSTA LÖSNINGARNA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`DESIGN, PROGRAMMERING &amp; TESTNING`);
      } else {
        return [
          createTextVNode("DESIGN, PROGRAMMERING & TESTNING")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`24/7 HJÄLP &amp; SUPPORT`);
      } else {
        return [
          createTextVNode("24/7 HJÄLP & SUPPORT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/MarqueeSE.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-to-action" }, _attrs))}><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/11.jpg)" })}"></div><div class="auto-container"><div class="outer-box wow fadeIn"><figure class="small-image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure><h2 class="title">ROSETECH <br>Ta ditt företag till nästa nivå</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "theme-btn btn-style-one light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Upptäck Mer</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Upptäck Mer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/CalltoactionSE.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_8 = "" + __publicAssetsURL("images/resource/round-text-se.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-us" }, _attrs))}><div class="anim-icons"><span class="icon icon-arrow1"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6"><div class="inner-column wow fadeInRight"><div class="sec-title"><i class="sub-title"></i><h2>Varför välja oss?</h2><span class="icon icon-arrow3"></span></div><div class="info-outer"><div class="row"><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_0$2)} width="50"></div></i><h5 class="title">Ledare inom mjukvaruutveckling</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_1$1)} width="50"></div></i><h5 class="title">Bäst resultat</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_2)} width="50"></div></i><h5 class="title">Smarta lösningar</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_3)} width="50"></div></i><h5 class="title">Fokus på kunden</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_4)} width="50"></div></i><h5 class="title">Bevisad meritlista</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_5)} width="50"></div></i><h5 class="title">Säkert och pålitligt</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_6)} width="50"></div></i><h5 class="title">Innovation som kärna</h5></div></div></div></div></div></div><div class="image-column col-lg-6"><div class="inner-column"><div class="image-box"><figure class="image anim-overlay"><img${ssrRenderAttr("src", _imports_7)} alt=""></figure><div class="rounded-text"><img${ssrRenderAttr("src", _imports_8)} alt=""><span class="letter">R</span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/WhychoseusSE.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ContactSE",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-section" }, _attrs))}><div class="anim-icons"><span class="icon icon-line3"></span><span class="icon icon-arrow1"></span><span class="icon icon-arrow2"></span></div><div class="auto-container"><div class="outer-box"><div class="bg bg-pattern-5"></div><div class="sec-title"><span class="sub-title">HÖR AV DIG</span><h2>Vi vill jobba med dig!</h2></div><div class="contact-form wow fadeInLeft"><form id="contact-form"><div class="row"><div class="form-group col-lg-6 col-md-12 col-sm-12"><input type="text"${ssrRenderAttr("value", unref(name))} name="name" placeholder="Namn" required></div><div class="form-group col-lg-6 col-md-12 col-sm-12"><input type="email"${ssrRenderAttr("value", unref(email))} name="Email" placeholder="E-postadress" required></div><div class="form-group col-lg-12"><textarea name="message" placeholder="Meddelande" required minlength="8">${ssrInterpolate(unref(message))}</textarea></div><div class="form-group col-lg-12"><button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Skicka</span></button></div></div></form></div><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/ContactSE.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome1SliderSE = __nuxt_component_0;
      const _component_SectionsHome1AboutSE = __nuxt_component_1;
      const _component_SectionsHome1MarqueeSE = __nuxt_component_2;
      const _component_SectionsHome1CalltoactionSE = __nuxt_component_3;
      const _component_SectionsHome1WhychoseusSE = __nuxt_component_4;
      const _component_SectionsHome1BlogSE = __nuxt_component_1$1;
      const _component_SectionsHome1ContactSE = __nuxt_component_6;
      const _component_SectionsHome1ContactForm = resolveComponent("SectionsHome1ContactForm");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionsHome1SliderSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1AboutSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1MarqueeSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1CalltoactionSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1WhychoseusSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1BlogSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1ContactSE, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1ContactForm, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-lR1xWdXt.js.map
