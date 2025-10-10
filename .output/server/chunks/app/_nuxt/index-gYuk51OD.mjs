import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { _ as __nuxt_component_0$2 } from './CounterUp-_QH8Lf3J.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { M as ModalVideo, _ as _imports_0$1$1, a as _imports_0$2 } from './ModalVideo-xrJeC4ky.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$3, a as _imports_1$2 } from './about-4-7KiI2d46.mjs';
import { _ as _imports_0$4, a as _imports_1$3, b as _imports_2$1, c as _imports_3 } from './project-4-9sH5mCY_.mjs';
import { _ as _imports_0$5, a as _imports_1$4, b as _imports_2$2 } from './arrow-3-CQ_A2Kl6.mjs';
import { _ as _imports_0$6, a as _imports_1$5, b as _imports_2$3 } from './team-3-iV7YWsR1.mjs';
import { _ as _imports_0$7, a as _imports_2$4 } from './testi-thumb-3-kcWvlNwy.mjs';
import { _ as _imports_2$5, a as _imports_4, b as _imports_3$1, c as _imports_5 } from './news-3-HJPyztZQ.mjs';
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Most trusted logistics <span class="colored"${_scopeId2}>&amp;</span> delivery services</h2><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                          createTextVNode(" delivery services")
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
                            src: _imports_0$1$1,
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
              _push3(`</div></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                            src: _imports_0$1$1,
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
                        createTextVNode("Most trusted logistics "),
                        createVNode("span", { class: "colored" }, "&"),
                        createTextVNode(" delivery services")
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
                          src: _imports_0$1$1,
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
                          src: _imports_0$1$1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section1.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="title-column col-lg-6 col-md-12"><div class="title-box"><h4 class="title">m3Logi only aim to <br>contribute well to your businesses</h4></div></div><div class="features-column col-lg-6 col-md-12"><div class="row"><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-courier"></i><h4 class="title">Cost Optimisation</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-insurance-3"></i><h4 class="title">Reduced <br>Transit Time</h4></div></div><div class="feature-block-three col-lg-4 col-md-4 col-sm-12"><div class="inner"><i class="icon flaticon-delivery-box-3"></i><h4 class="title">Delivery <br>on Time</h4></div></div></div></div></div></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section2.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _imports_0$1 = "" + publicAssetsURL("images/resource/float-img-4.png");
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_ElementsCounterUp = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two style-two" }, _attrs))}><div class="anim-icons"><div class="float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="float-text wow zoomInRight">m3Logi</div></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms"><div class="inner-column"><div class="sec-title"><span class="sub-title">About Company</span><h2>Global logistics solution provider 2012</h2><h4>Simplify your freight and logistics needs with a personal approch.</h4><div class="text">Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.</div></div><div class="skills"><div class="skill-item"><div class="skill-header"><div class="skill-title">Transport</div></div><div class="skill-bar"><div class="bar-inner"><div class="bar progress-line" data-width="78" style="${ssrRenderStyle({ "width": "78%" })}"><div class="skill-percentage"><div class="count-box">`);
  _push(ssrRenderComponent(_component_ElementsCounterUp, { end: 78 }, null, _parent));
  _push(`%</div></div></div></div></div></div></div><div class="founder-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><h5 class="name">Muzammal Majeed</h5><span class="designation">CEO &amp; Founder of Company</span></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_1$2)} alt=""><div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div></figure></div></div></div></div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section3.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _imports_0 = "" + publicAssetsURL("images/resource/service-5.jpg");
const _imports_1$1 = "" + publicAssetsURL("images/resource/service-6.jpg");
const _imports_2 = "" + publicAssetsURL("images/resource/service-7.jpg");
const _sfc_main$d = {
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
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section-two" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/1.jpg)" })}"></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">OUR SERVICES</span><h2>Specialist logistics services</h2></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 3,
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
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1350: {
        slidesPerView: 3,
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
    class: "services-carousel owl-carousel owl-theme"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "service-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><i class="icon flaticon-air"${_scopeId2}></i><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/service-5.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure></div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>01 Service</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Air Freight`);
                  } else {
                    return [
                      createTextVNode("Air Freight")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-service-details",
                class: "read-more"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Read More <i class="fa fa-angle-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("i", { class: "icon flaticon-air" }),
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/service-5.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "01 Service"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Air Freight")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-service-details",
                      class: "read-more"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Read More "),
                        createVNode("i", { class: "fa fa-angle-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "service-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><i class="icon flaticon-cargo-boat"${_scopeId2}></i><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/service-6.jpg",
                class: "lightbox-image"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
              _push3(`</figure></div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>02 Service</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sea Transport`);
                  } else {
                    return [
                      createTextVNode("Sea Transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-service-details",
                class: "read-more"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Read More <i class="fa fa-angle-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("i", { class: "icon flaticon-cargo-boat" }),
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/service-6.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$1,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "02 Service"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Sea Transport")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-service-details",
                      class: "read-more"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Read More "),
                        createVNode("i", { class: "fa fa-angle-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "service-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><i class="icon flaticon-truck-2"${_scopeId2}></i><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/service-7.jpg",
                class: "lightbox-image"
              }, {
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
              _push3(`</figure></div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>03 Service</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Road Transport`);
                  } else {
                    return [
                      createTextVNode("Road Transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-service-details",
                class: "read-more"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Read More <i class="fa fa-angle-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("i", { class: "icon flaticon-truck-2" }),
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/service-7.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "03 Service"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Road Transport")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-service-details",
                      class: "read-more"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Read More "),
                        createVNode("i", { class: "fa fa-angle-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "service-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><i class="icon flaticon-cargo-boat"${_scopeId2}></i><figure class="image"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/images/resource/service-6.jpg",
                class: "lightbox-image"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
              _push3(`</figure></div><div class="content-box"${_scopeId2}><span class="sub-title"${_scopeId2}>02 Service</span><h4 class="title"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sea Transport`);
                  } else {
                    return [
                      createTextVNode("Sea Transport")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h4>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/page-service-details",
                class: "read-more"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Read More <i class="fa fa-angle-right"${_scopeId3}></i>`);
                  } else {
                    return [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("i", { class: "icon flaticon-cargo-boat" }),
                    createVNode("figure", { class: "image" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/images/resource/service-6.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$1,
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", { class: "sub-title" }, "02 Service"),
                    createVNode("h4", { class: "title" }, [
                      createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Sea Transport")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/page-service-details",
                      class: "read-more"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Read More "),
                        createVNode("i", { class: "fa fa-angle-right" })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "service-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("i", { class: "icon flaticon-air" }),
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/service-5.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "01 Service"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Air Freight")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-service-details",
                    class: "read-more"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "service-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("i", { class: "icon flaticon-cargo-boat" }),
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/service-6.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "02 Service"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Sea Transport")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-service-details",
                    class: "read-more"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "service-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("i", { class: "icon flaticon-truck-2" }),
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/service-7.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "03 Service"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Road Transport")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-service-details",
                    class: "read-more"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "service-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("i", { class: "icon flaticon-cargo-boat" }),
                  createVNode("figure", { class: "image" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/images/resource/service-6.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", { class: "sub-title" }, "02 Service"),
                  createVNode("h4", { class: "title" }, [
                    createVNode(_component_NuxtLink, { to: "/page-service-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Sea Transport")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "/page-service-details",
                    class: "read-more"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read More "),
                      createVNode("i", { class: "fa fa-angle-right" })
                    ]),
                    _: 1
                  })
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section4.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section5.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
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
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "project-section" }, _attrs))}><div class="large-container"><div class="sec-title text-center"><span class="sub-title">LATEST PROJECTS</span><h2>Works across the world</h2></div>`);
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
        slidesPerView: 2,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0$4,
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
                            src: _imports_0$4,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_1$3)} alt=""${_scopeId3}>`);
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
                        to: "/images/resource/project-2.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$3,
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
                to: "/images/resource/project-3.jpg",
                class: "lightbox-image"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId3}>`);
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
                            src: _imports_2$1,
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
                            src: _imports_3,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_1$3)} alt=""${_scopeId3}>`);
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
                        to: "/images/resource/project-2.jpg",
                        class: "lightbox-image"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$3,
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
                          src: _imports_0$4,
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
                          src: _imports_1$3,
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
                      to: "/images/resource/project-3.jpg",
                      class: "lightbox-image"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2$1,
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
                          src: _imports_3,
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
                          src: _imports_1$3,
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
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section6.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
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
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="why-choose-us-two"><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/6.jpg)" })}"></div><div class="bg-shape"><div class="shape" style="${ssrRenderStyle({ "background-image": "url(./images/icons/bg-shape.png)" })}"></div></div><div class="anim-icons"><div class="float-image wow zoomInLeft"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column wow fadeInLeft"><div class="sec-title light"><span class="sub-title">Why Choose Us</span><h2>We create opportunity <br>to reach potential</h2><div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div></div><div class="row"><div class="feature-block-four col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><i class="icon flaticon-delivery-box-4"></i><h4 class="title">Safety &amp; <br>reliable service</h4><p class="text">Nullam mollis elit quis dus is lacinia not efficitur</p></div></div><div class="feature-block-four col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><i class="icon flaticon-international-shipping-3"></i><h4 class="title">Real time <br>tracking system</h4><p class="text">Nullam mollis elit quis dus is lacinia not efficitur</p></div></div></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="image-box hide-desktop"><img${ssrRenderAttr("src", _imports_1$4)} alt=""></div><div class="inner-column"><div class="info-box bounce-y"><i class="icon flaticon-customer-service"></i><strong>Meet Our <br>Expert Agents</strong></div><div class="video-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    onClick: $options.openVideo,
    class: "play-now-two lightbox-image"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="icon fa fa-play"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "icon fa fa-play" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img${ssrRenderAttr("src", _imports_2$2)} alt="" class="arrow"></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section7.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Our Workers</span><h2>Meet expert team</h2></div><div class="row"><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$6)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$6,
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
        _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook-f" })
        ];
      }
    }),
    _: 1
  }, _parent));
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
  _push(`</div></div><div class="info-box"><span class="designation">Manager</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jessica Brown`);
      } else {
        return [
          createTextVNode("Jessica Brown")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$5,
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
        _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook-f" })
        ];
      }
    }),
    _: 1
  }, _parent));
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
  _push(`</div></div><div class="info-box"><span class="designation">Manager</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Richerd Fred`);
      } else {
        return [
          createTextVNode("Richerd Fred")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$3)} alt=""${_scopeId}>`);
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
  }, _parent));
  _push(`</figure><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook-f" })
        ];
      }
    }),
    _: 1
  }, _parent));
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
  _push(`</div></div><div class="info-box"><span class="designation">Manager</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Richerd Fred`);
      } else {
        return [
          createTextVNode("Richerd Fred")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section8.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_1 = "" + publicAssetsURL("images/resource/testi-thumb-4.jpg");
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-section-two" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/7.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-plane-1 bounce-y"></span><div class="icon float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$7)} alt=""></div></div><div class="auto-container"><div class="row"><div class="testimonial-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><div class="sec-title"><span class="sub-title">Our Testimonial</span><h2>What they\u2019re talking <br>about company</h2></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    class: "testimonial-carousel-two owl-carousel owl-theme default-dots"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><i class="icon icon-quote"${_scopeId2}></i><div class="text"${_scopeId2}>This is due to their excellent service, and augue homero consectetuer nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.</div><div class="info-box"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></div><h4 class="name"${_scopeId2}>Jessica Brown</h4><span class="designation"${_scopeId2}>Customer</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("i", { class: "icon icon-quote" }),
                  createVNode("div", { class: "text" }, "This is due to their excellent service, and augue homero consectetuer nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea."),
                  createVNode("div", { class: "info-box" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Jessica Brown"),
                    createVNode("span", { class: "designation" }, "Customer")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><i class="icon icon-quote"${_scopeId2}></i><div class="text"${_scopeId2}>propriae, malis exerci habemus has vocent persius eum ea. This is due to their excellent service, and augue homero consectetuer nam. Eu quo</div><div class="info-box"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$4)} alt=""${_scopeId2}></div><h4 class="name"${_scopeId2}>Jessica Brown</h4><span class="designation"${_scopeId2}>Customer</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("i", { class: "icon icon-quote" }),
                  createVNode("div", { class: "text" }, "propriae, malis exerci habemus has vocent persius eum ea. This is due to their excellent service, and augue homero consectetuer nam. Eu quo"),
                  createVNode("div", { class: "info-box" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_2$4,
                        alt: ""
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Jessica Brown"),
                    createVNode("span", { class: "designation" }, "Customer")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-two" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><i class="icon icon-quote"${_scopeId2}></i><div class="text"${_scopeId2}>This is due to their excellent service, propriae, malis exerci habemus has vocent persius eum ea. and augue homero consectetuer nam. Eu quo</div><div class="info-box"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$5)} alt=""${_scopeId2}></div><h4 class="name"${_scopeId2}>Jessica Brown</h4><span class="designation"${_scopeId2}>Customer</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("i", { class: "icon icon-quote" }),
                  createVNode("div", { class: "text" }, "This is due to their excellent service, propriae, malis exerci habemus has vocent persius eum ea. and augue homero consectetuer nam. Eu quo"),
                  createVNode("div", { class: "info-box" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_2$5,
                        alt: ""
                      })
                    ]),
                    createVNode("h4", { class: "name" }, "Jessica Brown"),
                    createVNode("span", { class: "designation" }, "Customer")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "testimonial-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("i", { class: "icon icon-quote" }),
                createVNode("div", { class: "text" }, "This is due to their excellent service, and augue homero consectetuer nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea."),
                createVNode("div", { class: "info-box" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: ""
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Jessica Brown"),
                  createVNode("span", { class: "designation" }, "Customer")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("i", { class: "icon icon-quote" }),
                createVNode("div", { class: "text" }, "propriae, malis exerci habemus has vocent persius eum ea. This is due to their excellent service, and augue homero consectetuer nam. Eu quo"),
                createVNode("div", { class: "info-box" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_2$4,
                      alt: ""
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Jessica Brown"),
                  createVNode("span", { class: "designation" }, "Customer")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block-two" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("i", { class: "icon icon-quote" }),
                createVNode("div", { class: "text" }, "This is due to their excellent service, propriae, malis exerci habemus has vocent persius eum ea. and augue homero consectetuer nam. Eu quo"),
                createVNode("div", { class: "info-box" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_2$5,
                      alt: ""
                    })
                  ]),
                  createVNode("h4", { class: "name" }, "Jessica Brown"),
                  createVNode("span", { class: "designation" }, "Customer")
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
  _push(`</div></div><div class="form-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><div class="contact-form"><h4 class="title">Request a quote</h4><form method="post" action="get" id="contact-form"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 form-group"><label>Your Name:</label><input type="text" name="full_name" placeholder="" required></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Your Email:</label><input type="text" name="Email" placeholder="" required></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Phone No::</label><input type="text" name="Phone" placeholder="" required></div><div class="col-lg-12 col-md-12 col-sm-12 form-group"><label>DIST (Miles):</label><div class="range-slider-one"><input type="text" class="range-amount" name="field-name"><div class="distance-range-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div class="ui-slider-range ui-widget-header ui-corner-all" style="${ssrRenderStyle({ "width": "40.15%", "left": "0%" })}"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="${ssrRenderStyle({ "left": "0%" })}"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="${ssrRenderStyle({ "left": "40.15%" })}"></span></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Freight type:</label><select class="custom-select"><option value="">Select</option><option value="">Air Freight</option><option value="">Ocean Freight</option><option value="">Rail transport</option><option value="">Cargo ship</option><option value="">Bulk cargo</option></select></div><div class="col-lg-6 col-md-6 col-sm-12 form-group"><label>Load:</label><select class="custom-select"><option value="">Select</option><option value="">Door to Door</option><option value="">International shipping</option><option value="">Multi Modal</option></select></div><div class="col-lg-12 col-md-12 col-sm-12 form-group"><button class="theme-btn btn-style-two hvr-light" type="submit" name="submit-form"><span class="btn-title">Submit Request</span></button></div></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section9.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "news-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">OUR NEWS FROM BLOG</span><h2>Latest news, advices <br>&amp; best posts from the blog</h2></div><div class="row"><div class="news-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
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
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section10.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-to-action-two pt-0" }, _attrs))}><div class="auto-container"><div class="outer-box wow fadeIn" style="${ssrRenderStyle({ "background-image": "url(./images/background/8.jpg)" })}"><div class="title-box"><h3 class="title">We\u2019re Optimists Who Love to <br>Work Together</h3></div><div class="btn-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-services",
    class: "theme-btn btn-style-two hvr-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>More Services</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "More Services")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section11.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section12.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section13.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section14.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section15.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Section16.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHome2Section1 = __nuxt_component_0;
  const _component_SectionsHome2Section2 = __nuxt_component_1;
  const _component_SectionsHome2Section3 = __nuxt_component_2;
  const _component_SectionsHome2Section4 = __nuxt_component_3;
  const _component_SectionsHome2Section5 = __nuxt_component_4;
  const _component_SectionsHome2Section6 = __nuxt_component_5;
  const _component_SectionsHome2Section7 = __nuxt_component_6;
  const _component_SectionsHome2Section8 = __nuxt_component_7;
  const _component_SectionsHome2Section9 = __nuxt_component_8;
  const _component_SectionsHome2Section10 = __nuxt_component_9;
  const _component_SectionsHome2Section11 = __nuxt_component_10;
  const _component_SectionsHome2Section12 = __nuxt_component_11;
  const _component_SectionsHome2Section13 = __nuxt_component_12;
  const _component_SectionsHome2Section14 = __nuxt_component_13;
  const _component_SectionsHome2Section15 = __nuxt_component_14;
  const _component_SectionsHome2Section16 = __nuxt_component_15;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHome2Section1, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section2, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section3, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section4, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section5, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section6, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section7, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section8, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section9, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section10, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section11, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section12, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section13, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section14, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section15, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Section16, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-gYuk51OD.mjs.map
