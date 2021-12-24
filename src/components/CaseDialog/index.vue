<template>
  <el-form>
    <el-form-item align="right">
      <el-button icon="el-icon-download" type="primary" @click="save"
                 size="small">保存算例
      </el-button>
      <el-button icon="el-icon-upload2" @click="$refs.loadCaseDialog.open()" size="small">加载算例</el-button>
      <el-button icon="el-icon-delete" @click="$refs.deleteCaseDialog.open()" size="small">删除算例</el-button>
    </el-form-item>
    <load-case-dialog ref="loadCaseDialog" :parameter="parameter"
                      @update="update"></load-case-dialog>
    <delete-case-dialog ref="deleteCaseDialog" :parameter="parameter"
                        @remove="remove"></delete-case-dialog>
  </el-form>
</template>

<script>
import localStorage from 'localStorage'
import {Message} from 'element-ui'
import LoadCaseDialog from '@/components/LoadCaseDialog'
import DeleteCaseDialog from "@/components/DeleteCaseDialog";

export default {
  name: "CaseDialog",
  components:{
    DeleteCaseDialog,
    LoadCaseDialog,
  },
  props: ["parameter"],
  data() {
    return {

    }
  },
  emits: ['update','remove','clear-output'],
  methods: {
    update(data) {
      this.$emit('update', data)
      this.clearOutput()
    },
    remove(data) {
      this.$emit('remove', data)
      this.clearOutput()
    },
    clearOutput(){
      this.$emit('clear-output', JSON.parse(localStorage.getItem(this.parameter+'_output')))
    },
    save() {
      const current_case_index = this.$store.getters.current_case_index
      const index = current_case_index[this.parameter]
      const local_cases = localStorage.getItem(this.parameter)
      if (local_cases !== null) {
        const local_cases_obj = JSON.parse(local_cases)
        local_cases_obj[index] = this.$store.getters[this.parameter].input
        localStorage.setItem(this.parameter, JSON.stringify(local_cases_obj))
      }
      Message.success("保存算例" + index + "成功！")
    },
  }
}
</script>

<style scoped lang="scss">

</style>
