import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { mergeProps, useSSRContext, ref, onUnmounted, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_2, a as __nuxt_component_1$1, b as __nuxt_component_2$1 } from './BackToTop-5fHqBUU9.mjs';
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

const _imports_0 = "" + publicAssetsURL("images/logo-3.png");
const _imports_1 = "" + publicAssetsURL("images/logo-2.png");
const _imports_2 = "" + publicAssetsURL("images/logo.png");
const _sfc_main$2 = {
  __name: "Header2",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "main-header header-style-two" }, _attrs))}><div class="header-top"><div class="top-left"><ul class="list-style-one"><li><i class="fa fa-map-marker-alt"></i> AKS Hatchobori Bldg 5floor</li><li><i class="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li><li><i class="fa fa-phone-volume"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+92(8800)87890" }, {
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
      _push(`</li></ul></div><div class="top-right"><ul class="social-icon-one"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-pinterest-p"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-pinterest-p" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(`</div></div><div class="nav-outer"><nav class="nav main-menu"><ul class="navigation"><li class="current dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home page 01`);
          } else {
            return [
              createTextVNode("Home page 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/index-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home page 02`);
          } else {
            return [
              createTextVNode("Home page 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Header Styles`);
          } else {
            return [
              createTextVNode("Header Styles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Header Style One`);
          } else {
            return [
              createTextVNode("Header Style One")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/index-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Header Style Two`);
          } else {
            return [
              createTextVNode("Header Style Two")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pages`);
          } else {
            return [
              createTextVNode("Pages")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services List`);
          } else {
            return [
              createTextVNode("Services List")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-service-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Service Details`);
          } else {
            return [
              createTextVNode("Service Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects List`);
          } else {
            return [
              createTextVNode("Projects List")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Project Details`);
          } else {
            return [
              createTextVNode("Project Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Team`);
          } else {
            return [
              createTextVNode("Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Team List`);
          } else {
            return [
              createTextVNode("Team List")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Team Details`);
          } else {
            return [
              createTextVNode("Team Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-testimonial" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Testimonial`);
          } else {
            return [
              createTextVNode("Testimonial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-pricing" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-faq" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ`);
          } else {
            return [
              createTextVNode("FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-404" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Page 404`);
          } else {
            return [
              createTextVNode("Page 404")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop`);
          } else {
            return [
              createTextVNode("Shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop-products" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop-products-sidebar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products with Sidebar`);
          } else {
            return [
              createTextVNode("Products with Sidebar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop-product-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Product Details`);
          } else {
            return [
              createTextVNode("Product Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop-cart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cart`);
          } else {
            return [
              createTextVNode("Cart")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop-checkout" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Checkout`);
          } else {
            return [
              createTextVNode("Checkout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="dropdown">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News`);
          } else {
            return [
              createTextVNode("News")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-grid" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News Grid`);
          } else {
            return [
              createTextVNode("News Grid")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/news-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News Details`);
          } else {
            return [
              createTextVNode("News Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="outer-box"><button class="ui-btn ui-btn search-btn"><span class="icon lnr lnr-icon-search"></span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "ui-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lnr-icon-shopping-cart"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "lnr-icon-shopping-cart" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page-contact",
        class: "theme-btn btn-style-two hvr-light"
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
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" title="Fesho"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "",
                title: "Fesho"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="close-btn"><i class="icon fa fa-times"></i></div></div><ul class="navigation clearfix"></ul><ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Call Now</span>`);
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
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
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
            _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-facebook-f" })
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
      _push(`</li></ul></nav></div><div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span class="fa fa-times"></span></button><div class="search-inner"><form method="post" action=""><div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..." required=""><button type="submit"><i class="fa fa-search"></i></button></div></form></div></div><div class="sticky-header"><div class="auto-container"></div><div class="inner-container"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-outer"><nav class="main-menu"><div class="navbar-collapse show collapse clearfix"><ul class="navigation clearfix"></ul></div></nav><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Footer2",
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
        class: ["main-header header-style-two", { "moblie-search-active": isSearch.value }]
      }, _attrs))}><div class="header-top"><div class="top-left"><ul class="list-style-one"><li><i class="fa fa-map-marker-alt"></i>Aks Hatchobori Bldg 5 Floor, 2 Chome 27-6, Hatchobori, Chuo-ku, Tokyo-to Japan 104-0032</li><li><i class="fa fa-clock"></i> Mon - Sat: 8am - 5pm</li><li><i class="fa fa-phone-volume"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/tel:+92(8800)87890" }, {
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
      _push(`</li></ul></div><div class="top-right"><ul class="social-icon-one"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fab fa-pinterest-p"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "fab fa-pinterest-p" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
        to: "#",
        class: "ui-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lnr-icon-shopping-cart"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "lnr-icon-shopping-cart" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page-contact",
        class: "theme-btn btn-style-two hvr-light"
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
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" title="Fesho"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/tel:+92880098670" }, {
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
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Send Email</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/mailto:help@company.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`sales@m3Logi.com`);
          } else {
            return [
              createTextVNode("sales@m3Logi.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
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
            _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-facebook-f" })
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
      _push(`</li></ul></nav></div><div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span class="fa fa-times"></span></button><div class="search-inner"><form method="post" action=""><div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..."><button type="submit"><i class="fa fa-search"></i></button></div></form></div></div><div class="${ssrRenderClass([{ "fixed-header animated slideInDown": scroll.value }, "sticky-header"])}"><div class="auto-container"><div class="inner-container"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader2 = __nuxt_component_0;
  const _component_LayoutFooter2 = __nuxt_component_1;
  const _component_ElementsBackToTop = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader2, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter2, null, null, _parent));
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { layout2 as default };
//# sourceMappingURL=layout2-Wztn3ECj.mjs.map
