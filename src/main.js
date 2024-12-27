import { createApp } from 'vue'
import './styles/index.scss'
import App from './apps/App73.vue'
import config from './tailwind'

tailwind.config = config

createApp(App).mount('#app')