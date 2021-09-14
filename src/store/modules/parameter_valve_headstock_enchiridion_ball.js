const state = {
  general: {
    input: {
      // 输入参数一
      Rk: {
        value: '',
        meaning: '球体流通孔半径',
        label: 'Rk',
        unit: 'cm'
      },
      Rm: {
        value: '',
        meaning: '球体半径',
        label: 'Rm',
        unit: 'cm'
      },
      P: {
        value: '',
        meaning: '阀门最大运行压力',
        label: 'P',
        unit: 'kgf/cm2'
      },
      miu_k: {
        value: '',
        meaning: '球体摩擦系数',
        label: 'μk',
        unit: ''
      },
      a: {
        value: '',
        meaning: '球体流通孔长度的一半',
        label: 'a',
        unit: 'cm'
      },

      // 输入参数二
      miu: {
        value: '',
        meaning: '阀杆摩擦系数',
        label: 'μ',
        unit: ''
      },
      n: {
        value: '',
        meaning: '盘根轴向压力与弹性产生的径向压力的比值',
        label: 'n',
        unit: ''
      },
      h: {
        value: '',
        meaning: '填料高度',
        label: 'h',
        unit: 'cm'
      },
      dc: {
        value: '',
        meaning: '阀杆直径',
        label: 'dc',
        unit: 'cm'
      },
      s: {
        value: '',
        meaning: '盘根宽度',
        label: 's',
        unit: 'cm'
      },
    },

    output: {
      // 输入参数一
      sin_beta: {
        value: '--',
        meaning: '',
        label: 'sinβ',
        unit: ''
      },
      cos_beta: {
        value: '--',
        meaning: '',
        label: 'cosβ',
        unit: ''
      },

      // 过程参数
      MK: {
        value: '--',
        meaning: '球体力矩',
        label: 'MK',
        unit: 'kgf·cm'
      },
      MT: {
        value: '--',
        meaning: '盘根摩擦力矩',
        label: 'MT',
        unit: 'kgf·cm'
      },
      MS: {
        value: '--',
        meaning: '总力矩',
        label: 'MS',
        unit: 'kgf·cm'
      },
    }
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
