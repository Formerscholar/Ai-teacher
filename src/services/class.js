import request from './axios'

export function getTeamList() {
  return request({
    url: '/getTeamList',
    method: 'GET'
  })
}


export function getTeamDetail(params) {
  return request({
    url: '/getTeamDetail',
    method: 'GET',
    params
  })
}


export function delTeamTeacher(data) {
  return request({
    url: '/delTeamTeacher',
    method: 'POST',
    data
  })
}

export function delTeamStudent(data) {
  return request({
    url: '/delTeamStudent',
    method: 'POST',
    data
  })
}