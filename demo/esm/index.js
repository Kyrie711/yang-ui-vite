import { createApp } from "vue/dist/vue.esm-bundler";
import YangUI, { SFCButton, JSXButton, MyButton } from "../../dist/yang-ui.esm";

createApp({
  template: `
    <SFCButton/>
    <JSXButton/>
    <YButton/>
  `,
})
  .use(YangUI)
  .mount("#app");
