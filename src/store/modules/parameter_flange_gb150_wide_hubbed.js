import {getDefaultGB150General} from '@/utils/perameter_flange_gb150_wide'

const state = {
  general: getDefaultGB150General()
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
