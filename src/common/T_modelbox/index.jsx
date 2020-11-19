import React, { memo } from 'react'
import './idnex.less'

function T_modelbox({
  children,
  isOpen = false,
  closeClick,
  title = '',
  width = '41.71rem',
  height = '23.5rem',
}) {
  return (
    <>
      {isOpen ? (
        <div id="T_modelbox">
          <div className="gord_warp" style={{ width: width, height: height }}>
            <div className="title_box">
              <div className="left_text">{title}</div>
              <div className="right_box" onClick={closeClick}>
                <img
                  className="delete_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png"
                  alt="delete_icon"
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default memo(T_modelbox)
