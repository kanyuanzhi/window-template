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
  flange_rcc_m_general_input: state => state.parameter_flange_rcc_m.general.input,
  flange_rcc_m_general_output: state => state.parameter_flange_rcc_m.general.output,

  flange_rcc_m_design: state => state.parameter_flange_rcc_m.design,
  flange_rcc_m_design_input: state => state.parameter_flange_rcc_m.design.input,
  flange_rcc_m_design_output: state => state.parameter_flange_rcc_m.design.output,

  flange_rcc_m_running: state => state.parameter_flange_rcc_m.running,
  flange_rcc_m_running_input: state => state.parameter_flange_rcc_m.running.input,
  flange_rcc_m_running_output: state => state.parameter_flange_rcc_m.running.output,

  flange_rcc_m_abnormal: state => state.parameter_flange_rcc_m.abnormal,
  flange_rcc_m_abnormal_input: state => state.parameter_flange_rcc_m.abnormal.input,
  flange_rcc_m_abnormal_output: state => state.parameter_flange_rcc_m.abnormal.output,

  flange_rcc_m_emergency: state => state.parameter_flange_rcc_m.emergency,
  flange_rcc_m_emergency_input: state => state.parameter_flange_rcc_m.emergency.input,
  flange_rcc_m_emergency_output: state => state.parameter_flange_rcc_m.emergency.output,

  flange_rcc_m_accident: state => state.parameter_flange_rcc_m.accident,
  flange_rcc_m_accident_input: state => state.parameter_flange_rcc_m.accident.input,
  flange_rcc_m_accident_output: state => state.parameter_flange_rcc_m.accident.output,

  flange_rcc_m_trial: state => state.parameter_flange_rcc_m.trial,
  flange_rcc_m_trial_input: state => state.parameter_flange_rcc_m.trial.input,
  flange_rcc_m_trial_output: state => state.parameter_flange_rcc_m.trial.output,
}
export default getters
