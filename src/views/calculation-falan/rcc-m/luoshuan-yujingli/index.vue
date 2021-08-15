<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="18">
        <el-form label-width="70px">
          <el-divider>压紧密封垫圈需要的力Fj</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Di(mm)" placeholder="法兰垫片内径" :input="input" para="Di"></custom-el-input>
              <!--              <el-tooltip class="item" effect="dark" content="法兰垫片内径" placement="right">-->
              <!--                <el-form-item label="Di(mm)" size="small">-->
              <!--                  <el-input type="number" v-model="input.Di" placeholder="法兰垫片内径"/>-->
              <!--                </el-form-item>-->
              <!--              </el-tooltip>-->
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Do(mm)" placeholder="法兰垫片外径" :input="input" para="Do"></custom-el-input>
              <!--              <el-tooltip class="item" effect="dark" content="法兰垫片外径" placement="right">-->
              <!--                <el-form-item label="Do(mm)" size="small">-->
              <!--                  <el-input type="number" v-model="input.Do" placeholder="法兰垫片外径"/>-->
              <!--                </el-form-item>-->
              <!--              </el-tooltip>-->
            </el-col>
            <el-col :span="8">
              <custom-el-input label="y" placeholder="垫片密封比压力" :input="input" para="y"></custom-el-input>
              <!--              <el-tooltip class="item" effect="dark" content="垫片密封比压力" placement="right">-->
              <!--                <el-form-item label="y" size="small">-->
              <!--                  <el-input v-model="input.y" placeholder="垫片密封比压力" type="number"/>-->
              <!--                </el-form-item>-->
              <!--              </el-tooltip>-->
            </el-col>
          </el-row>
          <el-divider>保证垫片密封要求的力FS(P)</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="P(MPa)" placeholder="系统压力" :input="input" para="P_1_2"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Mf(N·m)" placeholder="系统外载荷弯矩" :input="input" para="Mf"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Fa(N)" placeholder="系统外载荷轴向力" :input="input" para="Fa"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="m" placeholder="垫片系数" :input="input" para="m"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Ec(Pa)" placeholder="室温下的弹性模量" :input="input" para="Ec"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="Eh(Pa)" placeholder="工作温度下的弹性模量" :input="input" para="Eh"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="Ps(MPa)" placeholder="系统工作压力" :input="input" para="Ps"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="FT(N)" placeholder="运行工况下克服法兰相对切向位移所需的力" :input="input"
                               para="FT"></custom-el-input>
            </el-col>
          </el-row>
          <el-divider>螺栓紧固力矩</el-divider>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="螺栓型号" size="small">
                <el-radio-group v-model="input.d">
                  <el-radio :label="1.2">M1</el-radio>
                  <el-radio :label="2.4">M2</el-radio>
                  <el-radio :label="3.5">M3</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="d(mm)" placeholder="螺栓公称直径" :input="input" para="d"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="S(mm)" placeholder="螺母平头直径" :input="input" para="S"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="P(mm)" placeholder="螺栓节距" :input="input" para="P_1_3"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="n" placeholder="螺栓数量" :input="input" para="n"></custom-el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <custom-el-input label="f" placeholder="螺纹摩擦系数" :input="input" para="f"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="f'" placeholder="螺母垫片摩擦系数" :input="input" para="f_"></custom-el-input>
            </el-col>
            <el-col :span="8">
              <custom-el-input label="PV(N)" placeholder="螺栓传递力" :input="input" para="PV"></custom-el-input>
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
      <el-col :span="6">
        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="img_luomu">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
            <span class="demonstration">螺母示意图</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider>计算结果</el-divider>
    <el-descriptions border :column="4">
      <el-descriptions-item label="垫片平均直径Dj(mm)">{{ output.Dj }}</el-descriptions-item>
      <el-descriptions-item label="压紧密封垫圈所需的力Fj(N)">{{ output.Fj }}</el-descriptions-item>
      <el-descriptions-item label="外载荷等效压力Peq">{{ output.Peq }}</el-descriptions-item>
      <el-descriptions-item label="由压力产生的端部静压力FF(P)(N)">{{ output.FF }}</el-descriptions-item>
      <el-descriptions-item label="保证垫片密封要求的力FM(P)(N)">{{ output.FM }}</el-descriptions-item>
      <el-descriptions-item label="室温下的FS(P)(N)">{{ output.FS }}</el-descriptions-item>
      <el-descriptions-item label="修正后的FS0(N)">{{ output.FS0 }}</el-descriptions-item>
      <el-descriptions-item label="运行工况下保证密封要求的力FS'(N)">{{ output.FS0 }}</el-descriptions-item>
      <el-descriptions-item label="温度修正后的FS0'(N)">{{ output.FS_ }}</el-descriptions-item>
      <el-descriptions-item label="最终的螺栓预紧力FSi(N)">{{ output.FSi }}</el-descriptions-item>
      <el-descriptions-item label="螺栓螺纹顶半径r(mm)">{{ output.r }}</el-descriptions-item>
      <el-descriptions-item label="Rma(mm)">{{ output.Rma }}</el-descriptions-item>
      <el-descriptions-item label="螺栓实际根部截面积SB(mm2)">{{ output.SB }}</el-descriptions-item>
      <el-descriptions-item label="螺栓紧固力矩CS(N/m)">{{ output.CS }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import CustomElInput from '@/components/CustomElInput'
import {max, pi, pow, round} from "mathjs"

import defaultSettings from '@/settings'

const precision = defaultSettings.precision

export default {
  name: 'luoshuan-yujingli',
  props: ['input', 'output', 'result'],
  components: {
    CustomElInput
  },
  data() {
    return {
      img_luomu: require('@/assets/model_images/luomu.png')
    }
  },
  methods: {
    calculate() {
      //----------------输入----------------//
      // 1-1 压紧密封垫圈所需的力Fj
      const Di = this.input.Di
      const Do = this.input.Do
      const y = this.input.y

      // 1-2 保证垫片密封要求的力FS(P)
      const P_1_2 = this.input.P_1_2
      const Mf = this.input.Mf
      const Fa = this.input.Fa
      const m = this.input.m
      const Ec = this.input.Ec
      const Eh = this.input.Eh
      const Ps = this.input.Ps
      const FT = this.input.FT

      // 1-3 螺栓紧固力矩
      const d = this.input.d
      const S = this.input.S
      const P_1_3 = this.input.P_1_3
      const f = this.input.f
      const f_ = this.input.f_
      const n = this.input.n
      const PV = this.input.PV

      //----------------输出----------------//
      // 1-1 压紧密封垫圈所需的力Fj
      const Dj = (Di + Do) / 2
      const Fj = pi / 4 * pow(Dj, 2) * y

      // 1-2 保证垫片密封要求的力FS(P)
      const Peq = 16 * Mf / (pi * pow(Dj, 3) + 4 * Fa / (pi * pow(Dj, 2)))
      const FF = pi / 4 * pow(Dj, 2) * (P_1_2 + Peq)
      const FM = pi / 4 * pow(Dj, 2) * m * P_1_2
      const FS = FF + FM
      const FS0 = Ec / Eh * FS
      const FS_ = pi / 4 * pow(Dj, 2) * Ps + FT
      const FS0_ = Ec / Eh * FS_
      const FSi = max(Fj, FS0, FS0_)

      // 1-3 螺栓紧固力矩
      const r = (d - 0.6495 * P_1_3) / 2
      const Rma = (d + S) / 4
      const SB = pow((d - 1.2268 * P_1_3), 2) * pi / 4 * n
      const CS = (PV * (P_1_3 / 2 / pi + f * r + f_ * Rma)) / 1000

      this.output.Dj = round(Dj, precision)
      this.output.Fj = round(Fj, precision)

      this.output.Peq = round(Peq, precision)
      this.output.FF = round(FF, precision)
      this.output.FM = round(FM, precision)
      this.output.FS = round(FS, precision)
      this.output.FS0 = round(FS0, precision)
      this.output.FS_ = round(FS_, precision)
      this.output.FS0_ = round(FS0_, precision)
      this.output.FSi = round(FSi, precision)

      this.output.r = round(r, precision)
      this.output.Rma = round(Rma, precision)
      this.output.SB = round(SB, precision)
      this.input.SB = round(SB, precision) // 螺栓校核中用到SB，可选择公式计算或手动填写
      this.output.CS = round(CS, precision)
    },
    clean() {
      this.input.Di = ""
      this.input.Do = ""
      this.input.y = ""

      this.input.P_1_2 = ""
      this.input.Mf = ""
      this.input.Fa = ""
      this.input.m = ""
      this.input.Ec = ""
      this.input.Eh = ""
      this.input.Ps = ""
      this.input.FT = ""

      this.input.d = ""
      this.input.S = ""
      this.input.P_1_3 = ""
      this.input.f = ""
      this.input.f_ = ""
      this.input.n = ""
      this.input.PV = ""

      this.output.Dj = "--"
      this.output.Fj = "--"

      this.output.Peq = "--"
      this.output.FF = "--"
      this.output.FM = "--"
      this.output.FS = "--"
      this.output.FS0 = "--"
      this.output.FS_ = "--"
      this.output.FS0_ = "--"
      this.output.FSi = "--"

      this.output.r = "--"
      this.output.Rma = "--"
      this.output.SB = "--"
      this.output.CS = "--"
    },
  }
}
</script>

<style scoped>

</style>
