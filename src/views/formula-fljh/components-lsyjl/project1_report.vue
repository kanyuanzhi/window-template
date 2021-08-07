<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <el-row>
      <el-col :span="24">
        <el-table
          :data="result"
          border>
          <el-table-column
            prop="Dj"
            label="垫片平均直径Dj(mm)"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Fj"
            label="压紧密封垫圈所需的力Fj(N)"
            align="center">
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "project1_report",
  data() {
    return {
      fullscreenLoading: true,
      result: [{Dj: "--", Fj: "--"}]
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
