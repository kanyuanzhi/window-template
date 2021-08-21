<template>
  <router-view :general="general"
               :design="design"
               :running="running"
               :abnormal="abnormal"
               :emergency="emergency"
               :accident="accident"
               :trial="trial"/>
</template>


<script>

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
    }
  }
}
</script>
