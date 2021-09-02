<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'AREVA',
  data() {
    return {
      general: this.$store.getters.valve_packing_areva,
    }
  }
}
</script>
