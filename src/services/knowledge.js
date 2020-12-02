import request from './axios'
import Qs from 'qs'

export function getKnowledgeExercises(params) {
  return request({
    url: '/getKnowledgeExercises',
    method: 'GET',
    params,
  })
}

export function getExercisesDetail(params) {
  return request({
    url: '/getExercisesDetail',
    method: 'GET',
    params,
  })
}

export function addExamBasket(data) {
  return request({
    url: '/addExamBasket',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function delExamBasket(data) {
  return request({
    url: '/delExamBasket',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function basketDetail(params) {
  return request({
    url: '/basketDetail',
    method: 'GET',
    params,
  })
}

export function delTypeExamBasket(params) {
  return request({
    url: '/delTypeExamBasket',
    method: 'GET',
    params,
  })
}

export function clearExamBasket() {
  return request({
    url: '/clearExamBasket',
    method: 'GET',
  })
}

export function getPapersExercises(params) {
  return request({
    url: '/getPapersExercises',
    method: 'GET',
    params,
  })
}

export function getPapersList(params) {
  return request({
    url: '/getPapersList',
    method: 'GET',
    params,
  })
}

export function paperToBased(params) {
  return request({
    url: '/paperToBased',
    method: 'GET',
    params,
  })
}


export function addPapers(data) {
  return request({
    url: '/addPapers',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function getDetailPapers(params) {
  return request({
    url: '/getDetailPapers',
    method: 'GET',
    params,
  })
}