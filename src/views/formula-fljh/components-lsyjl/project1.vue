<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="form" :model="form" label-width="70px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Di(mm)" size="small">
                <el-input v-model="form.Di" placeholder="法兰垫片内径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Do(mm)" size="small">
                <el-input v-model="form.Do" placeholder="法兰垫片外径"/>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="y" size="small">
                <el-input v-model="form.y" placeholder="垫片密封比压力"/>
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
          prop="Dj"
          label="垫片平均直径Dj(mm)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="Fj"
          label="压紧密封垫圈所需的力Fj(N)"
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
import {pi, pow} from "mathjs";

export default {
  name: "project1",
  data() {
    return {
      form: {
        Di: "",
        Do: "",
        y: "",
      },
      result: [{Dj: "--", Fj: "--"}]
    }
  },
  methods: {
    compute() {
      const Di = parseFloat(this.form.Di)
      const Do = parseFloat(this.form.Do)
      const y = parseFloat(this.form.y)
      const Dj = (Di + Do) / 2
      const Fj = pi / 4 * pow(Dj, 2) * y

      this.result[0].Dj = Dj
      this.result[0].Fj = Fj
    },
    print() {
      let routeUrl = this.$router.resolve({
        name: "fljh-lsyjl-project1_report",
        query: {result: JSON.stringify(this.result)}
      });
      window.open(routeUrl.href, '_blank');
    },
    clean() {
      this.form.Di = ""
      this.form.Do = ""
      this.form.y = ""
      this.result[0].Dj = "--"
      this.result[0].Fj = "--"
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
