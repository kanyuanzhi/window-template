<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="addRules" label-width="120px">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input ref="oldPassword" v-model="form.oldPassword" name="oldPassword" clearable minlength="6" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input ref="newPassword" v-model="form.newPassword" name="newPassword" clearable minlength="6" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmNewPassword">
        <el-input ref="confirmNewPassword" v-model="form.confirmNewPassword" name="confirmNewPassword" clearable minlength="6" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="onSubmit">确认</el-button>
        <el-button @click.native.prevent="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码位数不能小于6位'))
      } else {
        callback()
      }
    }
    const validateConfirmNewPassword = (rule, value, callback) => {
      if (value !== this.form.newPassword) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      addRules: {
        oldPassword: [{ required: true, trigger: 'blur', validator: validatePassword }],
        newPassword: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmNewPassword: [{ required: true, trigger: 'blur', validator: validateConfirmNewPassword }]
      }
    }
  },
  methods: {
    onSubmit() {
      // this.$message('submit!')
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/changePassword', this.form).then(() => {
            // this.$router.push({ path: this.redirect || '/' })
            // this.loading = false
            this.$message('修改成功，请重新登录！')
            this.logout()
          }).catch(() => {
            this.$message('修改失败！')
          })
        } else {
          this.$message('err submit!')
          return false
        }
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

