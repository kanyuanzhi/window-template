<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="addRules" label-width="120px">
      <el-form-item label="用户名" prop="username">
        <el-input ref="username" v-model="form.username" name="username" clearable minlength="1" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input ref="password" v-model="form.password" name="password" clearable minlength="6" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input ref="confirmPassword" v-model="form.confirmPassword" name="confirmPassword" clearable minlength="6" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="onSubmit">创建</el-button>
        <el-button @click.native.prevent="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码位数不能小于6位'))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      addRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmPassword: [{ required: true, trigger: 'blur', validator: validateConfirmPassword }]
      }
    }
  },
  methods: {
    onSubmit() {
      // this.$message('submit!')
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/register', this.form).then(() => {
            // this.$router.push({ path: this.redirect || '/' })
            // this.loading = false
            this.$message('添加成功!')
          }).catch(() => {
            this.$message('添加失败!')
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

