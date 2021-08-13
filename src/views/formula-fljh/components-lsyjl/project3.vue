<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="form" label-width="70px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="螺栓型号" size="small">
                <el-radio-group v-model="input.d">
                  <el-radio :label="1.2">M1</el-radio>
                  <el-radio :label="2.4">M2</el-radio>
                  <el-radio :label="3.5">M3</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="d(mm)" size="small">
                <el-input type="number" v-model="input.d" placeholder="螺栓公称直径"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="S(mm)" size="small">
                <el-input type="number" v-model="input.S" placeholder="螺母平头直径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="P(mm)" size="small">
                <el-input type="number" v-model="input.P" placeholder="螺栓节距"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="f" size="small">
                <el-input type="number" v-model="input.f" placeholder="螺纹摩擦系数"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="f'" size="small">
                <el-input type="number" v-model="input.f_" placeholder="螺母垫片摩擦系数"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="n" size="small">
                <el-input type="number" v-model="input.n" placeholder="螺栓数量n"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">

            <el-col :span="12">
              <el-form-item label="SB(mm2)" size="small">
                <el-radio-group v-model="input.SB_model">
                  <el-radio :label="1">公式计算</el-radio>
                  <el-radio :label="2">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="SB(mm2)" size="small">
                <el-input type="number" v-model="input.SB" placeholder="螺栓实际根部截面积" :disabled="input.SB_model===1"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="PV(N)" size="small">
                <el-input type="number" v-model="input.PV" placeholder="螺栓传递力"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item align="right">
                <el-button type="primary" @click="compute" size="medium">计算</el-button>
                <el-button @click="clean" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-row>
      <el-table
        :data="result"
        border>
        <el-table-column
          prop="r"
          label="螺栓螺纹顶半径r(mm)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="Rma"
          label="Rma(mm)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="SB"
          label="螺栓实际根部截面积SB(mm2)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="CS"
          label="螺栓紧固力矩CS(N/m)"
          align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-divider>输出报告</el-divider>
    <el-row>
      <el-form ref="form" label-position="right">
        <el-form-item align="middle">
          <el-button type="primary" @click="print" size="medium">输出报告</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {pi, pow} from "mathjs";
import {generate_report, clear_parameters} from "@/utils/common"

export default {
  name: "project3",
  data() {
    return {
      input: this.$store.getters.lsyjl.project3.input,
      output: this.$store.getters.lsyjl.project3.output,
      result: [this.$store.getters.lsyjl.project3.output],
    }
  },
  methods: {
    compute() {
      const d = this.input.d
      const S = this.input.S
      const P = this.input.P
      const f = this.input.f
      const f_ = this.input.f_
      const n = this.input.n
      let SB = this.input.SB
      const PV = this.input.PV

      const r = (d - 0.6495 * P) / 2
      const Rma = (d + S) / 4
      if (this.input.SB_model === 1) {
        SB = pow((d - 1.2268 * P), 2) * pi / 4 * n
      }
      const CS = (PV * (P / 2 / pi + f * r + f_ * Rma)) / 1000

      this.output.r = r
      this.output.Rma = Rma
      this.output.SB = SB
      this.output.CS = CS
    },
    print() {
      generate_report("fljh-lsyjl-project3_report", this.output)
    },
    clean() {
      clear_parameters(this.input, this.output)
    }
  }
}
</script>

<style scoped>
/*/deep/ .el-form-item__label {*/
/*  padding-bottom: 0px;*/
/*}*/

/*/deep/ .el-form-item--small{*/
/*  margin-bottom: 10px;*/
/*}*/
</style>
