<template>
  <router-view :input="input" :output="output" :result="result"/>
</template>


<script>

export default {
  name: 'falan-yingli-2',
  data() {
    return {
      input: this.$store.getters.falan_rcc_m_input,
      output: this.$store.getters.falan_rcc_m_output,
      result: [this.$store.getters.falan_rcc_m_output]
    }
  }
}

</script>
