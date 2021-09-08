import router from '@/router'

export function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return parseInt(obj.currentStyle[attr])
  } else {
    return parseInt(document.defaultView.getComputedStyle(obj, null)[attr])
  }
}

export function generate_report(router_name, output) {
  let routeUrl = router.resolve({
    name: router_name,
    query: {output: JSON.stringify(output)}
  })
  window.open(routeUrl.href, '_blank')
}

export function clear_parameters(input, output) {
  for (let para in input) {
    input[para] = ""
  }
  for (let para in output) {
    output[para] = "--"
  }
}

export function formatLabel(para) {
  if (para.format_label !== undefined) {
    return para.format_label
  }
  let str = para.meaning.concat(para.label)
  if (para.unit === '') {
    return str
  } else {
    return str.concat('(', para.unit, ')')
  }
}

export function search(array, value) {
  if (value < array[0]) {
    return array[0]
  }
  for (let i = 1; i < array.length; i++) {
    if (value < array[i]) {
      return array[i-1]
    }
  }
  return array[array.length-1]
}
