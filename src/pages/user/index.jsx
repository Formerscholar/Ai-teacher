import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Avatar, message } from 'antd'
import { information } from '@/services/user'

function User() {
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
  return (
    <div id="User">
      <div className="left_box">
        <div className="top_info">
          <Avatar
            className="Avatar"
            size={79}
            icon={<img style={{width:'5.64rem',height:'5.64rem'}} src={userData?.avatar_file} alt="avatar" />}
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
  )
}
export default memo(User)
