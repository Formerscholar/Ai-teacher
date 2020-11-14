import request from './axios'

export function gethome() {
  return request({
    url: '/home',
    method: 'GET'
  })
}
