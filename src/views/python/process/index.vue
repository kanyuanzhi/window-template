<template>
  <div class="app-container" ref="container">
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>
    <canvas
      id="myCanvas"
      ref="myCanvas"
      :height="myCanvas.height"
      :width="myCanvas.width"
      @mousedown="onMouseDown"
    ></canvas>
    <!-- <img :src="myImg.src" :height="myImg.height" :width="myImg.width" /> -->
    <div class="caption">myCanvas</div>
  </div>
</template>

<script>
import { process } from '@/api-python/simple'
import { getStyle } from '@/utils/common'

export default {
  data() {
    return {
      imgData: null,
      myCanvas: {
        height: 0,
        width: 0
      },
      myImg: {
        src: '',
        height: 0,
        width: 0
      }
    }
  },
  methods: {
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    async fromArrayToImageData(imgArray, data) {
      for (let i = 0; i < imgArray.length; i++) {
        data[4 * i] = imgArray[i]
        data[4 * i + 1] = imgArray[i]
        data[4 * i + 2] = imgArray[i]
        data[4 * i + 3] = 255
      }
    },
    async onSubmit() {
      const pageWidth = this.$refs.container.clientWidth - getStyle(this.$refs.container, 'padding') * 2
      const { data } = await process(pageWidth)
      const { imgArray, height, width } = data
      this.myCanvas.height = height
      this.myCanvas.width = width
      const ctx = this.$refs.myCanvas.getContext('2d')
      this.imgData = ctx.createImageData(width, height)
      await this.fromArrayToImageData(imgArray, this.imgData.data)
      await ctx.putImageData(this.imgData, 0, 0)
      // this.myImg.src = this.$refs.myCanvas.toDataURL('type/jpeg')
      // this.myImg.width = pageWidth
      // this.myImg.height = height * pageWidth / width
      ctx.strokeRect(50, 50, 180, 120)
    },
    onMouseDown(e) {
      console.log(e.offsetX)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

