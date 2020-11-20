import React, { memo, useState, useEffect } from 'react'
import './AI_header.less'
import { Avatar, message, Menu, Dropdown } from 'antd'
import { getLogout } from '@/services/login'
import { headMenu } from '@/conf'
import { getCookie, delCookie } from '@/utils'
import { gethome } from '@/services/home'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

const araList = ['data', 'integral', '', '', 'logout']
const araLists = ['Chapter', 'Knowledge']
const araListss = ['Uploadpaper', 'paperList']

function AI_header({ homeInfo, props, setData }) {
  const [current, setcurrent] = useState(localStorage.getItem('menuIndex') || 0)
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

  const headMenuClick = (event, id) => {
    setcurrent(id)
    localStorage.setItem('menuIndex', id)
    if (id !== 4 && id !== 5) {
      props.history.push(`${headMenu[id].url}`)
    }
  }

  const handleClose = (info) => {
    const datafunc = () => {
      console.log('datafunc')
    }
    const integralfunc = () => {
      console.log('integralfunc')
    }
    const logoutfunc = async () => {
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
        message.error(msg)
      }
    }
    const keymap = new Map([
      [araList[0], datafunc],
      [araList[1], integralfunc],
      [araList[4], logoutfunc],
    ])
    keymap.get(info) && keymap.get(info)()
  }

  const handleCloses = (info) => {
    const Chapterfunc = () => {
      props.history.push('/main/chapter')
    }
    const Knowledgefunc = () => {
      props.history.push('/main/knowledge')
    }
    const keymap = new Map([
      [araLists[0], Chapterfunc],
      [araLists[1], Knowledgefunc],
    ])
    keymap.get(info) && keymap.get(info)()
  }

  const handleClosess = (info) => {
    const uploadpaperfunc = () => {
      props.history.push('/main/uploadpaper')
    }
    const paperlistfunc = () => {
      props.history.push('/main/paperlist')
    }
    const keymap = new Map([
      [araListss[0], uploadpaperfunc],
      [araListss[1], paperlistfunc],
    ])
    keymap.get(info) && keymap.get(info)()
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => handleCloses(araLists[0])}>
        章节同步选题
      </Menu.Item>
      <Menu.Item onClick={() => handleCloses(araLists[1])}>
        知识点组卷
      </Menu.Item>
    </Menu>
  )

  const menus = (
    <Menu>
      <Menu.Item onClick={() => handleClose(araList[0])}>个人资料</Menu.Item>
      <Menu.Item onClick={() => handleClose(araList[1])}>我的积分</Menu.Item>
      <Menu.Item onClick={() => handleClose(araList[2])}>下载记录</Menu.Item>
      <Menu.Item onClick={() => handleClose(araList[3])}>组卷记录</Menu.Item>
      <Menu.Item
        onClick={() => handleClose(araList[4])}
        style={{ color: '#E9140A' }}
      >
        退出
      </Menu.Item>
    </Menu>
  )

  const menuss = (
    <Menu>
      <Menu.Item onClick={() => handleClosess(araListss[0])}>
        上传试卷
      </Menu.Item>
      <Menu.Item onClick={() => handleClosess(araListss[1])}>
        试卷列表
      </Menu.Item>
    </Menu>
  )
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
                key={index}
                className={current == index ? 'cenItem index' : 'cenItem'}
                onClick={(e) => headMenuClick(e, index)}
              >
                {index == 4 ? (
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <button>{item.text}</button>
                  </Dropdown>
                ) : index == 5 ? (
                  <Dropdown overlay={menuss} placement="bottomCenter">
                    <button>{item.text}</button>
                  </Dropdown>
                ) : (
                  item.text
                )}
              </div>
            )
          })}
        </div>
        <div overlay={menu} placement="bottomCenter" className="right_box">
          <Avatar
            className="Avatar"
            alt="Remy Sharp"
            src={indexData.teacher?.avatar_file}
          />
          <Dropdown overlay={menus} placement="bottomCenter">
            <button>
              {indexData.teacher?.true_name} <div className="right_icon"></div>
            </button>
          </Dropdown>
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
