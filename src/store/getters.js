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

  lsyjl: state => state.parameter_fllsjh.lsyjl,
  lsjh: state => state.parameter_fllsjh.lsjh,

  falan_rcc_m_input: state => state.parameter_falan_rcc_m.input,
  falan_rcc_m_output: state => state.parameter_falan_rcc_m.output,

  flange_rccm_general_input: state => state.parameter_flange_rccm.general.input,
  flange_rccm_general_output: state => state.parameter_flange_rccm.general.output,

  flange_rccm_design_input: state => state.parameter_flange_rccm.design.input,
  flange_rccm_design_output: state => state.parameter_flange_rccm.design.output,
}
export default getters
