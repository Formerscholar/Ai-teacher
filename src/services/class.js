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
