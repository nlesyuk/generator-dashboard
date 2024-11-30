import { createMemoryHistory, createRouter } from 'vue-router'

import MainView from './pages/MainView.vue'
import ManageView from './pages/ManageView.vue'
import SettingsView from './pages/SettingsView.vue'

const routes = [
  { path: '/', component: MainView },
  { path: '/connection', component: SettingsView },
  { path: '/manage', component: ManageView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router