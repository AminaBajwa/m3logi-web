import { _ as __nuxt_component_0 } from './nuxt-link-IzlaOwBm.mjs';
import { useSSRContext, ref, onUnmounted, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))}><li class="current dropdown">`);
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
  _push(`</li></ul></li><li>`);
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
  _push(`</li></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref({
      status: false,
      key: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navigation clearfix" }, _attrs))}><li class="${ssrRenderClass([{ "current": isActive.value.key === 1 }, "dropdown"])}">`);
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
      _push(`<ul class="${ssrRenderClass({ "d-block": isActive.value.key === 1 })}"><li>`);
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/index-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home page 03`);
          } else {
            return [
              createTextVNode("Home page 03")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="${ssrRenderClass([{ "active": isActive.value.key === 1 }, "dropdown-btn"])}"><i class="fa fa-angle-down"></i></div></li><li>`);
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
      _push(`</li><li class="${ssrRenderClass([{ "current": isActive.value.key === 2 }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#" }, {
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
      _push(`<ul class="${ssrRenderClass({ "d-block": isActive.value.key === 2 })}"><li>`);
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
      _push(`</li></ul><div class="${ssrRenderClass([{ "active": isActive.value.key === 2 }, "dropdown-btn"])}"><i class="fa fa-angle-down"></i></div></li><li class="${ssrRenderClass([{ "current": isActive.value.key === 3 }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#" }, {
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
      _push(`<ul class="${ssrRenderClass({ "d-block": isActive.value.key === 3 })}"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects grid`);
          } else {
            return [
              createTextVNode("Projects grid")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-project-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects Details`);
          } else {
            return [
              createTextVNode("Projects Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="${ssrRenderClass([{ "active": isActive.value.key === 3 }, "dropdown-btn"])}"><i class="fa fa-angle-down"></i></div></li><li class="${ssrRenderClass([{ "current": isActive.value.key === 4 }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#" }, {
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
      _push(`<ul class="${ssrRenderClass({ "d-block": isActive.value.key === 4 })}"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/page-team" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Team grid`);
          } else {
            return [
              createTextVNode("Team grid")
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
      _push(`</li></ul><div class="${ssrRenderClass([{ "active": isActive.value.key === 4 }, "dropdown-btn"])}"><i class="fa fa-angle-down"></i></div></li><li class="${ssrRenderClass([{ "current": isActive.value.key === 6 }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#" }, {
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
      _push(`<ul class="${ssrRenderClass({ "d-block": isActive.value.key === 6 })}"><li>`);
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
      _push(`</li></ul><div class="${ssrRenderClass([{ "active": isActive.value.key === 6 }, "dropdown-btn"])}"><i class="fa fa-angle-down"></i></div></li><li>`);
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
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MobileMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$1;
const _sfc_main = {
  __name: "BackToTop",
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
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: ["scroll-to-top scroll-to-target", { "d-block": scroll.value }],
        href: "#__nuxt"
      }, _attrs))}><span class="fa fa-angle-up"></span></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/BackToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_1 as a, __nuxt_component_2$1 as b };
//# sourceMappingURL=BackToTop--Y9_Bxat.mjs.map
