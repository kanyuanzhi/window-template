<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="form" label-width="70px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="螺栓型号" size="small">
                <el-radio-group v-model="luoshuan_type">
                  <el-radio label="M1"></el-radio>
                  <el-radio label="M2"></el-radio>
                  <el-radio label="M3"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="d(mm)" size="small">
                <el-input v-model="d" placeholder="螺栓公称直径d" disabled/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="S(mm)" size="small">
                <el-input v-model="S" placeholder="螺母平头直径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="P(mm)" size="small">
                <el-input v-model="P" placeholder="螺栓节距"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="f" size="small">
                <el-input v-model="f" placeholder="螺纹摩擦系数"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="f'" size="small">
                <el-input v-model="f_" placeholder="螺母垫片摩擦系数"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="n" size="small">
                <el-input v-model="n" placeholder="螺栓数量n"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">

            <el-col :span="12">
              <el-form-item label="SB(mm2)" size="small">
                <el-radio-group v-model="SB_model">
                  <el-radio :label="1">公式计算</el-radio>
                  <el-radio :label="2">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="SB(mm2)" size="small">
                <el-input v-model="SB" placeholder="螺栓实际根部截面积" :disabled="SB_model===1"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="PV(N)" size="small">
                <el-input v-model="PV" placeholder="螺栓传递力"/>
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

export default {
  name: "project3",
  data() {
    return {
      luoshuan_type: "",
      d: "",
      S: "",
      P: "",
      f: "",
      f_: "",
      n: "",
      SB: "",
      SB_model: 1,
      PV: "",
      result: [{
        r: "--",
        Rma: "--",
        SB: "--",
        CS: "--"
      }]
    }
  },
  watch: {
    luoshuan_type: function (val) {
      switch (val) {
        case "M1":
          this.d = 1
          break
        case "M2":
          this.d = 2
          break
        case "M3":
          this.d = 3
          break
        default:
          break
      }
    },
    SB_model: function (val) {
      if(val === 1){
        this.SB = ""
      }
    }
  },
  methods: {
    compute() {
      // const luoshuan_type = this.luoshuan_type
      const d = this.d
      const S = parseFloat(this.S)
      const P = parseFloat(this.P)
      const f = parseFloat(this.f)
      const f_ = parseFloat(this.f_)
      const n = parseFloat(this.n)
      let SB = parseFloat(this.SB)
      const PV = parseFloat(this.PV)

      const r = (d - 0.6495 * P) / 2
      const Rma = (d + S) / 4
      if (this.SB_model === 1) {
        SB = pow((d - 1.2268 * P), 2) * pi / 4 * n
      }
      const CS = (PV * (P / 2 / pi + f * r + f_ * Rma)) / 1000

      this.result[0].r = r
      this.result[0].Rma = Rma
      this.result[0].SB = SB
      this.result[0].CS = CS
    },
    print() {
      let routeUrl = this.$router.resolve({
        name: "fljh-lsyjl-project3_report",
        query: {result: JSON.stringify(this.result)}
      });
      window.open(routeUrl.href, '_blank');
    },
    clean() {
      console.log(11111)
      this.luoshuan_type = ""
      this.d = ""
      this.S = ""
      this.P = ""
      this.f = ""
      this.f_ = ""
      this.n = ""
      this.SB = ""
      this.PV = ""

      this.result[0].r = "--"
      this.result[0].Rma = "--"
      this.result[0].SB = "--"
      this.result[0].CS = "--"
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
