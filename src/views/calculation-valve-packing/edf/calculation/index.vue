<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Do"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Di"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Pitch"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.r"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Rma"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.f"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.f_"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.n"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>结果参数</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
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
                  <el-descriptions-item :label="Label(general_output.Cs)">{{
                      general_output.Cs.value
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
  name: 'EDFCalculation',
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
        // 输入
        const P = this.general_input.P.value
        const Do = this.general_input.Do.value
        const Di = this.general_input.Di.value
        const Pitch = this.general_input.Pitch.value
        const r = this.general_input.r.value
        const Rma = this.general_input.Rma.value
        const f = this.general_input.f.value
        const f_ = this.general_input.f_.value
        const n = this.general_input.n.value

        //----------------输出----------------//
        // 过程参数
        const Cs = max(1.75 * P, 28) * pi / 4 * (pow(Do, 2) - pow(Di, 2)) / n * (Pitch / (2 * pi) + f * r + f_ * Rma)

        this.general_output.Cs.value = round(Cs, precision)
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.P.value = ''
      this.general_input.Do.value = ''
      this.general_input.Di.value = ''
      this.general_input.Pitch.value = ''
      this.general_input.r.value = ''
      this.general_input.Rma.value = ''
      this.general_input.f.value = ''
      this.general_input.f_.value = ''
      this.general_input.n.value = ''
    },
    clean2() {
      this.general_output.Cs.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
    }
  }
}
</script>
