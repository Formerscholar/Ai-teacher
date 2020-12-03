import React, { memo, useState, useEffect } from 'react'
import './index.less'
import {
  Breadcrumb,
  Select,
  Button,
  message,
  DatePicker,
  Space,
  Radio,
} from 'antd'
import {
  getPapersList,
  paperToBased,
  paperToBasket,
} from '@/services/knowledge'
import { setTimerType } from '@/utils'
import T_modelbox from '@/common/T_modelbox'

const { Option } = Select

function Mypaperlist(props) {
  const { history } = props
  const [PapersList, setPapersList] = useState({})
  const [selectTime, setSelectTime] = useState('0')
  const [Open, setOpen] = useState(false)
  const [Opens, setOpens] = useState(false)
  const [SyncId, setSyncId] = useState(0)
  const [SyncTime, setSyncTime] = useState('')
  const [examId, setexamId] = useState(0)

  useEffect(() => {
    getPapersListData()
    return () => {}
  }, [])

  const getPapersListData = async (dataline = 0) => {
    const { code, data, msg } = await getPapersList({
      data: dataline,
    })
    if (code === 200) {
      setPapersList(data)
    } else {
      message.error(msg)
    }
  }
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
    setSelectTime(value)
  }

  const searchClick = () => {
    getPapersListData(selectTime)
  }

  const editpaper = async (id) => {
    const { code, msg } = await paperToBasket({
      id,
    })
    if (code === 200) {
      history.push(`/main/mypaper?id=${id}`)
    } else {
      message.error(msg)
    }
  }

  const downClick = (id) => {
    setexamId(id)
    console.log('打开弹窗')
    setOpens(true)
  }

  /**
   *  同步试卷
   *
   * @param {*} id
   */
  const SyncClick = (id) => {
    setOpen(true)
    setSyncId(id)
  }

  const closeClick = () => {
    setOpen(false)
  }
  const confirmClick = async () => {
    const { code, msg } = await paperToBased({
      id: SyncId,
      show_time: SyncTime,
    })
    if (code === 200) {
      message.success(msg)
    } else {
      message.error(msg)
    }
    setOpen(false)
  }

  function onOk(value) {
    setSyncTime(setTimerType(value, true))
  }

  return (
    <div id="Mypaperlist">
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
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          我的试卷
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
              defaultValue="0"
              style={{ width: '11.43rem' }}
              onChange={handleChange}
            >
              <Option value="0">全部</Option>
              <Option value="90">90天以内</Option>
              <Option value="180">半年以内</Option>
              <Option value="365">一年以内</Option>
            </Select>
            <Button type="primary" className="search" onClick={searchClick}>
              查询
            </Button>
          </div>
        </div>
        {/* 列表body */}
        <div className="listbody">
          {PapersList?.examList?.data?.map((item) => {
            return (
              <div className="items" key={item?.id}>
                <div className="left_info">
                  <img
                    className="paper_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                    alt="paper_icon"
                  />
                  {/* left_info_text */}
                  <div className="left_info_text">
                    <div className="top_text">{item?.title}</div>
                    <div className="bot_image_text">
                      {/* <div className="subject">
                        <img
                          className="defaultsubject"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/defaultsubject.png"
                          alt="defaultsubject"
                        />
                        学科：初中数学
                      </div> */}
                      <div className="groupOftimebox">
                        <img
                          className="groupOftime"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/groupOftime.png"
                          alt="groupOftime"
                        />
                        组卷时间：{setTimerType(item?.add_time * 1000)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_btns">
                  <Button
                    className="download"
                    type="primary"
                    onClick={() => downClick(item?.id)}
                  >
                    <img
                      className="down_btn"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down_btn.png"
                      alt="down_btn"
                    />
                    下载
                  </Button>
                  <Button
                    className="reedit"
                    onClick={() => SyncClick(item?.id)}
                  >
                    同步校本试卷
                  </Button>
                  <Button
                    className="reedit"
                    onClick={() => editpaper(item?.id)}
                  >
                    重新编辑
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Open}
        title="【同步】"
        closeClick={closeClick}
        width="41.71rem"
        height="19.93rem"
      >
        <div id="tmodelbox">
          <Space className="title" direction="vertical" size={35}>
            <DatePicker showTime onOk={onOk} />
          </Space>

          <Button type="primary" className="btn" onClick={confirmClick}>
            确定
          </Button>
        </div>
      </T_modelbox>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Opens}
        title="【下载确认】"
        closeClick={closeClick}
        width="62.64rem"
        height="31.57rem"
      >
        <div id="tmodelbox" className="downbox">
          <div className="title">title</div>
          <div className="body_text">body_text</div>
          <Button type="primary" className="btn" onClick={closeClick}>
            确定
          </Button>
        </div>
      </T_modelbox>
    </div>
  )
}
export default memo(Mypaperlist)
