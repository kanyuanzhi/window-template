<template>
  <el-row :gutter="40">
    <el-col :span="18">
      <el-form label-width="80px">
        <el-divider class="custom-el-divider--horizontal">{{ condition_name_zh }}工况
          当前使用算例：{{ case_index['flange_rcc_m_' + condition_name] }}
        </el-divider>
        <div class="left-panel" style="margin-bottom: 20px">
          <el-table
              :data="table_data"
              size="medium"
              style="width: 100%">
            <el-table-column
                prop="name"
                label=""
                min-width="10%">
            </el-table-column>
            <el-table-column
                prop="SR"
                :label="Label(condition_output.SR)"
                min-width="18%">
            </el-table-column>
            <el-table-column
                prop="ST"
                :label="Label(condition_output.ST)"
                min-width="18%">
            </el-table-column>
            <el-table-column
                prop="SH"
                :label="Label(condition_output.SH)"
                min-width="18%">
            </el-table-column>
            <el-table-column
                prop="SH_SR"
                :label="Label(condition_output.SH_SR)"
                min-width="18%">
            </el-table-column>
            <el-table-column
                prop="SH_ST"
                :label="Label(condition_output.SH_ST)"
                min-width="18%">
            </el-table-column>
          </el-table>
        </div>
      </el-form>
    </el-col>
    <el-col :span="6">
      <el-divider class="custom-el-divider--horizontal">校核结果</el-divider>
      <el-row :gutter="10">
        <el-col :span="24">
          <el-result :icon="Icon" :title="Title" subTitle="">
            <template slot="extra">
              <el-button icon="el-icon-video-play" type="primary" size="small" @click="calculate">校核</el-button>
              <el-button icon="el-icon-delete" type="none" size="small" @click="cleanAll">清空</el-button>
            </template>
          </el-result>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {pi, pow, round, max} from "mathjs";
import {formatLabel} from '@/utils/common'

import {Message} from "element-ui";
import defaultSettings from '@/settings'
import localStorage from "localStorage";

const precision = defaultSettings.precision

