import React, { memo, useState } from 'react'
import './index.less'
import { TextField, Button, Fade } from '@material-ui/core'

function Login() {
  const [isWechat, setWechat] = useState(true)
  const [isSMS, setSMS] = useState(false)

  const handleClick = () => {
    if (isWechat) {
      setWechat(!isWechat)
      setTimeout(() => {
        setSMS(!isSMS)
      }, 300)
    } else {
      setSMS(!isSMS)
      setTimeout(() => {
        setWechat(!isWechat)
      }, 300)
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
                  />
                </div>
                <div className="Verification">
                  <span>验证码</span>
                  <TextField
                    id="standard-basic"
                    className="userinput"
                    label="请输入验证码"
                    InputProps={{
                      endAdornment: <a>获取验证码</a>,
                    }}
                  />
                </div>
                <div className="btns">
                  <Button variant="contained" className="login">
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
                  <img
                    className="QRcode_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode_icon.png"
                    alt="QRcode_icon"
                  />
                  <img
                    className="MobileWeChattip"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png"
                    alt="MobileWeChattip"
                  />
                </div>
                <div className="footer_box">打开微信，扫一扫登录</div>
              </div>
            </Fade>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
export default memo(Login)
