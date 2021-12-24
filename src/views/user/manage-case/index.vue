<template>
  <div class="app-container">
    <el-divider>重置算例</el-divider>

    <el-row :gutter="40">
      <el-col :span="16" :offset="4">
        <el-alert title="当软件发生参数修改型更新时（如修改参数名、初始值、符号、单位等信息，或新增、删除参数），需要用户在本地重置算例。
        该操作会清空已保存算例，请在得到管理员更新通知后进行此操作。若在无通知的情况下发生算例操作异常，也可进行此操作。
        将下方进度条拖动至最右侧，等待页面自动刷新后，算例即被重置。"effect="dark" type="warning" :closable="false" show-icon>
        </el-alert>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="16" :offset="4">
        <div class="block">
          <el-slider input-size="medium" v-model="slider_value" @input="reset($event)" :show-tooltip="false"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import localStorage from "localStorage"
import {Message} from "element-ui";

export default {
  data() {
    return {
      slider_value: 0
    }
  },
  methods: {
    reset(event) {
      if (event === 100){
        localStorage.clear()
        Message.warning("算例已重置！")
        location.reload()
      }
    },
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}

.el-form {
  width: 800px;
}
</style>