export default {
  name: "CheckTemplate",
  props: ['general', 'condition', 'case_index'],
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
      condition_output: this.condition.output,

      table_data: this.getTableData(),
      flange_check_result: this.condition.output.flange_check_result,
    }
  },
  computed: {
    Label() {
      return (para) => {
        return formatLabel(para)
      }
    },
    Title() {
      switch (this.condition_output.flange_check_result) {
        case '--':
          return '待校核'
        case '通过':
          return '通过'
        case '不通过':
          return '不通过'
      }
    },
    Icon() {
      switch (this.condition_output.flange_check_result) {
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
    getTableData() {
      return [
        {
          name: '值',
          SR: this.condition.output.SR.value,
          ST: this.condition.output.ST.value,
          SH: this.condition.output.SH.value,
          SH_SR: this.condition.output.SH_SR.value,
          SH_ST: this.condition.output.SH_ST.value,
        }, {
          name: '限值',
          SR: this.condition.output.SR.limit,
          ST: this.condition.output.ST.limit,
          SH: this.condition.output.SH.limit,
          SH_SR: this.condition.output.SH_SR.limit,
          SH_ST: this.condition.output.SH_ST.limit,
        }, {
          name: '校验结果',
          SR: this.condition.output.SR.check_result,
          ST: this.condition.output.ST.check_result,
          SH: this.condition.output.SH.check_result,
          SH_SR: this.condition.output.SH_SR.check_result,
          SH_ST: this.condition.output.SH_ST.check_result,
        }
      ]
    },
    calculate() {
      try {
        const Ep = this.general_input.Ep.value
        const B = this.general_input.B.value
        const g0 = this.general_input.g0.value
        const g1 = this.general_input.g1.value
        const lam = this.general_input.lam.value

        const e_ = this.general_output.e_.value
        if (e_ === '--') {
          throw new Error([this.general_output.e_.meaning, this.general_output.e_.label, '未计算！'].join(' '))
        }
        const L = this.general_output.L.value
        if (L === '--') {
          throw new Error([this.general_output.L.meaning, this.general_output.L.label, '未计算！'].join(' '))
        }
        const Z = this.general_output.Z.value
        if (Z === '--') {
          throw new Error([this.general_output.Z.meaning, this.general_output.Z.label, '未计算！'].join(' '))
        }
        const Y = this.general_output.Y.value
        if (Y === '--') {
          throw new Error([this.general_output.Y.meaning, this.general_output.Y.label, '未计算！'].join(' '))
        }
        const B1 = this.general_output.B1.value
        if (B1 === '--') {
          throw new Error([this.general_output.B1.meaning, this.general_output.B1.label, '未计算！'].join(' '))
        }

        const P = this.condition_input.P.value
        const S_flange = this.condition_input.S_flange.value

        const M = this.condition_output.M.value
        if (M === '--') {
          throw new Error([this.condition_output.M.meaning, this.condition_output.M.label, '未计算！'].join(' '))
        }

        const SR = (4 / 3 * Ep * e_ + 1) * M / (L * pow(Ep, 2) * B)
        const ST = Y * M / (pow(Ep, 2) * B) - Z * SR
        const SH_ = M / (L * pow(g1, 2) * B1) + P * B / (4 * g0)
        const SH__ = lam * M / (L * pow(g1, 2) * B1) + P * B / (4 * g0)
        const SH = max(SH_, SH__)

        let SH_SR, SH_ST, SR_limit, ST_limit, SH_limit, SH_SR_limit, SH_ST_limit
        switch (this.condition_name) {
          case 'design':
            SH_SR = (SH + SR) / 2
            SH_ST = (SH + ST) / 2

            SH_limit = 1.5 * S_flange
            SR_limit = S_flange
            ST_limit = S_flange
            SH_SR_limit = S_flange
            SH_ST_limit = S_flange
            break
          case 'running':
            SH_limit = 1.5 * S_flange
            SR_limit = 1.5 * S_flange
            ST_limit = 1.5 * S_flange
            break
          case 'abnormal':
            SH_limit = 1.5 * S_flange
            SR_limit = 1.5 * S_flange
            ST_limit = 1.5 * S_flange
            break
          case 'emergency':
            SH_limit = 1.8 * S_flange
            SR_limit = 1.8 * S_flange
            ST_limit = 1.8 * S_flange
            break
          case 'accident':
            SH_limit = 2.4 * S_flange
            SR_limit = 2.4 * S_flange
            ST_limit = 2.4 * S_flange
            break
          case 'trial':
            SH_SR = (SH + SR) / 2
            SH_ST = (SH + ST) / 2

            SH_limit = 1.5 * S_flange
            SR_limit = S_flange
            ST_limit = S_flange
            SH_SR_limit = S_flange
            SH_ST_limit = S_flange
            break
        }
        this.condition_output.SR.value = round(SR, precision)
        this.condition_output.SR.limit = round(SR_limit, precision)
        this.condition_output.SR.check_result = this.check(SR, SR_limit)

        this.condition_output.ST.value = round(ST, precision)
        this.condition_output.ST.limit = round(ST_limit, precision)
        this.condition_output.ST.check_result = this.check(ST, ST_limit)

        this.condition_output.SH_.value = round(SH_, precision)

        this.condition_output.SH__.value = round(SH__, precision)

        this.condition_output.SH.value = round(SH, precision)
        this.condition_output.SH.limit = round(SH_limit, precision)
        this.condition_output.SH.check_result = this.check(SH, SH_limit)

        if (this.condition_name === 'design' || this.condition_name === 'trial') {
          // 只有设计和试验工况需要校验SH_SR和SH_ST，其他工况不需要
          this.condition_output.SH_SR.value = round(SH_SR, precision)
          this.condition_output.SH_SR.limit = round(SH_SR_limit, precision)
          this.condition_output.SH_SR.check_result = this.check(SH_SR, SH_SR_limit)

          this.condition_output.SH_ST.value = round(SH_ST, precision)
          this.condition_output.SH_ST.limit = round(SH_ST_limit, precision)
          this.condition_output.SH_ST.check_result = this.check(SH_ST, SH_ST_limit)

          this.condition_output.flange_check_result = (this.condition_output.SR.check_result === '通过'
              && this.condition_output.ST.check_result === '通过'
              && this.condition_output.SH.check_result === '通过'
              && this.condition_output.SH_SR.check_result === '通过'
              && this.condition_output.SH_ST.check_result === '通过') ? '通过' : '不通过'
        } else {
          this.condition_output.flange_check_result = (this.condition_output.SR.check_result === '通过'
              && this.condition_output.ST.check_result === '通过'
              && this.condition_output.SH.check_result === '通过') ? '通过' : '不通过'
        }
      } catch (e) {
        Message.error(e)
      }

      this.table_data = this.getTableData()
    },
    check(a, a_limit) {
      return a <= a_limit ? '通过' : '不通过'
    },
    cleanAll() {
      this.condition_output.SR.value = '--'
      this.condition_output.SR.limit = '--'
      this.condition_output.SR.check_result = '--'

      this.condition_output.ST.value = '--'
      this.condition_output.ST.limit = '--'
      this.condition_output.ST.check_result = '--'

      this.condition_output.SH_.value = '--'
      this.condition_output.SH__.value = '--'

      this.condition_output.SH.value = '--'
      this.condition_output.SH.limit = '--'
      this.condition_output.SH.check_result = '--'

      this.condition_output.SH_SR.value = '--'
      this.condition_output.SH_SR.limit = '--'
      this.condition_output.SH_SR.check_result = '--'

      this.condition_output.SH_ST.value = '--'
      this.condition_output.SH_ST.limit = '--'
      this.condition_output.SH_ST.check_result = '--'

      this.condition_output.flange_check_result = '--'

      this.table_data = this.getTableData()
    }
  }
}
</script>

<style scoped>
/deep/ .left-panel {
  /*margin-top: 40px;*/
  /*display: inline-table;*/
}
</style>
