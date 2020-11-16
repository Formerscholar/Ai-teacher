import React, { memo, useState, useEffect } from 'react'
import './AI_header.less'
import { Menu, MenuItem, Avatar, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { getLogout } from '@/services/login'
import { headMenu } from '@/conf'
import { getCookie, delCookie } from '@/utils'
import { gethome } from '@/services/home'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

const araList = ['data', 'integral', 'logout']

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function AI_header({ homeInfo, props, setData }) {
  const [open, setOpen] = useState(false)
  const [opentip, setopentip] = useState('请求错误!')
  const [anchorEl, setAnchorEl] = useState(null)
  const [current, setcurrent] = useState(0)
  const [indexData, setIndexData] = useState({})

  useEffect(() => {
    gethomeData()
    return () => {}
  }, [])

  const gethomeData = async () => {
    const { code, data } = await gethome()
    if (code == 200) {
      setIndexData(data)
      setData(data)
    }
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const headMenuClick = (e) => {
    const { id } = e.target.dataset
    setcurrent(id)
    props.history.push(`/${headMenu[id].url}`)
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
          {headMenu.map((item, index) => {
            return (
              <div
                data-id={index}
                key={index}
                className={current == index ? 'cenItem index' : 'cenItem'}
                onClick={headMenuClick}
              >
                {item.text}
              </div>
            )
          })}
        </div>
        <div className="right_box">
          <Avatar
            className="Avatar"
            alt="Remy Sharp"
            src={indexData.teacher?.avatar_file}
          />
          <span onClick={handleClick}>{indexData.teacher?.true_name}</span>
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

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData(value) {
      let action = {
        type: GET_HOME_INFO,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AI_header))
