<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">
          <el-divider>螺栓间距</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="d(mm)" placeholder="螺栓公称直径" :input="input" para="d"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="n" placeholder="螺栓数量" :input="input" para="n"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="C(mm)" placeholder="螺栓节圆直径" :input="input" para="C"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Ep(mm)" placeholder="法兰盘厚度" :input="input" para="Ep"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>法兰系数</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="A(mm)" placeholder="法兰外径" :input="input" para="A"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="B(mm)" placeholder="法兰内径" :input="input" para="B"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="h(mm)" placeholder="法兰颈长度" :input="input" para="h"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="g0(mm)" placeholder="法兰颈最薄处的厚度" :input="input" para="g0"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="g1(mm)" placeholder="法兰颈最厚处的厚度" :input="input" para="g1"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="ν(mm)" placeholder="法兰材料泊松比ν（默认值0.3）" :input="input" para="nu"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="λ" placeholder="法兰形式系数λ" :input="input" para="lam"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="F" placeholder="法兰形式系数F" :input="input" para="F"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="V" placeholder="法兰形式系数V" :input="input" para="V"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>法兰载荷力臂(整体法兰)</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Dj(mm)" placeholder="垫片平均直径（计算螺栓预紧力时求出）" :input="output" para="Dj"
                               :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
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
            <el-image :src="img_lambda" :preview-src-list="[img_lambda]">
            </el-image>
            <span class="demonstration">法兰形式系数λ计算图</span>
          </div>
          <div class="el-image-block">
            <el-image :src="img_F" :preview-src-list="[img_F]">
            </el-image>
            <span class="demonstration">法兰形式系数F计算图</span>
          </div>
          <div class="el-image-block">
            <el-image :src="img_V" :preview-src-list="[img_V]">
            </el-image>
            <span class="demonstration">法兰形式系数V计算图</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-descriptions border :column="4">
      <el-descriptions-item label="力矩修正系数C0">{{ output.C0 }}</el-descriptions-item>
      <el-descriptions-item label="系数h0">{{ output.h0 }}</el-descriptions-item>
      <el-descriptions-item label="系数h/h0 ">{{ output.h_h0 }}</el-descriptions-item>
      <el-descriptions-item label="系数g1/g0">{{ output.g1_g0 }}</el-descriptions-item>
      <el-descriptions-item label="法兰形式系数K">{{ output.K }}</el-descriptions-item>
      <el-descriptions-item label="法兰形式系数Y">{{ output.Y }}</el-descriptions-item>
      <el-descriptions-item label="法兰形式系数U">{{ output.U }}</el-descriptions-item>
      <el-descriptions-item label="法兰形式系数Z">{{ output.Z }}</el-descriptions-item>
      <el-descriptions-item label="系数e">{{ output.e_ }}</el-descriptions-item>
      <el-descriptions-item label="法兰形式系数L">{{ output.L }}</el-descriptions-item>
      <el-descriptions-item label="系数B1">{{ output.B1 }}</el-descriptions-item>
      <el-descriptions-item label="支撑载荷HD与HD'的轴到节圆的距离hd(mm)">{{ output.hd }}</el-descriptions-item>
      <el-descriptions-item label="支撑载荷HG的轴到节圆的距离hg(mm)">{{ output.hg }}</el-descriptions-item>
      <el-descriptions-item label="支撑载荷HT与HT的轴到节圆的距离ht(mm)">{{ output.ht }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, pi, sqrt, pow, round, log, e} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'jiben-jisuan',
  props: ['input', 'output', 'result'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_lambda: require('@/assets/model_images/falan_xingshixishu_lambda.png'),
      img_F: require('@/assets/model_images/falan_xingshixishu_F.png'),
      img_V: require('@/assets/model_images/falan_xingshixishu_V.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 4-1 螺栓间距
      const d = this.input.d
      const n = this.input.n
      const C = this.input.C
      const Ep = this.input.Ep

      // 4-2 法兰系数
      const A = this.input.A
      const B = this.input.B
      const h = this.input.h
      const g0 = this.input.g0
      const g1 = this.input.g1
      const lam = this.input.lam
      const F = this.input.F
      const V = this.input.V
      const nu = this.input.nu

      // 4-2 法兰载荷力臂
      const Dj = this.output.Dj

      //----------------输出----------------//
      // 4-1 螺栓间距
      let C0
      if (pi * C / n > 2 * d + Ep) {
        C0 = max(sqrt(pi * C / (n * (2 * d + Ep))), 1)
      } else {
        C0 = 1
      }

      // 4-2 法兰系数
      const h0 = sqrt(B * g0)
      const h_h0 = h / sqrt(B * g0)
      const g1_g0 = g1 / g0
      const K = A / B
      const T = (3 * pow(K, 2) * (1 + 2 * (1 + nu) / (1 - nu) * log(K, e)) - 3) / (pi * (K - 1) * (1 + (1 + nu) / (1 - nu) * pow(K, 2)))
      const Y = (3 / pi * (1 - nu) + 6 / pi * (1 + nu) * pow(K, 2) / (pow(K, 2) - 1) * log(K, e)) / (K - 1)
      const U = (3 * pow(K, 2) * (1 + 2 * (1 + nu) / (1 - nu) * log(K, e)) - 3) / (pi * (1 + nu) * (pow(K, 2) - 1) * (K - 1))
      const Z = (pow(K, 2) + 1) / (pow(K, 2) - 1)
      const e_ = F / h0
      const L = (Ep * e_ + 1) / T + V / U * pow(Ep, 3) / (h0 * pow(g0, 2))
      let B1
      if (B >= 20 * g1) {
        B1 = B
      } else {
        if (lam <= 1) {
          B1 = B + g1
        } else {
          B1 = B + g0
        }
      }

      // 4-2 法兰载荷力臂
      const hd = (C - B - g1) / 2
      const hg = (C - Dj) / 2
      const ht = (C - B + hg - g1) / 2

      this.output.C0 = round(C0, precision)

      this.output.h0 = round(h0, precision)
      this.output.h_h0 = round(h_h0, precision)
      this.output.g1_g0 = round(g1_g0, precision)
      this.output.K = round(K, precision)
      this.output.T = round(T, precision)
      this.output.Y = round(Y, precision)
      this.output.U = round(U, precision)
      this.output.Z = round(Z, precision)
      this.output.e_ = round(e_, precision)
      this.output.L = round(L, precision)
      this.output.B1 = round(B1, precision)

      this.output.hd = round(hd, precision)
      this.output.hg = round(hg, precision)
      this.output.ht = round(ht, precision)
    },
    clean() {
      this.input.d = ""
      this.input.n = ""
      this.input.Ep = ""
      this.input.C = ""

      this.input.A = ""
      this.input.B = ""
      this.input.h = ""
      this.input.g0 = ""
      this.input.g1 = ""
      this.input.lam = ""
      this.input.F = ""
      this.input.V = ""
      this.input.nu = 0.3

      this.output.C0 = "--"

      this.output.h0 = "--"
      this.output.h_h0 = "--"
      this.output.g1_g0 = "--"
      this.output.K = "--"
      this.output.T = "--"
      this.output.Y = "--"
      this.output.U = "--"
      this.output.Z = "--"
      this.output.e_ = "--"
      this.output.L = "--"
      this.output.B1 = "--"

      this.output.hd = "--"
      this.output.hg = "--"
      this.output.ht = "--"
    },
  }
}
</script>

<style scoped>

</style>
