import React, { memo, useState } from 'react'
import './AI_header.less'
import { Menu, MenuItem, Avatar } from '@material-ui/core'

const araList = ['data', 'integral', 'logout']

function AI_header() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (e) => {
    const { info } = e.target.dataset
    const datafunc = () => {
      console.log('datafunc')
    }
    const integralfunc = () => {
      console.log('integralfunc')
    }
    const logoutfunc = () => {
      console.log('logoutfunc')
    }
    const keymap = new Map([
      [araList[0], datafunc],
      [araList[1], integralfunc],
      [araList[2], logoutfunc],
    ])
    keymap.get(info) && keymap.get(info)()
    setAnchorEl(null)
  }
  return (
    <div id="AI_header">
      <div className="title_box">
        <div className="left_icon">
          <img
            className="logo"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png"
            alt="logo"
          />
        </div>
        <div className="center_box">
          <div className="cenItem index">首页</div>
          <div className="cenItem">班级信息</div>
          <div className="cenItem">名校资源</div>
          <div className="cenItem">校本试卷</div>
          <div className="cenItem">知识库</div>
          <div className="cenItem">上传的试卷</div>
          <div className="cenItem">我的试卷</div>
        </div>
        <div className="right_box">
          <Avatar
            className="Avatar"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <span onClick={handleClick}>李老师</span>
          <div className="right_icon"></div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ top: '3.571429rem', left: '-1.714286rem' }}
          >
            <MenuItem data-info={araList[0]} onClick={handleClose}>
              个人资料
            </MenuItem>
            <MenuItem data-info={araList[1]} onClick={handleClose}>
              积分记录
            </MenuItem>
            <MenuItem data-info={araList[2]} onClick={handleClose}>
              退出
            </MenuItem>
          </Menu>
        </div>
      </div>
      <img
        className="banner"
        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png"
        alt="banner"
      />
    </div>
  )
}
export default memo(AI_header)
