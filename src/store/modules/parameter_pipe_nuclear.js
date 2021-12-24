const state = {
  general: {
    input: {
      // 管道界面惯性矩
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
        meaning: '壁厚',
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

      // 单位长度载荷
      T: {
        value: '',
        meaning: '温度',
        label: 'T',
        unit: '℃'
      },
      P: {
        value: '',
        meaning: '压力',
        label: 'P',
        unit: 'MPa'
      },
      p3: {
        value: '',
        meaning: '保温密度',
        label: 'p3',
        unit: 'kg/m3'
      },
      h2: {
        value: '',
        meaning: '保温厚度',
        label: 'h2',
        unit: 'mm'
      },
      p1: {
        value: 7850,
        meaning: '材料密度',
        label: 'p1',
        unit: 'kg/m3'
      },
      E: {
        value: '',
        meaning: '弹性模量',
        label: 'E',
        unit: 'Mpa'
      },
      p2: {
        value: 1000,
        meaning: '介质密度',
        label: 'p2',
        unit: 'kg/m3'
      },

      // 等效长度
      W: {
        value: '',
        meaning: '集中载荷重量',
        label: 'W',
        unit: 'kg'
      },
      l1: {
        value: '',
        meaning: '集中载荷长度',
        label: 'l1',
        unit: 'mm'
      },

      // 允许跨距
      V: {
        value: 2.5,
        meaning: '挠度',
        label: 'V',
        unit: 'mm',
      },

      // 跨距校核
      L_:{
        value: '',
        meaning: '现场支架跨距',
        label: 'L\'',
        unit: 'mm',
      }
    },

    output: {
      // 管道界面惯性矩
      I: {
        value: '--',
        meaning: '管道界面惯性矩',
        label: 'I',
        unit: 'mm4'
      },

      // 单位长度载荷
      q: {
        value: '--',
        meaning: '单位长度载荷',
        label: 'q',
        unit: 'N/m'
      },
      L: {
        value: '--',
        meaning: '允许跨距',
        label: 'L',
        unit: 'mm',
        check_result: '--',
      },

      // 等效长度
      l2: {
        value: '--',
        meaning: '等效长度',
        label: 'l2',
        unit: 'mm'
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
