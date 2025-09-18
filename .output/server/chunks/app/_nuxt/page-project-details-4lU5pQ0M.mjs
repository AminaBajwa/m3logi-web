import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './PageTitle-ni9pexSe.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("images/resource/bg2.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "project-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="project-details__top"><div class="project-details__img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></div><div class="project-details__content"><div class="row"><div class="col-xl-8 col-lg-8"><div class="project-details__content-left"><h3 class="">Here to know about this project</h3><p class="">There are many variations of passages of psum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text. Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jepers crud decore recteque philosophia eumuas. </p><p class="mb-5">Beyond more stoic this along goodness hey this this wow manatee mongoose one as since a far flustered impressive manifest far crud opened inside owing punitively around forewent and after wasteful telling sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jeepers crud.</p><h3 class="">Project challenges</h3><p class="mb-5">Eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting.</p><h3 class="">Best services for business</h3><p class="">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing. Neque porro est qui dolorem ipsumo.</p></div></div><div class="col-xl-4 col-lg-4"><div class="project-details__content-right"><div class="project-details__details-box"><div class="project-details__bg-shape"></div><ul class="list-unstyled project-details__details-list"><li><p class="project-details__client">Date</p><h4 class="project-details__name">22 April, 2022</h4></li><li><p class="project-details__client">Client</p><h4 class="project-details__name">Kodesolution Ltd</h4></li><li><p class="project-details__client">Website</p><h4 class="project-details__name">www.domain.com</h4></li><li><p class="project-details__client">Location</p><h4 class="project-details__name">New York, USA</h4></li><li><p class="project-details__client">Value</p><h4 class="project-details__name">$11,367</h4></li><li><div class="project-details__social">`);
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
  _push(` `);
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
  _push(` `);
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
  _push(` `);
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
  _push(`</div></li></ul></div></div></div></div></div><div class="row"><div class="col-xl-12"><div class="project-details__pagination-box"><ul class="project-details__pagination list-unstyled clearfix"><li class="next"><div class="icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    "aria-label": "Previous"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="lnr lnr-icon-arrow-left"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "lnr lnr-icon-arrow-left" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="content">Previous</div></li><li class="count">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, null, _parent));
  _push(`</li><li class="count">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, null, _parent));
  _push(`</li><li class="count">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, null, _parent));
  _push(`</li><li class="count">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, null, _parent));
  _push(`</li><li class="previous"><div class="content">Next</div><div class="icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    "aria-label": "Previous"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="lnr lnr-icon-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "lnr lnr-icon-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li></ul></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Projects/Details.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageTitle = __nuxt_component_0;
  const _component_SectionsProjectsDetails = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Project Details" }, null, _parent));
  _push(ssrRenderComponent(_component_SectionsProjectsDetails, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-project-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageProjectDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pageProjectDetails as default };
//# sourceMappingURL=page-project-details-4lU5pQ0M.mjs.map
