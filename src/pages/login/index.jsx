import React, { memo } from 'react'
import './index.less'
import { TextField, Button } from '@material-ui/core'

function Login() {
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
          <div className="right_imgs">
            <div className="WeChat">微信扫码登录</div>
            <img
              className="QRcode"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png"
              alt="QRcode"
            />
          </div>
          <div className="form_box">
            <div className="title">老师后台管理系统</div>
            <div className="phone">
              <span>手机号</span>
              <TextField id="standard-basic" className="userinput" label="请输入手机号" />
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
            <Button variant="contained" className="login" >
              登录
            </Button>
            </div>
            <div className="tip">客服电话:0514-82885886</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Login)
