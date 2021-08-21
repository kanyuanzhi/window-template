<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>螺栓所需最小截面面积</span>
          </div>
          <el-divider class="custom-el-divider--horizontal">整体螺栓实际根部截面积</el-divider>
          <el-form label-width="80px">
            <el-row :gutter="10">
              <el-col :span="6" :offset="6">
                <custom-el-input :para="general_input.SB" :disabled="general_input.SB.is_calculated"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <el-form-item label="选取方式" size="small" :inline="true">
                  <el-radio-group v-model="general_input.SB.is_calculated" @change="SBIsCalculatedChange">
                    <el-radio :label="true">公式计算</el-radio>
                    <el-radio :label="false">手动填写</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <check-template ref="design" :condition="design" :general="general"></check-template>
          <check-template ref="running" :condition="design" :general="general"></check-template>
        </el-card>

        <el-form label-width="70px">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item align="center">
                <el-button icon="el-icon-video-play" type="primary" @click="calculate" size="medium">校核所有</el-button>
                <el-button icon="el-icon-delete" @click="cleanAll" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>

  </div>

</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import CheckTemplate from './components/CheckTemplate'
import {e, log, max, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'BoltCheck',
  components: {
    CustomElInput,
    CheckTemplate
  },
  props: ['general', 'design'],
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      design_input: this.design.input,
      design_output: this.design.output
    }
  },
  computed: {
    Label() {
      return (para) => {
        if (para.format_label !== undefined) {
          return para.format_label
        }
        let str = para.meaning.concat(para.label)
        if (para.unit === '') {
          return str
        } else {
          return str.concat('(', para.unit, ')')
        }
      }
    }
  },
  methods: {
    calculate() {
      try {

      } catch (e) {
        Message.error(e)
      }
    },
    SBIsCalculatedChange(val) {
      if (val) {
        this.general_input.SB.value = this.general_output.SB.value
      }
    },
    cleanAll(){

    }
  }
}
</script>

<style scoped>

</style>
