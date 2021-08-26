<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>垫片参数（{{ general_input.gasket_materials_name.value }}）</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.DGO"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.DGI"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.EG"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.y"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.m"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.N)">{{
                      general_output.N.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.b0)">{{
                      general_output.b0.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.b)">{{
                      general_output.b.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.DG)">{{
                      general_output.DG.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓参数（{{ general_input.bolt_materials_name.value }}）</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.dB"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Dpb"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.f"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.f_"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.n"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.r)">{{
                      general_output.r.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Dee)">{{
                      general_output.Dee.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Rma)">{{
                      general_output.Rma.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.KI)">{{
                      general_output.KI.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Sb)">{{
                      general_output.Sb.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.n_Sb)">{{
                      general_output.n_Sb.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰参数（{{ general_input.flange_materials_name.value }}）</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Do"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Di"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Db"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_f"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.DG" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰形状系数</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_0" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_1" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Di" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Do" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.h" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="5">
                  <el-descriptions-item :label="Label(general_output.g0)">{{
                      general_output.g0.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.g1)">{{
                      general_output.g1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.h_shape)">{{
                      general_output.h_shape.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.B)">{{
                      general_output.B.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.h0)">{{
                      general_output.h0.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.h_h0)">{{
                      general_output.h_h0.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.delta_1_0)">{{
                      general_output.delta_1_0.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.A_factor)">{{
                      general_output.A_factor.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C)">{{
                      general_output.C.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C1)">{{
                      general_output.C1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C2)">{{
                      general_output.C2.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C3)">{{
                      general_output.C3.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C4)">{{
                      general_output.C4.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C5)">{{
                      general_output.C5.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C6)">{{
                      general_output.C6.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C7)">{{
                      general_output.C7.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C8)">{{
                      general_output.C8.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C9)">{{
                      general_output.C9.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C10)">{{
                      general_output.C10.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C11)">{{
                      general_output.C11.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C12)">{{
                      general_output.C12.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C13)">{{
                      general_output.C13.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C14)">{{
                      general_output.C14.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C15)">{{
                      general_output.C15.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C16)">{{
                      general_output.C16.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C17)">{{
                      general_output.C17.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C18)">{{
                      general_output.C18.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C19)">{{
                      general_output.C19.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C20)">{{
                      general_output.C20.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C21)">{{
                      general_output.C21.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C22)">{{
                      general_output.C22.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C23)">{{
                      general_output.C23.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C24)">{{
                      general_output.C24.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C25)">{{
                      general_output.C25.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C26)">{{
                      general_output.C26.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C27)">{{
                      general_output.C27.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C28)">{{
                      general_output.C28.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C29)">{{
                      general_output.C29.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C30)">{{
                      general_output.C30.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C31)">{{
                      general_output.C31.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C32)">{{
                      general_output.C32.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C33)">{{
                      general_output.C33.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C34)">{{
                      general_output.C34.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C35)">{{
                      general_output.C35.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C36)">{{
                      general_output.C36.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.C37)">{{
                      general_output.C37.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E1)">{{
                      general_output.E1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E2)">{{
                      general_output.E2.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E3)">{{
                      general_output.E3.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E4)">{{
                      general_output.E4.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E5)">{{
                      general_output.E5.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.E6)">{{
                      general_output.E6.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算K、T、U、V、Y</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.A_diameter)">{{
                      general_output.A_diameter.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.K)">{{
                      general_output.K.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.T_factor)">{{
                      general_output.T_factor.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.U)">{{
                      general_output.U.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Y)">{{
                      general_output.Y.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Z)">{{
                      general_output.Z.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算FI、VI、f（仅适用于整体法兰）</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.FI)">{{
                      general_output.FI.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.VI)">{{
                      general_output.VI.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.f_factor)">{{
                      general_output.f_factor.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
        <el-form>
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
            <el-image :src="img_compute" :preview-src-list="[img_compute]">
            </el-image>
            <span class="demonstration">GB150窄面法兰参数示意图</span>
          </div>
          <div class="el-image-block">
            <el-image :src="img_shape" :preview-src-list="[img_shape]">
            </el-image>
            <span class="demonstration">GB150窄面法兰形状系数示意图</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'GB150NarrowGeneral',
  props: ['general'],
  components: {
    CustomElInput
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      img_compute: require('@/assets/model_images/flange_gb150_narrow_compute.png'),
      img_shape: require('@/assets/model_images/flange_gb150_narrow_shape.png')
    }
  },
  computed: {
    Label() {
      return para => {
        return formatLabel(para)
      }
    }
  },
  methods: {
    calculate() {
      try {
        //----------------输入----------------//
        // 垫片参数
        const DGO = this.general_input.DGO.value
        const DGI = this.general_input.DGI.value
        const EG = this.general_input.EG.value
        const y = this.general_input.y.value
        const m = this.general_input.m.value

        // 螺栓参数
        const dB = this.general_input.dB.value
        const P = this.general_input.P.value
        const Dpb = this.general_input.Dpb.value
        const f = this.general_input.f.value
        const f_ = this.general_input.f_.value
        const n = this.general_input.n.value

        // 法兰参数
        const Do = this.general_input.Do.value
        const Di = this.general_input.Di.value
        const Db = this.general_input.Db.value
        const delta_f = this.general_input.delta_f.value
        const delta_0 = this.general_input.delta_0.value
        const delta_1 = this.general_input.delta_1.value
        const h = this.general_input.h.value

        //----------------输出----------------//
        // 垫片参数
        const N = (DGO - DGI) / 2
        const b0 = N / 2
        const b = b0 > 6.4 ? 2.53 * sqrt(b0) : b0
        const DG = b0 > 6.4 ? DGO - 2 * b : (DGO + DGI) / 2

        // 螺栓参数
        const r = (dB - 0.6495 * P) / 2
        const Dee = dB * 1.5
        const Rma = (Dee + Dpb) / 4
        const KI = P / (2 * pi) + f * r + f_ * Rma
        const Sb = pi / 4 * pow(dB - 1.2268 * P, 2)
        const n_Sb = n * Sb

        const g0 = delta_0
        const g1 = delta_1
        const h_shape = h
        const B = Di
        const h0 = sqrt(B * g0)
        const h_h0 = h_shape / h0
        const delta_1_0 = g1 / g0
        const A_factor = delta_1_0 - 1
        const C = 43.68 * pow(h_h0, 4)
        const C1 = 1 / 3 + A_factor / 12
        const C2 = 5 / 42 + 17 * A_factor / 336
        const C3 = 1 / 210 + A_factor / 360
        const C4 = 11 / 360 + 59 * A_factor / 5040 + (1 + 3 * A_factor) / C
        const C5 = 1 / 90 + 5 * A_factor / 1008 - pow(1 + A_factor, 3) / C
        const C6 = 1 / 120 + 17 * A_factor / 5040 + 1 / C
        const C7 = 215 / 2772 + 51 * A_factor / 1232 + (60 / 7 + 225 * A_factor / 14 + 75 * pow(A_factor, 2) / 7 + 5 * pow(A_factor, 3) / 2) / C
        const C8 = 31 / 6930 + 128 * A_factor / 45045 + (6 / 7 + 15 * A_factor / 7 + 12 * pow(A_factor, 2) / 7 + 5 * pow(A_factor, 3) / 11) / C
        const C9 = 533 / 30240 + 653 * A_factor / 73920 + (1 / 2 + 33 * A_factor / 14 + 39 * pow(A_factor, 2) / 28 + 25 * pow(A_factor, 3) / 84) / C
        const C10 = 29 / 3780 + 3 * A_factor / 704 - (1 / 2 + 33 * A_factor / 14 + 81 * pow(A_factor, 2) / 28 + 13 * pow(A_factor, 3) / 12) / C
        const C11 = 31 / 6048 + 1763 * A_factor / 665280 + (1 / 2 + 6 * A_factor / 7 + 15 * pow(A_factor, 2) / 28 + 5 * pow(A_factor, 3) / 42) / C
        const C12 = 1 / 2925 + 71 * A_factor / 300300 + (8 / 35 + 18 * A_factor / 35 + 156 * pow(A_factor, 2) / 385 + 6 * pow(A_factor, 3) / 55) / C
        const C13 = 761 / 831600 + 937 * A_factor / 1663200 + (1 / 35 + 6 * A_factor / 35 + 11 * pow(A_factor, 2) / 70 + 3 * pow(A_factor, 3) / 70) / C
        const C14 = 197 / 415800 + 103 * A_factor / 332640 - (1 / 35 + 6 * A_factor / 35 + 17 * pow(A_factor, 2) / 70 + pow(A_factor, 3) / 10) / C
        const C15 = 233 / 831600 + 97 * A_factor / 554400 + (1 / 35 + 3 * A_factor / 35 + pow(A_factor, 2) / 14 + 2 * pow(A_factor, 3) / 105) / C
        const C16 = C1 * C7 * C12 + C2 * C8 * C3 + C3 * C8 * C2 - (pow(C3, 2) * C7 + pow(C8, 2) * C1 + pow(C2, 2) * C12)
        const C17 = (C4 * C7 * C12 + C2 * C8 * C13 + C3 * C8 * C9 - (C13 * C7 * C3 + pow(C8, 2) * C4 + C12 * C2 * C9)) / C16
        const C18 = (C5 * C7 * C12 + C2 * C8 * C14 + C3 * C8 * C10 - (C14 * C7 * C3 + pow(C8, 2) * C5 + C12 * C2 * C10)) / C16
        const C19 = (C6 * C7 * C12 + C2 * C8 * C15 + C3 * C8 * C11 - (C15 * C7 * C3 + pow(C8, 2) * C6 + C12 * C2 * C11)) / C16
        const C20 = (C1 * C9 * C12 + C4 * C8 * C3 + C3 * C13 * C2 - (pow(C3, 2) * C9 + C13 * C8 * C1 + C12 * C4 * C2)) / C16
        const C21 = (C1 * C10 * C12 + C5 * C8 * C3 + C3 * C14 * C2 - (pow(C3, 2) * C10 + C14 * C8 * C1 + C12 * C5 * C2)) / C16
        const C22 = (C1 * C11 * C12 + C6 * C8 * C3 + C3 * C15 * C2 - (pow(C3, 2) * C11 + C15 * C8 * C1 + C12 * C6 * C2)) / C16
        const C23 = (C1 * C7 * C13 + C2 * C9 * C3 + C4 * C8 * C2 - (C3 * C7 * C4 + C8 * C9 * C1 + pow(C2, 2) * C13)) / C16
        const C24 = (C1 * C7 * C14 + C2 * C10 * C3 + C5 * C8 * C2 - (C3 * C7 * C5 + C8 * C10 * C1 + pow(C2, 2) * C14)) / C16
        const C25 = (C1 * C7 * C15 + C2 * C11 * C3 + C6 * C8 * C2 - (C3 * C7 * C6 + C8 * C11 * C1 + pow(C2, 2) * C15)) / C16
        const C26 = -sqrt(sqrt(C / 4))
        const C27 = C20 - C17 - 5 / 12 + C17 * C26
        const C28 = C22 - C19 - 1 / 12 + C19 * C26
        const C29 = -sqrt(C / 4)
        const C30 = -pow(C / 4, 0.75)
        const C31 = 3 * A_factor / 2 - C17 * C30
        const C32 = 1 / 2 - C19 * C30
        const C33 = 0.5 * C26 * C32 + C28 * C31 * C29 - (0.5 * C30 * C28 + C32 * C27 * C29)
        const C34 = 1 / 12 + C18 - C21 - C18 * C26
        const C35 = C18 * C30
        const C36 = (C28 * C35 * C29 - C32 * C34 * C29) / C33
        const C37 = (0.5 * C26 * C35 + C34 * C31 * C29 - (0.5 * C30 * C34 + C35 * C27 * C29)) / C33
        const E1 = C17 * C36 + C18 + C19 * C37
        const E2 = C20 * C36 + C21 + C22 * C37
        const E3 = C23 * C36 + C24 + C25 * C37
        const E4 = 1 / 4 + C37 / 12 + C36 / 4 - E3 / 5 - 3 * E2 / 2 - E1
        const E5 = E1 * (0.5 + A_factor / 6) + E2 * (0.25 + 11 * A_factor / 84) + E3 * (1 / 70 + A_factor / 105)
        const E6 = E5 - C36 * (7 / 120 + A_factor / 36 + 3 * A_factor / C) - 1 / 40 - A_factor / 72 - C37 * (1 / 60 + A_factor / 120 + 1 / C)

        const A_diameter = Do
        const K = A_diameter / B
        const T_factor = (pow(K, 2) * (1 + 8.55246 * log(K, 10)) - 1) / ((1.0472 + 1.9448 * pow(K, 2)) * (K - 1))
        const U = (pow(K, 2) * (1 + 8.55246 * log(K, 10)) - 1) / (1.36136 * (pow(K, 2) - 1) * (K - 1))
        const Y = (0.66845 + 5.7169 * (pow(K, 2) * log(K, 10)) / (pow(K, 2) - 1)) / (K - 1)
        const Z = (pow(K, 2) + 1) / (pow(K, 2) - 1)
        const FI = delta_1_0 === 1 ? 0.90892 : -E6 / (pow(C / 2.74, 0.25) * pow(1 + A_factor, 3) / C)
        const VI = delta_1_0 === 1 ? 0.550103 : E4 / (pow(2.73 / C, 0.25) * pow(1 + A_factor, 3))
        const f_factor = delta_1_0 === 1 ? 1 : C36 / (1 + A_factor)


        this.general_output.N.value = round(N, precision)
        this.general_output.b0.value = round(b0, precision)
        this.general_output.b.value = round(b, precision)
        this.general_output.DG.value = round(DG, precision)

        this.general_output.r.value = round(r, precision)
        this.general_output.Dee.value = round(Dee, precision)
        this.general_output.Rma.value = round(Rma, precision)
        this.general_output.KI.value = round(KI, precision)
        this.general_output.Sb.value = round(Sb, precision)
        this.general_output.n_Sb.value = round(n_Sb, precision)

        this.general_output.g0.value = round(g0, precision)
        this.general_output.g1.value = round(g1, precision)
        this.general_output.h_shape.value = round(h_shape, precision)
        this.general_output.B.value = round(B, precision)
        this.general_output.h0.value = round(h0, precision)
        this.general_output.h_h0.value = round(h_h0, precision)
        this.general_output.delta_1_0.value = round(delta_1_0, precision)
        this.general_output.A_factor.value = round(A_factor, precision)
        this.general_output.C.value = round(C, precision)
        this.general_output.C1.value = round(C1, precision)
        this.general_output.C2.value = round(C2, precision)
        this.general_output.C3.value = round(C3, precision)
        this.general_output.C4.value = round(C4, precision)
        this.general_output.C5.value = round(C5, precision)
        this.general_output.C6.value = round(C6, precision)
        this.general_output.C7.value = round(C7, precision)
        this.general_output.C8.value = round(C8, precision)
        this.general_output.C9.value = round(C9, precision)
        this.general_output.C10.value = round(C10, precision)
        this.general_output.C11.value = round(C11, precision)
        this.general_output.C12.value = round(C12, precision)
        this.general_output.C13.value = round(C13, precision)
        this.general_output.C14.value = round(C14, precision)
        this.general_output.C15.value = round(C15, precision)
        this.general_output.C16.value = round(C16, precision)
        this.general_output.C17.value = round(C17, precision)
        this.general_output.C18.value = round(C18, precision)
        this.general_output.C19.value = round(C19, precision)
        this.general_output.C20.value = round(C20, precision)
        this.general_output.C21.value = round(C21, precision)
        this.general_output.C22.value = round(C22, precision)
        this.general_output.C23.value = round(C23, precision)
        this.general_output.C24.value = round(C24, precision)
        this.general_output.C25.value = round(C25, precision)
        this.general_output.C26.value = round(C26, precision)
        this.general_output.C27.value = round(C27, precision)
        this.general_output.C28.value = round(C28, precision)
        this.general_output.C29.value = round(C29, precision)
        this.general_output.C30.value = round(C30, precision)
        this.general_output.C31.value = round(C31, precision)
        this.general_output.C32.value = round(C32, precision)
        this.general_output.C33.value = round(C33, precision)
        this.general_output.C34.value = round(C34, precision)
        this.general_output.C35.value = round(C35, precision)
        this.general_output.C36.value = round(C36, precision)
        this.general_output.C37.value = round(C37, precision)
        this.general_output.E1.value = round(E1, precision)
        this.general_output.E2.value = round(E2, precision)
        this.general_output.E3.value = round(E3, precision)
        this.general_output.E4.value = round(E4, precision)
        this.general_output.E5.value = round(E5, precision)
        this.general_output.E6.value = round(E6, precision)

        this.general_output.A_diameter.value = round(A_diameter, precision)
        this.general_output.K.value = round(K, precision)
        this.general_output.T_factor.value = round(T_factor, precision)
        this.general_output.U.value = round(U, precision)
        this.general_output.Y.value = round(Y, precision)
        this.general_output.Z.value = round(Z, precision)
        this.general_output.FI.value = round(FI, precision)
        this.general_output.VI.value = round(VI, precision)
        this.general_output.f_factor.value = round(f_factor, precision)

      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.DGO.value = ''
      this.general_input.DGI.value = ''
      this.general_input.EG.value = ''
      this.general_input.y.value = ''
      this.general_input.m.value = ''

      this.general_output.N.value = '--'
      this.general_output.b0.value = '--'
      this.general_output.b.value = '--'
      this.general_output.DG.value = '--'
    },
    clean2() {
      this.general_input.dB.value = ''
      this.general_input.P.value = ''
      this.general_input.Dpb.value = ''
      this.general_input.f.value = ''
      this.general_input.f_.value = ''
      this.general_input.n.value = ''

      this.general_output.r.value = '--'
      this.general_output.Dee.value = '--'
      this.general_output.Rma.value = '--'
      this.general_output.KI.value = '--'
      this.general_output.Sb.value = '--'
      this.general_output.n_Sb.value = '--'
    },
    clean3() {
      this.general_input.Do.value = ''
      this.general_input.Di.value = ''
      this.general_input.Db.value = ''
      this.general_input.delta_f.value = ''
      this.general_input.delta_0.value = ''
      this.general_input.delta_1.value = ''
      this.general_input.h.value = ''
    },
    clean4() {
      this.general_output.g0.value = '--'
      this.general_output.g1.value = '--'
      this.general_output.h_shape.value = '--'
      this.general_output.B.value = '--'
      this.general_output.h0.value = '--'
      this.general_output.h_h0.value = '--'
      this.general_output.delta_1_0.value = '--'
      this.general_output.A_factor.value = '--'
      this.general_output.C.value = '--'
      this.general_output.C1.value = '--'
      this.general_output.C2.value = '--'
      this.general_output.C3.value = '--'
      this.general_output.C4.value = '--'
      this.general_output.C5.value = '--'
      this.general_output.C6.value = '--'
      this.general_output.C7.value = '--'
      this.general_output.C8.value = '--'
      this.general_output.C9.value = '--'
      this.general_output.C10.value = '--'
      this.general_output.C11.value = '--'
      this.general_output.C12.value = '--'
      this.general_output.C13.value = '--'
      this.general_output.C14.value = '--'
      this.general_output.C15.value = '--'
      this.general_output.C16.value = '--'
      this.general_output.C17.value = '--'
      this.general_output.C18.value = '--'
      this.general_output.C19.value = '--'
      this.general_output.C20.value = '--'
      this.general_output.C21.value = '--'
      this.general_output.C22.value = '--'
      this.general_output.C23.value = '--'
      this.general_output.C24.value = '--'
      this.general_output.C25.value = '--'
      this.general_output.C26.value = '--'
      this.general_output.C27.value = '--'
      this.general_output.C28.value = '--'
      this.general_output.C29.value = '--'
      this.general_output.C30.value = '--'
      this.general_output.C31.value = '--'
      this.general_output.C32.value = '--'
      this.general_output.C33.value = '--'
      this.general_output.C34.value = '--'
      this.general_output.C35.value = '--'
      this.general_output.C36.value = '--'
      this.general_output.C37.value = '--'
      this.general_output.E1.value = '--'
      this.general_output.E2.value = '--'
      this.general_output.E3.value = '--'
      this.general_output.E4.value = '--'
      this.general_output.E5.value = '--'
      this.general_output.E6.value = '--'

      this.general_output.A_diameter.value = '--'
      this.general_output.K.value = '--'
      this.general_output.T_factor.value = '--'
      this.general_output.U.value = '--'
      this.general_output.Y.value = '--'
      this.general_output.Z.value = '--'
      this.general_output.FI.value = '--'
      this.general_output.VI.value = '--'
      this.general_output.f_factor.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
    }
  }
}
</script>
