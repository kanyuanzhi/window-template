<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">

          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>垫片参数</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="m" placeholder="垫片系数" :input="general_input" para="m"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="y(MPa)" placeholder="垫片密封比压力" :input="general_input" para="y"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Do(mm)" placeholder="垫片外径" :input="general_input" para="Do"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Di(mm)" placeholder="垫片内径" :input="general_input" para="Di"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="b0(mm)" placeholder="基本密封宽度" :input="general_input" para="b0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="b(mm)" placeholder="有效密封宽度" :input="general_input" para="b"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-descriptions :column="2">
                  <el-descriptions-item label="垫片平均直径Dj(mm)">{{ general_output.Dj }}</el-descriptions-item>
                  <el-descriptions-item label="压紧密封垫圈所需的力Fj(N)">{{ general_output.Fj }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>实际螺栓面积</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="d(mm)" placeholder="螺栓公称直径" :input="general_input" para="d"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="n" placeholder="螺栓数量" :input="general_input" para="n"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="P(mm)" placeholder="螺栓截距" :input="general_input" para="P"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-descriptions :column="2">
                  <el-descriptions-item label="单个螺栓面积S(mm2)">{{ general_output.S }}</el-descriptions-item>
                  <el-descriptions-item label="整体螺栓面积SB(mm2)">{{ general_output.SB }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰尺寸</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="A(mm)" placeholder="法兰外径" :input="general_input" para="A"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="B(mm)" placeholder="法兰内径" :input="general_input" para="B"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰力矩</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="g0(mm)" placeholder="法兰颈最薄处的厚度" :input="general_input"
                                 para="g0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="g1(mm)" placeholder="法兰颈最厚处的厚度" :input="general_input"
                                 para="g1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="h(mm)" placeholder="法兰颈长度" :input="general_input" para="h"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Ep(mm)" placeholder="法兰盘厚度" :input="general_input" para="Ep"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="C(mm)" placeholder="螺栓节圆直径" :input="general_input" para="C"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item label="力矩修正系数C0">{{ general_output.C0 }}</el-descriptions-item>
                  <el-descriptions-item label="R=0.5(C-B)-g1">{{ general_output.R }}</el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="3">
                  <el-descriptions-item label="支撑载荷HD与HD'的轴到节圆的距离hd(mm)">{{ general_output.hd }}</el-descriptions-item>
                  <el-descriptions-item label="支撑载荷HG的轴到节圆的距离hg(mm)">{{ general_output.hg }}</el-descriptions-item>
                  <el-descriptions-item label="支撑载荷HT与HT的轴到节圆的距离ht(mm)">{{ general_output.ht }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰应力</span>
              <el-button @click="clean5" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>

            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="ν" placeholder="法兰材料泊松比" :input="general_input" para="nu"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="λ" placeholder="法兰形式系数λ" :input="general_input" para="lam"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="F" placeholder="法兰形式系数F" :input="general_input" para="F"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="V" placeholder="法兰形式系数V" :input="general_input" para="V"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="4">
                  <el-descriptions-item label="系数h0">{{ general_output.h0 }}</el-descriptions-item>
                  <el-descriptions-item label="系数h/h0">{{ general_output.h_h0 }}</el-descriptions-item>
                  <el-descriptions-item label="系数g1/g0">{{ general_output.g1_g0 }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数K">{{ general_output.K }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数T">{{ general_output.T }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数Y">{{ general_output.Y }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数U">{{ general_output.U }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数Z">{{ general_output.Z }}</el-descriptions-item>
                  <el-descriptions-item label="系数e">{{ general_output.e_ }}</el-descriptions-item>
                  <el-descriptions-item label="法兰形式系数L">{{ general_output.L }}</el-descriptions-item>
                  <el-descriptions-item label="系数B1">{{ general_output.B1 }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
        </el-form>

        <el-form label-width="70px">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item align="center">
                <el-button icon="el-icon-video-play" type="primary" @click="calculate" size="medium">计算</el-button>
                <el-button icon="el-icon-delete" @click="cleanAll" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="4">
        <div class="demo-image__placeholder">
          <div class="el-image-block">
            <el-image :src="img_bolt" :preview-src-list="[img_bolt]">
            </el-image>
            <span class="demonstration">螺母示意图</span>
          </div>
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
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {e, log, max, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'general',
  props: ['general_input', 'general_output'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_bolt: require('@/assets/model_images/luomu.png'),
      img_lambda: require('@/assets/model_images/falan_xingshixishu_lambda.png'),
      img_F: require('@/assets/model_images/falan_xingshixishu_F.png'),
      img_V: require('@/assets/model_images/falan_xingshixishu_V.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 垫片参数
      const m = this.general_input.m
      const y = this.general_input.y
      const Do = this.general_input.Do
      const Di = this.general_input.Di
      const b0 = this.general_input.b0
      const b = this.general_input.b
      // 实际螺栓面积
      const d = this.general_input.d
      const n = this.general_input.n
      const P = this.general_input.P

      // 法兰尺寸
      const A = this.general_input.A
      const B = this.general_input.B

      // 法兰力矩
      const g0 = this.general_input.g0
      const g1 = this.general_input.g1
      const h = this.general_input.h
      const Ep = this.general_input.Ep
      const C = this.general_input.C

      // 法兰应力
      const lam = this.general_input.lam
      const F = this.general_input.F
      const V = this.general_input.V
      const nu = this.general_input.nu

      //----------------输出----------------//
      // 垫片参数
      const Dj = (Do + Di) / 2
      const Fj = pi / 4 * pow(Dj, 2) * y

      // 实际螺栓面积
      const S = pow((d - 1.2268 * P), 2) * pi / 4
      const SB = S * n

      // 法兰力矩
      let C0
      if (pi * C / n > 2 * d + Ep) {
        C0 = max(sqrt(pi * C / (n * (2 * d + Ep))), 1)
      } else {
        C0 = 1
      }
      const R = 0.5 * (C - B) - g1
      const hd = (C - B - g1) / 2
      const hg = (C - Dj) / 2
      const ht = (C - B + hg - g1) / 2

      // 法兰应力
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


      this.general_output.Dj = round(Dj, precision)
      this.general_output.Fj = round(Fj, precision)

      this.general_output.S = round(S, precision)
      this.general_output.SB = round(SB, precision)
      this.general_input.SB = round(SB, precision) // SB可手动修改

      this.general_output.C0 = round(C0, precision)
      this.general_output.R = round(R, precision)
      this.general_output.hd = round(hd, precision)
      this.general_output.hg = round(hg, precision)
      this.general_output.ht = round(ht, precision)

      this.general_output.h0 = round(h0, precision)
      this.general_output.h_h0 = round(h_h0, precision)
      this.general_output.g1_g0 = round(g1_g0, precision)
      this.general_output.K = round(K, precision)
      this.general_output.T = round(T, precision)
      this.general_output.Y = round(Y, precision)
      this.general_output.U = round(U, precision)
      this.general_output.Z = round(Z, precision)
      this.general_output.e_ = round(e_, precision)
      this.general_output.L = round(L, precision)
      this.general_output.B1 = round(B1, precision)
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
      this.clean5()
    },
    clean1() {
      this.general_input.m = ''
      this.general_input.y = ''
      this.general_input.Do = ''
      this.general_input.Di = ''
      this.general_input.b0 = ''
      this.general_input.b = ''

      this.general_output.Dj = '--'
      this.general_output.Fj = '--'
    },
    clean2() {
      this.general_input.d = ''
      this.general_input.n = ''
      this.general_input.P = ''

      this.general_output.S = '--'
      this.general_output.SB = '--'
    },
    clean3() {
      this.general_input.A = ''
      this.general_input.B = ''
    },
    clean4() {
      this.general_input.g0 = ''
      this.general_input.g1 = ''
      this.general_input.h = ''
      this.general_input.Ep = ''
      this.general_input.C = ''

      this.general_output.C0 = '--'
      this.general_output.R = '--'
      this.general_output.hd = '--'
      this.general_output.hg = '--'
      this.general_output.ht = '--'
    },
    clean5() {
      this.general_input.lam = ''
      this.general_input.F = ''
      this.general_input.V = ''
      this.general_input.nu = 0.3

      this.general_output.h0 = '--'
      this.general_output.h_h0 = '--'
      this.general_output.g1_g0 = '--'
      this.general_output.K = '--'
      this.general_output.T = '--'
      this.general_output.Y = '--'
      this.general_output.U = '--'
      this.general_output.Z = '--'
      this.general_output.e_ = '--'
      this.general_output.L = '--'
      this.general_output.B1 = '--'
    }
  }
}
</script>

<style scoped>

</style>
