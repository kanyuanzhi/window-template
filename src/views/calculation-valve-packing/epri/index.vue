<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EPRI',
  data() {
    return {
      general: this.$store.getters.valve_packing_epri,
    }
  }
}
</script>
