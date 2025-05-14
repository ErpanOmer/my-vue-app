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
import {
  visualizer
} from 'rollup-plugin-visualizer';
import brotli from "rollup-plugin-brotli";
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: 'false'
  },
  plugins: [
    // vueDevTools(),
    vue(),
    // viteSingleFile(),
    Components({ 
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    brotli(),
  ],
  // base: '/my-vue-app/',
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  build: {
    // assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          'mapbox-gl': ['mapbox-gl'],
          'ant-design-vue': ['ant-design-vue'],
          // 'vue': ['vue']
        }
      },
      plugins: [
        visualizer({
          open: true, // 直接在浏览器中打开分析报告
          filename: 'stats.html', // 输出文件的名称
          gzipSize: true, // 显示gzip后的大小
          brotliSize: true, // 显示brotli压缩后的大小
        })
      ]
    }
  }
})