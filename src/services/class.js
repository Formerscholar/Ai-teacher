import request from './axios'

export function getTeamList() {
  return request({
    url: '/getTeamList',
    method: 'GET',
  })
}

export function getTeamDetail(params) {
  return request({
    url: '/getTeamDetail',
    method: 'GET',
    params,
  })
}

export function delTeamTeacher(data) {
  return request({
    url: '/delTeamTeacher',
    method: 'POST',
    data,
  })
}

export function delTeamStudent(data) {
  return request({
    url: '/delTeamStudent',
    method: 'POST',
    data,
  })
}

export function getAddTeam() {
  return request({
    url: '/getAddTeam',
    method: 'GET',
  })
}

export function addTeam(data) {
  return request({
    url: '/addTeam',
    method: 'POST',
    data,
  })
}

export function studentAcademicReport(params) {
  return request({
    url: '/studentAcademicReport',
    method: 'GET',
    params,
  })
}
