import Dexie from 'dexie'
import da from "element-ui/src/locale/lang/da";
import user from "@/store/modules/user";

let db = new Dexie("projectDatabase")
db.version(1).stores({roles: "++id,role,introduction", users: "++id,username,password,roles,token,name,introduction"})

export function login(userinfo) {
  return new Promise((resolve, reject) => {
    const {username, password} = userinfo
    db.transaction('rw', db.users, async () => {
      const num = await db.users.where({username: username}).count()
      if (num === 0) {
        resolve({code: 20001, message: "用户名不存在！"})
      } else {
        const userinfo = await db.users.where({username: username}).first()
        if (password === userinfo.password) {
          resolve({code: 20000, data: userinfo})
        } else {
          resolve({code: 20002, message: "密码错误！"})
        }
      }
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const userinfo = await db.users.where({token: token}).first()
      resolve({code: 20000, data: userinfo})
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function logout() {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export function register(data, token) {
  const {username, password, confirmPassword} = data
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const num = await db.users.where({username: username}).count()
      if (num !== 0) {
        resolve({code: 20003, message: "用户名已注册！"})
      } else {
        await db.users.add({
          username: username, password: password, roles: [], token: username, name: "",
          introduction: ""
        })
        resolve({code: 20000, message: "添加成功！"})
      }
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function changePassword(data, token) {
  const {old_password, new_password, confirm_new_password} = data
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const userinfo = await db.users.where({token: token}).first()
      if (old_password === userinfo.password) {
        await db.users.update(userinfo.id, {password: new_password})
        resolve({code: 20000, message: "密码修改成功，请重新登录！"})
      } else {
        resolve({code: 20002, message: "密码错误！"})
      }
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function fetchRoles() {
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.roles, async () => {
      const roles = await db.roles.toArray()
      resolve({code: 20000, data: roles})
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function updateRole(data) {
  const {key, name, introduction} = data
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.roles, async () => {
      const roleInfo = await db.roles.where({key: key}).first()
      await db.roles.update(roleInfo.id, {name: name, introduction: introduction})
      resolve({code: 20000, message: "修改成功！"})
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const users = await db.users.toArray()
      resolve({code: 20000, data: users})
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function updateUserRoles(data) {
  const {username, roles} = data
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const userinfo = await db.users.where({username: username}).first()
      await db.users.update(userinfo.id, {roles: roles})
      resolve()
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function updateUserInfo(data) {
  const {username, name, introduction} = data
  return new Promise((resolve, reject) => {
    db.transaction('rw', db.users, async () => {
      const userinfo = await db.users.where({username: username}).first()
      await db.users.update(userinfo.id, {name: name, introduction: introduction})
      resolve()
    }).catch(e => {
      console.error(e.stack);
    })
  })
}

export function deleteUser(username) {
  return new Promise((resolve, reject) => {
    if (username === "super") {
      resolve({code: 30000, message: "super用户不允许删除！"})
    }
    db.transaction('rw', db.users, async () => {
      const userinfo = await db.users.where({username: username}).first()
      await db.users.delete(userinfo.id)
      resolve({code: 20000, message: "删除成功！"})
    }).catch(e => {
      console.error(e.stack);
    })
  })
}
