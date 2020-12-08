const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://test.aictb.com/teacher'
    : '/teacher'

const phoneRegular = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

const emailRegular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const appid = 'wx5f0976e726b587f8'

const callBackUrl = encodeURIComponent('http://test.aictb.com/teacher/WXLogin')

const headMenu = [
  {
    text: '首页',
    url: '/index',
  },
  {
    text: '班级信息',
    url: '/class',
  },
  {
    text: '学情报告',
    url: '/classreport',
  },
  {
    text: '名校资源',
    url: '/famous',
  },
  {
    text: '校本试卷',
    url: '/schoolbased',
  },
  {
    text: '知识库',
    url: '/knowledge',
  },
  {
    text: '我的试卷',
    url: '/mypaper/list',
  },
]

const downURL = 'http://aictb.com'
const downDOCURL = 'http://test.aictb.com'

const info_menu = [
  {
    img:
      'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png',
    text: '个人资料',
  },
  {
    img:
      'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png',
    text: '我的积分',
  },
  {
    img:
      'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png',
    text: '下载记录',
  },
  {
    img:
      'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png',
    text: '上传的试卷',
  },
]


const UserRoutePath = [
  '/user/datum',
  '/user/integral',
  '/user/down',
  '/user/upload_list',
]

export {
  baseURL,
  phoneRegular,
  appid,
  callBackUrl,
  headMenu,
  downURL,
  info_menu,
  downDOCURL,
  emailRegular,
  UserRoutePath,
}
