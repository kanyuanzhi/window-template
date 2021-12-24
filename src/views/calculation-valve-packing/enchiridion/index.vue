<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_packing_enchiridion'"/>
</template>


<script>

export default {
  name: 'Enchiridion',
  data() {
    return {
      general: this.$store.getters.valve_packing_enchiridion,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
