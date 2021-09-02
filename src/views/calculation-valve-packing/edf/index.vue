<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EDF',
  data() {
    return {
      general: this.$store.getters.valve_packing_edf,
    }
  }
}
</script>
