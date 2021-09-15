<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="80px">
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
            <el-row :gutter="10">
              <el-col :span="6">
                <custom-el-input :para="general_input.T"
                                 :disabled="general_input.heat_preservation.value===0"></custom-el-input>
              </el-col>
              <el-col :span="10">
                <el-form-item :label="general_input.heat_preservation.meaning" size="small" :inline="true">
                  <el-radio-group v-model="general_input.heat_preservation.value">
                    <el-radio :label="general_input.heat_preservation.items[0].selection">{{
                        general_input.heat_preservation.items[0].meaning
                      }}
                    </el-radio>
                    <el-radio :label="general_input.heat_preservation.items[1].selection">{{
                        general_input.heat_preservation.items[1].meaning
                      }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>输出参数</span>
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
                  <el-descriptions-item :label="Label(general_output.L_liquid)">{{
                      general_output.L_liquid.value
                    }}
                  </el-descriptions-item>
                  <el-descriptions-item :label="Label(general_output.L_vapor)">{{
                      general_output.L_vapor.value
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
    <el-divider class="custom-el-divider--horizontal">水平管道支吊架最大间距表（单位：m）</el-divider>
    <el-row>
      <el-col :span="24">
        <el-table
          v-loading="loading"
          :data="table_data_use_h1"
          height="500"
          border
          style="width: 100%;">
          <el-table-column
            fixed
            :filters="this.filters"
            :filter-method="filterHandler"
            prop="D"
            :label="general_input.D.meaning.concat(general_input.D.unit)">
          </el-table-column>
          <el-table-column
            fixed
            prop="h1"
            :label="general_input.h1.meaning.concat(general_input.h1.unit)">
          </el-table-column>
          <el-table-column label="管内介质温度（℃）">
            <el-table-column label="无保温">
              <el-table-column
                prop="0liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="0vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="100">
              <el-table-column
                prop="100liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="100vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="150">
              <el-table-column
                prop="150liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="150vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="200">
              <el-table-column
                prop="200liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="200vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="250">
              <el-table-column
                prop="250liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="250vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="300">
              <el-table-column
                prop="300liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="300vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="350">
              <el-table-column
                prop="350liquid"
                label="水管">
              </el-table-column>
              <el-table-column
                prop="350vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="400">
              <el-table-column
                prop="400vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="450">
              <el-table-column
                prop="450vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="500">
              <el-table-column
                prop="500vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="540">
              <el-table-column
                prop="540vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
            <el-table-column label="570">
              <el-table-column
                prop="570vapor"
                label="汽管">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {formatLabel, search} from '@/utils/common'

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

import d_json from '@/assets/data/d.json'
import h1_json from '@/assets/data/h1.json'

const precision = defaultSettings.precision

export default {
  name: 'ConventionalCalculation',
  props: ['general'],
  components: {
    CustomElInput
  },
  data() {
    return {
      loading: true,
      general_input: this.general.input,
      general_output: this.general.output,
      data_use_d: d_json,
      data_use_h1: h1_json,
      T_range: [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 540, 570],
      table_data_use_h1: [],
      filters: [],
    }
  },
  created() {
    this.loadTable()
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
        // 输入参数
        const D = this.general_input.D.value
        const d = this.general_input.d.value
        let h1 = this.general_input.h1.value
        const h1_or_d = this.general_input.h1_or_d.value
        let T
        const heat_preservation = this.general_input.T.heat_preservation
        if (heat_preservation === 0) {
          T = 0
        } else {
          T = this.general_input.T.value
        }

        //----------------输出----------------//
        // 跨距
        if (h1_or_d === 1) {
          h1 = (D - d) / 2
        }

        const keys_D_string = Object.keys(this.data_use_h1)
        const keys_D_float = []
        for (let i = 0; i < keys_D_string.length; i++) {
          keys_D_float.push(parseFloat(keys_D_string[i]))
        }
        // console.log(keys_D_string)
        // console.log(keys_D_float)

        const target_D_float = search(keys_D_float, D)
        const target_D_index = keys_D_float.indexOf(target_D_float)
        const target_D_string = keys_D_string[target_D_index]
        const target_D_json = this.data_use_h1[target_D_string]

        const keys_h1_string = Object.keys(target_D_json)
        const keys_h1_float = []
        for (let i = 0; i < keys_h1_string.length; i++) {
          keys_h1_float.push(parseFloat(keys_h1_string[i]))
        }
        const target_h1_float = search(keys_h1_float, h1)
        const target_h1_index = keys_h1_float.indexOf(target_h1_float)
        const target_h1_string = keys_h1_string[target_h1_index]
        const target_h1_json = target_D_json[target_h1_string]

        const keys_T_string = Object.keys(target_h1_json)
        const keys_T_float = []
        for (let i = 0; i < keys_T_string.length; i++) {
          keys_T_float.push(parseFloat(keys_T_string[i]))
        }
        const target_T_float = search(keys_T_float, T)
        const target_T_index = keys_T_float.indexOf(target_T_float)
        const target_T_string = keys_T_string[target_T_index]
        const target_T_json = target_h1_json[target_T_string]

        this.general_output.L_vapor.value = target_T_json['vapor']
        if (target_T_json['liquid'] === undefined) {
          this.general_output.L_liquid.value = target_h1_json['350']['liquid']// 350为水管的最大温度
        } else {
          this.general_output.L_liquid.value = target_T_json['liquid']
        }
      } catch (e) {
        Message.error(e)
      }
    },
    clean1() {
      this.general_input.D.value = ''
      this.general_input.d.value = ''
      this.general_input.h1.value = ''
      this.general_input.h1_or_d.value = 0
      this.general_input.T.value = ''
      this.general_input.heat_preservation.value = 0
    },
    clean2() {
      this.general_output.L_liquid.value = '--'
      this.general_output.L_vapor.value = '--'
    },
    cleanAll() {
      this.clean1()
      this.clean2()
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    async loadTable() {
      for (let D in this.data_use_h1) {
        this.filters.push({
          text: parseFloat(D),
          value: parseFloat(D),
        })
        for (let h1 in this.data_use_h1[D]) {
          const item = {
            'D': parseFloat(D),
            'h1': parseFloat(h1),
          }
          for (let T in this.data_use_h1[D][h1]) {
            if (parseInt(T) < 400) {
              item[T + 'liquid'] = this.data_use_h1[D][h1][T]['liquid']
              item[T + 'vapor'] = this.data_use_h1[D][h1][T]['vapor']
            } else {
              item[T + 'vapor'] = this.data_use_h1[D][h1][T]['vapor']
            }
          }
          this.table_data_use_h1.push(item)
        }
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
/*/deep/ .el-table th {*/
/*  text-align: center;*/
/*}*/
</style>
