const state = {
  general: {
    input: {
      // 垫片参数
      gasket_materials_name: {
        value: '', // STAINLESS STEEL/GRAPHITE
        meaning: '垫片材质',
        label: 'Material',
        unit: ''
      },
      DGO: {
        value: '',
        meaning: '垫片接触外径',
        label: 'DGO',
        unit: 'mm'
      },
      DGI: {
        value: '',
        meaning: '垫片接触内径',
        label: 'DGI',
        unit: 'mm'
      },
      EG: {
        value: '',
        meaning: '垫片高度',
        label: 'EG',
        unit: 'mm'
      },
      y: {
        value: '',
        meaning: '垫片比压力',
        label: 'y',
        unit: 'MPa'
      },
      m: {
        value: '',
        meaning: '垫片系数',
        label: 'm',
        unit: ''
      },

      // 螺栓参数
      bolt_materials_name: {
        value: '', // 40MnB
        meaning: '螺栓材质',
        label: 'Material',
        unit: ''
      },
      dB: {
        value: '',
        meaning: '螺栓公称直径',
        label: 'dB',
        unit: 'mm'
      },
      P: {
        value: '',
        meaning: '螺栓螺距',
        label: 'P',
        unit: 'mm'
      },
      Dpb: {
        value: '',
        meaning: '螺栓孔直径',
        label: 'Dpb',
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
        meaning: '螺母与法兰摩擦系数',
        label: 'f\'',
        unit: ''
      },
      n: {
        value: '',
        meaning: '螺栓数量',
        label: 'n',
        unit: ''
      },

      // 法兰参数
      flange_materials_name: {
        value: '', // 16Mn
        meaning: '法兰材质',
        label: 'Material',
        unit: ''
      },
      Do: {
        value: '',
        meaning: '法兰外径',
        label: 'Do',
        unit: 'mm'
      },
      Di: {
        value: '',
        meaning: '法兰内径',
        label: 'Di',
        unit: 'mm'
      },
      Db: {
        value: '',
        meaning: '法兰螺孔直径',
        label: 'Db',
        unit: 'mm'
      },
      delta_f: {
        value: '',
        meaning: '法兰有效厚度',
        label: 'δf',
        unit: 'mm'
      },
      delta_0: {
        value: '',
        meaning: '法兰颈部最薄处厚度',
        label: 'δ0',
        unit: 'mm'
      },
      delta_1: {
        value: '',
        meaning: '法兰颈部最厚处厚度',
        label: 'δ1',
        unit: 'mm'
      },
      h: {
        value: '',
        meaning: '法兰颈长度',
        label: 'h',
        unit: 'mm'
      },
      DG: {
        value: '',
        meaning: '垫片压紧力作用中心圆直径',
        label: 'DG',
        unit: 'mm'
      },

      // 螺栓紧固力矩
      P_stress: {
        value: '',
        meaning: '设计压力',
        label: 'P',
        unit: 'Mpa'
      },
      T_temperature: {
        value: '',
        meaning: '设计温度',
        label: 'T',
        unit: '℃'
      },
      Sigma_b: {
        value: '',
        meaning: '螺栓在常温下许用应力',
        label: 'σb',
        unit: 'Mpa'
      },
      Sigma_bt: {
        value: '',
        meaning: '螺栓在设计温度下许用应力',
        label: 'σbt',
        unit: 'Mpa'
      },
      Eb: {
        value: '',
        meaning: '螺栓在常温下的弹性模量',
        label: 'Eb',
        unit: 'Mpa'
      },
      Ebt: {
        value: '',
        meaning: '螺栓在运行温度下的弹性模量',
        label: 'Ebt',
        unit: 'Mpa'
      },
      T_: {
        value: '',
        meaning: '单根螺栓的最终紧固力矩',
        label: 'T\'',
        unit: 'N·m',
        check_result: '--' // 通过 or 不通过
      },

      // 设计工况
      Sigma_f: {
        value: '',
        meaning: '常温下法兰许用应力',
        label: 'σf',
        unit: 'MPa'
      },
      Sigma_ft: {
        value: '',
        meaning: '设计温度下法兰许用应力',
        label: 'σft',
        unit: 'MPa'
      },
      Ef: {
        value: '',
        meaning: '常温下法兰弹性模量',
        label: 'Ef',
        unit: 'MPa'
      },
      Eft: {
        value: '',
        meaning: '设计温度下法兰弹性模量',
        label: 'Eft',
        unit: 'MPa'
      },
      KI_factor: {
        value: 0.3,
        meaning: '刚度系数',
        label: 'KI',
        unit: ''
      },
      KI_index_limit: {
        value: 1,
        meaning: '刚度指数限值（默认1）',
        label: 'KI index limit',
        unit: '',
      },
    },
    output: {
      // 垫片参数
      N: {
        value: '--',
        meaning: '垫片作用宽度',
        label: 'N',
        unit: 'mm'
      },
      b0: {
        value: '--',
        meaning: '垫片基本密封宽度',
        label: 'b0',
        unit: 'mm'
      },
      b: {
        value: '--',
        meaning: '垫片有效密封宽度',
        label: 'b',
        unit: 'mm'
      },
      DG: {
        value: '--',
        meaning: '垫片压紧力作用中心圆直径',
        label: 'DG',
        unit: 'mm'
      },

      // 螺栓参数
      r: {
        value: '--',
        meaning: '螺纹顶半径',
        label: 'r',
        unit: 'mm'
      },
      Dee: {
        value: '--',
        meaning: '螺母支撑面半径',
        label: 'Dee',
        unit: 'mm'
      },
      Rma: {
        value: '--',
        meaning: '螺母平均支撑半径',
        label: 'Rma',
        unit: 'mm'
      },
      KI: {
        value: '--',
        meaning: '螺栓螺纹摩擦半径',
        label: 'KI',
        unit: 'mm'
      },
      Sb: {
        value: '--',
        meaning: '单根螺栓的应力截面',
        label: 'Sb',
        unit: 'mm2'
      },
      n_Sb: {
        value: '--',
        meaning: '螺栓总应力截面',
        label: 'n*Sb',
        unit: 'mm2'
      },

      // 法兰形状系数
      g0: {
        value: '--',
        meaning: '',
        label: 'g0',
        unit: 'mm'
      },
      g1: {
        value: '--',
        meaning: '',
        label: 'g1',
        unit: 'mm'
      },
      h_shape: {
        value: '--',
        meaning: '',
        label: 'h',
        unit: 'mm'
      },
      B: {
        value: '--',
        meaning: '',
        label: 'B',
        unit: 'mm'
      },
      h0: {
        value: '--',
        meaning: '',
        label: 'h0',
        unit: 'mm'
      },
      h_h0: {
        value: '--',
        meaning: '',
        label: 'h/h0',
        unit: ''
      },
      delta_1_0: {
        value: '--',
        meaning: '',
        label: 'δ1/δ0',
        unit: ''
      },
      A_factor: {
        value: '--',
        meaning: '',
        label: 'A',
        unit: ''
      },
      C: {
        value: '--',
        meaning: '',
        label: 'C',
        unit: ''
      },
      C1: {
        value: '--',
        meaning: '',
        label: 'C1',
        unit: ''
      },
      C2: {
        value: '--',
        meaning: '',
        label: 'C2',
        unit: ''
      },
      C3: {
        value: '--',
        meaning: '',
        label: 'C3',
        unit: ''
      },
      C4: {
        value: '--',
        meaning: '',
        label: 'C4',
        unit: ''
      },
      C5: {
        value: '--',
        meaning: '',
        label: 'C5',
        unit: ''
      },
      C6: {
        value: '--',
        meaning: '',
        label: 'C6',
        unit: ''
      },
      C7: {
        value: '--',
        meaning: '',
        label: 'C7',
        unit: ''
      },
      C8: {
        value: '--',
        meaning: '',
        label: 'C8',
        unit: ''
      },
      C9: {
        value: '--',
        meaning: '',
        label: 'C9',
        unit: ''
      },
      C10: {
        value: '--',
        meaning: '',
        label: 'C10',
        unit: ''
      },
      C11: {
        value: '--',
        meaning: '',
        label: 'C11',
        unit: ''
      },
      C12: {
        value: '--',
        meaning: '',
        label: 'C12',
        unit: ''
      },
      C13: {
        value: '--',
        meaning: '',
        label: 'C13',
        unit: ''
      },
      C14: {
        value: '--',
        meaning: '',
        label: 'C14',
        unit: ''
      },
      C15: {
        value: '--',
        meaning: '',
        label: 'C15',
        unit: ''
      },
      C16: {
        value: '--',
        meaning: '',
        label: 'C16',
        unit: ''
      },
      C17: {
        value: '--',
        meaning: '',
        label: 'C17',
        unit: ''
      },
      C18: {
        value: '--',
        meaning: '',
        label: 'C18',
        unit: ''
      },
      C19: {
        value: '--',
        meaning: '',
        label: 'C19',
        unit: ''
      },
      C20: {
        value: '--',
        meaning: '',
        label: 'C20',
        unit: ''
      },
      C21: {
        value: '--',
        meaning: '',
        label: 'C21',
        unit: ''
      },
      C22: {
        value: '--',
        meaning: '',
        label: 'C22',
        unit: ''
      },
      C23: {
        value: '--',
        meaning: '',
        label: 'C23',
        unit: ''
      },
      C24: {
        value: '--',
        meaning: '',
        label: 'C24',
        unit: ''
      },
      C25: {
        value: '--',
        meaning: '',
        label: 'C25',
        unit: ''
      },
      C26: {
        value: '--',
        meaning: '',
        label: 'C26',
        unit: ''
      },
      C27: {
        value: '--',
        meaning: '',
        label: 'C27',
        unit: ''
      },
      C28: {
        value: '--',
        meaning: '',
        label: 'C28',
        unit: ''
      },
      C29: {
        value: '--',
        meaning: '',
        label: 'C29',
        unit: ''
      },
      C30: {
        value: '--',
        meaning: '',
        label: 'C30',
        unit: ''
      },
      C31: {
        value: '--',
        meaning: '',
        label: 'C31',
        unit: ''
      },
      C32: {
        value: '--',
        meaning: '',
        label: 'C32',
        unit: ''
      },
      C33: {
        value: '--',
        meaning: '',
        label: 'C33',
        unit: ''
      },
      C34: {
        value: '--',
        meaning: '',
        label: 'C34',
        unit: ''
      },
      C35: {
        value: '--',
        meaning: '',
        label: 'C35',
        unit: ''
      },
      C36: {
        value: '--',
        meaning: '',
        label: 'C36',
        unit: ''
      },
      C37: {
        value: '--',
        meaning: '',
        label: 'C37',
        unit: ''
      },
      E1: {
        value: '--',
        meaning: '',
        label: 'E1',
        unit: ''
      },
      E2: {
        value: '--',
        meaning: '',
        label: 'E2',
        unit: ''
      },
      E3: {
        value: '--',
        meaning: '',
        label: 'E3',
        unit: ''
      },
      E4: {
        value: '--',
        meaning: '',
        label: 'E4',
        unit: ''
      },
      E5: {
        value: '--',
        meaning: '',
        label: 'E5',
        unit: ''
      },
      E6: {
        value: '--',
        meaning: '',
        label: 'E6',
        unit: ''
      },

      A_diameter: {
        value: '--',
        meaning: '法兰外径',
        label: 'A',
        unit: 'mm'
      },
      K: {
        value: '--',
        meaning: '法兰外径和内径之比',
        label: 'K',
        unit: ''
      },
      T_factor: {
        value: '--',
        meaning: '计算系数',
        label: 'T',
        unit: ''
      },
      U: {
        value: '--',
        meaning: '计算系数',
        label: 'U',
        unit: ''
      },
      Y: {
        value: '--',
        meaning: '计算系数',
        label: 'Y',
        unit: ''
      },
      Z: {
        value: '--',
        meaning: '计算系数',
        label: 'Z',
        unit: ''
      },
      FI: {
        value: '--',
        meaning: '计算系数',
        label: 'FI',
        unit: ''
      },
      VI: {
        value: '--',
        meaning: '计算系数',
        label: 'VI',
        unit: ''
      },
      f_factor: {
        value: '--',
        meaning: '计算系数',
        label: 'f',
        unit: ''
      },

      // 螺栓紧固力矩
      Fa: {
        value: '--',
        meaning: '预紧状态下需要的最小垫片压紧力',
        label: 'Fa',
        unit: 'N'
      },
      Fp: {
        value: '--',
        meaning: '操作状态下需要的最小垫片压紧力',
        label: 'Fp',
        unit: 'N'
      },
      F: {
        value: '--',
        meaning: '内压引起的总轴向力',
        label: 'F',
        unit: 'N'
      },
      Wa: {
        value: '--',
        meaning: '预紧状态下需要的最小螺栓载荷',
        label: 'Wa',
        unit: 'N'
      },
      Wp: {
        value: '--',
        meaning: '操作状态下需要的最小螺栓载荷',
        label: 'Wp',
        unit: 'N'
      },
      Aa: {
        value: '--',
        meaning: '预紧状态下需要的最小螺栓截面积',
        label: 'Aa',
        unit: 'mm2'
      },
      Ap: {
        value: '--',
        meaning: '操作状态下需要的最小螺栓截面积',
        label: 'Ap',
        unit: 'mm2'
      },
      Am: {
        value: '--',
        meaning: '需要的螺栓截面',
        label: 'Am',
        unit: 'mm2'
      },
      Ab: {
        value: '--',
        meaning: '螺栓总应力截面',
        label: 'Ab',
        unit: 'mm2'
      },
      W: {
        value: '--',
        meaning: '预紧状态下螺栓设计载荷',
        label: 'W',
        unit: 'N'
      },
      W_: {
        value: '--',
        meaning: '操作状态下螺栓设计载荷',
        label: 'W\'',
        unit: 'N'
      },
      T: {
        value_1: '--',
        value_2: '--',
        meaning: '单根螺栓的设计紧固力矩',
        label: 'T',
        unit: 'N·m'
      },

      // 法兰计算参数
      LD: {
        value: '--',
        meaning: '螺栓孔中心至FD作用位置处的径向距离',
        label: 'LD',
        unit: 'mm'
      },
      LG: {
        value: '--',
        meaning: '螺栓孔中心至FG作用位置处的径向距离',
        label: 'LG',
        unit: 'mm'
      },
      LT: {
        value: '--',
        meaning: '螺栓孔中心至FT作用位置处的径向距离',
        label: 'LT',
        unit: 'mm'
      },
      LA: {
        value: '--',
        meaning: '螺栓孔中心至法兰颈部与法兰背面交点的径向距离',
        label: 'LA',
        unit: 'mm'
      },
      FI_type: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'FI',
        unit: ''
      },
      VI_type: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'VI',
        unit: ''
      },
      f_factor_type: {
        value: '--',
        meaning: '法兰形式系数',
        label: 'f',
        unit: ''
      },
      e_: {
        value: '--',
        meaning: '系数',
        label: 'e',
        unit: ''
      },
      Lam: {
        value: '--',
        meaning: '系数',
        label: 'λ',
        unit: 'mm'
      },

      // 设计工况
      Fsi: {
        value: '--',
        meaning: '螺栓预紧力',
        label: 'Fsi',
        unit: 'N'
      },
      FD: {
        value: '--',
        meaning: '作用于法兰内径截面上的内压引起的轴向载荷',
        label: 'FD',
        unit: 'N'
      },
      FT: {
        value: '--',
        meaning: '内压引起的总轴向力F与内径截面上的内压引起的轴向力FD之差',
        label: 'FT',
        unit: 'N'
      },
      FG: {
        value: '--',
        meaning: '法兰垫片压紧力',
        label: 'FG',
        unit: 'N'
      },
      Mp: {
        value: '--',
        meaning: '法兰操作力矩',
        label: 'Mp',
        unit: 'N·mm'
      },
      Ma: {
        value: '--',
        meaning: '预紧状态下法兰力矩',
        label: 'Ma',
        unit: 'N·mm'
      },
      Mo: {
        value: '--',
        meaning: '法兰校核力矩',
        label: 'Mo',
        unit: 'N·mm'
      },
      Di1: {
        value: '--',
        meaning: '',
        label: 'Di1',
        unit: 'mm'
      },
      Sigma_H: {
        value: '--',
        meaning: '法兰颈部轴向应力校核',
        label: 'σH',
        unit: 'MPa',
        limit: '--',
        check_result: '--'
      },
      Sigma_R: {
        value: '--',
        meaning: '法兰环径向应力',
        label: 'σR',
        unit: 'MPa',
        limit: '--',
        check_result: '--'
      },
      Sigma_T: {
        value: '--',
        meaning: '法兰环的环向应力',
        label: 'σT',
        unit: 'MPa',
        limit: '--',
        check_result: '--'
      },
      Sigma_H_R: {
        value: '--',
        meaning: '',
        label: '(σH+σR)/2',
        unit: 'MPa',
        limit: '--',
        check_result: '--'
      },
      Sigma_H_T: {
        value: '--',
        meaning: '',
        label: '(σH+σT)/2',
        unit: 'MPa',
        limit: '--',
        check_result: '--'
      },
      KI_index: {
        value: '--',
        meaning: '刚度指数',
        label: 'KI index',
        unit: '',
        limit: 1,
        check_result: '--'
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
