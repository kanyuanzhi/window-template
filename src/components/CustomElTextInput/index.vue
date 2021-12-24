<template>
  <el-tooltip class="item" effect="dark" :content="para.meaning" placement="right">
    <el-form-item :label="label" size="small" :label-width="label_width">
      <el-input type="text" v-model="para.value" :placeholder="para.meaning"
                :disabled="disabled" @input="customInput($event)"/>
    </el-form-item>
  </el-tooltip>
</template>

<script>
export default {
  name: "CustomElTextInput",
  props: ['label_width', 'para', 'disabled'],
  computed: {
    label() {
      if (this.para.unit === '') {
        return this.para.label
      } else {
        return this.para.label + '(' + this.para.unit + ')'
      }
    }
  },
  emits: ['custom-input'],
  methods: {
    customInput(event) {
      this.$emit('custom-input', event)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
