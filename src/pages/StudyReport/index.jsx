import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { splitSearch } from '@/utils'
import { Breadcrumb, message } from 'antd'
import { studentAcademicReport } from '@/services/class'

function StudyReport(props) {
  const { location, history } = props
  const id = splitSearch(location.search).id
  const iid = splitSearch(location.search).iid
  const [AcademicData, setAcademicData] = useState({})

  useEffect(() => {
    getstudentAcademicReport()
    return () => {}
  }, [])

  const getstudentAcademicReport = async () => {
    const { code, data, msg } = await studentAcademicReport({
      student_id: id,
    })
    if (code === 200) {
      setAcademicData(data)
    }
  }

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
          李同学的学情报告
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default memo(StudyReport)
