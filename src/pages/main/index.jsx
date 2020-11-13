import React, { memo, useEffect } from 'react'
import './index.less'
import AI_header from 'components/AI_header/AI_header'

function Main(props) {
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <div id="Main">
      <AI_header />
    </div>
  )
}
export default memo(Main)
