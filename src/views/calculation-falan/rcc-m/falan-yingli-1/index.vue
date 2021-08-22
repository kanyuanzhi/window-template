<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">
          <el-divider>第一步</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="PM(MPa)" placeholder="法兰允许承受的压力最大值" :input="input" para="PM"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="P(MPa)" placeholder="法兰在不同工况下承受的压力" :input="input" para="P"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item align="right">
                <el-button type="primary" @click="calculate" size="medium">计算</el-button>
                <el-button @click="clean" size="medium">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <!--      <el-col :span="4">-->
      <!--        <div class="demo-image__placeholder">-->
      <!--          <div class="block">-->
      <!--            <el-image :src="img_luomu">-->
      <!--              <div slot="placeholder" class="image-slot">-->
      <!--                加载中<span class="dot">...</span>-->
      <!--              </div>-->
      <!--            </el-image>-->
      <!--            <span class="demonstration">螺母示意图</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </el-col>-->
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-descriptions border :column="4">
      <el-descriptions-item label="法兰校核结果">{{ output.falan_check_result_3_1 }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, pi, pow, round} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'falan-yingli-1',
  props: ['input', 'output', 'result'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_luomu: require('@/assets/model_images/flange_rcc_m_bolt.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      const PM = this.input.PM
      const P = this.input.P

      //----------------输出----------------//
      if (P < PM) {
        this.output.falan_check_result_3_1 = "通过"
      }else {
        this.output.falan_check_result_3_1 = "不通过"
      }
    },
    clean() {
      this.input.PM = ""
      this.input.P = ""

      this.output.falan_check_result_3_1 = "--"
    },
  }
}
</script>

<style scoped>

</style>
