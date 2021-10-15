// import { login, getInfo, logout, register, changePassword  } from '@/api-local/user'
import {login, getInfo, logout, register, changePassword, updateUserInfo} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { code, data, message } = response
        if(code !== 20000){
          alert(message)
          reject()
        }
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction, username } = data
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles)
        commit('SET_USERNAME', username)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user register
  register({ state }, userRegister) {
    const { username, password, confirmPassword } = userRegister
    return new Promise((resolve, reject) => {
      register({ username: username.trim(), password: password.trim(), confirmPassword: confirmPassword.trim() }, state.token).then(response => {
        const { code, data, message } = response
        // commit('SET_TOKEN', data.token)
        // setToken(data.token)
        resolve(message)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user change password
  changePassword({ commit, state }, userChangePassword) {
    const { oldPassword, newPassword, confirmNewPassword } = userChangePassword
    return new Promise((resolve, reject) => {
      changePassword({ old_password: oldPassword.trim(), new_password: newPassword.trim(), confirm_new_password: confirmNewPassword.trim() }, state.token).then((response) => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },

  // user register
  editProfile({ commit }, profile) {
    const { username, name, introduction } = profile
    return new Promise((resolve, reject) => {
      updateUserInfo({ username: username, name: name, introduction: introduction }).then(response => {
        commit('SET_INTRODUCTION', introduction)
        commit('SET_NAME', name)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

