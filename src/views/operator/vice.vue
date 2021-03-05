<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :span="21">
        <el-card class="box-card">
          <el-image :src="src2" class="result" :style="{height: imgHeight + 'px'}">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <!--          <img :src="src2" style="width:100%; height:200px;">-->
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-row>
          <el-col :span="24">
            <el-button class="rejudge-button rejudge-button-pass" round :style="{height: buttonHeight + 'px'}">合格
            </el-button>
          </el-col>
          <el-col :span="24">
            <el-button class="rejudge-button rejudge-button-nopass" round :style="{height: buttonHeight + 'px'}">不合格
            </el-button>
          </el-col>
        </el-row>
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

const liaopan = require('@/assets/test_images/liaopan.jpg')
const result = require('@/assets/test_images/result.jpeg')

export default {
  name: 'DashboardAdmin',
  components: {},
  data() {
    return {
      src1: liaopan,
      src2: result,
      screenHeight: window.innerHeight,
      imgHeight: window.innerHeight - 60,
      buttonHeight: (window.innerHeight - 60) / 2
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
      this.imgHeight = this.screenHeight - 60
      this.buttonHeight = this.imgHeight / 2
    }
  }
}

</script>

<style lang="scss">

.liaopan {
  width: 100%;
  height: 200px;
}

.result {
  width: 100%;
  //height: 411px;
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

.rejudge-button {
  width: 100%;
  //height: 171px;
  margin-top: 5px;
  font-size: 20px;
  color: white;
  font-weight: bold;
}

.rejudge-button-pass {
  background-color: #53c617;
}

.rejudge-button-nopass {
  background-color: #cd1524;
}
</style>
