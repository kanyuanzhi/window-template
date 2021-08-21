<template>
  <el-row :gutter="10">
    <el-col :span="20">
      <el-form label-width="80px">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>法兰压紧力</span>
            <el-button @click="" style="float: right;padding: 0;" type="text" size="medium"
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
            <span>螺栓预紧力</span>
            <el-button @click="" style="float: right;padding: 0;" type="text" size="medium"
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
            <span>螺栓所需最小截面面积</span>
            <el-button @click="" style="float: right;padding: 0;" type="text" size="medium"
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
            <span>法兰力</span>
            <el-button @click="" style="float: right;padding: 0;" type="text" size="medium"
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
            <span>法兰力矩</span>
            <el-button @click="" style="float: right;padding: 0;" type="text" size="medium"
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
                <el-descriptions-item :label="Label(condition_output.M)">{{
                    condition_output.M.value
                  }}
                </el-descriptions-item>
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
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {e, log, max, pi, pow, round, sqrt} from "mathjs"

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
      condition_input: this.condition.input,
      condition_output: this.condition.output
    }
  },
  computed: {
    Label() {
      return (para) => {
        if (para.format_label !== undefined) {
          return para.format_label
        }
        let str = para.meaning.concat(para.label)
        if (para.unit === '') {
          return str
        } else {
          return str.concat('(', para.unit, ')')
        }
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

        // 螺栓预紧力
        const Faq = this.condition_input.Faq.value
        const Mfn = this.condition_input.Mfn.value
        const ff = this.condition_input.ff.value
        const Ps = this.condition_input.Ps.value
        const Ec = this.condition_input.Ec.value
        const Eh = this.condition_input.Eh.value

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
        const FM = pi / 4 * pow(Dj, 2) * m * P
        const FS = FF + FM

        // 螺栓预紧力
        const FS0 = Ec / Eh * FS
        const FT = sqrt(pow(Faq, 2) + pow(Mfn / Dj, 2)) / ff
        const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
        const FS0_ = Ec / Eh * FS_
        const FSi = max(Fj, FS0, FS0_)

        // 螺栓所需最小截面面积
        const FSP = pi / 4 * pow(Dj, 2) * P * (1 + m)
        const SA = FSP / S_bolt

        // 法兰力
        const FSi_ = 1 / 2 * (1 + SB / SA) * FSi
        const SA_SB = (1 + SB / SA) / 2
        const HD = pi / 4 * pow(B, 2) * P
        const HT = pi / 4 * (pow(Dj, 2) - pow(B, 2)) * P
        const HD_ = 4 * Mf / pow(Dj, 3) * pow(B, 2) + Fa / pow(Dj, 2) * pow(B, 2)
        const HT_ = 4 * Mf / pow(Dj, 3) * (pow(Dj, 2) - pow(B, 2)) + Fa / pow(Dj, 2) * (pow(Dj, 2) - pow(B, 2))
        const HG = FSi_ - (HT + HT_) - (HD + HD_)

        // 法兰力矩
        const MD = HD * hd
        const MD_ = HD_ * hd
        const MT = HT * ht
        const MT_ = HT_ * hd
        const MG = HG * hg
        const MO = MD + MD_ + MT + MT_ + MG
        const M = C0 * MO

        this.condition_output.Peq.value = round(Peq, precision)
        this.condition_output.FF.value = round(FF, precision)
        this.condition_output.FM.value = round(FM, precision)
        this.condition_output.FS.value = round(FS, precision)

        this.condition_output.FS0.value = round(FS0, precision)
        this.condition_output.FT.value = round(FT, precision)
        this.condition_output.FS_.value = round(FS_, precision)
        this.condition_output.FS0_.value = round(FS0_, precision)
        this.condition_output.FSi.value = round(FSi, precision)

        this.condition_output.FSP.value = round(FSP, precision)
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
        this.condition_output.M.value = round(M, precision)

      } catch (e) {
        Message.error(e)
      }
    },
    cleanAll(){

    },
  }
}
</script>

<style scoped>

</style>
