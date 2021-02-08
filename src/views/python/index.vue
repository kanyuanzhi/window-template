<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="loginRules" label-width="120px">
      <el-form-item label-width="0">
        <el-col :span="12">
          <el-form-item label="a" prop="a">
            <el-input ref="a" type="text" name="a" v-model="form.a"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="b" prop="b">
            <el-input ref="b" type="text" name="b" v-model="form.b"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="a + b = ">
        <el-input type="text" v-model="c"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">计算</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { add } from '@/api-python/simple'
import { validNumber } from '@/utils/validate'

export default {
  data() {
    const validateNumber = (rule, value, callback) => {
      if (!validNumber(value)) {
        callback(new Error('数字格式不正确'))
      } else {
        callback()
      }
    }
    return {
      form: {
        a: '',
        b: ''
      },
      c: '',
      loginRules: {
        a: [{ required: true, trigger: 'blur', validator: validateNumber }],
        b: [{ required: true, trigger: 'blur', validator: validateNumber }]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          new Promise((resolve, reject) => {
            add(this.form).then(response => {
              const { data } = response
              this.c = data
              resolve()
            }).catch(error => {
              reject(error)
            })
          })
        } else {
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
.line {
  text-align: center;
}
</style>

