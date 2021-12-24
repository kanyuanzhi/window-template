<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>GB150窄面法兰校核</span>
          </div>
          <div class="report-panel" style="margin-bottom: 20px">
            <table class="custom-table">
              <tbody>
              <tr class="head">
                <td width="10%"></td>
                <td width="30%">计算内容</td>
                <td width="10%">单位</td>
                <td width="50%">值</td>
              </tr>
              <custom-tr section="垫片参数" input_output="input" para="gasket_materials_name" rowspan="10"></custom-tr>
              <custom-tr section="垫片参数" input_output="input" para="DGO"></custom-tr>
              <custom-tr section="垫片参数" input_output="input" para="DGI"></custom-tr>
              <custom-tr section="垫片参数" input_output="input" para="EG"></custom-tr>
              <custom-tr section="垫片参数" input_output="input" para="y"></custom-tr>
              <custom-tr section="垫片参数" input_output="input" para="m"></custom-tr>
              <custom-tr section="垫片参数" input_output="output" para="N"></custom-tr>
              <custom-tr section="垫片参数" input_output="output" para="b0"></custom-tr>
              <custom-tr section="垫片参数" input_output="output" para="b"></custom-tr>
              <custom-tr section="垫片参数" input_output="output" para="DG"></custom-tr>

              <custom-tr section="螺栓参数" input_output="input" para="bolt_materials_name" rowspan="13"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="dB"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="P"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="Dpb"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="f"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="f_"></custom-tr>
              <custom-tr section="螺栓参数" input_output="input" para="n"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="r"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="Dee"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="Rma"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="KI"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="Sb"></custom-tr>
              <custom-tr section="螺栓参数" input_output="output" para="n_Sb"></custom-tr>

              <custom-tr section="法兰参数" input_output="input" para="flange_materials_name" rowspan="9"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="Do"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="Di"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="Db"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="delta_f"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="delta_0"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="delta_1"></custom-tr>
              <custom-tr section="法兰参数" input_output="input" para="h"></custom-tr>
              <custom-tr section="法兰参数" input_output="output" para="DG"></custom-tr>

              <custom-tr section="法兰形状系数" input_output="output" para="g0" rowspan="52"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="g1"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="h_shape"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="B"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="h0"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="h_h0"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="delta_1_0"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="delta_1_0"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C1"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C2"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C3"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C4"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C5"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C6"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C7"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C8"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C9"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C10"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C11"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C12"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C13"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C14"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C15"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C16"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C17"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C18"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C19"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C20"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C21"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C22"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C23"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C24"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C25"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C26"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C27"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C28"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C29"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C30"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C31"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C32"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C33"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C34"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C35"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C36"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="C37"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E1"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E2"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E3"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E4"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E5"></custom-tr>
              <custom-tr section="法兰形状系数" input_output="output" para="E6"></custom-tr>

              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="A_diameter" rowspan="6"></custom-tr>
              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="K"></custom-tr>
              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="T_factor"></custom-tr>
              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="U"></custom-tr>
              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="Y"></custom-tr>
              <custom-tr section="计算K、T、U、Y、Z" input_output="output" para="Z"></custom-tr>

              <custom-tr section="计算FI、VI和f（仅适用于整体法兰）" input_output="output" para="FI" rowspan="3"></custom-tr>
              <custom-tr section="计算FI、VI和f（仅适用于整体法兰）" input_output="output" para="VI"></custom-tr>
              <custom-tr section="计算FI、VI和f（仅适用于整体法兰）" input_output="output" para="f_factor"></custom-tr>

              <custom-tr section="法兰计算系数" input_output="output" para="LD" rowspan="15"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="LG"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="LT"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="LA"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="FI_type"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="K"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="T_factor"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="Y"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="U"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="Z"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="FI_type"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="VI_type"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="f_factor_type"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="e_"></custom-tr>
              <custom-tr section="法兰计算系数" input_output="output" para="Lam"></custom-tr>

              <custom-tr section="螺栓校核" input_output="input" para="P_stress" rowspan="20"></custom-tr>
              <custom-tr section="螺栓校核" input_output="input" para="T_temperature"></custom-tr>
              <custom-tr section="螺栓校核" input_output="input" para="Sigma_b"></custom-tr>
              <custom-tr section="螺栓校核" input_output="input" para="Sigma_bt"></custom-tr>
              <custom-tr section="螺栓校核" input_output="input" para="Eb"></custom-tr>
              <custom-tr section="螺栓校核" input_output="input" para="Ebt"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Fa"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Fp"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="F"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Wa"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Wp"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Aa"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Ap"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Am"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="Ab"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="W"></custom-tr>
              <custom-tr section="螺栓校核" input_output="output" para="W_"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">{{ [general.output.T.meaning, general.output.T.label].join(' ') }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ general.output.T.unit }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ [general.output.T.value_1, general.output.T.value_2].join('~') }}</div>
                </td>
              </tr>
              <custom-tr section="螺栓校核" input_output="input" para="T_"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">校核结果</div>
                </td>
                <td>
                  <div class="custom-cell"></div>
                </td>
                <td>
                  <div class="custom-cell">{{ general.input.T_.check_result }}</div>
                </td>
              </tr>

              <custom-tr section="法兰校核" input_output="input" para="P_stress" rowspan="33"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="T_temperature"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="Sigma_f"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="Sigma_ft"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="Ef"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="Eft"></custom-tr>
              <custom-tr section="法兰校核" input_output="input" para="KI_factor"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="Fsi"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="FD"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="F"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="FT"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="FG"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="Mp"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="Ma"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="Mo"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="Di1"></custom-tr>

              <custom-tr section="法兰校核" input_output="output" para="Sigma_H"></custom-tr>
              <custom-tr-limit section="法兰校核" input_output="output" para="Sigma_H"></custom-tr-limit>
              <custom-tr-check-result section="法兰校核" input_output="output" para="Sigma_H"></custom-tr-check-result>

              <custom-tr section="法兰校核" input_output="output" para="Sigma_R"></custom-tr>
              <custom-tr-limit section="法兰校核" input_output="output" para="Sigma_R"></custom-tr-limit>
              <custom-tr-check-result section="法兰校核" input_output="output" para="Sigma_R"></custom-tr-check-result>

              <custom-tr section="法兰校核" input_output="output" para="Sigma_T"></custom-tr>
              <custom-tr-limit section="法兰校核" input_output="output" para="Sigma_T"></custom-tr-limit>
              <custom-tr-check-result section="法兰校核" input_output="output" para="Sigma_T"></custom-tr-check-result>


              <custom-tr section="法兰校核" input_output="output" para="Sigma_H_R"></custom-tr>
              <custom-tr-limit section="法兰校核" input_output="output" para="Sigma_H_R"></custom-tr-limit>
              <custom-tr-check-result section="法兰校核" input_output="output" para="Sigma_H_R"></custom-tr-check-result>

              <custom-tr section="法兰校核" input_output="output" para="Sigma_H_T"></custom-tr>
              <custom-tr-limit section="法兰校核" input_output="output" para="Sigma_H_T"></custom-tr-limit>
              <custom-tr-check-result section="法兰校核" input_output="output" para="Sigma_H_T"></custom-tr-check-result>

              <custom-tr section="法兰校核" input_output="output" para="KI_index"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">
                    {{ formatLabel(general.output.KI_index).concat(' ', '限值') }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ general.output.KI_index.unit }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ general.input.KI_index_limit.value }}
                  </div>
                </td>
              </tr>

              <custom-tr-check-result section="法兰校核结果" input_output="output" para="KI_index" :rowspan="1"></custom-tr-check-result>


              </tbody>
            </table>
          </div>
        </div>
        <el-form>
          <el-row>
            <el-col :span="24">
              <el-form-item align="right">
                <el-button type="primary" v-print="print">打印</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CustomTr from './components/CustomTr'
import CustomTrLimit from './components/CustomTrLimit'
import CustomTrCheckResult from './components/CustomTrCheckResult'
import {max} from "mathjs"

export default {
  name: "Report",
  props: ['general'],
  components: {
    CustomTr,
    CustomTrLimit,
    CustomTrCheckResult
  },
  data() {
    return {
      print: {
        id: 'print-area',
        popTitle: '校核报告',
      }
    }
  },
  methods: {
    formatLabel(para) {
      return [para.meaning, para.label].join(' ')
    },
  }
}
</script>

<style scoped>
/*/deep/.cell{*/
/*  text-align: center;*/
/*}*/

.report-header {
  font-size: 20px;
  text-align: center;
  /*color: #606266;*/
  padding-bottom: 10px;
  padding-top: 20px;
}

.custom-table {
  width: 100%;
  font-size: 15px;
  border: 2px solid #5a5e66;
  border-collapse: collapse;
}

.head td {
  border: 1px solid #5a5e66;
  border-bottom: 2px solid #5a5e66;
  text-align: center;
  height: 40px;
  font-weight: bold;
}

td {
  border: 1px solid #5a5e66;
  text-align: center;
}

.custom-cell {
  line-height: normal;
  padding: 8px 4px;
}
</style>
