import React, { memo, useEffect, useState } from 'react'
import './index.less'
import AI_header from 'components/AI_header/AI_header'
import AI_footer from 'components/AI_footer/AI_footer'
import M_InformationSummary from './components/M_InformationSummary/M_InformationSummary'
import { gethome } from '@/services/home'
function Main(props) {
  const [indexData, setIndexData] = useState({})

  useEffect(() => {
    gethomeData()
    return () => {}
  }, [])

  const gethomeData = async () => {
    const { code, data } = await gethome()
    if (code == 200) {
      setIndexData(data)
    }
  }

  return (
    <div id="Main">
      <AI_header props={props} teacher={indexData.teacher} />
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
      <AI_footer />
    </div>
  )
}
export default memo(Main)
