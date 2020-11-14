import React, { memo, useEffect } from 'react'
import './index.less'
import AI_header from 'components/AI_header/AI_header'
import AI_footer from 'components/AI_footer/AI_footer'

function Main(props) {
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <div id="Main">
      <AI_header />
      <AI_footer />
    </div>
  )
}
export default memo(Main)
