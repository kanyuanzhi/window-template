<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_headstock_edf_cutoff_s'"/>
</template>


<script>

export default {
  name: 'EDFCutoffS',
  data() {
    return {
      general: this.$store.getters.valve_headstock_edf_cutoff_s,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
