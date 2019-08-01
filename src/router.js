import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TopicDetail from './components/TopicDetail.vue'
import UserInfo from './components/UserInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: Home
      }
    },
    {
      path: '/topic/:id',
      name: 'topicDetail',
      components: {
        main: TopicDetail,
        aside: ''
      }
    },
    {
      path: '/user/:name',
      name: 'user',
      components: {
        main: UserInfo,
        aside: ''
      }
    },    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
