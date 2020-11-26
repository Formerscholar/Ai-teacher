import request from './axios'

export function getSchoolBasedList(params) {
  return request({
    url: '/getSchoolBasedList',
    method: 'GET',
    params,
  })
}

export function getSchoolBasedDetail(params) {
  return request({
    url: '/getSchoolBasedDetail',
    method: 'GET',
    params,
  })
}

export function teamAcademicReport(params) {
  return request({
    url: '/teamAcademicReport',
    method: 'GET',
    params,
  })
}
