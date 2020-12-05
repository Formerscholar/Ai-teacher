import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { getTeamDetail, delTeamTeacher, delTeamStudent } from '@/services/class'
import { Avatar, Breadcrumb, message, Button } from 'antd'
import { setTimerType, splitSearch } from '@/utils'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import T_modelbox from '@/common/T_modelbox'

function ClassDetails(props) {
  const { location, history, homeInfo } = props
  const iid = splitSearch(location.search).id
  const [detailData, setDetailData] = useState({})
  const [detailstudInfo, setdetailstudInfo] = useState({})
  const [Open, setOpen] = useState(false)
  const [delText, setdelText] = useState('')

  useEffect(() => {
    getTeamDetails()

    return () => {}
  }, [])

  const getTeamDetails = async () => {
    const { code, data, msg } = await getTeamDetail({
      team_id: iid,
    })
    if (code == 200) {
      setDetailData(data)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/class')
  }
  
  const handleClicks = (event) => {
    event.preventDefault()
    history.push('/main/index')
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
    if (code === 200) {
      message.success(msg)
    } else {
      message.error(msg)
    }
    getTeamDetails()
  }

  /**
   * 班级删除学生
   *
   * @param {Number} team_id
   * @param {Number} student_id
   * @param {String} true_name
   */
  const delstudentrClick = (team_id, student_id, true_name) => {
    setdetailstudInfo({
      team_id,
      student_id,
      true_name,
    })
    setOpen(true)
  }

  const confirmClick = async () => {
    const { code, msg } = await delTeamStudent({
      team_id: detailstudInfo.team_id,
      student_id: detailstudInfo.student_id,
    })
    if (code === 200) {
      message.success(msg)
    } else {
      message.error(msg)
    }
    setOpen(false)
    getTeamDetails()
  }

  const StudyReportClick = (id, name) => {
    history.push(
      `/main/studyreport?id=${id}&iid=${iid}&name=${encodeURI(name)}`
    )
  }

  return (
    <div id="ClassDetails">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          onClick={handleClicks}
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
          onClick={handleClick}
        >
          班级信息
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          {detailData?.team?.get_grade?.name}
          {detailData?.team?.name}
        </Breadcrumb.Item>
      </Breadcrumb>
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
                    src={item?.avatar_file}
                  />
                  <span>{item?.true_name}</span>
                  {item?.is_vip === 1 ? (
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
                      item?.last_add_exercises_time * 1000 ||
                        new Date().getTime()
                    )}
                  </span>
                </div>
                <div className="operate_box flex_box">
                  <span
                    onClick={() => StudyReportClick(item?.id, item?.true_name)}
                  >
                    学情报告
                  </span>
                  {detailData?.team?.teacher_id !== item?.id &&
                  detailData?.team?.is_active === 0 ? (
                    <span
                      onClick={() =>
                        delstudentrClick(
                          detailData?.team?.id,
                          item?.id,
                          item?.true_name
                        )
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
      {/* 模态框 */}
      <T_modelbox
        isOpen={Open}
        title="【温馨提示】"
        closeClick={() => setOpen(false)}
        width="41.71rem"
        height="19.93rem"
      >
        <div id="tmodelbox" className="delitem">
          <div className="title">
            确定是否移除《{detailstudInfo?.true_name}》学生？
          </div>
          <Button type="primary" className="btn" onClick={confirmClick}>
            确定
          </Button>
        </div>
      </T_modelbox>
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
