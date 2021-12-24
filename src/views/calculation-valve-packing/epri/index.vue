<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_packing_epri'"/>
</template>


<script>

export default {
  name: 'EPRI',
  data() {
    return {
      general: this.$store.getters.valve_packing_epri,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
