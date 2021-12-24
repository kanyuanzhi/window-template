<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>核岛支吊架跨距</span>
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
              <custom-tr section="管道界面惯性矩" input_output="input" para="D" rowspan="4"></custom-tr>
              <custom-tr section="管道界面惯性矩" input_output="input" para="d"></custom-tr>
              <custom-tr section="管道界面惯性矩" input_output="input" para="h1"></custom-tr>
              <custom-tr section="管道界面惯性矩" input_output="output" para="I"></custom-tr>

              <custom-tr section="单位长度载荷" input_output="input" para="E" rowspan="6"></custom-tr>
<!--              <custom-tr section="单位长度载荷" input_output="input" para="V"></custom-tr>-->
              <custom-tr section="单位长度载荷" input_output="input" para="p1"></custom-tr>
              <custom-tr section="单位长度载荷" input_output="input" para="p2"></custom-tr>
              <custom-tr section="单位长度载荷" input_output="input" para="p3"></custom-tr>
              <custom-tr section="单位长度载荷" input_output="input" para="h2"></custom-tr>
              <custom-tr section="单位长度载荷" input_output="output" para="q"></custom-tr>

              <custom-tr section="等效长度" input_output="input" para="W" rowspan="3"></custom-tr>
              <custom-tr section="等效长度" input_output="input" para="l1"></custom-tr>
              <custom-tr section="等效长度" input_output="output" para="l2"></custom-tr>

              <custom-tr section="跨距校核" input_output="output" para="L" rowspan="3"></custom-tr>
              <custom-tr section="跨距校核" input_output="input" para="L_"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">
                    校核结果
                  </div>
                </td>
                <td></td>
                <td>
                  <div class="custom-cell">
                    {{general.output.L.check_result}}
                  </div>
                </td>
              </tr>
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
