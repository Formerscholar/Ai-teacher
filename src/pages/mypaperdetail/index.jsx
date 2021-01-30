import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'
import { Breadcrumb, message, Radio, Button } from 'antd'
import { getDetailPapers } from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { splitSearch, getRandomColor } from '@/utils'
import T_modelbox from '@/common/T_modelbox'
import { downDOCURL } from '@/conf'

const typeArr = ['普通答题卡', '标准答题卡', '密集答题卡']

function Mypaperdetail(props) {
  const { history, location, volumeTopicCount } = props
  const search = splitSearch(location.search)
  const [exercisesData, setexercisesData] = useState({})
  const Echars = useRef(null)
  const [Open, setOpen] = useState(false)
  const [Opens, setOpens] = useState(false)
  const [Openss, setOpenss] = useState(false)
  const [formt, setformt] = useState('doc')
  const [size, setsize] = useState('A4')
  const [currents, setcurrents] = useState(1)
  const [options, setoptions] = useState({
    title: {
      text: '试卷难度分析',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    legend: {
      bottom: 0,
      left: 'center',
      data: [],
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  })

  useEffect(() => {
    getPapers()
    return () => {}
  }, [volumeTopicCount])

  useEffect(() => {
    const MathJax = window.MathJax
    if (MathJax) {
      MathJax.typesetPromise && MathJax.typesetPromise()
    }
    const myChart = window.echarts.init(Echars.current)
    myChart.setOption(options)
  })

  const typeSelect = (idx) => {
    setcurrents(idx)
  }

  const downTypeClick = () => {
    window.open(
      `${downDOCURL}/teacher/downloadAnswerSheet?exam_id=${search.id}&type=${currents}`
    )
    setOpenss(false)
  }

  const getPapers = async () => {
    const { code, data, msg } = await getDetailPapers({
      id: search.id,
    })
    if (code === 200) {
      setexercisesData(data)
      let legend = []
      let series = []
      let newOptions = { ...options }
      data?.levelAnalysi?.map((item) => {
        let legdata = item[1] + `(${item[0]}道)`
        legend.push(item[1])
        series.push({
          name: item[1],
          value: item[0],
        })
      })
      newOptions.legend.data = legend
      newOptions.series[0].data = series
      setoptions(newOptions)
    } else {
      message.error(msg)
    }
  }

  /**
   *
   *  下载确认点击
   */
  const closeClickss = async () => {
    window.open(
      `${downDOCURL}/teacher/organizingPapers?paper_type=${size}&exam_id=${exercisesData?.teacherExam?.id}&extension=${formt}`
    )
    setOpens(false)
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
    history.push('/mypaper/list')
  }

  const rightDetail = () => {
    let newOptions = { ...options }
    newOptions.title.text = ''
    newOptions.title.left = 'left'
    newOptions.legend.left = 'center'
    setoptions(newOptions)
    setOpen(true)
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
      <div className="content_body">
        <div className="left_box">
          <div className="title_box">{exercisesData?.teacherExam?.title}</div>
          {exercisesData?.teacherExamExercise?.map((item, idx) => {
            if (item?.parent_id == 1) {
              return (
                <div className="topic_title" key={idx}>
                  {item?.title}
                </div>
              )
            } else if (item?.parent_id == 2) {
              return (
                <div className="topic_html" key={idx}>
                  <span className="title_warp">
                    {item?.title}.<div className="span">({item?.score})</div>
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item?.get_one_exercises?.content_all,
                    }}
                  ></span>
                </div>
              )
            }
          })}
        </div>
        <div className="right_box">
          <div className="top_box">
            <Button
              type="primary"
              className="downbtn"
              onClick={() => setOpens(true)}
            >
              下载试卷
            </Button>
            <Button className="lastbtn" onClick={() => setOpenss(true)}>
              答题卡下载
            </Button>
          </div>
          <div className="bott_box">
            <div className="tip_top">
              <div className="left_boxx">
                试卷分析
                <span>(总分:{exercisesData?.countScore}分)</span>
              </div>
              <div className="right_boxs" onClick={rightDetail}>
                详情
              </div>
            </div>
            <div ref={Echars} style={{ width: '100%', height: '376px' }}></div>
            <div className="my_chars">
              <div className="title_text">知识点分析</div>
              <div className="list">
                {exercisesData?.knowAnalysis?.map((item, idx) => {
                  return (
                    <div className="items" key={idx}>
                      <div className="top_text">
                        <div className="left_txt">
                          {item[1]}
                          <span>{item[2]}%</span>
                        </div>
                        <div className="right_txt">{item[0]}道题</div>
                      </div>
                      <div
                        className="progress"
                        style={{
                          width: `${item[2]}%`,
                          backgroundColor: getRandomColor(),
                        }}
                      ></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Opens}
        title="【下载确认】"
        closeClick={() => {
          setOpens(false)
        }}
        width="62.64rem"
        height="31.57rem"
      >
        <div id="tmodelbox" className="downbox">
          <div className="title">{exercisesData?.teacherExam?.title}</div>
          <div className="body_text">
            {/* 文件格式 */}
            <div className="fileformt">
              <span className="title_txt">文件格式:</span>
              <Radio.Group
                onChange={(e) => setformt(e.target.value)}
                value={formt}
              >
                <Radio
                  className="itemradio itemradios"
                  style={{ display: 'block' }}
                  value="doc"
                >
                  <span className="context">
                    <span className="span">DOC</span>
                    <span className="tip">
                      doc格式文档，公式为图片，不可编辑公式
                    </span>
                  </span>
                </Radio>
                <Radio
                  className="itemradio itemradios"
                  style={{ display: 'block' }}
                  value="docx"
                >
                  <span className="context">
                    <span className="span">DOCX</span>
                    <span className="tip">docx格式文档，可编辑公式</span>
                  </span>
                </Radio>
              </Radio.Group>
            </div>
            {/* 纸张大小 */}
            <div className="fileformt">
              <span className="title_txt">纸张大小:</span>
              <Radio.Group
                onChange={(e) => {
                  setsize(e.target.value)
                }}
                value={size}
              >
                <Radio className="itemradio" value="A4">
                  A4
                </Radio>
                <Radio className="itemradio" value="A3">
                  A3（双栏）
                </Radio>
                <Radio className="itemradio" value="B4">
                  B4（双栏）
                </Radio>
              </Radio.Group>
            </div>
          </div>
          <Button type="primary" className="btn" onClick={closeClickss}>
            确定
          </Button>
        </div>
      </T_modelbox>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Open}
        title="【试卷分析】"
        closeClick={() => {
          setOpen(false)
        }}
        width="62.64rem"
        height="31.57rem"
        style={{ overflow: 'auto' }}
      >
        <div className="charsbox">
          <div className="title">{exercisesData?.teacherExam?.title}</div>
          <div className="levelchars">
            <div className="tip_title">
              <div className="text">试卷难度分析</div>
            </div>
            <div className="chars_boxs">
              <div className="chars">
                <div
                  ref={Echars}
                  style={{ width: '400px', height: '210px' }}
                ></div>
              </div>
              <div className="tables">
                <table border="1" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>题型</td>
                    <td>题目量(占比)</td>
                    <td>分值(占比)</td>
                  </tr>
                  {exercisesData?.typeAnalysis?.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item[1]}</td>
                        <td>
                          {item[0]}({item[3]}%)
                        </td>
                        <td>
                          {item[2]}({item[4]}%)
                        </td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            </div>
            <div className="tip_title">
              <div className="text">知识点分析</div>
            </div>
            <div className="my_chars">
              <div className="list">
                {exercisesData?.knowAnalysis?.map((item, idx) => {
                  return (
                    <div className="items" key={idx}>
                      <div className="top_text">
                        <div className="left_txt">
                          {item[1]}
                          <span>{item[2]}%</span>
                        </div>
                        <div className="right_txt">{item[0]}道题</div>
                      </div>
                      <div
                        className="progress"
                        style={{
                          width: `${item[2]}%`,
                          backgroundColor: getRandomColor(),
                        }}
                      ></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </T_modelbox>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Openss}
        title="【答题卡下载】"
        closeClick={() => {
          setOpenss(false)
        }}
        width="50rem"
        height="20rem"
      >
        <div className="answerbox">
          <div className="titles">
            请选择下载的答题卡类型，选择后点击“确定”按钮即可下载
          </div>
          <div className="an_type">
            <div className="tip">答题卡类型：</div>
            <div className="typelist">
              {typeArr?.map((itm, idx) => {
                return (
                  <div
                    className={currents == idx + 1 ? 'items current' : 'items'}
                    key={idx}
                    onClick={() => typeSelect(idx + 1)}
                  >
                    {itm}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="btns">
            <Button type="primary" className="surebtn" onClick={downTypeClick}>
              确定
            </Button>
            <Button
              className="canlebtn"
              onClick={() => {
                setOpenss(false)
              }}
            >
              取消
            </Button>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Mypaperdetail))
