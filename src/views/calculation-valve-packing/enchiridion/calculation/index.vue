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
                <custom-el-input :para="general_input.D"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.d"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.s"></custom-el-input>
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
                <custom-el-input :para="general_input.N"></custom-el-input>
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
        <div class="demo-image__placeholder">
          <div class="el-image-block">
            <el-image :src="img_compute" :preview-src-list="[img_compute]">
            </el-image>
            <span class="demonstration">阀门手册盘根力矩计算示意图</span>
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

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

const precision = defaultSettings.precision

export default {
  name: 'EnchiridionCalculation',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,
      img_compute: require('@/assets/model_images/valve_packing_enchiridion.png')
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
        const miu = this.general_input.miu.value
        const n = this.general_input.n.value
        const h = this.general_input.h.value
        const D = this.general_input.D.value
        const d = this.general_input.d.value
        const s = this.general_input.s.value
        const Pitch = this.general_input.Pitch.value
        const r = this.general_input.r.value
        const Rma = this.general_input.Rma.value
        const f = this.general_input.f.value
        const f_ = this.general_input.f_.value
        const N = this.general_input.N.value

        //----------------输出----------------//
        // 过程参数
        const Cs = n * P * pow(e, 2 * miu / n * h / s) * pi / 4 * (pow(D, 2) - pow(d, 2)) / N * (Pitch / (2 * pi) + f * r + f_ * Rma) / 1000

        this.general_output.Cs.value = round(Cs, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.P.value = ''
      this.general_input.miu.value = ''
      this.general_input.n.value = ''
      this.general_input.h.value = ''
      this.general_input.D.value = ''
      this.general_input.d.value = ''
      this.general_input.s.value = ''
      this.general_input.Pitch.value = ''
      this.general_input.r.value = ''
      this.general_input.Rma.value = ''
      this.general_input.f.value = ''
      this.general_input.f_.value = ''
      this.general_input.N.value = ''
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
