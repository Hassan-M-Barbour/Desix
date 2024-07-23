import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'file://C:/projects/desix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'file://C:/projects/desix/node_modules/vue/server-renderer/index.mjs';

const _imports_0 = "" + publicAssetsURL("images/resource/service-details.jpg");
const _imports_1 = "" + publicAssetsURL("images/resource/service-d1.jpg");
const _imports_2 = "" + publicAssetsURL("images/resource/service-d2.jpg");
const _sfc_main = {
  __name: "Servicesdetails",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref({
      status: false,
      key: 1
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4"><div class="service-sidebar"><div class="sidebar-widget service-sidebar-single"><div class="sidebar-service-list"><ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "page-service-details",
        class: "current"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Website Development</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Website Development")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="current">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Graphic Designing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Graphic Designing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Digital Marketing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Digital Marketing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Apps Development</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Apps Development")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>Seo &amp; Content Writing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "Seo & Content Writing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i><span${_scopeId}>UI / UX Designing</span>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" }),
              createVNode("span", null, "UI / UX Designing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="service-details-help"><div class="help-shape-1"></div><div class="help-shape-2"></div><h2 class="help-title">Contact with <br> us for any <br> advice</h2><div class="help-icon"><span class="lnr-icon-phone-handset"></span></div><div class="help-contact"><p>Need help? Talk to an expert</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:12463330079" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+892 ( 123 ) 112 - 9999`);
          } else {
            return [
              createTextVNode("+892 ( 123 ) 112 - 9999")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="col-xl-8 col-lg-8"><div class="services-details__content"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3 class="mt-4">Service Overview</h3><p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p><p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit </p><div class="content mt-40"><div class="text"><h3>Service Center</h3><p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><blockquote class="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote></div><div class="feature-list mt-4"><div class="row clearfix"><div class="col-lg-6 col-md-6 col-sm-12 column"><img class="mb-3"${ssrRenderAttr("src", _imports_1)} alt="images"><p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p></div><div class="col-lg-6 col-md-6 col-sm-12 column"><img class="mb-3"${ssrRenderAttr("src", _imports_2)} alt="images"><p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p></div></div></div></div><div class="mt-25"><h3>Frequently Asked Question</h3><p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><ul class="accordion-box wow fadeInRight"><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 1 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 1 }, "acc-btn"])}">Is my technology allowed on tech? <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 1 }, "acc-content"])}"><div class="content"><div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div></div></div></li><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 2 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 2 }, "acc-btn"])}">How to soft launch your business? <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 2 }, "acc-content"])}"><div class="content"><div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div></div></div></li><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 3 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 3 }, "acc-btn"])}">How to turn visitors into contributors <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 3 }, "acc-content"])}"><div class="content"><div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div></div></div></li><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 4 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 4 }, "acc-btn"])}"> How can i find my solutions? <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 4 }, "acc-content"])}"><div class="content"><div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div></div></div></li></ul></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Servicesdetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Servicesdetails-ImHmlpjI.mjs.map
