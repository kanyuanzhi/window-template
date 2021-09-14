<template>
  <el-row :gutter="10">
    <el-col :span="20">
      <el-form label-width="80px">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰压紧力（{{ condition_name_zh }}工况）</span>
            <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                       icon="el-icon-delete">清空
            </el-button>
            <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                       icon="el-icon-video-play">计算
            </el-button>
          </div>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="general_output.Dj" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_input.m" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_output.b" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.P"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Mf"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Fa"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-descriptions :column="3">
                <el-descriptions-item :label="Label(condition_output.Peq)">{{
                    condition_output.Peq.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FF)">{{
                    condition_output.FF.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FM)">{{
                    condition_output.FM.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FS)">{{
                    condition_output.FS.value
                  }}
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>螺栓预紧力（{{ condition_name_zh }}工况）</span>
            <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                       icon="el-icon-delete">清空
            </el-button>
            <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                       icon="el-icon-video-play">计算
            </el-button>
          </div>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="general_output.Fj" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.Faq"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Mfn"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.ff"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Ps"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.Ec"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Eh"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.FT"
                               :disabled="condition_input.FT.is_calculated"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <el-form-item label="选取方式" size="small" :inline="true">
                <el-radio-group v-model="condition_input.FT.is_calculated" @change="FTIsCalculatedChange">
                  <el-radio :label="true">公式计算</el-radio>
                  <el-radio :label="false">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-descriptions :column="3">
                <el-descriptions-item :label="Label(condition_output.FS0)">{{
                    condition_output.FS0.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FT)">{{
                    condition_output.FT.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FS_)">{{
                    condition_output.FS_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FS0_)">{{
                    condition_output.FS0_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.FSi)">{{
                    condition_output.FSi.value
                  }}
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>螺栓所需最小截面面积（{{ condition_name_zh }}工况）</span>
            <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                       icon="el-icon-delete">清空
            </el-button>
            <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                       icon="el-icon-video-play">计算
            </el-button>
          </div>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="general_output.Dj" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_input.m" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.P" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.S_bolt"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Sy"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-descriptions :column="3">
                <el-descriptions-item :label="Label(condition_output.FSP)">{{
                    condition_output.FSP.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.SA)">{{
                    condition_output.SA.value
                  }}
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰力（{{ condition_name_zh }}工况）</span>
            <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                       icon="el-icon-delete">清空
            </el-button>
            <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                       icon="el-icon-video-play">计算
            </el-button>
          </div>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="general_output.Dj" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_input.B" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_input.SB" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_output.SA" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.P" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Fa" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.Mf" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_output.FSi" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="condition_input.Tm_flange"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="condition_input.S_flange"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-descriptions :column="3">
                <el-descriptions-item :label="Label(condition_output.FSi_)">{{
                    condition_output.FSi_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.SA_SB)">{{
                    condition_output.SA_SB.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.HD)">{{
                    condition_output.HD.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.HT)">{{
                    condition_output.HT.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.HD_)">{{
                    condition_output.HD_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.HT_)">{{
                    condition_output.HT_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.HG)">{{
                    condition_output.HG.value
                  }}
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰力矩（{{ condition_name_zh }}工况）</span>
            <el-button @click="clean5" style="float: right;padding: 0;" type="text" size="medium"
                       icon="el-icon-delete">清空
            </el-button>
            <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                       icon="el-icon-video-play">计算
            </el-button>
          </div>
          <el-row :gutter="10">
            <el-col :span="6">
              <custom-el-input :para="general_output.C0" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_output.hd" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_output.ht" :disabled="true"></custom-el-input>
            </el-col>
            <el-col :span="6">
              <custom-el-input :para="general_output.hg" :disabled="true"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-descriptions :column="3">
                <el-descriptions-item :label="Label(condition_output.MD)">{{
                    condition_output.MD.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MD_)">{{
                    condition_output.MD_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MT)">{{
                    condition_output.MT.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MT_)">{{
                    condition_output.MT_.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MG)">{{
                    condition_output.MG.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MO)">{{
                    condition_output.MO.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.MA)">{{
                    condition_output.MA.value
                  }}
                </el-descriptions-item>
                <el-descriptions-item :label="Label(condition_output.M)">{{
                    condition_output.M.value
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
      <!--      <div class="demo-image__placeholder">-->
      <!--        <div class="el-image-block">-->
      <!--          <el-image :src="img_stress" :preview-src-list="[img_stress]">-->
      <!--          </el-image>-->
      <!--          <span class="demonstration">螺母示意图</span>-->
      <!--        </div>-->
      <!--      </div>-->
    </el-col>
  </el-row>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {formatLabel} from '@/utils/common'

import {e, log, max, min, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'ConditionTemplate',
  components: {
    CustomElInput
  },
  props: ['general', 'condition'],
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      condition_name: this.condition.name,
      condition_name_zh: this.condition.name_zh,
      condition_input: this.condition.input,
      condition_output: this.condition.output
    }
  },
  computed: {
    Label() {
      return (para) => {
        return formatLabel(para)
      }
    }
  },
  methods: {
    calculate() {
      try {
        //----------------输入----------------//
        // 法兰压紧力
        const P = this.condition_input.P.value
        const Mf = this.condition_input.Mf.value
        const Fa = this.condition_input.Fa.value

        const Dj = this.general_output.Dj.value
        if (Dj === '--') {
          throw new Error([this.general_output.Dj.meaning, this.general_output.Dj.label, '未计算！'].join(' '))
        }
        const m = this.general_input.m.value
        const b = this.general_output.Dj.value
        if (b === '--') {
          throw new Error([this.general_output.b.meaning, this.general_output.b.label, '未计算！'].join(' '))
        }

        // 螺栓预紧力
        const Faq = this.condition_input.Faq.value
        const Mfn = this.condition_input.Mfn.value
        const ff = this.condition_input.ff.value
        const Ps = this.condition_input.Ps.value
        const Ec = this.condition_input.Ec.value
        const Eh = this.condition_input.Eh.value
        const FT_manual = this.condition_input.FT.value

        const Fj = this.general_output.Fj.value
        if (Fj === '--') {
          throw new Error([this.general_output.Fj.meaning, this.general_output.Fj.label, '未计算！'].join(' '))
        }

        // 螺栓所需最小截面面积
        const S_bolt = this.condition_input.S_bolt.value
        const Sy = this.condition_input.Sy.value

        // 法兰力
        const SB = this.general_input.SB.value
        const B = this.general_input.B.value
        const S_flange = this.condition_input.S_flange.value

        // 法兰力矩
        const C0 = this.general_output.C0.value
        if (C0 === '--') {
          throw new Error([this.general_output.C0.meaning, this.general_output.C0.label, '未计算！'].join(' '))
        }
        const hd = this.general_output.hd.value
        if (hd === '--') {
          throw new Error([this.general_output.hd.meaning, this.general_output.hd.label, '未计算！'].join(' '))
        }
        const ht = this.general_output.ht.value
        if (ht === '--') {
          throw new Error([this.general_output.ht.meaning, this.general_output.ht.label, '未计算！'].join(' '))
        }
        const hg = this.general_output.hg.value
        if (hg === '--') {
          throw new Error([this.general_output.hg.meaning, this.general_output.hg.label, '未计算！'].join(' '))
        }

        //----------------输出----------------//
        // 法兰压紧力
        const Peq = 16 * Mf / (pi * pow(Dj, 3) + 4 * Fa / (pi * pow(Dj, 2)))
        const FF = pi / 4 * pow(Dj, 2) * (P + Peq)
        // const FM = pi / 4 * pow(Dj, 2) * m * P
        const FM = 2 * pi * Dj * b * m * P
        const FS = FF + FM

        // 螺栓预紧力
        let FT
        const FS0 = Ec / Eh * FS
        const FT_calculate = sqrt(pow(Faq, 2) + pow(Mfn / Dj, 2)) / ff
        if (this.condition_input.FT.is_calculated) {
          FT = FT_calculate
        } else {
          FT = FT_manual
        }
        const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
        const FS0_ = Ec / Eh * FS_
        const FSi = max(Fj, FS0, FS0_)

        // 螺栓所需最小截面面积
        let FSP, SA
        switch (this.condition_name) {
          case 'design':
            FSP = pi / 4 * pow(Dj, 2) * P * (1 + m)
            SA = FSP / S_bolt
            break
          case 'running':
            SA = Eh / Ec * FSi / min(S_bolt, Sy)
            break
          case 'abnormal':
            SA = Eh / Ec * FSi / min(S_bolt, Sy)
            break
          case 'emergency':
            SA = Eh / Ec * FSi / min(S_bolt, Sy)
            break
          case 'accident':
            SA = Eh / Ec * FSi / min(S_bolt, Sy)
            break
          case 'trial':
            FSP = pi / 4 * pow(Dj, 2) * P * (1 + m)
            SA = FSP / (2 / 3 * Sy)
            break
        }

        // 法兰力
        const FSi_ = 1 / 2 * (1 + SB / SA) * FSi
        const SA_SB = (1 + SB / SA) / 2
        const HD = pi / 4 * pow(B, 2) * P
        const HT = pi / 4 * (pow(Dj, 2) - pow(B, 2)) * P
        const HD_ = 4 * Mf / pow(Dj, 3) * pow(B, 2) + Fa / pow(Dj, 2) * pow(B, 2)
        const HT_ = 4 * Mf / pow(Dj, 3) * (pow(Dj, 2) - pow(B, 2)) + Fa / pow(Dj, 2) * (pow(Dj, 2) - pow(B, 2))
        let HG
        switch (this.condition_name) {
          case 'design':
            HG = FSi_ - (HT + HT_) - (HD + HD_)
            break
          case 'running':
            HG = Eh / Ec * FSi_ - (HT + HT_) - (HD + HD_)
            break
          case 'abnormal':
            HG = Eh / Ec * FSi_ - (HT + HT_) - (HD + HD_)
            break
          case 'emergency':
            HG = Eh / Ec * FSi_ - (HT + HT_) - (HD + HD_)
            break
          case 'accident':
            HG = Eh / Ec * FSi_ - (HT + HT_) - (HD + HD_)
            break
          case 'trial':
            HG = FSi_ - (HT + HT_) - (HD + HD_)
            break
        }

        // 法兰力矩
        const MD = HD * hd
        const MD_ = HD_ * hd
        const MT = HT * ht
        const MT_ = HT_ * ht
        const MG = HG * hg
        const MO = MD + MD_ + MT + MT_ + MG
        let MA, M
        switch (this.condition_name) {
          case 'design':
            M = C0 * MO
            break
          case 'running':
            MA = FSi * hg
            M = C0 * max(MO, MA)
            break
          case 'abnormal':
            MA = FSi * hg
            M = C0 * max(MO, MA)
            break
          case 'emergency':
            MA = FSi * hg
            M = C0 * max(MO, MA)
            break
          case 'accident':
            MA = FSi * hg
            M = C0 * max(MO, MA)
            break
          case 'trial':
            M = C0 * MO
            break
        }

        this.condition_output.Peq.value = round(Peq, precision)
        this.condition_output.FF.value = round(FF, precision)
        this.condition_output.FM.value = round(FM, precision)
        this.condition_output.FS.value = round(FS, precision)

        this.condition_output.FS0.value = round(FS0, precision)
        this.condition_output.FT.value = round(FT, precision)
        this.condition_output.FS_.value = round(FS_, precision)
        this.condition_output.FS0_.value = round(FS0_, precision)
        this.condition_output.FSi.value = round(FSi, precision)

        if (this.condition_name === 'design' || this.condition_name === 'trial') {
          // 只有设计和试验工况需要计算并重置FSP，其他工况不需要计算和重置FSP，否则造成round('--', precision)报错。
          this.condition_output.FSP.value = round(FSP, precision)
        }
        this.condition_output.SA.value = round(SA, precision)

        this.condition_output.FSi_.value = round(FSi_, precision)
        this.condition_output.SA_SB.value = round(SA_SB, precision)
        this.condition_output.HD.value = round(HD, precision)
        this.condition_output.HT.value = round(HT, precision)
        this.condition_output.HD_.value = round(HD_, precision)
        this.condition_output.HT_.value = round(HT_, precision)
        this.condition_output.HG.value = round(HG, precision)

        this.condition_output.MD.value = round(MD, precision)
        this.condition_output.MD_.value = round(MD_, precision)
        this.condition_output.MT.value = round(MT, precision)
        this.condition_output.MT_.value = round(MT_, precision)
        this.condition_output.MG.value = round(MG, precision)
        this.condition_output.MO.value = round(MO, precision)
        if (this.condition_name !== 'design' && this.condition_name !== 'trial') {
          // 设计和试验工况不需要计算和重置MA，否则造成round('--', precision)报错，其他工况需要计算并重置MA
          this.condition_output.MA.value = round(MA, precision)
        }
        this.condition_output.M.value = round(M, precision)

      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
      this.clean5()
    },
    clean1() {
      this.condition_input.P.value = ''
      this.condition_input.Mf.value = ''
      this.condition_input.Fa.value = ''

      this.condition_output.Peq.value = '--'
      this.condition_output.FF.value = '--'
      this.condition_output.FM.value = '--'
      this.condition_output.FS.value = '--'
    },
    clean2() {
      this.condition_input.Faq.value = ''
      this.condition_input.Mfn.value = ''
      this.condition_input.ff.value = ''
      this.condition_input.Ps.value = ''
      this.condition_input.Ec.value = ''
      this.condition_input.Eh.value = ''
      this.condition_input.FT.value = ''
      this.condition_input.FT.is_calculated = true

      this.condition_output.FS0.value = '--'
      this.condition_output.FT.value = '--'
      this.condition_output.FS_.value = '--'
      this.condition_output.FS0_.value = '--'
      this.condition_output.FSi.value = '--'
    },
    clean3() {
      this.condition_input.S_bolt.value = ''
      this.condition_input.Sy.value = ''

      this.condition_output.FSP.value = '--'
      this.condition_output.SA.value = '--'
    },
    clean4() {
      this.condition_input.Tm_flange.value = ''
      this.condition_input.S_flange.value = ''

      this.condition_output.FSi_.value = '--'
      this.condition_output.SA_SB.value = '--'
      this.condition_output.HD.value = '--'
      this.condition_output.HT.value = '--'
      this.condition_output.HD_.value = '--'
      this.condition_output.HT_.value = '--'
      this.condition_output.HG.value = '--'
    },
    clean5() {
      this.condition_output.MD.value = '--'
      this.condition_output.MD_.value = '--'
      this.condition_output.MT.value = '--'
      this.condition_output.MT_.value = '--'
      this.condition_output.MG.value = '--'
      this.condition_output.MO.value = '--'
      this.condition_output.MA.value = '--'
      this.condition_output.M.value = '--'
    },
    FTIsCalculatedChange(val) {
      if (val) {
        this.condition_input.FT.value = this.condition_output.FT.value
      }
    }
  }
}
</script>

<style scoped>

</style>
