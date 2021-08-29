<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EDFSluiceC',
  data() {
    return {
      general: this.$store.getters.valve_headstock_edf_cutoff_s,
    }
  }
}
</script>
