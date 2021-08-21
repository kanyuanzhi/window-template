<template>
  <el-tooltip class="item" effect="dark" :content="para.meaning" placement="right">

    <!--    <el-form-item :label="label_unit" size="small" :label-width="label_width">-->
    <!--      <el-input type="number" v-model.number="input[para]" :placeholder="placeholder" :disabled="disabled"-->
    <!--                @input="customInput($event)"/>-->
    <!--      &lt;!&ndash;      <el-input type="number" :value="input[para]" :placeholder="placeholder" @input="loadInput($event)" :disabled="disabled"/>&ndash;&gt;-->
    <!--    </el-form-item>-->
    <el-form-item :label="label" size="small" :label-width="label_width">
      <!--      <el-input type="number" v-model.number="input[para].value" :placeholder="input[para+'_meaning']" :disabled="disabled"-->
      <!--                @input="customInput($event)"/>-->
      <el-input type="number" v-model.number="para.value" :placeholder="para.meaning"
                :disabled="disabled" @input="customInput($event)"/>
    </el-form-item>
  </el-tooltip>
</template>

<script>
export default {
  name: "CustomElInput",
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
      // this.input[this.para] = parseFloat(event)
      this.$emit('custom-input', parseFloat(event))
    }
  }
}
</script>

<style scoped>

</style>
