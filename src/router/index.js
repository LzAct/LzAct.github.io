import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/login/login'
import Home from '@/components/home/home'
import Support from '@/components/support/support'
import Goods from '@/components/goods/goods'
import Company from '@/components/company/company'
import Contact from '@/components/contact/contact'
import homePage from '@/components/home/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: 'homePage',
      redirect: '/home',
      component: homePage,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/support',
          name: 'support',
          component: Support
        },
        {
          path: '/goods',
          name: 'goods',
          component: Goods
        },
        {
          path: '/company',
          name: 'company',
          component: Company
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        }
      ]
    }
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/support',
    //   name: 'support',
    //   component: Support
    // },
    // {
    //   path: '/goods',
    //   name: 'goods',
    //   component: Goods
    // },
    // {
    //   path: '/company',
    //   name: 'company',
    //   component: Company
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // }
  ]
})
