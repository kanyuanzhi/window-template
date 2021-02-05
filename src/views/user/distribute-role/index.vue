<template>
  <div class="app-container">
    <el-table :data="usersData" v-loading="listLoading">
      <el-table-column prop="username" label="用户名" width="200">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
      <el-table-column prop="roles" label="用户权限">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-checkbox-group v-model="scope.row.selectedRoles">
              <el-checkbox label="super"></el-checkbox>
              <el-checkbox label="admin"></el-checkbox>
              <el-checkbox label="operator"></el-checkbox>
              <el-checkbox label="guest"></el-checkbox>
            </el-checkbox-group>
          </template>
          <template v-else>
            {{ scope.row.roles }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
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
          <template v-else>
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
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchUsers, updateUserRoles } from '@/api/user'

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
        v.selectedRoles = v.roles
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.edit = false
      row.selectedRoles = row.roles
    },
    confirmEdit(row) {
      row.edit = false
      return new Promise((resolve, reject) => {
        updateUserRoles({ username: row.username, roles: row.selectedRoles }).then(() => {
          row.roles = row.selectedRoles
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
