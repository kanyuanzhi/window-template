<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_packing_edf'"/>
</template>


<script>

export default {
  name: 'EDF',
  data() {
    return {
      general: this.$store.getters.valve_packing_edf,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
