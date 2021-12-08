import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
      meta: {
        title: '自述文件',
      },
      children: [
        {
          path: '/Home',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Home.vue'),
          meta: {
            title: '主页',
          },
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    }
  ],
});
