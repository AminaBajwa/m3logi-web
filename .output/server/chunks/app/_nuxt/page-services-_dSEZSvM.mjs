import { _ as __nuxt_component_0 } from './PageTitle-ni9pexSe.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './about-4-7KiI2d46.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { b as _imports_0$1, a as _imports_1$1, c as _imports_2, _ as _imports_3 } from './service-4-4xo4pTju.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two style-two" }, _attrs))}><div class="anim-icons"><div class="float-text wow zoomInRight">m3Logi</div></div><div class="auto-container" style="${ssrRenderStyle({ "margin-top": "52px" })}"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms"><div class="inner-column"><div class="sec-title"><span class="sub-title">Our Services</span><h2>Services We Provide</h2><h4>At m3Logi we ensure to connect the world through our unparalleled transport services.</h4><div class="text">We are a 360-degree cargo freight service provider with extensive facilities to transport your vehicles and other goods. As being the pioneers in the industry we are equipped to provide complete cargo and logistics arrangements from domestic deliveries to worldwide transport.</div></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_1)} alt=""><div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div></figure></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services/OurService.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="auto-container"><div class="row"><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-delivery-truck-3"></i><span class="sub-title">01 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Land Transportation`);
      } else {
        return [
          createTextVNode("Land Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">We offer our customers the matchless land transport services to transport your vehicles from any Auction or Stock-Yard to your required port. We ensure safe and swift vehicle delivery in collaboration with trusted drivers and vendors with a simplified process.</div></div></div></div><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-cargo-boat"></i><span class="sub-title">02 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ocean Transport`);
      } else {
        return [
          createTextVNode("Ocean Transport")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">We offer our customers prime ocean transport services with the association of top of the line shipping companies worldwide to ensure the efficient delivery of the vehicle to any port of the world. Our skilled team simplifies the process for our customers for a hassle free delivery.</div></div></div></div><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-delivery-box-4"></i><span class="sub-title">03 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customs Clearance`);
      } else {
        return [
          createTextVNode("Customs Clearance")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi has a vision to facilitate its customers at every level. To assist our customers with the complexities of customs rules and regulations, we offer customs clearance services through expert clearance agents. We strive to simplify every aspect of the trade for our customers.</div></div></div></div><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-delivery-box-4"></i><span class="sub-title">04 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`SCM Consulting`);
      } else {
        return [
          createTextVNode("SCM Consulting")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi provides its customers with easy Supply Chain Management System to cater to the complete process from the beginning till the end. As we aim to serve our customers comprehensively, we save them from all kinds of hassle and responsibility.</div></div></div></div><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="1200ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-delivery-truck-3"></i><span class="sub-title">05 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Yard Services`);
      } else {
        return [
          createTextVNode("Yard Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi has yards located at strategic locations all over Japan for the safe and secure storage of the vehicle. Additionally, we have trained staff at the yards for the up-keep of the goods stored.</div></div></div></div><div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="1500ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-airplane-2"></i><span class="sub-title">06 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Air Freight`);
      } else {
        return [
          createTextVNode("Air Freight")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi offers premium air freight services, ensuring swift and secure delivery of cargo worldwide through partnerships with leading airlines, with comprehensive tracking and customs support.</div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services/Services1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageTitle = __nuxt_component_0;
  const _component_SectionsServicesOurService = __nuxt_component_1;
  const _component_SectionsServicesServices1 = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Services" }, null, _parent));
  _push(ssrRenderComponent(_component_SectionsServicesOurService, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsServicesServices1, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pageServices as default };
//# sourceMappingURL=page-services-_dSEZSvM.mjs.map
