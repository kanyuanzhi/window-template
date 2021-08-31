const state = {
  general: {
    input: {
      // 输入参数
      D: {
        value: '',
        meaning: '阀腔内直径',
        label: 'D',
        unit: 'cm'
      },
      V: {
        value: '',
        meaning: '介质最大流速',
        label: 'V',
        unit: 'm/s'
      },
      g: {
        value: '',
        meaning: '重力加速度',
        label: 'g',
        unit: 'm/s2'
      },
      k: {
        value: 0.785,
        meaning: '开度系数（默认值0.785）',
        label: 'k',
        unit: ''
      },
      gama: {
        value: '',
        meaning: '液体的重度',
        label: 'γ',
        unit: 'g/cm3'
      },
      P: {
        value: '',
        meaning: '阀门最大运行压力',
        label: 'P',
        unit: 'kgf/cm2'
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
        unit: 'cm'
      },
      dc: {
        value: '',
        meaning: '阀杆直径',
        label: 'dc',
        unit: 'cm'
      },
      s: {
        value: '',
        meaning: '盘根宽度',
        label: 's',
        unit: 'cm'
      },
      PH: {
        value: '',
        meaning: '介质总压头',
        label: 'PH',
        unit: 'kgf/cm2'
      },
      miu_: {
        value: '',
        meaning: '支座轴颈摩擦系数',
        label: 'μ\'',
        unit: ''
      },
      Qc: {
        value: '',
        meaning: '旋转部件重量',
        label: 'Qc',
        unit: 'kgf'
      },
      d: {
        value: '',
        meaning: '阀瓣轴颈直径',
        label: 'd',
        unit: 'cm'
      },
      Ma: {
        value: 1.3,
        meaning: '偏心系数（默认值1.3，非偏心=1）',
        label: 'Ma',
        unit: ''
      },
    },

    output: {
      // 过程参数
      MD: {
        value: '--',
        meaning: '动水力矩',
        label: 'MD',
        unit: 'kgf·cm'
      },
      MT: {
        value: '--',
        meaning: '盘根摩擦力矩',
        label: 'MT',
        unit: 'kgf·cm'
      },
      MZ: {
        value: '--',
        meaning: '支座轴颈摩擦力矩',
        label: 'MZ',
        unit: 'kgf·cm'
      },
      MS: {
        value: '--',
        meaning: '总力矩',
        label: 'MS',
        unit: 'kgf·cm'
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
