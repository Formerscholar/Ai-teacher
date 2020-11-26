import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Avatar, message, Breadcrumb } from 'antd'
import { information } from '@/services/user'

function User(props) {
  const { history } = props
  const [userData, setUserData] = useState({})
  useEffect(() => {
    getinformation()
    return () => {}
  }, [])
  const getinformation = async () => {
    const { code, data, msg } = await information()
    if (code === 200) {
      setUserData(data?.teacher)
    } else {
      message.error(msg)
    }
  }

  /**
   *  menu click
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    localStorage.setItem('menuIndex',0)
    history.push('/main/index')
  }

  return (
    <div id="User">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          onClick={handleClick}
          style={{ cursor: 'pointer', color: '#222' }}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
          />
          首页
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          个人中心
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          个人资料
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="body_warp">
        <div className="left_box">
          <div className="top_info">
            <Avatar
              className="Avatar"
              size={79}
              icon={
                <img
                  style={{ width: '5.64rem', height: '5.64rem' }}
                  src={userData?.avatar_file}
                  alt="avatar"
                />
              }
            />
            <div className="info">
              <div className="name">{userData?.true_name}</div>
              <div className="subject">{userData?.get_subject?.title}老师</div>
            </div>
          </div>
          <div className="bot_menu">
            <div className="items">
              <div className="left_warp"></div>
              <div className="right_warp"></div>
            </div>
          </div>
        </div>
        <div className="right_box"></div>
      </div>
    </div>
  )
}
export default memo(User)
