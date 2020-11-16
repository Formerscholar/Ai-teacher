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
  setTimerType,
  setCookie,
  getCookie,
  delCookie,
}
