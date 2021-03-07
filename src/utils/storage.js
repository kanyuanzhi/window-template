import localStorage from 'localStorage'

export default class Storage {
  constructor() {
    this.name = 'Storage'
    this.storage = localStorage
    // this.source = this.props.source || localStorage
    this.initRun()
  }

  setItem(key, value, expired) {
    /*
    * set 存储方法
    * @ param {String} 	key 键
    * @ param {String} 	value 值，
    * @ param {String} 	expired 过期时间，以分钟为单位，非必须
    */
    const storage = this.storage
    // source[key] = JSON.stringify(value)
    storage.setItem(key, JSON.stringify(value))
    if (expired) {
      // source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired
      storage.setItem(`${key}__expires__`, Date.now() + 1000 * 60 * expired)
    }
    return value
  }

  getItem(key) {
    /*
    * get 获取方法
    * @ param {String} 	key 键
    * @ param {String} 	expired 存储时为非必须字段，所以有可能取不到，默认为 Date.now+1
    */
    const storage = this.storage
    const expired = storage.getItem(`${key}__expires__`) || Date.now + 1
    const now = Date.now()

    if (now >= expired) {
      this.removeItem(key)
      return
    }
    const value = storage.getItem(key) ? JSON.parse(storage.getItem(key)) : storage.getItem(key)
    return value
  }

  removeItem(key) {
    const storage = this.storage
    const value = storage.getItem(key)
    delete storage.removeItem(key)
    delete storage.removeItem(`${key}__expires__`)
    return value
  }

  initRun() {
    /*
    * set 存储方法
    * @ param {String} 	key 键
    * @ param {String} 	value 值，存储的值可能是数组/对象，不能直接存储，需要转换 JSON.stringify
    * @ param {String} 	expired 过期时间，以分钟为单位
    */
    const reg = new RegExp('__expires__')
    const data = this.storage
    const list = Object.keys(data)
    if (list.length > 0) {
      list.map((key, v) => {
        if (!reg.test(key)) {
          const now = Date.now()
          const expires = data[`${key}__expires__`] || Date.now + 1
          if (now >= expires) {
            this.getItem(key)
          }
        }
        return key
      })
    }
  }
}
