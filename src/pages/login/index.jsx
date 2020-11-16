import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { TextField, Button, Fade, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { phoneRegular, appid, callBackUrl } from '@/conf'
import { setCookie } from '@/utils'

import { getLoginCode, getLogin } from '@/services/login'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Login(props) {
  const [isWechat, setWechat] = useState(false)
  const [isSMS, setSMS] = useState(true)
  const [open, setOpen] = useState(false)
  const [opentip, setopentip] = useState('请输入正确手机号码!')
  const [btndis, setbtndis] = useState(false)
  const [btnlogin, setbtnlogin] = useState(true)
  const [outtime, setOutTime] = useState('60')
  const [Phone, setPhone] = useState('')
  const [Code, setCode] = useState('')

  let OutTimeinval = null
  let OutTimeout = null

  useEffect(() => {
    window.WxLogin({
      self_redirect: true,
      id: 'login_container',
      appid: appid,
      scope: 'snsapi_login',
      redirect_uri: callBackUrl,
      state: Math.ceil(Math.random() * 1000),
      style: 'black',
      href: '',
    })
    return () => {
      clearInterval(OutTimeinval)
      clearTimeout(OutTimeout)
    }
  }, [])

  const phoneText = (data) => {
    const { value } = data.target
    if (phoneRegular.test(value)) {
      setPhone(value)
    }
  }

  const codeText = (data) => {
    const { value } = data.target
    setCode(value)
    setbtnlogin(false)
  }

  const openCode = async () => {
    setopentip('请输入正确手机号码!')
    if (phoneRegular.test(Phone)) {
      setbtndis(true)
      let num = 60
      OutTimeinval = setInterval(() => {
        num--
        setOutTime(num)
      }, 1000)
      console.log(outtime)
      OutTimeout = setTimeout(() => {
        setbtndis(false)
      }, 60000)
      const { code, data, msg } = await getLoginCode({
        mobile: Phone,
      })
      console.log('getLoginCode', code, data, msg)
    } else {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 2888)
    }
  }

  const handleClick = () => {
    if (isWechat) {
      setWechat(!isWechat)
      setTimeout(() => {
        setSMS(!isSMS)
        window.WxLogin({
          self_redirect: true,
          id: 'login_container',
          appid: appid,
          scope: 'snsapi_login',
          redirect_uri: callBackUrl,
          state: Math.ceil(Math.random() * 1000),
          style: 'black',
          href: '',
        })
      }, 300)
    } else {
      setSMS(!isSMS)
      setTimeout(() => {
        setWechat(!isWechat)
      }, 300)
    }
  }

  const clickLogin = async () => {
    const { code, data, msg } = await getLogin({
      mobile: Phone,
      code: Code,
    })
    setopentip(msg)
    if (code == 200) {
      setCookie('id', data.id)
      setCookie('token', data.token)
      props.history.push('/main')
    } else {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 2888)
    }
  }
  return (
    <div id="Login">
      <div className="content">
        <div className="left_box">
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png"
            alt="login_img"
          />
        </div>
        <div className="right_box">
          <div className="right_imgs" onClick={handleClick}>
            {isWechat ? (
              <Fade in={isWechat}>
                <>
                  <div className="WeChat">微信扫码登录</div>
                  <img
                    className="QRcode"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png"
                    alt="QRcode"
                  />
                </>
              </Fade>
            ) : (
              ''
            )}
            {isSMS ? (
              <Fade in={isSMS}>
                <>
                  <img
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png"
                    className="phone_right_icon"
                  />
                  <img
                    className="QRcode"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png"
                    alt="QRcode"
                  />
                </>
              </Fade>
            ) : (
              ''
            )}
          </div>
          {isWechat ? (
            <Fade in={isWechat}>
              <div className="form_box">
                <div className="title">老师后台管理系统</div>
                <div className="phone">
                  <span>手机号</span>
                  <TextField
                    id="standard-basic"
                    className="userinput"
                    label="请输入手机号"
                    onInput={phoneText}
                  />
                </div>
                <div className="Verification">
                  <span>验证码</span>
                  <TextField
                    id="standard-basic"
                    className="userinput"
                    label="请输入验证码"
                    onInput={codeText}
                    InputProps={{
                      endAdornment: (
                        <button disabled={btndis} onClick={openCode}>
                          {!btndis ? '获取验证码' : `再次获取(${outtime})`}
                        </button>
                      ),
                    }}
                  />
                </div>
                <div className="btns">
                  <Button
                    variant="contained"
                    disabled={btnlogin}
                    className="login"
                    onClick={clickLogin}
                  >
                    登录
                  </Button>
                </div>
                <div className="tip">客服电话:0514-82885886</div>
              </div>
            </Fade>
          ) : (
            ''
          )}
          {isSMS ? (
            <Fade in={isSMS}>
              <div className="wechatForm">
                <div className="title_box">
                  <img
                    className="wechat_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png"
                    alt="wechat_icon"
                  />
                  <span className="text">微信扫码登录</span>
                </div>
                <div className="content_box">
                  <div id="login_container"></div>
                  <img
                    className="MobileWeChattip"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png"
                    alt="MobileWeChattip"
                  />
                </div>
                <div className="footer_box">打开微信,扫一扫登录</div>
              </div>
            </Fade>
          ) : (
            ''
          )}
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2888}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">{opentip}</Alert>
      </Snackbar>
    </div>
  )
}
export default memo(Login)
