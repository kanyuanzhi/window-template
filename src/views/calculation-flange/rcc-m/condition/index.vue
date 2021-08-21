<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="设计工况" name="design">
        <condition-template :general="general" :condition="design"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="运行工况" name="running">
      </el-tab-pane>
      <el-tab-pane label="异常工况" name="abnormal">
      </el-tab-pane>
      <el-tab-pane label="紧急工况" name="emergency">
      </el-tab-pane>
      <el-tab-pane label="事故工况" name="accident">
      </el-tab-pane>
      <el-tab-pane label="试验工况" name="trial">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ConditionTemplate from './components/ConditionTemplate'

export default {
  components: {
    ConditionTemplate
  },
  name: 'Condition',
  props: ['general', 'design'],
  data() {
    return {
      activeName: 'design',
      design_input: this.$store.getters.flange_rccm_design_input,
      design_output: this.$store.getters.flange_rccm_design_output,
    }
  }
}
</script>

<style scoped>

</style>
