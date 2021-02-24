import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'
import { splitSearch, setTimerType, getNearDate, getRandomColor } from '@/utils'
import {
  Breadcrumb,
  message,
  Radio,
  DatePicker,
  Space,
  Button,
  Pagination,
} from 'antd'
import { studentAcademicReport } from '@/services/class'
import {
  addExamBasket,
  delExamBasket,
  academicReportKnowledgeDetail,
  academicReportStudentDetail
} from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_HOME_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import moment from 'moment'

import AI_topic from 'components/AI_topic/AI_topic'
import T_modelbox from '@/common/T_modelbox'

const { RangePicker } = DatePicker

function StudyReport(props) {
  const {
    location,
    history,
    homeInfo,
    addtopicData,
    subtopicData,
    volumeTopicCount,
  } = props
  const id = splitSearch(location.search).id
  const iid = splitSearch(location.search).iid
  const [AcademicData, setAcademicData] = useState({})
  const [PickerData, setPickerData] = useState([])
  const [Listpage, setListpage] = useState(1)
  const [startTime, setstartTime] = useState(getNearDate(new Date(), 7)[0])
  const [endTime, setendTime] = useState(getNearDate(new Date(), 7)[1])
  const [isAnBox, setIsAnBox] = useState(false)
  const [Opens, setOpens] = useState(false)
  const [teamIds, setTeamIds] = useState(0)

  const [currnetId, SetCurrnetId] = useState(0)
  const [CurrnetTitle, SetCurrnetTitle] = useState('')
  const [KnowledgeDatas, setKnowledgeDatas] = useState([])
  const [Id, setid] = useState(0)
  const [wrongList, setWrongList] = useState([])
  const [Open, setOpen] = useState(false)

  const [options, setoptions] = useState({
    title: {
      text: '错题知识点分布图',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
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
  const Echars = useRef(null)

  useEffect(() => {
    getstudentAcademicReport(Listpage, startTime, endTime)
    return () => {}
  }, [volumeTopicCount])

  useEffect(() => {
    const myChart = window.echarts.init(Echars.current)
    myChart.setOption(options)
  })

  /**
   *  获取 初始化信息
   */
  const getstudentAcademicReport = async (
    page = Listpage,
    start_time = startTime,
    end_time = endTime
  ) => {
    const { code, data, msg } = await studentAcademicReport({
      student_id: id,
      start_time,
      end_time,
      page,
    })
    if (code === 200) {
      data?.userExercises?.data?.map((item) => {
        item['isanswer'] = false
      })
      setAcademicData(data)
      let series = []
      let newOptions = { ...options }
      data?.knowPointExercises?.map((item) => {
        series.push({
          name: item.title,
          value: item.count,
        })
      })
      newOptions.series[0].data = series
      setoptions(newOptions)
      // setid(data?.teams[0]?.id)
    } else {
      message.error(msg)
    }
  }


  const onSeeWrong = async (iid) => {
    const { code, data, msg } = await academicReportStudentDetail({
      exercises_id: iid,
      start_time: startTime,
      end_time: endTime,
      team_id: teamIds,
    })
    if (code === 200) {
      setWrongList(data)
      setOpen(true)
    } else {
      message.error(msg)
    }
  }


  /**
   * menu click
   *
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const handleClicks = (event) => {
    event.preventDefault()
    history.push('/class')
  }

  const handleClickss = (event) => {
    event.preventDefault()
    history.push(`/class/detail?id=${iid}`)
  }

  /**
   *  区段时间选择
   *
   * @param {*} e
   */
  const onChange = (e) => {
    const { value } = e.target
    const weekfunc = () => {
      const arr = getNearDate(new Date(), 7)
      setPickerData(arr)
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
    }
    const monthfunc = () => {
      const arr = getNearDate(new Date(), 30)
      setPickerData(arr)
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
    }
    const yearfunc = () => {
      const arr = getNearDate(new Date(), 365)
      setPickerData(arr)
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
    }
    setIsAnBox(false)
    const keymap = new Map([
      ['0', weekfunc],
      ['1', monthfunc],
      ['2', yearfunc],
    ])
    keymap.get(value) && keymap.get(value)()
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    window.open(`/question/details?id=${id}`)
  }

  /**
   *
   *  Picker选择日期变化
   * @param {*} dates
   * @param {*} dateStrings
   */
  const PickerChange = (dates, dateStrings) => {
    setIsAnBox(false)
    setPickerData(dateStrings)
    setstartTime(dateStrings[0])
    setendTime(dateStrings[1])
  }

  const SearchClick = () => {
    setIsAnBox(false)
    setstartTime(PickerData[0])
    setendTime(PickerData[1])
    getstudentAcademicReport(Listpage, PickerData[0], PickerData[1])
  }

  /**
   *
   *  页面变化请求数据
   * @param {Object} event
   * @param {Number} page
   */
  const PaginationChange = (page, pageSize) => {
    setListpage(page * 1)
    getstudentAcademicReport(page * 1)
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

  const onSetAnswer = (idx) => {
    let data = { ...AcademicData }
    data.userExercises.data[idx].isanswer = !data.userExercises.data[idx]
      .isanswer
    setAcademicData(data)
  }

  const onSetAnswers = (idx) => {
    let data = [...KnowledgeDatas]
    data[idx].isanswer = !data[idx].isanswer
    setKnowledgeDatas(data)
  }

  const KnowledgeClick = async (id,title) => {
    SetCurrnetTitle(title)
    const { code, data, msg } = await academicReportKnowledgeDetail({
      knowledge_id: id,
      start_time: startTime,
      end_time: endTime,
      team_id: iid,
    })
    if (code == 200) {
      data.map((item) => {
        item['isanswer'] = false
      })
      setKnowledgeDatas(data)
      setOpens(true)
    } else {
      message.error(msg)
    }
  }

  return (
    <div id="StudyReport">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          onClick={handleClick}
          style={{ cursor: 'pointer', color: '#222' }}
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
          onClick={handleClicks}
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          班级信息
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={handleClickss}
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          {AcademicData?.student?.get_grade?.name}
          {AcademicData?.student?.get_team?.name}
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          {AcademicData?.student?.true_name}的学情报告
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="top_warp">
        <div className="left_name">{AcademicData?.student?.true_name}</div>
        <div className="right_timer">
          <div className="title">时间选择:</div>
          <Radio.Group onChange={onChange} defaultValue="0">
            <Radio.Button value="0">近一周</Radio.Button>
            <Radio.Button value="1">近一月</Radio.Button>
            <Radio.Button value="2">近一年</Radio.Button>
          </Radio.Group>
          <Space direction="vertical" size={12}>
            <RangePicker
              format="YYYY-MM-DD"
              value={[moment(startTime), moment(endTime)]}
              onChange={PickerChange}
            />
          </Space>
          <Button type="primary" className="btnSearch" onClick={SearchClick}>
            查询
          </Button>
        </div>
      </div>
      <div className="Chars">
        <div className="echars_box" ref={Echars}></div>
        <div className="analysis">
          <div className="title">错题知识点分析</div>
          {AcademicData?.knowPointExercises?.map((item) => {
            return (
              <div
                className="items"
                key={item.id}
                onClick={() => KnowledgeClick(item.id, item.title)}
              >
                <div className="top_text">
                  <div className="left_tit">
                    {item.title}
                    <div className="percentage">{item.proportion}%</div>
                  </div>
                  <div className="count">{item.count}道题</div>
                </div>
                <div
                  className="bot_color"
                  style={{
                    width: item.proportion + '%',
                    backgroundColor: getRandomColor(),
                  }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
      {isAnBox ? (
        <div className="topics" style={{ marginBottom: '1.71rem' }}>
          {KnowledgeDatas?.map((item, idx) => {
            return (
              <AI_topic
                key={item?.id}
                level={item?.level}
                exercises_title={item?.get_question_category?.title}
                content_all={item?.content_all}
                isanswer={item?.isanswer}
                knowName={item?.knowName}
                answer={item?.answer_latex}
                analysis={item?.analysis_latex}
                update_time={item?.update_time}
                is_basket={item?.is_basket}
                onSetAnswer={() => onSetAnswers(idx)}
                answerClick={() => answerClick(item?.id)}
                removeClick={() => removeClick(item?.id)}
                compositionClick={() => compositionClick(item?.id)}
              />
            )
          })}
        </div>
      ) : (
        <>
          <div className="topics">
            {AcademicData?.userExercises?.data?.map((item, idx) => {
              return (
                <AI_topic
                  key={item?.exercises_id}
                  level={item?.get_exercises?.level}
                  exercises_title={
                    item?.get_exercises?.get_question_category?.title
                  }
                  content_all={item?.get_exercises?.content_all}
                  isanswer={item?.isanswer}
                  knowName={item?.get_exercises?.knowName}
                  answer={item?.get_exercises?.answer}
                  analysis={item?.get_exercises?.analysis}
                  update_time={item?.get_exercises?.update_time}
                  is_basket={item?.is_basket}
                  onSetAnswer={() => onSetAnswer(idx)}
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
          <div className="pages">
            <Pagination
              hideOnSinglePage={false}
              total={AcademicData?.userExercises?.total}
              defaultPageSize={20}
              showSizeChanger={false}
              showQuickJumper={true}
              pageSize={AcademicData?.userExercises?.per_page || 20}
              onChange={PaginationChange}
              current={Listpage}
            />
          </div>
        </>
      )}

      {/* 悬浮框 */}
      <AI_floatBox props={props} />



      <T_modelbox
        isOpen={Opens}
        title={`【${CurrnetTitle}】`}
        closeClick={() => {
          setOpens(false)
        }}
        width="76.0625rem"
        height="37.5rem"
      >
        <div id="topics">
          {KnowledgeDatas?.map((item, idx) => {
            return (
              <AI_topic
                key={item?.id}
                level={item?.level}
                exercises_title={item?.get_question_category?.title}
                content_all={item?.content_all}
                isanswer={item?.isanswer}
                knowName={item?.knowName}
                answer={item?.answer_latex}
                analysis={item?.analysis_latex}
                update_time={item?.update_time}
                is_basket={item?.is_basket}
                onSetAnswer={() => onSetAnswers(idx)}
                answerClick={() => answerClick(item?.id)}
                removeClick={() => removeClick(item?.id)}
                compositionClick={() => compositionClick(item?.id)}
                isWrong={false}
                onSeeWrong={() => onSeeWrong(item?.id)}
              />
            )
          })}
        </div>
      </T_modelbox>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
    volumeTopicCount: state.volumeTopicCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData(value) {
      let action = {
        type: GET_HOME_INFO,
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(StudyReport))
