import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/1',
    name: 'index',
    component: () => import('../views/Index.vue')
  },

  {
    path: '/blog',
    name: 'blog_main',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog1',
    name: 'blog1',
    component: () => import('../views/Blog1.vue')
  },
  {
    path:'/2',
    name:'blogs',
    component: () => import('../views/Blogs.vue')
  },
  //相册
  {
    path: '/3',
    name: 'photos',
    component: () => import('../views/Photo.vue')
  },


  // 登录
  {
    path: '/4',
    name: '登录',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/index_admin',
    name: '管理主页',
    component: () => import('../views/admin/Index_admin.vue')
  },


  // 关于
  {
    path: '/6',
    name: '关于',
    component: () => import('../views/About.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
