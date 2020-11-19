import React, { memo } from 'react'
import { Spin } from 'antd'
import './index.less'

function G_spin() {
  return (
    <div id="G_spin">
      <Spin spinning={true} size="large" tip="加载中..." />
    </div>
  )
}

export default memo(G_spin)
