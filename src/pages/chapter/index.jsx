import React, { memo } from 'react'
import './index.less'
import { TreeView, TreeItem } from '@material-ui/lab'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import { Collapse } from '@material-ui/core'
import { useSpring, animated } from 'react-spring/web.cjs'

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '23.43rem',
    padding: '1.71rem',
  },
})

function Chapter(props) {
  const classes = useStyles()
  return (
    <div id="Chapter">
      <div className="left_box">
        <div className="title">七年级数学 · 章节</div>
        <TreeView
          className={classes.root}
          defaultExpanded={['1']}
          defaultCollapseIcon={
            <img
              style={{ width: '1.29rem', height: '1.29rem' }}
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/sub.png"
              alt="plus"
            />
          }
          defaultExpandIcon={
            <img
              style={{ width: '1.29rem', height: '1.29rem' }}
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/plus.png"
              alt="plus"
            />
          }
          defaultEndIcon="-"
        >
          <StyledTreeItem nodeId="1" label="七年级上册">
            <StyledTreeItem nodeId="3" label="第1章">
              <StyledTreeItem nodeId="9" label="1.1  生活 数学" />
              <StyledTreeItem nodeId="10" label="1.2  活动 思考" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" label="第2章" />
            <StyledTreeItem nodeId="5" label="第3章" />
            <StyledTreeItem nodeId="6" label="第4章" />
            <StyledTreeItem nodeId="7" label="第5章" />
            <StyledTreeItem nodeId="8" label="第6章" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="2" label="七年级下册"></StyledTreeItem>
        </TreeView>
      </div>
      <div className="right_box"></div>
    </div>
  )
}
export default memo(Chapter)
