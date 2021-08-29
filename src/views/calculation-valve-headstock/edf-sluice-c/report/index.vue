<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>EDF C型闸阀启闭力矩</span>
          </div>
          <div class="report-panel" style="margin-bottom: 20px">
            <table class="custom-table">
              <thead>
              <tr>
                <td width="10%"></td>
                <td width="30%">计算内容</td>
                <td width="10%">单位</td>
                <td width="50%">值</td>
              </tr>
              </thead>
              <tbody>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="miu_1" rowspan="10"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="theta"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Ds"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="delta_P"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Sp"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Dt"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Pms"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="h"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="FR"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Pfonc"></custom-tr>

              <custom-tr section="输入参数（螺纹与系数参数）" input_output="input" para="miu_2" rowspan="10"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="beta"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="P"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="Rm"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="alpha"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="tan_alpha"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="d"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Ph"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="R"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="CR"></custom-tr>

              <custom-tr section="中间过程参数" input_output="output" para="Q1" rowspan="8"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Q2"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Q3"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q4"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q5"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q6"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Qt"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Tf"></custom-tr>

              <custom-tr section="结果数据" input_output="output" para="C" rowspan="1"></custom-tr>
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

export default {
  name: "Report",
  props: ['general'],
  components: {
    CustomTr,
  },
  data() {
    return {
      print: {
        id: 'print-area',
        popTitle: '计算报告',
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
