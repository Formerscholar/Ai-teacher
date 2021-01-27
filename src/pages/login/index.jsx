import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Button, message, Input } from 'antd'
import { phoneRegular, appid, callBackUrl } from '@/conf'
import { setCookie, Trim } from '@/utils'
import {
  getLoginCode,
  getLogin,
  getLoginByPwd,
  getEditPwd,
} from '@/services/login'

function Login(props) {
  const [isWechat, setWechat] = useState(0) // 0=微信登录 1=账号密码  2=忘记密码
  const [btndis, setbtndis] = useState(false)
  const [btnlogin, setbtnlogin] = useState(true)
  const [outtime, setOutTime] = useState('60')
  const [Phone, setPhone] = useState('')
  const [Code, setCode] = useState('')
  const [Pass, setPass] = useState('')

  let OutTimeinval = null

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
    }
  }, [])

  const phoneText = (data) => {
    const { value } = data.target
    if (phoneRegular.test(value)) {
      setPhone(Trim(value))
    }
  }

  const codeText = (data) => {
    const { value } = data.target
    setCode(Trim(value))
    setbtnlogin(false)
  }

  const passText = (data) => {
    const { value } = data.target
    setPass(Trim(value))
    setbtnlogin(false)
  }

  const openCode = async () => {
    if (phoneRegular.test(Phone)) {
      const { code, msg } = await getLoginCode({
        mobile: Phone,
      })
      if (code !== 200) {
        message.error(msg)
      } else {
        setbtndis(true)
        let num = outtime
        OutTimeinval = setInterval(() => {
          if (num == 0) {
            setOutTime('60')
            setbtndis(false)
            clearInterval(OutTimeinval)
          } else {
            num--
            setOutTime(num)
          }
        }, 1000)
      }
    } else {
      message.error('请输入正确手机号码!')
    }
  }

  const handleClick = () => {
    if (isWechat === 1) {
      setWechat(0)
      setTimeout(() => {
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
      setTimeout(() => {
        setWechat(1)
      }, 300)
    }
  }

  const clickLogin = async () => {
    const { code, data, msg } = await getLoginByPwd({
      mobile: Phone,
      pwd: Pass,
    })
    if (code == 200) {
      // setCookie('id', data.id)
      // setCookie('token', data.token)
      props.history.push('/index')
    } else {
      message.error(msg)
    }
  }

  const changeLogin = async () => {
    const { code, msg } = await getEditPwd({
      mobile: Phone,
      pwd: Pass,
      code: Code,
    })
    if (code == 200) {
      message.success(msg)
      setTimeout(() => {
        setWechat(1)
      }, 300)
    } else {
      message.error(msg)
    }
  }

  const changePassword = () => {
    console.log('changePassword')
    setTimeout(() => {
      setWechat(2)
    }, 300)
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
            {isWechat === 0 ? (
              <>
                <div className="WeChat">微信扫码登录</div>
                <img
                  className="QRcode"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png"
                  alt="QRcode"
                />
              </>
            ) : isWechat === 1 ? (
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
            ) : (
              ''
            )}
          </div>
          {isWechat === 1 ? (
            <div className="form_box">
              <div className="title">老师后台管理系统</div>
              <div className="phone">
                <span>手机号</span>
                <Input
                  className="userinput"
                  placeholder="请输入手机号"
                  onInput={phoneText}
                />
              </div>
              <div className="Verification">
                <span>密码</span>
                <Input
                  className="userinput"
                  placeholder="请输入密码"
                  onInput={passText}
                  type="password"
                />
              </div>
              <div className="changePassword" onClick={changePassword}>
                忘记密码?
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
          ) : isWechat === 0 ? (
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
          ) : (
            <div className="form_box">
              <div className="title">修改密码</div>
              <div className="phone">
                <span>手机号</span>
                <Input
                  className="userinput"
                  placeholder="请输入手机号"
                  onInput={phoneText}
                />
              </div>
              <div className="Verification">
                <span>验证码</span>
                <Input
                  className="userinput"
                  placeholder="请输入验证码"
                  onInput={codeText}
                  suffix={
                    <button disabled={btndis} onClick={openCode}>
                      {!btndis ? '获取验证码' : `再次获取(${outtime})`}
                    </button>
                  }
                />
              </div>
              <div className="Verification">
                <span>新密码</span>
                <Input
                  className="userinput"
                  placeholder="请输入密码"
                  onInput={passText}
                  type="password"
                />
              </div>
              <div className="btns">
                <Button
                  variant="contained"
                  disabled={btnlogin}
                  className="login"
                  onClick={changeLogin}
                >
                  修改
                </Button>
              </div>
              <div className="tip">客服电话:0514-82885886</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default memo(Login)
