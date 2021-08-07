<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="计算压紧密封垫圈所需的力Fj" name="project1">
        <project1></project1>
      </el-tab-pane>
      <el-tab-pane label="计算保证垫片密封要求的力FS(P)" name="project2">
        <project2></project2>
      </el-tab-pane>
      <el-tab-pane label="螺栓紧固力矩计算" name="project3">
        <project3></project3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import {project1, project2, project3} from "./components-lsyjl"
export default {
  components: {
    project1,
    project2,
    project3,
  },
  name: 'luoshuanyujinli',
  data() {
    return {
      activeName: 'project1',
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}

.el-select {
  width: 250px;
}
</style>

