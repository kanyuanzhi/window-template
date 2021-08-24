const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
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
}
export default getters
