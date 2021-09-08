<template>
  <router-view :general="general"/>
</template>


<script>

export default {
  name: 'Nuclear',
  data() {
    return {
      general: this.$store.getters.pipe_conventional,
    }
  }
}
</script>
