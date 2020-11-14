import React, { memo, useState } from 'react'
import './AI_header.less'
import { Menu, MenuItem, Avatar, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { getLogout } from '@/services/login'
import { getCookie, delCookie } from '@/conf'

const araList = ['data', 'integral', 'logout']
const headMenu = [
  'index',
  'class',
  'Famous',
  'School-based',
  'knowledge',
  'Uploadedpaper',
  'Mypaper',
]

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}
function AI_header({ props, teacher }) {
  const [open, setOpen] = useState(false)
  const [opentip, setopentip] = useState('请求错误!')

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
    const logoutfunc = async () => {
      console.log('logoutfunc')
      let id = getCookie('id')
      let token = getCookie('token')
      const { code, msg } = await getLogout({
        id,
        token,
      })
      if (code == 200) {
        delCookie('id')
        delCookie('token')
        props.history.push('/login')
      } else {
        setopentip(msg)
        setOpen(true)
        setTimeout(() => {
          setOpen(false)
        }, 2888)
      }
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
          <div data-info={headMenu[0]} className="cenItem index">
            首页
          </div>
          <div data-info={headMenu[1]} className="cenItem">
            班级信息
          </div>
          <div data-info={headMenu[2]} className="cenItem">
            名校资源
          </div>
          <div data-info={headMenu[3]} className="cenItem">
            校本试卷
          </div>
          <div data-info={headMenu[4]} className="cenItem">
            知识库
          </div>
          <div data-info={headMenu[5]} className="cenItem">
            上传的试卷
          </div>
          <div data-info={headMenu[6]} className="cenItem">
            我的试卷
          </div>
        </div>
        <div className="right_box">
          <Avatar
            className="Avatar"
            alt="Remy Sharp"
            src={teacher?.avatar_file}
          />
          <span onClick={handleClick}>{teacher?.true_name}</span>
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
            <MenuItem
              data-info={araList[2]}
              onClick={handleClose}
              style={{ color: '#E9140A' }}
            >
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
export default memo(AI_header)
