<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'Enchiridion',
  data() {
    return {
      general: this.$store.getters.valve_packing_enchiridion,
    }
  }
}
</script>
