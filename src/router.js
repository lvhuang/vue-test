import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import pageA from './page/pageA'
import pageB from './page/pageB'
import pageC from './page/pageC'

const routes = [
    { path: "/", redirect: "/A" },
    { path: "/A", component: pageA },
    { path: "/B", component: pageB },
    { path: "/C", component: pageC }
]

// 导出  {routes}
export default new VueRouter({ routes })