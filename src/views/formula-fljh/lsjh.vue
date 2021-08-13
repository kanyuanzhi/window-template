<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form ref="form" :model="input" label-width="70px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Dj(mm)" size="small">
                <el-input type="number" v-model="input.Dj" placeholder="垫片平均直径"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="m" size="small">
                <el-input type="number" v-model="input.m" placeholder="垫片系数"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="材料种类" size="small">
                <el-radio-group v-model="input.cailiao_type">
                  <el-radio :label="1">1类</el-radio>
                  <el-radio :label="2">2类</el-radio>
                  <el-radio :label="3">3类</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="T(°)" size="small">
                <el-input type="number" v-model="input.T" placeholder="设计温度"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-tooltip class="item" effect="dark" content="螺栓材料在设计温度下的许用应力" placement="right">
                <el-form-item label="S(MPa)" size="small">
                  <el-input type="number" v-model="input.S" placeholder="螺栓材料在设计温度下的许用应力"/>
                </el-form-item>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-tooltip class="item" effect="dark" content="螺栓实际根部截面积" placement="right">
                <el-form-item label="SB(mm2)" size="small">
                  <el-input type="number" v-model="input.SB" placeholder="螺栓实际根部截面积"/>
                </el-form-item>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-divider>设计工况下的校核</el-divider>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Pc(MPa)" size="small">
                <el-input type="number" v-model="input.Pc" placeholder="设计压力"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider>运行工况下的校核</el-divider>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Ec(Pa)" size="small">
                <el-input type="number" v-model="input.Ec" placeholder="室温下的弹性模量"/>
              </el-form-item>
              <el-form-item label="Eh(Pa)" size="small">
                <el-input type="number" v-model="input.Eh" placeholder="工作温度下的弹性模量"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="FSi(N)" size="small">
                <el-input type="number" v-model="input.FSi" placeholder="最终的螺栓预紧力"/>
              </el-form-item>
              <el-form-item label="Sy(MPa)" size="small">
                <el-input type="number" v-model="input.Sy" placeholder="螺栓材料的屈服强度"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider>试验工况下的校核</el-divider>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Pe(MPa)" size="small">
                <el-input type="number" v-model="input.Pe" placeholder="试验压力"/>
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
          prop="FSPc"
          label="设计压力下密封垫片的FS(Pc)(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="SA_sheji"
          label="设计工况下所需的螺栓最小截面积SA(mm2)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="SA_yunxing"
          label="运行工况下所需的螺栓最小截面积SA(mm2)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="FSPe"
          label="试验压力下密封垫片的FS(Pe)(N)"
          align="center">
        </el-table-column>
        <el-table-column
          prop="SA_shiyan"
          label="试验工况下所需的螺栓最小截面积SA(mm2)"
          align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-divider>校核结果</el-divider>
    <el-row>
      <el-table
        :data="result"
        border>
        <el-table-column
          prop="conclusion_sheji"
          label="设计工况下螺栓校核结果"
          align="center">
        </el-table-column>
        <el-table-column
          prop="conclusion_yunxing"
          label="运行工况下螺栓校核结果"
          align="center">
        </el-table-column>
        <el-table-column
          prop="conclusion_shiyan"
          label="试验工况下螺栓校核结果"
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
import defaultSettings from '@/settings'

const precision = defaultSettings.precision

import {pi, pow, min, round} from "mathjs"
import {clear_parameters, generate_report} from "@/utils/common"

export default {
  data() {
    return {
      input: this.$store.getters.lsjh.project1.input,
      output: this.$store.getters.lsjh.project1.output,
      result: [this.$store.getters.lsjh.project1.output],
    }
  },
  methods: {
    compute() {
      // 输入
      const Pc = this.input.Pc
      const Dj = this.input.Dj
      const m = this.input.m
      const SB = this.input.SB
      const T = this.input.T
      const S = this.input.S
      const Sy = this.input.Sy
      const Ec = this.input.Ec
      const Eh = this.input.Eh
      const FSi = this.input.FSi
      const Pe = this.input.Pe

      // 输出
      const FSPc = round(pi / 4 * pow(Dj, 2) * Pc * (1 + m), precision)
      const SA_sheji = round(FSPc / S, precision)
      const SA_yunxing = round(Eh / Ec * FSi / min(S, Sy), precision)
      const FSPe = round(pi / 4 * pow(Dj, 2) * Pe * (1 + m), precision)
      const SA_shiyan = round(FSPe / (2 / 3 * Sy), precision)

      if (SB >= SA_sheji) {
        this.output.conclusion_sheji = "通过"
      } else {
        this.output.conclusion_sheji = "不通过"
      }
      if (SB >= SA_yunxing) {
        this.output.conclusion_yunxing = "通过"
      } else {
        this.output.conclusion_yunxing = "不通过"
      }
      if (SB >= SA_shiyan) {
        this.output.conclusion_shiyan = "通过"
      } else {
        this.output.conclusion_shiyan = "不通过"
      }

      this.output.FSPc = FSPc
      this.output.SA_sheji = SA_sheji
      this.output.SA_yunxing = SA_yunxing
      this.output.FSPe = FSPe
      this.output.SA_shiyan = SA_shiyan
    },
    print() {
      generate_report("fljh-lsjh_report", this.output)
    },
    clean() {
      clear_parameters(this.input, this.output)
    }
  }
}
</script>

<style scoped>

</style>

