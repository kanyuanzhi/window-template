<template>
  <router-view :general_input="general_input" :general_output="general_output"
               :general="general"
               :design="design"/>
</template>


<script>

export default {
  name: 'RCC-M',
  data() {
    return {
      general: this.$store.getters.flange_rcc_m_general,
      general_input: this.$store.getters.flange_rcc_m_general.input,
      general_output: this.$store.getters.flange_rcc_m_general.output,

      design: this.$store.getters.flange_rcc_m_design,
      design_input: this.$store.getters.flange_rcc_m_design.input,
      design_output: this.$store.getters.flange_rcc_m_design.output,
    }
  }
}
</script>
