<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>RCC-M法兰校核</span>
          </div>
          <div class="report-panel" style="margin-bottom: 20px">
            <table class="custom-table">
              <thead>
              <tr>
                <td width="4%"></td>
                <td width="17%">计算内容</td>
                <td width="8%">单位</td>
                <td width="12%">设计工况</td>
                <td width="12%">运行工况</td>
                <td width="12%">异常工况</td>
                <td width="12%">紧急工况</td>
                <td width="12%">事故工况</td>
                <td width="12%">试验工况</td>
              </tr>
              </thead>
              <tbody>
              <custom-tr section="垫片参数" :is_general="true" input_output="input" para="m" rowspan="7"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="input" para="y"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="input" para="Do"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="input" para="Di"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="output" para="b0"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="output" para="b"></custom-tr>
              <custom-tr section="垫片参数" :is_general="true" input_output="output" para="Dj"></custom-tr>

              <custom-tr section="实际螺栓面积" :is_general="true" input_output="input" para="d" rowspan="4"></custom-tr>
              <custom-tr section="实际螺栓面积" :is_general="true" input_output="input" para="n"></custom-tr>
              <custom-tr section="实际螺栓面积" :is_general="true" input_output="output" para="SB_"></custom-tr>
              <custom-tr section="实际螺栓面积" :is_general="true" input_output="output" para="SB"></custom-tr>

              <custom-tr section="法兰压紧力" :is_general="false" input_output="input" para="P" rowspan="7"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="input" para="Fa"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="input" para="Mf"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="output" para="Peq"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="output" para="FF"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="output" para="FM"></custom-tr>
              <custom-tr section="法兰压紧力" :is_general="false" input_output="output" para="FS"></custom-tr>

              <custom-tr section="螺栓所需最小截面面积" :is_general="false" input_output="input" para="S_bolt"
                         rowspan="8"></custom-tr>
              <custom-tr section="螺栓所需最小截面面积" :is_general="false" input_output="input" para="Sy"></custom-tr>
              <custom-tr section="螺栓所需最小截面面积" :is_general="false" input_output="input" para="Ec"></custom-tr>
              <custom-tr section="螺栓所需最小截面面积" :is_general="false" input_output="input" para="Eh"></custom-tr>
              <tr>
                <td rowspan="2">
                  <div class="custom-cell">{{ formatLabel(design.output.SA) }}</div>
                </td>
                <td rowspan="2">
                  <div class="custom-cell">{{ design.output.SA.unit }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ design.output.SA.value }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ running.output.SA.value }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ abnormal.output.SA.value }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ emergency.output.SA.value }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ accident.output.SA.value }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ trial.output.SA.value }}</div>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="custom-cell">{{ SA_max }}</div>
                </td>
              </tr>
              <tr>
                <td rowspan="2">
                  <div class="custom-cell">螺栓面积校核</div>
                </td>
                <td rowspan="2">
                  <div class="custom-cell"></div>
                </td>
                <td>
                  <div class="custom-cell">{{ design.output.SA.check_result }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ running.output.SA.check_result }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ abnormal.output.SA.check_result }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ emergency.output.SA.check_result }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ accident.output.SA.check_result }}</div>
                </td>
                <td>
                  <div class="custom-cell">{{ trial.output.SA.check_result }}</div>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <div class="custom-cell">{{ SA_check }}</div>
                </td>
              </tr>

              <custom-tr section="螺栓预紧力" :is_general="false" input_output="input" para="Faq" rowspan="4"></custom-tr>
              <custom-tr section="螺栓预紧力" :is_general="false" input_output="input" para="Mfn"></custom-tr>
              <custom-tr section="螺栓预紧力" :is_general="false" input_output="output" para="FT"></custom-tr>
              <custom-tr section="螺栓预紧力" :is_general="false" input_output="output" para="FSi"></custom-tr>

              <custom-tr section="法兰尺寸" :is_general="true" input_output="input" para="A" rowspan="2"></custom-tr>
              <custom-tr section="法兰尺寸" :is_general="true" input_output="input" para="B"></custom-tr>

              <custom-tr section="法兰力" :is_general="false" input_output="output" para="SA_SB" rowspan="6"></custom-tr>
              <custom-tr section="法兰力" :is_general="false" input_output="output" para="HD"></custom-tr>
              <custom-tr section="法兰力" :is_general="false" input_output="output" para="HT"></custom-tr>
              <custom-tr section="法兰力" :is_general="false" input_output="output" para="HD_"></custom-tr>
              <custom-tr section="法兰力" :is_general="false" input_output="output" para="HT_"></custom-tr>
              <custom-tr section="法兰力" :is_general="false" input_output="output" para="HG"></custom-tr>

              <custom-tr section="法兰力矩" :is_general="true" input_output="input" para="C" rowspan="18"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="input" para="g1"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="input" para="g0"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="input" para="h"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="input" para="Ep"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="output" para="R"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="output" para="hd"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="output" para="hg"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="output" para="ht"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MD"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MT"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MD_"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MT_"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MG"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MA"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="MO"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="true" input_output="output" para="C0"></custom-tr>
              <custom-tr section="法兰力矩" :is_general="false" input_output="output" para="M"></custom-tr>

              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="g1_20" rowspan="20"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="h0"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="h_h0"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="g1_g0"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="input" para="lam"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="B1"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="K"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="T"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="Y"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="U"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="Z"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="input" para="F"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="input" para="mu"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="input" para="V"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="e_"></custom-tr>
              <custom-tr section="法兰应力" :is_general="true" input_output="output" para="L"></custom-tr>
              <custom-tr section="法兰应力" :is_general="false" input_output="output" para="SH"></custom-tr>
              <custom-tr section="法兰应力" :is_general="false" input_output="output" para="SR"></custom-tr>
              <custom-tr section="法兰应力" :is_general="false" input_output="output" para="ST"></custom-tr>
              <custom-tr section="法兰应力" :is_general="false" input_output="output" para="SH_SR"></custom-tr>
              <custom-tr section="法兰应力" :is_general="false" input_output="output" para="SH_ST"></custom-tr>

              <custom-tr section="法兰应力限值" :is_general="false" input_output="output" para="SH" rowspan="5"
                         value="limit"></custom-tr>
              <custom-tr section="法兰应力限值" :is_general="false" input_output="output" para="SR" value="limit"></custom-tr>
              <custom-tr section="法兰应力限值" :is_general="false" input_output="output" para="ST" value="limit"></custom-tr>
              <custom-tr section="法兰应力限值" :is_general="false" input_output="output" para="SH_SR"
                         value="limit"></custom-tr>
              <custom-tr section="法兰应力限值" :is_general="false" input_output="output" para="SH_ST"
                         value="limit"></custom-tr>

              <custom-tr section="法兰应力评定结果" :is_general="false" input_output="output" para="SH" rowspan="5"
                         value="check_result"></custom-tr>
              <custom-tr section="法兰应力评定结果" :is_general="false" input_output="output" para="SR"
                         value="check_result"></custom-tr>
              <custom-tr section="法兰应力评定结果" :is_general="false" input_output="output" para="ST"
                         value="check_result"></custom-tr>
              <custom-tr section="法兰应力评定结果" :is_general="false" input_output="output" para="SH_SR"
                         value="check_result"></custom-tr>
              <custom-tr section="法兰应力评定结果" :is_general="false" input_output="output" para="SH_ST"
                         value="check_result"></custom-tr>
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
  props: ['general', 'design', 'running', 'abnormal', 'emergency', 'accident', 'trial'],
  components: {
    CustomTr
  },
  data() {
    return {
      print:{
        id: 'print-area',
        popTitle: '校核报告',
      }
    }
  },
  computed: {
    SA_max() {
      if (this.design.output.SA.value !== '--'
        && this.running.output.SA.value !== '--'
        && this.abnormal.output.SA.value !== '--'
        && this.emergency.output.SA.value !== '--'
        && this.accident.output.SA.value !== '--'
        && this.trial.output.SA.value !== '--') {
        return max(this.design.output.SA.value,
          this.running.output.SA.value,
          this.abnormal.output.SA.value,
          this.emergency.output.SA.value,
          this.accident.output.SA.value,
          this.trial.output.SA.value,)
      } else {
        return '--（有工况未计算）'
      }
    },
    SA_check() {
      if (this.design.output.SA.check_result === '通过'
        && this.running.output.SA.check_result === '通过'
        && this.abnormal.output.SA.check_result === '通过'
        && this.emergency.output.SA.check_result === '通过'
        && this.accident.output.SA.check_result === '通过'
        && this.trial.output.SA.check_result === '通过') {
        return '通过'
      } else {
        return '不通过'
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

thead td {
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
