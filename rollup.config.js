import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const rootDir = path.resolve(__dirname);

export default {
  input: 'src/Hello.vue',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    vue(),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VUE_OPTIONS_API__: 'false',
      __VUE_PROD_DEVTOOLS__: 'true',
    }),
  ],
  external: ['vue']
};
