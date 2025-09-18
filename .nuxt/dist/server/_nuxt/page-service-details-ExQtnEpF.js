import { _ as __nuxt_component_0$1 } from "./PageTitle-ni9pexSe.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-IzlaOwBm.js";
import { ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./bg1-9FCO0GRH.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "klona";
import "devalue";
const _sfc_main$1 = {
  __name: "Details",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref({
      status: false,
      key: 1
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-8 col-lg-8"><div class="services-details__content"><img${ssrRenderAttr("src", _imports_0)} alt=""><h2 class="mt-4">Air Freight</h2><p> Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown took a galley of type and it to make a type specimen book. </p><p>When an unknown printer took a galley of type and it to make a type specimen book. It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged.</p><div class="content"><div class="text"><h3>Our Scope of Work</h3><p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p></div><div class="feature-list"><div class="row clearfix"><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Fast home delivery</h6></div></div><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Secure Payments</h6></div></div><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Delivering best products</h6></div></div><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Food Inspections</h6></div></div><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Generator Systems</h6></div></div><div class="col-lg-6 col-md-6 col-sm-12 column"><div class="single-item"><div class="icon-box"><i class="fas fa-check-circle"></i></div><h6 class="title">Assessments</h6></div></div></div></div></div><div class=""><h3>FAQ</h3><p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><ul class="accordion-box wow fadeInRight"><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 1 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 1 }, "acc-btn"])}">Is my technology allowed on tech? <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 1 }, "acc-content"])}"><div class="content"><div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div></div></div></li><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 2 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 2 }, "acc-btn"])}">How to soft launch your business <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 2 }, "acc-content"])}"><div class="content"><div class="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div></div></div></li><li class="${ssrRenderClass([{ "active-block": isActive.value.key === 3 }, "accordion block"])}"><div class="${ssrRenderClass([{ "active": isActive.value.key === 3 }, "acc-btn"])}">How can i find my solutions? <div class="icon fa fa-plus"></div></div><div class="${ssrRenderClass([{ "current": isActive.value.key === 3 }, "acc-content"])}"><div class="content"><div class="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div></div></div></li></ul></div></div></div><div class="col-xl-4 col-lg-4"><div class="service-sidebar"><div class="sidebar-widget service-sidebar-single"><div class="service-sidebar-single-services wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m"><div class="title"><h3>All Services</h3></div><ul><li class="current">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Air Freight <i class="fa fa-angle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("Air Freight "),
              createVNode("i", { class: "fa fa-angle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sea freight <i class="fa fa-angle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("Sea freight "),
              createVNode("i", { class: "fa fa-angle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Road service <i class="fa fa-angle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("Road service "),
              createVNode("i", { class: "fa fa-angle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Other solution <i class="fa fa-angle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("Other solution "),
              createVNode("i", { class: "fa fa-angle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="sidebar-widget service-sidebar-single"><div class="service-sidebar-single-contact-box text-center wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1200m" style="${ssrRenderStyle({ "background-image": "url(images/resource/news-2.jpg)" })}"><div class="icon"><span class="lnr lnr-icon-phone"></span></div><div class="title"><h2> Best <br>Logistics <br> Services </h2></div><p class="phone">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:123456789" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`666 888 0000`);
          } else {
            return [
              createTextVNode("666 888 0000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>Call Us Anytime</p></div></div><div class="sidebar-widget service-sidebar-single mt-3"><div class="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "theme-btn btn-style-one d-grid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn-title"${_scopeId}><span class="fas fa-file-pdf"${_scopeId}></span> download pdf file</span>`);
          } else {
            return [
              createVNode("span", { class: "btn-title" }, [
                createVNode("span", { class: "fas fa-file-pdf" }),
                createTextVNode(" download pdf file")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services/Details.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageTitle = __nuxt_component_0$1;
  const _component_SectionsServicesDetails = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Service Details" }, null, _parent));
  _push(ssrRenderComponent(_component_SectionsServicesDetails, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-service-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageServiceDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  pageServiceDetails as default
};
//# sourceMappingURL=page-service-details-ExQtnEpF.js.map
