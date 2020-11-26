import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'
import { splitSearch, setTimerType, getCurrentWeek, getNearDate } from '@/utils'
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
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'

const { RangePicker } = DatePicker

function StudyReport(props) {
  const { location, history, homeInfo } = props
  const id = splitSearch(location.search).id
  const iid = splitSearch(location.search).iid
  const name = decodeURI(splitSearch(location.search).name)
  const [AcademicData, setAcademicData] = useState({})
  const [PickerData, setPickerData] = useState([])
  const [Listpage, setListpage] = useState(1)
  const [startTime, setstartTime] = useState(getCurrentWeek(new Date())[0])
  const [endTime, setendTime] = useState(getCurrentWeek(new Date())[1])
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
    getstudentAcademicReport()
    return () => {}
  }, [])

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

  /**
   * menu click
   *
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/index')
    localStorage.setItem('menuIndex', 0)
  }

  const handleClicks = (event) => {
    event.preventDefault()
    history.push('/main/class')
  }

  const handleClickss = (event) => {
    event.preventDefault()
    history.push(`/main/classdetail?id=${iid}`)
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
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
    }
    const monthfunc = () => {
      const arr = getNearDate(new Date(), 30)
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
    }
    const yearfunc = () => {
      const arr = getNearDate(new Date(), 365)
      setstartTime(arr[0])
      setendTime(arr[1])
      getstudentAcademicReport(Listpage, arr[0], arr[1])
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
    localStorage.setItem('menuIndex', 4)
    history.push(`/main/questiondetails?id=${id}`)
  }

  /**
   *
   *  Picker选择日期变化
   * @param {*} dates
   * @param {*} dateStrings
   */
  const PickerChange = (dates, dateStrings) => {
    setPickerData(dateStrings)
  }

  const SearchClick = () => {
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
          七年级一班
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          {name}的学情报告
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="top_warp">
        <div className="left_name">{name}</div>
        <div className="right_timer">
          <div className="title">时间选择:</div>
          <Radio.Group onChange={onChange} defaultValue="0">
            <Radio.Button value="0">近一周</Radio.Button>
            <Radio.Button value="1">近一月</Radio.Button>
            <Radio.Button value="2">近一年</Radio.Button>
          </Radio.Group>
          <Space direction="vertical" size={12}>
            <RangePicker onChange={PickerChange} />
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
              <div className="bot_btns">
                <div className="left_box_warp">
                  <div className="update_time">
                    更新时间：
                    {setTimerType(item?.get_exercises?.update_time * 1000)}
                  </div>
                  {/* <div className="counts">组卷次数：0</div> */}
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
                  <Button className="add" variant="contained">
                    <em>+</em>
                    组卷
                  </Button>
                  {/* <Button className="sub" variant="contained">
                <em>-</em>
                移除
              </Button> */}
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(StudyReport))
