const state = {
  index: {
    flange_rcc_m_general: 'case1',
    flange_rcc_m_design: 'case1',
    flange_rcc_m_running: 'case1',
    flange_rcc_m_abnormal: 'case1',
    flange_rcc_m_emergency: 'case1',
    flange_rcc_m_accident: 'case1',
    flange_rcc_m_trial: 'case1',

    flange_gb150_wide_plate: 'case1',
    flange_gb150_wide_hubbed: 'case1',
    flange_gb150_narrow: 'case1',

    valve_headstock_edf_sluice_c: 'case1',
    valve_headstock_edf_sluice_v: 'case1',
    valve_headstock_edf_sluice_w: 'case1',
    valve_headstock_edf_cutoff_s: 'case1',
    valve_headstock_areva_sluice: 'case1',
    valve_headstock_areva_cutoff: 'case1',
    valve_headstock_enchiridion_butterfly: 'case1',
    valve_headstock_enchiridion_ball: 'case1',

    valve_packing_edf: 'case1',
    valve_packing_areva: 'case1',
    valve_packing_enchiridion: 'case1',
    valve_packing_epri: 'case1',

    pipe_nuclear: 'case1',
    pipe_conventional: 'case1',
  }
}

const mutations = {
  update: (state, new_index) => {
    state.index = new_index
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
