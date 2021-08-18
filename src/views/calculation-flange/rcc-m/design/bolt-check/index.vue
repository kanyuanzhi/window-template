<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰压紧力</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="Dj(mm)" placeholder="垫片平均直径" :input="general_output" para="Dj"
                                 disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="m" placeholder="垫片系数" :input="general_input" para="m"
                                 disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="P(MPa)" placeholder="系统内压" :input="condition_input" para="P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Mf(N·m)" placeholder="系统外载荷弯矩" :input="condition_input"
                                 para="Mf"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Fa(N)" placeholder="系统外载荷轴向力Fa(N)" :input="condition_input"
                                 para="Fa"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item label="外载荷等效压力Peq(Mpa)">{{ condition_output.Peq }}</el-descriptions-item>
                  <el-descriptions-item label="由压力产生的端部静压力FF(P)(N)">{{ condition_output.FFP }}</el-descriptions-item>
                  <el-descriptions-item label="FF(P+Peq)(N)">{{ condition_output.FFP_Peq }}</el-descriptions-item>
                  <el-descriptions-item label="保证垫片密封要求的力FM(P)(N)">{{ condition_output.FMP }}</el-descriptions-item>
                  <el-descriptions-item label="法兰压紧力FS(P)(N)">{{ condition_output.FSP }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓预紧力</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="Fj(N)" placeholder="压紧密封垫圈所需的力" :input="general_output" para="Fj"
                                 disabled="true"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="Faz(N)" placeholder="管道载荷横向力" :input="condition_input"
                                 para="Faz"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Mfn(N·mm)" placeholder="管道载荷扭矩" :input="condition_input"
                                 para="B"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="ff" placeholder="法兰与垫片的静摩擦系数" :input="condition_input"
                                 para="ff"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Ps(MPa)" placeholder="系统工作压力" :input="condition_input"
                                 para="Ps"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="Ec(Pa)" placeholder="室温弹性模量" :input="condition_input"
                                 para="Ec"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Eh(Pa)" placeholder="工作温度弹性模量" :input="condition_input"
                                 para="Eh"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item label="温度修正后的FS0(N)">{{ condition_output.FS0 }}</el-descriptions-item>
                  <el-descriptions-item label="为抵抗横向相对位移所需接触力FT(N)">{{ condition_output.FT }}</el-descriptions-item>
                  <el-descriptions-item label="保证密封要求的力FS'">{{ condition_output.FS_ }}</el-descriptions-item>
                  <el-descriptions-item label="温度修正后的FS0'(N)">{{ condition_output.FS0_ }}</el-descriptions-item>
                  <el-descriptions-item label="螺栓预紧力FSi(N)">{{ condition_output.FSi }}</el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓所需最小截面面积</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="SB(mm2)" placeholder="整体螺栓面积" :input="general_input" para="SB"
                                 :disabled="general_input.SB_is_calculated"></custom-el-input>
              </el-col>
              <el-col :span="6">
              <el-form-item label-width="0" size="small" :inline="true">
                <el-radio-group v-model="general_input.SB_is_calculated" @change="SBIsCalculatedChange">
                  <el-radio :label="true">公式计算</el-radio>
                  <el-radio :label="false">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input label="S(MPa)" placeholder="许用应力" :input="condition_input"
                                 para="S"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Sy(MPa)" placeholder="屈服强度" :input="condition_input"
                                 para="Sy"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input label="Pc(MPa)" placeholder="设计压力" :input="condition_input"
                                 para="Pc"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item label="设计压力下密封垫片的FS(Pc)(N)">{{ condition_output.FSPc }}</el-descriptions-item>
                  <el-descriptions-item label="所需的螺栓最小截面积SA(mm2)">{{ condition_output.SA }}</el-descriptions-item>
                  <el-descriptions-item label="螺栓面积校核结果">{{ condition_output.bolt_check_result }}</el-descriptions-item>
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
<!--        <div class="demo-image__placeholder">-->
<!--          <div class="el-image-block">-->
<!--            <el-image :src="img_bolt" :preview-src-list="[img_bolt]">-->
<!--            </el-image>-->
<!--            <span class="demonstration">螺母示意图</span>-->
<!--          </div>-->
<!--        </div>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, pi, pow, round, sqrt} from "mathjs"
import {Message} from 'element-ui'

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'general',
  props: ['general_input', 'general_output', 'condition_input', 'condition_output'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_bolt: require('@/assets/model_images/luomu.png')
    }
  },
  methods: {
    calculate() {
      try {
        //----------------输入----------------//
        // 法兰压紧力
        const P = this.condition_input.P
        const Mf = this.condition_input.Mf
        const Fa = this.condition_input.Fa

        const Dj = this.general_output.Dj
        if (Dj === '--') {
          throw new Error('垫片平均直径Dj未计算！')
        }
        const m = this.general_input.m

        // 螺栓预紧力
        const Faz = this.condition_input.Faz
        const Mfn = this.condition_input.Mfn
        const ff = this.condition_input.ff
        const Ps = this.condition_input.Ps
        const Ec = this.condition_input.Ec
        const Eh = this.condition_input.Eh

        const Fj = this.general_output.Fj
        if (Fj === '--') {
          throw new Error('压紧密封垫圈所需的力Fj未计算！')
        }

        // 螺栓所需最小截面面积
        const Pc = this.condition_input.Pc
        const S = this.condition_input.S

        //----------------输出----------------//
        // 法兰压紧力

        const Peq = 16 * Mf / (pi * pow(Dj, 3) + 4 * Fa / (pi * pow(Dj, 2)))
        const FFP = pi / 4 * pow(Dj, 2) * P
        const FFP_Peq = pi / 4 * pow(Dj, 2) * (P + Peq)
        const FMP = pi / 4 * pow(Dj, 2) * m * P
        const FSP = FFP + FMP

        // 实际螺栓面积
        const FS0 = Ec / Eh * FSP
        const FT = sqrt(pow(Faz, 2) + pow(Mfn / Dj, 2)) / ff
        const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
        const FS0_ = Ec / Eh * FS_
        const FSi = max(Fj, FS0, FS0_)

        // 螺栓所需最小截面面积
        const FSPc = pi / 4 * pow(Dj, 2) * Pc * (1 + m)
        const SA = FSPc / S

        this.condition_output.Peq = round(Peq, precision)
        this.condition_output.FFP = round(FFP, precision)
        this.condition_output.FFP_Peq = round(FFP_Peq, precision)
        this.condition_output.FMP = round(FMP, precision)
        this.condition_output.FSP = round(FSP, precision)

        this.condition_output.FS0 = round(FS0, precision)
        this.condition_output.FT = round(FT, precision)
        this.condition_output.FS_ = round(FS_, precision)
        this.condition_output.FS0_ = round(FS0_, precision)
        this.condition_output.FSi = round(FSi, precision)

        this.condition_output.FSPc = round(FSPc, precision)
        this.condition_output.SA = round(SA, precision)
      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
    },
    clean1() {
      this.condition_input.P = ''
      this.condition_input.Mf = ''
      this.condition_input.Fa = ''

      this.condition_output.Peq = '--'
      this.condition_output.FFP = '--'
      this.condition_output.FFP_Peq = '--'
      this.condition_output.FMP = '--'
      this.condition_output.FSP = '--'
    },
    clean2() {
      this.condition_input.Faz = ""
      this.condition_input.Mfn = ""
      this.condition_input.ff = ""
      this.condition_input.Ps = ""
      this.condition_input.Ec = ""
      this.condition_input.Eh = ""

      this.condition_output.FS0 = "--"
      this.condition_output.FT = "--"
      this.condition_output.FS_ = "--"
      this.condition_output.FS0_ = "--"
      this.condition_output.FSi = "--"
    },
    clean3() {
      this.condition_input.Pc = ""
      this.condition_input.S = ""

      this.condition_output.FSPc = "--"
      this.condition_output.SA = "--"
      this.condition_output.bolt_check_result = "--"
    },
    SBIsCalculatedChange(val) {
      if (val) {
        this.general_input.SB = this.general_output.SB
      }
    },
  }
}
</script>

<style scoped>

</style>
