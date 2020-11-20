import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { getTeamDetail, delTeamTeacher, delTeamStudent } from '@/services/class'
import { Avatar } from 'antd'
import { setTimerType, splitSearch } from '@/utils'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

function ClassDetails(props) {
  const { location, history, homeInfo } = props
  const [detailData, setDetailData] = useState({})
  const [open, setOpen] = useState(false)
  const [opentip, setopentip] = useState('')
  const [openType, setopenType] = useState('error')
  useEffect(() => {
    getTeamDetails()

    return () => {}
  }, [])

  const getTeamDetails = async () => {
    const { code, data, msg } = await getTeamDetail({
      team_id: splitSearch(location.search).id,
    })
    if (code == 200) {
      setDetailData(data)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/class')
  }

  /**
   * 班级删除老师
   *
   * @param {Number} team_id
   * @param {Number} teacher_id
   */
  const delteacherClick = async (team_id, teacher_id) => {
    const { code, msg } = await delTeamTeacher({
      team_id,
      teacher_id,
    })
    setopentip(msg)
    if (code === 200) {
      setopenType('success')
    } else {
      setopenType('error')
    }
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      getTeamDetails()
    }, 2888)
  }

  /**
   * 班级删除学生
   *
   * @param {Number} team_id
   * @param {Number} student_id
   */
  const delstudentrClick = async (team_id, student_id) => {
    const { code, msg } = await delTeamStudent({
      team_id,
      student_id,
    })
    setopentip(msg)
    if (code === 200) {
      setopenType('success')
    } else {
      setopenType('error')
    }
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      getTeamDetails()
    }, 2888)
  }

  return (
    <div id="ClassDetails">
      {/* <Breadcrumbs
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
      </Breadcrumbs> */}
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
                  {detailData?.team?.teacher_id !== item?.id &&
                  detailData?.team?.teacher_id === homeInfo?.teacher?.id &&
                  detailData?.team?.is_active === 0 ? (
                    <span
                      onClick={() =>
                        delteacherClick(detailData?.team?.id, item?.id)
                      }
                    >
                      移除
                    </span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="student_list">
        <div className="title_text">
          <span>学生姓名</span>
          <span>已收集错题数</span>
          <span>更新错题时间</span>
          <span>操作</span>
        </div>
        <div className="teacher_items">
          {detailData?.teamStudent?.map((item) => {
            return (
              <div className="item" key={item?.id}>
                <div className="name_box flex_box">
                  <Avatar
                    className="Avatar"
                    alt="avatar"
                    src={item?.get_user?.avatar_file}
                  />
                  <span>{item?.get_user?.true_name}</span>
                  {item?.get_user?.is_vip === 1 ? (
                    <img
                      className="vip"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png"
                      alt="vip"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="subject_box flex_box">
                  <span>{item?.errorCount}</span>
                </div>
                <div className="lasttime_box flex_box">
                  <span>
                    {setTimerType(
                      item?.get_user?.last_add_exercises_time * 1000
                    )}
                  </span>
                </div>
                <div className="operate_box flex_box">
                  <span>学情报告</span>
                  {detailData?.team?.teacher_id !== item?.id &&
                  detailData?.team?.is_active === 0 ? (
                    <span
                      onClick={() =>
                        delstudentrClick(detailData?.team?.id, item?.user_id)
                      }
                    >
                      移除
                    </span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            )
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(ClassDetails))
