<template>
  <div class="app-container">
    <el-form ref="form" label-width="170px">
      <el-form-item label="请选择需要校核的工况：">
        <el-checkbox-group v-model="needCheckList" @change="needCheckListChange($event)">
          <el-checkbox label="设计工况"></el-checkbox>
          <el-checkbox label="运行工况"></el-checkbox>
          <el-checkbox label="异常工况"></el-checkbox>
          <el-checkbox label="紧急工况"></el-checkbox>
          <el-checkbox label="事故工况"></el-checkbox>
          <el-checkbox label="试验工况"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName">
      <el-tab-pane label="设计工况" name="design" :hidden="!design.input.need_check"
                   :disabled="!design.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="design"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="运行工况" name="running" :hidden="!running.input.need_check"
                   :disabled="!running.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="running"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="异常工况" name="abnormal" :hidden="!abnormal.input.need_check"
                   :disabled="!abnormal.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="abnormal"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="紧急工况" name="emergency" :hidden="!emergency.input.need_check"
                   :disabled="!emergency.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="emergency"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="事故工况" name="accident" :hidden="!accident.input.need_check"
                   :disabled="!accident.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="accident"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="试验工况" name="trial" :hidden="!trial.input.need_check"
                   :disabled="!trial.input.need_check">
        <condition-template :case_index="case_index" :general="general" :condition="trial"></condition-template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ConditionTemplate from './components/ConditionTemplate'
import localStorage from "localStorage";

export default {
  components: {
    ConditionTemplate
  },
  name: 'Condition',
  props: ['general', 'design', 'running', 'abnormal', 'emergency', 'accident', 'trial', 'case_index'],
  data() {
    return {
      activeName: 'design',
      // needCheckList: ['设计工况', '运行工况', '异常工况', '紧急工况', '事故工况', '试验工况']
      needCheckList: []
    }
  },
  created() {
    if (this.design.input.need_check) this.needCheckList.push('设计工况')
    if (this.running.input.need_check) this.needCheckList.push('运行工况')
    if (this.abnormal.input.need_check) this.needCheckList.push('异常工况')
    if (this.emergency.input.need_check) this.needCheckList.push('紧急工况')
    if (this.accident.input.need_check) this.needCheckList.push('事故工况')
    if (this.trial.input.need_check) this.needCheckList.push('试验工况')
  },
  methods: {
    needCheckListChange(event) {
      event.includes('设计工况') ? this.design.input.need_check = true : this.design.input.need_check = false
      event.includes('运行工况') ? this.running.input.need_check = true : this.running.input.need_check = false
      event.includes('异常工况') ? this.abnormal.input.need_check = true : this.abnormal.input.need_check = false
      event.includes('紧急工况') ? this.emergency.input.need_check = true : this.emergency.input.need_check = false
      event.includes('事故工况') ? this.accident.input.need_check = true : this.accident.input.need_check = false
      event.includes('试验工况') ? this.trial.input.need_check = true : this.trial.input.need_check = false
    },
  }
}
</script>

<style scoped>

</style>
