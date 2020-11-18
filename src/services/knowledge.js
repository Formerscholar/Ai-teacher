import request from './axios'

export function getKnowledgeExercises(params) {
  return request({
    url: '/getKnowledgeExercises',
    method: 'GET',
    params
  })
}