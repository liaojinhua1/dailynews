import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Personal from '@/views/Personal.vue'

Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'personal',
      path: '/personal/:id',
      component: Personal
    }
  ]
})

// 添加前置导航守卫，每一次路由跳转都会经过导航守卫
router.beforeEach(function (to, from, next) {
  const nextRoute = ['personal']
  // 只有访问那些需要授权的api的时候，才需要进行守卫
  // if (to.path.indexOf('/personal/') === 0) {
  if (nextRoute.indexOf(to.name) >= 0) {
    let token = window.localStorage.getItem('user_token')
    // 如果有token数据，说明登陆过了
    if (token) {
      next()
    } else {
      // 否则，没有登陆则重新去登陆--重定向
      next({ name: 'login' })
    }
  } else { // 如果访问不需要授权的页面，则自由访问
    next()
  }
})

export default router
