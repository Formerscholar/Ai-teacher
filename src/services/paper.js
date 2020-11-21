import request from './axios'

export function getUploadImage(data) {
  return request({
    url: '/getUploadImage',
    method: 'POST',
    data,
  })
}


export function addTeacherUpload(data) {
  return request({
    url: '/addTeacherUpload',
    method: 'POST',
    data,
  })
}

export function getUploadList(params) {
  return request({
    url: '/getUploadList',
    method: 'GET',
    params,
  })
}
