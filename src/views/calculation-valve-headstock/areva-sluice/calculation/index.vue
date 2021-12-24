<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数（系统与结构参数）</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_1"
                                 :disabled="!general_input.miu_1.is_manual"></custom-el-input>
              </el-col>
              <el-col :span="18">
                <el-form-item label="材料类型" size="small" :inline="true">
                  <el-radio-group v-model="general_input.miu_1.selection" @change="miu1Change">
                    <el-radio :label="general_input.miu_1.items[0].selection">{{
                        general_input.miu_1.items[0].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.miu_1.items[1].selection">{{
                        general_input.miu_1.items[1].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.miu_1.items[2].selection">{{
                        general_input.miu_1.items[2].meaning
                      }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.theta"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Ds"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Dt" @custom-change="DtChange"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Pfonc"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Dtcm" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.gc"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.hcm"
                                 :disabled="general_input.hcm.is_calculated"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <el-form-item label="选取方式" size="small" :inline="true">
                  <el-radio-group v-model="general_input.hcm.is_calculated" @change="hcmIsCalculatedChange">
                    <el-radio :label="true">公式计算</el-radio>
                    <el-radio :label="false">手动填写</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.PMS"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.ra"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.ri"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :span="6">
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_st"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.R"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.fD"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">参考值</el-divider>
            <el-row :gutter="10">
              <el-col :span="12" :offset="6">
                <table class="custom-table-in-card">
                  <tr>
                    <td width="20%">Packing material</td>
                    <td width="40%">Friction coefficient μst packing/stem</td>
                    <td width="20%">R-value</td>
                    <td width="20%">sealing factor fD</td>
                  </tr>
                  <tr>
                    <td>pure graphite</td>
                    <td>0.18</td>
                    <td>0.55</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>PTFE-silk</td>
                    <td>0.06</td>
                    <td>0.80</td>
                    <td>1.7</td>
                  </tr>
                </table>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.hcm)">{{
                      general_output.hcm.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.S)">{{
                      general_output.S.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.PPE)">{{
                      general_output.PPE.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.FB)">{{
                      general_output.FB.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数（螺纹与系数参数）</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.D"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.PP"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Lead"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Nbf"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_2"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_3"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.RMB"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.beta"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.RCAD"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ma"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.gama"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item size="small" :inline="true">
                  <el-radio-group v-model="general_input.with_gear.value" @change="withGearChange">
                    <el-radio :label="general_input.with_gear.items[0].selection">{{
                        general_input.with_gear.items[0].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.with_gear.items[1].selection">{{
                        general_input.with_gear.items[1].meaning
                      }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.i" :disabled="general_input.with_gear.value===2"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.eta" :disabled="general_input.with_gear.value===2"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.Rm)">{{
                      general_output.Rm.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.alpha)">{{
                      general_output.alpha.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.tan_alpha)">{{
                      general_output.tan_alpha.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>中间过程参数</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Q4" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Q5"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Q6"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.Tf)">{{
                      general_output.Tf.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Q1)">{{
                      general_output.Q1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Q2)">{{
                      general_output.Q2.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Q3_1)">{{
                      general_output.Q3_1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Q3_2)">{{
                      general_output.Q3_2.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>结果数据</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_output.Q3_1" :disabled="true"
                                 v-if="general_input.Q3_type.value===1"></custom-el-input>
                <custom-el-input :para="general_output.Q3_2" :disabled="true" v-else></custom-el-input>
              </el-col>
              <el-col :span="18">
                <el-form-item :label="general_input.Q3_type.meaning" label-width="250px" size="small" :inline="true">
                  <el-radio-group v-model="general_input.Q3_type.value">
                    <el-radio :label="general_input.Q3_type.items[0].selection">{{
                        general_input.Q3_type.items[0].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.Q3_type.items[1].selection">{{
                        general_input.Q3_type.items[1].meaning
                      }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.C)">{{
                      general_output.C.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Cma)">{{
                      general_output.Cma.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.CRT)">{{
                      general_output.CRT.value
                    }}
                  </el-descriptions-item>
                  <!--                  <el-descriptions-item :label="Label(general_output.Cma_without_gear)">{{-->
                  <!--                      general_output.Cma_without_gear.value-->
                  <!--                    }}-->
                  <!--                  </el-descriptions-item>-->
                  <!--                  <el-descriptions-item :label="Label(general_output.Cma_with_gear)">{{-->
                  <!--                      general_output.Cma_with_gear.value-->
                  <!--                    }}-->
                  <!--                  </el-descriptions-item>-->
                  <!--                  <el-descriptions-item :label="Label(general_output.CRT_without_gear)">{{-->
                  <!--                      general_output.CRT_without_gear.value-->
                  <!--                    }}-->
                  <!--                  </el-descriptions-item>-->
                  <!--                  <el-descriptions-item :label="Label(general_output.CRT_with_gear)">{{-->
                  <!--                      general_output.CRT_with_gear.value-->
                  <!--                    }}-->
                  <!--                  </el-descriptions-item>-->
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
        <el-form>
          <el-row :gutter="10">
            <el-col :span="6" :offset="9">
              <el-form-item align="center">
                <el-button icon="el-icon-video-play" type="primary" @click="calculate" size="medium">计算</el-button>
                <el-button icon="el-icon-delete" @click="cleanAll" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <case-dialog ref="caseDialog" :parameter="parameter"
                           @update="data => this.general_input=data"
                           @remove="data => this.general_input=data"
                           @clear-output="data => this.general_output=data"></case-dialog>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="4">
        <!--        <div class="demo-image__placeholder">-->
        <!--          <div class="el-image-block">-->
        <!--            <el-image :src="img_compute" :preview-src-list="[img_compute]">-->
        <!--            </el-image>-->
        <!--            <span class="demonstration">GB150窄面法兰参数示意图</span>-->
        <!--          </div>-->
        <!--          <div class="el-image-block">-->
        <!--            <el-image :src="img_shape" :preview-src-list="[img_shape]">-->
        <!--            </el-image>-->
        <!--            <span class="demonstration">GB150窄面法兰形状系数示意图</span>-->
        <!--          </div>-->
        <!--        </div>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import CaseDialog from '@/components/CaseDialog'
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'AREVASluiceCalculation',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

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
        // 系统与结构参数
        const miu_1 = this.general_input.miu_1.value
        const theta = this.general_input.theta.value
        const Ds = this.general_input.Ds.value
        const delta_P = this.general_input.delta_P.value
        const Dt = this.general_input.Dt.value
        const Pfonc = this.general_input.Pfonc.value
        const Dtcm = this.general_input.Dtcm.value
        const gc = this.general_input.gc.value
        const hcm_manual = this.general_input.hcm.value
        const PMS = this.general_input.PMS.value
        const ra = this.general_input.ra.value
        const ri = this.general_input.ri.value
        const h = this.general_input.h.value
        const miu_st = this.general_input.miu_st.value
        const R = this.general_input.R.value
        const fD = this.general_input.fD.value

        // 螺纹与系数参数
        const D = this.general_input.D.value
        const PP = this.general_input.PP.value
        const Lead = this.general_input.Lead.value
        const Nbf = this.general_input.Nbf.value
        const miu_2 = this.general_input.miu_2.value
        const miu_3 = this.general_input.miu_3.value
        const RMB = this.general_input.RMB.value
        const beta = this.general_input.beta.value
        const RCAD = this.general_input.RCAD.value
        const Ma = this.general_input.Ma.value
        const gama = this.general_input.gama.value
        const i = this.general_input.i.value
        const eta = this.general_input.eta.value

        // 中间过程参数
        const Q3_type = this.general_input.Q3_type.value
        const Q4 = this.general_input.Q4.value
        const Q5 = this.general_input.Q5.value
        const Q6 = this.general_input.Q6.value

        // 结果数据
        const with_gear = this.general_input.with_gear.value

        //----------------输出----------------//
        // 系统与结构参数
        let hcm
        const hcm_calculate = Dtcm + gc
        if (this.general_input.hcm.is_calculated) {
          hcm = hcm_calculate
          this.general_input.hcm.value = round(hcm, precision)
        } else {
          hcm = hcm_manual
        }
        const S = pi * Dtcm * hcm
        const PPE = 1.5 * PMS
        const FB = max(PMS * 0.1, 5) * pi * (pow(ra, 2) - pow(ri, 2)) * fD // 单位换算：MPa * mm2 = N

        // 螺纹与系数参数
        const Rm = 0.5 * (D - 0.5 * PP)
        // const tan_alpha = Lead / (2 * pi * Rm) * (Nbf * PP) / (2 * pi * Rm)
        const tan_alpha = Lead / (2 * pi * Rm)
        const alpha = atan(tan_alpha) * 180 / pi

        // 过程参数
        const Q1 = miu_1 / (cos(theta * pi / 180) - miu_1 * sin(theta * pi / 180)) * (pi * pow(Ds, 2)) / (4 * cos(theta * pi / 180)) * delta_P
        const Q2 = pi * pow(Dt, 2) / 4 * Pfonc
        const Q3_1 = 1.2 * S * PPE
        // const Q3_2 = FB * ri / (ra + ri) * (1 - pow(e, -2 * miu_st * R * h / (ra - ri)))
        const Q3_2 = FB / 2 * (1 - pow(e, -2 * miu_st * R * h / (ra - ri)))
        const Tf = (tan_alpha + miu_2 / cos(beta * pi / 180)) / (1 - tan_alpha * miu_2 / cos(beta * pi / 180)) * Rm + miu_3 * RMB

        // 结果数据
        let Q3
        if (Q3_type === 1) {
          Q3 = Q3_1
        } else {
          Q3 = Q3_2
        }
        const C = (Q1 + Q2 + Q3 - Q5 + Q6) * Tf / RCAD / 1000
        const Cma_without_gear = C * Ma
        const Cma_with_gear = C * Ma / (i * eta)
        const CRT_without_gear = (1 + gama / 100) * Cma_without_gear
        const CRT_with_gear = (1 + gama / 100) * Cma_with_gear
        let Cma, CRT
        if (with_gear === 1) {
          Cma = Cma_with_gear
          CRT = CRT_with_gear
        } else {
          Cma = Cma_without_gear
          CRT = CRT_without_gear
        }

        this.general_output.hcm.value = round(hcm, precision)
        this.general_output.S.value = round(S, precision)
        this.general_output.PPE.value = round(PPE, precision)
        this.general_output.FB.value = round(FB, precision)

        this.general_output.Rm.value = round(Rm, precision)
        this.general_output.alpha.value = round(alpha, precision)
        this.general_output.tan_alpha.value = round(tan_alpha, precision)

        this.general_output.Q1.value = round(Q1, precision)
        this.general_output.Q2.value = round(Q2, precision)
        this.general_output.Q3_1.value = round(Q3_1, precision)
        this.general_output.Q3_2.value = round(Q3_2, precision)
        this.general_output.Tf.value = round(Tf, precision)

        this.general_output.C.value = round(C, precision)
        // this.general_output.Cma_without_gear.value = round(Cma_without_gear, precision)
        // this.general_output.Cma_with_gear.value = round(Cma_with_gear, precision)
        // this.general_output.CRT_without_gear.value = round(CRT_without_gear, precision)
        // this.general_output.CRT_with_gear.value = round(CRT_with_gear, precision)
        this.general_output.Cma.value = round(Cma, precision)
        this.general_output.CRT.value = round(CRT, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    miu1Change(val) {
      switch (val) {
        case 0:
          this.general_input.miu_1.is_manual = false
          this.general_input.miu_1.value = this.general_input.miu_1.items[0].value
          break
        case 1:
          this.general_input.miu_1.is_manual = false
          this.general_input.miu_1.value = this.general_input.miu_1.items[1].value
          break
        case 2:
          this.general_input.miu_1.is_manual = true
          this.general_input.miu_1.value = this.general_input.miu_1.items[2].value
          break
      }
    },
    clean1() {
      this.general_input.miu_1.value = 0.4
      this.general_input.miu_1.is_manual = false
      this.general_input.miu_1.selection = 0
      this.general_input.theta.value = ''
      this.general_input.Ds.value = ''
      this.general_input.delta_P.value = ''
      this.general_input.Dt.value = ''
      this.general_input.Pfonc.value = ''
      this.general_input.Dtcm.value = ''
      this.general_input.gc.value = ''
      this.general_input.hcm.value = ''
      this.general_input.hcm.is_calculated = true
      this.general_input.PMS.value = ''
      this.general_input.ra.value = ''
      this.general_input.ri.value = ''
      this.general_input.h.value = ''
      this.general_input.miu_st.value = ''
      this.general_input.R.value = ''
      this.general_input.fD.value = ''

      this.general_output.hcm.value = '--'
      this.general_output.S.value = '--'
      this.general_output.PPE.value = '--'
      this.general_output.FB.value = '--'
    },
    clean2() {
      this.general_input.D.value = ''
      this.general_input.PP.value = ''
      this.general_input.Lead.value = ''
      this.general_input.Nbf.value = ''
      this.general_input.miu_2.value = ''
      this.general_input.miu_3.value = 0
      this.general_input.RMB.value = ''
      this.general_input.beta.value = ''
      this.general_input.RCAD.value = ''
      this.general_input.Ma.value = ''
      this.general_input.gama.value = 10
      this.general_input.i.value = ''
      this.general_input.eta.value = ''

      this.general_output.Rm.value = '--'
      this.general_output.alpha.value = '--'
      this.general_output.tan_alpha.value = '--'
    },
    clean3() {
      this.general_input.Q3_type.value = 1
      this.general_input.Q4.value = 0
      this.general_input.Q5.value = 0
      this.general_input.Q6.value = 0

      this.general_output.Q1.value = '--'
      this.general_output.Q2.value = '--'
      this.general_output.Q3_1.value = '--'
      this.general_output.Q3_2.value = '--'
      this.general_output.Tf.value = '--'
    },
    clean4() {
      this.general_input.with_gear = 1

      this.general_output.C.value = '--'
      // this.general_output.Cma_without_gear.value = '--'
      // this.general_output.Cma_with_gear.value = '--'
      // this.general_output.CRT_without_gear.value = '--'
      // this.general_output.CRT_with_gear.value = '--'
      this.general_output.Cma.value = '--'
      this.general_output.CRT.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
    },
    hcmIsCalculatedChange(val) {
      if (val) {
        this.general_input.hcm.value = this.general_output.hcm.value
      }
    },
    DtChange(val) {
      console.log(val)
      this.general_input.Dtcm.value = round(val / 10, precision)
    },
    withGearChange(val){
      if (val === 2){
        this.general_input.i.value = 1
        this.general_input.eta.value = 1
      }
    }
  }
}
</script>
<style scoped>

.custom-table-in-card {
  width: 100%;
  font-size: 15px;
  border: 1px solid #DCDFE6;
  border-collapse: collapse;
  color: #606266;
}

td {
  border: 1px solid #DCDFE6;
  text-align: center;
  padding: 4px 6px;
}
</style>
