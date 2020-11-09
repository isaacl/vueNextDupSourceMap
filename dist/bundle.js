import { openBlock, createBlock, toDisplayString } from 'vue';

var script = {
  data() {
    return {
      greeting: 'Hello',
    };
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("p", null, toDisplayString($data.greeting) + " World!", 1 /* TEXT */))
}

script.render = render;
script.__file = "src/Hello.vue";

export default script;
//# sourceMappingURL=bundle.js.map
