<template>
  <router-view :input="input" :output="output" :result="result"/>
</template>


<script>

export default {
  name: 'RCC-M',
  data() {
    return {
      input: this.$store.getters.falan_rcc_m_input,
      output: this.$store.getters.falan_rcc_m_output,
      result: [this.$store.getters.falan_rcc_m_output]
    }
  }
}

</script>
