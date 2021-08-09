<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="app-container">
    <el-row>
      <el-col :span="24">
        <el-table
          :data="result"
          border>
          <el-table-column
            prop="r"
            label="螺栓螺纹顶半径r(mm)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Rma"
            label="Rma(mm)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="SB"
            label="螺栓实际根部截面积SB(mm2)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="CS"
            label="螺栓紧固力矩CS(N/m)"
            align="center">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "project3_report",
  data() {
    return {
      fullscreenLoading: true,
      result: [{
        r: "--",
        Rma: "--",
        SB: "--",
        CS: "--"
      }]
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
    getRouterParams() {
      this.result = JSON.parse(this.$route.query.result)
      console.log(this.result)
    }
  }
}
</script>

<style scoped>
/deep/ .el-table__header {
  width: 500px !important;
}

@page {
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
