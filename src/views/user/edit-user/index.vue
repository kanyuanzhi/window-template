<template>
  <div class="app-container">
    <el-table :data="usersData" v-loading="listLoading">
      <el-table-column prop="username" label="用户名" width="200">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="200">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input
              v-model="scope.row.editedName"
              class="edit-input"
              size="small"
            />
          </template>
          <template v-else>
            {{ scope.row.name }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="introduction" label="介绍">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input
              v-model="scope.row.editedIntroduction"
              class="edit-input"
              size="small"
            />
          </template>
          <template v-else>
            {{ scope.row.introduction }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <template v-if="scope.row.edit && !scope.row.delete">
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(scope.row)"
              >取消</el-button
            >
            <el-button
              size="small"
              icon="el-icon-circle-check"
              type="success"
              @click="confirmEdit(scope.row)"
              >确认</el-button
            >
          </template>
          <template v-if="!scope.row.edit && scope.row.delete">
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelDelete(scope.row)"
              >取消</el-button
            >
            <el-button
              size="small"
              icon="el-icon-circle-check"
              type="success"
              @click="confirmDelete(scope.row, scope.$index)"
              >确认</el-button
            >
          </template>
          <template v-if="!scope.row.edit && !scope.row.delete">
            <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            > -->
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="scope.row.edit = !scope.row.edit"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              icon="el-icon-edit"
              @click="scope.row.delete = !scope.row.delete"
              >删除</el-button
            >
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchUsers, updateUserInfo, deleteUser } from '@/api-local/user'

export default {
  data() {
    return {
      usersData: null,
      listLoading: true
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      this.listLoading = true
      const { data } = await fetchUsers(this.listQuery)
      this.usersData = data.map(v => {
        this.$set(v, 'edit', false)
        this.$set(v, 'delete', false)
        v.editedName = v.name
        v.editedIntroduction = v.introduction
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.edit = false
      row.editedName = row.name
      row.editedIntroduction = row.introduction
    },
    confirmEdit(row) {
      row.edit = false
      return new Promise((resolve, reject) => {
        updateUserInfo({ username: row.username, name: row.editedName, introduction: row.editedIntroduction }).then(response => {
          row.name = row.editedName
          row.introduction = row.editedIntroduction
          // this.$message(response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    cancelDelete(row) {
      row.delete = false
      row.editedName = row.name
      row.editedIntroduction = row.introduction
    },
    confirmDelete(row, index) {
      row.delete = false
      return new Promise((resolve, reject) => {
        if (row.username === "super"){
          this.$message("super用户不允许删除!")
          return resolve()
        }
        deleteUser(row.username).then(response => {
          this.usersData.splice(index, 1)
          this.$message(response.message)
          resolve()
        }).catch(error => {
          reject(error)
        })
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
