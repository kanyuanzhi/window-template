export function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return parseInt(obj.currentStyle[attr])
  } else {
    return parseInt(document.defaultView.getComputedStyle(obj, null)[attr])
  }
}
