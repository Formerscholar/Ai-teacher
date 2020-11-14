import React, { memo } from 'react'
import './index.less'
import M_InformationSummary from './components/M_InformationSummary/M_InformationSummary'

function Main(props) {
  return (
    <div id="Main">
      <M_InformationSummary />
      <div id="M_FamousSchoolResources">
        <div className="top_box">
          <div className="left_text">
            <div className="title">名校资源</div>
            <div className="tip">14份</div>
          </div>
          <div className="right_box">
            <img
              className="refsh_icon"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png"
              alt="refsh_icon"
            />
            <span className="text">刷新</span>
          </div>
        </div>
        <div className="btn_box"></div>
        <div className="more_btn"></div>
      </div>
    </div>
  )
}
export default memo(Main)
