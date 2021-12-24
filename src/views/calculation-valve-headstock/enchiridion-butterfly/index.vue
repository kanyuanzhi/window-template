<template>
  <router-view :general="general" :case_index="case_index" :parameter="'valve_headstock_enchiridion_butterfly'"/>
</template>


<script>

export default {
  name: 'EnchiridionButterfly',
  data() {
    return {
      general: this.$store.getters.valve_headstock_enchiridion_butterfly,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
