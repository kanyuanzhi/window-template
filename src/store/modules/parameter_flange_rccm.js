const state = {
  general: {
    input: {
      // 垫片参数
      m: '',
      y: '',
      Do: '',
      Di: '',
      b0: '',
      b: '',

      // 实际螺栓面积
      d: '',
      n: '',
      P: '',
      SB: '', // 整体螺栓面积，可以手动修改，output中有同名参数
      SB_is_calculated: true,

      // 法兰尺寸
      A: '',
      B: '',

      // 法兰力矩
      g0: '',
      g1: '',
      h: '',
      Ep: '',
      C: '',

      // 法兰应力
      lam: '',
      F: '',
      V: '',
      nu: 0.3,
    },
    output: {
      // 垫片参数
      Dj: '--',
      Fj: '--',

      // 实际螺栓面积
      S: '--', // 单个螺栓面积
      SB: '--', // 整体螺栓面积

      // 法兰尺寸

      // 法兰力矩
      C0: '--',
      R: '',
      hd: '--',
      hg: '--',
      ht: '--',

      // 法兰应力
      h0: '--',
      h_h0: '--',
      g1_h0: '--',
      K: '--',
      T: '--',
      Y: '--',
      U: '--',
      Z: '--',
      e_: '--',
      L: '--',
      B1: '--',
    }
  },
  design: {
    input: {
      // 法兰压紧力
      P: '',
      Mf: '',
      Fa: '',

      // 螺栓预紧力
      Faz: '',
      Mfn: '',
      ff: '',
      Ps: '',
      Ec: '',
      Eh: '',

      // 螺栓所需最小截面面积
      S: '',
      Sy: '',
      Pc: '', // 设计压力
      Pe: '', // 试验压力
    },
    output: {
      // 法兰压紧力
      Peq: '--',
      FFP: '--',
      FFP_Peq: '--',
      FMP: '--',
      FSP: '--',

      // 螺栓预紧力
      FS0: '--',
      FT: '--',
      FS_: '--',
      FS0_: '--',
      FSi: '--',

      // 螺栓所需最小截面面积
      FSPc: '--', // 设计压力下
      FSPe: '--', // 试验压力下
      SA: '--',
      bolt_check_result: '--', // '通过' or '不通过'
    }
  },
  running: {
    input: {},
    output: {}
  },
  emergency: {
    input: {},
    output: {}
  },
  accident: {
    input: {},
    output: {}
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
