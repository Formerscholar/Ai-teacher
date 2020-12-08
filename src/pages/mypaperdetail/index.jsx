import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Breadcrumb, message } from 'antd'
import { getDetailPapers } from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { splitSearch } from '@/utils'

function Mypaperdetail(props) {
  const { history, location, volumeTopicCount } = props
  const search = splitSearch(location.search)
  const [exercisesData, setexercisesData] = useState({})

  useEffect(() => {
    getPapers()
    return () => {}
  }, [volumeTopicCount])

  const getPapers = async () => {
    const { code, data, msg } = await getDetailPapers({
      id: search.id,
    })
    if (code === 200) {
      setexercisesData(data)
    } else {
      message.error(msg)
    }
  }

  /**
   *
   *  返回路由
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const paperClick = () => {
    history.push('/mypaper/list')
  }

  return (
    <div id="Mypaper">
      <Breadcrumb
        className="bread"
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          className="breaditem"
          color="textPrimary"
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
          />
          首页
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          color="textPrimary"
          onClick={paperClick}
        >
          我的试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          试卷详情
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_body">
        <div className="left_box">
          <div className="title_box">2020年11月13日xxx的初中数学试卷</div>
          <div className="topic_title">一、单选题（共2题；共30分）</div>
          <div className="topic_html">
            有 3 块积木，每一块的各面都涂上不同的颜色，3
            块的涂法完全相同,现把它们摆放成不同的位
            置(如图)，请你根据图形判断涂成绿色一面的对面的颜色是 ( )
          </div>
        </div>
        <div className="right_box">right_box</div>
      </div>
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
    volumeTopicCount: state.volumeTopicCount,
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
    addtopicData(value) {
      let action = {
        type: ADD_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    subtopicData(value) {
      let action = {
        type: SUB_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    settopicData(value) {
      let action = {
        type: SET_TOPIC,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Mypaperdetail))
