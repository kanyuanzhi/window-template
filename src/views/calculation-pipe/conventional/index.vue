<template>
  <router-view :general="general" :case_index="case_index" :parameter="'pipe_conventional'"/>
</template>


<script>

export default {
  name: 'Nuclear',
  data() {
    return {
      general: this.$store.getters.pipe_conventional,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
