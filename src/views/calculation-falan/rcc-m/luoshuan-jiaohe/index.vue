<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-form label-width="70px">
          <!--          <el-row :gutter="10">-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input label="Di(mm)" placeholder="法兰垫片内径" :input="input" para="Di"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input label="Do(mm)" placeholder="法兰垫片外径" :input="input" para="Do"></custom-el-input>-->
          <!--            </el-col>-->
          <!--            <el-col :span="8">-->
          <!--              <custom-el-input label="Dj(mm)" placeholder="垫片平均直径" :input="output" para="Dj" :disabled="true"></custom-el-input>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <el-divider>通用</el-divider>

          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="螺栓材料" size="small">
                <el-radio-group v-model="input.bolt_material" @change="boltMaterialChange">
                  <el-radio :label="1">1类</el-radio>
                  <el-radio :label="2">2类</el-radio>
                  <el-radio :label="3">3类</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="SB(mm2)" size="small" :inline="true">
                <el-radio-group v-model="input.SB_is_calculated" @change="SBIsCalculatedChange">
                  <el-radio :label="true">公式计算</el-radio>
                  <el-radio :label="false">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <custom-el-input ref="SB" label_width="0" placeholder="螺栓实际根部截面积" :input="input" para="SB"
                               :disabled="input.SB_is_calculated"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>设计工况下的校核</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="T(°)" placeholder="设计温度" :input="input" para="T_2_1"
                               @custom-input="T_2_1Change"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <el-form-item label="S(MPa)" size="small">
                <el-radio-group v-model="input.S_2_1_is_calculated" @change="S_2_1IsCalculatedChange">
                  <el-radio :label="true">自动带出</el-radio>
                  <el-radio :label="false">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <custom-el-input label_width="0" placeholder="螺栓材料在设计温度下的许用应力" :input="input" para="S_2_1"
                               :disabled="input.S_2_1_is_calculated"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Pc(MPa)" placeholder="设计压力" :input="input" para="Pc"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>运行工况下的校核</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="T(°)" placeholder="运行温度" :input="input" para="T_2_2"
                               @custom-input="T_2_2Change"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <el-form-item label="S(MPa)" size="small">
                <el-radio-group v-model="input.S_2_2_is_calculated" @change="S_2_2IsCalculatedChange">
                  <el-radio :label="true">自动带出</el-radio>
                  <el-radio :label="false">手动填写</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <custom-el-input label_width="0" placeholder="螺栓材料在运行温度下的许用应力" :input="input" para="S_2_2"
                               :disabled="input.S_2_2_is_calculated"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Sy(MPa)" placeholder="螺栓材料的屈服强度" :input="input" para="Sy"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>试验工况下的校核</el-divider>
          <el-row :gutter="20">
            <el-col :span="8">
              <custom-el-input label="Pe(MPa)" placeholder="试验压力" :input="input" para="Pe"></custom-el-input>
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
      <el-descriptions-item label="设计压力下密封垫片的FS(Pc)(N)">{{ output.FSPc }}</el-descriptions-item>
      <el-descriptions-item label="设计工况下所需的螺栓最小截面积SA(mm2)">{{ output.SA_2_1 }}</el-descriptions-item>
      <el-descriptions-item label="运行工况下所需的螺栓最小截面积SA(mm2)">{{ output.SA_2_2 }}</el-descriptions-item>
      <el-descriptions-item label="试验压力下密封垫片的FS(Pe)(N)">{{ output.FSPe }}</el-descriptions-item>
      <el-descriptions-item label="试验工况下所需的螺栓最小截面积SA(mm2)">{{ output.SA_2_3 }}</el-descriptions-item>
      <el-descriptions-item label="设计工况下螺栓校核结果">{{ output.check_result_2_1 }}</el-descriptions-item>
      <el-descriptions-item label="运行工况下螺栓校核结果">{{ output.check_result_2_2 }}</el-descriptions-item>
      <el-descriptions-item label="试验工况下螺栓校核结果">{{ output.check_result_2_3 }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, min, pi, pow, round} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'luoshuan-jiaohe',
  props: ['input', 'output', 'result'],
  components: {
    CustomElInput
  },
  data() {
    return {
      // img_luomu: require('@/assets/model_images/luomu.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 通用
      const SB = this.input.SB

      // 2-1 设计工况下的校核
      const Pc = this.input.Pc
      const S_2_1 = this.input.S_2_1

      const m = this.input.m
      const Dj = this.output.Dj

      // 2-2 运行工况下的校核
      const Sy = this.input.Sy
      const S_2_2 = this.input.S_2_2

      const Eh = this.input.Eh
      const Ec = this.input.Ec
      const FSi = this.output.FSi

      // 2-3 试验工况下的校核
      const Pe = this.input.Pe

      //----------------输出----------------//
      // 2-1 设计工况下的校核
      const FSPc = pi / 4 * pow(Dj, 2) * Pc * (1 + m)
      const SA_2_1 = FSPc / S_2_1

      // 2-2 运行工况下的校核
      const SA_2_2 = Eh / Ec * FSi / min(S_2_2, Sy)

      // 2-3 试验工况下的校核
      const FSPe = pi / 4 * pow(Dj, 2) * Pe * (1 + m)
      const SA_2_3 = FSPe / (2 / 3 * Sy)

      this.output.FSPc = round(FSPc, precision)
      this.output.SA_2_1 = round(SA_2_1, precision)

      this.output.SA_2_2 = round(SA_2_2, precision)

      this.output.FSPe = round(FSPe, precision)
      this.output.SA_2_3 = round(SA_2_3, precision)

      if (SB >= SA_2_1) {
        this.output.check_result_2_1 = "通过"
      } else {
        this.output.check_result_2_1 = "不通过"
      }
      if (SB >= SA_2_2) {
        this.output.check_result_2_2 = "通过"
      } else {
        this.output.check_result_2_2 = "不通过"
      }
      if (SB >= SA_2_3) {
        this.output.check_result_2_3 = "通过"
      } else {
        this.output.check_result_2_3 = "不通过"
      }
    },
    clean() {
      this.input.SB = this.output.SB // SB的初始状态为螺栓预紧力中SB的公式计算值
      this.input.SB_is_calculated = true
      this.input.bolt_material = ""

      this.input.Pc = ""
      this.input.T_2_1 = ""
      this.input.S_2_1 = ""
      this.input.S_2_1_is_calculated = true

      this.input.Sy = ""
      this.input.T_2_2 = ""
      this.input.S_2_2 = ""
      this.input.S_2_2_is_calculated = true

      this.input.Pe = "--"

      this.output.FSPc = "--"
      this.output.SA_2_1 = "--"
      this.output.check_result_2_1 = "--"

      this.output.SA_2_2 = "--"
      this.output.check_result_2_2 = "--"

      this.output.FSPe = "--"
      this.output.SA_2_3 = "--"
      this.output.check_result_2_3 = "--"
    },
    SBIsCalculatedChange(val) {
      if (val) {
        this.input.SB = this.output.SB
      }
    },
    boltMaterialChange(val) {
      if (this.input.S_2_1_is_calculated && this.input.S_2_2_is_calculated) {
        const T_2_1 = this.input.T_2_1
        const T_2_2 = this.input.T_2_2
        switch (val) {
          case 1:
            this.input.S_2_1 = 1 * T_2_1
            this.input.S_2_2 = 1 * T_2_2
            return
          case 2:
            this.input.S_2_1 = 2 * T_2_1
            this.input.S_2_2 = 2 * T_2_2
            return
          case 3:
            this.input.S_2_1 = 3 * T_2_1
            this.input.S_2_2 = 3 * T_2_2
            return
          default:
            return
        }
      }
    },
    T_2_1Change(val) {
      if (this.input.S_2_1_is_calculated) {
        const bolt_material = this.input.bolt_material
        switch (bolt_material) {
          case 1:
            this.input.S_2_1 = 1 * val
            return
          case 2:
            this.input.S_2_1 = 2 * val
            return
          case 3:
            this.input.S_2_1 = 3 * val
            return
          default:
            return
        }
      }
    },
    T_2_2Change(val) {
      if (this.input.S_2_2_is_calculated) {
        const bolt_material = this.input.bolt_material
        switch (bolt_material) {
          case 1:
            this.input.S_2_2 = 1 * val
            return
          case 2:
            this.input.S_2_2 = 2 * val
            return
          case 3:
            this.input.S_2_2 = 3 * val
            return
          default:
            return
        }
      }
    },
    S_2_1IsCalculatedChange(val) {
      if (val){
        const T_2_1 = this.input.T_2_1
        const bolt_material = this.input.bolt_material
        switch (bolt_material) {
          case 1:
            this.input.S_2_1 = 1 * T_2_1
            return
          case 2:
            this.input.S_2_1 = 2 * T_2_1
            return
          case 3:
            this.input.S_2_1 = 3 * T_2_1
            return
          default:
            return
        }
      }
    },
    S_2_2IsCalculatedChange(val) {
      if (val){
        const T_2_2 = this.input.T_2_2
        const bolt_material = this.input.bolt_material
        switch (bolt_material) {
          case 1:
            this.input.S_2_2 = 1 * T_2_2
            return
          case 2:
            this.input.S_2_2 = 2 * T_2_2
            return
          case 3:
            this.input.S_2_2 = 3 * T_2_2
            return
          default:
            return
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
