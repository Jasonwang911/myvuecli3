import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '../views/index'),
      meta: { title: '首页', auth: false }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'xxx'
  }
  next()
  // if($store.state.common.token != '' || to.path == '/login') {
  //   next()
  // }else {
  //   next({
  //     path: "/login",
  //     query: {
  //       redirect: to.fullPath
  //     }
  //   });
  // }
})

export default router
