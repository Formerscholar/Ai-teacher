import React, { memo } from 'react'
import './index.less'
import { Breadcrumb, Button } from 'antd'
import { getSchoolBasedDetail } from '@/services/Schoolbased'
import { splitSearch } from '@/utils'
function Schoolbaseddetail(props) {
  const { history, location } = props
  console.log(splitSearch(location.search).id)
  /**
   *  面包屑返回
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/main/schoolbased')
  }
  return (
    <div id="Schoolbaseddetail">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
          />
          校本试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          试卷详情
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          梅岭中学2019-2020学年七年级（上）数学第一次月考试题
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="paperList">
        {/* key={item?.id} */}
        <div className="items">
          <div className="top_title">
            <div className="info_class">
              <div className="difficulty">
                {/* Knowledge?.level[item?.level] */}
                难度：<span>简单</span>
              </div>
              <div className="question">
                {/* 来源：邗江实验学校2019-2020年九年级上学期第一次月考试卷.doc */}
                {/* 题型：{item?.get_question_category?.title} */}
                题型：选择题
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
            // dangerouslySetInnerHTML={{ __html: item?.content_all }}
          ></div>
          <div className="bot_btns">
            <div className="left_box_warp">
              <div className="update_time">
                {/* 更新时间：{setTimerType(item?.update_time * 1000)} */}
                更新时间：2020-11-21
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
              {/* <div className="details" onClick={() => answerClick(item?.id)}> */}
              <div className="details">
                <img
                  className="answer"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
                  alt="answer"
                />
                <span>试题详情</span>
              </div>
              <Button className="add" variant="contained">
                <span>+</span>
                组卷
              </Button>
              {/* <Button className="sub" variant="contained">
                  <em>-</em>
                  移除
                </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Schoolbaseddetail)
