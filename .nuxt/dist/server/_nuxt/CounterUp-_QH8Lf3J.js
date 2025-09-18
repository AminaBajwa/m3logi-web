import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data() {
    return {
      count: 0,
      inViewport: false
    };
  },
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1e3
      // In milliseconds
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.2
      // 20% of the element is visible
    });
    this.observer.observe(this.$refs.counterRef);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.inViewport) {
          this.inViewport = true;
          this.startCounter();
        }
      });
    },
    startCounter() {
      let startTime;
      const step = (timestamp) => {
        if (!startTime)
          startTime = timestamp;
        const progress = timestamp - startTime;
        this.count = Math.floor((this.end - this.start) * (progress / this.duration) + this.start);
        if (progress < this.duration && this.inViewport) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: "count-text",
    ref: "counterRef"
  }, _attrs))}>${ssrInterpolate($data.count)}</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/CounterUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=CounterUp-_QH8Lf3J.js.map
