<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :span="4">
        <el-card class="box-card" :style="{height: productionInformationHeight + 'px'}">
          <div slot="header" class="clearfix">
            <span>产品信息</span>
          </div>
          <product-information/>
        </el-card>
        <el-card class="box-card" style="margin-top: 5px" :style="{height: runProgramHeight + 'px'}">
          <div slot="header" class="clearfix">
            <span>运行程序</span>
          </div>
          <run-program/>
        </el-card>
      </el-col>

      <el-col :span="14">
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>料盘显示</span>
            </div>
            <el-image :src="src1" class="liaopan" :style="{height: liaopanHeight + 'px'}">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-card>
        </el-col>
        <el-col :span="24" style="margin-top: 5px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>结果显示</span>
            </div>
            <el-image :src="src2" class="result" :style="{height: resultHeight + 'px'}">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <!--          <img :src="src2" style="width:100%; height:200px;">-->
          </el-card>
        </el-col>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card" :style="{height: staticInformationHeight + 'px'}">
          <div slot="header" class="clearfix">
            <span>统计信息</span>
          </div>
          <div class="chart-wrapper">
            <static-information/>
          </div>
        </el-card>
        <div :style="{height: rejudgeButtonHeight + 'px'}">
          <rejudge/>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>
// import * as echarts from 'echarts/core'
// import {BarChart} from 'echarts/charts'
//
// echarts.use(
//   [BarChart]
// );
import StaticInformation from './components/StaticInformation'
import ProductInformation from './components/ProductInformation'
import RunProgram from './components/RunProgram'
import Rejudge from './components/Rejudge'

const liaopan = require('@/assets/test_images/liaopan.jpg')
const result = require('@/assets/test_images/result.jpeg')

export default {
  name: 'DashboardAdmin',
  components: {
    Rejudge,
    RunProgram,
    StaticInformation,
    ProductInformation
  },
  data() {
    return {
      src1: liaopan,
      src2: result,
      screenHeight: window.innerHeight,
      productionInformationHeight: (window.innerHeight - 100) * 0.7,
      runProgramHeight: (window.innerHeight - 100) * 0.3,
      liaopanHeight: (window.innerHeight - 200) * 0.3,
      resultHeight: (window.innerHeight - 200) * 0.7,
      staticInformationHeight: (window.innerHeight - 100) * 0.8,
      rejudgeButtonHeight: (window.innerHeight - 100) * 0.2,
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.screenHeight = window.innerHeight
      this.productionInformationHeight = (this.screenHeight - 100) * 0.7
      this.runProgramHeight = (this.screenHeight - 100) * 0.3
      this.liaopanHeight = (this.screenHeight - 200) * 0.3
      this.resultHeight = (this.screenHeight - 200) * 0.7
      this.staticInformationHeight = (this.screenHeight - 100) * 0.8
      this.rejudgeButtonHeight = (this.screenHeight - 100) * 0.2
    }
  }
}

</script>

<style lang="scss">

.liaopan {
  width: 100%;
  //height: 100%;
}

.result {
  width: 100%;
  //height: 100%;
}

.el-card__header {
  padding: 9px 5px !important;
}

.el-card__body {
  padding: 5px !important;
}

.clearfix {
  font-size: 15px;
  text-align: center;
}
</style>
