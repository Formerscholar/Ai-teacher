import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Breadcrumb, message, Input } from 'antd'
import { getPapersExercises } from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { splitSearch } from '@/utils'
const { TextArea } = Input

function Mypaperdetail(props) {
  const { history, location, volumeTopicCount } = props
  const search = splitSearch(location.search)
  const [checkitems, setcheckitems] = useState([])
  const [exercisesData, setexercisesData] = useState({})
  const [Papertitle, setPapertitle] = useState('')
  const [subhead, setsubhead] = useState('')
  const [prompt, setprompt] = useState('')
  const [marked, setmarked] = useState('')
  const [titlewarp, settitlewarp] = useState('第Ⅰ卷（选择题）')
  const [annotation, setannotation] = useState('第I卷的注释')

  useEffect(() => {
    getPapers()
    return () => {}
  }, [volumeTopicCount])

  const getPapers = async () => {
    const { code, data, msg } = await getPapersExercises({
      id: search.id,
    })
    if (code === 200) {
      setexercisesData(data)
      if (search.id) {
        let Arr = []
        console.log('初始化试卷信息', data?.exam)
        setPapertitle(data?.exam?.title)
        if (data?.exam?.be_careful) {
          Arr.push('6')
          setmarked(data?.exam?.be_careful)
        }
        if (data?.exam?.exam_about) {
          Arr.push('3')
          setprompt(data?.exam?.exam_about)
        }
        if (data?.exam?.is_fill_in) {
          Arr.push('5')
        }
        if (data?.exam?.is_question_score) {
          Arr.push('8')
        }
        if (data?.exam?.is_total_score) {
          Arr.push('2')
        }
        if (data?.exam?.name) {
          Arr.push('1')
          setsubhead(data?.exam?.name)
        }
        setcheckitems(Arr)
      }
    } else {
      setexercisesData(data)
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
    history.push('/index')
  }

  const paperClick = () => {
    history.push('/mypaperlist')
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
          试卷详情
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
            {exercisesData?.exercisesData?.map((item1, idx1) => {
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
                            <div
                              className="answerbox"
                              style={{
                                display: item2?.isanswer ? 'block' : 'none',
                              }}
                            >
                              <div className="Tests">
                                <span className="title">【考点】</span>
                                <div
                                  className="body_txt"
                                  dangerouslySetInnerHTML={{
                                    __html: item2?.exercises?.knowName,
                                  }}
                                ></div>
                              </div>
                              <div className="answer">
                                <span className="title">【答案】</span>
                                <div
                                  className="body_txt"
                                  dangerouslySetInnerHTML={{
                                    __html: item2?.exercises?.answer,
                                  }}
                                ></div>
                              </div>
                              <div className="Parse">
                                <span className="title">【解析】</span>
                                <div
                                  className="body_txt"
                                  dangerouslySetInnerHTML={{
                                    __html: item2?.exercises?.analysis,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Mypaperdetail))
