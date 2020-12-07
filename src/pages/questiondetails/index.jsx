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
    history.push('/main/knowledge')
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
          <div
            className="content_all"
            dangerouslySetInnerHTML={{
              __html: ExercisesData?.exercise?.content_all,
            }}
          ></div>
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
            <div
              className="body_txt"
              dangerouslySetInnerHTML={{
                __html: ExercisesData?.exercise?.answer,
              }}
            ></div>
          </div>
          <div className="Parse">
            <span className="title">【解析】</span>
            <div
              className="body_txt"
              dangerouslySetInnerHTML={{
                __html: ExercisesData?.exercise?.analysis,
              }}
            ></div>
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
                  <em>-</em>
                  移除
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
                  <em>+</em>
                  组卷
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
          {ExercisesData?.exerciseList?.data?.map((item, idx) => {
            return (
              <div className="items" key={item?.id}>
                <div className="top_title">
                  <div className="info_class">
                    <div className="difficulty">
                      难度：<span>{homeInfo?.teacher?.level[item?.level]}</span>
                    </div>
                    <div className="question">
                      {/* 来源：邗江实验学校2019-2020年九年级上学期第一次月考试卷.doc */}
                      题型：{item?.get_question_category?.title}
                    </div>
                  </div>
                  {/* <img
                    className="new_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/new_icon.png"
                    alt="new_icon"
                  /> */}
                </div>
                <div
                  className="cet_body"
                  dangerouslySetInnerHTML={{ __html: item?.content_all }}
                ></div>
                <div
                  className="answerbox"
                  style={{ display: item?.isanswer ? 'block' : 'none' }}
                >
                  <div className="Tests">
                    <span className="title">【考点】</span>
                    <div
                      className="body_txt"
                      dangerouslySetInnerHTML={{
                        __html: item?.knowName,
                      }}
                    ></div>
                  </div>
                  <div className="answer">
                    <span className="title">【答案】</span>
                    <div
                      className="body_txt"
                      dangerouslySetInnerHTML={{
                        __html: item?.answer,
                      }}
                    ></div>
                  </div>
                  <div className="Parse">
                    <span className="title">【解析】</span>
                    <div
                      className="body_txt"
                      dangerouslySetInnerHTML={{
                        __html: item?.analysis,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="bot_btns">
                  <div className="left_box_warp">
                    <div className="update_time">
                      更新时间：{setTimerType(item?.update_time * 1000)}
                    </div>
                    {/* <div className="counts">组卷次数：0</div> */}
                  </div>
                  <div className="right_box_warp">
                    <div className="answers" onClick={() => onSetAnswer(idx)}>
                      <img
                        className="View"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png"
                        alt="View"
                      />
                      <span>查看答案</span>
                    </div>
                    <div
                      className="details"
                      onClick={() => answerClick(item?.id)}
                    >
                      <img
                        className="answer"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
                        alt="answer"
                      />
                      <span>试题详情</span>
                    </div>
                    {item?.is_basket ? (
                      <Button
                        className="sub"
                        size="small"
                        variant="contained"
                        onClick={() => removeClick(item?.id)}
                      >
                        <em>-</em>
                        移除
                      </Button>
                    ) : (
                      <Button
                        className="add"
                        size="small"
                        variant="contained"
                        onClick={() => compositionClick(item?.id, item?.type)}
                      >
                        <em>+</em>
                        组卷
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
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
