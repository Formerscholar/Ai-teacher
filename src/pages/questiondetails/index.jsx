import React, { memo, useState, useEffect } from 'react'
import './index.less'
import {
  getExercisesDetail,
  addExamBasket,
  delExamBasket,
} from '@/services/knowledge'
import { Button, Breadcrumb, message } from 'antd'
import { setTimerType, splitSearch } from '@/utils'
import { connect } from 'react-redux'
import {
  GET_HOME_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import MathJax from 'react-mathjax-preview'
import AI_topic from 'components/AI_topic/AI_topic'

function Questiondetails(props) {
  const {
    subtopicData,
    history,
    location,
    volumeTopicCount,
    addtopicData,
    homeInfo,
  } = props
  const [ExercisesData, setExercisesData] = useState({})
  const [pages, setpages] = useState(1)

  useEffect(() => {
    getDetails(pages)
    return () => {}
  }, [volumeTopicCount])

  const onSetAnswer = (idx) => {
    let data = { ...ExercisesData }
    data.exerciseList.data[idx].isanswer = !data.exerciseList.data[idx].isanswer
    setExercisesData(data)
  }

  /**
   *
   *  初始化详情数据
   */
  const getDetails = async (page = 1) => {
    const { code, data, msg } = await getExercisesDetail({
      id: splitSearch(location.search).id,
      page,
    })
    if (code === 200) {
      data?.exerciseList?.data?.map((item) => {
        item['isanswer'] = false
      })
      setExercisesData(data)
    } else {
      message.error(msg)
    }
  }

  /**
   *
   *  返回知识点选题
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/knowledge')
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    getDetails(id)
  }

  const batchClick = () => {
    console.log('batchClick')
    let pagedata = pages
    pagedata++
    setpages(pagedata)
    getDetails(pagedata)
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

  return (
    <div id="Questiondetails">
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
          知识点组卷
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          试题详情
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_body">
        <div className="bor_warp">
          <div className="content_all">
            <MathJax
              math={ExercisesData?.exercise?.content_all}
              config={{
                loader: { load: ['input/tex', 'output/chtml'] },
              }}
            />
          </div>
          <div className="Tests">
            <span className="title">【考点】</span>
            <div
              className="body_txt"
              dangerouslySetInnerHTML={{
                __html: ExercisesData?.exercise?.knowName,
              }}
            ></div>
          </div>
          <div className="answer">
            <span className="title">【答案】</span>
            <div className="body_txt">
              <MathJax
                math={ExercisesData?.exercise?.answer}
                config={{
                  loader: { load: ['input/tex', 'output/chtml'] },
                }}
              />
            </div>
          </div>
          <div className="Parse">
            <span className="title">【解析】</span>
            <div className="body_txt">
              <MathJax
                math={ExercisesData?.exercise?.analysis}
                config={{
                  loader: { load: ['input/tex', 'output/chtml'] },
                }}
              />
            </div>
          </div>
          <div className="bot_warp">
            <div className="left_box">
              <div className="grade">
                年级：{ExercisesData?.exercise?.get_grade?.name}
              </div>
              <div className="type">
                题型：{ExercisesData?.exercise?.get_question_category?.title}
              </div>
              <div className="difficulty">
                难度：{homeInfo?.teacher?.level[ExercisesData?.exercise?.level]}
              </div>
              <div className="update_time">
                更新时间：
                {setTimerType(ExercisesData?.exercise?.update_time * 1000)}
              </div>
            </div>
            <div className="right_box">
              {ExercisesData?.exercise?.is_basket ? (
                <Button
                  className="sub"
                  size="small"
                  variant="contained"
                  onClick={() => removeClick(ExercisesData?.exercise?.id)}
                >
                  - 移除
                </Button>
              ) : (
                <Button
                  className="add"
                  size="small"
                  variant="contained"
                  onClick={() =>
                    compositionClick(
                      ExercisesData?.exercise?.id,
                      ExercisesData?.exercise?.type
                    )
                  }
                >
                  + 组卷
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 同类型 */}
      <div className="samelist">
        <div className="top_box">
          <div className="left_warp">同类型题目</div>
          <div className="right_warp" onClick={batchClick}>
            <img
              className="refsh_icon"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png"
              alt="refsh_icon"
            />
            换一批
          </div>
        </div>
        <div className="body_box">
          {ExercisesData?.exerciseList?.data?.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#E50304' }}>
              没有找到同类型题目
            </div>
          ) : (
            ExercisesData?.exerciseList?.data?.map((item, idx) => {
              return (
                <AI_topic
                  key={item?.id}
                  level={item?.level}
                  exercises_title={item?.get_question_category?.title}
                  content_all={item?.content_all}
                  isanswer={item?.isanswer}
                  knowName={item?.knowName}
                  answer={item?.answer}
                  analysis={item?.analysis}
                  update_time={item?.update_time}
                  is_basket={item?.is_basket}
                  onSetAnswer={() => onSetAnswer(idx)}
                  answerClick={() => answerClick(item?.id)}
                  removeClick={() => removeClick(item?.id)}
                  compositionClick={() =>
                    compositionClick(item?.id, item?.type)
                  }
                />
              )
            })
          )}
        </div>
      </div>
      {/* 悬浮框 */}
      <AI_floatBox props={props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
    volumeTopicCount: state.volumeTopicCount,
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
)(memo(Questiondetails))
