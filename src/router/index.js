import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import resources from '@/components/resources'
import foundations from '@/components/foundations'
import colors from '@/components/colors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/resources',
      name: 'resources',
      component: resources
    },
    {
      path: '/foundations',
      name: 'foundations',
      component: foundations
    },
    {
      path: '/colors',
      name: 'colors',
      component: colors
    }
  ]
})
