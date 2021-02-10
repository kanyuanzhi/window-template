import request from '@/utils/request-python'

export function add(data) {
  return request({
    url: '/add',
    method: 'post',
    data
  })
}

export function process(pageWidth) {
  return request({
    url: '/process',
    method: 'get',
    params: { pageWidth }
  })
}

