<template>
  <div>  {{input}}
  </div>
<!--  <el-descriptions-item :label="label">{{input[para]}}</el-descriptions-item>-->
</template>

<script>
export default {
  name: "CustomElDescriptionsItem",
  props: ['input', 'para'],
  computed: {
    label() {
      let str = this.input[this.para + '_meaning'].concat(this.input[this.para + '_label'])
      if (this.input[this.para + '_unit'] === ''){
        return str
      }else {
        return str.concat('(', this.input[this.para + '_unit'] === '', ')')
      }
    }
  },
}
</script>

<style scoped>

</style>
