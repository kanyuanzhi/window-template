<template>
  <el-row :gutter="40">
    <el-col :span="18">
      <el-form label-width="80px">
        <el-divider class="custom-el-divider--horizontal">{{ condition_name_zh }}工况</el-divider>
        <div class="left-panel" style="margin-bottom: 20px">
          <template>
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
          </template>
          <!--          <el-row :gutter="10">-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_input.S_flange" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_output.SR" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_output.ST" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <!--          <el-row :gutter="10">-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_output.SH_" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_output.SH__" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input :para="condition_output.SH" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
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
              <el-button icon="el-icon-delete" type="none" size="small">清空</el-button>
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
import {Message} from "element-ui";
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
      condition_output: this.condition.output,

      table_data: [
        {
          name: '值',
          SR: '--',
          ST: '--',
          SH: '--',
          SH_SR: '--',
          SH_ST: '--',
        }, {
          name: '限值',
          SR: '--',
          ST: '--',
          SH: '--',
          SH_SR: '--',
          SH_ST: '--',
        }, {
          name: '校验结果',
          SR: '--',
          ST: '--',
          SH: '--',
          SH_SR: '--',
          SH_ST: '--',
        }
      ],
      flange_check_result: '--'
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

        const P = this.condition_input.P
        const S_flange = this.condition_input.S_flange

        const M = this.condition_output.M.value
        if (M === '--') {
          throw new Error([this.condition_output.M.meaning, this.condition_output.M.label, '未计算！'].join(' '))
        }

        let SR, ST, SH_, SH__, SH, SH_SR, SH_ST, SR_limit, ST_limit, SH_limit, SH_SR_limit, SH_ST_limit

        switch (this.condition_name) {
          case 'design':
            SR = (4 / 3 * Ep * e_ + 1) * M / (L * pow(Ep, 2) * B)
            ST = Y * M / (pow(Ep, 2) * B) - Z * SR
            SH_ = M / (L * pow(g1, 2) * B1) + P * B / (4 * g0)
            SH__ = lam * M / (L * pow(g1, 2) * B1) + P * B / (4 * g0)
            SH = max(SH_, SH__)
            SH_SR = (SH + SR) / 2
            SH_ST = (SH + ST) / 2
            SH_limit = 1.5 * S_flange
            SR_limit = S_flange
            ST_limit = S_flange
            SH_SR_limit = S_flange
            SH_ST_limit = S_flange

            this.condition_output.SH_SR.value = round(SH_SR, precision)
            this.condition_output.SH_SR.limit = round(SH_SR_limit, precision)
            this.condition_output.SH_SR.check_result = this.check(SH_SR, SH_SR_limit)

            this.condition_output.SH_ST.value = round(SH_ST, precision)
            this.condition_output.SH_ST.limit = round(SH_ST_limit, precision)
            this.condition_output.SH_ST.check_result = this.check(SH_ST, SH_ST_limit)
            return
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

        this.condition_output.flange_check_result = (this.condition_output.SR.check_result === '通过'
          && this.condition_output.ST.check_result === '通过'
          && this.condition_output.SH.check_result === '通过'
          && this.condition_output.SH_SR.check_result === '通过'
          && this.condition_output.SH_ST.check_result === '通过') ? '通过' : '不通过'
      } catch (e) {
        Message.error(e)
      }
    },
    check(a, a_limit) {
      return a <= a_limit ? '通过' : '不通过'
    },
    clearAll(){
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
