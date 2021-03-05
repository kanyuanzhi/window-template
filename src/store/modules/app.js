// import Cookies from 'js-cookie'
import Storage from '@/utils/Storage'
const storage = new Storage()

const state = {
  sidebar: {
    // opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    opened: storage.getItem('sidebarStatus') ? !!+storage.getItem('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  // size: Cookies.get('size') || 'medium'
  size: storage.getItem('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      // Cookies.set('sidebarStatus', 1)
      storage.setItem('sidebarStatus', 1,2)
    } else {
      // Cookies.set('sidebarStatus', 0)
      storage.setItem('sidebarStatus', 0,2)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    // Cookies.set('sidebarStatus', 0)
    storage.setItem('sidebarStatus', 0,2)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    // Cookies.set('size', size)
    storage.setItem('size', size,2)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
