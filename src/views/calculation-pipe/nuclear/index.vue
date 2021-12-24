<template>
  <router-view :general="general" :case_index="case_index" :parameter="'pipe_nuclear'"/>
</template>


<script>

export default {
  name: 'Nuclear',
  data() {
    return {
      general: this.$store.getters.pipe_nuclear,
      case_index: this.$store.getters.current_case_index,
    }
  }
}
</script>
