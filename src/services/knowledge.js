import request from './axios'

export function getKnowledgeExercises(params) {
  return request({
    url: '/getKnowledgeExercises',
    method: 'GET',
    params
  })
}

export function getExercisesDetail(params) {
  return request({
    url: '/getExercisesDetail',
    method: 'GET',
    params
  })
}