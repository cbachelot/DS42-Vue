import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import resources from '@/components/resources'
import foundations from '@/components/foundations'
import colors from '@/components/colors'
import typography from '@/components/typography'
import componentsoverview from '@/components/componentsoverview'
import accordions from '@/components/accordions'
import buttons from '@/components/buttons'
import tables from '@/components/tables'
import datepickers from '@/components/datepickers'
import formfields from '@/components/formfields'
import selection from '@/components/selection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index.html',
      component: home,
      alias: '/'
    },
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
    },
    {
      path: '/componentsoverview',
      name: 'componentsoverview',
      component: componentsoverview
    },
    {
      path: '/accordions',
      name: 'accordions',
      component: accordions
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: buttons
    },
    {
      path: '/datepickers',
      name: 'datepickers',
      component: datepickers
    },
    {
      path: '/formfields',
      name: 'formfields',
      component: formfields
    },
    {
      path: '/tables',
      name: 'tables',
      component: tables
    },
    {
      path: '/selection',
      name: 'selection',
      component: selection
    },
    {
      path: '/typography',
      name: 'typography',
      component: typography
    }
  ]
})
