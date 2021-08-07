<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="form" :model="form" label-width="70px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="P(MPa)" size="small">
                <el-input v-model="form.P" placeholder="系统压力"/>
              </el-form-item>
              <el-form-item label="Mf(N·m)" size="small">
                <el-input v-model="form.Mf" placeholder="系统外载荷弯矩"/>
              </el-form-item>
              <el-form-item label="Fa(N)" size="small">
                <el-input v-model="form.Fa" placeholder="系统外载荷轴向力"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="m" size="small">
                <el-input v-model="form.m" placeholder="垫片系数"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Ec(Pa)" size="small">
                <el-input v-model="form.Ec" placeholder="室温下的弹性模量"/>
              </el-form-item>
              <el-form-item label="Eh(Pa)" size="small">
                <el-input v-model="form.Eh" placeholder="工作温度下的弹性模量"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Ps(MPa)" size="small">
                <el-input v-model="form.Ps" placeholder="系统工作压力"/>
              </el-form-item>
              <el-form-item label="FT(N)" size="small">
                <el-input v-model="form.FT" placeholder="运行工况下克服法兰相对切向位移所需的力"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Dj(mm)" size="small">
                <el-input v-model="form.Dj" placeholder="垫片平均直径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Fj(N)" size="small">
                <el-input v-model="form.Fj" placeholder="压紧密封垫圈所需的力"/>
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
      <el-col :span="8">
        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-row>
      <el-table
        :data="result"
        border>
        <el-table-column
          prop="Peq"
          label="外载荷等效压力Peq"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FF"
          label="由压力产生的端部静压力FF(P)(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FM"
          label="保证垫片密封要求的力FM(P)(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FS"
          label="室温下的FS(P)(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FS0"
          label="修正后的FS0(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FS_"
          label="运行工况下保证密封要求的力FS'(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FS0_"
          label="温度修正后的FS0'(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FSi"
          label="最终的螺栓预紧力FSi(N)"
          align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-divider>输出报告</el-divider>
    <el-row>
      <el-form ref="form" :model="form" label-position="right">
        <el-form-item align="middle">
          <el-button type="primary" @click="print" size="medium">输出报告</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {pi, pow, max} from "mathjs";

export default {
  name: "project2",
  data() {
    return {
      form: {
        P: "",
        Mf: "",
        Fa: "",
        m: "",
        Ec: "",
        Eh: "",
        Ps: "",
        FT: "",
        Dj: "",
        Fj: "",
      },
      result: [{
        Peq: "--",
        FF: "--",
        FM: "--",
        FS: "--",
        FS0: "--",
        FS_: "--",
        FS0_: "--",
        FSi: "--"
      }],
      src: require("@/assets/model_images/fljh.png")
    }
  },
  methods: {
    compute() {
      const P = parseFloat(this.form.P)
      const Mf = parseFloat(this.form.Mf)
      const Fa = parseFloat(this.form.Fa)
      const m = parseFloat(this.form.m)
      const Ec = parseFloat(this.form.Ec)
      const Eh = parseFloat(this.form.Eh)
      const Ps = parseFloat(this.form.Ps)
      const FT = parseFloat(this.form.FT)
      const Dj = parseFloat(this.form.Dj)
      const Fj = parseFloat(this.form.Fj)

      const Peq = 16 * Mf / (pi * pow(Dj, 3) + 4 * Fa / (pi * pow(Dj, 2)))
      const FF = pi / 4 * pow(Dj, 2) * (P + Peq)
      const FM = pi / 4 * pow(Dj, 2) * m * P
      const FS = FF + FM
      const FS0 = Ec / Eh * FS
      const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
      const FS0_ = Ec / Eh * FS_
      const FSi = max(Fj, FS0, FS0_)

      this.result[0].Peq = Peq
      this.result[0].FF = FF
      this.result[0].FM = FM
      this.result[0].FS = FS
      this.result[0].FS0 = FS0
      this.result[0].FS_ = FS_
      this.result[0].FS0_ = FS0_
      this.result[0].FSi = FSi
    },
    print() {
      let routeUrl = this.$router.resolve({
        name: "fljh-lsyjl-project2_report",
        query: {result: JSON.stringify(this.result)}
      });
      window.open(routeUrl.href, '_blank');
    },
    clean() {
      this.form.P = ""
      this.form.Mf = ""
      this.form.Fa = ""
      this.form.m = ""
      this.form.Ec = ""
      this.form.Eh = ""
      this.form.Ps = ""
      this.form.FT = ""
      this.form.Dj = ""
      this.form.Fj = ""

      this.result[0].Peq = "--"
      this.result[0].FF = "--"
      this.result[0].FM = "--"
      this.result[0].FS = "--"
      this.result[0].FS0 = "--"
      this.result[0].FS_ = "--"
      this.result[0].FS0_ = "--"
      this.result[0].FSi = "--"
    }
  }
}
</script>

<style scoped>
/*/deep/ .el-form-item__label {*/
/*  padding-bottom: 0px;*/
/*}*/

/*/deep/ .el-form-item--small {*/
/*  margin-bottom: 10px;*/
/*}*/
</style>
