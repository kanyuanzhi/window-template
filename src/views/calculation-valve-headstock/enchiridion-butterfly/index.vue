<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EnchiridionButterfly',
  data() {
    return {
      general: this.$store.getters.valve_headstock_enchiridion_butterfly,
    }
  }
}
</script>
