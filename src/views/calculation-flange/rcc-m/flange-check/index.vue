<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰应力</span>
          </div>
          <el-divider class="custom-el-divider--horizontal">通用参数 当前使用算例：{{
              case_index['flange_rcc_m_general']
            }}
          </el-divider>
          <el-row :gutter="40">
            <el-col :span="20">
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
            </el-col>
            <el-col :span="4">
              <div class="demo-image__placeholder">
                <div class="el-image-block">
                  <el-image :src="img_stress" :preview-src-list="[img_stress]">
                  </el-image>
                  <span class="demonstration">法兰应力示意图</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <check-template ref="design" :condition="design" :general="general" :case_index="case_index"
                              v-if="design.input.need_check"></check-template>
              <check-template ref="running" :condition="running" :general="general" :case_index="case_index"
                              v-if="running.input.need_check"></check-template>
              <check-template ref="abnormal" :condition="abnormal" :general="general" :case_index="case_index"
                              v-if="abnormal.input.need_check"></check-template>
              <check-template ref="emergency" :condition="emergency" :general="general" :case_index="case_index"
                              v-if="emergency.input.need_check"></check-template>
              <check-template ref="accident" :condition="accident" :general="general" :case_index="case_index"
                              v-if="accident.input.need_check"></check-template>
              <check-template ref="trial" :condition="trial" :general="general" :case_index="case_index"
                              v-if="trial.input.need_check"></check-template>
            </el-col>
          </el-row>
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
  props: ['general', 'design', 'running', 'abnormal', 'emergency', 'accident', 'trial', 'case_index'],
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      img_stress: require('@/assets/model_images/flange_rcc_m_stress.png')
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
        if (this.design.input.need_check) this.$refs.design.calculate()
        if (this.running.input.need_check) this.$refs.running.calculate()
        if (this.abnormal.input.need_check) this.$refs.abnormal.calculate()
        if (this.emergency.input.need_check) this.$refs.emergency.calculate()
        if (this.accident.input.need_check) this.$refs.accident.calculate()
        if (this.trial.input.need_check) this.$refs.trial.calculate()
      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll() {
      try {
        if (this.design.input.need_check) this.$refs.design.cleanAll()
        if (this.running.input.need_check) this.$refs.running.cleanAll()
        if (this.abnormal.input.need_check) this.$refs.abnormal.cleanAll()
        if (this.emergency.input.need_check) this.$refs.emergency.cleanAll()
        if (this.accident.input.need_check) this.$refs.accident.cleanAll()
        if (this.trial.input.need_check) this.$refs.trial.cleanAll()
      } catch (e) {
        Message.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
