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
    url: '/main/index',
  },
  {
    text: '班级信息',
    url: '/main/class',
  },
  {
    text: '名校资源',
    url: '/main/famous',
  },
  {
    text: '校本试卷',
    url: '/main/schoolbased',
  },
  {
    text: '知识库',
    url: '/main/knowledge',
  },
  {
    text: '上传试卷',
    url: '/main/uploadpaper',
  },
  {
    text: '我的试卷',
    url: '/main/mypaper',
  },
]

export { baseURL, phoneRegular, appid, callBackUrl, headMenu }
