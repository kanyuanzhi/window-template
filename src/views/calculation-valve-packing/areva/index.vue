<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_packing_areva'"/>
</template>


<script>

export default {
  name: 'AREVA',
  data() {
    return {
      general: this.$store.getters.valve_packing_areva,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
