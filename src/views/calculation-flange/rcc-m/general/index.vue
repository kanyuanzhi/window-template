<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">

          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>垫片参数</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.m"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.y"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Do"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Di"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.b0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.b"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="16">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Dj)">{{ general_output.Dj.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Fj)">{{ general_output.Fj.value }}</el-descriptions-item>
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
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.d"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.n"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="16">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.S)">{{ general_output.S.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.SB)">{{ general_output.SB.value }}</el-descriptions-item>
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
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.A"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.B"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰力矩</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.g0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.g1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ep"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.C"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.C0)">{{ general_output.C0.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.R)">{{ general_output.R.value }}</el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.hd)">{{ general_output.hd.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.hg)">{{ general_output.hg.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.ht)">{{ general_output.ht.value }}</el-descriptions-item>
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
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.nu"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.lam"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.F"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.V"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="4">
                  <el-descriptions-item :label="Label(general_output.h0)">{{ general_output.h0.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.h_h0)">{{ general_output.h_h0.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.g1_g0)">{{ general_output.g1_g0.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.K)">{{ general_output.K.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.T)">{{ general_output.T.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Y)">{{ general_output.Y.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.U)">{{ general_output.U.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Z)">{{ general_output.Z.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.e_)">{{ general_output.e_.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.L)">{{ general_output.L.value }}</el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.B1)">{{ general_output.B1.value }}</el-descriptions-item>
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
    CustomElInput,
  },
  data() {
    return {
      img_bolt: require('@/assets/model_images/luomu.png'),
      img_lambda: require('@/assets/model_images/falan_xingshixishu_lambda.png'),
      img_F: require('@/assets/model_images/falan_xingshixishu_F.png'),
      img_V: require('@/assets/model_images/falan_xingshixishu_V.png')
    }
  },
  computed:{
    Label() {
      return (para) => {
        if (para.format_label !== undefined){
          return para.format_label
        }
        let str = para.meaning.concat(para.label)
        if (para.unit === ''){
          return str
        }else {
          return str.concat('(', para.unit, ')')
        }
      }
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 垫片参数
      const m = this.general_input.m.value
      const y = this.general_input.y.value
      const Do = this.general_input.Do.value
      const Di = this.general_input.Di.value
      const b0 = this.general_input.b0.value
      const b = this.general_input.b.value
      // 实际螺栓面积
      const d = this.general_input.d.value
      const n = this.general_input.n.value
      const P = this.general_input.P.value

      // 法兰尺寸
      const A = this.general_input.A.value
      const B = this.general_input.B.value

      // 法兰力矩
      const g0 = this.general_input.g0.value
      const g1 = this.general_input.g1.value
      const h = this.general_input.h.value
      const Ep = this.general_input.Ep.value
      const C = this.general_input.C.value

      // 法兰应力
      const lam = this.general_input.lam.value
      const F = this.general_input.F.value
      const V = this.general_input.V.value
      const nu = this.general_input.nu.value

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


      this.general_output.Dj.value = round(Dj, precision)
      this.general_output.Fj.value = round(Fj, precision)

      this.general_output.S.value = round(S, precision)
      this.general_output.SB.value = round(SB, precision)
      this.general_input.SB.value = round(SB, precision) // SB可手动修改

      this.general_output.C0.value = round(C0, precision)
      this.general_output.R.value = round(R, precision)
      this.general_output.hd.value = round(hd, precision)
      this.general_output.hg.value = round(hg, precision)
      this.general_output.ht.value = round(ht, precision)

      this.general_output.h0.value = round(h0, precision)
      this.general_output.h_h0.value = round(h_h0, precision)
      this.general_output.g1_g0.value = round(g1_g0, precision)
      this.general_output.K.value = round(K, precision)
      this.general_output.T.value = round(T, precision)
      this.general_output.Y.value = round(Y, precision)
      this.general_output.U.value = round(U, precision)
      this.general_output.Z.value = round(Z, precision)
      this.general_output.e_.value = round(e_, precision)
      this.general_output.L.value = round(L, precision)
      this.general_output.B1.value = round(B1, precision)
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
      this.clean5()
    },
    clean1() {
      this.general_input.m.value = ''
      this.general_input.y.value = ''
      this.general_input.Do.value = ''
      this.general_input.Di.value = ''
      this.general_input.b0.value = ''
      this.general_input.b.value = ''

      this.general_output.Dj.value = '--'
      this.general_output.Fj.value = '--'
    },
    clean2() {
      this.general_input.d.value = ''
      this.general_input.n.value = ''
      this.general_input.P.value = ''

      this.general_output.S.value = '--'
      this.general_output.SB.value = '--'
    },
    clean3() {
      this.general_input.A.value = ''
      this.general_input.B.value = ''
    },
    clean4() {
      this.general_input.g0.value = ''
      this.general_input.g1.value = ''
      this.general_input.h.value = ''
      this.general_input.Ep.value = ''
      this.general_input.C.value = ''

      this.general_output.C0.value = '--'
      this.general_output.R.value = '--'
      this.general_output.hd.value = '--'
      this.general_output.hg.value = '--'
      this.general_output.ht.value = '--'
    },
    clean5() {
      this.general_input.lam.value = ''
      this.general_input.F.value = ''
      this.general_input.V.value = ''
      this.general_input.nu.value = 0.3

      this.general_output.h0.value = '--'
      this.general_output.h_h0.value = '--'
      this.general_output.g1_g0.value = '--'
      this.general_output.K.value = '--'
      this.general_output.T.value = '--'
      this.general_output.Y.value = '--'
      this.general_output.U.value = '--'
      this.general_output.Z.value = '--'
      this.general_output.e_.value = '--'
      this.general_output.L.value = '--'
      this.general_output.B1.value = '--'
    }
  }
}
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
