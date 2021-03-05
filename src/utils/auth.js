// import Cookies from 'js-cookie'
// import sessionStorage from 'sessionstorage'
// import Cookies from 'electron-cookies'
// import localStorage from 'localStorage'
import Storage from '@/utils/Storage'

const TokenKey = 'window_template_token'
const storage = new Storage()

export function getToken() {
  // return Cookies.get(TokenKey)
  // return localStorage.getItem(TokenKey)
  return storage.getItem(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  // return localStorage.setItem(TokenKey, token)
  return storage.setItem(TokenKey, token, 2)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  // return localStorage.removeItem(TokenKey)
  return storage.removeItem(TokenKey)
}
