import React,{memo} from 'react'
import { Button } from '@material-ui/core'
import './index.less'

function Main() {
  return (
    <div id="Main">
      <Button variant="contained" color="primary">hello react</Button>
    </div>
  )
}
export default memo(Main)