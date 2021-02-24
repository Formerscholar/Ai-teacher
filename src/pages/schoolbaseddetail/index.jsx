import React, { memo, useEffect, useState, useRef } from 'react'
import './index.less'
import { Breadcrumb, Button, Radio, message, Select } from 'antd'
import { getSchoolBasedDetail } from '@/services/Schoolbased'
import { splitSearch } from '@/utils'
import { connect } from 'react-redux'
import {
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { getRandomColor } from '@/utils'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import {
  addExamBasket,
  delExamBasket,
  getExerciseAnswer,
} from '@/services/knowledge'
import T_modelbox from '@/common/T_modelbox'
import AI_topic from 'components/AI_topic/AI_topic'
import { downURL } from '@/conf'
import { DownOutlined } from '@ant-design/icons'
import userEvent from '@testing-library/user-event'

const { Option } = Select

function Schoolbaseddetail(props) {
  const {
    history,
    location,
    homeInfo,
    addtopicData,
    subtopicData,
    volumeTopicCount,
  } = props
  const Echars = useRef(null)

  const [basedData, setBasedData] = useState({})
  const [Open, setOpen] = useState(false)
  const [downfile, setdownfile] = useState([])
  const [retData, setRetData] = useState([])
  const [RadioId, setRadioId] = useState(0)
  const [Index, setIndex] = useState(0)
  const [dwonURL, setdwonURL] = useState('')
  const [msgErr, setmsgErr] = useState(false)
  const [isMore, setIsMore] = useState(false)
  const [isMores, setIsMores] = useState(false)
  const [defVal, SetDefVal] = useState('')
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
    getSchoolBased()
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

  const RadioChange = (e) => {
    const { value } = e.target
    console.log(value)
    setRadioId(value)
    if (downfile[value]) {
      setdwonURL(downURL + downfile[value])
      setmsgErr(false)
    } else {
      setmsgErr(true)
    }
  }

  const downClick = () => {
    if (msgErr) {
      message.error('暂无此试卷!')
    } else {
      window.open(dwonURL)
    }
    setRadioId('')
    setOpen(false)
  }

  const downloadClick = (pdf1, pdf2) => {
    let arr = [pdf1, pdf2]
    setdownfile(arr)
    setOpen(true)
  }

  const closeClick = () => {
    setOpen(false)
  }

  /**
   *  面包屑返回
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/famous')
  }
  const handleClicks = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const getSchoolBased = async () => {
    const { code, data } = await getSchoolBasedDetail({
      id: splitSearch(location.search).id,
    })
    if (code === 200) {
      if (data.examsExercises.length === 0) {
        message.error('本试卷无数据!')
        history.go(-1)
      } else {
        data?.examsExercises?.map((item) => {
          item['isanswer'] = false
        })
        console.log('return', data?.return[0].team)
        SetDefVal(data?.return[0].team)
        setRetData(data?.return)
        setBasedData(data)
        let legend = []
        let series = []
        let newOptions = { ...options }
        data?.levelAnalysis?.map((item) => {
          let legdata = item[1] + `(${item[0]}道)`
          legend.push(item[1].toString())
          series.push({
            name: item[1].toString(),
            value: item[0],
          })
        })
        newOptions.legend.data = legend
        newOptions.series[0].data = series
        setoptions(newOptions)
        setdwonURL(downURL + data.based.pdf1)
      }
    }
  }

  const onSetAnswer = async (idx, id) => {
    let basedDataCopy = { ...basedData }
    let basedRoot = basedDataCopy.examsExercises[idx]
    if (!basedRoot.isanswer) {
      let exercisesCopy = basedRoot.get_exercises
      if (
        exercisesCopy['knowName'] === undefined &&
        exercisesCopy['answer'] === undefined &&
        exercisesCopy['analysis'] === undefined
      ) {
        const { code, data, msg } = await getExerciseAnswer({
          id,
        })
        if (code === 200) {
          exercisesCopy['knowName'] = data.exercise.knowName
          exercisesCopy['answer'] = data.exercise.answer
          exercisesCopy['analysis'] = data.exercise.analysis
        } else {
          message.error(msg)
        }
      }
    }
    basedRoot.isanswer = !basedDataCopy.examsExercises[idx].isanswer
    setBasedData(basedDataCopy)
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    window.open(`/question/details?id=${id}`)
  }

  const loadmoreClick = () => {
    setIsMore(!isMore)
  }

  const loadmoreClicks = () => {
    setIsMores(!isMores)
  }
  /**
   *  组卷添加事件
   *
   * @param {*} id
   * @param {*} type
   */
  const compositionClick = async (id, type) => {
    const { code, msg } = await addExamBasket({
      exercises_id: [id],
    })
    if (code == 200) {
      message.success(msg)
      addtopicData(1)
    } else {
      message.error(msg)
    }
  }

  const removeClick = async (id) => {
    const { code, msg } = await delExamBasket({
      exercises_id: id,
    })
    if (code == 200) {
      message.success(msg)
      subtopicData(1)
    } else {
      message.error(msg)
    }
  }

  const classChange = (value) => {
    setIndex(value)
  }

  return (
    <div id="Schoolbaseddetail">
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
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClicks}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
          />
          首页
        </Breadcrumb.Item>
        <Breadcrumb.Item
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
        >
          校本试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          {basedData?.based?.title}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_body">
        <div className="paperList">
          {basedData?.examsExercises?.map((item, idx) => {
            return (
              <AI_topic
                key={item?.id}
                level={item?.get_exercises?.level}
                exercises_title={item?.get_exercises?.title}
                content_all={item?.get_exercises?.content_all}
                isanswer={item?.isanswer}
                knowName={item?.get_exercises?.knowName}
                answer={item?.get_exercises?.answer}
                analysis={item?.get_exercises?.analysis}
                update_time={item?.get_exercises?.update_time}
                is_basket={item?.is_basket}
                onSetAnswer={() => onSetAnswer(idx, item?.exercises_id)}
                answerClick={() => answerClick(item?.get_exercises?.id)}
                removeClick={() => removeClick(item?.exercises_id)}
                compositionClick={() =>
                  compositionClick(
                    item?.exercises_id,
                    item?.get_exercises?.type
                  )
                }
              />
            )
          })}
        </div>
        <div className="right_box">
          <div className="top_box">
            <Button
              type="primary"
              className="downbtn"
              onClick={() =>
                downloadClick(basedData?.based?.pdf1, basedData?.based?.pdf2)
              }
            >
              下载试卷
            </Button>
          </div>
          <div className={!isMore ? 'bott_box more_style' : 'bott_box'}>
            <div className="tip_top">
              <div className="left_boxx">试卷分析</div>
            </div>
            <div ref={Echars} style={{ width: '100%', height: '376px' }}></div>
            {basedData?.knowAnalysis?.length != 0 && (
              <div className="my_chars">
                <div className="title_text">知识点分析</div>
                <div className="list">
                  {basedData?.knowAnalysis?.map((item, idx) => {
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
            )}
            {/* more */}
            <div className="more_box" onClick={loadmoreClick}>
              查看更多 <DownOutlined style={{ marginLeft: '10px' }} />
            </div>
          </div>
          <div className={!isMores ? 'bott_box more_style' : 'bott_box'}>
            <div className="tip_top">
              <div className="left_boxx">学情报告</div>
              <Select
                placeholder={defVal}
                style={{ width: 120 }}
                bordered={false}
                onChange={classChange}
              >
                {basedData?.return?.map((item, idx) => {
                  return (
                    <Option value={idx} key={idx}>
                      {item?.team}
                    </Option>
                  )
                })}
              </Select>
            </div>
            {basedData?.knowAnalysis?.length != 0 && (
              <div className="my_chars" style={{ marginTop: '30px' }}>
                <div className="title_text">错题知识点分析</div>
                <div className="list">
                  {retData[Index]?.knowledge?.map((item, idx) => {
                    return (
                      <div className="items" key={idx}>
                        <div className="top_text">
                          <div className="left_txt">
                            {item.title}
                            <span>{item.proportion}%</span>
                          </div>
                          <div className="right_txt">{item.count}道题</div>
                        </div>
                        <div
                          className="progress"
                          style={{
                            width: `${item.proportion}%`,
                            backgroundColor: getRandomColor(),
                          }}
                        ></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            <div className="Proportions">
              <div className="title">错题占比</div>
              <div className="grid_box">
                <div className="item title">序号</div>
                <div className="item title">人数</div>
                <div className="item title" style={{ marginRight: '0' }}>
                  错题(占比)
                </div>
                {retData[Index]?.errorExercise?.map((item, idx) => {
                  return (
                    <>
                      <div className="item " key={idx}>
                        {item.sort}
                      </div>
                      <div className="item lrmn">{item.count}</div>
                      <div className="item ">
                        <div className="progress">
                          <div
                            className="color_sapn"
                            style={{ width: `${item.proportion}%` }}
                          ></div>
                        </div>
                        {item.proportion}%
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
            {/* more */}
            <div className="more_box" onClick={loadmoreClicks}>
              查看更多 <DownOutlined style={{ marginLeft: '10px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 悬浮框 */}
      <AI_floatBox props={props} />

      <T_modelbox
        isOpen={Open}
        title="【下载】"
        closeClick={closeClick}
        width="41.71rem"
        height="23.5rem"
      >
        <div id="tmodelbox">
          <div className="title">试卷类型选择</div>
          <Radio.Group
            className="radioGroup"
            onChange={RadioChange}
            value={RadioId}
          >
            <Radio value={1}>
              教师用卷 <i>（含答案和解析）</i>
            </Radio>
            <Radio value={0}>
              学生用卷<i>（不含答案和解析）</i>
            </Radio>
          </Radio.Group>
          <Button type="primary" className="btn" onClick={downClick}>
            确定
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Schoolbaseddetail))
