import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { GET_CLASS_INFO } from '@/store/actionType'
import { getTeamList } from '@/services/class'
import T_modelbox from '@/common/T_modelbox'
import { Button, Avatar, Select } from 'antd'
const { Option } = Select

/**
 *  Class 路由
 *
 * @param {Object} props
 * @return {*}
 */
function Class(props) {
  const [classInfo, setClassInfo] = useState({})
  const [Open, setOpen] = useState(false)
  const { homeInfo, setClass, classInfos, history } = props
  useEffect(() => {
    getTeamLists()
    return () => {}
  }, [])

  const getTeamLists = async () => {
    const { code, data, msg } = await getTeamList()
    if (code == 200) {
      setClassInfo(data)
      setClass(data)
    }
  }

  /**
   *跳转班级详情页面/main/classdetail 传递iid
   *
   * @param {Number} iid
   */
  const get_Details = (iid) => {
    history.push(`/main/classdetail?id=${iid}`)
  }

  /**
   *创建新班级 打开封装弹窗
   *
   */
  const newClassClick = () => {
    setOpen(true)
  }

  const closeClick = () => {
    setOpen(false)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  return (
    <div id="Class">
      <div className="teacher_info">
        <div className="left_box">
          <Avatar
            className="Avatar"
            alt="avatar"
            src={classInfo.teacher?.avatar_file}
          />
          <div className="info">
            <div className="top_name">{classInfo.teacher?.true_name}老师</div>
            <div className="bot_info">
              <div className="school">
                {classInfo.teacher?.get_school?.name}
              </div>
              <div className="subject">
                {classInfo.teacher?.get_subject?.title}老师
              </div>
            </div>
          </div>
        </div>
        <Button className="right_box" danger onClick={newClassClick}>
          创建新的班级
        </Button>
      </div>
      <div className="class_box">
        {classInfo.teamList?.map((item) => {
          return (
            <div className="item_box" key={item?.id}>
              <div className="icon_class">
                <img
                  className="class_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/class_icon.png"
                  alt="class_icon"
                />
                <div className="class_text">
                  {item?.get_grade?.name}
                  {item?.name}
                </div>
              </div>
              <div className="cutoff"></div>
              <div className="class_info">
                <div className="id">ID:{item?.classid}</div>
                <div className="students">学生人数:{item?.get_user_count}</div>
                <div className="teachers">老师人数:{item?.teacherCount}</div>
              </div>

              <div className="btns">
                <Button
                  className="btn"
                  variant="contained"
                  onClick={() => get_Details(item?.id)}
                >
                  点击查看
                </Button>
              </div>
            </div>
          )
        })}
      </div>
      {/* 模tai */}
      <T_modelbox
        isOpen={Open}
        title="【创建】"
        closeClick={closeClick}
        width="41.71rem"
        height="23.5rem"
      >
        <div id="tmodelbox">
          <div className="title">{classInfo.teacher?.get_school?.name}</div>
          <Select
            className="selectgrade"
            defaultValue="请选择年级"
            style={{ width: '34.57rem' }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Select
            className="selectclass"
            defaultValue="请选择班级"
            style={{ width: '34.57rem' }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Button type="primary" className="btn">
            确定
          </Button>
        </div>
      </T_modelbox>
    </div>
  )
}

/**
 *
 *  redux 获取state
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
    classInfos: state.classInfo,
  }
}

/**
 *
 *  redux 设置state
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setClass(value) {
      let action = {
        type: GET_CLASS_INFO,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Class))
