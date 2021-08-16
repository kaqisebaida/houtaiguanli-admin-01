import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Login = () => import('../views/login')
const Home = () => import('@/views/home')
const Layout = () => import('@/views/layout')
const Article = () => import('@/views/article')
const Punlish = () => import('@/views/punlish')
const Image = () => import('@/views/image')
const Comment = () => import('@/views/comment')
const Settings = () => import('@/views/settings')
const Fans = () => import('@/views/fans')
// import Login from '../views/login'
// import Home from '@/views/home'
// import Layout from '@/views/layout'
// import Article from '@/views/article'
// import Punlish from '@/views/punlish'
// import Image from '@/views/image'
// import Comment from '@/views/comment'
// import Settings from '@/views/settings'
// import Fans from '@/views/fans'

Vue.use(VueRouter)

//  路由配置表
const routes =
[
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/punlish',
        name: 'punlish',
        component: Punlish
      },
      {
        path: '/image',
        name: 'image',
        component: Image
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/fans',
        name: 'fans',
        component: Fans
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 检验非登录页面的登录状态
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path !== '/login') {
    if (user) {
      // 已登录
      next()
    } else {
      // 没用登录
      next('/login')
    }
  } else {
    // 登录页面正常通过
    next()
  }
})
export default router
