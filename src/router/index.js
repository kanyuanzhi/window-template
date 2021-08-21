import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [{
      path: 'welcome',
      name: 'Welcome',
      component: () => import('@/views/welcome/index'),
      meta: {title: '欢迎页面', icon: 'dashboard'}
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/change-password',
    name: 'user',
    meta: {title: '用户管理', icon: 'el-icon-s-help'},
    children: [
      {
        path: 'change-password',
        component: () => import('@/views/user/change-password/index'),
        name: 'changePassword',
        meta: {title: '修改密码', icon: 'el-icon-s-help'}
      },
      {
        path: 'add-user',
        component: () => import('@/views/user/add-user/index'),
        name: 'addUser',
        meta: {title: '新增用户', icon: 'el-icon-s-help'}
      },
      {
        path: 'edit-user',
        component: () => import('@/views/user/edit-user/index'),
        name: 'editUser',
        meta: {title: '编辑用户', icon: 'el-icon-s-help'}
      },
      {
        path: 'edit-role',
        component: () => import('@/views/user/edit-role/index'),
        name: 'EditRole',
        meta: {title: '编辑权限', icon: 'el-icon-s-help'}
      },
      {
        path: 'distribute-role',
        component: () => import('@/views/user/distribute-role/index'),
        name: 'distributeRole',
        meta: {title: '分配权限', icon: 'el-icon-s-help'}
      }
    ]
  },
  {
    path: '/fljh-lsyjl-project1_report',
    name: 'fljh-lsyjl-project1_report',
    component: () => import('@/views/formula-fljh/components-lsyjl/project1_report'),
    hidden: true
  },
  {
    path: '/fljh-lsyjl-project2_report',
    name: 'fljh-lsyjl-project2_report',
    component: () => import('@/views/formula-fljh/components-lsyjl/project2_report'),
    hidden: true
  },
  {
    path: '/fljh-lsyjl-project3_report',
    name: 'fljh-lsyjl-project3_report',
    component: () => import('@/views/formula-fljh/components-lsyjl/project3_report'),
    hidden: true
  },
]

export const asyncRoutes = [
  {
    path: '/calculation-flange',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Flange',
    meta: {title: '法兰校核', icon: 'el-icon-s-help', role: ['super']},
    children: [
      {
        path: 'rcc-m',
        name: 'rcc-m',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-flange/rcc-m'),
        meta: {title: 'RCC-M'},
        children: [
          {
            path: 'general',
            component: () => import('@/views/calculation-flange/rcc-m/general'),
            name: 'General',
            meta: {title: '通用参数'}
          },
          {
            path: 'condition',
            component: () => import('@/views/calculation-flange/rcc-m/condition'),
            name: 'Condition',
            meta: {title: '工况参数'}
          },
          {
            path: 'bolt-check',
            component: () => import('@/views/calculation-flange/rcc-m/bolt-check'),
            name: 'BoltCheck',
            meta: {title: '螺栓校核'}
          },
          {
            path: 'flange-check',
            component: () => import('@/views/calculation-flange/rcc-m/flange-check'),
            name: 'FlangeCheck',
            meta: {title: '法兰校核'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-flange/rcc-m/general'),
            name: 'Report',
            meta: {title: '校核报告'}
          },
        ]
      },
      {
        path: 'gb150-kuanmian-banshi',
        name: 'gb150-kuanmian-banshi',
        // component: () => import('@/views/formula-lslj/lslj2'),
        meta: {title: 'GB150宽面板式'}
      },
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: {title: 'External Link', icon: 'link', role: ['super']}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
