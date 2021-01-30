import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { setTimerType } from '@/utils'
import { Button } from 'antd'
import './index.less'

function AI_topic(props) {
  const {
    homeInfo,
    level,
    exercises_title,
    content_all,
    isanswer,
    knowName,
    answer,
    analysis,
    update_time,
    is_basket,
    onSetAnswer,
    answerClick,
    removeClick,
    compositionClick,
  } = props

  useEffect(() => {
    const MathJax = window.MathJax
    if (MathJax) {
      MathJax.typesetPromise && MathJax.typesetPromise()
    }
    return () => {}
  }, [])

  return (
    <div id="AI_topic">
      <div className="top_title">
        <div className="info_class">
          <div className="difficulty">
            难度：
            <span>{homeInfo?.teacher?.level[level]}</span>
          </div>
          <div className="question">题型：{exercises_title}</div>
        </div>
      </div>
      <div
        className="cet_body"
        dangerouslySetInnerHTML={{
          __html: content_all,
        }}
      ></div>
      <div
        className="answerbox"
        style={{ display: isanswer ? 'block' : 'none' }}
      >
        <div className="Tests">
          <span className="title">【考点】</span>
          <div
            className="body_txt"
            dangerouslySetInnerHTML={{
              __html: knowName,
            }}
          ></div>
        </div>
        <div className="answer">
          <span className="title">【答案】</span>
          <div
            className="body_txt"
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          ></div>
        </div>
        <div className="Parse">
          <span className="title">【解析】</span>
          <div
            className="body_txt"
            dangerouslySetInnerHTML={{
              __html: analysis,
            }}
          ></div>
        </div>
      </div>
      <div className="bot_btns">
        <div className="left_box_warp">
          <div className="update_time">
            更新时间：
            {setTimerType(update_time * 1000)}
          </div>
        </div>
        <div className="right_box_warp">
          <div className="answers" onClick={onSetAnswer}>
            <img
              className="View"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png"
              alt="View"
            />
            <span>查看答案</span>
          </div>
          <div className="details" onClick={answerClick}>
            <img
              className="answer"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
              alt="answer"
            />
            <span>试题详情</span>
          </div>
          {is_basket ? (
            <Button
              className="sub"
              variant="contained"
              size="small"
              onClick={removeClick}
            >
              - 移除
            </Button>
          ) : (
            <Button
              className="add"
              variant="contained"
              size="small"
              onClick={compositionClick}
            >
              + 组卷
            </Button>
          )}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(AI_topic))
