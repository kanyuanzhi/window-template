<template>
  <div class="app-container" ref="container">
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="loadImg">载入图片</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">裁剪选择区域</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="选择区域">
            <el-input type="text" v-model="rectPosition"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>

    <canvas
      id="myCanvas"
      ref="myCanvas"
      style="position: absolute"
      :height="myCanvas.height"
      :width="myCanvas.width"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
    ></canvas>
  </div>
</template>

<script>
import { getImage, cropImage } from '@/api-python/simple'
import { getStyle } from '@/utils/common'

export default {
  data() {
    return {
      imgData: null,
      currentImgData: null,
      myCanvas: {
        height: 0,
        width: 0
      },
      myImg: {
        src: '',
        height: 0,
        width: 0
      },
      X: 0,
      Y: 0,
      currentX: 0,
      currentY: 0,
      leftTopX: 0,
      leftTopY: 0,
      rightBottomX: 0,
      rightBottomY: 0,
      ctx: null,
      drawFlag: false,
      rectPosition: '',
      bottomFlag: false,
      topFlag: false,
      leftFlag: false,
      rightFlag: false,
      translationFlag: false,
      leftTopFlag: false,
      rightTopFlag: false,
      leftBottomFlag: false,
      rightBottomFlag: false,
      deltaX: 0,
      deltaY: 0,
      p: 1,
      imgPath: ''
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
    async loadImg() {
      const pageWidth = this.$refs.container.clientWidth - getStyle(this.$refs.container, 'padding') * 2
      const { data } = await getImage(pageWidth)
      const { imgArray, height, width, p, imgPath } = data
      this.myCanvas.height = height
      this.myCanvas.width = width
      this.p = p
      this.imgPath = imgPath
      this.ctx = this.$refs.myCanvas.getContext('2d')
      this.imgData = this.ctx.createImageData(width, height)
      await this.fromArrayToImageData(imgArray, this.imgData.data)
      await this.ctx.putImageData(this.imgData, 0, 0)
      // this.myImg.src = this.$refs.myCanvas.toDataURL('type/jpeg')
      // this.myImg.width = width
      // this.myImg.height = height
      // ctx.strokeRect(50, 50, 180, 120)
    },
    onMouseDown(e) {
      this.X = e.offsetX
      this.Y = e.offsetY
      console.log(this.X, this.Y)
      if (this.X > this.leftTopX + 20 && this.X < this.rightBottomX - 20 && this.Y > this.rightBottomY - 20 && this.Y < this.rightBottomY + 20) {
        this.bottomFlag = true
      } else if (this.X > this.leftTopX + 20 && this.X < this.rightBottomX - 20 && this.Y > this.leftTopY - 20 && this.Y < this.leftTopY + 20) {
        [this.leftTopY, this.rightBottomY] = [this.rightBottomY, this.leftTopY]
        this.topFlag = true
      } else if (this.X > this.rightBottomX - 20 && this.X < this.rightBottomX + 20 && this.Y > this.leftTopY + 20 && this.Y < this.rightBottomY - 20) {
        this.rightFlag = true
      } else if (this.X > this.leftTopX - 20 && this.X < this.leftTopX + 20 && this.Y > this.leftTopY + 20 && this.Y < this.rightBottomY - 20) {
        [this.leftTopX, this.rightBottomX] = [this.rightBottomX, this.leftTopX]
        this.leftFlag = true
      } else if (this.X > this.leftTopX - 20 && this.X < this.leftTopX + 20 && this.Y > this.leftTopY - 20 && this.Y < this.leftTopY + 20) {
        [this.leftTopX, this.rightBottomX] = [this.rightBottomX, this.leftTopX];
        [this.leftTopY, this.rightBottomY] = [this.rightBottomY, this.leftTopY]
        this.leftTopFlag = true
      } else if (this.X > this.rightBottomX - 20 && this.X < this.rightBottomX + 20 && this.Y > this.leftTopY - 20 && this.Y < this.leftTopY + 20) {
        [this.leftTopY, this.rightBottomY] = [this.rightBottomY, this.leftTopY]
        this.rightTopFlag = true
      } else if (this.X > this.leftTopX - 20 && this.X < this.leftTopX + 20 && this.Y > this.rightBottomY - 20 && this.Y < this.rightBottomY + 20) {
        [this.leftTopX, this.rightBottomX] = [this.rightBottomX, this.leftTopX]
        this.leftBottomFlag = true
      } else if (this.X > this.rightBottomX - 20 && this.X < this.rightBottomX + 20 && this.Y > this.rightBottomY - 20 && this.Y < this.rightBottomY + 20) {
        this.rightBottomFlag = true
      } else if (this.X > this.leftTopX + 20 && this.X < this.rightBottomX - 20 && this.Y > this.leftTopY + 20 && this.Y < this.rightBottomY - 20) {
        this.translationFlag = true
      } else {
        this.drawFlag = true
      }
      this.showRect()
    },
    onMouseMove(e) {
      if (this.drawFlag) {
        this.drawNew(e)
      }
      if (this.bottomFlag) {
        this.drawBottom(e)
      }
      if (this.topFlag) {
        this.drawTop(e)
      }
      if (this.rightFlag) {
        this.drawRight(e)
      }
      if (this.leftFlag) {
        this.drawLeft(e)
      }
      if (this.translationFlag) {
        this.drawTraslation(e)
      }
      if (this.leftTopFlag) {
        this.drawLeftTop(e)
      }
      if (this.rightTopFlag) {
        this.drawRightTop(e)
      }
      if (this.leftBottomFlag) {
        this.drawLeftBottom(e)
      }
      if (this.rightBottomFlag) {
        this.drawRightBottom(e)
      }
      this.showRect()
    },
    onMouseUp() {
      if (this.rightBottomX < this.leftTopX) {
        [this.leftTopX, this.rightBottomX] = [this.rightBottomX, this.leftTopX]
      }
      if (this.rightBottomY < this.leftTopY) {
        [this.leftTopY, this.rightBottomY] = [this.rightBottomY, this.leftTopY]
      }

      if (this.translationFlag) {
        this.leftTopX = this.leftTopX + this.deltaX
        this.leftTopY = this.leftTopY + this.deltaY
        this.rightBottomX = this.rightBottomX + this.deltaX
        this.rightBottomY = this.rightBottomY + this.deltaY
      }
      this.bottomFlag = false
      this.topFlag = false
      this.rightFlag = false
      this.leftFlag = false
      this.rightBottomFlag = false
      this.leftBottomFlag = false
      this.leftTopFlag = false
      this.rightTopFlag = false
      this.drawFlag = false
      this.translationFlag = false
      this.showRect()

      this.currentImgData = this.ctx.getImageData(0, 0, this.myCanvas.width, this.myCanvas.height)
    },
    drawNew(e) {
      this.leftTopX = this.X
      this.leftTopY = this.Y
      this.drawCorner(e)
    },
    drawBottom(e) {
      this.rightBottomY = e.offsetY
      this.draw()
    },
    drawTop(e) {
      this.rightBottomY = e.offsetY
      this.draw()
    },
    drawLeft(e) {
      this.rightBottomX = e.offsetX
      this.draw()
    },
    drawRight(e) {
      this.rightBottomX = e.offsetX
      this.draw()
    },
    drawTraslation(e) {
      this.deltaX = e.offsetX - this.X
      this.deltaY = e.offsetY - this.Y
      this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height)
      this.ctx.strokeStyle = '#FF0000'
      this.ctx.lineWidth = 1
      this.ctx.putImageData(this.imgData, 0, 0)
      this.ctx.strokeRect(this.leftTopX + this.deltaX, this.leftTopY + this.deltaY, this.rightBottomX - this.leftTopX, this.rightBottomY - this.leftTopY)
    },
    drawLeftTop(e) {
      this.drawCorner(e)
    },
    drawRightTop(e) {
      this.drawCorner(e)
    },
    drawLeftBottom(e) {
      this.drawCorner(e)
    },
    drawRightBottom(e) {
      this.drawCorner(e)
    },
    drawCorner(e) {
      this.rightBottomX = e.offsetX
      this.rightBottomY = e.offsetY
      this.draw()
    },
    draw() {
      this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height)
      this.ctx.strokeStyle = '#FF0000'
      this.ctx.lineWidth = 1
      this.ctx.putImageData(this.imgData, 0, 0)
      this.ctx.strokeRect(this.leftTopX, this.leftTopY, this.rightBottomX - this.leftTopX, this.rightBottomY - this.leftTopY)
    },
    showRect() {
      this.rectPosition = this.leftTopX + ' ' + this.leftTopY + ' ' + this.rightBottomX + ' ' + this.rightBottomY + ' ' + this.currentX + ' ' + this.currentY
      // this.rectPosition = this.leftTopX + ' ' + this.leftTopY + ' ' + (this.rightBottomX - this.leftTopX) + ' ' + (this.rightBottomY - this.leftTopY)
    },
    async onSubmit() {
      const { data } = await cropImage({ rect: [this.leftTopX, this.leftTopY, this.rightBottomX - this.leftTopX, this.rightBottomY - this.leftTopY], p: this.p, imgPath: this.imgPath })
      const { cropImgPath } = data
      this.$message('裁剪图像已保存在：' + cropImgPath)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

