import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'
import { setTimerType, getNearDate } from '@/utils'
import {
  Breadcrumb,
  message,
  Radio,
  DatePicker,
  Space,
  Button,
  Pagination,
} from 'antd'
import { teamAcademicReport } from '@/services/Schoolbased'
import { addExamBasket, delExamBasket } from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_HOME_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import moment from 'moment'
const { RangePicker } = DatePicker

function ClassReport(props) {
  const {
    history,
    homeInfo,
    addtopicData,
    subtopicData,
    volumeTopicCount,
  } = props
  const [Id, setid] = useState(0)
  const [AcademicData, setAcademicData] = useState({})
  const [PickerData, setPickerData] = useState(getNearDate(new Date(), 7))
  const [Listpage, setListpage] = useState(1)
  const [startTime, setstartTime] = useState(getNearDate(new Date(), 7)[0])
  const [endTime, setendTime] = useState(getNearDate(new Date(), 7)[1])
  const [classCrrunt, setClassCrrunt] = useState(0)
  const [options, setoptions] = useState({
    title: {
      text: '错题知识点分布图',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: [],
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
    getteamAcademicReport(Id, Listpage, startTime, endTime)
    return () => {}
  }, [volumeTopicCount])

  useEffect(() => {
    const myChart = window.echarts.init(Echars.current)
    myChart.setOption(options)
  })

  /**
   *  获取 初始化信息
   * @param {dateString} [start_time=getCurrentWeek(new Date())[0]]
   * @param {dateString} [end_time=getCurrentWeek(new Date())[1]]
   * @param {number} [page=1]
   */
  const getteamAcademicReport = async (
    team_id = Id,
    page = Listpage,
    start_time = startTime,
    end_time = endTime
  ) => {
    const { code, data, msg } = await teamAcademicReport({
      team_id,
      start_time,
      end_time,
      page,
    })
    if (code === 200) {
      data?.userExercises?.data?.map((item) => {
        item['isanswer'] = false
      })
      setAcademicData(data)
      let legend = []
      let series = []
      let newOptions = { ...options }
      data?.knowPointExercises?.map((item) => {
        legend.push(item.title)
        series.push({
          name: item.title,
          value: item.count,
        })
      })
      newOptions.legend.data = legend
      newOptions.series[0].data = series
      setoptions(newOptions)
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

  /**
   * menu click
   *
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
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
      getteamAcademicReport(Id, Listpage, arr[0], arr[1])
    }
    const monthfunc = () => {
      const arr = getNearDate(new Date(), 30)
      setPickerData(arr)
      setstartTime(arr[0])
      setendTime(arr[1])
      getteamAcademicReport(Id, Listpage, arr[0], arr[1])
    }
    const yearfunc = () => {
      const arr = getNearDate(new Date(), 365)
      setPickerData(arr)
      setstartTime(arr[0])
      setendTime(arr[1])
      getteamAcademicReport(Id, Listpage, arr[0], arr[1])
    }
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
    window.open(`/main/questiondetails?id=${id}`)
  }

  /**
   *
   *  Picker选择日期变化
   * @param {*} dates
   * @param {*} dateStrings
   */
  const PickerChange = (dates, dateStrings) => {
    setPickerData(dateStrings)
    setstartTime(dateStrings[0])
    setendTime(dateStrings[1])
  }

  const SearchClick = () => {
    setstartTime(PickerData[0])
    setendTime(PickerData[1])
    getteamAcademicReport(Id, Listpage, PickerData[0], PickerData[1])
  }

  /**
   *
   *  页面变化请求数据
   * @param {Object} event
   * @param {Number} page
   */
  const PaginationChange = (page, pageSize) => {
    setListpage(page * 1)
    getteamAcademicReport(Id, page * 1)
  }

  /**
   *  切换班级
   * @param {*} id
   * @param {*} idx
   */
  const classChange = (id, idx) => {
    setClassCrrunt(idx)
    setid(id)
    getteamAcademicReport(id, Listpage, PickerData[0], PickerData[1])
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

  return (
    <div id="ClassReport">
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
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          班级学情报告
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="top_warp">
        <div className="left_name">
          {AcademicData?.teams?.map((item, idx) => {
            return (
              <span
                key={item?.id}
                className={idx === classCrrunt && 'crrunt'}
                onClick={() => classChange(item?.id, idx)}
              >
                {item?.get_grade?.name}
                {item?.name}
              </span>
            )
          })}
        </div>
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
        <div ref={Echars} style={{ width: '100%', height: '100%' }}></div>
      </div>
      <div className="topics">
        {AcademicData?.userExercises?.data?.map((item, idx) => {
          return (
            <div className="items" key={item?.exercises_id}>
              <div className="top_title">
                <div className="info_class">
                  <div className="difficulty">
                    难度：
                    <span>
                      {homeInfo?.teacher?.level[item?.get_exercises?.level]}
                    </span>
                  </div>
                  <div className="question">
                    {/* 来源：邗江实验学校2019-2020年九年级上学期第一次月考试卷.doc */}
                    题型：{item?.get_exercises?.get_question_category?.title}
                  </div>
                </div>
                {/* <img
                  className="new_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/new_icon.png"
                  alt="new_icon"
                /> */}
              </div>
              <div
                className="cet_body"
                dangerouslySetInnerHTML={{
                  __html: item?.get_exercises?.content_all,
                }}
              ></div>
              <div
                className="answerbox"
                style={{ display: item?.isanswer ? 'block' : 'none' }}
              >
                <div className="Tests">
                  <span className="title">【考点】</span>
                  <div
                    className="body_txt"
                    dangerouslySetInnerHTML={{
                      __html: item?.get_exercises?.knowName,
                    }}
                  ></div>
                </div>
                <div className="answer">
                  <span className="title">【答案】</span>
                  <div
                    className="body_txt"
                    dangerouslySetInnerHTML={{
                      __html: item?.get_exercises?.answer,
                    }}
                  ></div>
                </div>
                <div className="Parse">
                  <span className="title">【解析】</span>
                  <div
                    className="body_txt"
                    dangerouslySetInnerHTML={{
                      __html: item?.get_exercises?.analysis,
                    }}
                  ></div>
                </div>
              </div>
              <div className="bot_btns">
                <div className="left_box_warp">
                  <div className="update_time">
                    更新时间：
                    {setTimerType(item?.get_exercises?.update_time * 1000)}
                  </div>
                  {/* <div className="counts">组卷次数：0</div> */}
                </div>
                <div className="right_box_warp">
                  <div className="answers" onClick={() => onSetAnswer(idx)}>
                    <img
                      className="View"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png"
                      alt="View"
                    />
                    <span>查看答案</span>
                  </div>
                  <div
                    className="details"
                    onClick={() => answerClick(item?.get_exercises?.id)}
                  >
                    <img
                      className="answer"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
                      alt="answer"
                    />
                    <span>试题详情</span>
                  </div>
                  {item?.is_basket ? (
                    <Button
                      className="sub"
                      size="small"
                      variant="contained"
                      onClick={() => removeClick(item?.exercises_id)}
                    >
                      - 移除
                    </Button>
                  ) : (
                    <Button
                      className="add"
                      variant="contained"
                      size="small"
                      onClick={() =>
                        compositionClick(
                          item?.exercises_id,
                          item?.get_exercises?.type
                        )
                      }
                    >
                      + 组卷
                    </Button>
                  )}
                </div>
              </div>
            </div>
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
      {/* 悬浮框 */}
      <AI_floatBox props={props} />
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
    /**
     * @param {*} value 
        {
          id: 120,
          type: 14,
        }
     */
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(ClassReport))
