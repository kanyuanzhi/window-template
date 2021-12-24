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
      miu: {
        value: '',
        meaning: '摩擦系数',
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
        unit: 'mm'
      },
      D: {
        value: '',
        meaning: '填料函外径',
        label: 'D',
        unit: 'mm'
      },
      d: {
        value: '',
        meaning: '填料函内径',
        label: 'd',
        unit: 'mm'
      },
      s: {
        value: '',
        meaning: '盘根宽度',
        label: 's',
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
      N: {
        value: '',
        meaning: '螺栓根数',
        label: 'N',
        unit: ''
      },
    },

    output: {
      // 结果参数
      Cs: {
        value: '--',
        meaning: '力矩',
        label: 'Cs',
        unit: 'N·m'
      },
    }
  }
}

const mutations = {
  update: (state, new_input) => {
    state.general.input = new_input
  },
  update_output: (state, new_output) => {
    state.general.output = new_output
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
