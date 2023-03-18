import { createApp } from "vue/dist/vue.esm-bundler";
import YangUI, { SFCButton, JSXButton, MyButton } from "../../dist/yang-ui.esm";

createApp({
  template: `
    <SFCButton/>
    <JSXButton/>
    <YButton/>
  `,
})
  .component(SFCButton.name, SFCButton)
  .component(JSXButton.name, JSXButton)
  .component(MyButton.name, MyButton)
  .mount("#app");
