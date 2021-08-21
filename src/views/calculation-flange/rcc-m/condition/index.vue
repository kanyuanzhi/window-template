<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="设计工况" name="design">
        <condition-template :general="general" :condition="design"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="运行工况" name="running">
        <condition-template :general="general" :condition="running"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="异常工况" name="abnormal">
        <condition-template :general="general" :condition="abnormal"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="紧急工况" name="emergency">
        <condition-template :general="general" :condition="emergency"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="事故工况" name="accident">
        <condition-template :general="general" :condition="accident"></condition-template>
      </el-tab-pane>
      <el-tab-pane label="试验工况" name="trial">
        <condition-template :general="general" :condition="trial"></condition-template>
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
  props: ['general', 'design', 'running', 'abnormal', 'emergency', 'accident', 'trial'],
  data() {
    return {
      activeName: 'design',
    }
  }
}
</script>

<style scoped>

</style>
