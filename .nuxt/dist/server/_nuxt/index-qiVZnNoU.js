import { _ as __nuxt_component_0$1 } from "./nuxt-link-IzlaOwBm.js";
import { _ as __nuxt_component_0$2 } from "./CounterUp-_QH8Lf3J.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$5, M as ModalVideo, b as _imports_0$9, a as _imports_0$a } from "./delivery-boy-z3bljpix.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$6, a as _imports_1$2, b as _imports_2$1 } from "./about-2-OeFhYpGN.js";
import { _ as _imports_3$1, a as _imports_1$3, b as _imports_0$7, c as _imports_2$2 } from "./service-4-4xo4pTju.js";
import { _ as _imports_0$8, a as _imports_1$4, b as _imports_2$3, c as _imports_3$2 } from "./project-4-9sH5mCY_.js";
import { _ as _imports_0$b, a as _imports_1$5 } from "./about-4-7KiI2d46.js";
import { _ as _imports_0$c } from "./testi-thumb-1-GDJFDpmc.js";
import { _ as _imports_1$6 } from "./testi-thumb-2-GFqmT0Cf.js";
import { _ as _imports_2$4 } from "./testi-thumb-3-6l17gWPZ.js";
import { _ as _imports_0$d, a as _imports_1$7, b as _imports_2$5 } from "./news-3-Q4CK2Ms6.js";
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
const _sfc_main$g = {
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
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$5)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                            src: _imports_0$5,
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
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$5)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                            src: _imports_0$5,
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
                          src: _imports_0$5,
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
                          src: _imports_0$5,
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section1.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section" }, _attrs))}><div class="auto-container"><div class="row"><div class="feature-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-logistics-delivery-6"></i><span class="count">01</span></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RORO<br${_scopeId}> Booking`);
      } else {
        return [
          createTextVNode("RORO"),
          createVNode("br"),
          createTextVNode(" Booking")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">M3Logi offers tailored, safe shipping solutions including RORO.</div></div></div></div><div class="feature-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-fast-delivery-1"></i><span class="count">02</span></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Container<br${_scopeId}> Booking`);
      } else {
        return [
          createTextVNode("Container"),
          createVNode("br"),
          createTextVNode(" Booking")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">M3Logi provides safe, customized container shipping.</div></div></div></div><div class="feature-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-container-2"></i><span class="count">03</span></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-about" }, {
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
  _push(`</h4><div class="text">M3Logi ensures hassle-free land transport services.</div></div></div></div></div></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section2.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-0" }, _attrs))}><div class="anim-icons"><div class="float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$6)} alt=""></div><span class="icon icon-dots-1 bounce-x"></span><span class="icon icon-dotted-map zoom-one"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Transportation Company</span><h2>We provide full rang of transportation services</h2><div class="text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution.</div></div><div class="content-box"><div class="about-block"><i class="icon flaticon-worldwide-shipping"></i><h4 class="title">Worldwide services </h4><p class="text">We’re always provide people a complete solution focused of any business.</p></div><div class="about-block"><i class="icon flaticon-3d-cube"></i><h4 class="title">Local services</h4><p class="text">We’re always provide people a complete solution focused of any business.</p></div></div><div class="btm-box">`);
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
  _push(`</div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure><div class="experience"><strong><i class="icon flaticon-global"></i> 12+<br> Years</strong> Working Exprience</div></div></div></div></div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section3.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/1.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-wave-line"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">SPECIALISE IN THE TRANSPORTATION</span><h2>Specialist logistics services</h2></div><div class="row"><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
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
  _push(`</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$7)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$7,
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
  _push(`</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div></div><div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
  _push(`</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div></div></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section4.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _imports_0$4 = "" + __publicAssetsURL("images/icons/arrow-2.png");
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "tracking-section pull-down" }, _attrs))}><div class="auto-container"><div class="outer-box"><div class="arrow-box wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$4)} alt="" class="icon"><span class="title">Results in <br>few seconds</span></div><div class="tracking-form"><h4 class="title">Track your <br>Order</h4><form method="post" action="job-list-v10"><div class="row"><div class="form-group col-lg-4 col-md-12 col-sm-12"><span class="icon lnr-icon-user"></span><input type="text" name="field_name" placeholder="Your Tracking ID Now"></div><div class="form-group col-lg-4 col-md-12 col-sm-12"><span class="icon lnr-icon-envelope1"></span><input type="text" name="field_name" placeholder="Your Email Address"></div><div class="form-group col-lg-4 col-md-12 col-sm-12 text-end"><button type="submit" class="theme-btn btn-style-one"><span class="btn-title">Track Order</span></button></div></div></form></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section5.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  components: {
    ModalVideo
  },
  data: () => {
    return {
      videoIsOpen: false
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
  computed: {
    videoChannel: function() {
      return "youtube";
    },
    videoId: function() {
      return "QiqQoqtnHrk";
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="call-to-action" style="${ssrRenderStyle({ "background-image": "url(./images/background/2.jpg)" })}"><div class="auto-container"><div class="outer-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    onClick: $options.openVideo,
    class: "play-now lightbox-image"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="icon fa fa-play"${_scopeId}></i><span class="ripple"${_scopeId}></span>`);
      } else {
        return [
          createVNode("i", { class: "icon fa fa-play" }),
          createVNode("span", { class: "ripple" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="sec-title light mb-0"><div class="sub-title">Get in touch with us anytime</div><h1>Looking for the best <br>logistics transport service?</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-services",
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
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section6.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-section" }, _attrs))}><div class="anim-icons"><span class="icon icon-dotted-map-2 zoom-one"></span><span class="icon icon-plane-1 bounce-y"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">How It Work</span><h2>3 easy step to task</h2></div><div class="row"><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight"><div class="inner-box"><div class="icon-box"><span class="count">01</span><i class="icon flaticon-delivery-box-4"></i></div><h4 class="title">Enter your <br>&amp; product details</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms"><div class="inner-box"><div class="icon-box"><span class="count">02</span><i class="icon flaticon-stock-1"></i></div><h4 class="title">Pay your service <br>charges</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms"><div class="inner-box"><div class="icon-box"><span class="count">03</span><i class="icon flaticon-delivery-box-3"></i></div><h4 class="title">Ready to send <br>your goods</h4></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section7.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _imports_0$3 = "" + __publicAssetsURL("images/resource/image-1.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_ElementsCounterUp = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "fun-fact-section p-0" }, _attrs))}><div class="auto-container"><div class="outer-box"><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/bg-3.1.png)" })}"></div><div class="row"><div class="content-column col-lg-7 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title light"><span class="sub-title">We Deliver on time</span><h2>Total Coverage &amp; Flexibility in Exports &amp; Imports</h2><div class="text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div></div><div class="fact-counter"><div class="row"><div class="counter-column col-lg-4 col-md-6 col-sm-12"><div class="inner"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 869 }, null, _parent));
  _push(`</div><h4 class="counter-title">Projects <br>Completed</h4><i class="icon flaticon-delivery-8"></i></div></div><div class="counter-column col-lg-4 col-md-6 col-sm-12"><div class="inner"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 683 }, null, _parent));
  _push(`</div><h4 class="counter-title">Satisfied <br>Customers</h4><i class="icon flaticon-team"></i></div></div><div class="counter-column col-lg-4 col-md-6 col-sm-12"><div class="inner"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 975 }, null, _parent));
  _push(`</div><h4 class="counter-title">Delivered<br> on Time</h4><i class="icon flaticon-delivery-box-3"></i></div></div></div></div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"><div class="inner-column"><figure class="image"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section8.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
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
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "project-section pb-0" }, _attrs))}><div class="large-container"><div class="sec-title text-center"><span class="sub-title">LATEST PROJECTS</span><h2>Works across the world</h2></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 4,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
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
        slidesPerView: 3,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1350: {
        slidesPerView: 4,
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
    class: "project-carousel owl-carousel owl-theme"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "project-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/project-1.jpg",
                class: "lightbox-image"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0$8)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0$8,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</figure>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-project-details",
                class: "icon"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="fa fa-plus"${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fa fa-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>Logistics</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Special transport`);
                  } else {
                    return [
                      createTextVNode("Special transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/project-1.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0$8,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-project-details",
                      class: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa fa-plus" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "Logistics"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Special transport")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "project-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/project-2.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-project-details",
                class: "icon"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="fa fa-plus"${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fa fa-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>Cargo</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Special transport`);
                  } else {
                    return [
                      createTextVNode("Special transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/project-2.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$4,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-project-details",
                      class: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa fa-plus" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "Cargo"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Special transport")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "project-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/project-3.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-project-details",
                class: "icon"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="fa fa-plus"${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fa fa-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>Logistics</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Special transport`);
                  } else {
                    return [
                      createTextVNode("Special transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/project-3.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_2$3,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-project-details",
                      class: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa fa-plus" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "Logistics"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Special transport")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "project-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/project-4.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-project-details",
                class: "icon"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="fa fa-plus"${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fa fa-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>Logistics</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Special transport`);
                  } else {
                    return [
                      createTextVNode("Special transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/project-4.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_3$2,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-project-details",
                      class: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa fa-plus" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "Logistics"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Special transport")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "project-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/project-2.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-project-details",
                class: "icon"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<i class="fa fa-plus"${_scopeId3}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fa fa-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>Cargo</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Special transport`);
                  } else {
                    return [
                      createTextVNode("Special transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/project-2.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$4,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-project-details",
                      class: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa fa-plus" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "Cargo"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Special transport")
                        ]),
                        _: 1
                      })
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
          createVNode(_component_swiper_slide, { class: "project-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/project-1.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0$8,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-project-details",
                    class: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa fa-plus" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "Logistics"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Special transport")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "project-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/project-2.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1$4,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-project-details",
                    class: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa fa-plus" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "Cargo"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Special transport")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "project-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/project-3.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2$3,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-project-details",
                    class: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa fa-plus" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "Logistics"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Special transport")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "project-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/project-4.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_3$2,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-project-details",
                    class: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa fa-plus" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "Logistics"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Special transport")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "project-block" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/project-2.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1$4,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-project-details",
                    class: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa fa-plus" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "Cargo"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-project-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Special transport")
                      ]),
                      _: 1
                    })
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
  _push(`</div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section9.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-us pull-up pb-0" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/4.jpg)" })}"></div><div class="anim-icons"><div class="float-image"><img${ssrRenderAttr("src", _imports_0$9)} alt=""></div></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><div class="sec-title light"><span class="sub-title">Why Choose Us</span><h2>We create opportunity to reach potential</h2></div><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-delivery-box-4"></i><h4 class="title">Safety and reliability</h4><p class="text">Aenean placerat ut lacus nec pulvinar. Donec eu leo, ante at, commodo diam.</p></div></div><div class="feature-block-two"><div class="inner-box"><i class="icon flaticon-international-shipping-3"></i><h4 class="title">Shipping worldwide</h4><p class="text">Interdum et malesuada fames ac ante ipsum primis in faucibus donec tempor nisi neque.</p></div></div></div></div><div class="form-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><div class="contact-form wow fadeInLeft"><form method="post" action="get" id="contact-form"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 form-group"><label>Your Name:</label><input type="text" name="full_name" placeholder="" required></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Your Email:</label><input type="text" name="Email" placeholder="" required></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Phone No::</label><input type="text" name="Phone" placeholder="" required></div><div class="col-lg-12 col-md-12 col-sm-12 form-group"><label>DIST (Miles):</label><div class="range-slider-one"><input type="text" class="range-amount" name="field-name"><div class="distance-range-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div class="ui-slider-range ui-widget-header ui-corner-all" style="${ssrRenderStyle({ "width": "40.15%", "left": "0%" })}"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="${ssrRenderStyle({ "left": "0%" })}"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="${ssrRenderStyle({ "left": "40.15%" })}"></span></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Freight type:</label><select class="custom-select"><option value="">Select</option><option value="">Air Freight</option><option value="">Ocean Freight</option><option value="">Rail transport</option><option value="">Cargo ship</option><option value="">Bulk cargo</option></select></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Load:</label><select class="custom-select"><option value="">Select</option><option value="">Door to Door</option><option value="">International shipping</option><option value="">Multi Modal</option></select></div><div class="col-lg-12 col-md-12 col-sm-12 form-group"><button class="theme-btn btn-style-two hvr-light" type="submit" name="submit-form"><span class="btn-title">Submit Request</span></button></div></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section10.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Get to know us</span><h2>Global Logistics Solution Provider 2012</h2><h4>Simplify your freight and logistics needs with a personal approch.</h4><div class="text">Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.</div></div><div class="row"><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-courier"></i><h4 class="title">Cost Optimisation</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-insurance-3"></i><h4 class="title">Reduced <br>Transit Time</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-box-3"></i><h4 class="title">Delivery <br>on Time</h4></div></div></div><div class="founder-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_0$a)} alt=""></div><h5 class="name">Muzammal Majeed</h5><span class="designation">CEO &amp; Founder of Company</span></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$b)} alt=""></figure><figure class="image-2 wow fadeInRight"><img${ssrRenderAttr("src", _imports_1$5)} alt=""><div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div></figure></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section11.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-section pt-0" }, _attrs))}><div class="anim-icons"><span class="icon icon-bg-dots"></span><span class="icon icon-plane-2 bounce-y"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Client’s Testimonials</span><h2>Here are some clients <br>feedbacks</h2></div><div class="outer-box">`);
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
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$c)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Jhon D. William</h4></div>`);
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
                    createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_0$c,
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
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$6)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Aleesha Brown</h4></div>`);
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
                    createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_1$6,
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
              _push3(`<div class="inner-box"${_scopeId2}><div class="content-box"${_scopeId2}><div class="rating"${_scopeId2}><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star"${_scopeId2}></i><i class="fa fa-star-half-alt"${_scopeId2}></i></div><div class="text"${_scopeId2}>“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div></div><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$4)} alt=""${_scopeId2}></div><span class="designation"${_scopeId2}>Client</span><h4 class="name"${_scopeId2}>Mike Hardon</h4></div>`);
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
                    createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                  ]),
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_2$4,
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
                  createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_0$c,
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
                  createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_1$6,
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
                  createVNode("div", { class: "text" }, "“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.")
                ]),
                createVNode("div", { class: "thumb" }, [
                  createVNode("img", {
                    src: _imports_2$4,
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section12.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$2 = "" + __publicAssetsURL("images/resource/offer-img-1.jpg");
const _imports_1$1 = "" + __publicAssetsURL("images/resource/offer-img-2.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ElementsCounterUp = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "offer-section" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-5 col-md-12"><div class="inner-column"><div class="sec-title light"><span class="sub-title">Special Logistics</span><h2>Best services for businesses</h2><div class="text">TM3LOGI is your trusted NVOCC and freight forwarder, delivering seamless ocean transportation, custom brokerage, and vehicle logistics worldwide. From container drayage to RORO shipping, we handle every step with precision.</div></div><ul class="list-style-two"><li><i class="fa fa-plane"></i> Urgent Transport Solutions</li><li><i class="fa fa-plane"></i> Top quality services with reasonable price</li><li><i class="fa fa-plane"></i> Reliable &amp; Experienced Team of 110+ Experts</li></ul>`);
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
  _push(`</div></div><div class="image-column col-lg-7 col-md-12 col-sm-12"><div class="inner-column"><div class="image-box"><figure class="image"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure><figure class="image"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></figure><div class="fact-counter-one bounce-y"><h4 class="counter-title">Trusted by</h4><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 4890 }, null, _parent));
  _push(`</div></div><div class="caption-box wow fadeIn"><div class="inner"><i class="icon flaticon-logistics-3"></i><h4 class="title">Moving your <br>products across borders</h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section13.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = "" + __publicAssetsURL("images/resource/float-img-2.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "news-section" }, _attrs))}><div class="anim-icons"><div class="float-image wow zoomInLeft"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">OUR NEWS FROM BLOG</span><h2>Latest news, advices<br> &amp; best posts from the blog</h2></div><div class="row"><div class="news-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$d)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$d,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date"><b>28</b> SEP</span></div><div class="lower-content"><ul class="post-info"><li><i class="fa fa-user"></i> by Admin</li><li><i class="fa fa-comments"></i> 2 Comments</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`We very careful handling the valuable goods`);
      } else {
        return [
          createTextVNode("We very careful handling the valuable goods")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More <i class="fa fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More "),
          createVNode("i", { class: "fa fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="news-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$7)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$7,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date"><b>28</b> SEP</span></div><div class="lower-content"><ul class="post-info"><li><i class="fa fa-user"></i> by Admin</li><li><i class="fa fa-comments"></i> 2 Comments</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Why is supply chain visibility so important?`);
      } else {
        return [
          createTextVNode("Why is supply chain visibility so important?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More <i class="fa fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More "),
          createVNode("i", { class: "fa fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="news-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$5,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date"><b>28</b> SEP</span></div><div class="lower-content"><ul class="post-info"><li><i class="fa fa-user"></i> by Admin</li><li><i class="fa fa-comments"></i> 2 Comments</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cargo flow through better supply in UK`);
      } else {
        return [
          createTextVNode("Cargo flow through better supply in UK")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More <i class="fa fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More "),
          createVNode("i", { class: "fa fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section14.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __publicAssetsURL("images/clients/client-img1.png");
const _imports_1 = "" + __publicAssetsURL("images/clients/client-img2.png");
const _imports_2 = "" + __publicAssetsURL("images/clients/client-img3.png");
const _imports_3 = "" + __publicAssetsURL("images/clients/client-img4.png");
const _imports_4 = "" + __publicAssetsURL("images/clients/client-img5.png");
const _imports_5 = "" + __publicAssetsURL("images/clients/client-img6.png");
const _imports_6 = "" + __publicAssetsURL("images/clients/client-img7.png");
const _imports_7 = "" + __publicAssetsURL("images/clients/client-img8.png");
const _imports_8 = "" + __publicAssetsURL("images/clients/client-img9.png");
const _imports_9 = "" + __publicAssetsURL("images/clients/client-img10.png");
const _imports_10 = "" + __publicAssetsURL("images/clients/client-img11.png");
const _imports_11 = "" + __publicAssetsURL("images/clients/client-img12.png");
const _sfc_main$2 = {
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_3,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_4,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_5,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_6,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_7,
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
                    src: _imports_0,
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
                    src: _imports_1,
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
                    src: _imports_2,
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
                    src: _imports_3,
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
                    src: _imports_4,
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
                    src: _imports_5,
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
                    src: _imports_6,
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
                    src: _imports_7,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section15.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Section16.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHome1Section1 = __nuxt_component_0;
  const _component_SectionsHome1Section2 = __nuxt_component_1;
  const _component_SectionsHome1Section3 = __nuxt_component_2;
  const _component_SectionsHome1Section4 = __nuxt_component_3;
  const _component_SectionsHome1Section5 = __nuxt_component_4;
  const _component_SectionsHome1Section6 = __nuxt_component_5;
  const _component_SectionsHome1Section7 = __nuxt_component_6;
  const _component_SectionsHome1Section8 = __nuxt_component_7;
  const _component_SectionsHome1Section9 = __nuxt_component_8;
  const _component_SectionsHome1Section10 = __nuxt_component_9;
  const _component_SectionsHome1Section11 = __nuxt_component_10;
  const _component_SectionsHome1Section12 = __nuxt_component_11;
  const _component_SectionsHome1Section13 = __nuxt_component_12;
  const _component_SectionsHome1Section14 = __nuxt_component_13;
  const _component_SectionsHome1Section15 = __nuxt_component_14;
  const _component_SectionsHome1Section16 = __nuxt_component_15;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHome1Section1, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section2, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section3, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section4, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section5, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section6, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section7, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section8, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section9, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section10, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section11, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section12, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section13, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section14, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section15, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Section16, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-qiVZnNoU.js.map
