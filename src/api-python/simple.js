import request from '@/utils/request-python'

export function add(data) {
  return request({
    url: '/add',
    method: 'post',
    data
  })
}

export function getImage(pageWidth) {
  return request({
    url: '/get-image',
    method: 'get',
    params: { pageWidth }
  })
}

export function cropImage(data) {
  return request({
    url: '/crop-image',
    method: 'post',
    data
  })
}
