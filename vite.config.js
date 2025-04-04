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
  },
  build: {
    rollupOptions: {
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