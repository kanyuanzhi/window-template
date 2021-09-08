<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
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
              <el-col :span="6">
                <custom-el-input :para="general_input.T"></custom-el-input>
              </el-col>

              <el-col :span="6">
                <custom-el-input :para="general_input.P"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.p3"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.h2"></custom-el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.p1"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.E"></custom-el-input>
              </el-col>
              <el-col :span="6">
                <custom-el-input :para="general_input.p2"></custom-el-input>
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
              <span>跨距</span>
              <el-button @click="clean4" style="float: right;padding: 0;" type="text" size="medium"
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
                  <el-descriptions-item :label="Label(general_output.L)">{{
                      general_output.L.value
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
  name: 'NuclearCalculation',
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
        // 管道界面惯性矩
        const D = this.general_input.D.value
        const d = this.general_input.d.value
        let h1 = this.general_input.h1.value
        const h1_or_d = this.general_input.h1_or_d.value

        // 单位长度载荷
        const T = this.general_input.T.value
        const P = this.general_input.P.value
        const p3 = this.general_input.p3.value
        const h2 = this.general_input.h2.value
        const p1 = this.general_input.p1.value
        const E = this.general_input.E.value
        const p2 = this.general_input.p2.value

        // 等效长度
        const W = this.general_input.W.value
        const l1 = this.general_input.l1.value

        //----------------输出----------------//
        // 管道界面惯性矩
        let I
        switch (h1_or_d) {
          case 0:
            I = pi / 64 * (pow(D, 4) - pow(D - 2 * h1, 4))
            break
          case 1:
            I = pi / 64 * (pow(D, 4) - pow(d, 4))
            h1 = (D - d) / 2 // 选择使用内径d参与计算时，需要算出计算单位长度载荷q时用到的h1的值
            break
        }

        // 单位长度载荷
        const q = pi / 4 * (pow(D, 2) - pow(d - 2 * h1, 2)) * p1 + pow(d, 2) * p2 + (pow(D + 2 * h2, 2) - pow(D, 2)) * p3


        // 等效长度
        const l2 = W / q - l1 * q

        // 跨距
        const L = pow(2.5 * 384 * E * I / (5 * q), 1 / 4)


        this.general_output.I.value = round(I, precision)
        this.general_output.q.value = round(q, precision)
        this.general_output.l2.value = round(l2, precision)
        this.general_output.L.value = round(L, precision)
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
      this.general_input.p3.value = ''
      this.general_input.h2.value = ''
      this.general_input.p1.value = ''
      this.general_input.E.value = ''
      this.general_input.p2.value = ''

      this.general_output.q.value = '--'
    },
    clean3() {
      this.general_input.W.value = ''
      this.general_input.l1.value = ''

      this.general_output.l2.value = '--'
    },
    clean4() {
      this.general_output.L.value = '--'
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
