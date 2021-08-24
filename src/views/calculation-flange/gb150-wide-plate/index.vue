<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'GB150WidePlate',
  data() {
    return {
      general: this.$store.getters.flange_gb150_wide_plate_general,
    }
  }
}
</script>
