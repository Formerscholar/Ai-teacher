import request from './axios'

export function information() {
  return request({
    url: '/information',
    method: 'GET',
  })
}

export function getAllArea() {
  return request({
    url: '/getAllArea',
    method: 'GET',
  })
}

export function getSchools(params) {
  return request({
    url: '/getSchools',
    method: 'GET',
    params,
  })
}

export function pointLog() {
  return request({
    url: '/pointLog',
    method: 'GET',
  })
}

export function getUploadList(params) {
  return request({
    url: '/getUploadList',
    method: 'GET',
    params,
  })
}