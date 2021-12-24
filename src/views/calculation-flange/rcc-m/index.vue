<template>
  <router-view :general="general"
               :design="design"
               :running="running"
               :abnormal="abnormal"
               :emergency="emergency"
               :accident="accident"
               :trial="trial"
               :case_index="case_index"/>
</template>


<script>
import localStorage from 'localStorage'

export default {
  name: 'RCC-M',
  data() {
    return {
      general: this.$store.getters.flange_rcc_m_general,
      design: this.$store.getters.flange_rcc_m_design,
      running: this.$store.getters.flange_rcc_m_running,
      abnormal: this.$store.getters.flange_rcc_m_abnormal,
      emergency: this.$store.getters.flange_rcc_m_emergency,
      accident: this.$store.getters.flange_rcc_m_accident,
      trial: this.$store.getters.flange_rcc_m_trial,
      case_index: this.$store.getters.current_case_index,
    }
  },
  created() {
    // if (localStorage.getItem('parameter_flange_rcc_m_general_input') !== null) {
    //   this.general.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_general_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_design_input') !== null) {
    //   this.design.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_design_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_running_input') !== null) {
    //   this.running.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_running_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_abnormal_input') !== null) {
    //   this.abnormal.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_abnormal_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_emergency_input') !== null) {
    //   this.emergency.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_emergency_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_accident_input') !== null) {
    //   this.accident.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_accident_input'))
    // }
    // if (localStorage.getItem('parameter_flange_rcc_m_trial_input') !== null) {
    //   this.trial.input = JSON.parse(localStorage.getItem('parameter_flange_rcc_m_trial_input'))
    // }
  }
}
</script>
