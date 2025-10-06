import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './PageTitle-ni9pexSe.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("images/durban-of.png");
const _imports_1 = "" + publicAssetsURL("images/chile-of.png");
const _imports_2 = "" + publicAssetsURL("images/mozambique-of.jpg");
const _imports_3 = "" + publicAssetsURL("images/pakistan-of.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><section class="contact-details"><div class="container"><div class="row"><div class="col-xl-5 col-lg-6"><div class="contact-details__right"><div class="sec-title"><span class="sub-title">Need any help?</span><h2>Get in touch with us</h2><div class="text">You can contact us for any kind of query or request, you can get information regarding any business you want to do with us and you can also demand any offer you wish to avail from ourservices. We value your feedback on the services we provide at m3Logi, share your thoughts with us.</div></div><ul class="list-unstyled contact-details__info"><li><div class="icon"><span class="lnr-icon-phone-plus"></span></div><div class="text"><h6>Have any question?</h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:980089850" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Free</span> +81-3-6262-8600`);
      } else {
        return [
          createVNode("span", null, "Free"),
          createTextVNode(" +81-3-6262-8600")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li><li><div class="icon"><span class="lnr-icon-envelope1"></span></div><div class="text"><h6>Write email</h6>`);
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
  _push(`</div></li><li><div class="icon"><span class="lnr-icon-location"></span></div><div class="text"><h6>Visit anytime</h6><span>AKS Hatchobori Bldg 5F,Tokyo-to 104-0032</span></div></li></ul></div></div><div class="col-xl-7 col-lg-6"><div class="sec-title"><span class="sub-title">Send us email</span><h2>Feel free to write</h2></div><form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post"><div class="row"><div class="col-sm-6"><div class="mb-3"><label>Name <small>*</small></label><input name="form_name" class="form-control" type="text" placeholder="Enter Name"></div></div><div class="col-sm-6"><div class="mb-3"><label>Email <small>*</small></label><input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"></div></div></div><div class="row"><div class="col-sm-6"><div class="mb-3"><label>Subject <small>*</small></label><input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject"></div></div><div class="col-sm-6"><div class="mb-3"><label>Phone</label><input name="form_phone" class="form-control" type="text" placeholder="Enter Phone"></div></div></div><div class="mb-3"><label>Message</label><textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea></div><div class="mb-3"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button><button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button></div></form></div></div></div><div class="careers-sec1"><div class="container"><div class="row"><div class="col-md-12"><div class="absdv"><h2 class="head-loc3">Office Locations</h2></div></div></div><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc"><div class="loc-images img-trans"><img${ssrRenderAttr("src", _imports_0)} alt="Durban Office"></div></div><div class="col-lg-3 col-md-6 col-sm-6 cntc"><p class="jpn-lochd">DURBAN OFFICE</p><p class="jpnparag">m3Logi 1 (PTY) LTD OFFICE: 403, 4TH FLOOR CORPORATE PLACE, 9 DOROTHY NYEMBE STREET, DURBAN, 4001 SOUTH AFRICA</p><a href="tel:+0027313010504" class="locphn"><i class="icon-phone-icon"></i><span>+0027 31 3010504</span></a><a href="mailto:sales@m3Logi.com" class="locemail"><i class="icon-info-icon"></i><span class="eml">sales@m3Logi.com</span></a></div><div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc"><div class="loc-images img-trans"><img${ssrRenderAttr("src", _imports_1)} alt="Chile Office"></div></div><div class="col-lg-3 col-md-6 col-sm-6 cntc"><p class="jpn-lochd">CHILE OFFICE</p><p class="jpnparag">m3Logi SHIPPING CHILE LTD. OFICINA 1101, AV. BOL\xCDVAR 202, EDIFICIO FINANZAS, IQUIQUE, CHILE</p><a href="tel:coming-soon" class="locphn"><i class="icon-phone-icon"></i><span>Coming Soon</span></a><a href="mailto:chile@m3Logi.com" class="locemail"><i class="icon-info-icon"></i><span class="eml">chile@m3Logi.com</span></a></div></div><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc"><div class="loc-images img-trans"><img${ssrRenderAttr("src", _imports_2)} alt="Mozambique Office"></div></div><div class="col-lg-3 col-md-6 col-sm-6 cntc"><p class="jpn-lochd">MOZAMBIQUE OFFICE</p><p class="jpnparag">m3Logi SHIPPING MOZAMBIQUE AFRICA PARK AVENIDA ACORDOS DE LUSAKA NO 95 MAPUTO MOZAMBIQUE</p><a href="tel:coming-soon" class="locphn"><i class="icon-phone-icon"></i><span>Coming Soon</span></a><a href="mailto:mozambique@m3Logi.com" class="locemail"><i class="icon-info-icon"></i><span class="eml">mozambique@m3Logi.com</span></a></div><div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc pad-mmb"><div class="loc-images img-trans"><img${ssrRenderAttr("src", _imports_3)} alt="Pakistan Office"></div></div><div class="col-lg-3 col-md-6 col-sm-6 cntc pad-mmb"><p class="jpn-lochd">PAKISTAN OFFICE</p><p class="jpnparag">m3Logi SHIPPING PAKISTAN ROOM#204&amp;205, 2ND FLOOR, SKY CENTER, AGHA KAMAL HAIDER ROAD, SIALKOT CANTT 51310 PAKISTAN</p><a href="tel:coming-soon" class="locphn"><i class="icon-phone-icon"></i><span>Coming Soon</span></a><a href="mailto:pakistan@m3Logi.com" class="locemail"><i class="icon-info-icon"></i><span class="eml">pakistan@m3Logi.com</span></a></div></div></div></div>div&gt; </section><section><div class="container-fluid p-0"><div class="row"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0776758261786!2d139.77559331474592!3d35.67508933791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601896eb159fc48d%3A0x447a25745837bed8!2sm3Logi!5e0!3m2!1sen!2s!4v1539855483649" data-tm-width="100%" height="500" frameborder="0" allowfullscreen=""></iframe></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contact/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageTitle = __nuxt_component_0;
  const _component_SectionsContactForm = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "News Details" }, null, _parent));
  _push(ssrRenderComponent(_component_SectionsContactForm, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pageContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pageContact as default };
//# sourceMappingURL=page-contact-iA2IVA2P.mjs.map
