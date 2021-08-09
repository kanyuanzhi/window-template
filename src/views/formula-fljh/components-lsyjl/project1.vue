<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="input" :model="input" label-width="70px" label-position="right">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Di(mm)" size="small">
                <el-input v-model="input.Di" placeholder="法兰垫片内径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Do(mm)" size="small">
                <el-input v-model="input.Do" placeholder="法兰垫片外径"/>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="y" size="small">
                <el-input v-model="input.y" placeholder="垫片密封比压力"/>
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
      <el-form ref="form" label-position="right">
        <el-form-item align="middle">
          <el-button type="primary" @click="print" size="medium">输出报告</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {pi, pow} from "mathjs"
import {generate_report, clear_parameters} from "@/utils/common"

export default {
  name: "project1",
  data() {
    return {
      input: this.$store.getters.lsyjl.project1.input,
      output: this.$store.getters.lsyjl.project1.output,
      result: [this.$store.getters.lsyjl.project1.output]
    }
  },
  methods: {
    compute() {
      const Di = parseFloat(this.input.Di)
      const Do = parseFloat(this.input.Do)
      const y = parseFloat(this.input.y)
      const Dj = (Di + Do) / 2
      const Fj = pi / 4 * pow(Dj, 2) * y

      this.output.Dj = Dj
      this.output.Fj = Fj
    },
    print() {
      generate_report("fljh-lsyjl-project1_report", this.output)
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
