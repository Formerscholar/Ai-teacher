import request from './axios'
import Qs from 'qs'

export function getUploadImage(data) {
  return request({
    url: '/getUploadImage',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function addTeacherUpload(data) {
  return request({
    url: '/addTeacherUpload',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

