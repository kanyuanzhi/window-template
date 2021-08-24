const state = {
  general: {
    name: 'general',
    name_zh: '通用',
    input: {
      // 法兰连接部件
      flange_connector_materials_name: {
        value: 'Q235-A#',
        meaning: '法兰连接部件材料名称',
        label: '',
        unit: ''
      },
      Sigma_nt: {
        value: '',
        meaning: '法兰连接部件许用应力',
        label: 'σnt',
        unit: 'Mpa'
      },

      // 法兰参数
      flange_materials_name: {
        value: '16MnR',
        meaning: '法兰材料名称',
        label: '',
        unit: ''
      },
      Sigma_f: {
        value: '',
        meaning: '法兰材料许用应力',
        label: 'σf',
        unit: 'Mpa'
      },
      Sigma_ft: {
        value: '',
        meaning: '法兰材料许用应力',
        label: 'σft',
        unit: 'Mpa'
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
      Db_flange: {
        value: '',
        meaning: '法兰螺孔直径',
        label: 'Db',
        unit: 'mm'
      },
      delta_0: {
        value: '',
        meaning: 'δ0',
        label: 'δ0',
        unit: 'mm',
        format_label: 'δ0'
      },
      delta_1: {
        value: '',
        meaning: 'δ1',
        label: 'δ1',
        unit: 'mm',
        format_label: 'δ1'
      },

      // 螺栓参数
      bolt_materials_name: {
        value: 'Q235-A#',
        meaning: '螺栓材料名称',
        label: '',
        unit: ''
      },
      Sigma_b: {
        value: '',
        meaning: '螺栓材料许用应力',
        label: 'σb',
        unit: 'Mpa'
      },
      Sigma_bt: {
        value: '',
        meaning: '螺栓材料许用应力',
        label: 'σbt',
        unit: 'Mpa'
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
      n: {
        value: '',
        meaning: '螺栓数量',
        label: 'n',
        unit: ''
      },

      // 垫片参数
      gasket_type: {
        value: '石棉橡胶垫',
        meaning: '垫片类型',
        label: '',
        unit: ''
      },
      D: {
        value: '',
        meaning: '垫片外径或法兰外径取小值',
        label: 'D',
        unit: 'mm'
      },
      Di_: {
        value: '',
        meaning: '垫片内径',
        label: 'Di\'',
        unit: 'mm'
      },
      Db_bolt: {
        value: '',
        meaning: '螺栓孔节圆直径',
        label: 'Db',
        unit: 'mm'
      },
      db: {
        value: '',
        meaning: '螺栓孔直径',
        label: 'db',
        unit: 'mm'
      },
      b__2: {
        value: 5,
        meaning: '操作状态垫片有效密封宽度（定值取5mm）',
        label: '2b\'\'',
        unit: 'mm'
      },
      m: {
        value: '',
        meaning: '垫片系数',
        label: 'm',
        unit: ''
      },
      y: {
        value: '',
        meaning: '垫片比压力',
        label: 'y',
        unit: 'MPa'
      },

      // 设计条件
      P_stress: {
        value: '',
        meaning: '设计压力',
        label: 'P',
        unit: 'MPa'
      },
      T: {
        value: '',
        meaning: '设计温度',
        label: 'T',
        unit: '℃'
      },
      F: {
        value: '',
        meaning: '轴向外载荷',
        label: 'F',
        unit: 'N'
      },
      M: {
        value: '',
        meaning: '合成外力矩',
        label: 'M',
        unit: 'N·mm'
      },

      // 螺栓受力计算
      Eb: {
        value: '',
        meaning: '螺栓冷态弹性模量',
        label: 'Eb',
        unit: 'Mpa'
      },
      Ebt: {
        value: '',
        meaning: '螺栓热态弹性模量',
        label: 'Ebt',
        unit: 'Mpa'
      },
      CS_: {
        value: '',
        meaning: '单根螺栓最终紧固力矩',
        label: 'CS\'',
        unit: 'N·m'
      },
    },
    output: {
      // 垫片参数
      b_: {
        value: '--',
        meaning: '预紧状态下垫片有效密封宽度',
        label: 'b\'',
        unit: 'mm'
      },
      b0_: {
        value: '--',
        meaning: '预紧状态垫片基本密封宽度',
        label: 'b0\'',
        unit: 'mm',
      },
      Lp_: {
        value: '--',
        meaning: '',
        label: 'Lp\'',
        unit: 'mm',
      },
      LD: {
        value: '--',
        meaning: '',
        label: 'LD',
        unit: 'mm',
      },
      DG_: {
        value: '--',
        meaning: '垫片压紧力作用中心圆直径',
        label: 'DG',
        unit: 'mm',
      },
      Lt_: {
        value: '--',
        meaning: '',
        label: 'Lt\'',
        unit: 'mm',
      },
      LR: {
        value: '--',
        meaning: '',
        label: 'LR',
        unit: 'mm',
      },

      // 设计条件
      Pc: {
        value: '--',
        meaning: '计算压力',
        label: 'Pc',
        unit: 'MPa',
      },
      Peq: {
        value: '--',
        meaning: '外力等效压力',
        label: 'Peq',
        unit: 'MPa',
      },

      // 螺栓受力计算
      Fa_: {
        value: '--',
        meaning: '预紧状态下需要的最小垫片压紧力',
        label: 'Fa\'',
        unit: 'N',
      },
      Fp_: {
        value: '--',
        meaning: '操作状态下需要的最小垫片压紧力',
        label: 'Fp\'',
        unit: 'N',
      },
      F_: {
        value: '--',
        meaning: '内压引起的总轴向力',
        label: 'F\'',
        unit: 'N',
      },
      FD: {
        value: '--',
        meaning: '作用于法兰内径截面上的内压引起的轴向力',
        label: 'FD',
        unit: 'N',
      },
      FT_: {
        value: '--',
        meaning: '内压引起的总轴向力F\'与作用于法兰内径截面上的内压引起的轴向力FD之差',
        label: 'FT\'',
        unit: 'N',
      },
      FR: {
        value: '--',
        meaning: '作用于螺栓中心圆外侧，为平衡FD、Fp\'、FT\'产生的力矩所需的轴向力',
        label: 'FR',
        unit: 'N',
      },
      Wa: {
        value: '--',
        meaning: '预紧状态下需要的最小螺栓载荷',
        label: 'Wa',
        unit: 'N',
      },
      Wp: {
        value: '--',
        meaning: '操作状态下需要的最小螺栓载荷',
        label: 'Wp',
        unit: 'N',
      },
      Am: {
        value: '--',
        meaning: '所需螺栓总截面积',
        label: 'Am',
        unit: 'mm2',
      },
      Ab: {
        value: '--',
        meaning: '实际使用的螺栓总截面积',
        label: 'Ab',
        unit: 'mm2',
      },
      CS: {
        value_1: '--',
        value_2: '--',
        meaning: '单根螺栓紧固力矩',
        label: 'CS',
        unit: 'N·m'
      },
      Wp_: {
        value: '--',
        meaning: '最终紧固力矩对应总预紧力',
        label: 'Wp\'',
        unit: 'N',
      },
      FR_: {
        value: '--',
        meaning: '预紧状态下需要的最小螺栓载荷',
        label: 'FR\'',
        unit: 'N',
      },

      // 法兰校核
      MO: {
        value: '--',
        meaning: '法兰设计力矩',
        label: 'MO',
        unit: 'N·mm',
      },
      delta_f: {
        value: '--',
        meaning: '法兰厚度校核',
        label: 'δf',
        unit: 'mm',
      },
    }
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
