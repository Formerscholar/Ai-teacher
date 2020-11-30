import React, { memo } from 'react'
import './index.less'
import { Breadcrumb, Checkbox, Row, Col, Button } from 'antd'

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

  const paperClick = () => {
    history.push('/main/mypaperlist')
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
        <Breadcrumb.Item
          className="breaditem"
          color="textPrimary"
          onClick={paperClick}
        >
          我的试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          试卷组卷
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="Group_body">
        <div className="left_box">
          {/* 封装线 */}
          <div className="Packaging">
            <img
              className="peal_line"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/peal_line.png"
              alt="peal_line"
            />
          </div>
          {/* 主体 */}
          <div className="main">
            {/* 试卷标题 */}
            <div className="Papertitle">2020年11月13日xxx的初中数学试卷</div>
            {/* 试卷副标题 */}
            <div className="subhead">试卷副标题</div>
            {/* 提示语 */}
            <div className="prompt">
              考试范围：xxx；考试时间：100分钟；命题人：xxx
            </div>
            {/* 考生信息 */}
            <div className="examineeInfo">
              学校:___________姓名：___________班级：___________考号：___________
            </div>
            {/* 总分栏 */}
            <div className="TotalScore">
              <table border="1" cellspacing="0" cellpadding="0">
                <tr>
                  <td>题号</td>
                  <td>一</td>
                  <td>二</td>
                  <td>三</td>
                  <td>总分</td>
                </tr>
                <tr>
                  <td>得分</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            {/* 提示语 */}
            <div className="markedwords">
              <div className="title">
                <span>*</span>注意事项：
              </div>
              <div className="context">
                1．答题前填写好自己的姓名、班级、考号等信息
              </div>
              <div className="context">2．请将答案正确填写在答题卡上</div>
            </div>
            {/* 分卷头部 */}
            <div className="subsectionhead">
              {/* 标题 */}
              <div className="title_warp">第Ⅰ卷（选择题）</div>
              {/* 注释 */}
              <div className="annotation">第I卷的注释</div>
            </div>
            {/* 分卷body */}
            <div className="subsectionbody">
              {/* 头部标题得分 */}
              <div className="goaltable">
                <table border="1" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>评卷人</td>
                    <td>得分</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                <div className="title_box">一、单选题（共4题；共100分）</div>
              </div>
              {/* 题目列表 */}
              <div className="titlelists">
                {/* 单项 */}
                <div className="items">
                  {/* 顶部内容 */}
                  <div className="topbody">
                    1. 关于x的不等式组的解集表示在数轴上如图所
                  </div>
                  {/* 底部操作按钮 */}
                  <div className="bot_btns">
                    <div className="btn_item check_btn ">
                      <img
                        className="items_check"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_check.png"
                        alt="items_check"
                      />
                      <span className="text">查看答案</span>
                    </div>
                    <div className="btn_item set_btn">
                      <img
                        className="items_set"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_set.png"
                        alt="items_set"
                      />
                      <span className="text">设置得分</span>
                    </div>
                    <div className="btn_item refsh_btn">
                      <img
                        className="items_refsh"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_refsh.png"
                        alt="items_refsh"
                      />
                      <span className="text">换一题</span>
                    </div>
                    <div className="btn_item moveup_btn">
                      <img
                        className="items_moveup"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_moveup.png"
                        alt="items_moveup"
                      />
                      <span className="text">上移</span>
                    </div>
                    <div className="btn_item movedow_btn">
                      <img
                        className="items_movedown"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_movedown.png"
                        alt="items_movedown"
                      />
                      <span className="text">下移</span>
                    </div>
                    <div className="btn_item delete_btn">
                      <img
                        className="items_delete"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png"
                        alt="items_delete"
                      />
                      <span className="text">删除</span>
                    </div>
                  </div>
                </div>
                {/* 单项 */}

                <div className="items">
                  {/* 顶部内容 */}
                  <div className="topbody">
                    1. 关于x的不等式组的解集表示在数轴上如图所
                  </div>
                  {/* 底部操作按钮 */}
                  <div className="bot_btns">
                    <div className="btn_item check_btn ">
                      <img
                        className="items_check"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_check.png"
                        alt="items_check"
                      />
                      <span className="text">查看答案</span>
                    </div>
                    <div className="btn_item set_btn">
                      <img
                        className="items_set"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_set.png"
                        alt="items_set"
                      />
                      <span className="text">设置得分</span>
                    </div>
                    <div className="btn_item refsh_btn">
                      <img
                        className="items_refsh"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_refsh.png"
                        alt="items_refsh"
                      />
                      <span className="text">换一题</span>
                    </div>
                    <div className="btn_item moveup_btn">
                      <img
                        className="items_moveup"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_moveup.png"
                        alt="items_moveup"
                      />
                      <span className="text">上移</span>
                    </div>
                    <div className="btn_item movedow_btn">
                      <img
                        className="items_movedown"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_movedown.png"
                        alt="items_movedown"
                      />
                      <span className="text">下移</span>
                    </div>
                    <div className="btn_item delete_btn">
                      <img
                        className="items_delete"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png"
                        alt="items_delete"
                      />
                      <span className="text">删除</span>
                    </div>
                  </div>
                </div>

                <div className="items">
                  {/* 顶部内容 */}
                  <div className="topbody">
                    1. 关于x的不等式组的解集表示在数轴上如图所
                  </div>
                  {/* 底部操作按钮 */}
                  <div className="bot_btns">
                    <div className="btn_item check_btn ">
                      <img
                        className="items_check"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_check.png"
                        alt="items_check"
                      />
                      <span className="text">查看答案</span>
                    </div>
                    <div className="btn_item set_btn">
                      <img
                        className="items_set"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_set.png"
                        alt="items_set"
                      />
                      <span className="text">设置得分</span>
                    </div>
                    <div className="btn_item refsh_btn">
                      <img
                        className="items_refsh"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_refsh.png"
                        alt="items_refsh"
                      />
                      <span className="text">换一题</span>
                    </div>
                    <div className="btn_item moveup_btn">
                      <img
                        className="items_moveup"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_moveup.png"
                        alt="items_moveup"
                      />
                      <span className="text">上移</span>
                    </div>
                    <div className="btn_item movedow_btn">
                      <img
                        className="items_movedown"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_movedown.png"
                        alt="items_movedown"
                      />
                      <span className="text">下移</span>
                    </div>
                    <div className="btn_item delete_btn">
                      <img
                        className="items_delete"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png"
                        alt="items_delete"
                      />
                      <span className="text">删除</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <div className="title_warp">试卷信息</div>
            <div className="prompt_warp">
              <div className="prompt_warp_title">
                {/* 分数：100分 */}
                <div className="scores">
                  分数：<span>100分</span>
                </div>
                {/* 题数：4题 */}
                <div className="QuestionNumber">
                  题数：<span>4题</span>
                </div>
                {/* 难度：中等 */}
                <div className="difficulty">
                  难度：<span>中等</span>
                </div>
              </div>
              {/* 分割线 */}
              <div className="cutoffrule">
                {/* 线 */}
                <div className="wire"></div>
                <div className="text_title">第Ⅰ卷（选择题）</div>
                <div className="wire"></div>
              </div>
              <div className="title_box">
                <div className="left_title_text">一、单选题</div>
                <div className="right_title_btns">
                  {/* 排序 */}
                  <div className="sort_btn">排序</div>
                  {/* 删除 */}
                  <div className="remove_btn">删除</div>
                </div>
              </div>
              {/* 编号列表 */}
              <div className="serialList">
                <div className="serialitem">1</div>
                <div className="serialitem">2</div>
                <div className="serialitem">3</div>
                <div className="serialitem">4</div>
              </div>
              <div className="cutoffrule two">
                {/* 线 */}
                <div className="wire"></div>
                <div className="text_title">第Ⅱ卷（非选择题）</div>
                <div className="wire"></div>
              </div>
              {/* 操作按钮 */}
              <div className="operatebtns">
                <Button type="primary" className="downbtn">
                  下载试卷
                </Button>
                <Button className="continuebtn">继续选题</Button>
                <Button className="emptybtn">清空试题</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Mypaper)
