import request from './axios'

export function getSchoolResourcesList(params) {
  return request({
    url: '/getSchoolResourcesList',
    method: 'GET',
    params,
  })
}

export function schoolResourcesToMe(params) {
  return request({
    url: '/schoolResourcesToMe',
    method: 'GET',
    params,
  })
}

export function getBasedDir(params) {
  return request({
    url: '/getBasedDir',
    method: 'GET',
    params,
  })
}
