import request from './axios'

export function getTeamList() {
  return request({
    url: '/getTeamList',
    method: 'GET'
  })
}