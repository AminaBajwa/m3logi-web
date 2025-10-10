import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_1$1, b as __nuxt_component_2$1 } from './BackToTop-4HFT4Dih.mjs';
import { useSSRContext, mergeProps, ref, onUnmounted, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("images/logoM3Logi-.png");
const _sfc_main$2 = {
  __name: "Header1",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    const handleScroll = () => {
      const scrollCheck = (void 0).scrollY > 100;
      if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    ref(false);
    const isSearch = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_LayoutMenu = __nuxt_component_1$1;
      const _component_LayoutMobileMenu = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["main-header header-style-one", { "moblie-search-active": isSearch.value }]
      }, _attrs))}><div class="header-top"><div class="top-left"><ul class="list-style-one"><li><i class="fa fa-phone-volume"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+81-3-6262-8600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+81-3-6262-8600`);
          } else {
            return [
              createTextVNode("+81-3-6262-8600")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><i class="fa fa-user"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`login`);
          } else {
            return [
              createTextVNode("login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><i class="fa fa-search"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Track your Shipment`);
          } else {
            return [
              createTextVNode("Track your Shipment")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>Select Language `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flag-icon flag-icon-us"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "flag-icon flag-icon-us" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flag-icon flag-icon-jp"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "flag-icon flag-icon-jp" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><i class="fa fa-globe"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flag-icon flag-icon-us"${_scopeId}></span> Eng`);
          } else {
            return [
              createVNode("span", { class: "flag-icon flag-icon-us" }),
              createTextVNode(" Eng")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flag-icon flag-icon-jp"${_scopeId}></span> Jpn`);
          } else {
            return [
              createVNode("span", { class: "flag-icon flag-icon-jp" }),
              createTextVNode(" Jpn")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="top-right"><ul class="social-icon-one"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://web.facebook.com/m3Logi/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-facebook-square"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-facebook-square" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://twitter.com/m3Logi" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-twitter"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-twitter" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://www.instagram.com/m3.logi/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-instagram"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="header-lower"><div class="main-box"><div class="logo-box"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title="m3Logi"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: "m3Logi"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nav-outer"><nav class="nav main-menu">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav><div class="outer-box"><button class="ui-btn ui-btn search-btn"><span class="icon lnr lnr-icon-search"></span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page-contact",
        class: "theme-btn btn-style-one alternate"
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
      _push(`<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div><div class="mobile-menu"><div class="menu-backdrop"></div><nav class="menu-box"><div class="upper-box"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title="Fesho"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: "Fesho"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="close-btn"><i class="icon fa fa-times"></i></div></div>`);
      _push(ssrRenderComponent(_component_LayoutMobileMenu, null, null, _parent));
      _push(`<ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Call Now</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+92880098670" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+92 (8800) - 98670`);
          } else {
            return [
              createTextVNode("+92 (8800) - 98670")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Send Email</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:help@company.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`help@company.com`);
          } else {
            return [
              createTextVNode("help@company.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Fri 9:00 - 5:00, Saturday, Sunday - CLOSED </div></li></ul><ul class="social-icon-one"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://web.facebook.com/m3Logi/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-facebook-square"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-facebook-square" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://twitter.com/m3Logi" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-twitter"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-twitter" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://www.instagram.com/m3.logi/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-instagram"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span class="fa fa-times"></span></button><div class="search-inner"><form method="post" action=""><div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..." required=""><button type="submit"><i class="fa fa-search"></i></button></div></form></div></div><div class="${ssrRenderClass([{ "fixed-header animated slideInDown": scroll.value }, "sticky-header"])}"><div class="auto-container"><div class="inner-container"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-outer"><nav class="main-menu"><div class="navbar-collapse show collapse clearfix">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</div></nav><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _imports_1 = "" + publicAssetsURL("images/resource/project-thumb-1.jpg");
const _imports_2 = "" + publicAssetsURL("images/resource/project-thumb-2.jpg");
const _imports_3 = "" + publicAssetsURL("images/resource/project-thumb-3.jpg");
const _imports_4 = "" + publicAssetsURL("images/resource/project-thumb-4.jpg");
const _imports_5 = "" + publicAssetsURL("images/resource/project-thumb-5.jpg");
const _imports_6 = "" + publicAssetsURL("images/resource/project-thumb-6.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer" }, _attrs))}><div class="bg-image" style="${ssrRenderStyle({ "background-image": "url(./images/background/5.jpg)" })}"></div><div class="anim-icons"><span class="icon icon-plane-3 bounce-x"></span></div><div class="contacts-outer"><div class="auto-container"><div class="row"><div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-international-shipping-2"></i></div><h4 class="title">Address</h4><div class="text">Aks Hatchobori Bldg 5 Floor, 2 Chome 27-6, Hatchobori, Chuo-ku, Tokyo-to Japan</div></div></div><div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-stock-1"></i></div><h4 class="title">Contact</h4><div class="text">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:sales@m3Logi.com " }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`sales@m3Logi.com `);
      } else {
        return [
          createTextVNode("sales@m3Logi.com ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+92(8800)48720" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+81-3-6262-8600`);
      } else {
        return [
          createTextVNode("+81-3-6262-8600")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms"><div class="inner-box"><div class="icon-box"><i class="icon flaticon-24-hours-2"></i></div><h4 class="title">Timing</h4><div class="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div></div></div></div></div></div><div class="widgets-section"><div class="auto-container"><div class="row"><div class="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12"><div class="footer-widget about-widget"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
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
  _push(`</div><div class="text">m3Logi brings the world closer together we provide you with the best possible service tailored to your needs.</div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/page-about",
    class: "theme-btn btn-style-one hvr-light small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>About</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12"><div class="footer-widget"><h3 class="widget-title">Service</h3><ul class="user-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Reliability &amp; Punctuality`);
      } else {
        return [
          createTextVNode("Reliability & Punctuality")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Trusted Franchise`);
      } else {
        return [
          createTextVNode("Trusted Franchise")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Warehoues Storage`);
      } else {
        return [
          createTextVNode("Warehoues Storage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Real Time Tracking`);
      } else {
        return [
          createTextVNode("Real Time Tracking")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Transparent Pricing`);
      } else {
        return [
          createTextVNode("Transparent Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12"><div class="footer-widget gallery-widget"><h3 class="widget-title">Projects</h3><div class="widget-content"><div class="outer clearfix"><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><figure class="image">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure></div></div></div></div><div class="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12"><div class="footer-widget"><h3 class="widget-title">Newsletter</h3><div class="widget-content"><div class="subscribe-form"><div class="text">Subscribe our newsletter to get our latest update &amp; news</div><form method="post"><div class="form-group"><input type="email" name="email" class="email" value="" placeholder="Email Address"><button type="button" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-paper-plane"></i></span></button></div></form></div></div></div></div></div></div></div><div class="footer-bottom"><div class="auto-container"><div class="inner-container"><div class="copyright-text"><p>\xA9 Copyright 2025 by `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`m3Logi.com`);
      } else {
        return [
          createTextVNode("m3Logi.com")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><ul class="social-icon-two"><li>`);
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
  _push(`</li><li>`);
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-pinterest"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-pinterest" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
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
  _push(`</li></ul></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader1 = __nuxt_component_0;
  const _component_LayoutFooter1 = __nuxt_component_1;
  const _component_ElementsBackToTop = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader1, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter1, null, null, _parent));
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-SpC-e1Kf.mjs.map
