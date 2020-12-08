import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import { setTimerType } from '@/utils'
import { pointLog } from '@/services/user'

function Integral(props) {
  const { history, location, homeInfo } = props
  const [pointLogData, setpointLogData] = useState({})

  useEffect(() => {
    getpointLog()
    return () => {}
  }, [])

  const getpointLog = async () => {
    const { code, data } = await pointLog()
    if (code === 200) {
      setpointLogData(data?.pointLog)
    }
  }

  return (
    <div id="Integral">
      <div className="integraltitle">
        <div className="left_title">积分记录</div>
        <div className="current_title">
          当年积分：{homeInfo?.teacher?.points}
        </div>
      </div>
      <div className="integral_body">
        {pointLogData?.data?.map((item) => {
          // current_integral
          return (
            <div className="integral_items " key={item?.id}>
              <div className="left_integrals">
                <div className="left_integrals_title">{item?.remark}</div>
                <div className="left_integrals_info">
                  更新时间：{setTimerType(item?.add_time * 1000, true)}
                </div>
              </div>
              <div className="right_integrals">+{item?.point}</div>
            </div>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Integral))
