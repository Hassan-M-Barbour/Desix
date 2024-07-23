import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {
  data() {
    return {
      count: 0,
      inViewport: false
    };
  },
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1e3
      // In milliseconds
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.2
      // 20% of the element is visible
    });
    this.observer.observe(this.$refs.counterRef);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.inViewport) {
          this.inViewport = true;
          this.startCounter();
        }
      });
    },
    startCounter() {
      let startTime;
      const step = (timestamp) => {
        if (!startTime)
          startTime = timestamp;
        const progress = timestamp - startTime;
        this.count = Math.floor((this.end - this.start) * (progress / this.duration) + this.start);
        if (progress < this.duration && this.inViewport) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: "count-text",
    ref: "counterRef"
  }, _attrs))}>${ssrInterpolate($data.count)}</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/CounterUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __publicAssetsURL("images/resource/team-details.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_ElementsCounterUp = __nuxt_component_1$1;
  _push(`<!--[--><section class="team-details"><div class=""></div><div class="container pb-100"><div class="team-details__top pb-70"><div class="row"><div class="col-lg-6"><div class="team-details__top-left"><div class="team-details__top-img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="team-details__big-text"></div></div></div></div><div class="col-lg-6"><div class="team-details__top-right"><div class="team-details__top-content"><h3 class="team-details__top-name">Aleesha Brown</h3><p class="team-details__top-title">Managing Director &amp; CEO</p><p class="team-details__top-text-1">I help my clients stand out and they help me grow.</p><div class="team-details-contact mb-30"><h5 class="mb-0">Email Address</h5><div class=""><span>needhelp@yourdomain.com</span></div></div><div class="team-details-contact mb-30"><h5 class="mb-0">Phone Number</h5><div class=""><span>+012-3456-789</span></div></div><div class="team-details-contact"><h5 class="mb-0">Web Address</h5><div class=""><span>www.yourdomain.com</span></div></div><div class="team-details__social">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-twitter" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-pinterest-p"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-pinterest-p" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-instagram"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-instagram" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div><div class="team-details__bottom pt-100"><div class="row"><div class="col-lg-6"><div class="team-details__bottom-left"><h4 class="team-details__bottom-left-title">Personal Experience</h4><p class="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p></div></div><div class="skills-column col-xl-6 col-lg-6" data-wow-delay="300ms"><div class="inner-column"><div class="skills style-two"><div class="skill-item"><div class="skill-header"><h6 class="skill-title">Tecnology</h6></div><div class="skill-bar"><div class="bar-inner"><div class="bar progress-line" data-width="77" style="${ssrRenderStyle({ "width": "77%" })}"><div class="skill-percentage"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 77 }, null, _parent));
  _push(`% </div></div></div></div></div></div><div class="skill-item"><div class="skill-header"><h6 class="skill-title">Marketing</h6></div><div class="skill-bar"><div class="bar-inner"><div class="bar progress-line" data-width="57" style="${ssrRenderStyle({ "width": "57%" })}"><div class="skill-percentage"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 57 }, null, _parent));
  _push(`% </div></div></div></div></div></div><div class="skill-item"><div class="skill-header"><h6 class="skill-title">Business</h6></div><div class="skill-bar"><div class="bar-inner"><div class="bar progress-line" data-width="92" style="${ssrRenderStyle({ "width": "92%" })}"><div class="skill-percentage"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 92 }, null, _parent));
  _push(`% </div></div></div></div></div></div></div></div></div></div></div></div></section><section class="team-contact-form"><div class="container pb-100"><div class="sec-title text-center"><span class="sub-title">Contact With Us Now</span><h2 class="section-title__title">Feel Free to Write Our <br> Tecnology Experts</h2></div><div class="row justify-content-center"><div class="col-lg-8"><form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post"><div class="row"><div class="col-sm-6"><div class="mb-3"><input name="form_name" class="form-control" type="text" placeholder="Enter Name"></div></div><div class="col-sm-6"><div class="mb-3"><input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"></div></div></div><div class="row"><div class="col-sm-6"><div class="mb-3"><input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject"></div></div><div class="col-sm-6"><div class="mb-3"><input name="form_phone" class="form-control" type="text" placeholder="Enter Phone"></div></div></div><div class="mb-3"><textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea></div><div class="mb-3 text-center"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button><button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button></div></form></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Teamdetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=Teamdetails-x5FtLGwl.js.map
