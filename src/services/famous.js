import request from './axios'

export function getSchoolResourcesList(params) {
  return request({
    url: '/getSchoolResourcesList',
    method: 'GET',
    params
  })
}
