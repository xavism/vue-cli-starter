import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/containers/Hello'
import List from '@/containers/List'
import Edit from '@/containers/Edit'

Vue.use(Router)

const routes = [
  { path: '/', component: Hello, title: 'Home', tab: false },
  { path: '/chars', component: List, title: 'Chars', tab: true },
  { path: '/edit', component: Edit, title: 'Edit', tab: false }
]

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
