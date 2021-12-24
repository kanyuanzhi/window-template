const state = {
  general: {
    input: {
      // 系统与结构参数
      miu_1: {
        value: 1,
        meaning: '阀板与阀座摩擦系数（默认值1）',
        label: 'μ1',
        unit: ''
      },
      theta: {
        value: 0,
        meaning: '两阀板夹角的一半（默认值0）',
        label: 'Θ',
        unit: '度'
      },
      Ds: {
        value: '',
        meaning: '阀座平均直径',
        label: 'Ds',
        unit: 'mm'
      },
      delta_P: {
        value: '',
        meaning: '阀门上下游压差',
        label: 'ΔP',
        unit: 'MPa'
      },
      Sp: {
        value: 0,
        meaning: '阀门关闭时产生活塞力（默认值0）',
        label: 'Sp',
        unit: 'MPa'
      },
      Dt: {
        value: '',
        meaning: '阀杆直径（填料处）',
        label: 'Dt',
        unit: 'mm'
      },
      Pms: {
        value: '',
        meaning: '阀门设计压力',
        label: 'Pms',
        unit: 'MPa'
      },
      h: {
        value: '',
        meaning: '盘根高度',
        label: 'h',
        unit: 'mm'
      },
      Pfonc: {
        value: '',
        meaning: '系统最大运行压力',
        label: 'Pfonc',
        unit: 'MPa'
      },
      E: {
        value: '',
        meaning: '密封线性压力',
        label: 'E',
        unit: 'N/mm'
      },

      // 螺纹与系数参数
      miu_2: {
        value: '',
        meaning: '阀杆传动螺纹摩擦系数',
        label: 'μ2',
        unit: ''
      },
      beta: {
        value: '',
        meaning: '梯形螺纹牙形面角的一半',
        label: 'β',
        unit: '度'
      },
      P: {
        value: '',
        meaning: '阀杆传动螺纹的螺距',
        label: 'P',
        unit: 'mm'
      },
      d: {
        value: '',
        meaning: '阀杆螺纹大径',
        label: 'd',
        unit: 'mm'
      },
      Ph: {
        value: '',
        meaning: '阀杆螺纹步长',
        label: 'Ph',
        unit: 'mm'
      },
      R: {
        value: '',
        meaning: '远程操作系数',
        label: 'R',
        unit: ''
      },
      CR: {
        value: 1.3,
        meaning: '裕度系数（默认值1.3）',
        label: 'CR',
        unit: ''
      },

      // 中间过程参数
      Q5: {
        value: 0,
        meaning: '活动部件重力（默认值0）',
        label: 'Q5',
        unit: 'N'
      },
      Q6: {
        value: 0,
        meaning: '波纹管等外力（默认值0）',
        label: 'Q6',
        unit: 'N'
      },
    },

    output: {
      // 系统与结构参数

      // 螺纹与系数参数
      Rm: {
        value: '--',
        meaning: '阀杆螺纹处平均半径',
        label: 'Rm',
        unit: 'mm'
      },
      alpha: {
        value: '--',
        meaning: '阀杆螺纹螺旋角',
        label: 'α',
        unit: '度'
      },
      tan_alpha: {
        value: '--',
        meaning: '',
        label: 'tgα',
        unit: ''
      },

      // 中间过程参数
      Q1: {
        value: '--',
        meaning: '阀板处压力引起的摩擦力',
        label: 'Q1',
        unit: 'N'
      },
      Q2: {
        value: '--',
        meaning: '介质压力对阀杆推力',
        label: 'Q2',
        unit: 'N'
      },
      Q3: {
        value: '--',
        meaning: '阀杆填料处摩擦力',
        label: 'Q3',
        unit: 'N'
      },
      Q4: {
        value: '--',
        meaning: '保证密封所需的力',
        label: 'Q4',
        unit: 'N'
      },
      Qt: {
        value: '--',
        meaning: '总力',
        label: 'Qt',
        unit: 'N'
      },
      Tf: {
        value: '--',
        meaning: '阀杆系数',
        label: 'Tf',
        unit: ''
      },

      // 结果数据
      C: {
        value: '--',
        meaning: '力矩计算结果',
        label: 'C',
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
