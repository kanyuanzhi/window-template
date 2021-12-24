<template>
  <el-dialog title="删除算例" :visible="visible" width="500px">
    <el-form>
      <el-checkbox-group v-model="deleteCases">
        <el-checkbox :label="'case1'">算例1</el-checkbox>
        <el-checkbox :label="'case2'">算例2</el-checkbox>
        <el-checkbox :label="'case3'">算例3</el-checkbox>
        <el-checkbox :label="'case4'">算例4</el-checkbox>
        <el-checkbox :label="'case5'">算例5</el-checkbox>
      </el-checkbox-group>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false" size="medium">取 消</el-button>
      <el-button type="primary" @click="confirm" size="medium">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import localStorage from 'localStorage'
import {Message} from "element-ui";

export default {
  name: "DeleteCaseDialog",
  props: ["parameter"],
  data() {
    return {
      visible: false,
      deleteCases: []
    }
  },
  emits: ['remove'],
  methods: {
    open() {
      this.visible = true
      return this.$nextTick()
    },
    confirm() {
      this.visible = false
      // 点击确认按钮后，首先将store中的数据更新到本地
      let local_cases = localStorage.getItem(this.parameter)
      let local_cases_obj = JSON.parse(local_cases)
      for (let i=0; i<this.deleteCases.length; i++){
        local_cases_obj[this.deleteCases[i]] = local_cases_obj['case0']
      }
      localStorage.setItem(this.parameter, JSON.stringify(local_cases_obj))
      if (this.deleteCases.includes(this.$store.getters.current_case_index[this.parameter])){
        if (this.parameter.includes("rcc_m")) {
          // 由于flange_rcc_m包括general、design等不同参数，因此需要单独处理
          this.$store.commit("parameter_flange_rcc_m/update_" + this.parameter, local_cases_obj['case0'])
        } else {
          this.$store.commit("parameter_" + this.parameter + "/update", local_cases_obj['case0'])
        }
        this.remove(local_cases_obj['case0'])
      }
      Message.success("删除算例" + this.deleteCases + "成功!")
    },
    remove(data) {
      // this.input[this.para] = parseFloat(event)
      this.$emit('remove', data)
    },
  }
}
</script>

<style scoped lang="scss">

</style>
