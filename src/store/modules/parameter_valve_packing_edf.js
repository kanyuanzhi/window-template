const state = {
  general: {
    input: {
      // 输入参数
      P: {
        value: '',
        meaning: '阀门最大运行压力',
        label: 'P',
        unit: 'MPa'
      },
      Do: {
        value: '',
        meaning: '盘根外直径',
        label: 'Do',
        unit: 'mm'
      },
      Di: {
        value: '',
        meaning: '盘根内直径',
        label: 'Di',
        unit: 'mm'
      },
      Pitch: {
        value: '',
        meaning: '螺栓螺纹螺距',
        label: 'Pitch',
        unit: 'mm'
      },
      r: {
        value: '',
        meaning: '螺栓螺纹中径的一半',
        label: 'r',
        unit: 'mm'
      },
      Rma: {
        value: '',
        meaning: '螺栓光杆部分公称半径与螺母平头半径的算术平均值',
        label: 'Rma',
        unit: 'mm'
      },
      f: {
        value: '',
        meaning: '螺纹摩擦系数',
        label: 'f',
        unit: ''
      },
      f_: {
        value: '',
        meaning: '螺母与垫片之间的摩擦系数',
        label: 'f\'',
        unit: ''
      },
      n: {
        value: '',
        meaning: '螺栓根数',
        label: 'n',
        unit: ''
      },
    },

    output: {
      // 结果参数
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
