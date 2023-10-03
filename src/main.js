// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//i18n
import i18n from '@/locales/i18n.js'

//vuex
import  store from '@/store/Store.js'
const app = createApp(App)

registerPlugins(app)

app.use(i18n).use(store).mount('#app')
