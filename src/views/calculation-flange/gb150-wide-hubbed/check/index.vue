<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓受力计算</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Eb"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Ebt"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.CS_"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Fa_)">{{
                      general_output.Fa_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Fp_)">{{
                      general_output.Fp_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.F_)">{{
                      general_output.F_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.FD)">{{
                      general_output.FD.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="1">
                  <el-descriptions-item :label="Label(general_output.FT_)">{{
                      general_output.FT_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.FR)">{{
                      general_output.FR.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Wa)">{{
                      general_output.Wa.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Wp)">{{
                      general_output.Wp.value
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
                  <el-descriptions-item :label="Label(general_output.CS)">
                    {{ [general_output.CS.value_1, general_output.CS.value_2].join('~') }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰校核</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.Sigma_f"></custom-el-input>-->
              <!--              </el-col>-->
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.Sigma_ft"></custom-el-input>-->
              <!--              </el-col>-->
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.Do"></custom-el-input>-->
              <!--              </el-col>-->
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.Di_flange"></custom-el-input>-->
              <!--              </el-col>-->
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.MO)">{{
                      general_output.MO.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.delta_f)">{{
                      general_output.delta_f.value
                    }}
                  </el-descriptions-item>
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
        <div class="demo-image__placeholder">
          <div class="el-image-block">
            <el-image :src="img_hubbed" :preview-src-list="[img_hubbed]">
            </el-image>
            <span class="demonstration">GB150宽面带颈法兰示意图</span>
          </div>
        </div>
      </el-col>
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
  name: 'GB150WidePlate',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,

      img_hubbed: require('@/assets/model_images/flange_gb150_wide_hubbed.png')
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
        // 螺栓受力计算
        const Eb = this.general_input.Eb.value
        const Ebt = this.general_input.Ebt.value
        const SC_ = this.general_input.CS_.value

        const b_ = this.general_output.b_.value
        if (b_ === '--') {
          throw new Error([this.general_output.b_.meaning, this.general_output.b_.label, '未计算！'].join(' '))
        }
        const DG_ = this.general_output.DG_.value
        if (DG_ === '--') {
          throw new Error([this.general_output.DG_.meaning, this.general_output.DG_.label, '未计算！'].join(' '))
        }
        const Pc = this.general_output.Pc.value
        if (Pc === '--') {
          throw new Error([this.general_output.Pc.meaning, this.general_output.Pc.label, '未计算！'].join(' '))
        }
        const LD = this.general_output.LD.value
        if (LD === '--') {
          throw new Error([this.general_output.LD.meaning, this.general_output.LD.label, '未计算！'].join(' '))
        }
        const Lp_ = this.general_output.Lp_.value
        if (Lp_ === '--') {
          throw new Error([this.general_output.Lp_.meaning, this.general_output.Lp_.label, '未计算！'].join(' '))
        }
        const Lt_ = this.general_output.Lt_.value
        if (Lt_ === '--') {
          throw new Error([this.general_output.Lt_.meaning, this.general_output.Lt_.label, '未计算！'].join(' '))
        }
        const LR = this.general_output.LR.value
        if (LR === '--') {
          throw new Error([this.general_output.LR.meaning, this.general_output.LR.label, '未计算！'].join(' '))
        }

        // 法兰参数
        const Sigma_ft = this.general_input.Sigma_ft.value
        const Di = this.general_input.Di.value

        // 螺栓参数
        const Sigma_b = this.general_input.Sigma_b.value
        const Sigma_bt = this.general_input.Sigma_bt.value
        const dB = this.general_input.dB.value
        const P = this.general_input.P.value
        const n = this.general_input.n.value

        // 垫片参数
        const Db_bolt = this.general_input.Db_bolt.value
        const db = this.general_input.db.value
        const b__2 = this.general_input.b__2.value
        const m = this.general_input.m.value
        const y = this.general_input.y.value

        //----------------输出----------------//
        // 螺栓受力计算
        const Fa_ = pi * Db_bolt * b_ * y
        const Fp_ = 2 * pi * DG_ * b__2 * m * Pc / 2
        const F_ = pi / 4 * pow((Db_bolt - db), 2) * Pc
        const FD = pi / 4 * pow(Di, 2) * Pc
        const FT_ = F_ - FD
        const FR = (FD * LD + Fp_ * Lp_ + FT_ * Lt_) / LR
        const Wa = pi * Db_bolt * b_ * y
        const Wp = F_ + Fp_ + FR
        const Am = max(Wa / Sigma_b, Wp / Sigma_bt)
        const Ab = n * pi / 4 * pow((dB - 0.9382 * P), 2)
        const CS_1 = (Am + Ab) * Sigma_b * 0.2 * 1.2 * dB / n / 1000 / 2
        const CS_2 = CS_1 * 1.3 // 与板式不同

        // 法兰校核
        const MO = FR * LR // 与板式不同
        const delta_f = sqrt(6 * MO / (Sigma_ft * (pi * Db_bolt - n * db)))

        this.general_output.Fa_.value = round(Fa_, precision)
        this.general_output.Fp_.value = round(Fp_, precision)
        this.general_output.F_.value = round(F_, precision)
        this.general_output.FD.value = round(FD, precision)
        this.general_output.FT_.value = round(FT_, precision)
        this.general_output.FR.value = round(FR, precision)
        this.general_output.Wa.value = round(Wa, precision)
        this.general_output.Wp.value = round(Wp, precision)
        this.general_output.Am.value = round(Am, precision)
        this.general_output.Ab.value = round(Ab, precision)
        this.general_output.CS.value_1 = round(CS_1, precision)
        this.general_output.CS.value_2 = round(CS_2, precision)

        this.general_output.MO.value = round(MO, precision)
        this.general_output.delta_f.value = round(delta_f, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.Eb.value = ''
      this.general_input.Ebt.value = ''

      this.general_output.Fa_.value = '--'
      this.general_output.Fp_.value = '--'
      this.general_output.F_.value = '--'
      this.general_output.FD.value = '--'
      this.general_output.FT_.value = '--'
      this.general_output.FR.value = '--'
      this.general_output.Wa.value = '--'
      this.general_output.Wp.value = '--'
      this.general_output.Am.value = '--'
      this.general_output.Ab.value = '--'
      this.general_output.CS.value_1 = '--'
      this.general_output.CS.value_2 = '--'
    },
    clean2() {
      this.general_output.MO.value = '--'
      this.general_output.delta_f.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
    }
  }
}
</script>
