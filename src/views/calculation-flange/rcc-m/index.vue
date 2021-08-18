<template>
  <router-view :general_input="general_input" :general_output="general_output"/>
</template>


<script>

export default {
  name: 'RCC-M',
  data() {
    return {
      general_input: this.$store.getters.flange_rccm_general_input,
      general_output: this.$store.getters.flange_rccm_general_output,
    }
  }
}

</script>
