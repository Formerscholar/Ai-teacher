import request from './axios'
import Qs from 'qs'

export function getUploadImage(data) {
  return request({
    url: '/getUploadImage',
    method: 'POST',
    data,
  })
}

export function addTeacherUpload(data) {
  return request({
    url: '/addTeacherUpload',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function information() {
  return request({
    url: '/information',
    method: 'GET',
  })
}

export function getAllArea() {
  return request({
    url: '/getAllArea',
    method: 'GET',
  })
}

export function getSchools(params) {
  return request({
    url: '/getSchools',
    method: 'GET',
    params,
  })
}

export function pointLog() {
  return request({
    url: '/pointLog',
    method: 'GET',
  })
}

export function getUploadList(params) {
  return request({
    url: '/getUploadList',
    method: 'GET',
    params,
  })
}

export function getOrganizingPapersLog(params) {
  return request({
    url: '/getOrganizingPapersLog',
    method: 'GET',
    params,
  })
}

export function editInformation(data) {
  return request({
    url: '/editInformation',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

export function getCode(params) {
  return request({
    url: '/getCode',
    method: 'GET',
    params,
  })
}

export function editMobile(params) {
  return request({
    url: '/editMobile',
    method: 'GET',
    params,
  })
}


export function getTeacherUpload(params) {
  return request({
    url: '/getTeacherUpload',
    method: 'GET',
    params,
  })
}