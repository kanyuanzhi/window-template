<template>
  <router-view :general="general" :case_index="case_index" :parameter="'flange_gb150_narrow'"/>
</template>


<script>

export default {
  name: 'GB150Narrow',
  data() {
    return {
      general: this.$store.getters.flange_gb150_narrow,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
