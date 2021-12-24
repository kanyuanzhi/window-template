const state = {
  general: {
    input: {
      // 输入参数
      D: {
        value: '',
        meaning: '管道外径',
        label: 'D',
        unit: 'mm'
      },
      d: {
        value: '',
        meaning: '管道内径（注:d=D-2*h1）',
        label: 'd',
        unit: 'mm'
      },
      h1: {
        value: '',
        meaning: '管道壁厚',
        label: 'h1',
        unit: 'mm'
      },
      h1_or_d: {
        value: 0, // 0：使用壁厚、1：使用内径
        meaning: '选择使用内径或壁厚参与计算',
        label: '',
        unit: '',
        items: [{
          selection: 0,
          meaning: '使用壁厚',
          value: ''
        }, {
          selection: 1,
          meaning: '使用内径',
          value: ''
        }],
        selection: 0
      },
      T: {
        value: '',
        meaning: '温度',
        label: 'T',
        unit: '℃'
      },
      heat_preservation: {
        value: 0,
        meaning: '是否保温',
        label: '',
        unit: '',
        items: [{
          selection: 0,
          meaning: '不保温',
          value: ''
        }, {
          selection: 1,
          meaning: '保温',
          value: ''
        }],
      },
    },

    output: {
      // 跨距
      L_liquid: {
        value: '--',
        meaning: '水管跨距',
        label: 'L',
        unit: 'm'
      },
      L_vapor: {
        value: '--',
        meaning: '汽管跨距',
        label: 'L',
        unit: 'm'
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
