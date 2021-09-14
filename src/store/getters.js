const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  username: state => state.user.username,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,

  flange_rcc_m_general: state => state.parameter_flange_rcc_m.general,
  flange_rcc_m_design: state => state.parameter_flange_rcc_m.design,
  flange_rcc_m_running: state => state.parameter_flange_rcc_m.running,
  flange_rcc_m_abnormal: state => state.parameter_flange_rcc_m.abnormal,
  flange_rcc_m_emergency: state => state.parameter_flange_rcc_m.emergency,
  flange_rcc_m_accident: state => state.parameter_flange_rcc_m.accident,
  flange_rcc_m_trial: state => state.parameter_flange_rcc_m.trial,

  flange_gb150_wide_plate_general: state => state.parameter_flange_gb150_wide_plate.general,
  flange_gb150_wide_hubbed_general: state => state.parameter_flange_gb150_wide_hubbed.general,

  flange_gb150_narrow_general: state => state.parameter_flange_gb150_narrow.general,

  valve_headstock_edf_sluice_c: state => state.parameter_valve_headstock_edf_sluice_c.general,
  valve_headstock_edf_sluice_v: state => state.parameter_valve_headstock_edf_sluice_v.general,
  valve_headstock_edf_sluice_w: state => state.parameter_valve_headstock_edf_sluice_w.general,
  valve_headstock_edf_cutoff_s: state => state.parameter_valve_headstock_edf_cutoff_s.general,
  valve_headstock_edf_areva_sluice: state => state.parameter_valve_headstock_areva_sluice.general,
  valve_headstock_edf_areva_cutoff: state => state.parameter_valve_headstock_areva_cutoff.general,
  valve_headstock_enchiridion_butterfly: state => state.parameter_valve_headstock_enchiridion_butterfly.general,
  valve_headstock_enchiridion_ball: state => state.parameter_valve_headstock_enchiridion_ball.general,

  valve_packing_edf: state => state.parameter_valve_packing_edf.general,
  valve_packing_areva: state => state.parameter_valve_packing_areva.general,
  valve_packing_enchiridion: state => state.parameter_valve_packing_enchiridion.general,
  valve_packing_epri: state => state.parameter_valve_packing_epri.general,

  pipe_nuclear: state => state.parameter_pipe_nuclear.general,
  pipe_conventional: state => state.parameter_pipe_conventional.general,
}
export default getters
