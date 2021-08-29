<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
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
                <custom-el-input :para="general_input.miu_1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.theta"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ds"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_P"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Sp"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Dt"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Pms"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.FR"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Pfonc"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">Sp参考值</el-divider>
            <el-row :gutter="10">
              <el-col :span="12" :offset="6">
                <table class="custom-table-in-card">
                  <tr>
                    <td>DN</td>
                    <td>80</td>
                    <td>100</td>
                    <td>150</td>
                    <td>200</td>
                    <td>250</td>
                    <td>300</td>
                    <td>350</td>
                    <td>>400</td>
                  </tr>
                  <tr>
                    <td>Sp(Mpa)</td>
                    <td>1.3</td>
                    <td>0.9</td>
                    <td>0.5</td>
                    <td>0.3</td>
                    <td>0.15</td>
                    <td>0.1</td>
                    <td>0.05</td>
                    <td>>≈0</td>
                  </tr>
                </table>
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
                <custom-el-input :para="general_input.miu_2"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.beta"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.d"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Ph"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.R"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.CR"></custom-el-input>
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
                <custom-el-input :para="general_input.Q4"></custom-el-input>
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
                  <el-descriptions-item :label="Label(general_output.Q1)">{{
                      general_output.Q1.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Q2)">{{
                      general_output.Q2.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Q3)">{{
                      general_output.Q3.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Qt)">{{
                      general_output.Qt.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Tf)">{{
                      general_output.Tf.value
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
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.C)">{{
                      general_output.C.value
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
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'EDFSluiceCCalculation',
  props: ['general'],
  components: {
    CustomElInput
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
        const Sp = this.general_input.Sp.value
        const Dt = this.general_input.Dt.value
        const Pms = this.general_input.Pms.value
        const h = this.general_input.h.value
        const FR = this.general_input.FR.value
        const Pfonc = this.general_input.Pfonc.value

        // 螺纹与系数参数
        const miu_2 = this.general_input.miu_2.value
        const beta = this.general_input.beta.value
        const P = this.general_input.P.value
        const d = this.general_input.d.value
        const Ph = this.general_input.Ph.value
        const R = this.general_input.R.value
        const CR = this.general_input.CR.value

        // 中间过程参数
        const Q4 = this.general_input.Q4.value
        const Q5 = this.general_input.Q5.value
        const Q6 = this.general_input.Q6.value

        //----------------输出----------------//
        // 螺纹与系数参数
        const Rm = 0.5 * (d - 0.5 * P)
        const tan_alpha = Ph / (2 * pi * Rm)
        const alpha = atan(tan_alpha) * 180 / pi

        // 过程参数
        const Q1 = (miu_1 / (cos(theta) - miu_1 * sin(theta))) * ((pi * pow(Ds, 2) / (4 * cos(theta))) * (delta_P + 2 * Sp) + 2 * FR)
        const Q2 = pi * pow(Dt, 2) / 4 * (Pms + Sp)
        const Q3 = 1.5 * Pms <= 10 ? pi * Dt * h : 1.5 * Pms / 10 * pi * Dt * h
        const Qt = (Q1 + Q2 + Q3 + Q4 - Q5) * CR
        const Tf = (tan_alpha + miu_2 / cos(beta)) / (1 - (tan_alpha + miu_2 / cos(beta))) * Rm

        // 结果数据
        const C = Qt / R * Tf

        this.general_output.Rm.value = round(Rm, precision)
        this.general_output.alpha.value = round(alpha, precision)
        this.general_output.tan_alpha.value = round(tan_alpha, precision)

        this.general_output.Q1.value = round(Q1, precision)
        this.general_output.Q2.value = round(Q2, precision)
        this.general_output.Q3.value = round(Q3, precision)
        this.general_output.Qt.value = round(Qt, precision)
        this.general_output.Tf.value = round(Tf, precision)

        this.general_output.C.value = round(C, precision)

      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.miu_1.value = 0.4
      this.general_input.theta.value = 0
      this.general_input.Ds.value = ''
      this.general_input.delta_P.value = ''
      this.general_input.Sp.value = ''
      this.general_input.Dt.value = ''
      this.general_input.Pms.value = ''
      this.general_input.h.value = ''
      this.general_input.FR.value = 0
      this.general_input.Pfonc.value = ''
    },
    clean2() {
      this.general_input.miu_2.value = ''
      this.general_input.beta.value = ''
      this.general_input.P.value = ''
      this.general_input.d.value = ''
      this.general_input.Ph.value = ''
      this.general_input.R.value = ''
      this.general_input.CR.value = 1.3

      this.general_output.Rm.value = '--'
      this.general_output.alpha.value = '--'
      this.general_output.tan_alpha.value = '--'
    },
    clean3() {
      this.general_input.Q4.value = 0
      this.general_input.Q5.value = 0
      this.general_input.Q6.value = 0

      this.general_output.Q1.value = '--'
      this.general_output.Q2.value = '--'
      this.general_output.Q3.value = '--'
      this.general_output.Qt.value = '--'
      this.general_output.Tf.value = '--'
    },
    clean4() {
      this.general_output.C.value = '--'
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

