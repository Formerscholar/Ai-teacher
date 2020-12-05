import React, { memo, useState, useEffect } from 'react'
import './index.less'
import {
  Breadcrumb,
  Button,
  message,
  DatePicker,
  Space,
  Radio,
  Input,
} from 'antd'
import {
  getPapersList,
  paperToBased,
  paperToBasket,
} from '@/services/knowledge'
import { setTimerType } from '@/utils'
import T_modelbox from '@/common/T_modelbox'
import { downDOCURL } from '@/conf'
import moment from 'moment'

function Mypaperlist(props) {
  const { history } = props
  const [PapersList, setPapersList] = useState({})
  const [Open, setOpen] = useState(false)
  const [Opens, setOpens] = useState(false)
  const [Openss, setOpenss] = useState(false)
  const [SyncId, setSyncId] = useState(0)
  const [SyncTime, setSyncTime] = useState(setTimerType(new Date(), true))
  const [examId, setexamId] = useState(0)
  const [examtitle, setexamexamtitle] = useState('')
  const [formt, setformt] = useState('doc')
  const [size, setsize] = useState('A4')
  const [searchData, setsearchData] = useState('')
  const [reedId, setreedId] = useState(0)

  useEffect(() => {
    getPapersListData()
    return () => {}
  }, [])

  const getPapersListData = async (title = '') => {
    const { code, data, msg } = await getPapersList({
      title,
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
    history.push('/main/index')
  }

  const onChange = (e) => {
    setformt(e.target.value)
  }

  const onChanges = (e) => {
    setsize(e.target.value)
  }

  function handleChange(e) {
    const { value } = e.target
    setsearchData(value)
  }

  const searchClick = () => {
    getPapersListData(searchData)
  }

  const editpaper = async (id) => {
    setreedId(id)
    setOpenss(true)
  }

  const confirmClickss = async () => {
    const { code, msg } = await paperToBasket({
      id: reedId,
    })
    if (code === 200) {
      history.push(`/main/mypaper?id=${reedId}`)
    } else {
      message.error(msg)
    }
    setOpenss(false)
  }

  const downClick = (id, title) => {
    setexamId(id)
    setexamexamtitle(title)
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

  const closeClicks = () => {
    setOpens(false)
  }
  const closeClicksss = () => {
    setOpenss(false)
  }
  /**
   *
   *  下载确认点击
   */
  const closeClickss = async () => {
    window.open(
      `${downDOCURL}/teacher/organizingPapers?paper_type=${size}&exam_id=${examId}&extension=${formt}`
    )
    setOpens(false)
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

  const toDetailPage = (id) => {
    history.push(`/main/mypaperdetail?id=${id}`)
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
          <div className="left_text">我的试卷列表</div>
          <div className="right_warp">
            {/* <Select
              className="timeSelect"
              defaultValue="0"
              style={{ width: '11.43rem' }}
              onChange={handleChange}
            >
              <Option value="0">全部</Option>
              <Option value="90">90天以内</Option>
              <Option value="180">半年以内</Option>
              <Option value="365">一年以内</Option>
            </Select> */}
            <Input
              className="timeSelect"
              value={searchData}
              onChange={handleChange}
              placeholder="试卷"
            />
            <Button type="primary" className="search" onClick={searchClick}>
              搜索
            </Button>
          </div>
        </div>
        {/* 列表body */}
        <div className="listbody">
          {PapersList?.examList?.data?.map((item) => {
            return (
              <div className="items" key={item?.id}>
                <div
                  className="left_info"
                  onClick={() => toDetailPage(item?.id)}
                >
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
                    onClick={() => downClick(item?.id, item?.title)}
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
          <div className="title">选择上线时间</div>
          <Space className="Space" direction="vertical" size={35}>
            <DatePicker
              showTime
              onOk={onOk}
              defaultValue={moment(new Date())}
            />
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
        closeClick={closeClicks}
        width="62.64rem"
        height="31.57rem"
      >
        <div id="tmodelbox" className="downbox">
          <div className="title">{examtitle}</div>
          <div className="body_text">
            {/* 文件格式 */}
            <div className="fileformt">
              <span className="title_txt">文件格式:</span>
              <Radio.Group onChange={onChange} value={formt}>
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
              <Radio.Group onChange={onChanges} value={size}>
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
        isOpen={Openss}
        title="【温馨提示】"
        closeClick={closeClicksss}
        width="41.71rem"
        height="19.93rem"
      >
        <div id="tmodelbox">
          <div className="title">重新编辑将清空试题篮</div>
          <div className="btns">
            <Button type="primary" className="btn" onClick={confirmClickss}>
              确定
            </Button>
            <Button className="cancel" onClick={closeClicksss}>
              取消
            </Button>
          </div>
        </div>
      </T_modelbox>
    </div>
  )
}
export default memo(Mypaperlist)
