import request from './axios'

export function information() {
  return request({
    url: '/information',
    method: 'GET'
  })
}

