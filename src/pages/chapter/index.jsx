import React, { memo } from 'react'
import './index.less'
import { Button, Pagination, Input } from 'antd'
// import { TreeView, TreeItem, Pagination } from 'antd'
//
// import { Collapse, TextField, Button } from 'antd
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'

function Chapter(props) {
  return (
    <div id="Chapter">
      <div className="left_box">
        <div className="title">七年级数学 · 章节</div>
        {/* <TreeView
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
        </TreeView> */}
      </div>
      <div className="right_box">
        <div className="top_box">
          <div className="select_box">
            <div className="grade grop_warp">
              <span className="title">年级：</span>
              <div className="select_items">
                <div className="select_item Selected">七年级</div>
                <div className="select_item">八年级</div>
                <div className="select_item">九年级</div>
              </div>
            </div>
            <div className="Difficulty grop_warp">
              <span className="title">难度：</span>
              <div className="select_items">
                <div className="select_item Selected">不限</div>
                <div className="select_item">容易</div>
                <div className="select_item">较易</div>
                <div className="select_item">中等</div>
                <div className="select_item">较难</div>
                <div className="select_item">困难</div>
              </div>
            </div>
            <div className="Questions grop_warp">
              <span className="title">题类：</span>
              <div className="select_items">
                <div className="select_item Selected">不限</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
                <div className="select_item">填空题</div>
              </div>
            </div>
          </div>
          <div className="tip_box">
            <div className="left_boxs">
              <div className="timer">
                <span>时间</span>
                <img
                  className="down"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png"
                  alt="down"
                />
              </div>
              <div className="count">
                <span>使用次数</span>
                <img
                  className="down"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png"
                  alt="down"
                />
              </div>
            </div>
            <div className="right_boxs">
              <div className="total">共计：1234647687题</div>
              <div className="allin">选择本页全部试题</div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="content">
          <div className="items">
            <div className="top_title">
              <div className="info_class">
                <div className="difficulty">
                  难度：<span>中等</span>
                </div>
                <div className="question">题型：不等式组的解集</div>
              </div>
              <img
                className="new_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/new_icon.png"
                alt="new_icon"
              />
            </div>
            <div className="cet_body">
              <p>sadasd</p>
              <p>
                1<br />
              </p>
              <p>
                2<br />
              </p>
            </div>
            <div className="bot_btns">
              <div className="left_box_warp">
                <div className="update_time">更新时间：2020-08-09</div>
                <div className="counts">组卷次数：0</div>
              </div>
              <div className="right_box_warp">
                <div className="answers">
                  <img
                    className="View"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png"
                    alt="View"
                  />
                  <span>查看答案</span>
                </div>
                <div className="details">
                  <img
                    className="answer"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
                    alt="answer"
                  />
                  <span>试题详情</span>
                </div>
                <Button className="add" variant="contained">
                  <em>+</em>
                  组卷
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* page */}
        <div className="pages">
          <Pagination showSizeChanger={false} count={10} variant="outlined" shape="rounded" />
          <div className="showtotal">共500页</div>
          <Input
            className="outlined"
            id="outlined-basic"
            variant="outlined"
            value="1"
          />
          <Button variant="contained" className="btns">
            跳转
          </Button>
        </div>
      </div>
       {/* 悬浮框 */}
       <AI_floatBox props={props} />
    </div>
  )
}
export default memo(Chapter)
