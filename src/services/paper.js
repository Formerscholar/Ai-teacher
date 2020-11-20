import request from './axios'

export function getUploadImage(data) {
  return request({
    url: '/getUploadImage',
    method: 'POST',
    data,
  })
}
