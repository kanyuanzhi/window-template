<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_headstock_areva_sluice'"/>
</template>


<script>

export default {
  name: 'AREVASluice',
  data() {
    return {
      general: this.$store.getters.valve_headstock_areva_sluice,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
