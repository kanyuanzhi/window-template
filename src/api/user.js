import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register(data, token) {
  return request({
    url: '/user/register',
    method: 'post',
    params: { token },
    data
  })
}

export function changePassword(data, token) {
  return request({
    url: '/user/change-password',
    method: 'post',
    params: { token },
    data
  })
}

export function fetchRoles() {
  return request({
    url: '/role/fetch-roles',
    method: 'get'
  })
}

export function updateRole(data) {
  return request({
    url: '/role/update-role',
    method: 'post',
    data
  })
}

export function fetchUsers() {
  return request({
    url: '/user/fetch-users',
    method: 'get'
  })
}

export function updateUserRoles(data) {
  return request({
    url: '/user/update-user-roles',
    method: 'post',
    data
  })
}
