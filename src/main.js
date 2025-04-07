import { createApp } from 'vue'
import store from './store';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './apps/TestRide.vue'

createApp(App).use(store).mount('#app')