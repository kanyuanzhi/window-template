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
              <custom-tr section="输入参数" input_output="input" para="D" rowspan="5"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="d"></custom-tr>
              <custom-tr section="输入参数" input_output="input" para="h1"></custom-tr>
              <tr>
                <td>
                  <div class="custom-cell">
                    {{ formatLabel(general.input['heat_preservation']) }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ general.input['heat_preservation'].unit }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ general.input['heat_preservation'].items[general.input['heat_preservation'].value].meaning }}
                  </div>
                </td>
              </tr>
              <custom-tr section="输入参数" input_output="input" para="T"></custom-tr>

              <custom-tr section="跨距" input_output="output" para="L_liquid"rowspan="2"></custom-tr>
              <custom-tr section="跨距" input_output="output" para="L_vapor"></custom-tr>
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
