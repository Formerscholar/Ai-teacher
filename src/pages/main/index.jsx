import React, { memo } from 'react'
import './index.less'
import AI_header from 'components/AI_header/AI_header'

function Main() {
  return (
    <div id="Main">
      <AI_header />
    </div>
  )
}
export default memo(Main)
