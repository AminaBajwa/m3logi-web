import { _ as __nuxt_component_0 } from './PageTitle-ni9pexSe.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './about-2-OeFhYpGN.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_3, a as _imports_1$1, b as _imports_0$1, c as _imports_2$1 } from './service-4-4xo4pTju.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_0$2 } from './testi-thumb-1-GDJFDpmc.mjs';
import { _ as _imports_1$2 } from './testi-thumb-2-GFqmT0Cf.mjs';
import { _ as _imports_2$2 } from './testi-thumb-3-6l17gWPZ.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section" }, _attrs))}><div class="anim-icons"><div class="float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><span class="icon icon-dots-1 bounce-x"></span><span class="icon icon-dotted-map zoom-one"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Transportation Company</span><h2>We provide full rang of transportation services</h2><div class="text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution.</div></div><div class="content-box"><div class="about-block"><i class="icon flaticon-worldwide-shipping"></i><h4 class="title">Worldwide services </h4><p class="text">We\u2019re always provide people a complete solution focused of any business.</p></div><div class="about-block"><i class="icon flaticon-3d-cube"></i><h4 class="title">Local services</h4><p class="text">We\u2019re always provide people a complete solution focused of any business.</p></div></div><div class="btm-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-about",
    class: "theme-btn btn-style-one"
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
  _push(`</div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure><div class="experience"><strong><i class="icon flaticon-global"></i> 12+<br> Years</strong> Working Exprience</div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/1.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-wave-line"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">SPECIALISE IN THE TRANSPORTATION</span><h2>Specialist logistics services</h2></div><div class="row"><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-airplane-2"></i><span class="sub-title">01 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Air freight`);
      } else {
        return [
          createTextVNode("Air freight")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi provides comprehensive air freight solutions with tracking and customs support.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
        _push2(`Sea freight`);
      } else {
        return [
          createTextVNode("Sea freight")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi offers ocean transportation to ports like Karachi, and more via Container and RORO shipping.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</figure></div><div class="content-box"><i class="icon flaticon-delivery-truck-3"></i><span class="sub-title">03 Service</span><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Road service`);
      } else {
        return [
          createTextVNode("Road service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi handles container drayage and vehicle transportation from auctions to yards/ports.</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$1,
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
        _push2(`Other solution`);
      } else {
        return [
          createTextVNode("Other solution")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">m3Logi offers custom brokerage, yard services, and vehicle maintenance with pre-export inspections.</div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-section pt-0" }, _attrs))}><div class="anim-icons"><span class="icon icon-bg-dots"></span><span class="icon icon-plane-2 bounce-y"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Client\u2019s Testimonials</span><h2>Here are some clients <br>feedbacks</h2></div><div class="outer-box">`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 3,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        // slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        // slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        // slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        // slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        // slidesPerView: 3,
        spaceBetween: 30
      },
      1350: {
        // slidesPerView: 3,
        spaceBetween: 30
      }
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
    class: "testimonial-carousel owl-carousel owl-theme"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Jhon D. William</h4></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "content-box" }, [
                    createVNode("div", { class: "rating" }, [
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star-half-alt" })
                    ]),
                    createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_0$2,
                      alt: ""
                    })
                  ]),
                  createVNode("span", { class: "designation" }, "Client"),
                  createVNode("h4", { class: "name" }, "Jhon D. William")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Aleesha Brown</h4></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "content-box" }, [
                    createVNode("div", { class: "rating" }, [
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star-half-alt" })
                    ]),
                    createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_1$2,
                      alt: ""
                    })
                  ]),
                  createVNode("span", { class: "designation" }, "Client"),
                  createVNode("h4", { class: "name" }, "Aleesha Brown")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$2)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Mike Hardon</h4></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "content-box" }, [
                    createVNode("div", { class: "rating" }, [
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star" }),
                      createVNode("i", { class: "fa fa-star-half-alt" })
                    ]),
                    createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_2$2,
                      alt: ""
                    })
                  ]),
                  createVNode("span", { class: "designation" }, "Client"),
                  createVNode("h4", { class: "name" }, "Mike Hardon")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "testimonial-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "content-box" }, [
                  createVNode("div", { class: "rating" }, [
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star-half-alt" })
                  ]),
                  createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_0$2,
                    alt: ""
                  })
                ]),
                createVNode("span", { class: "designation" }, "Client"),
                createVNode("h4", { class: "name" }, "Jhon D. William")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "content-box" }, [
                  createVNode("div", { class: "rating" }, [
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star-half-alt" })
                  ]),
                  createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_1$2,
                    alt: ""
                  })
                ]),
                createVNode("span", { class: "designation" }, "Client"),
                createVNode("h4", { class: "name" }, "Aleesha Brown")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "content-box" }, [
                  createVNode("div", { class: "rating" }, [
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star" }),
                    createVNode("i", { class: "fa fa-star-half-alt" })
                  ]),
                  createVNode("div", { class: "text" }, "\u201CAll of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: ""
                  })
                ]),
                createVNode("span", { class: "designation" }, "Client"),
                createVNode("h4", { class: "name" }, "Mike Hardon")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section12.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageTitle = __nuxt_component_0;
  const _component_SectionsAboutSection3 = __nuxt_component_1;
  const _component_SectionsAboutSection4 = __nuxt_component_2;
  const _component_SectionsAboutSection12 = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "About" }, null, _parent));
  _push(ssrRenderComponent(_component_SectionsAboutSection3, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsAboutSection4, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsAboutSection12, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pageAbout as default };
//# sourceMappingURL=page-about-psI8rbKZ.mjs.map
