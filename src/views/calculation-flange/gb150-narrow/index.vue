<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'GB150Narrow',
  data() {
    return {
      general: this.$store.getters.flange_gb150_narrow_general,
    }
  }
}
</script>
