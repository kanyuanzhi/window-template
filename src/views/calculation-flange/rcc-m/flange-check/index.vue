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
        console.log(213123)
        this.$refs['design'].calculate()
      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll() {

    }
  }
}
</script>

<style scoped>

</style>
