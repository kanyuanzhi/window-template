<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'GB150WideHubbed',
  data() {
    return {
      general: this.$store.getters.flange_gb150_wide_hubbed_general,
    }
  }
}
</script>
