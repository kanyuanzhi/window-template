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
    path: '/calculation-falan',
    component: Layout,
    redirect: 'noRedirect',
    name: 'falan',
    meta: {title: '法兰', icon: 'el-icon-s-help', role: ['1']},
    children: [
      {
        path: 'rcc-m',
        name: 'rcc-m',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-falan/rcc-m'),
        meta: {title: 'RCC-M'},
        children: [
          {
            path: 'luoshuan-yujingli',
            component: () => import('@/views/calculation-falan/rcc-m/luoshuan-yujingli'),
            name: 'luoshuan-yujingli',
            meta: {title: '螺栓预紧力'}
          },
          {
            path: 'luoshuan-jiaohe',
            component: () => import('@/views/calculation-falan/rcc-m/luoshuan-jiaohe'),
            name: 'luoshuan-jiaohe',
            meta: {title: '螺栓校核'}
          },
          {
            path: 'falan-yingli-1',
            component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-1'),
            name: 'falan-yingli-1',
            meta: {title: '法兰应力-第一步'}
          },
          {
            path: 'falan-yingli-2',
            component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2'),
            name: 'falan-yingli-2',
            redirect: 'noRedirect',
            meta: {title: '法兰应力-第二步'},
            children: [
              {
                path: 'jieben-jisuan',
                component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2/jiben-jisuan'),
                name: 'jieben-jisuan',
                meta: {title: '基本计算'}
              },
              {
                path: 'falan-jiaohe-sheji',
                component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2/falan-jiaohe-sheji'),
                name: 'falan-jiaohe-sheji',
                meta: {title: '法兰校核-设计工况'}
              },
              {
                path: 'falan-jiaohe-yunxing',
                component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2/falan-jiaohe-sheji'),
                name: 'falan-xishu-yunxing',
                meta: {title: '法兰校核-运行工况'}
              },
              {
                path: 'falan-jiaohe-jinji',
                component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2/falan-jiaohe-sheji'),
                name: 'falan-jiaohe-jinji',
                meta: {title: '法兰校核-紧急工况'}
              },
              {
                path: 'falan-jiaohe-shigu',
                component: () => import('@/views/calculation-falan/rcc-m/falan-yingli-2/falan-jiaohe-sheji'),
                name: 'falan-jiaohe-shigu',
                meta: {title: '法兰校核-事故工况'}
              },
            ]
          },
        ]
      },
      {
        path: 'gb150-kuanmian-banshi',
        name: 'gb150-kuanmian-banshi',
        component: () => import('@/views/formula-lslj/lslj2'),
        meta: {title: 'GB150宽面板式'}
      },
      {
        path: 'gb150-kuanmian-daijing',
        name: 'gb150-kuanmian-daijing',
        component: () => import('@/views/formula-lslj/lslj2'),
        meta: {title: 'GB150宽面带颈'}
      },
      {
        path: 'gb150-zhaimian',
        name: 'gb150-zhaimian',
        component: () => import('@/views/formula-lslj/lslj2'),
        meta: {title: 'GB150窄面'}
      }
    ]
  },
  {
    path: '/formula-thdj',
    component: Layout,
    name: 'tanhuangdiaojia',
    meta: {title: '弹簧吊架', icon: 'el-icon-s-help', role: ['2']},
    children: [
      {
        path: 'thdj1',
        name: 'tanhuangdiaojia1',
        component: () => import('@/views/formula-thdj/thdj1'),
        meta: {title: '弹簧吊架1', icon: 'form'}
      },
      {
        path: 'thdj2',
        name: 'tanhuangdiaojia2',
        component: () => import('@/views/formula-thdj/thdj2'),
        meta: {title: '弹簧吊架2', icon: 'form'}
      }
    ]
  },
  {
    path: '/formula-gdkj',
    component: Layout,
    name: 'guandaokuaju',
    meta: {title: '管道跨距', icon: 'el-icon-s-help', role: ['3']},
    children: [
      {
        path: 'gdkj1',
        name: 'guandaokuaju1',
        component: () => import('@/views/formula-gdkj/gdkj1'),
        meta: {title: '管道跨距1', icon: 'form'}
      },
      {
        path: 'gdkj2',
        name: 'guandaokuaju2',
        component: () => import('@/views/formula-gdkj/gdkj2'),
        meta: {title: '管道跨距2', icon: 'form'}
      }
    ]
  },
  {
    path: '/formula-fljh',
    component: Layout,
    name: 'falanjiaohe',
    meta: {title: '法兰校核', icon: 'el-icon-s-help', role: ['4']},
    children: [
      {
        path: 'lsyjl',
        name: 'luoshuanyujili',
        component: () => import('@/views/formula-fljh/lsyjl'),
        meta: {title: '螺栓预紧力', icon: 'form'}
      },
      {
        path: 'lsjh',
        name: 'luoshuanjiaohe',
        component: () => import('@/views/formula-fljh/lsjh'),
        meta: {title: '螺栓校核', icon: 'form'}
      },
      {
        path: 'flyl',
        name: 'falanyingli',
        component: () => import('@/views/formula-fljh/flyl'),
        meta: {title: '法兰应力', icon: 'form'}
      }
    ]
  },
  {
    path: '/formula-gdjb',
    component: Layout,
    name: 'guandaojianbo',
    meta: {title: '管道减薄', icon: 'el-icon-s-help', role: ['5']},
    children: [
      {
        path: 'gdjb1',
        name: 'guandaojianbo1',
        component: () => import('@/views/formula-gdjb/gdjb1'),
        meta: {title: '管道减薄1', icon: 'form'}
      },
      {
        path: 'gdjb2',
        name: 'guandaojianbo2',
        component: () => import('@/views/formula-gdjb/gdjb2'),
        meta: {title: '管道减薄2', icon: 'form'}
      }
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
