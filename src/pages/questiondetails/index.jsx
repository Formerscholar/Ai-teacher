import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { getExercisesDetail } from '@/services/knowledge'
import { Button, Breadcrumb } from 'antd'
import { setTimerType ,splitSearch} from '@/utils'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

function Questiondetails(props) {
  const { history, location, homeInfo } = props
  const [ExercisesData, setExercisesData] = useState({})

  useEffect(() => {
    getDetails(splitSearch(location.search).id)
    return () => {}
  }, [])

  /**
   *
   *  初始化详情数据
   */
  const getDetails = async (id) => {
    const { code, data, msg } = await getExercisesDetail({
      id,
    })
    if (code === 200) {
      setExercisesData(data)
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
            不等式组的解集
          </div>
          <div className="answer">
            <span className="title">【答案】</span>
            <span
              dangerouslySetInnerHTML={{
                __html: ExercisesData?.exercise?.answer,
              }}
            ></span>
          </div>
          <div className="Parse">
            <span className="title">【解析】</span>
            <span
              dangerouslySetInnerHTML={{
                __html: ExercisesData?.exercise?.analysis,
              }}
            ></span>
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
              <Button className="add" variant="contained">
                <span>+</span>
                组卷
              </Button>
              {/* <Button className="sub" variant="contained">
                  <span>-</span>
                  移除
                </Button> */}
            </div>
          </div>
        </div>
      </div>
      {/* 同类型 */}
      <div className="samelist">
        <div className="top_box">
          <div className="left_warp">同类型题目</div>
          <div className="right_warp">
            <img
              className="refsh_icon"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png"
              alt="refsh_icon"
            />
            换一批
          </div>
        </div>
        <div className="body_box">
          {ExercisesData?.exerciseList?.data?.map((item) => {
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
                <div className="bot_btns">
                  <div className="left_box_warp">
                    <div className="update_time">
                      更新时间：{setTimerType(item?.update_time * 1000)}
                    </div>
                    {/* <div className="counts">组卷次数：0</div> */}
                  </div>
                  <div className="right_box_warp">
                    <div className="answers">
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
                    <Button className="add" variant="contained">
                      <span>+</span>
                      组卷
                    </Button>
                    {/* <Button className="sub" variant="contained">
                  <span>-</span>
                  移除
                </Button> */}
                  </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Questiondetails))
