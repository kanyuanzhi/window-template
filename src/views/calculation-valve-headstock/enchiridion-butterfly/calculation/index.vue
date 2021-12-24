<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
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
                <custom-el-input :para="general_input.D"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.V"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.g"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.k"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.gama"></custom-el-input>
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
                <custom-el-input :para="general_input.P"></custom-el-input>
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
              <span>输入参数三</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.PH" label_width="90px"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.miu_"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Qc"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.d"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输入参数四</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Ma"></custom-el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>中间过程参数</span>
              <el-button @click="clean5" style="float: right;padding: 0;" type="text" size="medium"
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
                  <el-descriptions-item :label="Label(general_output.MD)">{{
                      general_output.MD.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.MT)">{{
                      general_output.MT.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.MZ)">{{
                      general_output.MZ.value
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
import CaseDialog from '@/components/CaseDialog'
import {formatLabel} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'EnchiridionButterflyCalculation',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog
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
        const D = this.general_input.D.value
        const V = this.general_input.V.value
        const g = this.general_input.g.value
        const k = this.general_input.k.value
        const gama = this.general_input.gama.value
        const P = this.general_input.P.value
        const miu = this.general_input.miu.value
        const n = this.general_input.n.value
        const h = this.general_input.h.value
        const dc = this.general_input.dc.value
        const s = this.general_input.s.value
        const PH = this.general_input.PH.value
        const miu_ = this.general_input.miu_.value
        const Qc = this.general_input.Qc.value
        const d = this.general_input.d.value
        const Ma = this.general_input.Ma.value

        //----------------输出----------------//
        // 过程参数
        const MD = k * pow(D, 3) / 12 * gama * pow(V, 2) / (20 * g)
        const MT = 0.5 * pi * dc * s * n * P * (pow(e, 2 * miu / n * h / s) - 1) * dc / 2
        const MZ = (0.785 * 1.2 * pow(D, 2) * PH + Qc) * miu_ * d / 2
        const MS = Ma * (MD + MT + MZ)


        this.general_output.MD.value = round(MD, precision)
        this.general_output.MT.value = round(MT, precision)
        this.general_output.MZ.value = round(MZ, precision)
        this.general_output.MS.value = round(MS, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.D.value = ''
      this.general_input.V.value = ''
      this.general_input.g.value = ''
      this.general_input.k.value = 0.785
      this.general_input.gama.value = ''
    },
    clean2() {
      this.general_input.P.value = ''
      this.general_input.miu.value = ''
      this.general_input.n.value = ''
      this.general_input.h.value = ''
      this.general_input.dc.value = ''
      this.general_input.s.value = ''
    },
    clean3() {
      this.general_input.PH.value = ''
      this.general_input.miu_.value = ''
      this.general_input.Qc.value = ''
      this.general_input.d.value = ''
    },
    clean4() {
      this.general_input.Ma.value = 1.3
    },
    clean5() {
      this.general_output.MD.value = '--'
      this.general_output.MT.value = '--'
      this.general_output.MZ.value = '--'
      this.general_output.MS.value = '--'
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
