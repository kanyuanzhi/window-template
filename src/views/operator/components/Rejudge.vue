<template>
  <el-button class="rejudge-button" icon="el-icon-refresh-right" round @click="openViceOperator">复判</el-button>
</template>

<script>
import {ipcRenderer} from 'electron'

export default {
  name: 'Rejudge',
  methods: {
    async openViceOperator() {
      ipcRenderer.send('openViceWindow')
      // let BrowserWindow = remote.BrowserWindow
      // let viceWindow = new BrowserWindow({
      //   width: 600,
      //   height: 400,
      //   frame: true,
      //   webPreferences: {
      //     nodeIntegration: true
      //   }
      // })
      // await viceWindow.loadURL('www.baidu.com')

      // if (process.env.WEBPACK_DEV_SERVER_URL) {
      //   // Load the url of the dev server if in development mode
      //   viceWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'/#/vice-operator')
      //   if (!process.env.IS_TEST) viceWindow.webContents.openDevTools()
      // } else {
      //   // createProtocol('app')
      //   // Load the index.html when not in development
      //   viceWindow.loadURL('app://./index.html'+'/#/vice-operator')
      //   viceWindow.on('closed', () => { viceWindow = null })
      // }
    }
  }
}
</script>

<style scoped>
.rejudge-button {
  width: 100%;
  height: 100%;
  margin-top: 5px;
  font-size: 35px;
  background-color: #304156;
  color: white;
}
</style>
