import request from './axios'

export function getSchoolBasedList(params) {
  return request({
    url: '/getSchoolBasedList',
    method: 'GET',
    params
  })
}
