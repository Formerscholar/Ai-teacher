import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import G_spin from '@/common/G_spin'
import { Avatar, Breadcrumb } from 'antd'
import { info_menu, UserRoutePath } from '@/conf'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

const Datum = Loadable({
  loader: () => import('./children/datum'),
  loading: G_spin,
})

const Integral = Loadable({
  loader: () => import('./children/integral'),
  loading: G_spin,
})

const Down = Loadable({
  loader: () => import('./children/down'),
  loading: G_spin,
})

const Upload_list = Loadable({
  loader: () => import('./children/UPlist'),
  loading: G_spin,
})

const Upload_detail = Loadable({
  loader: () => import('./children/UPdetails'),
  loading: G_spin,
})

const Upload_loading = Loadable({
  loader: () => import('./children/UPuploading'),
  loading: G_spin,
})

function User(props) {
  const { history, location, homeInfo } = props
  const [info_current, setinfo_current] = useState(0)

  useEffect(() => {
    UserRoutePath.map((item, idx) => {
      if (item == location?.pathname) {
        setinfo_current(idx)
      }
    })
  })

  /**
   *  menu click
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  /**
   *
   *  个人信息导航 Click
   * @param {*} idx
   */
  const infoMenuClick = (idx) => {
    history.push(UserRoutePath[idx])
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
            <div className="perpo">
              <Avatar
                className="Avatar"
                size={79}
                icon={
                  <img
                    style={{ width: '5.64rem', height: '5.64rem' }}
                    src={homeInfo?.teacher?.avatar_file}
                    alt="avatar"
                  />
                }
              />
              <div className="name">{homeInfo?.teacher?.true_name}</div>
            </div>
            <div className="info">
              <div className="subject">
                <img
                  className="subject_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png"
                  alt="subject_icon"
                />
                <span>{homeInfo?.teacher?.get_subject?.title}</span>
              </div>
              <div className="integral">
                <img
                  className="integral_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png"
                  alt="integral_icon"
                />
                <span>积分：{homeInfo?.teacher?.points}</span>
              </div>
            </div>
          </div>
          <div className="bot_menu">
            {info_menu?.map((item, idx) => {
              return (
                <div
                  className={info_current == idx ? 'items current_bg' : 'items'}
                  onClick={() => infoMenuClick(idx)}
                  key={idx}
                >
                  <img className="pic_icon" src={item.img} alt="icon_small" />
                  <span className="text">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="right_box">
          <Switch>
            <Route exact path="/user/down" component={Down} />
            <Route exact path="/user/integral" component={Integral} />
            <Route exact path="/user/upload_list" component={Upload_list} />
            <Route exact path="/user/upload_detail" component={Upload_detail} />
            <Route
              exact
              path="/user/upload_loading"
              component={Upload_loading}
            />
            <Route path="/user/datum" component={Datum} />
          </Switch>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(User))
