<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>螺栓所需最小截面面积</span>
          </div>
          <el-divider class="custom-el-divider--horizontal">整体螺栓实际根部截面积 当前使用算例：{{
              case_index['flange_rcc_m_general']
            }}
          </el-divider>
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
import {max} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";
import localStorage from "localStorage";

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
        const SA_check = []
        const SA_check_result = []
        if (this.design.input.need_check) {
          this.$refs.design.calculate()
          SA_check.push(this.design.output.SA.value)
          SA_check_result.push(this.design.output.SA.check_result)
        }
        if (this.running.input.need_check) {
          this.$refs.running.calculate()
          SA_check.push(this.running.output.SA.value)
          SA_check_result.push(this.running.output.SA.check_result)
        }
        if (this.abnormal.input.need_check) {
          this.$refs.abnormal.calculate()
          SA_check.push(this.abnormal.output.SA.value)
          SA_check_result.push(this.abnormal.output.SA.check_result)
        }
        if (this.emergency.input.need_check) {
          this.$refs.emergency.calculate()
          SA_check.push(this.emergency.output.SA.value)
          SA_check_result.push(this.emergency.output.SA.check_result)
        }
        if (this.accident.input.need_check) {
          this.$refs.accident.calculate()
          SA_check.push(this.accident.output.SA.value)
          SA_check_result.push(this.accident.output.SA.check_result)
        }
        if (this.trial.input.need_check) {
          this.$refs.trial.calculate()
          SA_check.push(this.trial.output.SA.value)
          SA_check_result.push(this.trial.output.SA.check_result)
        }
        console.log(SA_check)

        if (SA_check.length !== 0) {
          this.general_output.SA_max.value = max(SA_check)
          if (SA_check_result.includes('不通过')) {
            this.general_output.SA_check_result.value = '不通过'
          } else {
            this.general_output.SA_check_result.value = '通过'
          }
        } else {
          this.general_output.SA_max.value = '--'
          this.general_output.SA_check_result.value = '--'
        }
      } catch (e) {
        Message.error(e)
      }
    },
    SBIsCalculatedChange(val) {
      if (val) {
        this.general_input.SB.value = this.general_output.SB.value
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
        this.general_output.SA_max.value = '--'
        this.general_output.SA_check_result.value = '--'
      } catch (e) {
        Message.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
