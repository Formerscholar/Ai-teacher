import React, { memo } from 'react'
import './index.less'
import { Breadcrumb, Checkbox, Row, Col } from 'antd'

function Mypaper(props) {
  const { history } = props
  /**
   *
   *  返回路由
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    localStorage.setItem('menuIndex', 0)
    history.push('/main/index')
  }

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues)
  }

  return (
    <div id="Mypaper">
      <Breadcrumb
        className="bread"
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          className="breaditem"
          color="textPrimary"
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
          />
          首页
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          我的试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          试卷组卷
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="Group_body">
        <div className="left_box"></div>
        <div className="right_warp">
          <div className="right_top_box">
            <div className="title">
              <div className="left_text">试卷结构设置</div>
              <div className="right_text">普通模板</div>
            </div>
            <Checkbox.Group
              className="CheckboxGroup"
              style={{ width: '100%' }}
              onChange={onChange}
            >
              <Row>
                <Col span={12}>
                  <Checkbox value="0">密封线</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="1">副标题</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="2">总分栏</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="3">试卷信息</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="4">装订线</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="5">考生信息</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="6">注意事项</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="7">分卷及注释</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="8">大题评分区</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="right_bot_box">
            <div className="title_warp">
              试卷信息
            </div>
            <div className="prompt_warp">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Mypaper)
