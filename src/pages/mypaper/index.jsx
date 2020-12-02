import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Breadcrumb, Checkbox, Row, Col, Button, message, Input } from 'antd'
import {
  getPapersExercises,
  delExamBasket,
  addPapers,
  clearExamBasket,
} from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import T_modelbox from '@/common/T_modelbox'
const { TextArea } = Input

function Mypaper(props) {
  const {
    history,
    addtopicData,
    subtopicData,
    volumeTopicCount,
    settopicData,
  } = props
  const [checkitems, setcheckitems] = useState([])
  const [ExercisesData, setExercisesData] = useState({})
  const [tipText, setTipText] = useState('')
  const [Papertitle, setPapertitle] = useState('')
  const [subhead, setsubhead] = useState('')
  const [prompt, setprompt] = useState('')
  const [marked, setmarked] = useState('')
  const [titlewarp, settitlewarp] = useState('第Ⅰ卷（选择题）')
  const [annotation, setannotation] = useState('第I卷的注释')

  const [Open, setOpen] = useState(false)

  useEffect(() => {
    getPapers()
    return () => {}
  }, [volumeTopicCount])

  const getPapers = async () => {
    const { code, data, msg } = await getPapersExercises()
    if (code === 200) {
      setExercisesData(data)
    } else {
      setExercisesData(data)
      message.error(msg)
    }
  }
  /**
   *
   *  标题输入框change事件
   * @param {*} e
   */
  const PapertitleChange = (e) => {
    const { value } = e.target
    setPapertitle(value)
  }

  const subheadChange = (e) => {
    const { value } = e.target
    setsubhead(value)
  }

  const promptChange = (e) => {
    const { value } = e.target
    setprompt(value)
  }

  const markedChange = (e) => {
    const { value } = e.target
    setmarked(value)
  }

  const titlewarpChange = (e) => {
    const { value } = e.target
    settitlewarp(value)
  }

  const annotationChange = (e) => {
    const { value } = e.target
    setannotation(value)
  }
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
    setcheckitems(checkedValues)
  }

  const toknowledge = () => {
    history.push('/main/knowledge')
  }

  /**
   *  单条删除
   *
   * @param {*} id
   */
  const delexerciseClick = async (exercises_id) => {
    const { code, msg } = await delExamBasket({
      exercises_id,
    })
    if (code == 200) {
      message.success(msg)
      subtopicData(1)
    } else {
      setTipText(msg)
      setOpen(true)
    }
  }

  const closeClick = () => {
    setOpen(false)
  }

  // 计算总分数
  const CalcScore = () => {
    let num = 0
    ExercisesData?.exercisesData?.map((item, index) => {
      num += item[0].countScore
    })
    return num
  }
  // 计算总条数
  const Calcbranches = () => {
    let num = 0
    ExercisesData?.exercisesData?.map((item, index) => {
      num += item.length
    })
    return num
  }

  const clearClick = async () => {
    const { code, msg } = await clearExamBasket()
    if (code === 200) {
      settopicData(0)
      message.success(msg)
    } else {
      message.error(msg)
    }
  }

  const Completevolume = async () => {
    let is_fill_in = 0,
      is_total_score = 0,
      is_question_score = 0
    checkitems.map((item) => {
      switch (item) {
        case '5':
          is_fill_in = 1
          break
        case '2':
          is_total_score = 1
          break
        case '8':
          is_question_score = 1
          break
        default:
          break
      }
    })
    // ExercisesData
    let exercises = [
      {
        parent_id: 0,
        exercises_id: 0,
        title: '第Ⅰ卷（选择题）',
        score: 0,
      },
    ]
    ExercisesData?.exercisesData?.map((itm1, idx1) => {
      exercises.push({
        parent_id: 1,
        exercises_id: 0,
        title: `${idx1 + 1}、${itm1[0].typeName}（共${itm1.length}题；共${
          itm1[0].countScore
        }分）`,
        score: 0,
      })
      itm1.map((itm2, idx2) => {
        exercises.push({
          parent_id: 2,
          exercises_id: itm2.exercises.id,
          title: idx2 + 1,
          score: itm2.score,
        })
      })
    })
    console.log(exercises)
    const { code, msg } = await addPapers({
      title: Papertitle,
      name: subhead,
      exam_about: prompt,
      be_careful: marked,
      is_fill_in,
      is_total_score,
      is_question_score,
      exercises,
    })
    if (code === 200) {
      message.success(msg)
      history.push('/main/mypaperlist')
    } else {
      message.error(msg)
    }
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
          {checkitems?.map((item) => {
            return (
              item == '0' && (
                <div className="Packaging">
                  <img
                    className="peal_line"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/peal_line.png"
                    alt="peal_line"
                  />
                </div>
              )
            )
          })}

          {/* 主体 */}
          <div className="main">
            {/* 试卷标题 */}
            <Input
              className="Papertitle"
              bordered={false}
              placeholder="2020年11月13日初中数学试卷"
              value={Papertitle}
              onChange={PapertitleChange}
            />
            {/* 试卷副标题 */}
            {checkitems?.map((item) => {
              return (
                item == '1' && (
                  <Input
                    className="subhead"
                    placeholder="试卷副标题"
                    bordered={false}
                    value={subhead}
                    onChange={subheadChange}
                  />
                )
              )
            })}
            {/* 提示语 */}
            {checkitems?.map((item) => {
              return (
                item == '3' && (
                  <Input
                    className="prompt"
                    placeholder="考试范围：xxx；考试时间：100分钟；命题人：xxx"
                    bordered={false}
                    value={prompt}
                    onChange={promptChange}
                  />
                )
              )
            })}

            {/* 考生信息 */}
            {checkitems?.map((item) => {
              return (
                item == '5' && (
                  <div className="examineeInfo">
                    学校:___________姓名：___________班级：___________考号：___________
                  </div>
                )
              )
            })}

            {/* 总分栏 */}
            {checkitems?.map((item) => {
              return (
                item == '2' && (
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
                )
              )
            })}

            {/* 提示语 */}
            {checkitems?.map((item) => {
              return (
                item == '6' && (
                  <div className="markedwords">
                    <div className="title">
                      <span>*</span>注意事项：
                    </div>
                    <TextArea
                      className="context"
                      autoSize
                      placeholder="1．答题前填写好自己的姓名、班级、考号等信息
                      2．请将答案正确填写在答题卡上"
                      bordered={false}
                      value={marked}
                      onChange={markedChange}
                    />
                  </div>
                )
              )
            })}
            {/* 分卷头部 */}
            {checkitems?.map((item) => {
              return (
                item == '7' && (
                  <div className="subsectionhead">
                    {/* 标题 */}
                    <Input
                      className="title_warp"
                      bordered={false}
                      value={titlewarp}
                      onChange={titlewarpChange}
                    />
                    {/* 注释 */}
                    <Input
                      className="annotation"
                      bordered={false}
                      value={annotation}
                      onChange={annotationChange}
                    />
                  </div>
                )
              )
            })}
            {ExercisesData?.exercisesData?.map((item1, idx1) => {
              return (
                <div className="subsectionbody" key={idx1}>
                  {/* 头部标题得分 */}
                  <div className="goaltable">
                    {checkitems?.map((item) => {
                      return (
                        item == '8' && (
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
                        )
                      )
                    })}
                    <div className="title_box">
                      {idx1 + 1}、{item1[0].typeName}（共{item1.length}
                      题；共{item1[0].countScore}分）
                    </div>
                  </div>

                  {/* 题目列表 */}
                  <div className="titlelists">
                    {/* 单项 */}

                    {item1?.map((item2, idx2) => {
                      return (
                        <div className="items" key={idx2}>
                          {/* 顶部内容 */}
                          <div className="topbody">
                            {idx2 + 1}.
                            <span className="span">（{item2?.score}分）</span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item2?.exercises?.content_all,
                              }}
                            ></span>
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
                            <div
                              className="btn_item delete_btn"
                              onClick={() =>
                                delexerciseClick(item2?.exercises?.id)
                              }
                            >
                              <img
                                className="items_delete"
                                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png"
                                alt="items_delete"
                              />
                              <span className="text">删除</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    {/* 单项 */}
                  </div>
                </div>
              )
            })}
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
                {/* <Col span={12}>
                  <Checkbox value="4">装订线</Checkbox>
                </Col> */}
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
                  分数：
                  <span>{CalcScore()}分</span>
                </div>
                {/* 题数：4题 */}
                <div className="QuestionNumber">
                  题数：<span>{Calcbranches()}题</span>
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
                <Button
                  type="primary"
                  className="downbtn"
                  onClick={Completevolume}
                >
                  完成组卷
                </Button>
                <Button className="continuebtn" onClick={toknowledge}>
                  继续选题
                </Button>
                <Button className="emptybtn" onClick={clearClick}>
                  清空试题
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Open}
        title=" "
        closeClick={closeClick}
        width="41.71rem"
        height="22.14rem"
      >
        <div id="tmodelbox">
          <div className="title">
            <img
              className="notice"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png"
              alt="notice"
            />
            <span>操作失败</span>
          </div>
          <div className="body_text">{tipText}</div>
          <Button type="primary" className="btn" onClick={closeClick}>
            我知道了
          </Button>
        </div>
      </T_modelbox>
    </div>
  )
}

/**
 *
 *  redux 获取state
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
    volumeTopicCount: state.volumeTopicCount,
  }
}

/**
 *
 *  redux 设置state
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setClass(value) {
      let action = {
        type: GET_CLASS_INFO,
        value: value,
      }
      dispatch(action)
    },
    addtopicData(value) {
      let action = {
        type: ADD_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    subtopicData(value) {
      let action = {
        type: SUB_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    settopicData(value) {
      let action = {
        type: SET_TOPIC,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Mypaper))
