import {getToken} from "@/utils/auth";

const getDefaultConditionInput = () => {
  return {
    // 法兰压紧力
    P: {
      value: '',
      meaning: '工况下系统压力',
      label: 'P',
      unit: 'MPa'
    },
    Mf: {
      value: '',
      meaning: '系统外载荷弯矩',
      label: 'Mf',
      unit: 'N·mm'
    },
    Fa: {
      value: '',
      meaning: '系统外载荷轴向力',
      label: 'Fa',
      unit: 'N'
    },

    // 螺栓预紧力
    Faq: {
      value: '',
      meaning: '系统外载荷切向力',
      label: 'Faq',
      unit: 'N'
    },
    Mfn: {
      value: '',
      meaning: '系统外载荷扭矩',
      label: 'Mfn',
      unit: 'N·mm'
    },
    ff: {
      value: '',
      meaning: '法兰与垫片的静摩擦系数',
      label: 'ff',
      unit: ''
    },
    Ps: {
      value: '',
      meaning: '系统工作压力',
      label: 'Ps',
      unit: 'MPa'
    },
    Ec: {
      value: '',
      meaning: '室温下的弹性模量',
      label: 'Ec',
      unit: 'Pa'
    },
    Eh: {
      value: '',
      meaning: '工况温度下的弹性模量',
      label: 'Eh',
      unit: 'Pa'
    },
    FT: { // 可以手动修改，output中有同名参数
      value: '',
      meaning: '工况下克服法兰相对切向位移所需的力',
      label: 'FT',
      unit: 'N',
      is_calculated: true
    },

    // 螺栓所需最小截面面积
    S_bolt: {
      value: '',
      meaning: '螺栓材料的许用应力',
      label: 'S',
      unit: 'MPa'
    },
    Sy: {
      value: '',
      meaning: '螺栓材料的屈服强度',
      label: 'Sy',
      unit: 'MPa'
    },

    // 法兰力,
    Tm_flange: {
      value: '',
      meaning: '工况温度',
      label: 'Tm',
      unit: '℃'
    },
    S_flange: {
      value: '',
      meaning: '工况温度下法兰材料的许用应力',
      label: 'S',
      unit: 'MPa'
    },

    // 法兰力矩
  }
}

