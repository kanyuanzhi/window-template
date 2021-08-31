<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>阀门手册 球阀启闭力矩</span>
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
              <custom-tr section="输入参数一" input_output="input" para="Rk" rowspan="7"></custom-tr>
              <custom-tr section="输入参数一" input_output="input" para="Rm"></custom-tr>
              <custom-tr section="输入参数一" input_output="input" para="P"></custom-tr>
              <custom-tr section="输入参数一" input_output="input" para="miu_k"></custom-tr>
              <custom-tr section="输入参数一" input_output="input" para="a"></custom-tr>
              <custom-tr section="输入参数一" input_output="output" para="sin_beta"></custom-tr>
              <custom-tr section="输入参数一" input_output="output" para="cos_beta"></custom-tr>

              <custom-tr section="输入参数二" input_output="input" para="P" rowspan="6"></custom-tr>
              <custom-tr section="输入参数二" input_output="input" para="miu"></custom-tr>
              <custom-tr section="输入参数二" input_output="input" para="n"></custom-tr>
              <custom-tr section="输入参数二" input_output="input" para="h"></custom-tr>
              <custom-tr section="输入参数二" input_output="input" para="dc"></custom-tr>
              <custom-tr section="输入参数二" input_output="input" para="s"></custom-tr>

              <custom-tr section="中间过程参数" input_output="output" para="MK" rowspan="3"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="MT"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="MS"></custom-tr>
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
  computed: {},
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
