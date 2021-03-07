<template>
  <el-form style="padding-top: 5px">
    <el-divider content-position="center">产品选择</el-divider>
    <el-form-item>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-divider content-position="center">产品图片</el-divider>
    <el-form-item>
      <el-image :src="src" class="example">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-form-item>
    <el-divider content-position="center">产品介绍</el-divider>
    <el-form-item>
      <div class="product-description-wrapper">
        <span>
          {{ textarea }}
        </span>
      </div>
    </el-form-item>
  </el-form>

</template>

<script>
const product1 = require('@/assets/test_images/product1.jpg')
const product2 = require('@/assets/test_images/product2.jpg')

export default {
  name: "ProductInformation",
  data() {
    return {
      options: [{
        value: 0,
        label: '产品1'
      }, {
        value: 1,
        label: '产品2'
      }],
      value: null,
      src: '',
      srcs: [product1, product2],
      textarea:'',
      textareas: ['产品1：本产品主要针对电脑板卡，背景颜色为黄色','产品2：本产品主要针对芯片板卡，背景颜色为蓝色']
    }
  },
  watch: {
    value: function (val){
      this.textarea = this.textareas[val]
      this.src = this.srcs[val]
    }
  }
}
</script>

<style scoped>
.example {
  width: 100%;
  /*height: 150px;*/
}

.el-select {
  display: inline !important;
}

.el-form-item {
  margin-bottom: 10px !important;
}

.product-description-wrapper {
  padding: 0 10px;
  line-height: 30px;
  /*height: 100px;*/
}

.el-divider__text {
  color: #949698 !important;
  width: 100px;
  text-align: center;
}
</style>
