<template>
  <router-view :general="general" :case_index="case_index" :parameter="'flange_gb150_wide_hubbed'"/>
</template>


<script>

export default {
  name: 'GB150WideHubbed',
  data() {
    return {
      general: this.$store.getters.flange_gb150_wide_hubbed,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
