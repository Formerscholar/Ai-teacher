import React, { memo } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import { setTimerType } from '@/utils'

function Main(props) {
  const { history, homeInfo } = props

  const toresources = () => {
    history.push('/main/famous')
  }

  const topaper = () => {
    history.push('/main/schoolbased')
  }

  const topaperdetail = (id) => {
    history.push(`/main/schoolbaseddetail?id=${id}`)
  }

  const toPage = (idx) => {
    switch (idx) {
      case 1:
        history.push('/main/class')
        break
      case 3:
        history.push('/main/user?type=1')
        break
      case 4:
        history.push('/main/mypaperlist')
        break

      default:
        break
    }
  }

  return (
    <div id="Main">
      <div className="topbox">
        {/* 学科 */}
        <div className="subject" onClick={() => toPage(0)}>
          <div className="title">{homeInfo?.teacher?.get_subject?.title}</div>
          <div className="text">学科</div>
        </div>
        {/* 班级 */}
        <div className="grade" onClick={() => toPage(1)}>
          <div className="title">{homeInfo?.teacher?.teamCount}</div>
          <div className="text">班级</div>
        </div>
        {/* 学生 */}
        <div className="student" onClick={() => toPage(2)}>
          <div className="title">{homeInfo?.teacher?.studentCount}</div>
          <div className="text">学生</div>
        </div>
        {/* 积分 */}
        <div className="integral" onClick={() => toPage(3)}>
          <div className="title">{homeInfo?.teacher?.points}</div>
          <div className="text">积分</div>
        </div>
        {/* 我的试卷 */}
        <div className="paper" onClick={() => toPage(4)}>
          <div className="title">{homeInfo?.teacher?.myExam}</div>
          <div className="text">我的试卷</div>
        </div>
      </div>
      {/* 名校资源 */}
      <div className="resources">
        <div className="top_box">
          <div className="leftbox">
            <div className="name">名校资源</div>
            <div className="crunt">{homeInfo?.schoolResourcesCount}份</div>
          </div>
          <div className="rightbox" onClick={toresources}>
            更多<span>&gt;</span>
          </div>
        </div>
        <div className="botbox">
          {homeInfo?.schoolResources?.map((item) => {
            return (
              <div
                className="items"
                key={item?.id}
                onClick={() => topaperdetail(item?.id)}
              >
                <div className="left_text">
                  <img
                    className="paper_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                    alt="paper_icon"
                  />
                  <span>{item?.title}</span>
                </div>
                <div className="right_time">
                  {setTimerType(item?.add_time * 1000)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* 校本试卷 */}
      <div className="resources" style={{ marginBottom: '3.64rem' }}>
        <div className="top_box">
          <div className="leftbox">
            <div className="name">校本试卷</div>
            <div className="crunt">{homeInfo?.examsSchoolCount}份</div>
          </div>
          <div className="rightbox" onClick={topaper}>
            更多<span>&gt;</span>
          </div>
        </div>
        <div className="botbox">
          {homeInfo?.examsSchool?.map((item) => {
            return (
              <div
                className="items"
                key={item?.id}
                onClick={() => topaperdetail(item?.id)}
              >
                <div className="left_text">
                  <img
                    className="paper_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                    alt="paper_icon"
                  />
                  <span>{item?.get_base?.name}</span>
                </div>
                <div className="right_time">
                  {setTimerType(item?.add_time * 1000)}
                </div>
              </div>
            )
          })}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
