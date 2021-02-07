
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  if (str.length === 0) {
    return false
  }
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return true
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumber(str) {
  str = str.trim()
  const decimalPattern = /\./g
  const result = str.match(decimalPattern)
  if (result != null) {
    if (result.length > 1) {
      return false
    }
  }
  const strArray = str.split('.')
  str = strArray.join('')
  const intPattern = /^[+-]?\d+/
  return intPattern.test(str)
}
