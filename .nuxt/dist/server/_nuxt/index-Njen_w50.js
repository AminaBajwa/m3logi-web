import { _ as __nuxt_component_0$1 } from "./nuxt-link-IzlaOwBm.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$2, a as _imports_0$5, M as ModalVideo } from "./ModalVideo-xrJeC4ky.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$3, a as _imports_2$2, b as _imports_1$2, c as _imports_0$8, d as _imports_1$5, e as _imports_2$5, f as _imports_3$3, g as _imports_4$3, h as _imports_5$2, i as _imports_6$1, j as _imports_7$1, k as _imports_8, l as _imports_9, m as _imports_10, n as _imports_11 } from "./client-img12-Z7sEQmcV.js";
import { _ as _imports_0$4, a as _imports_1$3, b as _imports_2$3, c as _imports_3$2, d as _imports_4$2, e as _imports_5$1, f as _imports_6, g as _imports_7, h as _imports_0$6 } from "./m3logiOffice-StZRbHgU.js";
import { _ as _imports_0$7, a as _imports_1$4, b as _imports_2$4 } from "./arrow-3-CQ_A2Kl6.js";
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
const _imports_0$1 = "" + __publicAssetsURL("images/main-slider/slider1.png");
const _imports_1$1 = "" + __publicAssetsURL("images/truck -m3.png");
const _imports_3$1 = "" + __publicAssetsURL("images/main-slider/slider2.png");
const _imports_4$1 = "" + __publicAssetsURL("images/main-slider/slider3.png");
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>A Single <br${_scopeId2}>Platform<span class="colored"${_scopeId2}> for</span> Global Trade</h2><p id="subtitle"${_scopeId2}>We connect businesses to global markets with trusted logistics, seamless shipping, and end-to-end transportation solutions — all on one platform</p><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Trusted <br${_scopeId2}>Partner</h4></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                        createVNode("p", { id: "subtitle" }, "We connect businesses to global markets with trusted logistics, seamless shipping, and end-to-end transportation solutions — all on one platform"),
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
                          createVNode("h4", { class: "counter-title" }, [
                            createTextVNode("Trusted "),
                            createVNode("br"),
                            createTextVNode("Partner")
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Fast &amp; Reliable Global <span class="colored"${_scopeId2}>Land </span>Transportation </h2><p id="subtitle"${_scopeId2}>From auction to yard, yard to port, or auction to auction — we ensure smooth vehicle movement through our trusted fleet network.</p><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Serving <br${_scopeId2}>Clients</h4></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                          createTextVNode("Fast & Reliable Global "),
                          createVNode("span", { class: "colored" }, "Land "),
                          createTextVNode("Transportation ")
                        ]),
                        createVNode("p", { id: "subtitle" }, "From auction to yard, yard to port, or auction to auction — we ensure smooth vehicle movement through our trusted fleet network."),
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
                          createVNode("h4", { class: "counter-title" }, [
                            createTextVNode("Serving "),
                            createVNode("br"),
                            createTextVNode("Clients")
                          ])
                        ]),
                        createVNode("figure", { class: "image animate-5 animate-x" }, [
                          createVNode("img", {
                            src: _imports_1$1,
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Trusted and <br${_scopeId2}> Safe <span class="colored"${_scopeId2}>Container</span> Shipment</h2><p id="subtitle"${_scopeId2}>We provide efficient container vanning and drayage services with trained professionals to ensure your shipment arrives safely and on time.</p><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Delivering <br${_scopeId2}> Worldwide</h4></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                          createTextVNode("Trusted and "),
                          createVNode("br"),
                          createTextVNode(" Safe "),
                          createVNode("span", { class: "colored" }, "Container"),
                          createTextVNode(" Shipment")
                        ]),
                        createVNode("p", { id: "subtitle" }, "We provide efficient container vanning and drayage services with trained professionals to ensure your shipment arrives safely and on time."),
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
                          createVNode("h4", { class: "counter-title" }, [
                            createTextVNode("Delivering "),
                            createVNode("br"),
                            createTextVNode(" Worldwide")
                          ])
                        ]),
                        createVNode("figure", { class: "image animate-5 animate-x" }, [
                          createVNode("img", {
                            src: _imports_3$1,
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Global Ocean <span class="colored"${_scopeId2}>Freight</span> Solutions </h2><p id="subtitle"${_scopeId2}>Partnering with major shipping lines, we offer RORO and container shipping to key global ports — connecting your business worldwide.</p><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Driven <br${_scopeId2}>Forward</h4></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                          createTextVNode("Global Ocean "),
                          createVNode("span", { class: "colored" }, "Freight"),
                          createTextVNode(" Solutions ")
                        ]),
                        createVNode("p", { id: "subtitle" }, "Partnering with major shipping lines, we offer RORO and container shipping to key global ports — connecting your business worldwide."),
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
                          createVNode("h4", { class: "counter-title" }, [
                            createTextVNode("Driven "),
                            createVNode("br"),
                            createTextVNode("Forward")
                          ])
                        ]),
                        createVNode("figure", { class: "image animate-5 animate-x" }, [
                          createVNode("img", {
                            src: _imports_4$1,
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
              _push3(`<div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(images/main-slider/3.jpg)" })}"${_scopeId2}></div><div class="auto-container"${_scopeId2}><div class="row"${_scopeId2}><div class="content-column col-lg-7 col-md-12 col-sm-12"${_scopeId2}><div class="content-box"${_scopeId2}><h2 class="title animate-3"${_scopeId2}>Vehicle Inspection <span class="colored"${_scopeId2}> &amp;</span> Maintenance </h2><p id="subtitle"${_scopeId2}>We provide professional vehicle inspection, maintenance, and pre-export inspection services to meet international standards and regulations.</p><div class="btn-box animate-4"${_scopeId2}>`);
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
              _push3(`</div></div></div><div class="image-column col-lg-5 col-md-12 col-sm-12"${_scopeId2}><div class="image-box"${_scopeId2}><div class="fact-counter-one bounce-y"${_scopeId2}><h4 class="counter-title"${_scopeId2}>Global <br${_scopeId2}> Network</h4></div><figure class="image animate-5 animate-x"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt=""${_scopeId2}></figure></div></div></div></div>`);
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
                          createTextVNode("Vehicle Inspection "),
                          createVNode("span", { class: "colored" }, " &"),
                          createTextVNode(" Maintenance ")
                        ]),
                        createVNode("p", { id: "subtitle" }, "We provide professional vehicle inspection, maintenance, and pre-export inspection services to meet international standards and regulations."),
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
                          createVNode("h4", { class: "counter-title" }, [
                            createTextVNode("Global "),
                            createVNode("br"),
                            createTextVNode(" Network")
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
                      createVNode("p", { id: "subtitle" }, "We connect businesses to global markets with trusted logistics, seamless shipping, and end-to-end transportation solutions — all on one platform"),
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
                        createVNode("h4", { class: "counter-title" }, [
                          createTextVNode("Trusted "),
                          createVNode("br"),
                          createTextVNode("Partner")
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
                        createTextVNode("Fast & Reliable Global "),
                        createVNode("span", { class: "colored" }, "Land "),
                        createTextVNode("Transportation ")
                      ]),
                      createVNode("p", { id: "subtitle" }, "From auction to yard, yard to port, or auction to auction — we ensure smooth vehicle movement through our trusted fleet network."),
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
                        createVNode("h4", { class: "counter-title" }, [
                          createTextVNode("Serving "),
                          createVNode("br"),
                          createTextVNode("Clients")
                        ])
                      ]),
                      createVNode("figure", { class: "image animate-5 animate-x" }, [
                        createVNode("img", {
                          src: _imports_1$1,
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
                        createTextVNode("Trusted and "),
                        createVNode("br"),
                        createTextVNode(" Safe "),
                        createVNode("span", { class: "colored" }, "Container"),
                        createTextVNode(" Shipment")
                      ]),
                      createVNode("p", { id: "subtitle" }, "We provide efficient container vanning and drayage services with trained professionals to ensure your shipment arrives safely and on time."),
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
                        createVNode("h4", { class: "counter-title" }, [
                          createTextVNode("Delivering "),
                          createVNode("br"),
                          createTextVNode(" Worldwide")
                        ])
                      ]),
                      createVNode("figure", { class: "image animate-5 animate-x" }, [
                        createVNode("img", {
                          src: _imports_3$1,
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
                        createTextVNode("Global Ocean "),
                        createVNode("span", { class: "colored" }, "Freight"),
                        createTextVNode(" Solutions ")
                      ]),
                      createVNode("p", { id: "subtitle" }, "Partnering with major shipping lines, we offer RORO and container shipping to key global ports — connecting your business worldwide."),
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
                        createVNode("h4", { class: "counter-title" }, [
                          createTextVNode("Driven "),
                          createVNode("br"),
                          createTextVNode("Forward")
                        ])
                      ]),
                      createVNode("figure", { class: "image animate-5 animate-x" }, [
                        createVNode("img", {
                          src: _imports_4$1,
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
                        createTextVNode("Vehicle Inspection "),
                        createVNode("span", { class: "colored" }, " &"),
                        createTextVNode(" Maintenance ")
                      ]),
                      createVNode("p", { id: "subtitle" }, "We provide professional vehicle inspection, maintenance, and pre-export inspection services to meet international standards and regulations."),
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
                        createVNode("h4", { class: "counter-title" }, [
                          createTextVNode("Global "),
                          createVNode("br"),
                          createTextVNode(" Network")
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section pt-60" }, _attrs))}><div class="anim-icons"><div class="float-image wow fadeInRight"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div><span class="icon icon-dots-1 bounce-x"></span><span class="icon icon-dotted-map zoom-one"></span></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Who We Are </span><h2>Your Trusted NVOCC &amp; Digital Shipping Partner</h2><div class="text">M3Logi is an easy-to-use shipping service with online booking and flexible schedules tailored to your needs. <br><br> As a licensed NVOCC, we legally act as a carrier and assume full carrier responsibilities—delivering end‑to‑end logistics, from real‑time cargo tracking to Bill of Lading (B/L) issuance. </div></div><div class="btm-box">`);
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
  _push(`</div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column" id="img"><figure class="image-1"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></figure><figure class="image-2"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></figure><div class="experience"><strong><i class="icon flaticon-global"></i> 12+<br> Years</strong> Working Exprience</div></div></div></div></div></section>`);
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
        _push2(`<img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId}>`);
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
        _push2(`<img${ssrRenderAttr("src", _imports_3$2)} alt=""${_scopeId}>`);
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
        _push2(`<img${ssrRenderAttr("src", _imports_4$2)} alt=""${_scopeId}>`);
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
  }, _attrs))}><div class="auto-container"><div class="outer-box"><div class="sec-title text-center light mb-0"><div class="sub-title">Get in touch with us anytime</div><h1>Looking for the best <br>logistics &amp; transport <span class="highlighted">service?</span></h1>`);
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
const _imports_2$1 = "" + __publicAssetsURL("images/gallery-3.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12 order-2"><div class="inner-column"><div class="sec-title"><span class="sub-title">Get to know us</span><h2>Global Logistics Solution Provider</h2><h4>Simplify your freight and logistics needs with a personal approch.</h4><h3>Message from CEO</h3><blockquote class="ceo-quote"> We support our customers in all aspects of their cargo from storage, transportation, and delivery, and strive for their benefit. If you are considering importing or exporting, please contact us and we will be happy to assist you. </blockquote><cite class="ceo-cite">— Muzammal Majeed, CEO &amp; Founder</cite></div><div class="founder-info"><div class="thumb"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div><h5 class="name">Muzammal Majeed</h5><span class="designation">CEO &amp; Founder of Company</span></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column"><figure class="image-1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$6)} alt=""></figure><figure class="image-2 wow fadeInRight"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section11.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="why-choose-us-two"><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/6.jpg)" })}"></div><div class="bg-shape"><div class="shape" style="${ssrRenderStyle({ "background-image": "url(./images/icons/bg-shape1.png)" })}"></div></div><div class="anim-icons"><div class="float-image wow zoomInLeft"><img${ssrRenderAttr("src", _imports_0$7)} alt=""></div></div><div class="auto-container"><div class="row"><div class="content-column col-lg-6 col-md-12 col-sm-12"><div class="inner-column wow fadeInLeft"><div class="sec-title light"><span class="sub-title">Why Choose Us</span><h2>Simple Online Booking, Full Carrier Responsibility.</h2><div class="text">We provide trusted, end-to-end logistics solutions with reliable shipping, strong global coverage, and unmatched expertise in vehicle handling and transportation</div></div><div class="row"><div class="feature-block-four col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><i class="icon flaticon-delivery-box-4"></i><h4 class="title">Total Logistics<br>Solutions</h4><p class="text">End-to-end shipping made simple and seamless.</p></div></div><div class="feature-block-four col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><i class="icon flaticon-international-shipping-3"></i><h4 class="title">Shipping <br>Worldwide</h4><p class="text">Global coverage with flexible and trusted schedules.</p></div></div></div></div></div><div class="image-column col-lg-6 col-md-12 col-sm-12"><div class="image-box hide-desktop"><img${ssrRenderAttr("src", _imports_1$4)} alt=""></div><div class="inner-column"><div class="info-box bounce-y"><i class="icon flaticon-customer-service"></i><strong>Global Coverage,<br> Trusted Schedules</strong></div><div class="video-box">`);
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
  _push(`<img${ssrRenderAttr("src", _imports_2$4)} alt="" class="arrow"></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section7.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-section" }, _attrs))}><div class="anim-icons"><span class="icon icon-dotted-map-2 zoom-one"></span><span class="icon icon-plane-1 bounce-y"></span></div><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">How It Work</span><h2>Ship with M3Logi in 3 Easy Steps</h2></div><div class="row"><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight"><div class="inner-box"><div class="icon-box"><span class="count">01</span><i class="icon flaticon-stock-1"></i></div><h4 class="title">Get an instant <br>online quotation</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms"><div class="inner-box"><div class="icon-box"><span class="count">02</span><i class="icon flaticon-checklist"></i></div><h4 class="title">Confirm booking<br>&amp; drop cargo</h4></div></div><div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms"><div class="inner-box"><div class="icon-box"><span class="count">03</span><i class="icon flaticon-location"></i></div><h4 class="title">Track, Ship &amp; <br>Receive Documents</h4></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Demo/Section16.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __publicAssetsURL("images/clients/c0.png");
const _imports_1 = "" + __publicAssetsURL("images/clients/c1.png");
const _imports_2 = "" + __publicAssetsURL("images/clients/c2.png");
const _imports_3 = "" + __publicAssetsURL("images/clients/c3.png");
const _imports_4 = "" + __publicAssetsURL("images/clients/c4.png");
const _imports_5 = "" + __publicAssetsURL("images/clients/c5.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Our Brands</span><h2>Specialist units delivering <br>end‑to‑end logistics by M3Logi</h2></div><div class="row"><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
        _push2(`MARINELOGI — Ocean Transportation`);
      } else {
        return [
          createTextVNode("MARINELOGI — Ocean Transportation")
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
        _push2(`CAR CARRIER — Vehicle Transportation`);
      } else {
        return [
          createTextVNode("CAR CARRIER — Vehicle Transportation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">End‑to‑End Vehicle Transport Nationwide</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
        _push2(`AUTO MECHANIC M3Logi — Maintenance &amp; PEI`);
      } else {
        return [
          createTextVNode("AUTO MECHANIC M3Logi — Maintenance & PEI")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">Certified Repairs &amp; Pre‑Export Inspection</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
        _push2(`WAREHOUSE M3Logi — Yard Services`);
      } else {
        return [
          createTextVNode("WAREHOUSE M3Logi — Yard Services")
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
        _push2(`DRAYAGE M3Logi — Container Drayage`);
      } else {
        return [
          createTextVNode("DRAYAGE M3Logi — Container Drayage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span class="">On‑Time Container Drayage Services</span></div></div></div><div class="team-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box"><div class="image-box"><figure class="image">`);
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
        _push2(`CUSTOM BROKER M3Logi — Customs Brokerage`);
      } else {
        return [
          createTextVNode("CUSTOM BROKER M3Logi — Customs Brokerage")
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
    class: "clients-carousel",
    "slides-per-view": 5,
    "space-between": 30,
    loop: true,
    autoplay: { delay: 8e3, disableOnInteraction: true },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 30 },
      575: { slidesPerView: 2, spaceBetween: 30 },
      767: { slidesPerView: 3, spaceBetween: 30 },
      991: { slidesPerView: 4, spaceBetween: 30 },
      1199: { slidesPerView: 5, spaceBetween: 30 },
      1350: { slidesPerView: 5, spaceBetween: 30 }
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".h1n", prevEl: ".h1p" },
    modules: $setup.modules
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "logo-box"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="client-logo"${ssrRenderAttr("src", _imports_0$8)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "client-logo",
                        src: _imports_0$8,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "logo-box"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "client-logo",
                      src: _imports_0$8,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_1$5)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1$5,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_2$5)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2$5,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_3$3)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_3$3,
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
                      src: _imports_3$3,
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
                    _push4(`<img${ssrRenderAttr("src", _imports_4$3)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_4$3,
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
                      src: _imports_4$3,
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
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, {
                to: "#",
                class: "logo-box"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "client-logo",
                    src: _imports_0$8,
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
                    src: _imports_1$5,
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
                    src: _imports_2$5,
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
                    src: _imports_3$3,
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
                    src: _imports_4$3,
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
  const _component_SectionsDemoSection7 = __nuxt_component_6;
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
  _push(ssrRenderComponent(_component_SectionsDemoSection7, null, null, _parent));
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
export {
  index as default
};
//# sourceMappingURL=index-Njen_w50.js.map
