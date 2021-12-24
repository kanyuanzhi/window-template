<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
          <el-divider class="custom-el-divider--horizontal">当前使用算例：{{ case_index[parameter] }}</el-divider>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>管道界面惯性矩</span>
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
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.h1" :disabled="general_input.h1_or_d.value===1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.d" :disabled="general_input.h1_or_d.value===0"></custom-el-input>
              </el-col>
              <el-col :span="10">
                <el-form-item :label="general_input.h1_or_d.meaning" label-width="220px" size="small" :inline="true">
                  <el-radio-group v-model="general_input.h1_or_d.value">
                    <el-radio :label="general_input.h1_or_d.items[0].selection">{{
                        general_input.h1_or_d.items[0].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.h1_or_d.items[1].selection">{{
                        general_input.h1_or_d.items[1].meaning
                      }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.I)">{{
                      general_output.I.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>单位长度载荷</span>
              <el-button @click="clean2" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.T"></custom-el-input>-->
              <!--              </el-col>-->
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.P"></custom-el-input>-->
              <!--              </el-col>-->
              <el-col :span="6">
                <custom-el-input :para="general_input.E"></custom-el-input>
              </el-col>
              <!--              <el-col :span="6">-->
              <!--                <custom-el-input :para="general_input.V"></custom-el-input>-->
              <!--              </el-col>-->
              <el-col :span="6">
                <custom-el-input :para="general_input.p1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.p2"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.p3"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.h2"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.q)">{{
                      general_output.q.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.L)">{{
                      general_output.L.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>等效长度</span>
              <el-button @click="clean3" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.W"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.l1"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">计算结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-descriptions :column="2">
                  <el-descriptions-item :label="Label(general_output.l2)">{{
                      general_output.l2.value
                    }}
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>跨距校核</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
                         icon="el-icon-delete">清空
              </el-button>
              <el-button @click="calculate" style="float: right;padding: 0 20px 0 0;" type="text" size="medium"
                         icon="el-icon-video-play">计算
              </el-button>
            </div>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_output.L" :disabled="true"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.L_"></custom-el-input>
              </el-col>
            </el-row>
            <el-divider class="custom-el-divider--horizontal">校核结果</el-divider>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-result :icon="Icon" :title="Title" subTitle="">
                </el-result>
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
            <el-image :src="img_1" :preview-src-list="[img_1]">
            </el-image>
            <span class="demonstration">RCC-M中使用的各种材料按物理性能分类表</span>
          </div>
          <div class="el-image-block">
            <el-image :src="img_2" :preview-src-list="[img_2]">
            </el-image>
            <span class="demonstration">弹性模量</span>
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
  name: 'NuclearCalculation',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog
  },
  data() {
    return {
      general_input: this.general.input,
      general_output: this.general.output,
      img_1: require('@/assets/model_images/pipe_nuclear_1.jpg'),
      img_2: require('@/assets/model_images/pipe_nuclear_2.jpg'),
    }
  },
  computed: {
    Label() {
      return para => {
        return formatLabel(para)
      }
    },
    Title() {
      switch (this.general_output.L.check_result) {
        case '--':
          return '待校核'
        case '通过':
          return '通过'
        case '不通过':
          return '不通过'
      }
    },
    Icon() {
      switch (this.general_output.L.check_result) {
        case '--':
          return 'info'
        case '通过':
          return 'success'
        case '不通过':
          return 'error'
      }
    }
  },
  methods: {
    calculate() {
      try {
        //----------------输入----------------//
        // 管道界面惯性矩
        const D = this.general_input.D.value
        let d = this.general_input.d.value
        let h1 = this.general_input.h1.value
        const h1_or_d = this.general_input.h1_or_d.value

        // 单位长度载荷
        const T = this.general_input.T.value
        const P = this.general_input.P.value
        const V = this.general_input.V.value
        const p3 = this.general_input.p3.value
        const h2 = this.general_input.h2.value
        const p1 = this.general_input.p1.value
        const E = this.general_input.E.value
        const p2 = this.general_input.p2.value

        // 等效长度
        const W = this.general_input.W.value
        const l1 = this.general_input.l1.value

        // 跨距校核
        const L_ = this.general_input.L_.value

        //----------------输出----------------//
        // 管道界面惯性矩
        let I
        switch (h1_or_d) {
          case 0:
            I = pi / 64 * (pow(D, 4) - pow(D - 2 * h1, 4))
            d = D - 2 * h1 // 选择使用h1参与计算时，需要算出计算单位长度载荷q时用到的d的值
            this.general_input.d.value = round(d, precision)
            break
          case 1:
            I = pi / 64 * (pow(D, 4) - pow(d, 4))
            h1 = (D - d) / 2
            this.general_input.h1.value = round(h1, precision)
            break
        }

        // 单位长度载荷
        // const q = pi / 4 * (pow(D, 2) - pow(d - 2 * h1, 2)) * p1 + pow(d, 2) * p2 + (pow(D + 2 * h2, 2) - pow(D, 2)) * p3
        const q = 9.8 * pi / 4 * (pow(D, 2) * p1 - pow(d, 2) * p1 + pow(d, 2) * p2 + pow(2 * h2 + D, 2) * p3 - pow(D, 2) * p3) / 1000000
        const L = pow(2.5 * 385 * E * I / (5 * q) * 1000, 1 / 4)

        // 等效长度
        // const l2 = W / q - l1 * q
        const l2 = 9.8 * W / q * 1000 - l1

        // 跨距校核
        this.general_output.L.check_result = L_ + l2 <= L ? "通过" : "不通过"

        this.general_output.I.value = round(I, precision)
        this.general_output.q.value = round(q, precision)
        this.general_output.l2.value = round(l2, precision)
        this.general_output.L.value = round(L, precision)

        this.$refs.caseDialog.save()
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.D.value = ''
      this.general_input.d.value = ''
      this.general_input.h1.value = ''
      this.general_input.h1_or_d.value = 0

      this.general_output.I.value = '--'
    },
    clean2() {
      this.general_input.T.value = ''
      this.general_input.P.value = ''
      this.general_input.V.value = 2.5
      this.general_input.p3.value = ''
      this.general_input.h2.value = ''
      this.general_input.p1.value = 7850
      this.general_input.E.value = ''
      this.general_input.p2.value = 1000

      this.general_output.q.value = '--'
      this.general_output.L.value = '--'
      this.general_output.L.check_result = '--'
    },
    clean3() {
      this.general_input.W.value = ''
      this.general_input.l1.value = ''

      this.general_output.l2.value = '--'
    },
    clean4() {
      this.general_input.L_.value = ''
      this.general_output.L.check_result = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
      this.clean3()
      this.clean4()
    }
  }
}
</script>
