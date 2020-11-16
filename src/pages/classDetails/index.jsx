import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { getTeamDetail } from '@/services/class'
import { Breadcrumbs, Typography, Avatar } from '@material-ui/core'
import { setTimerType } from '@/utils'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

function ClassDetails(props) {
  const { location, history, homeInfo } = props
  const [detailData, setDetailData] = useState({})

  useEffect(() => {
    getTeamDetails()

    return () => {}
  }, [])

  const getTeamDetails = async () => {
    const { code, data, msg } = await getTeamDetail({
      team_id: location.state.iid,
    })
    if (code == 200) {
      setDetailData(data)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/class')
  }

  return (
    <div id="ClassDetails">
      <Breadcrumbs
        className="bread"
        aria-label="breadcrumb"
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Typography
          className="breaditem"
          color="textPrimary"
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
          />
          班级信息
        </Typography>
        <Typography className="breaditem" color="textPrimary">
          {detailData?.team?.get_grade?.name}
          {detailData?.team?.name}
        </Typography>
      </Breadcrumbs>
      <div className="teacher_list">
        <div className="title_text">
          <span>老师姓名</span>
          <span>科目</span>
          <span>最后登录时间</span>
          <span>操作</span>
        </div>
        <div className="teacher_items">
          {detailData?.teamTeacher?.map((item) => {
            return (
              <div className="item" key={item?.id}>
                <div className="name_box flex_box">
                  <Avatar
                    className="Avatar"
                    alt="avatar"
                    src={item?.avatar_file}
                  />
                  <span>{item?.true_name}老师</span>
                </div>
                <div className="subject_box flex_box">
                  <span>{item?.get_subject?.title}</span>
                </div>
                <div className="lasttime_box flex_box">
                  <span>{setTimerType(item?.last_login_time * 1000)}</span>
                </div>
                <div className="operate_box flex_box">
                  {detailData?.team?.teacher_id !== item?.id && detailData?.team?.teacher_id  === homeInfo?.teacher?.id ? (
                    <span>移除</span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="student_list"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(ClassDetails))
