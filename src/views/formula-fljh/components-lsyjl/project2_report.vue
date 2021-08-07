<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <el-row>
      <el-col :span="24">
        <el-table
          :data="result"
          border>
          <el-table-column
            prop="Peq"
            label="外载荷等效压力Peq"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FF"
            label="由压力产生的端部静压力FF(P)(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FM"
            label="保证垫片密封要求的力FM(P)(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FS"
            label="室温下的FS(P)(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FS0"
            label="修正后的FS0(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FS_"
            label="运行工况下保证密封要求的力FS'(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FS0_"
            label="温度修正后的FS0'(N)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="FSi"
            label="最终的螺栓预紧力FSi(N)"
            align="center">
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "project2_report",
  data() {
    return {
      fullscreenLoading: true,
      result: [{
        Peq: "--",
        FF: "--",
        FM: "--",
        FS: "--",
        FS0: "--",
        FS_: "--",
        FS0_: "--",
        FSi: "--"
      }],
    }
  },
  mounted() {
    this.print()
  },
  methods: {
    print() {
      setTimeout(() => {
        this.getRouterParams()
        this.fullscreenLoading = false
        this.$nextTick(() => {
          window.print()
        })
      }, 1000)
    },
    getRouterParams(){
      this.result = JSON.parse(this.$route.query.result)
      console.log(this.result)
    }
  }
}
</script>

<style scoped>
/deep/ .el-table__header{
  width: 500px !important;
}

@page{
  size: A4 portrait; /*portrait： 纵向打印,  landscape: 横向*/
}
@media print {
  .el-table thead.is-group th {
    text-align: center
  }
  tbody {
    text-align: center;
    border: 1px solid #000;
  }
  th {
    border: 1px solid #000;
  }
  td {
    border: 1px solid #000;
  }
}
</style>
