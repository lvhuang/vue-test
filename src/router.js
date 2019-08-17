import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import pageA from './pages/pageA'
import pageB from './pages/pageB'
import pageC from './pages/pageC'

const routes = [
    { path: "/", redirect: "/A" },
    { path: "/A", component: pageA },
    { path: "/B", component: pageB },
    { path: "/C", component: pageC }
]

// 导出  {routes}
export default new VueRouter({ routes })