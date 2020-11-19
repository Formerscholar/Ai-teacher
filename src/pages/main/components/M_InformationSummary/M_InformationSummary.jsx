import React, { memo } from 'react'
import { Button } from 'antd'
import './M_InformationSummary.less'

function M_InformationSummary() {
  return (
    <div id="M_InformationSummary">
      <div className="left_box">
        <div className="top_box">
          <div className="items">
            <div className="MuiButton-root left_btn ">七年级1班</div>
            <div className="left_info">45人</div>
          </div>
          <div className="items">
            <div className="MuiButton-root left_btn">七年级1班</div>
            <div className="left_info">45人</div>
          </div>
          <div className="items">
            <div className="MuiButton-root left_btn">七年级1班</div>
            <div className="left_info">45人</div>
          </div>
        </div>
        <div className="botinfo">
          <div className="Subject">学科:数学</div>
          <div className="classnum">班级数量: 3个</div>
          <div className="studentnum">学生人数:138人</div>
        </div>
      </div>
      <div className="right_btn">
        <Button className="wacher">点击查看</Button>
      </div>
    </div>
  )
}
export default memo(M_InformationSummary)
