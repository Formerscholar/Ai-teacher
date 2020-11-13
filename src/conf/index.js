const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://test.aictb.com/teacher'
    : '/teacher'

const phoneRegular = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

const appid = 'wx5f0976e726b587f8'

const callBackUrl = encodeURIComponent(
  'http://test.aictb.com/teacher/WXLogin'
)

const setCookie = (key, value) => {
  const d = new Date()
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toGMTString()
  document.cookie = key + '=' + value + '; ' + expires
}

export { baseURL, phoneRegular, appid, callBackUrl ,setCookie}
