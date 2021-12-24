<template>
  <el-dialog title="加载算例" :visible="visible" width="500px">
    <el-form>
      <el-radio-group v-model="current_case_index[parameter]">
        <el-radio :label="'case1'">算例1</el-radio>
        <el-radio :label="'case2'">算例2</el-radio>
        <el-radio :label="'case3'">算例3</el-radio>
        <el-radio :label="'case4'">算例4</el-radio>
        <el-radio :label="'case5'">算例5</el-radio>
      </el-radio-group>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false" size="medium">取 消</el-button>
      <el-button type="primary" @click="confirm" size="medium">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import localStorage from 'localStorage'
import {Message} from 'element-ui'

export default {
  name: "LoadCaseDialog",
  props: ["parameter"],
  data() {
    return {
      visible: false,
      current_case_index: this.$store.getters.current_case_index,
    }
  },
  emits: ['update'],
  methods: {
    open() {
      this.visible = true
      return this.$nextTick()
    },
    confirm() {
      this.visible = false
      // 点击确认按钮后，首先将store中的数据更新到本地
      localStorage.setItem("current_case_index", JSON.stringify(this.current_case_index))
      // 取出本地存储的该参数的算例数据
      const local_case = localStorage.getItem(this.parameter)
      console.log(this.parameter)
      const local_case_obj = JSON.parse(local_case)
      // 将store中的数据更新为这一算例序号对应的数据
      if (this.parameter.includes("rcc_m")) {
        // 由于flange_rcc_m包括general、design等不同参数，因此需要单独处理
        this.$store.commit("parameter_flange_rcc_m/update_" + this.parameter, local_case_obj[this.current_case_index[this.parameter]])
      } else {
        this.$store.commit("parameter_" + this.parameter + "/update", local_case_obj[this.current_case_index[this.parameter]])
      }
      this.update(local_case_obj[this.current_case_index[this.parameter]])
      Message.success("加载算例" + this.current_case_index[this.parameter] + "成功!")
    },
    update(data) {
      // this.input[this.para] = parseFloat(event)
      this.$emit('update', data)
    },
  }
}
</script>

<style scoped lang="scss">

</style>
