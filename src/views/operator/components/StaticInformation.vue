<template>
  <el-row>
    <el-col :span="24">
      <el-divider content-position="center">分类统计</el-divider>
      <div class="bar-wrapper">
        <div :class="className" :style="{height:height,width:width}" ref="bar"></div>
      </div>
    </el-col>
    <el-col :span="24">
      <el-divider content-position="center">总体统计</el-divider>
      <el-form label-width="150px" style="padding-top: 10px">
        <el-form-item label="缺陷种类数：">
          <el-tag type="warning">{{ defectTypeNumber }}</el-tag>
        </el-form-item>
        <el-form-item label="缺陷样品数：">
          <el-tag type="danger">{{ defectProductNumber }}</el-tag>
        </el-form-item>
        <el-form-item label="检测样品数：">
          <el-tag>{{ detectedProductNumber }}</el-tag>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
var echarts = require('echarts/lib/echarts')

require('echarts/lib/chart/bar')
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 0

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '250px'
    }
  },
  data() {
    return {
      chart: null,
      totalProductNumber: 200,
      defectTypeNumber: 6,
      defectProductNumber: 27,
      detectedProductNumber: 100,
      defectTypePercentage: 0,
      defectProductPercentage: 0,
      detectedProductPercentage: 0,
      successColor: '#67c23a',
      colors: [
        {color: '#ba3c9f', percentage: 20},
        {color: '#d2ac39', percentage: 40},
        {color: '#5174de', percentage: 60},
        {color: '#3ac2b7', percentage: 80},
        {color: '#67c23a', percentage: 100}
      ]
    }
  },
  created() {
    this.defectTypePercentage = this.defectTypeNumber / this.totalProductNumber * 100
    this.defectProductPercentage = this.defectProductNumber / this.totalProductNumber * 100
    this.detectedProductPercentage = this.detectedProductNumber / this.totalProductNumber * 100
  },
  watch: {
    defectTypeNumber: function (val) {
      this.defectTypePercentage = val / this.totalNumber
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    formatDefectTypeNumber(percentage) {
      return this.defectTypeNumber
      // return percentage === 100 ? '满' : `${percentage}%`;
    },
    formatDefectProductNumber(percentage) {
      return this.defectProductNumber
      // return percentage === 100 ? '满' : `${percentage}%`;
    },
    formatDetectedProductNumber(percentage) {
      return this.detectedProductNumber
      // return percentage === 100 ? '满' : `${percentage}%`;
    },
    formatTotalProductNumber(percentage) {
      return this.totalProductNumber
    },
    initChart() {
      this.chart = echarts.init(this.$refs.bar, 'macarons')

      this.chart.setOption({
        // tooltip: {
        //   trigger: 'item',
        //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //   }
        // },
        // title : {
        //   show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        //   text: '主标题', //主标题文本，'\n'指定换行
        // },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [{
          type: 'category',
          // data: ['杂质', '脏污', '镂空', '漏铜', '缺陷B', '缺陷A'],
          data: ['缺陷A', '缺陷B', '漏铜', '镂空', '脏污', '杂质'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#304156',//左边线的颜色
              width: '1'//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#304156',//坐标值得具体的颜色

            }
          }
        }],
        xAxis: {
          type: 'value',
          nameLocation: 'center',
          nameGap: '20',
          show: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#304156',//左边线的颜色
              width: '1'//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#304156',//坐标值得具体的颜色
            }
          }
        },
        series: {
          name: '缺陷数量',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            normal: {
              color: function (params) {
                // build a color map as your need.
                //定义一个颜色集合
                var colorList = [
                  '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                  '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                  '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                ];
                //对每个bar显示一种颜色
                return colorList[params.dataIndex]
              },
              label: {
                //每个bar的最高点值显示在bar顶部
                show: true,
                position: 'right',
                //值和x轴分类的显示格式(这里是换行显示)
                // formatter: '{b}\n{c}'
                formatter: '{c}'
              }
            }
          },
          data: [4, 6, 9, 0, 3, 5],
          animationDuration
        }
      })
    }
  }
}
</script>

<style scoped>
.el-progress {
  margin-top: 5px;
}

.el-tag{
  font-size: 16px !important;
}

.el-form-item{
  margin-bottom: 5px !important;
}
.el-divider__text {
  color: #949698 !important;
  width: 100px;
  text-align: center;
}
</style>
