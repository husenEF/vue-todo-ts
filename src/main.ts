import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import router from './routes'

const main = createApp(App);

main.use(router)

main.mount('#app')
