<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">
          <el-divider>通用</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Di(mm)" placeholder="法兰垫片内径" :input="input" para="Di"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Do(mm)" placeholder="法兰垫片外径" :input="input" para="Do"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="y" placeholder="垫片密封比压力" :input="input" para="y"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>与压力相关的力</el-divider>
          <el-divider>外部力效应</el-divider>
          <el-divider>与密封垫圈相关的力</el-divider>
          <el-divider>力矩计算</el-divider>
          <el-divider>应力计算</el-divider>

          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item align="right">
                <el-button type="primary" @click="calculate" size="medium">计算</el-button>
                <el-button @click="clean" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="4">
        <div class="demo-image__placeholder">
          <div class="el-image-block">
            <el-image :src="img_luomu" :preview-src-list="[img_luomu]">
            </el-image>
            <span class="demonstration">螺母示意图</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-descriptions border :column="4">
      <el-descriptions-item label="垫片平均直径Dj(mm)">{{ output.Dj }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, pi, pow, round} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'falan-yingli-1',
  props: ['input', 'output', 'result'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_luomu: require('@/assets/model_images/flange_rcc_m_bolt.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 1-1 压紧密封垫圈所需的力Fj
      const Di = this.input.Di
      const Do = this.input.Do
      const y = this.input.y

      // 1-2 保证垫片密封要求的力FS(P)
      const P_1_2 = this.input.P_1_2
      const Mf = this.input.Mf
      const Fa = this.input.Fa
      const m = this.input.m
      const Ec = this.input.Ec
      const Eh = this.input.Eh
      const Ps = this.input.Ps
      const FT = this.input.FT

      // 1-3 螺栓紧固力矩
      const d = this.input.d
      const S = this.input.S
      const P_1_3 = this.input.P_1_3
      const f = this.input.f
      const f_ = this.input.f_
      const n = this.input.n
      const PV = this.input.PV

      //----------------输出----------------//
      // 1-1 压紧密封垫圈所需的力Fj
      const Dj = (Di + Do) / 2
      const Fj = pi / 4 * pow(Dj, 2) * y

      // 1-2 保证垫片密封要求的力FS(P)
      const Peq = 16 * Mf / (pi * pow(Dj, 3) + 4 * Fa / (pi * pow(Dj, 2)))
      const FF = pi / 4 * pow(Dj, 2) * (P_1_2 + Peq)
      const FM = pi / 4 * pow(Dj, 2) * m * P_1_2
      const FS = FF + FM
      const FS0 = Ec / Eh * FS
      const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
      const FS0_ = Ec / Eh * FS_
      const FSi = max(Fj, FS0, FS0_)

      // 1-3 螺栓紧固力矩
      const r = (d - 0.6495 * P_1_3) / 2
      const Rma = (d + S) / 4
      const SB = pow((d - 1.2268 * P_1_3), 2) * pi / 4 * n
      const CS = (PV * (P_1_3 / 2 / pi + f * r + f_ * Rma)) / 1000

      this.output.Dj = round(Dj, precision)
      this.output.Fj = round(Fj, precision)

      this.output.Peq = round(Peq, precision)
      this.output.FF = round(FF, precision)
      this.output.FM = round(FM, precision)
      this.output.FS = round(FS, precision)
      this.output.FS0 = round(FS0, precision)
      this.output.FS_ = round(FS_, precision)
      this.output.FS0_ = round(FS0_, precision)
      this.output.FSi = round(FSi, precision)

      this.output.r = round(r, precision)
      this.output.Rma = round(Rma, precision)
      this.output.SB = round(SB, precision)
      this.input.SB = round(SB, precision) // 螺栓校核中用到SB，可选择公式计算或手动填写
      this.output.CS = round(CS, precision)
    },
    clean() {
      this.input.Di = ""
      this.input.Do = ""
      this.input.y = ""

      this.input.P_1_2 = ""
      this.input.Mf = ""
      this.input.Fa = ""
      this.input.m = ""
      this.input.Ec = ""
      this.input.Eh = ""
      this.input.Ps = ""
      this.input.FT = ""

      this.input.d = ""
      this.input.S = ""
      this.input.P_1_3 = ""
      this.input.f = ""
      this.input.f_ = ""
      this.input.n = ""
      this.input.PV = ""

      this.output.Dj = "--"
      this.output.Fj = "--"

      this.output.Peq = "--"
      this.output.FF = "--"
      this.output.FM = "--"
      this.output.FS = "--"
      this.output.FS0 = "--"
      this.output.FS_ = "--"
      this.output.FS0_ = "--"
      this.output.FSi = "--"

      this.output.r = "--"
      this.output.Rma = "--"
      this.output.SB = "--"
      this.output.CS = "--"
    },
  }
}
</script>

<style scoped>

</style>
