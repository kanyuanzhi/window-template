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
            <el-row>
              <table style="width: 100%;color: #5a5e66">
                <!--                <tr style="vertical-align: top">-->
                <!--                  <td style="width: 20px">注：</td>-->
                <!--                  <td>-->
                <!--                    1.输入管道外径D、管道壁厚h1和温度T的输入数值，先向下取到水平管道支吊架最大间距表中出现的数值，再查表计算；-->
                <!--                  </td>-->
                <!--                </tr>-->
                <!--                <tr style="vertical-align: top">-->
                <!--                  <td></td>-->
                <!--                  <td>-->
                <!--                    2.当选择使用管道内径d参与计算时，由于水平管道支吊架最大间距表并未直接提供管道内径d的数值，因此先通过公式h1=(D-d)/2得到管道壁厚h1，再依表查询h1对应数值;-->
                <!--                  </td>-->
                <!--                </tr>-->
                <!--                <tr style="vertical-align: top">-->
                <!--                  <td></td>-->
                <!--                  <td>-->
                <!--                    3.输入数值在推荐表之外的提示规则：管道外径D的输入值在14.0~426.0之外时进行提示，-->
                <!--                    管道壁厚h1的输入值在管道外径D对应管道壁厚h1的值之外时进行提示（如输入管道外径h1=17.2，当输入管道壁厚D在1.4~5.4之外时进行提示），-->
                <!--                    管道内径d的输入值经过公式h1=(D-d)/2得到管道壁厚h1后依据管道壁厚h1的提示规则进行提示，-->
                <!--                    温度T的输入值在0~570之外时进行提示。-->
                <!--                  </td>-->
                <!--                </tr>-->
                <tr style="vertical-align: top">
                  <td>例：</td>
                  <td>
                    1.输入管道外径D=16、管道壁厚=1.5、温度T=95，选择“无保温”，则查询到表中对应数值分别为管道外径D=14、管道壁厚=1.4、无保温，此时输出水管跨距=2、汽管跨距=2。
                  </td>
                </tr>
              </table>
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
                <el-descriptions :column="3">
<!--                  <el-descriptions-item label="定位至表格">{{-->
<!--                      'D=' + D_target + ',h1=' + h1_target + ',T=' + T_target-->
<!--                    }}-->
<!--                  </el-descriptions-item>-->
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
    <el-divider class="custom-el-divider--horizontal">水平管道支吊架最大间距表（单位：m）</el-divider>
    <!--    <el-row>-->
    <!--      <el-col :span="24">-->
    <!--        <table class="custom-table">-->
    <!--          <thead>-->
    <!--          <td rowspan="3">{{ general_input.D.meaning.concat(general_input.D.unit) }}</td>-->
    <!--          <td rowspan="3">{{ general_input.h1.meaning.concat(general_input.h1.unit) }}</td>-->
    <!--          <td colspan="19">管内介质温度（℃）</td>-->
    <!--          <tr>-->
    <!--            <td colspan="2">无保温</td>-->
    <!--            <td colspan="2">100</td>-->
    <!--            <td colspan="2">150</td>-->
    <!--            <td colspan="2">200</td>-->
    <!--            <td colspan="2">250</td>-->
    <!--            <td colspan="2">300</td>-->
    <!--            <td colspan="2">350</td>-->
    <!--            <td>400</td>-->
    <!--            <td>450</td>-->
    <!--            <td>500</td>-->
    <!--            <td>540</td>-->
    <!--            <td>570</td>-->
    <!--          </tr>-->
    <!--          <tr>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>水管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>汽管</td>-->
    <!--            <td>汽管</td>-->
    <!--          </tr>-->
    <!--          </thead>-->
    <!--          <tbody>-->
    <!--          <custom-tr v-for="item in items" :item="item"></custom-tr>-->
    <!--          </tbody>-->
    <!--        </table>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row>
      <el-col :span="24">
        <el-form>
          <el-form-item align="center" v-show="tip_shown">
            <el-button icon="el-icon-warning" type="warning" plain @click="loadTable">
              由于间距表数据量较大，加载可能造成页面卡顿，请谨慎加载（点击加载）
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
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
import CaseDialog from '@/components/CaseDialog'
import {formatLabel, search, search_upper} from '@/utils/common'
import CustomTr from './components/CustomTr'

import {e, log, max, pi, pow, round, sqrt, atan, sin, cos, string} from "mathjs"

import defaultSettings from '@/settings'
import {Message} from "element-ui";

import d_json from '@/assets/data/d.json'
import h1_json from '@/assets/data/h1.json'

const precision = defaultSettings.precision

