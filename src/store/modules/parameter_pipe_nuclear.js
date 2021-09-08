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
      h1_or_d:{
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
        unit: ''
      },
      h2: {
        value: '',
        meaning: '保温厚度',
        label: 'h2',
        unit: ''
      },
      p1:{
        value: '',
        meaning: '材料密度',
        label: 'p1',
        unit: ''
      },
      E:{
        value: '',
        meaning: '弹性模量',
        label: 'E',
        unit: ''
      },
      p2:{
        value: '',
        meaning: '介质密度',
        label: 'p2',
        unit: ''
      },

      // 等效长度
      W:{
        value: '',
        meaning: '集中载荷重量',
        label: 'W',
        unit: ''
      },
      l1:{
        value: '',
        meaning: '集中载荷长度',
        label: 'l1',
        unit: ''
      },
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
        unit: ''
      },

      // 等效长度
      l2: {
        value: '--',
        meaning: '等效长度',
        label: 'l2',
        unit: ''
      },

      // 跨距
      L: {
        value: '--',
        meaning: '跨距',
        label: 'L',
        unit: 'm'
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
