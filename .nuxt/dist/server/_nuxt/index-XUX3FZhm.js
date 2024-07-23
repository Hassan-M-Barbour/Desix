import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_0$1, c as _imports_0$2, d as _imports_1$1, e as _imports_2, f as _imports_3, g as _imports_4, h as _imports_5, i as _imports_6, j as _imports_7, k as _imports_0$3 } from "./girl-17ORppLF.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./About-eUUZlZjn.js";
import { _ as __nuxt_component_1$1 } from "./Blog-2ulY7AM9.js";
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
              _push3(`<div class="banner-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}><div class="outer-box"${_scopeId2}><div class="auto-container"${_scopeId2}><div class="content-box"${_scopeId2}><h1 data-animation-in="fadeInLeft" data-delay-in="0.2"${_scopeId2}><span class="selected"${_scopeId2}>New</span> Generation <br${_scopeId2}> for Technology and Design</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/about",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.4",
                class: "theme-btn btn-style-one hover-light mt-20"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Discover More`);
                  } else {
                    return [
                      createTextVNode("Discover More")
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
                          createVNode("span", { class: "selected" }, "New"),
                          createTextVNode(" Generation "),
                          createVNode("br"),
                          createTextVNode(" for Technology and Design")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "/about",
                          "data-animation-in": "fadeInUp",
                          "data-delay-in": "0.4",
                          class: "theme-btn btn-style-one hover-light mt-20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Discover More")
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
              _push3(`<div class="banner-slide"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}><div class="outer-box"${_scopeId2}><div class="auto-container"${_scopeId2}><div class="content-box"${_scopeId2}><h1 data-animation-in="fadeInLeft" data-delay-in="0.2"${_scopeId2}><span class="selected"${_scopeId2}>Tech</span> Development <br${_scopeId2}>for the Future</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/about",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.4",
                class: "theme-btn btn-style-one hover-light mt-20"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Discover More`);
                  } else {
                    return [
                      createTextVNode("Discover More")
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
                          createVNode("span", { class: "selected" }, "Tech"),
                          createTextVNode(" Development "),
                          createVNode("br"),
                          createTextVNode("for the Future")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "/about",
                          "data-animation-in": "fadeInUp",
                          "data-delay-in": "0.4",
                          class: "theme-btn btn-style-one hover-light mt-20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Discover More")
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
                        createVNode("span", { class: "selected" }, "New"),
                        createTextVNode(" Generation "),
                        createVNode("br"),
                        createTextVNode(" for Technology and Design")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "/about",
                        "data-animation-in": "fadeInUp",
                        "data-delay-in": "0.4",
                        class: "theme-btn btn-style-one hover-light mt-20"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Discover More")
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
                        createVNode("span", { class: "selected" }, "Tech"),
                        createTextVNode(" Development "),
                        createVNode("br"),
                        createTextVNode("for the Future")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "/about",
                        "data-animation-in": "fadeInUp",
                        "data-delay-in": "0.4",
                        class: "theme-btn btn-style-one hover-light mt-20"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Discover More")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Slider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee-section" }, _attrs))}><div class="inner-container"><div class="marquee"><div class="marquee-block"><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Transofrm ideas into reality`);
      } else {
        return [
          createTextVNode("Transofrm ideas into reality")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`INSPIRED WITH CREATIVITY `);
      } else {
        return [
          createTextVNode("INSPIRED WITH CREATIVITY ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`unlock the potential`);
      } else {
        return [
          createTextVNode("unlock the potential")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Study What you need`);
      } else {
        return [
          createTextVNode("Study What you need")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div></div><div class="marquee-block"><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Find best solutions`);
      } else {
        return [
          createTextVNode("Find best solutions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Design, Coding &amp; Testing `);
      } else {
        return [
          createTextVNode("Design, Coding & Testing ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`24/7 Help &amp; Support`);
      } else {
        return [
          createTextVNode("24/7 Help & Support")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Marquee.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-to-action" }, _attrs))}><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/11.jpg)" })}"></div><div class="auto-container"><div class="outer-box wow fadeIn"><figure class="small-image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure><h2 class="title">ROSETECH <br>Empower your business </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "theme-btn btn-style-one light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Discover more</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Discover more")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Calltoaction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_8 = "" + __publicAssetsURL("images/resource/round-text.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-us" }, _attrs))}><div class="anim-icons"><span class="icon icon-arrow1"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6"><div class="inner-column wow fadeInRight"><div class="sec-title"><i class="sub-title"></i><h2>Why should choose our company?</h2><span class="icon icon-arrow3"></span></div><div class="info-outer"><div class="row"><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_0$2)} width="50"></div></i><h5 class="title">Leader in software development</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_1$1)} width="50"></div></i><h5 class="title">Highest success rates</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_2)} width="50"></div></i><h5 class="title">Smart solutions</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_3)} width="50"></div></i><h5 class="title">Client-Centric Approach</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_4)} width="50"></div></i><h5 class="title">Proven Track Record</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_5)} width="50"></div></i><h5 class="title">Security and Compliance</h5></div></div><div class="info-box col-md-4"><div class="inner"><i class="icon"><div><img${ssrRenderAttr("src", _imports_6)} width="50"></div></i><h5 class="title">Innovation at the core</h5></div></div></div></div></div></div><div class="image-column col-lg-6"><div class="inner-column"><div class="image-box"><figure class="image anim-overlay"><img${ssrRenderAttr("src", _imports_7)} alt=""></figure><div class="rounded-text"><img${ssrRenderAttr("src", _imports_8)} alt=""><span class="letter">R</span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Whychoseus.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-section" }, _attrs))}><div class="anim-icons"><span class="icon icon-line3"></span><span class="icon icon-arrow1"></span><span class="icon icon-arrow2"></span></div><div class="auto-container"><div class="outer-box"><div class="bg bg-pattern-5"></div><div class="sec-title"><span class="sub-title">Get in touch</span><h2>Let’s work together</h2></div><div class="contact-form wow fadeInLeft"><form id="contact-form"><div class="row"><div class="form-group col-lg-6 col-md-12 col-sm-12"><input type="text"${ssrRenderAttr("value", unref(name))} name="full_name" placeholder="Your name" required></div><div class="form-group col-lg-6 col-md-12 col-sm-12"><input type="email" name="Email"${ssrRenderAttr("value", unref(email))} placeholder="Email Address" required></div><div class="form-group col-lg-12"><textarea name="message" placeholder="Write a message" required minlength="8">${ssrInterpolate(unref(message))}</textarea></div><div class="form-group col-lg-12"><button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Send a message</span></button></div></div></form></div><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHome1Slider = __nuxt_component_0;
  const _component_SectionsHome1About = __nuxt_component_1;
  const _component_SectionsHome1Marquee = __nuxt_component_2;
  const _component_SectionsHome1Calltoaction = __nuxt_component_3;
  const _component_SectionsHome1Whychoseus = __nuxt_component_4;
  const _component_SectionsHome1Blog = __nuxt_component_1$1;
  const _component_SectionsHome1Contact = __nuxt_component_6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHome1Slider, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1About, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Marquee, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Calltoaction, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Whychoseus, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Blog, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/en/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-XUX3FZhm.js.map