const getDefaultConditionOutput = () => {
  return {
    // 法兰压紧力
    Peq: {
      value: '--',
      meaning: '外载荷等效压力',
      label: 'Peq',
      unit: 'MPa'
    },
    FF: {
      value: '--',
      meaning: '由压力产生的端部静压力',
      label: 'FF(P+Peq)',
      unit: 'N'
    },
    FM: {
      value: '--',
      meaning: '保证垫片密封要求的力',
      label: 'FM',
      unit: 'N'
    },
    FS: {
      value: '--',
      meaning: '室温下保证垫片密封要求的力',
      label: 'FS',
      unit: 'N'
    },

    // 螺栓预紧力
    FS0: {
      value: '--',
      meaning: '修正后室温下保证垫片密封要求的力',
      label: 'FS0',
      unit: 'N'
    },
    FT: {
      value: '--',
      meaning: '工况下克服法兰相对切向位移所需的力',
      label: 'FT',
      unit: 'N'
    },
    FS_: {
      value: '--',
      meaning: '工况下保证密封要求的力',
      label: 'FS\'',
      unit: 'N'
    },
    FS0_: {
      value: '--',
      meaning: '修正后运行工况下保证密封要求的力',
      label: 'FS0\'',
      unit: 'N'
    },
    FSi: {
      value: '--',
      meaning: '最终的螺栓预紧力',
      label: 'FSi',
      unit: 'N'
    },

    // 螺栓所需最小截面面积
    FSP: {
      value: '--',
      meaning: '工况压力下保证垫片密封要求的力',
      label: 'FS(P)',
      unit: 'N'
    },
    SA: {
      value: '--',
      meaning: '所需的螺栓最小截面积',
      label: 'SA',
      unit: 'mm2',
      check_result: '--', // '通过' or '不通过'
    },

    bolt_check_result: '--', // '通过' or '不通过'

    // 法兰力
    FSi_: {
      value: '--',
      meaning: '修正后法兰承受的预紧力',
      label: 'FSi\'',
      unit: 'N'
    },
    SA_SB: {
      value: '--',
      meaning: '(1+SB/SA)/2',
      label: '(1+SB/SA)/2',
      unit: '',
      format_label: '(1+SB/SA)/2'
    },
    HD: {
      value: '--',
      meaning: '法兰端面静压力',
      label: 'HD',
      unit: 'N'
    },
    HT: {
      value: '--',
      meaning: '密封圈和法兰孔环形面上的静压力',
      label: 'HT',
      unit: 'N'
    },
    HD_: {
      value: '--',
      meaning: '外载作用下法兰端面静压力增量',
      label: 'HD\'',
      unit: 'N'
    },
    HT_: {
      value: '--',
      meaning: '外载作用下密封圈和法兰孔环形面上的静压力增量',
      label: 'HT\'',
      unit: 'N'
    },
    HG: {
      value: '--',
      meaning: '密封垫圈上的反作用力',
      label: 'HG',
      unit: 'N'
    },

    // 法兰力矩
    MD: {
      value: '--',
      meaning: '法兰内部压力引起的弯矩',
      label: 'MD',
      unit: 'N·mm'
    },
    MD_: {
      value: '--',
      meaning: '外力作用弯矩',
      label: 'MD\'',
      unit: 'N·mm'
    },
    MT: {
      value: '--',
      meaning: 'HT引起的弯矩',
      label: 'MT',
      unit: 'N·mm'
    },
    MT_: {
      value: '--',
      meaning: '外力作用弯矩',
      label: 'MT\'',
      unit: 'N·mm'
    },
    MG: {
      value: '--',
      meaning: '密封垫圈反作用力产生的弯矩',
      label: 'MG',
      unit: 'N·mm'
    },
    MO: {
      value: '--',
      meaning: '作用在法兰上的最大弯矩',
      label: 'MO',
      unit: 'N·mm'
    },
    MA: {
      value: '--',
      meaning: '用于特殊检验时的弯矩',
      label: 'MA',
      unit: 'N·mm'
    },
    M: {
      value: '--',
      meaning: '法兰应力计算所需弯矩',
      label: 'M',
      unit: 'N·mm'
    },

    // 法兰应力
    SR: {
      value: '--',
      meaning: '法兰盘与法兰颈部交接处的径向应力',
      label: 'SR',
      unit: 'MPa',
      limit: '--',
      check_result: '--'
    },
    ST: {
      value: '--',
      meaning: '法兰盘内部切向应力',
      label: 'ST',
      unit: 'MPa',
      limit: '--',
      check_result: '--'
    },
    SH_: {
      value: '--',
      meaning: '法兰颈与法兰盘交接处的纵向应力',
      label: 'SH\'',
      unit: 'MPa',
      limit: '--',
    },
    SH__: {
      value: '--',
      meaning: '法兰颈与套管交接处的纵向应力',
      label: 'SH\'\'',
      unit: 'MPa',
      limit: '--',
    },
    SH: {
      value: '--',
      meaning: '法兰颈外表面纵向应力',
      label: 'SH',
      unit: 'MPa',
      limit: '--',
      check_result: '--'
    },
    SH_SR: {
      value: '--',
      meaning: '(SH+SR)/2',
      label: '(SH+SR)/2',
      unit: 'MPa',
      format_label: '(SH+SR)/2',
      limit: '--',
      check_result: '--'
    },
    SH_ST: {
      value: '--',
      meaning: '(SH+ST)/2',
      label: '(SH+ST)/2',
      unit: 'MPa',
      format_label: '(SH+ST)/2',
      limit: '--',
      check_result: '--'
    },
    flange_check_result: '--'
  }
}

