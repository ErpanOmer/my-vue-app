import { createApp } from 'vue'
import store from './store';
import language from './language';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './apps/TestRide.vue'

createApp(App).use(store).use(language).mount('#app')