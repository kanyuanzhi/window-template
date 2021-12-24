<template>

    <!--    <el-form-item :label="label_unit" size="small" :label-width="label_width">-->
    <!--      <el-input type="number" v-model.number="input[para]" :placeholder="placeholder" :disabled="disabled"-->
    <!--                @input="customInput($event)"/>-->
    <!--      &lt;!&ndash;      <el-input type="number" :value="input[para]" :placeholder="placeholder" @input="loadInput($event)" :disabled="disabled"/>&ndash;&gt;-->
    <!--    </el-form-item>-->
    <el-form-item :label="label" size="small" :label-width="label_width">
      <!--      <el-input type="number" v-model.number="input[para].value" :placeholder="input[para+'_meaning']" :disabled="disabled"-->
      <!--                @input="customInput($event)"/>-->
      <el-tooltip class="item" effect="dark" :content="para.meaning" placement="right" :disabled="true">
        <el-input-number type="number" v-model.number="para.value" :placeholder="para.meaning"
                       :disabled="disabled" @input="customInput($event)" @change="customChange($event)" :controls="false"/>
      </el-tooltip>

      <p style="font-size: 12px;margin: 0 0 0 0;color: #97a8be;text-align: center">{{para.meaning}}</p>
    </el-form-item>
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
  emits: ['custom-input', 'custom-change'],
  methods: {
    customInput(event) {
      // this.input[this.para] = parseFloat(event)
      this.$emit('custom-input', parseFloat(event))
    },
    customChange(event){
      this.$emit('custom-change', parseFloat(event))
    }
  }
}
</script>

<style scoped lang="scss">
.el-input-number {
  //display: inline-block;
  //height: 47px;
  width: 100%;
}
.el-input__inner {
  //background: transparent;
  //border: 0px;
  //-webkit-appearance: none;
  //border-radius: 0px;
  //padding: 12px 5px 12px 15px;
  //height: 47px;
  text-align: left;
}
</style>
