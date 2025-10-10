import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { _ as __nuxt_component_0$2 } from './CounterUp-_QH8Lf3J.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$2, a as _imports_0$1$3, b as _imports_0$4 } from './delivery-boy-aO9Du3cD.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$1$1, a as _imports_2$1, b as _imports_1$1, c as _imports_0$5, d as _imports_1$4, e as _imports_2$3, f as _imports_3$2, g as _imports_4$2, h as _imports_5$2, i as _imports_6$1, j as _imports_7$1, k as _imports_8, l as _imports_9, m as _imports_10, n as _imports_11 } from './client-img12-Z7sEQmcV.mjs';
import { _ as _imports_0$1$2, a as _imports_1$2, b as _imports_2$2, c as _imports_3$1, d as _imports_4$1, e as _imports_5$1, f as _imports_6, g as _imports_7, h as _imports_0$3 } from './m3logiOffice-StZRbHgU.mjs';
import { _ as _imports_1$3 } from './about-4-fQZE_5GS.mjs';
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

const _imports_0$1 = "" + publicAssetsURL("images/truck -m3.png");
const _sfc_main$a = {
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
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ElementsCounterUp = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner-section" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 8e3,
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
    class: "banner-carousel owl-carousel owl-theme"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>A Single <br${_scopeId2}>Platform<span class="colored"${_scopeId2}> for</span> Global Trade</h2><div class="btn-box animate-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-about",
                class: "theme-btn btn-style-one alternate"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="btn-title"${_scopeId3}>Explore More</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "btn-title" }, "Explore More")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Trusted by</h4><div class="count-box"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ElementsCounterUp, { end: 4890 }, null, _parent3, _scopeId2));
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "bg-image",
                  style: { "background-image": "url(images/main-slider/3.jpg)" }
                }),
                createVNode("div", { class: "auto-container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "content-column col-lg-7 col-md-12 col-sm-12" }, [
                      createVNode("div", { class: "content-box" }, [
                        createVNode("h2", { class: "title animate-3" }, [
                          createTextVNode("A Single "),
                          createVNode("br"),
                          createTextVNode("Platform"),
                          createVNode("span", { class: "colored" }, " for"),
                          createTextVNode(" Global Trade")
                        ]),
                        createVNode("div", { class: "btn-box animate-4" }, [
                          createVNode(_component_NuxtLink, {
                            to: "/page-about",
                            class: "theme-btn btn-style-one alternate"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "btn-title" }, "Explore More")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "image-column col-lg-5 col-md-12 col-sm-12" }, [
                      createVNode("div", { class: "image-box" }, [
                        createVNode("div", { class: "fact-counter-one bounce-y" }, [
                          createVNode("h4", { class: "counter-title" }, "Trusted by"),
                          createVNode("div", { class: "count-box" }, [
                            createVNode(_component_ElementsCounterUp, { end: 4890 })
                          ])
                        ]),
                        createVNode("figure", { class: "image animate-5 animate-x" }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Most trusted logistics <span class="colored"${_scopeId2}>&amp;</span> delivery services </h2><div class="btn-box animate-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-about",
                class: "theme-btn btn-style-one alternate"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="btn-title"${_scopeId3}>Explore More</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "btn-title" }, "Explore More")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Trusted by</h4><div class="count-box"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ElementsCounterUp, { end: 4890 }, null, _parent3, _scopeId2));
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt=""${_scopeId2}></figure></div></div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "bg-image",
                  style: { "background-image": "url(images/main-slider/3.jpg)" }
                }),
                createVNode("div", { class: "auto-container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "content-column col-lg-7 col-md-12 col-sm-12" }, [
                      createVNode("div", { class: "content-box" }, [
                        createVNode("h2", { class: "title animate-3" }, [
                          createTextVNode("Most trusted logistics "),
                          createVNode("span", { class: "colored" }, "&"),
                          createTextVNode(" delivery services ")
                        ]),
                        createVNode("div", { class: "btn-box animate-4" }, [
                          createVNode(_component_NuxtLink, {
                            to: "/page-about",
                            class: "theme-btn btn-style-one alternate"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "btn-title" }, "Explore More")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "image-column col-lg-5 col-md-12 col-sm-12" }, [
                      createVNode("div", { class: "image-box" }, [
                        createVNode("div", { class: "fact-counter-one bounce-y" }, [
                          createVNode("h4", { class: "counter-title" }, "Trusted by"),
                          createVNode("div", { class: "count-box" }, [
                            createVNode(_component_ElementsCounterUp, { end: 4890 })
                          ])
                        ]),
                        createVNode("figure", { class: "image animate-5 animate-x" }, [
                          createVNode("img", {
                            src: _imports_0$2,
                            alt: ""
                          })
                        ])
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
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "bg-image",
                style: { "background-image": "url(images/main-slider/3.jpg)" }
              }),
              createVNode("div", { class: "auto-container" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "content-column col-lg-7 col-md-12 col-sm-12" }, [
                    createVNode("div", { class: "content-box" }, [
                      createVNode("h2", { class: "title animate-3" }, [
                        createTextVNode("A Single "),
                        createVNode("br"),
                        createTextVNode("Platform"),
                        createVNode("span", { class: "colored" }, " for"),
                        createTextVNode(" Global Trade")
                      ]),
                      createVNode("div", { class: "btn-box animate-4" }, [
                        createVNode(_component_NuxtLink, {
                          to: "/page-about",
                          class: "theme-btn btn-style-one alternate"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "btn-title" }, "Explore More")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "image-column col-lg-5 col-md-12 col-sm-12" }, [
                    createVNode("div", { class: "image-box" }, [
                      createVNode("div", { class: "fact-counter-one bounce-y" }, [
                        createVNode("h4", { class: "counter-title" }, "Trusted by"),
                        createVNode("div", { class: "count-box" }, [
                          createVNode(_component_ElementsCounterUp, { end: 4890 })
                        ])
                      ]),
                      createVNode("figure", { class: "image animate-5 animate-x" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "bg-image",
                style: { "background-image": "url(images/main-slider/3.jpg)" }
              }),
              createVNode("div", { class: "auto-container" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "content-column col-lg-7 col-md-12 col-sm-12" }, [
                    createVNode("div", { class: "content-box" }, [
                      createVNode("h2", { class: "title animate-3" }, [
                        createTextVNode("Most trusted logistics "),
                        createVNode("span", { class: "colored" }, "&"),
                        createTextVNode(" delivery services ")
                      ]),
                      createVNode("div", { class: "btn-box animate-4" }, [
                        createVNode(_component_NuxtLink, {
                          to: "/page-about",
                          class: "theme-btn btn-style-one alternate"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "btn-title" }, "Explore More")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "image-column col-lg-5 col-md-12 col-sm-12" }, [
                    createVNode("div", { class: "image-box" }, [
                      createVNode("div", { class: "fact-counter-one bounce-y" }, [
                        createVNode("h4", { class: "counter-title" }, "Trusted by"),
                        createVNode("div", { class: "count-box" }, [
                          createVNode(_component_ElementsCounterUp, { end: 4890 })
                        ])
                      ]),
                      createVNode("figure", { class: "image animate-5 animate-x" }, [
                        createVNode("img", {
                          src: _imports_0$2,
                          alt: ""
                        })
                      ])
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section1.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="title-column col-lg-6 col-md-12"><div class="title-box"><h4 class="title">M3Logi prides itself <br>on core values that shape our business.</h4></div></div><div class="features-column col-lg-6 col-md-12"><div class="row"><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-courier"></i><i class="icon-customer-icon"></i><h4 class="title">Preseverance</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-insurance-3"></i><h4 class="title">Reliability</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-box-3"></i><h4 class="title">Efficiency</h4></div></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section2.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-60" }, _attrs))}><div class="anim-icons"><div class="float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$1$1)} alt=""></div><span class="icon icon-dots-1 bounce-x"></span><span class="icon icon-dotted-map zoom-one"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Who We Are </span><h2>Your Trusted NVOCC &amp; Digital Shipping Partner</h2><div class="text">M3Logi is an easy-to-use shipping service with online booking and flexible schedules tailored to your needs. <br><br> As a licensed NVOCC, we legally act as a carrier and assume full carrier responsibilities\u2014delivering end\u2011to\u2011end logistics, from real\u2011time cargo tracking to Bill of Lading (B/L) issuance. </div></div><div class="btm-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-about",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Explore Services</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Explore Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column" id="img"><figure class="image-1"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></figure><div class="experience"><strong><i class="icon flaticon-global"></i> 12+<br> Years</strong> Working Exprience</div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section3.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/1.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-wave-line"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Services by M3Logi</span><h2>We provide services to take your goods <br> where they need to go.</h2></div><div class="row"><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1$2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section4.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "call-to-action style-two",
    style: { "background-image": "url(./images/background/2.jpg)" }
  }, _attrs))}><div class="auto-container"><div class="outer-box"><div class="sec-title text-center light mb-0"><div class="sub-title">Get in touch with us anytime</div><h1>Looking for the best <br>logistics transport <span class="highlighted">service?</span></h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-contact",
    class: "theme-btn btn-style-one hvr-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Get A Quote</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Get A Quote")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section5.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Get to know us</span><h2>Global Logistics Solution Provider</h2><h4>Simplify your freight and logistics needs with a personal approch.</h4><h3>Message from CEO</h3><blockquote class="ceo-quote"> We support our customers in all aspects of their cargo from storage, transportation, and delivery, and strive for their benefit. If you are considering importing or exporting, please contact us and we will be happy to assist you. </blockquote><cite class="ceo-cite">\u2014 Muzammal Majeed, CEO &amp; Founder</cite></div><div class="founder-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_0$1$3)} alt=""></div><h5 class="name">Muzammal Majeed</h5><span class="designation">CEO &amp; Founder of Company</span></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure><figure class="image-2 wow fadeInRight"><img${ssrRenderAttr("src", _imports_1$3)} alt=""><div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div></figure></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section11.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-us pull-up pb-0" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/4.jpg)" })}"></div><div class="anim-icons"><div class="float-image"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div><div class="auto-container"><div class="row"><div class="sec-title light"><span class="sub-title">Why Choose Us</span><h2>Simple Online Booking, <br>Full Carrier Responsibility.</h2></div><div class="content-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-delivery-box-4"></i><h4 class="title">Safety and reliability</h4><p class="text">As a licensed NVOCC, we legally act as your carrier and take end\u2011to\u2011end responsibility with compliant, secure handling.</p></div></div><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-worldwide-shipping"></i><h4 class="title">Shipping worldwide</h4><p class="text">Global coverage across major ports with flexible sailing schedules\u2014pick the route and timing that suit your plan.</p></div></div></div></div><div class="form-column col-lg-5 col-md-12 col-sm-12"><div class="inner-column"><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-logistics"></i><h4 class="title">Total Logistics Solutions</h4><p class="text">From pickup to customs clearance and final delivery, we provide seamless logistics solutions under one integrated platform</p></div></div><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-international-shipping-3"></i><h4 class="title">Vehicle Handling Expertise</h4><p class="text">We manage inspection, maintenance, and transport with precision, ensuring every vehicle is shipped safely and on time.</p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section10.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-section" }, _attrs))}><div class="anim-icons"><span class="icon icon-dotted-map-2 zoom-one"></span><span class="icon icon-plane-1 bounce-y"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">How It Work</span><h2>Ship with M3Logi in 3 Easy Steps</h2></div><div class="row"><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight"><div class="inner-box"><div class="icon-box"><span class="count">01</span><i class="icon flaticon-delivery-box-4"></i></div><h4 class="title">Get an instant <br>online quotation</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms"><div class="inner-box"><div class="icon-box"><span class="count">02</span><i class="icon flaticon-stock-1"></i></div><h4 class="title">Confirm booking<br>&amp; drop cargo</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms"><div class="inner-box"><div class="icon-box"><span class="count">03</span><i class="icon flaticon-delivery-box-3"></i></div><h4 class="title">Track, Ship &amp; <br>Receive Documents</h4></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section16.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + publicAssetsURL("images/clients/c0.png");
const _imports_1 = "" + publicAssetsURL("images/clients/c1.png");
const _imports_2 = "" + publicAssetsURL("images/clients/c2.png");
const _imports_3 = "" + publicAssetsURL("images/clients/c3.png");
const _imports_4 = "" + publicAssetsURL("images/clients/c4.png");
const _imports_5 = "" + publicAssetsURL("images/clients/c5.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Our Brands</span><h2>Specialist units delivering <br>end\u2011to\u2011end logistics by M3Logi</h2></div><div class="row"><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`MARINELOGI \u2014 Ocean Transportation`);
      } else {
        return [
          createTextVNode("MARINELOGI \u2014 Ocean Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">Fast and Secure Ocean Shipping Worldwide</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CAR CARRIER \u2014 Vehicle Transportation`);
      } else {
        return [
          createTextVNode("CAR CARRIER \u2014 Vehicle Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">End\u2011to\u2011End Vehicle Transport Nationwide</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
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
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`AUTO MECHANIC M3Logi \u2014 Maintenance &amp; PEI`);
      } else {
        return [
          createTextVNode("AUTO MECHANIC M3Logi \u2014 Maintenance & PEI")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">Certified Repairs &amp; Pre\u2011Export Inspection</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
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
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`WAREHOUSE M3Logi \u2014 Yard Services`);
      } else {
        return [
          createTextVNode("WAREHOUSE M3Logi \u2014 Yard Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">Secure Yard &amp; Warehouse Operations</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
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
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`DRAYAGE M3Logi \u2014 Container Drayage`);
      } else {
        return [
          createTextVNode("DRAYAGE M3Logi \u2014 Container Drayage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">On\u2011Time Container Drayage Services</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
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
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-google-play" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-google-play",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-app-store-ios" aria-hidden="true"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", {
            class: "fab fa-app-store-ios",
            "aria-hidden": "true"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="info-box"><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CUSTOM BROKER M3Logi \u2014 Customs Brokerage`);
      } else {
        return [
          createTextVNode("CUSTOM BROKER M3Logi \u2014 Customs Brokerage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">Fast, Compliant Customs Clearance</span></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section8.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
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
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-section" }, _attrs))}><div class="anim-icon"><span class="icon dotted-line-1"></span><span class="icon dotted-line-2"></span></div><div class="auto-container"><div class="sponsors-outer">`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 5,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      1350: {
        slidesPerView: 5,
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
    class: "clients-carousel owl-carousel owl-theme"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0$5)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0$5,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0$5,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1$4)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1$4,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1$4,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2$3)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_2$3,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2$3,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_3$2)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_3$2,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_3$2,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_4$2)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_4$2,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_4$2,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_5$2)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_5$2,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_5$2,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_6$1)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_6$1,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_6$1,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_7$1)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_7$1,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_7$1,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_8,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_8,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_9,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_9,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_10)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_10,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_10,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_11)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_11,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_11,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0$5,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1$4,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2$3,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3$2,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4$2,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_5$2,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_6$1,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_7$1,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_8,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_9,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_10,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_11,
                    alt: ""
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section15.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsDemoSection1 = __nuxt_component_0;
  const _component_SectionsDemoSection2 = __nuxt_component_1;
  const _component_SectionsDemoSection3 = __nuxt_component_2;
  const _component_SectionsDemoSection4 = __nuxt_component_3;
  const _component_SectionsDemoSection5 = __nuxt_component_4;
  const _component_SectionsDemoSection11 = __nuxt_component_5;
  const _component_SectionsDemoSection10 = __nuxt_component_6;
  const _component_SectionsDemoSection16 = __nuxt_component_7;
  const _component_SectionsDemoSection8 = __nuxt_component_8;
  const _component_SectionsDemoSection15 = __nuxt_component_9;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsDemoSection1, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection2, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection3, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection4, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection5, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection11, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection10, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection16, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection8, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsDemoSection15, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index-3/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ihuNMjsi.mjs.map
