<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名" prop="username">
        <el-input ref="username" v-model="form.username" name="username" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input ref="name" v-model="form.name" name="name" clearable></el-input>
      </el-form-item>
      <el-form-item label="介绍" prop="introduction">
        <el-input ref="introduction" v-model="form.introduction" name="introduction" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="onSubmit">确认</el-button>
        <el-button @click.native.prevent="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {updateUserInfo} from "@/api/user";
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      form: {
        name: this.$store.getters.name,
        username: this.$store.getters.username,
        introduction: this.$store.getters.introduction
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('user/editProfile', this.form).then(res => {
        this.$message(res.data)
      }).catch(() => {
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.el-form{
  width: 800px;
}
</style>

