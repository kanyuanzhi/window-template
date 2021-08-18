<template>
  <router-view :general_input="general_input"
               :general_output="general_output"
               :condition_input="design_input"
               :condition_output="design_output"/>
</template>


<script>

export default {
  name: 'Design',
  data() {
    return {
      general_input: this.$store.getters.flange_rccm_general_input,
      general_output: this.$store.getters.flange_rccm_general_output,

      design_input: this.$store.getters.flange_rccm_design_input,
      design_output: this.$store.getters.flange_rccm_design_output,
    }
  }
}

</script>
