<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
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
                <custom-el-input :para="general_input.PMS"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.ra"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.ri"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.fD"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.Pitch"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.r"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.Rma"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.f"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.f_"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.n"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">fD参考值</el-divider>
            <el-row :gutter="10">
              <el-col :span="12" :offset="6">
                <table class="custom-table-in-card">
                  <tr>
                    <td width="20%">Packing material</td>
                    <td width="40%">Friction coefficient μst packing/stem</td>
                    <td width="20%">R-value</td>
                    <td width="20%">sealing factor fD</td>
                  </tr>
                  <tr>
                    <td>pure graphite</td>
                    <td>0.18</td>
                    <td>0.55</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>PTFE-silk</td>
                    <td>0.06</td>
                    <td>0.80</td>
                    <td>1.7</td>
                  </tr>
                </table>
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
  name: 'AREVACalculation',
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
        const PMS = this.general_input.PMS.value
        const ra = this.general_input.ra.value
        const ri = this.general_input.ri.value
        const fD = this.general_input.fD.value
        const Pitch = this.general_input.Pitch.value
        const r = this.general_input.r.value
        const Rma = this.general_input.Rma.value
        const f = this.general_input.f.value
        const f_ = this.general_input.f_.value
        const n = this.general_input.n.value

        //----------------输出----------------//
        // 过程参数
        const Cs = max(PMS, 50) * pi * (pow(ra, 2) - pow(ri, 2)) * fD / 10 / n * (Pitch / (2 * pi) + f * r + f_ * Rma) / 1000

        this.general_output.Cs.value = round(Cs, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.PMS.value = ''
      this.general_input.ra.value = ''
      this.general_input.ri.value = ''
      this.general_input.fD.value = ''
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
