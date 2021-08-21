<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰应力</span>
          </div>
          <el-divider class="custom-el-divider--horizontal">通用参数</el-divider>
          <el-form label-width="80px">
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Ep" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.B" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.g0" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.g1" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_output.e_" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.lam" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.L" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.Z" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_output.Y" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.B1" :disabled="true"></custom-el-input>
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
    cleanAll() {
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
