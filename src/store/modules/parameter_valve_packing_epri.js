const state = {
  general: {
    input: {
      // 输入参数
      PMS: {
        value: '',
        meaning: '阀门最大运行压力',
        label: 'PMS',
        unit: 'MPa'
      },
      Do: {
        value: '',
        meaning: '填料函外直径',
        label: 'Do',
        unit: 'mm'
      },
      Di: {
        value: '',
        meaning: '阀杆直径',
        label: 'Di',
        unit: 'mm'
      },
      D: {
        value: '',
        meaning: '螺栓公称直径',
        label: 'D',
        unit: 'mm'
      },
      K: {
        value: '',
        meaning: '螺母系数',
        label: 'K',
        unit: 'mm'
      },
      N: {
        value: '',
        meaning: '螺栓根数',
        label: 'N',
        unit: ''
      },
    },

    output: {
      // 结果参数
      Pg: {
        value: '--',
        meaning: '盘根密封所需压力',
        label: 'Pg',
        unit: 'MPa'
      },

      Cs: {
        value: '--',
        meaning: '最小盘根力矩值',
        label: 'Cs',
        unit: 'N·m'
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
