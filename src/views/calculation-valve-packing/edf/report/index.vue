<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>EDF 阀门盘根力矩</span>
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
              <custom-tr section="输入参数" input_output="input" para="P" rowspan="9"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="Do"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="Di"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="Pitch"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="r"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="Rma"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="f"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="f_"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="n"></custom-tr>

              <custom-tr section="结果参数" input_output="output" para="Cs" rowspan="1"></custom-tr>
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
