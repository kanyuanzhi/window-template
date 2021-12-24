<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰校核</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.P_stress" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.T_temperature" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_f"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_ft"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ef"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Eft"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.KI_factor"></custom-el-input>
              </el-col>
<!--              <el-col :span="6">-->
<!--                <custom-el-input label_width="120px" :para="general_input.KI_index_limit"></custom-el-input>-->
<!--              </el-col>-->
            </el-row>
            <el-divider class="custom-el-divider--horizontal">法兰计算参数</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.LD)">{{
                      general_output.LD.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.LG)">{{
                      general_output.LG.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.LT)">{{
                      general_output.LT.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.LA)">{{
                      general_output.LA.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="3">

                  <!--由法兰形状系数求得-->
                  <el-descriptions-item :label="Label(general_output.K)">{{
                      general_output.K.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.T_factor)">{{
                      general_output.T_factor.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Y)">{{
                      general_output.Y.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.U)">{{
                      general_output.U.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Z)">{{
                      general_output.Z.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.h0)">{{
                      general_output.h0.value
                    }}
                  </el-descriptions-item>
                  <!--由法兰形状系数求得-->

                  <el-descriptions-item :label="Label(general_output.FI_type)">{{
                      general_output.FI_type.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.VI_type)">{{
                      general_output.VI_type.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.f_factor_type)">{{
                      general_output.f_factor_type.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.e_)">{{
                      general_output.e_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Lam)">{{
                      general_output.Lam.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">设计工况</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Fsi)">{{
                      general_output.Fsi.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.FD)">{{
                      general_output.FD.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.F)">{{
                      general_output.F.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.FT)">{{
                      general_output.FT.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.FG)">{{
                      general_output.FG.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Mp)">{{
                      general_output.Mp.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Ma)">{{
                      general_output.Ma.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Mo)">{{
                      general_output.Mo.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Di1)">{{
                      general_output.Di1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Sigma_H)">{{
                      general_output.Sigma_H.value
                    }}
                  </el-descriptions-item>

                  <el-descriptions-item :label="Label(general_output.Sigma_R)">{{
                      general_output.Sigma_R.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Sigma_T)">{{
                      general_output.Sigma_T.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Sigma_H_R)">{{
                      general_output.Sigma_H_R.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Sigma_H_T)">{{
                      general_output.Sigma_H_T.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.KI_index)">{{
                      general_output.KI_index.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">校核结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="4">
                <check-template :para="general_output.Sigma_H"></check-template>
              </el-col>
              <el-col :span="4">
                <check-template :para="general_output.Sigma_R"></check-template>
              </el-col>
              <el-col :span="4">
                <check-template :para="general_output.Sigma_T"></check-template>
              </el-col>
              <el-col :span="4">
                <check-template :para="general_output.Sigma_H_R"></check-template>
              </el-col>
              <el-col :span="4">
                <check-template :para="general_output.Sigma_H_T"></check-template>
              </el-col>
              <el-col :span="4">
                <div class="div-item">{{ general_output.KI_index.label }}</div>
                <div class="div-item">值：{{ general_output.KI_index.value }}</div>
                <div class="div-item">限值：{{ general_input.KI_index_limit.value }}</div>
                <el-result :icon="Icon" :title="Title" subTitle="">
                </el-result>
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
import CaseDialog from '@/components/CaseDialog'
import CheckTemplate from './components/CheckTemplate'
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'BoltCheck',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CheckTemplate,
    CaseDialog
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
    },
    Title() {
      switch (this.general_input.T_.check_result) {
        case '--':
          return '待校核'
        case '通过':
          return '通过'
        case '不通过':
          return '不通过'
        default:
          return '待校核'
      }
    },
    Icon() {
      switch (this.general_input.T_.check_result) {
        case '--':
          return 'info'
        case '通过':
          return 'success'
        case '不通过':
          return 'error'
        default:
          return 'info'
      }
    }
  },
  methods: {
    calculate() {
      try {
        //----------------输入----------------//
        // 法兰参数
        const Db = this.general_input.Db.value
        const delta_f = this.general_input.delta_f.value
        const delta_0 = this.general_input.delta_0.value
        const delta_1 = this.general_input.delta_1.value
        const Di = this.general_input.Di.value
        const DG = this.general_output.DG.value
        if (DG === '--') {
          throw new Error([this.general_output.DG.meaning, this.general_output.DG.label, '未计算！'].join(' '))
        }
        // 法兰形状系数
        const T_factor = this.general_output.T_factor.value
        if (T_factor === '--') {
          throw new Error([this.general_output.T_factor.meaning, this.general_output.T_factor.label, '未计算！'].join(' '))
        }
        const Y = this.general_output.Y.value
        if (Y === '--') {
          throw new Error([this.general_output.Y.meaning, this.general_output.Y.label, '未计算！'].join(' '))
        }
        const U = this.general_output.U.value
        if (U === '--') {
          throw new Error([this.general_output.U.meaning, this.general_output.U.label, '未计算！'].join(' '))
        }
        const Z = this.general_output.Z.value
        if (Z === '--') {
          throw new Error([this.general_output.Z.meaning, this.general_output.Z.label, '未计算！'].join(' '))
        }
        const h0 = this.general_output.h0.value
        if (h0 === '--') {
          throw new Error([this.general_output.h0.meaning, this.general_output.h0.label, '未计算！'].join(' '))
        }
        const FI = this.general_output.FI.value
        if (FI === '--') {
          throw new Error([this.general_output.FI.meaning, this.general_output.FI.label, '未计算！'].join(' '))
        }
        const VI = this.general_output.VI.value
        if (VI === '--') {
          throw new Error([this.general_output.VI.meaning, this.general_output.VI.label, '未计算！'].join(' '))
        }
        const f_factor = this.general_output.f_factor.value
        if (f_factor === '--') {
          throw new Error([this.general_output.f_factor.meaning, this.general_output.f_factor.label, '未计算！'].join(' '))
        }

        // 螺栓参数
        const n = this.general_input.n.value

        const KI = this.general_output.KI.value
        if (KI === '--') {
          throw new Error([this.general_output.KI.meaning, this.general_output.KI.label, '未计算！'].join(' '))
        }

        // 螺栓紧固力矩计算参数
        const P_stress = this.general_input.P_stress.value
        const Eb = this.general_input.Eb.value
        const Ebt = this.general_input.Ebt.value
        const T_ = this.general_input.T_.value

        const F = this.general_output.F.value
        if (F === '--') {
          throw new Error([this.general_output.F.meaning, this.general_output.F.label, '未计算！'].join(' '))
        }

        // 设计工况
        const Sigma_f = this.general_input.Sigma_f.value
        const Sigma_ft = this.general_input.Sigma_ft.value
        const Ef = this.general_input.Ef.value
        const Eft = this.general_input.Eft.value
        const KI_factor = this.general_input.KI_factor.value
        const KI_index_limit = this.general_input.KI_index_limit.value

        //----------------输出----------------//
        // 法兰计算参数
        const LA = (Db - 2 * delta_1 - Di) / 2
        const LD = LA + 0.5 * delta_1
        const LG = (Db - DG) / 2
        const LT = (LA + delta_1 + LG) / 2

        const FI_type = FI
        const VI_type = VI
        const f_factor_type = f_factor
        const e_ = FI_type / h0
        const Lam = (delta_f * e_ + 1) / T_factor + VI_type * pow(delta_f, 3) / (U * h0 * pow(delta_0, 2))

        // 设计工况
        const Fsi = T_ * 1000 * n / KI

        const FD = pi / 4 * pow(Di, 2) * P_stress
        const FT = F - FD
        const FG = Fsi * Ebt / Eb - FD - FT
        const Mp = FD * LD + FT * LT + FG * LG
        const Ma = Fsi * LG * Sigma_ft / Sigma_f
        const Mo = max(Mp, Ma)
        const Di1 = Di >= 20 * delta_1 ? Di : (f_factor_type <= 1 ? Di + delta_1 : Di + delta_0)

        const Sigma_H = f_factor_type * Mo / (Lam * pow(delta_1, 2) * Di1)
        const Sigma_H_limit = 1.5 * Sigma_ft

        const Sigma_R = (1.33 * delta_f * e_ + 1) * Mo / (Lam * pow(delta_f, 2) * Di)
        const Sigma_R_limit = Sigma_ft

        const Sigma_T = Y * Mo / (pow(delta_f, 2) * Di) - Z * Sigma_R
        const Sigma_T_limit = Sigma_ft

        const Sigma_H_R = (Sigma_H + Sigma_R) / 2
        const Sigma_H_R_limit = Sigma_ft

        const Sigma_H_T = (Sigma_H + Sigma_T) / 2
        const Sigma_H_T_limit = Sigma_ft

        const KI_index = 52.14 * VI_type * Mo / (Lam * Eft * pow(delta_0, 2) * KI_factor * h0)


        this.general_output.LA.value = round(LA, precision)
        this.general_output.LD.value = round(LD, precision)
        this.general_output.LG.value = round(LG, precision)
        this.general_output.LT.value = round(LT, precision)
        this.general_output.FI_type.value = round(FI_type, precision)
        this.general_output.VI_type.value = round(VI_type, precision)
        this.general_output.f_factor_type.value = round(f_factor_type, precision)
        this.general_output.e_.value = round(e_, precision)
        this.general_output.Lam.value = round(Lam, precision)

        this.general_output.Fsi.value = round(Fsi, precision)
        this.general_output.FD.value = round(FD, precision)
        this.general_output.FT.value = round(FT, precision)
        this.general_output.FG.value = round(FG, precision)
        this.general_output.Mp.value = round(Mp, precision)
        this.general_output.Ma.value = round(Ma, precision)
        this.general_output.Mo.value = round(Mo, precision)
        this.general_output.Di1.value = round(Di1, precision)

        this.general_output.Sigma_H.value = round(Sigma_H, precision)
        this.general_output.Sigma_H.limit = round(Sigma_H_limit, precision)
        this.general_output.Sigma_H.check_result = this.check(Sigma_H, Sigma_H_limit)

        this.general_output.Sigma_R.value = round(Sigma_R, precision)
        this.general_output.Sigma_R.limit = round(Sigma_R_limit, precision)
        this.general_output.Sigma_R.check_result = this.check(Sigma_R, Sigma_R_limit)

        this.general_output.Sigma_T.value = round(Sigma_T, precision)
        this.general_output.Sigma_T.limit = round(Sigma_T_limit, precision)
        this.general_output.Sigma_T.check_result = this.check(Sigma_T, Sigma_T_limit)

        this.general_output.Sigma_H_R.value = round(Sigma_H_R, precision)
        this.general_output.Sigma_H_R.limit = round(Sigma_H_R_limit, precision)
        this.general_output.Sigma_H_R.check_result = this.check(Sigma_H_R, Sigma_H_R_limit)

        this.general_output.Sigma_H_T.value = round(Sigma_H_T, precision)
        this.general_output.Sigma_H_T.limit = round(Sigma_H_T_limit, precision)
        this.general_output.Sigma_H_T.check_result = this.check(Sigma_H_T, Sigma_H_T_limit)

        this.general_output.KI_index.value = round(KI_index, precision)
        this.general_output.KI_index.limit = KI_index_limit
        this.general_output.KI_index.check_result = this.check(KI_index, KI_index_limit)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    check(a, a_limit) {
      return a <= a_limit ? '通过' : '不通过'
    },
    clean1() {
      this.general_input.Sigma_f.value = ''
      this.general_input.Sigma_ft.value = ''
      this.general_input.Ef.value = ''
      this.general_input.Eft.value = ''
      this.general_input.KI_factor.value = 0.3
      this.general_input.KI_index_limit.value = 1

      this.general_output.LA.value = '--'
      this.general_output.LD.value = '--'
      this.general_output.LG.value = '--'
      this.general_output.LT.value = '--'
      this.general_output.FI_type.value = '--'
      this.general_output.VI_type.value = '--'
      this.general_output.f_factor_type.value = '--'
      this.general_output.e_.value = '--'
      this.general_output.Lam.value = '--'

      this.general_output.Fsi.value = '--'
      this.general_output.FD.value = '--'
      this.general_output.FT.value = '--'
      this.general_output.FG.value = '--'
      this.general_output.Mp.value = '--'
      this.general_output.Ma.value = '--'
      this.general_output.Mo.value = '--'
      this.general_output.Di1.value = '--'

      this.general_output.Sigma_H.value = '--'
      this.general_output.Sigma_H.limit = '--'
      this.general_output.Sigma_H.check_result = '--'

      this.general_output.Sigma_R.value = '--'
      this.general_output.Sigma_R.limit = '--'
      this.general_output.Sigma_R.check_result = '--'

      this.general_output.Sigma_T.value = '--'
      this.general_output.Sigma_T.limit = '--'
      this.general_output.Sigma_T.check_result = '--'

      this.general_output.Sigma_H_R.value = '--'
      this.general_output.Sigma_H_R.limit = '--'
      this.general_output.Sigma_H_R.check_result = '--'

      this.general_output.Sigma_H_T.value = '--'
      this.general_output.Sigma_H_T.limit = '--'
      this.general_output.Sigma_H_T.check_result = '--'

      this.general_output.KI_index.value = '--'
      this.general_output.KI_index.limit = 1
      this.general_output.KI_index.check_result = '--'
    },
    cleanAll() {
      this.clean1()
    }
  }
}
</script>

<style scoped>
.div-item {
  text-align: center;
  padding-bottom: 10px;
  color: #606266;
  font-size: 14px;
  font-weight: 400;
}
</style>
