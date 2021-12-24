<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20" :offset="2">
        <div id="print-area">
          <div class="report-header">
            <span>华龙一号 闸阀启闭力矩</span>
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
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="miu_1" rowspan="20"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="theta"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Ds"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="delta_P"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Dt"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Pfonc"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Dtcm"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="gc"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="hcm"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="S"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="PMS"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="PPE"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="FB"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="ra"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="ri"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="h"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="miu_st"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="R"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="fD"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="FB"></custom-tr>

              <custom-tr section="输入参数（螺纹与系数参数）" input_output="input" para="D" rowspan="15"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="PP"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="Rm"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Lead"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Nbf"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="alpha"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="output" para="tan_alpha"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="miu_3"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="RMB"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="beta"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="RCAD"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="Ma"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="gama"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="i"></custom-tr>
              <custom-tr section="输入参数（系统与参数结构）" input_output="input" para="eta"></custom-tr>

              <custom-tr section="中间过程参数" input_output="output" para="Q1" rowspan="8"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Q2"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Q3_1"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Q3_2"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q4"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q5"></custom-tr>
              <custom-tr section="中间过程参数" input_output="input" para="Q6"></custom-tr>
              <custom-tr section="中间过程参数" input_output="output" para="Tf"></custom-tr>

              <tr>
                <td rowspan="5">
                  <div class="custom-cell">结果数据</div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ formatLabel(general.input.Q3_type) }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ Q3Type }}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-cell">
                    {{ formatLabel(general.input.with_gear) }}
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                  </div>
                </td>
                <td>
                  <div class="custom-cell">
                    {{ WithGear }}
                  </div>
                </td>
              </tr>
              <custom-tr section="结果数据" input_output="output" para="C"></custom-tr>
<!--              <custom-tr section="结果数据" input_output="output" para="Cma_without_gear"></custom-tr>-->
<!--              <custom-tr section="结果数据" input_output="output" para="Cma_with_gear"></custom-tr>-->
<!--              <custom-tr section="结果数据" input_output="output" para="CRT_without_gear"></custom-tr>-->
<!--              <custom-tr section="结果数据" input_output="output" para="CRT_with_gear"></custom-tr>-->
              <custom-tr section="结果数据" input_output="output" para="Cma"></custom-tr>
              <custom-tr section="结果数据" input_output="output" para="CRT"></custom-tr>
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
  computed:{
    Q3Type(){
      return this.general.input.Q3_type.value === 1
        ? this.general.input.Q3_type.items[0].meaning
        : this.general.input.Q3_type.items[1].meaning
    },
    WithGear() {
      return this.general.input.with_gear.value === 1
        ? this.general.input.with_gear.items[0].meaning
        : this.general.input.with_gear.items[1].meaning
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
