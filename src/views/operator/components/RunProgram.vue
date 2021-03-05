<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" id="el-tabs">
    <el-tab-pane label="训练" name="first">
      <div class="button-wrapper">
        <el-button type="success" icon="el-icon-video-play" circle>
        </el-button>
        <br>
        <div class="words"><span>开始训练</span></div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="检测" name="second">
      <div class="button-wrapper">
        <el-button type="success" icon="el-icon-video-play" circle></el-button>
        <br>
        <div class="words"><span>开始检测</span></div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "RunProgram",
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
.button-wrapper {
  text-align: center;
  padding-bottom: 10px;
  /*height: 100px;*/
}

#el-tabs .el-tabs__nav {
  width: 100%;
}

#el-tabs .el-tabs__item {
  width: 50%;
  text-align: center;
  padding: 0;
}

#el-tabs .el-button.is-circle {
  height: 60px;
  width: 60px;
  text-align: center;
}

#el-tabs .el-icon-video-play{
  font-size: 30px;
}

#el-tabs .words{
  font-size: 14px;
  color: #606266;
  margin-top: 10px;
}
</style>
