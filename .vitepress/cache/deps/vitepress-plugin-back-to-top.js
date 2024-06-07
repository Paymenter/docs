import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  h,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  render,
  unref,
  withCtx
} from "./chunk-JWA4H7QR.js";

// node_modules/vitepress-plugin-back-to-top/dist/vitepress-plugin-back-to-top.js
var E = (e) => (pushScopeId("data-v-09295527"), e = e(), popScopeId(), e);
var I = E(() => createBaseVNode("svg", {
  class: "icon-top",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-width": "4",
  "stroke-linecap": "butt",
  "stroke-linejoin": "miter"
}, [
  createBaseVNode("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" })
], -1));
var S = [
  I
];
var L = defineComponent({
  __name: "back-to-top",
  props: {
    threshold: { default: 300 }
  },
  setup(e) {
    const t = e, o = ref(0), c = computed(() => o.value > t.threshold);
    onMounted(() => {
      o.value = n(), window.addEventListener(
        "scroll",
        u(() => {
          o.value = n();
        }, 100)
      );
    });
    function n() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    function p() {
      window.scrollTo({ top: 0, behavior: "smooth" }), o.value = 0;
    }
    function u(r, s = 100) {
      let l;
      return (...i) => {
        clearTimeout(l), l = setTimeout(() => {
          r.apply(null, i);
        }, s);
      };
    }
    return (r, s) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        unref(c) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "go-to-top",
          onClick: p
        }, S)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var M = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, n] of t)
    o[c] = n;
  return o;
};
var N = M(L, [["__scopeId", "data-v-09295527"]]);
var V = (e) => {
  typeof window > "u" || window.addEventListener("load", () => {
    const t = document.createElement("div");
    document.body.appendChild(t), render(
      h(N, {
        threshold: e == null ? void 0 : e.threshold
      }),
      t
    );
  });
};
export {
  V as default
};
//# sourceMappingURL=vitepress-plugin-back-to-top.js.map
