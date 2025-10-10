import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './PageTitle-ni9pexSe.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, watch, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { h as _imports_0$2, _ as _imports_0$1$1, a as _imports_1$1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6, g as _imports_7 } from './m3logiOffice-StZRbHgU.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_1 = "" + publicAssetsURL("images/gallery-14.jpeg");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "offer-section",
    id: "#offerr-sec"
  }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-7 col-md-12"><div class="inner-column"><div class=""><h2>Company Profile</h2><h4>M3Logi, a single window approach for transporters, ports, customs and shipping lines.</h4><div class="text">M3Logi is an ideal solution, to acquire combined services provided by transporters, port yards, customs and shipping lines. One of the most convenient shipping services of the world, M3Logi offers online booking amenities with a variety of shipping schedules according to our clients\u2019 requirements.<br> <br> With competitive rates and being a non-vessel operating common carrier (NVOCC), M3Logi is able to provide its customers comprehensive services including shipment tracking, and bill of lading. We envision to provide our customers all inclusive services of \u2018carrier to shipper\u2019 and \u2018shipper to carrier\u2019 and target clients all over the globe.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-services",
    class: "theme-btn btn-style-two hvr-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Explore More</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Explore More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="image-column col-lg-4 col-md-8 col-sm-8"><div class="inner-column"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure><figure class="image"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + publicAssetsURL("images/Mission.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about-section-two",
    id: "mission"
  }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Our Mission</span><h2>Your Destination Is Our Mission</h2><h4>Since 2012, m3Logi has been simplifying global freight and logistics.</h4><div class="text">We provide a single-window system that seamlessly integrates transporters, port yards, customs, and shipping lines\u2014making logistics management easier than ever. <br><br> With our easy-to-use online platform, you can book shipments instantly and choose from a wide range of flexible shipping schedules that best fit your needs. Our digital tools help you manage, monitor, and create shipments online, ensuring transparency and full control over your cargo journey. </div></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></figure></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section11.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + publicAssetsURL("images/Vision.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about-section-two",
    id: "vision"
  }, _attrs))}><div class="auto-container"><div class="row"><div class="image-column col-lg-6 col-md-12 col-sm-12 order-lg-2"><div class="inner-column"><figure class="image-1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div></div><div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-1"><div class="inner-column"><div class="sec-title"><span class="sub-title">Our Vision</span><h2>Driving the Future of Global Logistics</h2><h4>Our vision is to redefine the way the world moves cargo.</h4><div class="text"> We aim to create a smarter, faster, and more sustainable logistics ecosystem where technology bridges every gap in international trade. <br><br> We envision a future where businesses of all sizes\u2014from local exporters to multinational corporations\u2014can access seamless freight solutions at their fingertips. By combining digital innovation with our global expertise, we strive to eliminate complexity, reduce delays, and empower customers with complete visibility over their shipments. <br><br>Our goal is to build a connected logistics network that not only simplifies trade but also fosters growth, trust, and opportunity for our partners worldwide. </div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/1.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-wave-line"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Services by M3Logi</span><h2>We provide services to take your goods <br> where they need to go.</h2></div><div class="row"><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-container-2"></i><span class="sub-title">01 Service</span><h4 class="title">`);
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
  _push(`</h4><div class="text">Efficient yard management ensuring smooth operations</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-airplane-2"></i><span class="sub-title">02 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Air Cargo`);
      } else {
        return [
          createTextVNode("Air Cargo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Fast and reliable global air freight solutions.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-wrench"></i><span class="sub-title">03 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vehicle Inspection`);
      } else {
        return [
          createTextVNode("Vehicle Inspection")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Expert care to extend vehicle life and safety.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-truck"></i><span class="sub-title">04 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Drayage Services`);
      } else {
        return [
          createTextVNode("Drayage Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Quick and secure container transport from port to door.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
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
        _push2(`Land Transportation`);
      } else {
        return [
          createTextVNode("Land Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Safe and timely delivery across road networks.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-cargo-boat"></i><span class="sub-title">06 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ocean Transportation`);
      } else {
        return [
          createTextVNode("Ocean Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Cost-effective worldwide sea freight services.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-wrench"></i><span class="sub-title">07 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vehicle Maintenance`);
      } else {
        return [
          createTextVNode("Vehicle Maintenance")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Keeping your fleet in top performance condition.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_7,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure></div><div class="content-box"><i class="icon fas fa-check"></i><span class="sub-title">08 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customer Clearance`);
      } else {
        return [
          createTextVNode("Customer Clearance")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Hassle-free customs clearance for all shipments.</div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Section6",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      { pathname: "gallery-0.jpeg", caption: "gallery" },
      { pathname: "gallery-13.jpeg", caption: "gallery" },
      { pathname: "gallery-3.jpg", caption: "gallery" },
      { pathname: "gallery-5.jpg", caption: "gallery" },
      { pathname: "gallery-6.jpg", caption: "gallery" },
      { pathname: "gallery-14.jpeg", caption: "gallery" },
      { pathname: "gallery-11.jpeg", caption: "gallery" },
      { pathname: "gallery-12.jpeg", caption: "gallery" },
      { pathname: "gallery-2.jpg", caption: "gallery" },
      { pathname: "gallery-4.jpg", caption: "gallery" },
      { pathname: "gallery-15.jpeg", caption: "gallery" },
      { pathname: "gallery-16.jpeg", caption: "gallery" }
    ];
    const pageSize = ref(6);
    const pages = computed(() => {
      const res = [];
      for (let i = 0; i < images.length; i += pageSize.value) {
        res.push(images.slice(i, i + pageSize.value));
      }
      return res;
    });
    const currentPage = ref(0);
    ref(null);
    const spansPattern = [20, 24, 22, 28, 24, 20, 26, 22, 24];
    function spanFor(globalIndex) {
      return spansPattern[globalIndex % spansPattern.length];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery-carousel" }, _attrs))}><header class="carousel-header"><div class="auto-container"><div class="controls"><button class="nav-btn"${ssrIncludeBooleanAttr(currentPage.value === 0) ? " disabled" : ""} aria-label="Previous"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><button class="nav-btn"${ssrIncludeBooleanAttr(currentPage.value >= pages.value.length - 1) ? " disabled" : ""} aria-label="Next"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div></header><div class="auto-container"><div class="carousel-track"><!--[-->`);
      ssrRenderList(pages.value, (page, pIdx) => {
        _push(`<div class="slide"><article class="masonry-grid"><!--[-->`);
        ssrRenderList(page, (img, idx) => {
          _push(`<a class="gallery-link" style="${ssrRenderStyle({ gridRowEnd: `span ${spanFor(pIdx * pageSize.value + idx)}` })}"${ssrRenderAttr("href", `/images/${img.pathname}`)}${ssrRenderAttr("title", img.caption || img.alt || "Photo caption")} data-gallery="mican-gallery"${ssrRenderAttr("data-glightbox", `title: ${img.caption || "Photo caption"}`)}><figure class="gallery-image"><img${ssrRenderAttr("src", `/images/${img.pathname}`)}${ssrRenderAttr("alt", img.alt || img.caption || "Photo")}><figcaption>${ssrInterpolate(img.caption || "Photo caption")}</figcaption></figure></a>`);
        });
        _push(`<!--]--></article></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (pages.value.length > 1) {
        _push(`<div class="dots"><!--[-->`);
        ssrRenderList(pages.value, (_, i) => {
          _push(`<button class="${ssrRenderClass([{ active: i === currentPage.value }, "dot"])}"${ssrRenderAttr("aria-label", `Go to page ${i + 1}`)}></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section6.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Section7",
  __ssrInlineRender: true,
  props: {
    // Agar props se nodes pass na karo, to niche M3 data use hoga
    nodes: { type: Array, default: () => [] },
    height: { type: [Number, String], default: "75vh" },
    // 'vertical' (default, pehle jaisa) | 'horizontal'
    orientation: { type: String, default: "vertical" },
    // movement OFF (static)
    interactive: { type: Boolean, default: false },
    linkColor: { type: String, default: "#cbd5e1" },
    linkWidth: { type: Number, default: 1.25 }
  },
  setup(__props) {
    const props = __props;
    const wrapperStyle = computed(() => ({
      height: typeof props.height === "number" ? `${props.height}px` : props.height
    }));
    ref(null);
    watch(
      () => [props.nodes, props.orientation, props.interactive, props.linkColor, props.linkWidth],
      () => {
        return;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "orgchart-wrapper",
        style: wrapperStyle.value
      }, _attrs))} data-v-c7382623><div class="orgchart-container" data-v-c7382623></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section7.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c7382623"]]);
const _sfc_main = {
  __name: "page-about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0;
      const _component_SectionsAboutSection1 = __nuxt_component_1;
      const _component_SectionsAboutSection11 = __nuxt_component_2;
      const _component_SectionsAboutSection5 = __nuxt_component_3;
      const _component_SectionsAboutSection2 = __nuxt_component_4;
      const _component_SectionsAboutSection6 = _sfc_main$2;
      const _component_SectionsAboutSection7 = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "About" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection11, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAboutSection7, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-about-g7C1FED0.mjs.map
