<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓紧固力矩</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.y" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.m" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.b" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.DG" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.n" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.n_Sb" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_output.KI" :disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.P_stress"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.T_temperature"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_b"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_bt"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Eb"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ebt"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.T_"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.Fa)">{{
                      general_output.Fa.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Fp)">{{
                      general_output.Fp.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.F)">{{
                      general_output.F.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Wa)">{{
                      general_output.Wa.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Wp)">{{
                      general_output.Wp.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Aa)">{{
                      general_output.Aa.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Ap)">{{
                      general_output.Ap.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Am)">{{
                      general_output.Am.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Ab)">{{
                      general_output.Ab.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.W)">{{
                      general_output.W.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.W_)">{{
                      general_output.W_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.T)">
                    {{ [general_output.T.value_1, general_output.T.value_2].join('~') }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">校核结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <div class="div-item">{{ general_input.T_.label }}</div>
                <div class="div-item">值：{{ general_input.T_.value }}</div>
                <div class="div-item">限值：{{[general_output.T.value_1, general_output.T.value_2].join('~') }}</div>
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
      <!--      <el-col :span="4">-->
      <!--        <div class="demo-image__placeholder">-->
      <!--          <div class="el-image-block">-->
      <!--            <el-image :src="img_plate" :preview-src-list="[img_plate]">-->
      <!--            </el-image>-->
      <!--            <span class="demonstration">GB150宽面板式法兰示意图</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import CaseDialog from '@/components/CaseDialog'
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
    CaseDialog
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      img_plate: require('@/assets/model_images/flange_gb150_wide_plate.png')
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
        // 垫片参数
        const y = this.general_input.y.value
        const m = this.general_input.m.value

        const b = this.general_output.b.value
        if (b === '--') {
          throw new Error([this.general_output.b.meaning, this.general_output.b.label, '未计算！'].join(' '))
        }
        const DG = this.general_output.DG.value
        if (DG === '--') {
          throw new Error([this.general_output.DG.meaning, this.general_output.DG.label, '未计算！'].join(' '))
        }

        // 螺栓参数
        const n = this.general_input.n.value

        const n_Sb = this.general_output.n_Sb.value
        if (n_Sb === '--') {
          throw new Error([this.general_output.n_Sb.meaning, this.general_output.n_Sb.label, '未计算！'].join(' '))
        }
        const KI = this.general_output.KI.value
        if (KI === '--') {
          throw new Error([this.general_output.KI.meaning, this.general_output.KI.label, '未计算！'].join(' '))
        }

        // 螺栓紧固力矩计算参数
        const P_stress = this.general_input.P_stress.value
        const T_temperature = this.general_input.T_temperature.value
        const Sigma_b = this.general_input.Sigma_b.value
        const Sigma_bt = this.general_input.Sigma_bt.value
        const Eb = this.general_input.Eb.value
        const Ebt = this.general_input.Ebt.value
        const T_ = this.general_input.T_.value

        //----------------输出----------------//
        const Fa = pi * DG * b * y
        const Fp = 2 * pi * DG * b * m * P_stress
        const F = pi / 4 * pow(DG, 2) * P_stress
        const Wa = Fa
        const Wp = F + Fp
        const Aa = Wa / Sigma_b
        const Ap = Wp / Sigma_bt
        const Am = max(Aa, Ap)
        const Ab = n_Sb
        const W = (Am + Ab) * Sigma_b / 2
        const W_ = Wp
        const T_value_1 = W * KI * 1.2 / 1000 / n
        const T_value_2 = T_value_1 * 1.2

        if (T_ >= T_value_1 && T_ <= T_value_2) {
          this.general_input.T_.check_result = '通过'
        } else {
          this.general_input.T_.check_result = '不通过'
        }

        this.general_output.Fa.value = round(Fa, precision)
        this.general_output.Fp.value = round(Fp, precision)
        this.general_output.F.value = round(F, precision)
        this.general_output.Wa.value = round(Wa, precision)
        this.general_output.Wp.value = round(Wp, precision)
        this.general_output.Aa.value = round(Aa, precision)
        this.general_output.Ap.value = round(Ap, precision)
        this.general_output.Am.value = round(Am, precision)
        this.general_output.Ab.value = round(Ab, precision)
        this.general_output.W.value = round(W, precision)
        this.general_output.W_.value = round(W_, precision)
        this.general_output.T.value_1 = round(T_value_1, precision)
        this.general_output.T.value_2 = round(T_value_2, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.P_stress.value = ''
      this.general_input.T_temperature.value = ''
      this.general_input.Sigma_b.value = ''
      this.general_input.Sigma_bt.value = ''
      this.general_input.Eb.value = ''
      this.general_input.Ebt.value = ''
      this.general_input.T_.value = ''
      this.general_input.T_.check_result = ''

      this.general_output.Fa.value = '--'
      this.general_output.Fp.value = '--'
      this.general_output.F.value = '--'
      this.general_output.Wa.value = '--'
      this.general_output.Wp.value = '--'
      this.general_output.Aa.value = '--'
      this.general_output.Ap.value = '--'
      this.general_output.W.value = '--'
      this.general_output.W_.value = '--'
      this.general_output.T.value_1 = '--'
      this.general_output.T.value_2 = '--'
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
