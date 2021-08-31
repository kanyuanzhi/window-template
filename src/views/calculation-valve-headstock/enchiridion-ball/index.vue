<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'EnchiridionBall',
  data() {
    return {
      general: this.$store.getters.valve_headstock_enchiridion_ball,
    }
  }
}
</script>
