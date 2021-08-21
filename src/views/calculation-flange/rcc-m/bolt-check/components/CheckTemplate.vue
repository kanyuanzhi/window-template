<template>
  <el-row :gutter="40">
    <el-col :span="16">
      <el-form label-width="80px">
        <el-divider class="custom-el-divider--horizontal">{{ condition_name_zh }}工况</el-divider>
        <div class="left-panel">
          <el-row :gutter="10">
            <el-col :span="8" :offset="6">
              <custom-el-input :para="condition_output.SA" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-button icon="el-icon-video-play" type="primary" size="small" @click="calculate">校核</el-button>
              <el-button icon="el-icon-delete" type="none" size="small" @click="cleanAll">清空</el-button>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </el-col>
    <el-col :span="8">
      <el-divider class="custom-el-divider--horizontal">校核结果</el-divider>
      <el-row :gutter="10">
        <el-col :span="24">
          <el-result :icon="Icon" :title="Title" subTitle="">
          </el-result>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {formatLabel} from '@/utils/common'

import {Message} from "element-ui"
import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: "CheckTemplate",
  props: ['general', 'condition'],
  components: {
    CustomElInput
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      condition_name: this.condition.name,
      condition_name_zh: this.condition.name_zh,
      condition_input: this.condition.input,
      condition_output: this.condition.output
    }
  },
  computed: {
    Label() {
      return (para) => {
        return formatLabel(para)
      }
    },
    Title() {
      switch (this.condition_output.bolt_check_result) {
        case '--':
          return '待校核'
        case '通过':
          return '通过'
        case '不通过':
          return '不通过'
      }
    },
    Icon() {
      switch (this.condition_output.bolt_check_result) {
        case '--':
          return 'info'
        case '通过':
          return 'success'
        case '不通过':
          return 'error'
      }
    }
  },
  methods: {
    calculate() {
      try {
        //----------------通用输入----------------//
        const SB = this.general_input.SB.value

        // 设计工况 螺栓所需最小截面面积
        //----------------输入----------------//
        const SA = this.condition_output.SA.value
        if (SA === '--') {
          throw new Error([this.condition_output.SA.meaning, this.condition_output.SA.label, '未计算！'].join(' '))
        }
        //----------------输出----------------//
        if (SB >= SA) {
          this.condition_output.bolt_check_result = '通过'
        } else {
          this.condition_output.bolt_check_result = '不通过'
        }
      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll(){
      this.general_input.SB.value = this.general_output.SB.value
      this.general_input.SB.is_calculated = true
      this.condition_output.bolt_check_result = '--'
    }
  }
}
</script>

<style scoped>
/deep/ .left-panel {
  margin-top: 50px;
  /*display: inline-table;*/
}
</style>
