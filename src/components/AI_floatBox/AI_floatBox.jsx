import React, { memo } from 'react'
import './AI_floatBox.less'
import { connect } from 'react-redux'
import { ADD_TOPIC, SUB_TOPIC } from '@/store/actionType'

function AI_floatBox({ volumeTopicslist, props }) {

  const { history } = props
  
  const tocomposition = () => {
    history.push('/main/mypaper')
  }

  return (
    <div id="AI_floatBox" onClick={tocomposition}>
      <img
        className="basket_icon"
        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png"
        alt="basket_icon"
      />
      <span className="count">
        <em>{volumeTopicslist?.length}</em>/40
      </span>
      <span className="title">进入组卷</span>
      <img
        className="arrow_icon"
        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png"
        alt="arrow_icon"
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    volumeTopicslist: state.volumeTopicslist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * @param {*} value 
        {
          id: 120,
          type: 14,
        }
     */
    addtopicData(value) {
      let action = {
        type: ADD_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    subtopicData(id) {
      let action = {
        type: SUB_TOPIC,
        value: id,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AI_floatBox))
