import React, { memo, useState } from 'react'
import './AI_header.less'
import { Menu, MenuItem ,Avatar  } from '@material-ui/core'

function AI_header() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
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
          {/* <span onClick={handleClick}>首页</span>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
          <div className="cenItem">首页</div>
          <div className="cenItem">班级信息</div>
          <div className="cenItem">名校资源</div>
          <div className="cenItem">校本试卷</div>
          <div className="cenItem">知识库</div>
          <div className="cenItem">上传的试卷</div>
          <div className="cenItem">我的试卷</div>
        </div>
        <div className="right_box">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span>李老师</span>
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