export default {
  name: 'ConventionalCalculation',
  props: ['general', 'case_index', 'parameter'],
  components: {
    CustomElInput,
    CaseDialog,
    CustomTr
  },
  data() {
    return {
      loading: false,
      general_input: this.general.input,
      general_output: this.general.output,
      data_use_d: d_json,
      data_use_h1: h1_json,
      T_range: [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 540, 570],
      table_data_use_h1: [],
      filters: [],
      items: [],
      tip_shown: true,
      D_target: 0,
      h1_target: 0,
      T_target: 0,
    }
  },
  created() {
    // this.loadTable()
    // this.items = this.generateTable()
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
        let d = this.general_input.d.value
        let h1 = this.general_input.h1.value
        const h1_or_d = this.general_input.h1_or_d.value
        let T
        const heat_preservation = this.general_input.heat_preservation.value
        if (heat_preservation === 0) {
          T = 0
        } else {
          T = this.general_input.T.value
        }

        //----------------输出----------------//
        // 跨距
        switch (h1_or_d) {
          case 0:
            d = D - 2 * h1
            this.general_input.d.value = round(d, precision)
            break
          case 1:
            h1 = (D - d) / 2
            this.general_input.h1.value = round(h1, precision)
            break
        }

        const keys_D_string = Object.keys(this.data_use_h1)
        const keys_D_float = []
        for (let i = 0; i < keys_D_string.length; i++) {
          keys_D_float.push(parseFloat(keys_D_string[i]))
        }
        if (D < keys_D_float[0] || D > keys_D_float[keys_D_float.length - 1]) {
          this.$message.error("管道外径D的输入值\"" + D + "\"在推荐表\"" + keys_D_string[0] + "~" + keys_D_string[keys_D_string.length - 1] + "\"之外，请重新输入！")
          return
        }
        console.log(keys_D_string)
        // console.log(keys_D_float)

        const target_D_float = search(keys_D_float, D)
        this.D_target = target_D_float
        const target_D_index = keys_D_float.indexOf(target_D_float)
        const target_D_string = keys_D_string[target_D_index]
        const target_D_json = this.data_use_h1[target_D_string]

        const keys_h1_string = Object.keys(target_D_json)
        const keys_h1_float = []
        for (let i = 0; i < keys_h1_string.length; i++) {
          keys_h1_float.push(parseFloat(keys_h1_string[i]))
        }
        if (h1 < keys_h1_float[0] || h1 > keys_h1_float[keys_h1_float.length - 1]) {
          if (h1_or_d === 0) {
            this.$message.error("管道壁厚h1的输入值\"" + h1 + "\"在推荐表\"" + keys_h1_string[0] + "~" + keys_h1_string[keys_h1_string.length - 1] + "\"之外，请重新输入！")
          } else {
            this.$message.error("管道内径d的输入值\"" + d + "\"在推荐表\"" +
              (target_D_float - 2 * keys_h1_float[keys_h1_float.length - 1]).toFixed(1) +
              "~" + (target_D_float - 2 * keys_h1_float[0]) +
              "\"之外，请重新输入！")
          }
          return
        }
        const target_h1_float = search(keys_h1_float, h1)
        this.h1_target = target_h1_float
        const target_h1_index = keys_h1_float.indexOf(target_h1_float)
        const target_h1_string = keys_h1_string[target_h1_index]
        const target_h1_json = target_D_json[target_h1_string]

        const keys_T_string = Object.keys(target_h1_json)
        const keys_T_float = []
        for (let i = 0; i < keys_T_string.length; i++) {
          keys_T_float.push(parseFloat(keys_T_string[i]))
        }
        if (T < keys_T_float[0] || T > keys_T_float[keys_T_float.length - 1]) {
          this.$message.error("管内介质温度T的输入值\"" + T + "\"在推荐表\"" + keys_T_string[0] + "~" + keys_T_string[keys_T_string.length - 1] + "\"之外，请重新输入！")
          return
        }
        const target_T_float = search_upper(keys_T_float, T)
        this.T_target = target_T_float
        const target_T_index = keys_T_float.indexOf(target_T_float)
        const target_T_string = keys_T_string[target_T_index]
        const target_T_json = target_h1_json[target_T_string]

        this.general_output.L_vapor.value = target_T_json['vapor']
        if (target_T_json['liquid'] === undefined) {
          this.general_output.L_liquid.value = "无数据"// 350为水管的最大温度
          // this.general_output.L_liquid.value = target_h1_json['350']['liquid']// 350为水管的最大温度
        } else {
          this.general_output.L_liquid.value = target_T_json['liquid']
        }

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
      this.general_input.T.value = ''
      this.general_input.heat_preservation.value = 0
    },
    clean2() {
      this.general_output.L_liquid.value = '--'
      this.general_output.L_vapor.value = '--'
      this.D_target = 0
      this.h1_target = 0
      this.T_target = 0
    },
    cleanAll() {
      this.clean1()
      this.clean2()
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    loadTable() {
      this.tip_shown = false
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
    },
    generateTable() {
      const items = []
      for (let D in this.data_use_h1) {
        for (let h1 in this.data_use_h1[D]) {
          let item = []
          item.push(D)
          item.push(h1)
          for (let T in this.data_use_h1[D][h1]) {
            if (parseInt(T) < 400) {
              item.push(this.data_use_h1[D][h1][T]['liquid'])
              item.push(this.data_use_h1[D][h1][T]['vapor'])
            } else {
              item.push(this.data_use_h1[D][h1][T]['vapor'])
            }
          }
          items.push(item)
        }

      }
      return items
    }
  }
}
</script>

<style lang="scss" scoped>
//.custom-table {
//  width: 100%;
//  font-size: 15px;
//  border: 2px solid #5a5e66;
//  border-collapse: collapse;
//
//  tbody {
//    display: block;
//    height: 195px;
//    overflow-y: scroll;
//  }
//
//  thead tr {
//    table-layout: fixed;
//  }
//
//  thead td {
//    border: 1px solid #5a5e66;
//    border-bottom: 2px solid #5a5e66;
//    text-align: center;
//    height: 40px;
//    font-weight: bold;
//  }
//
//  tbody td {
//    border: 1px solid #5a5e66;
//    text-align: center;
//  }
//
//}
//
//
//.custom-cell {
//  line-height: normal;
//  padding: 8px 4px;
//}
</style>
