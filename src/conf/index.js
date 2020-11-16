const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://test.aictb.com/teacher'
    : '/teacher'

const phoneRegular = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

const appid = 'wx5f0976e726b587f8'

const callBackUrl = encodeURIComponent('http://test.aictb.com/teacher/WXLogin')

const headMenu = [
  {
    text: '首页',
    url: 'main/index',
  },
  {
    text: '班级信息',
    url: 'main/class',
  },
  {
    text: '名校资源',
    url: 'main/famous',
  },
  {
    text: '校本试卷',
    url: 'main/schoolbased',
  },
  {
    text: '知识库',
    url: 'main/knowledge',
  },
  {
    text: '上传试卷',
    url: 'main/uploadpaper',
  },
  {
    text: '我的试卷',
    url: 'main/mypaper',
  },
]

const setCookie = (key, value) => {
  const d = new Date()
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toGMTString()
  document.cookie = key + '=' + value + '; ' + expires
}

function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return unescape(arr[2])
  else return null
}

function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
}

export {
  baseURL,
  phoneRegular,
  appid,
  callBackUrl,
  setCookie,
  getCookie,
  delCookie,
  headMenu,
}
