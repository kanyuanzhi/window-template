<template>
  <el-container>
    <el-header>
      <h1>欢迎使用力学计算平台</h1>
    </el-header>
    <el-main>
      <h2>功能介绍</h2>
      <div class="main-table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="object"
            label="计算对象"
            width="150"
            align="center">
          </el-table-column>
          <el-table-column
            prop="type"
            label="分类"
            width="850"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <h2>当前登录用户信息</h2>
      <div class="user-item-label">
        用户名： {{ username }}
      </div>
      <div class="user-item-label">
        姓名： {{ name }}
      </div>
      <div class="user-item-label">
        介绍： {{ introduction }}
      </div>
      <div class="user-item-label">
        权限： {{ roles }}
      </div>
      <div class="user-item-label">
        guest用户请联系管理员分配平台使用权限
      </div>
    </el-main>
    <el-footer>
      <div class="footer-image">
        <el-image
          :src="src"></el-image>
      </div>
      <div class="footer-text-1">
        本软件所有权归阳江核电有限公司和苏州热工研究院有限公司共同所有
      </div>
      <div class="footer-text-2">
        Copyright © 2021 阳江核电有限公司&苏州热工研究院有限公司. All Rights Reserved.
      </div>
    </el-footer>
  </el-container>

  <!--  <div>-->
  <!--    <div class="dashboard-container">-->
  <!--      <el-row>-->
  <!--        <el-col :span="6" :offset="9">-->
  <!--          <h1 class="user-header">欢迎使用力学计算平台</h1>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--      <el-row>-->
  <!--        <el-col :span="6" :offset="9">-->
  <!--          <h1 class="user-header">欢迎使用力学计算平台</h1>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--      <el-row>-->
  <!--        <el-col :span="6" :offset="9">-->
  <!--          <h2 class="user-header">当前登录用户信息</h2>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--      <el-row>-->
  <!--        <el-col :span="6" :offset="9">-->
  <!--          <div class="user-item-label">-->
  <!--            用户名-->
  <!--          </div>-->
  <!--          <div class="user-item-text">-->
  <!--            {{ username }}-->
  <!--          </div>-->
  <!--          <div class="user-item-label">-->
  <!--            姓名-->
  <!--          </div>-->
  <!--          <div class="user-item-text">-->
  <!--            {{ name }}-->
  <!--          </div>-->
  <!--          <div class="user-item-label">-->
  <!--            介绍-->
  <!--          </div>-->
  <!--          <div class="user-item-text">-->
  <!--            {{ introduction }}-->
  <!--          </div>-->
  <!--          <div class="user-item-label">-->
  <!--            权限-->
  <!--          </div>-->
  <!--          <div class="user-item-text">-->
  <!--            {{ roles }}-->
  <!--          </div>-->
  <!--          <div class="user-item-label">-->
  <!--            guest用户请联系管理员分配平台使用权限-->
  <!--          </div>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--    </div>-->
  <!--    <div class="dashboard-footer">-->
  <!--      <el-row>-->
  <!--        <el-col :span="4" :offset="10">-->
  <!--          <div class="footer-image">-->
  <!--            <el-image-->
  <!--              :src="src"></el-image>-->
  <!--          </div>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--      <el-row>-->
  <!--        <el-col :span="12" :offset="6">-->
  <!--          <div class="footer-text-1">-->
  <!--            本软件所有权归阳江核电有限公司和苏州热工研究院有限公司共同所有。-->
  <!--          </div>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--      <el-row>-->
  <!--        <el-col :span="12" :offset="6">-->
  <!--          <div class="footer-text-2">-->
  <!--            Copyright © 2021 阳江核电有限公司&苏州热工研究院有限公司. All Rights Reserved.-->
  <!--          </div>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--    </div>-->
  <!--  </div>-->

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      src: require('@/assets/logo/full_logo.jpg'),
      tableData: [{
        object: '法兰校核',
        type: 'RCC-M，GB150宽面板式，GB150宽面带颈，GB150窄面',
      }, {
        object: '阀门启闭力矩',
        type: 'EDF C型闸阀，EDF V型闸阀，EDF W型闸阀，EDF S型截止阀，华龙一号 闸阀，华龙一号 截止阀，阀门手册 蝶阀，阀门手册 球阀',
      }, {
        object: '阀门盘根力矩',
        type: 'EDF，华龙一号，阀门手册',
      }, {
        object: '管道跨距',
        type: '核岛，常规岛',
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'username',
      'introduction',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  color: #5a5e66;
  text-align: center;
  line-height: 30px;
}

.el-footer {
  color: #5a5e66;
  text-align: center;
  height: 110px !important;
}

.el-main {
  min-height: calc(100vh - 250px);
  text-align: center;
  color: #5a5e66;
}

.main-table {
  width: 1000px;
  margin: 0 auto 40px auto;
}

.footer {
  &-image {
    width: 300px;
    margin: 10px auto;
  }

  &-text-1 {
    text-align: center;
    margin-bottom: 10px;
  }

  &-text-2 {
    text-align: center;
    color: #5a5e66;
    font-size: small;
  }
}

.user {
  &-item-label {
    color: #5a5e66;
    text-align: center;
    font-size: medium;
    font-weight: normal;
    margin-bottom: 10px;
  }
}
</style>
