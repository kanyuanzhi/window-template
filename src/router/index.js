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
    path: '/register',
    component: () => import('@/views/register/index'),
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
      meta: {title: '欢迎页面', icon: 'el-icon-s-home'}
    }]
  },
]

export const asyncRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/change-password',
    name: 'user',
    meta: {title: '用户管理', icon: 'el-icon-user-solid'},
    children: [
      {
        path: 'edit-profile',
        component: () => import('@/views/user/edit-profile/index'),
        name: 'editProfile',
        meta: {title: '修改信息', role: ['super', 'admin','operator','guest']}
      },
      {
        path: 'change-password',
        component: () => import('@/views/user/change-password/index'),
        name: 'changePassword',
        meta: {title: '修改密码', role: ['super', 'admin','operator','guest']}
      },
      {
        path: 'add-user',
        component: () => import('@/views/user/add-user/index'),
        name: 'addUser',
        meta: {title: '新增用户', role: ['super', 'admin']}
      },
      {
        path: 'edit-user',
        component: () => import('@/views/user/edit-user/index'),
        name: 'editUser',
        meta: {title: '编辑用户', role: ['super']}
      },
      {
        path: 'edit-role',
        component: () => import('@/views/user/edit-role/index'),
        name: 'EditRole',
        meta: {title: '编辑权限', role: ['super']}
      },
      {
        path: 'distribute-role',
        component: () => import('@/views/user/distribute-role/index'),
        name: 'distributeRole',
        meta: {title: '分配权限', role: ['super', 'admin']}
      }
    ]
  },
  {
    path: '/calculation-flange',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Flange',
    meta: {title: '法兰校核', icon: 'el-icon-s-help', role: ['super','admin','operator']},
    children: [
      {
        path: 'rcc-m',
        name: 'RCC-M',
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
            component: () => import('@/views/calculation-flange/rcc-m/report'),
            name: 'Report',
            meta: {title: '校核报告'}
          },
        ]
      },
      {
        path: 'gb150-wide-plate',
        name: 'GB150WidePlate',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-flange/gb150-wide-plate'),
        meta: {title: 'GB150宽面板式'},
        children: [
          {
            path: 'general',
            component: () => import('@/views/calculation-flange/gb150-wide-plate/general'),
            name: 'General',
            meta: {title: '基本参数'}
          },
          {
            path: 'check',
            component: () => import('@/views/calculation-flange/gb150-wide-plate/check'),
            name: 'Check',
            meta: {title: '法兰校核'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-flange/gb150-wide-plate/report'),
            name: 'Report',
            meta: {title: '校核报告'}
          },
        ]
      },
      {
        path: 'gb150-wide-hubbed',
        name: 'GB150WideHubbed',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-flange/gb150-wide-hubbed'),
        meta: {title: 'GB150宽面带颈'},
        children: [
          {
            path: 'general',
            component: () => import('@/views/calculation-flange/gb150-wide-hubbed/general'),
            name: 'General',
            meta: {title: '基本参数'}
          },
          {
            path: 'check',
            component: () => import('@/views/calculation-flange/gb150-wide-hubbed/check'),
            name: 'Check',
            meta: {title: '法兰校核'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-flange/gb150-wide-hubbed/report'),
            name: 'Report',
            meta: {title: '校核报告'}
          },
        ]
      },
      {
        path: 'gb150-narrow',
        name: 'GB150Narrow',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-flange/gb150-narrow'),
        meta: {title: 'GB150窄面'},
        children: [
          {
            path: 'general',
            component: () => import('@/views/calculation-flange/gb150-narrow/general'),
            name: 'General',
            meta: {title: '基本参数'}
          },
          {
            path: 'bolt-check',
            component: () => import('@/views/calculation-flange/gb150-narrow/bolt-check'),
            name: 'BoltCheck',
            meta: {title: '螺栓校核'}
          },
          {
            path: 'flange-check',
            component: () => import('@/views/calculation-flange/gb150-narrow/flange-check'),
            name: 'FlangeCheck',
            meta: {title: '法兰校核'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-flange/gb150-narrow/report'),
            name: 'Report',
            meta: {title: '校核报告'}
          },
        ]
      },
    ]
  },
  {
    path: '/calculation-valve-headstock',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ValveHeadstock',
    meta: {title: '阀门启闭力矩', icon: 'el-icon-s-help', role: ['super','admin','operator']},
    children: [
      {
        path: 'edf-sluice-valve-c',
        name: 'EDFSluiceValveC',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/edf-sluice-c'),
        meta: {title: 'EDF C型闸阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-c/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-c/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'edf-sluice-valve-v',
        name: 'EDFSluiceValveV',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/edf-sluice-v'),
        meta: {title: 'EDF V型闸阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-v/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-v/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'edf-sluice-valve-w',
        name: 'EDFSluiceValveW',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/edf-sluice-w'),
        meta: {title: 'EDF W型闸阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-w/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/edf-sluice-w/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'edf-cutoff-valve-w',
        name: 'EDFCutoffValveW',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/edf-cutoff-s'),
        meta: {title: 'EDF S型截止阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/edf-cutoff-s/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/edf-cutoff-s/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'areva-sluice-valve',
        name: 'AREVASluiceValve',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/areva-sluice'),
        meta: {title: '华龙一号 闸阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/areva-sluice/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/areva-sluice/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      }, {
        path: 'areva-cutoff-valve',
        name: 'AREVACutoffValve',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/areva-cutoff'),
        meta: {title: '华龙一号 截止阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/areva-cutoff/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/areva-cutoff/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      }, {
        path: 'enchiridion-butterfly-valve',
        name: 'EnchiridionButterflyValve',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/enchiridion-butterfly'),
        meta: {title: '阀门手册 蝶阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/enchiridion-butterfly/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/enchiridion-butterfly/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'enchiridion-ball-valve',
        name: 'EnchiridionBallValve',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-headstock/enchiridion-ball'),
        meta: {title: '阀门手册 球阀'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-headstock/enchiridion-ball/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-headstock/enchiridion-ball/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
    ]
  },
  {
    path: '/calculation-valve-packing',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ValvePacking',
    meta: {title: '阀门盘根力矩', icon: 'el-icon-s-help', role: ['super','admin','operator']},
    children: [
      {
        path: 'edf',
        name: 'EDF',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-packing/edf'),
        meta: {title: 'EDF'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-packing/edf/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-packing/edf/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'areva',
        name: 'AREVA',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-packing/areva'),
        meta: {title: '华龙一号'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-packing/areva/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-packing/areva/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'enchiridion',
        name: 'Enchiridion',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-packing/enchiridion'),
        meta: {title: '阀门手册'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-packing/enchiridion/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-packing/enchiridion/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'epri',
        name: 'EPRI',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-valve-packing/epri'),
        meta: {title: 'EPRI'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-valve-packing/epri/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-valve-packing/epri/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
    ]
  },

  {
    path: '/calculation-pipe',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Pipe',
    meta: {title: '管道跨距', icon: 'el-icon-s-help', role: ['super','admin','operator']},
    children: [
      {
        path: 'nuclear',
        name: 'Nuclear',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-pipe/nuclear'),
        meta: {title: '核岛'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-pipe/nuclear/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-pipe/nuclear/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
      {
        path: 'conventional',
        name: 'Conventional',
        redirect: 'noRedirect',
        component: () => import('@/views/calculation-pipe/conventional'),
        meta: {title: '常规岛'},
        children: [
          {
            path: 'calculation',
            component: () => import('@/views/calculation-pipe/conventional/calculation'),
            name: 'Calculation',
            meta: {title: '数据计算'}
          },
          {
            path: 'report',
            component: () => import('@/views/calculation-pipe/conventional/report'),
            name: 'Report',
            meta: {title: '计算报告'}
          },
        ]
      },
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: {title: 'External Link', icon: 'link', role: ['super','admin']}
  //     }
  //   ]
  // },

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
