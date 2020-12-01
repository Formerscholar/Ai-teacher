import React, { memo, useEffect, useState } from 'react'
import './AI_floatBox.less'
import { connect } from 'react-redux'
import { ADD_TOPIC, SUB_TOPIC, SET_TOPIC } from '@/store/actionType'
import {
  basketDetail,
  delTypeExamBasket,
  clearExamBasket,
} from '@/services/knowledge'
import { message } from 'antd'

function AI_floatBox({ volumeTopicCount, props, settopicData }) {
  const { history } = props
  const [basketData, setbasketData] = useState({})
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    getbasketDetail()
    return () => {}
  }, [volumeTopicCount])

  const clearListClick = async () => {
    const { code, msg } = await clearExamBasket()
    if (code === 200) {
      message.success(msg)
      getbasketDetail()
    } else {
      message.error(msg)
    }
  }

  const setIsShowClick = () => {
    setisShow(!isShow)
  }

  const getbasketDetail = async () => {
    const { code, data } = await basketDetail()
    if (code == 200) {
      setbasketData(data)
      let counts = data?.basketCount
      settopicData(counts)
    }
  }

  const tocomposition = () => {
    localStorage.setItem('menuIndex', 6)
    history.push('/main/mypaper')
  }

  const delType = async (id) => {
    console.log(id)
    const { code, msg } = await delTypeExamBasket({
      type: id,
    })
    if (code === 200) {
      getbasketDetail()
      message.success(msg)
    } else {
      message.error(msg)
    }
  }

  return (
    <div
      id="AI_floatBox"
      style={{
        backgroundColor: isShow && '#BBBBBB',
      }}
    >
      <div className="top_float_warp" onClick={tocomposition}>
        <img
          className="basket_icon"
          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png"
          alt="basket_icon"
        />
        <span className="count">
          <em>{volumeTopicCount}</em>/40
        </span>
        <span className="title">进入组卷</span>
      </div>
      <img
        className="arrow_icon"
        src={
          isShow
            ? 'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png'
            : 'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png'
        }
        alt="arrow_icon"
        onClick={setIsShowClick}
      />
      {/* 展开框 */}
      {isShow ? (
        <div className="unfold">
          {/* 总量 */}
          <div className="gross">
            试题总量（<span>{basketData?.basketCount}</span>）
          </div>
          {/* 类型list */}
          <div className="typeList">
            {basketData?.basketDetail?.map((item) => {
              return (
                <div className="items" key={item?.id}>
                  <div className="type">{item?.type}</div>
                  <div className="numdel">
                    <span>
                      <em>{item?.count}</em>题
                    </span>
                    <img
                      className="tip_del_icon"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png"
                      alt="tip_del_icon"
                      onClick={() => delType(item.id)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          {/* 清空 */}
          <div className="empty" onClick={clearListClick}>
            清空试题
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    volumeTopicCount: state.volumeTopicCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(AI_floatBox))
