<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_headstock_edf_sluice_v'"/>
</template>


<script>

export default {
  name: 'EDFSluiceV',
  data() {
    return {
      general: this.$store.getters.valve_headstock_edf_sluice_v,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
