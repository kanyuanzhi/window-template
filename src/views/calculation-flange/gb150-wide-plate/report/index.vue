<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>GB150宽面板式法兰校核</span>
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
              <custom-tr section="设计条件" input_output="input" para="P_stress" rowspan="6"></custom-tr>
              <custom-tr section="设计条件" input_output="output" para="Pc"></custom-tr>
              <custom-tr section="设计条件" input_output="input" para="T"></custom-tr>
              <custom-tr section="设计条件" input_output="input" para="F"></custom-tr>
              <custom-tr section="设计条件" input_output="input" para="M"></custom-tr>
              <custom-tr section="设计条件" input_output="output" para="Peq"></custom-tr>

<!--              <custom-tr section="法兰连接部件" input_output="input" para="flange_connector_materials_name"-->
<!--                         rowspan="2"></custom-tr>-->
<!--              <custom-tr section="法兰连接部件" input_output="input" para="Sigma_nt"></custom-tr>-->

              <custom-tr section="法兰" input_output="input" para="flange_materials_name" rowspan="8"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="Sigma_f"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="Sigma_ft"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="Do"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="Di"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="Db_flange"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="delta_0"></custom-tr>
              <custom-tr section="法兰" input_output="input" para="delta_1"></custom-tr>

              <custom-tr section="螺栓" input_output="input" para="bolt_materials_name" rowspan="6"></custom-tr>
              <custom-tr section="螺栓" input_output="input" para="Sigma_b"></custom-tr>
              <custom-tr section="螺栓" input_output="input" para="Sigma_bt"></custom-tr>
              <custom-tr section="螺栓" input_output="input" para="dB"></custom-tr>
              <custom-tr section="螺栓" input_output="input" para="P"></custom-tr>
              <custom-tr section="螺栓" input_output="input" para="n"></custom-tr>

              <custom-tr section="垫片" input_output="input" para="gasket_type" rowspan="15"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="D"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="Di_"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="Db_bolt"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="db"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="b__2"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="m"></custom-tr>
              <custom-tr section="垫片" input_output="input" para="y"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="b_"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="b0_"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="Lp_"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="Lt_"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="LD"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="LR"></custom-tr>
              <custom-tr section="垫片" input_output="output" para="DG_"></custom-tr>

              <custom-tr section="螺栓受力计算" input_output="input" para="Eb" rowspan="16"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="input" para="Ebt"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Fa_"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Fp_"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="F_"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="FD"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="FT_"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="FR"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Wa"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Wp"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Am"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Ab"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="input" para="CS_"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">{{ [general.output.CS.meaning, general.output.CS.label].join(' ') }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ general.output.CS.unit }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ [general.output.CS.value_1, general.output.CS.value_2].join('~') }}</div>
                </td>
              </tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="Wp_"></custom-tr>
              <custom-tr section="螺栓受力计算" input_output="output" para="FR_"></custom-tr>

              <custom-tr section="法兰校核" input_output="output" para="MO" rowspan="2"></custom-tr>
              <custom-tr section="法兰校核" input_output="output" para="delta_f"></custom-tr>
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
import {max} from "mathjs"

export default {
  name: "Report",
  props: ['general'],
  components: {
    CustomTr
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
      if (para.format_label !== undefined) {
        return para.format_label
      }
      return para.meaning.concat(' ', para.label)
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
