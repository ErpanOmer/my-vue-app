import {
  defineConfig
} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import {
  viteSingleFile
} from "vite-plugin-singlefile"
import Components from 'unplugin-vue-components/vite';
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  base: '/my-vue-app/',
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  }
})