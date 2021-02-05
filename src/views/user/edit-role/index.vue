<template>
  <div class="app-container">
    <el-table :data="rolesData" v-loading="listLoading">
      <el-table-column prop="key" label="权限Key" width="200">
      </el-table-column>
      <el-table-column prop="name" label="权限名称" width="200">
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
      <el-table-column prop="introduction" label="说明">
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
import { fetchRoles, updateRole } from '@/api/user'

export default {
  data() {
    return {
      rolesData: null,
      listLoading: true
    }
  },
  created() {
    this.getRoles()
  },
  methods: {
    async getRoles() {
      this.listLoading = true
      const { data } = await fetchRoles()
      this.rolesData = data.map(v => {
        this.$set(v, 'edit', false)
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
        updateRole({ key: row.key, name: row.editedName, introduction: row.editedIntroduction }).then((response) => {
          row.name = row.editedName
          row.introduction = row.editedIntroduction
          this.$message(response.data)
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
