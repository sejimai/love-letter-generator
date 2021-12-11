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
        {
          path: '/LetterGenerator',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/LetterGenerator.vue'),
          meta: {
            title: '情书生成器',
          },
        },
        {
          path: '/MsgBoard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/MsgBoard.vue'),
          meta: {
            title: '留言板',
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
