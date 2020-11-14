import React, { memo } from 'react'
import './AI_footer.less'

function AI_footer() {
  return (
    <div id="AI_footer">
      <img
        className="footimg"
        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png"
        alt="footimg"
      />
      <footer>
        <div className="left_info">
          <div className="infoitems ">联系我们</div>
          <div className="infoitems ">邮箱地址</div>
          <div className="infoitems ">咨询热线</div>
          <div className="infoitems botfont">关于我们</div>
          <div className="infoitems botfont">kefu@aictb.com</div>
          <div className="infoitems botfont">0514-82885886</div>
        </div>
        <div className="cen_box">
          <img
            className="footqrcode"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png"
            alt="footqrcode"
          />
          <span className="foottext">关注微信公众号</span>
        </div>
        <img
          className="foottip"
          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png"
          alt="foottip"
        />
      </footer>
    </div>
  )
}

export default memo(AI_footer)
