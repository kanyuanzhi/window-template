<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EDFSluiceW',
  data() {
    return {
      general: this.$store.getters.valve_headstock_edf_sluice_w,
    }
  }
}
</script>
