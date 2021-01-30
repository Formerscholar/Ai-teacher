import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Breadcrumb, Button, message } from 'antd'
import { getSchoolBasedDetail } from '@/services/Schoolbased'
import { splitSearch } from '@/utils'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { setTimerType } from '@/utils'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import {
  getExerciseAnswer,
  addExamBasket,
  delExamBasket,
} from '@/services/knowledge'

import AI_topic from 'components/AI_topic/AI_topic'

function Schoolbaseddetail(props) {
  const {
    history,
    location,
    homeInfo,
    addtopicData,
    subtopicData,
    volumeTopicCount,
    match,
  } = props
  const [basedData, setBasedData] = useState({})

  useEffect(() => {
    getSchoolBased()
    return () => {}
  }, [volumeTopicCount])

  /**
   *  面包屑返回
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/schoolbased')
  }
  const handleClicks = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const getSchoolBased = async () => {
    const { code, data } = await getSchoolBasedDetail({
      id: match.params.id,
    })
    if (code === 200) {
      if (data.examsExercises.length === 0) {
        message.error('本试卷无数据!')
        history.go(-1)
      } else {
        data?.examsExercises?.map((item) => {
          item['isanswer'] = false
        })
        setBasedData(data)
      }
    }
  }

  const onSetAnswer = async (idx, id) => {
    let basedDataCopy = { ...basedData }
    let basedRoot = basedDataCopy.examsExercises[idx]
    if (!basedRoot.isanswer) {
      let exercisesCopy = basedRoot.get_exercises
      if (
        exercisesCopy['knowName'] === undefined &&
        exercisesCopy['answer'] === undefined &&
        exercisesCopy['analysis'] === undefined
      ) {
        const { code, data, msg } = await getExerciseAnswer({
          id,
        })
        if (code === 200) {
          exercisesCopy['knowName'] = data.exercise.knowName
          exercisesCopy['answer'] = data.exercise.answer
          exercisesCopy['analysis'] = data.exercise.analysis
        } else {
          message.error(msg)
        }
      }
    }
    basedRoot.isanswer = !basedDataCopy.examsExercises[idx].isanswer
    setBasedData(basedDataCopy)
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    window.open(`/question/details?id=${id}`)
  }

  /**
   *  组卷添加事件
   *
   * @param {*} id
   * @param {*} type
   */
  const compositionClick = async (id, type) => {
    const { code, msg } = await addExamBasket({
      exercises_id: [id],
    })
    if (code == 200) {
      message.success(msg)
      addtopicData(1)
    } else {
      message.error(msg)
    }
  }

  const removeClick = async (id) => {
    const { code, msg } = await delExamBasket({
      exercises_id: id,
    })
    if (code == 200) {
      message.success(msg)
      subtopicData(1)
    } else {
      message.error(msg)
    }
  }

  return (
    <div id="Schoolbaseddetail">
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
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClicks}
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
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
        >
          校本试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          {basedData?.based?.title}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="paperList">
        {basedData?.examsExercises?.map((item, idx) => {
          return (
            <AI_topic
              key={item?.id}
              level={item?.get_exercises?.level}
              exercises_title={item?.get_exercises?.title}
              content_all={item?.get_exercises?.content_all}
              isanswer={item?.isanswer}
              knowName={item?.get_exercises?.knowName}
              answer={item?.get_exercises?.answer}
              analysis={item?.get_exercises?.analysis}
              update_time={item?.get_exercises?.update_time}
              is_basket={item?.is_basket}
              onSetAnswer={() => onSetAnswer(idx, item?.exercises_id)}
              answerClick={() => answerClick(item?.get_exercises?.id)}
              removeClick={() => removeClick(item?.exercises_id)}
              compositionClick={() =>compositionClick(
                item?.exercises_id,
                item?.get_exercises?.type
              )}
            />
          )
        })}
      </div>
      {/* 悬浮框 */}
      <AI_floatBox props={props} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Schoolbaseddetail))
