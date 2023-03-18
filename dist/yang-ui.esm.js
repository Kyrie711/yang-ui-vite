import { defineComponent, createVNode, openBlock, createElementBlock, createElementVNode, createTextVNode } from "vue";
const __uno = "";
const MyButton = defineComponent({
  name: "YButton",
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
        py-2
        px-4
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-green-500 
        hover:bg-green-700 
        border-none 
        cursor-pointer 
      `
    }, [slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFC Button", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
