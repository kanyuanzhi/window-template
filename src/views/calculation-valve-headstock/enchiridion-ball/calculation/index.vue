<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数一</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Rk"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Rm"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_k"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.a"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.sin_beta)">{{
                      general_output.sin_beta.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.cos_beta)">{{
                      general_output.cos_beta.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数二</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.P" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.miu"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.n"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.dc"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.s"></custom-el-input>
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
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.MK)">{{
                      general_output.MK.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.MT)">{{
                      general_output.MT.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.MS)">{{
                      general_output.MS.value
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
            <span class="demonstration">阀门手册球阀计算示意图</span>
          </div>
        </div>
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
  name: 'EnchiridionBallCalculation',
  props: ['general'],
  components: {
    CustomElInput
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      img_compute: require('@/assets/model_images/valve_headstock_enchiridion_ball.png')
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
        // 输入参数一
        const Rk = this.general_input.Rk.value
        const Rm = this.general_input.Rm.value
        const P = this.general_input.P.value
        const miu_k = this.general_input.miu_k.value
        const a = this.general_input.a.value

        // 输入参数二
        const miu = this.general_input.miu.value
        const n = this.general_input.n.value
        const h = this.general_input.h.value
        const dc = this.general_input.dc.value
        const s = this.general_input.s.value

        //----------------输出----------------//
        // 输入参数一
        const sin_beta = sin(a / Rm)
        const cos_beta = sqrt(1 - pow(sin_beta, 2))

        // 过程参数
        const MK = pi / pow(Rk, 3) * P * miu_k * sqrt(pow(a, 2) / pow(Rk, 2) + 1 / 4) / (sin_beta + miu_k * cos_beta)
        const MT = 0.5 * pi * dc * s * n * P * (pow(e, 2 * miu / n * h / s) - 1) * dc / 2
        const MS = MK + MT

        this.general_output.sin_beta.value = round(sin_beta, precision)
        this.general_output.cos_beta.value = round(cos_beta, precision)

        this.general_output.MK.value = round(MK, precision)
        this.general_output.MT.value = round(MT, precision)
        this.general_output.MS.value = round(MS, precision)
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.Rk.value = ''
      this.general_input.Rm.value = ''
      this.general_input.P.value = ''
      this.general_input.miu_k.value = ''
      this.general_input.a.value = ''

      this.general_output.sin_beta.value = '--'
      this.general_output.cos_beta.value = '--'
    },
    clean2() {
      this.general_input.miu.value = ''
      this.general_input.n.value = ''
      this.general_input.h.value = ''
      this.general_input.dc.value = ''
      this.general_input.s.value = ''
    },
    clean3() {
      this.general_output.MK.value = '--'
      this.general_output.MT.value = '--'
      this.general_output.MS.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
    }
  }
}
</script>
