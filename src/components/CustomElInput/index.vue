<template>
  <el-tooltip class="item" effect="dark" :content="placeholder" placement="right">

    <el-form-item :label="label" size="small" :label-width="label_width">
      <el-input type="number" v-model.number="input[para]" :placeholder="placeholder" :disabled="disabled" @input="customInput($event)"/>
<!--      <el-input type="number" :value="input[para]" :placeholder="placeholder" @input="loadInput($event)" :disabled="disabled"/>-->
    </el-form-item>
  </el-tooltip>
</template>

<script>
export default {
  name: "CustomElInput",
  props: ['label','label_width', 'placeholder', 'input', 'para', 'disabled'],
  emits: ['custom-input'],
  methods: {
    customInput(event){
      // this.input[this.para] = parseFloat(event)
      this.$emit('custom-input', parseFloat(event))
    }
  }
}
</script>

<style scoped>

</style>
