import { createMemoryHistory, createRouter } from 'vue-router'

import MainView from './pages/MainView.vue'
import ManageView from './pages/ManageView.vue'
import ConnectionView from './pages/ConnectionView.vue'
import MonitoringView from './pages/MonitoringView.vue'

const routes = [
  { path: '/', component: MainView },
  { path: '/connection', component: ConnectionView },
  { path: '/manage', component: ManageView },
  { path: '/monitoring', component: MonitoringView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router