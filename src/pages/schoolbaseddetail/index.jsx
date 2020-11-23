import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Breadcrumb, Button, message } from 'antd'
import { getSchoolBasedDetail } from '@/services/Schoolbased'
import { splitSearch } from '@/utils'
import { connect } from 'react-redux'
import { GET_CLASS_INFO } from '@/store/actionType'
import { setTimerType } from '@/utils'

function Schoolbaseddetail(props) {
  const [basedData, setBasedData] = useState({})
  const { history, location, homeInfo } = props

  useEffect(() => {
    getSchoolBased()
    return () => {}
  }, [])

  /**
   *  面包屑返回
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/schoolbased')
  }

  const getSchoolBased = async () => {
    const { code, data } = await getSchoolBasedDetail({
      id: splitSearch(location.search).id,
    })
    if (code === 200) {
      if (data.examsExercises.length === 0) {
        message.error('本试卷无数据!')
        history.go(-1)
      } else {
        setBasedData(data)
      }
    }
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    history.push(`/main/questiondetails?id=${id}`)
  }
  return (
    <div id="Schoolbaseddetail">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
          />
          校本试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          试卷详情
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          {basedData?.based?.title}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="paperList">
        {basedData?.examsExercises?.map((item) => {
          return (
            <div className="items" key={item?.id}>
              <div className="top_title">
                <div className="info_class">
                  <div className="difficulty">
                    难度：
                    <span>
                      {homeInfo?.teacher?.level[item?.get_exercises?.level]}
                    </span>
                  </div>
                  <div className="question">
                    题型：{item?.get_exercises?.get_question_category?.title}
                  </div>
                </div>
              </div>
              <div
                className="cet_body"
                dangerouslySetInnerHTML={{
                  __html: item?.get_exercises?.content_all,
                }}
              ></div>
              <div className="bot_btns">
                <div className="left_box_warp">
                  <div className="update_time">
                    更新时间：
                    {setTimerType(item?.get_exercises?.update_time * 1000)}
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
                    onClick={() => answerClick(item?.get_exercises?.id)}
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
                <em>-</em>
                移除
              </Button> */}
                </div>
              </div>
            </div>
          )
        })}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Schoolbaseddetail))
