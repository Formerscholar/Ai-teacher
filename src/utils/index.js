function setTimerType(timer) {
  let d = new Date(timer)
  let ConvertedYear = d.getFullYear().toString()
  let ConvertedMonth = (d.getMonth() + 1).toString()
  let ConvertedDate = d.getDate().toString()
  ConvertedMonth =
    ConvertedMonth.length < 2 ? '0' + ConvertedMonth : ConvertedMonth
  ConvertedDate = ConvertedDate.length < 2 ? '0' + ConvertedDate : ConvertedDate
  return `${ConvertedYear}-${ConvertedMonth}-${ConvertedDate}`
}

/**
 *
 *  cookie 操作
 * @param {*} key
 * @param {*} value
 */
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

/**
 *
 *  去除字符串前后空格
 * @param {String} str
 * @return {String}
 */
function Trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 *  获取URL 里 search 参数
 * @param {*} search
 * @return {*} 对象
 */
function splitSearch(search) {
  let data = search.substr(1)
  let ret = {}
  data.split('&').map((item) => {
    let kv = item.split('=')
    ret[kv[0]] = kv[1]
  })
  return ret
}

/**
 *
 *  获取当前周
 * @param {*} newDate
 * @return {*}
 */
const getCurrentWeek = function (newDate) {
  var startStop = []
  var currentDate = newDate
  var week = currentDate.getDay()
  var millisecond = 1000 * 60 * 60 * 24
  var minusDay = week != 0 ? week - 1 : 6
  var monday = new Date(currentDate.getTime() - minusDay * millisecond)
  var sunday = new Date(monday.getTime() + 6 * millisecond)
  startStop.push(setTimerType(monday))
  startStop.push(setTimerType(sunday))
  return startStop
}

/**
 *
 *  获取 近 ?? 时间段
 * @param {*} newDate
 * @return {*}
 */
const getNearDate = (newDate, num) => {
  const start = newDate
  start.setTime(start.getTime() - num * 24 * 60 * 60 * 1000)
  return [setTimerType(start), setTimerType(new Date())]
}

export {
  setTimerType,
  setCookie,
  getCookie,
  delCookie,
  Trim,
  splitSearch,
  getCurrentWeek,
  getNearDate,
}