const state = {
  general: {
    name: 'general',
    name_zh: '通用',
    input: {
      // 垫片参数
      m: {
        value: '',
        meaning: '垫片系数',
        label: 'm',
        unit: ''
      },
      y: {
        value: '',
        meaning: '垫片密封比压力',
        label: 'y',
        unit: 'MPa'
      },
      Do: {
        value: '',
        meaning: '法兰垫片外径',
        label: 'Do',
        unit: 'mm'
      },
      Di: {
        value: '',
        meaning: '法兰垫片内径',
        label: 'Di',
        unit: 'mm'
      },
      b0: {
        value: '',
        meaning: '基本密封宽度',
        label: 'b0',
        unit: 'mm'
      },
      b: {
        value: '',
        meaning: '有效密封宽度',
        label: 'b',
        unit: 'mm'
      },

      // 实际螺栓面积
      d: {
        value: '',
        meaning: '螺栓公称直径',
        label: 'd',
        unit: 'mm'
      },
      n: {
        value: '',
        meaning: '螺栓数量',
        label: 'n',
        unit: ''
      },
      P: {
        value: '',
        meaning: '螺栓节距',
        label: 'P',
        unit: 'mm'
      },
      SB: { // 整体螺栓面积，可以手动修改，output中有同名参数
        value: '',
        meaning: '整体螺栓实际根部截面积',
        label: 'SB',
        unit: 'mm2',
        is_calculated: true
      },
      SB_is_calculated: true,

      // 法兰尺寸
      A: {
        value: '',
        meaning: '法兰外径',
        label: 'A',
        unit: 'mm'
      },
      B: {
        value: '',
        meaning: '法兰内径',
        label: 'B',
        unit: 'mm'
      },

      // 法兰力矩
      g0: {
        value: '',
        meaning: '法兰颈最薄处的厚度',
        label: 'g0',
        unit: 'mm'
      },
      g1: {
        value: '',
        meaning: '法兰颈最厚处的厚度',
        label: 'g1',
        unit: 'mm'
      },
      h: {
        value: '',
        meaning: '法兰颈长度',
        label: 'h',
        unit: 'mm'
      },
      Ep: {
        value: '',
        meaning: '法兰盘厚度',
        label: 'Ep',
        unit: 'mm'
      },
      C: {
        value: '',
        meaning: '螺栓节圆直径',
        label: 'C',
        unit: 'mm'
      },

      // 法兰应力
      lam: {
        value: '',
        meaning: '法兰形式系数',
        label: 'λ',
        unit: ''
      },
      F: {
        value: '',
        meaning: '法兰形式系数',
        label: 'F',
        unit: ''
      },
      V: {
        value: '',
        meaning: '法兰形式系数',
        label: 'V',
        unit: ''
      },
      nu: {
        value: 0.3,
        meaning: '法兰材料泊松比',
        label: 'ν',
        unit: ''
      },
    },
    output: {
      // 垫片参数
      Dj: {
        value: '--',
        meaning: '垫片平均直径',
        label: 'Dj',
        unit: 'mm'
      },
      Fj: {
        value: '--',
        meaning: '压紧密封垫圈所需的力',
        label: 'Fj',
        unit: 'N'
      },

      // 实际螺栓面积
      S: {
        value: '--',
        meaning: '单个螺栓实际根部截面积',
        label: 'S',
        unit: 'mm2'
      },
      SB: {
        value: '--',
        meaning: '整体螺栓实际根部截面积',
        label: 'SB',
        unit: 'mm2'
      },

      // 法兰尺寸

      // 法兰力矩
      C0: {
        value: '--',
        meaning: '力矩修正系数',
        label: 'C0',
        unit: ''
      },
      R: {
        value: '--',
        meaning: 'R=0.5(C-B)-g1',
        label: 'R',
        unit: 'mm',
        format_label: 'R=0.5(C-B)-g1'
      },
      hd: {
        value: '--',
        meaning: '支撑载荷HD与HD\'的轴到节圆的距离',
        label: 'hd',
        unit: 'mm'
      },
      hg: {
        value: '--',
        meaning: '支撑载荷HG的轴到节圆的距离',
        label: 'hg',
        unit: 'mm'
      },
      ht: {
        value: '--',
        meaning: '支撑载荷HT与HT的轴到节圆的距离',
        label: 'ht',
        unit: 'mm'
      },

      // 法兰应力
      g1_20:{
        value: '--',
        meaning: '系数',
        label: '20g1',
        unit: 'mm'
      },
      h0: {
        value: '--',
        meaning: '系数',
        label: 'h0',
        unit: ''
      },
      h_h0: {
        value: '--',
        meaning: '系数',
        label: 'h/h0',
        unit: ''
      },
      g1_g0: {
        value: '--',
        meaning: '系数',
        label: 'g1/g0',
        unit: ''
      },
      K: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'K',
        unit: ''
      },
      T: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'T',
        unit: ''
      },
      Y: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'Y',
        unit: ''
      },
      U: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'U',
        unit: ''
      },
      Z: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'Z',
        unit: ''
      },
      e_: {
        value: '--',
        meaning: '系数',
        label: 'e',
        unit: ''
      },
      L: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'L',
        unit: ''
      },
      B1: {
        value: '--',
        meaning: '系数',
        label: 'B1',
        unit: ''
      },
    }
  },
  design: {
    name: 'design',
    name_zh: '设计',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
  running: {
    name: 'running',
    name_zh: '运行',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
  abnormal: {
    name: 'abnormal',
    name_zh: '异常',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
  emergency: {
    name: 'emergency',
    name_zh: '紧急',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
  accident: {
    name: 'accident',
    name_zh: '事故',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
  trial: {
    name: 'trial',
    name_zh: '试验',
    input: getDefaultConditionInput(),
    output: getDefaultConditionOutput()
  },
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
