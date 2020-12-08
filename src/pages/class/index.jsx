import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { GET_CLASS_INFO } from '@/store/actionType'
import { getTeamList } from '@/services/class'
import T_modelbox from '@/common/T_modelbox'
import { Button, Avatar, Select, Breadcrumb, message } from 'antd'
import { getAddTeam, addTeam } from '@/services/class'
const { Option } = Select

/**
 *  Class 路由
 *
 * @param {Object} props
 * @return {*}
 */
function Class(props) {
  const [TeamData, setTeamData] = useState({})
  const [Teamid, setTeamid] = useState('请选择年级')
  const [classId, setclassId] = useState('请选择班级')
  const [classInfo, setClassInfo] = useState({})
  const [Open, setOpen] = useState(false)
  const { homeInfo, setClass, classInfos, history } = props
  useEffect(() => {
    getAddTeamData()
    getTeamLists()
    return () => {}
  }, [])

  /**
   *
   *  获取新增班级所需
   */
  const getAddTeamData = async () => {
    const { code, data } = await getAddTeam()
    if (code === 200) {
      setTeamData(data)
    }
  }

  const getTeamLists = async () => {
    const { code, data, msg } = await getTeamList()
    if (code == 200) {
      setClassInfo(data)
      setClass(data)
    }
  }

  /**
   *跳转班级详情页面/class/detail 传递iid
   *
   * @param {Number} iid
   */
  const get_Details = (iid) => {
    history.push(`/class/detail?id=${iid}`)
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
    setTeamid(value)
  }

  const handleChanges = (value) => {
    setclassId(value)
  }

  /**
   *  循环50次班级
   *
   * @param {*} num
   * @return {*}
   */
  const forOptionClass = (num) => {
    let arr = []
    for (let key = 0; key < num; key++) {
      arr.push(
        <Option value={key + 1} key={key}>
          {key + 1}班
        </Option>
      )
    }
    return arr
  }

  /**
   *
   *  新增班级点击
   */
  const addTeamClick = async () => {
    const { code, msg } = await addTeam({
      grade_id: Teamid,
      name: classId,
    })
    if (code === 200) {
      getTeamLists()
      setOpen(false)
      message.success(msg)
    } else {
      message.error(msg)
    }
    setTeamid('请选择年级')
    setclassId('请选择班级')
  }

  /**
   * menu click
   *
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  return (
    <div id="Class">
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
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          班级信息
        </Breadcrumb.Item>
      </Breadcrumb>
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
            style={{ width: '34.57rem' }}
            onChange={handleChange}
            value={Teamid}
          >
            {TeamData?.grades?.map((item) => {
              return (
                <Option value={item?.id} key={item?.id}>
                  {item?.name}
                </Option>
              )
            })}
          </Select>
          <Select
            className="selectclass"
            style={{ width: '34.57rem' }}
            onChange={handleChanges}
            value={classId}
          >
            {forOptionClass(50)}
          </Select>
          <Button type="primary" className="btn" onClick={addTeamClick}>
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
