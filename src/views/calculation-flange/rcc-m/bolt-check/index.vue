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
          <check-template ref="running" :condition="running" :general="general"></check-template>
          <check-template ref="abnormal" :condition="abnormal" :general="general"></check-template>
          <check-template ref="emergency" :condition="emergency" :general="general"></check-template>
          <check-template ref="accident" :condition="accident" :general="general"></check-template>
          <check-template ref="trial" :condition="trial" :general="general"></check-template>
        </el-card>

        <el-form>
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
import {formatLabel} from '@/utils/common'

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'BoltCheck',
  components: {
    CustomElInput,
    CheckTemplate
  },
  props: ['general', 'design', 'running', 'abnormal', 'emergency', 'accident', 'trial'],
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,
    }
  },
  computed: {
    Label() {
      return (para) => {
        return formatLabel(para)
      }
    }
  },
  methods: {
    calculate() {
      try {
        this.$refs.design.calculate()
        this.$refs.running.calculate()
        this.$refs.abnormal.calculate()
        this.$refs.emergency.calculate()
        this.$refs.accident.calculate()
        this.$refs.trial.calculate()
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
      this.$refs.design.cleanAll()
      this.$refs.running.cleanAll()
      this.$refs.abnormal.cleanAll()
      this.$refs.emergency.cleanAll()
      this.$refs.accident.cleanAll()
      this.$refs.trial.cleanAll()
    }
  }
}
</script>

<style scoped>

</style>
