import React, { memo } from 'react'
import './index.less'
import { Breadcrumb, Select, Button } from 'antd'

const { Option } = Select

function Mypaperlist(props) {
  const { history } = props
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

  /**
   *
   *  选择change事件
   * @param {*} value
   */
  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  const editpaper = () => {
    console.log('123')
    history.push('/main/mypaper')
  }
  return (
    <div id="Mypaperlist">
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
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          我的试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breaditem" color="textPrimary">
          组卷记录
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* 组卷列表 */}
      <div className="grouplist">
        {/* 列表头部 */}
        <div className="listhead">
          <div className="left_text">组卷记录列表</div>
          <div className="right_warp">
            <Select
              className="timeSelect"
              defaultValue="lucy"
              style={{ width: '11.43rem' }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Button type="primary" className="search">
              查询
            </Button>
          </div>
        </div>
        {/* 列表body */}
        <div className="listbody">
          {/* items */}
          <div className="items">
            <div className="left_info">
              {/* img */}
              <img
                className="paper_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                alt="paper_icon"
              />
              {/* left_info_text */}
              <div className="left_info_text">
                <div className="top_text">2020年11月13日xxx的初中数学试卷</div>
                <div className="bot_image_text">
                  <div className="subject">
                    <img
                      className="defaultsubject"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/defaultsubject.png"
                      alt="defaultsubject"
                    />
                    学科：初中数学
                  </div>
                  <div className="groupOftimebox">
                    <img
                      className="groupOftime"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/groupOftime.png"
                      alt="groupOftime"
                    />
                    组卷时间：2020-09-10
                  </div>
                </div>
              </div>
            </div>
            <div className="right_btns">
              <Button className="download" type="primary">
                <img
                  className="down_btn"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down_btn.png"
                  alt="down_btn"
                />
                下载
              </Button>
              <Button type="primary" className="reedit" onClick={editpaper}>
                重新编辑
              </Button>
            </div>
          </div>
          {/* items */}
          <div className="items">
            <div className="left_info">
              {/* img */}
              <img
                className="paper_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                alt="paper_icon"
              />
              {/* left_info_text */}
              <div className="left_info_text">
                <div className="top_text">2020年11月13日xxx的初中数学试卷</div>
                <div className="bot_image_text">
                  <div className="subject">
                    <img
                      className="defaultsubject"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/defaultsubject.png"
                      alt="defaultsubject"
                    />
                    学科：初中数学
                  </div>
                  <div className="groupOftimebox">
                    <img
                      className="groupOftime"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/groupOftime.png"
                      alt="groupOftime"
                    />
                    组卷时间：2020-09-10
                  </div>
                </div>
              </div>
            </div>
            <div className="right_btns">
              <Button className="download" type="primary">
                <img
                  className="down_btn"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down_btn.png"
                  alt="down_btn"
                />
                下载
              </Button>
              <Button type="primary" className="reedit" onClick={editpaper}>
                重新编辑
              </Button>
            </div>
          </div>
          <div className="items">
            <div className="left_info">
              {/* img */}
              <img
                className="paper_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                alt="paper_icon"
              />
              {/* left_info_text */}
              <div className="left_info_text">
                <div className="top_text">2020年11月13日xxx的初中数学试卷</div>
                <div className="bot_image_text">
                  <div className="subject">
                    <img
                      className="defaultsubject"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/defaultsubject.png"
                      alt="defaultsubject"
                    />
                    学科：初中数学
                  </div>
                  <div className="groupOftimebox">
                    <img
                      className="groupOftime"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/groupOftime.png"
                      alt="groupOftime"
                    />
                    组卷时间：2020-09-10
                  </div>
                </div>
              </div>
            </div>
            <div className="right_btns">
              <Button className="download" type="primary">
                <img
                  className="down_btn"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down_btn.png"
                  alt="down_btn"
                />
                下载
              </Button>
              <Button type="primary" className="reedit" onClick={editpaper}>
                重新编辑
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Mypaperlist)
