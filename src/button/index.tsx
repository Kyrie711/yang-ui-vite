// import { defineComponent, h } from "vue";

// export default defineComponent({
//   name: "YButton",
//   render() {
//     return h("button", null, "MyButton");
//   },
// });

import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export default defineComponent({
  name: "YButton",
  setup(props, { slots }) {
    return () => (
      <button
        class={`
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
      `}
      >
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
