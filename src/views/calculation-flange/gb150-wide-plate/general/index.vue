<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰连接部件（{{ general_input.flange_connector_materials_name.value }}）</span>
              <el-button @click="clean1" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_nt"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>法兰（{{ general_input.flange_materials_name.value }}）</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_f"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_ft"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Do"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Di"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Db_flange"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_0"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.delta_1"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>螺栓（{{ general_input.bolt_materials_name.value }}）</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_b"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Sigma_bt"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.dB"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
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
              <span>垫片（{{ general_input.gasket_type.value }}）</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
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
                <custom-el-input :para="general_input.Di_"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Db_bolt"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.db"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.b__2"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.m"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.y"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="3">
                  <el-descriptions-item :label="Label(general_output.b_)">{{
                      general_output.b_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.b0_)">{{
                      general_output.b0_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.DG_)">{{
                      general_output.DG_.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="4">
                  <el-descriptions-item :label="Label(general_output.Lp_)">{{
                      general_output.Lp_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Lt_)">{{
                      general_output.Lt_.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.LD)">{{
                      general_output.LD.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.LR)">{{
                      general_output.LR.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>设计条件</span>
              <el-button @click="clean5" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.P_stress"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.T"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.F"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.M"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.Pc)">{{
                      general_output.Pc.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.Peq)">{{
                      general_output.Peq.value
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
        <div class="demo-image__placeholder">
          <div class="el-image-block">
            <el-image :src="img_plate" :preview-src-list="[img_plate]">
            </el-image>
            <span class="demonstration">GB150宽面板式法兰示意图</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'GB150WidePlate',
  props: ['general'],
  components: {
    CustomElInput
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
    }
  },
  methods: {
    calculate() {
      try {

        //----------------输入----------------//
        // 法兰连接部件
        const Sigma_nt = this.general_input.Sigma_nt.value

        // 法兰参数
        const Sigma_f = this.general_input.Sigma_f.value
        const Sigma_ft = this.general_input.Sigma_ft.value
        const Do = this.general_input.Do.value
        const Di = this.general_input.Di.value
        const Db_flange = this.general_input.Db_flange.value
        const delta0 = this.general_input.delta_0.value
        const delta1 = this.general_input.delta_1.value

        // 螺栓参数
        const Sigma_b = this.general_input.Sigma_b.value
        const Sigma_bt = this.general_input.Sigma_bt.value
        const dB = this.general_input.dB.value
        const P = this.general_input.P.value
        const n = this.general_input.n.value

        // 垫片参数
        const D = this.general_input.D.value
        const Di_ = this.general_input.Di_.value
        const Db_bolt = this.general_input.Db_bolt.value
        const db = this.general_input.db.value
        const b__2 = this.general_input.b__2.value
        const m = this.general_input.m.value
        const y = this.general_input.y.value

        // 设计条件
        const P_stress = this.general_input.P_stress.value
        const T = this.general_input.T.value
        const F = this.general_input.F.value
        const M = this.general_input.M.value

        //----------------输出----------------//
        // 垫片参数
        const b0_ = D - Db_bolt
        const b_ = 4 * sqrt(b0_)
        const Lp_ = (db + b__2) / 2
        const Lt_ = ((Db_bolt + db + b__2) - Di) / 4
        const LD = (Db_bolt - Di) / 2
        const LR = (D - (Db_bolt + db)) / 4 + db / 2
        const DG_ = Db_bolt - (db + b__2)
        // 设计条件
        const Peq = 4 * F / (pi * pow(DG_, 2)) + 16 * M / (pi * pow(DG_, 3))
        const Pc = P_stress + Peq

        this.general_output.b0_.value = round(b0_, precision)
        this.general_output.b_.value = round(b_, precision)
        this.general_output.Lp_.value = round(Lp_, precision)
        this.general_output.Lt_.value = round(Lt_, precision)
        this.general_output.LD.value = round(LD, precision)
        this.general_output.LR.value = round(LR, precision)
        this.general_output.DG_.value = round(DG_, precision)

        this.general_output.Peq.value = round(Peq, precision)
        this.general_output.Pc.value = round(Pc, precision)
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.Sigma_nt.value = ''
    },
    clean2() {
      this.general_input.Sigma_f.value = ''
      this.general_input.Sigma_ft.value = ''
      this.general_input.Do.value = ''
      this.general_input.Di.value = ''
      this.general_input.Db_flange.value = ''
      this.general_input.delta_0.value = ''
      this.general_input.delta_1.value = ''
    },
    clean3() {
      this.general_input.Sigma_b.value = ''
      this.general_input.Sigma_bt.value = ''
      this.general_input.dB.value = ''
      this.general_input.P.value = ''
      this.general_input.n.value = ''
    },
    clean4() {
      this.general_input.D.value = ''
      this.general_input.Di_.value = ''
      this.general_input.Db_bolt.value = ''
      this.general_input.db.value = ''
      this.general_input.b__2.value = 2
      this.general_input.m.value = ''
      this.general_input.y.value = ''

      this.general_output.b0_.value = '--'
      this.general_output.b_.value = '--'
      this.general_output.Lp_.value = '--'
      this.general_output.Lt_.value = '--'
      this.general_output.LD.value = '--'
      this.general_output.LR.value = '--'
      this.general_output.DG_.value = '--'
    },
    clean5() {
      this.general_input.P_stress.value = ''
      this.general_input.T.value = ''
      this.general_input.F.value = ''
      this.general_input.M.value = ''

      this.general_output.Peq.value = '--'
      this.general_output.Pc.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
      this.clean5()
    }
  }
}
</script>
