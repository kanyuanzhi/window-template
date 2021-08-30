const state = {
  general: {
    input: {
      // 系统与结构参数
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
      Dt: {
        value: '',
        meaning: '阀杆直径（填料处）',
        label: 'Dt',
        unit: 'mm'
      },
      Pfonc: {
        value: '',
        meaning: '系统最大运行压力',
        label: 'Pfonc',
        unit: 'MPa'
      },
      Dtcm: {
        value: '',
        meaning: '阀杆光滑直径（填料处）',
        label: 'Dtcm',
        unit: 'cm'
      },
      PMS: {
        value: '',
        meaning: '阀门设计压力',
        label: 'PMS',
        unit: 'bar'
      },
      ra: {
        value: '',
        meaning: '填料函外半径',
        label: 'ra',
        unit: 'mm'
      },
      ri: {
        value: '',
        meaning: '填料函内半径',
        label: 'ri',
        unit: 'mm'
      },
      h: {
        value: '',
        meaning: '填料函高度或者预压填料总高度',
        label: 'h',
        unit: 'mm'
      },
      miu_st: {
        value: '',
        meaning: '填料摩擦系数',
        label: 'μst',
        unit: ''
      },
      R: {
        value: '',
        meaning: '盘根法向压力转换径向压力系数',
        label: 'R',
        unit: ''
      },
      fD: {
        value: '',
        meaning: '密封系数',
        label: 'fD',
        unit: ''
      },
      E: {
        value: '',
        meaning: '密封系数',
        label: 'E',
        unit: 'N/mm'
      },
      L: {
        value: '',
        meaning: '密封表面宽度',
        label: 'L',
        unit: 'mm'
      },


      // 螺纹与系数参数
      D: {
        value: '',
        meaning: '阀杆公称直径',
        label: 'D',
        unit: 'mm'
      },
      PP: {
        value: '',
        meaning: '螺距',
        label: 'PP',
        unit: 'mm'
      },
      Lead: {
        value: '',
        meaning: '阀杆螺纹螺距×每圈螺纹数',
        label: 'Lead',
        unit: ''
      },
      Nbf: {
        value: '',
        meaning: '阀杆螺纹线程数',
        label: 'Nbf',
        unit: ''
      },
      miu_2: {
        value: '',
        meaning: '阀杆螺纹摩擦系数',
        label: 'μ2',
        unit: ''
      },
      miu_3: {
        value: 0,
        meaning: '轴承摩擦系数（默认值0）',
        label: 'μ3',
        unit: ''
      },
      RMB: {
        value: '',
        meaning: '阀杆螺纹螺母平均半径',
        label: 'RMB',
        unit: 'mm'
      },
      beta: {
        value: '',
        meaning: '梯形螺纹牙角的一半',
        label: 'β',
        unit: ''
      },
      RCAD: {
        value: '',
        meaning: '远程传递系数',
        label: 'RCAD',
        unit: ''
      },
      Ma: {
        value: '',
        meaning: '裕度系数',
        label: 'Ma',
        unit: ''
      },
      gama: {
        value: 10,
        meaning: '力矩开关容差系数（默认值10%）',
        label: 'γ',
        unit: '%'
      },
      i: {
        value: '',
        meaning: '齿轮箱转速比',
        label: 'i',
        unit: ''
      },
      eta: {
        value: '',
        meaning: '齿轮箱效率',
        label: 'η',
        unit: ''
      },

      // 中间过程参数
      Q3_type: {
        value: 1, // 1:Stuffing box fulfilling EDF requirements,2:Standard Stuffing box
        meaning: '参与计算的阀杆填料处摩擦力Q3类型',
        label: '',
        unit: '',
        items: [{
          selection: 1,
          meaning: 'Stuffing box fulfilling EDF requirements'
        }, {
          selection: 2,
          meaning: 'Standard Stuffing box'
        }]
      },
      Q4_type: {
        value: 1, // 1:Sphere/cone contact,2:Flat/flat contact
        meaning: '参与计算的保证密封所需的力Q4类型',
        label: '',
        unit: '',
        items: [{
          selection: 1,
          meaning: 'Sphere/cone contact'
        }, {
          selection: 2,
          meaning: 'Flat/flat contact'
        }]
      },

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
      hcm: {
        value: '--',
        meaning: '填料高度',
        label: 'hcm',
        unit: 'cm'
      },
      S: {
        value: '--',
        meaning: '填料摩擦面积',
        label: 'S',
        unit: 'cm2'
      },
      PPE: {
        value: '--',
        meaning: '填料承受压强',
        label: 'PPE',
        unit: 'bar'
      },
      FB: {
        value: '--',
        meaning: '压盖作用盘根力（法向力）',
        label: 'FB',
        unit: 'N'
      },

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
      Q3_1: {
        value: '--',
        meaning: '阀杆填料处摩擦力（Stuffing box fulfilling EDF requirements）',
        label: 'Q3',
        unit: 'N'
      },
      Q3_2: {
        value: '--',
        meaning: '阀杆填料处摩擦力（Standard Stuffing box）',
        label: 'Q3',
        unit: 'N'
      },
      Q4_1: {
        value: '--',
        meaning: '保证密封所需的力（Sphere/cone contact）',
        label: 'Q4',
        unit: 'N'
      },
      Q4_2: {
        value: '--',
        meaning: '保证密封所需的力（Flat/flat contact）',
        label: 'Q4',
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
        meaning: '力矩（无考虑裕度）',
        label: 'C',
        unit: 'N·m'
      },
      Cma_without_gear: {
        value: '--',
        meaning: '力矩（已考虑裕度）（无齿轮箱）',
        label: 'Cma',
        unit: 'N·m'
      },
      Cma_with_gear: {
        value: '--',
        meaning: '力矩（已考虑裕度）（有齿轮箱）',
        label: 'Cma',
        unit: 'N·m'
      },
      CRT_without_gear: {
        value: '--',
        meaning: '力矩设定值（无齿轮箱）',
        label: 'CRT',
        unit: 'N·m'
      },
      CRT_with_gear: {
        value: '--',
        meaning: '力矩设定值（有齿轮箱）',
        label: 'CRT',
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
