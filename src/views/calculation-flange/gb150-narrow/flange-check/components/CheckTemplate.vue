<template>
  <div>
    <div class="div-item">{{ para.label }}</div>
    <div class="div-item">值：{{ para.value }}</div>
    <div class="div-item">限值：{{ para.limit }}</div>
    <el-result :icon="Icon" :title="Title" subTitle="">
    </el-result>
  </div>
</template>

<script>
import {formatLabel} from '@/utils/common'

export default {
  name: "CheckTemplate",
  props: ['para'],
  data() {
    return {}
  },
  computed: {
    Label() {
      return (para) => {
        return formatLabel(para)
      }
    },
    Title() {
      switch (this.para.check_result) {
        case '--':
          return '待校核'
        case '通过':
          return '通过'
        case '不通过':
          return '不通过'
      }
    },
    Icon() {
      switch (this.para.check_result) {
        case '--':
          return 'info'
        case '通过':
          return 'success'
        case '不通过':
          return 'error'
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.div-item {
  text-align: center;
  padding-bottom: 10px;
  color: #606266;
  font-size: 14px;
  font-weight: 400;
}
</style>
