import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'
import { Button, Input, Pagination, Radio, message, Breadcrumb } from 'antd'
import { getSchoolResourcesList } from '@/services/famous'
import { setTimerType, Trim } from '@/utils'
import T_modelbox from '@/common/T_modelbox'
import { downURL } from '@/conf'

function Famous(props) {
  const { history } = props
  const [searchName, setSearchName] = useState('')
  const [searchdata, setsearchdata] = useState('')
  const [Listpage, setListpage] = useState(1)
  const [ResourcesList, setResourcesList] = useState({})
  const [Open, setOpen] = useState(false)
  const [RadioId, setRadioId] = useState(1)
  const [downfile, setdownfile] = useState([])
  const [msgErr, setmsgErr] = useState(false)
  const [dwonURL, setdwonURL] = useState('')

  useEffect(() => {
    getResourcesList()

    return () => {}
  }, [])

  /**
   *  请求列表数据
   *
   * @param {string} [name='']
   * @param {number} [page=1]
   */
  const getResourcesList = async (name = '', page = 1) => {
    const { code, data, msg } = await getSchoolResourcesList({
      name,
      page,
    })
    if (code === 200) {
      setResourcesList(data)
    }
  }

  /**
   *
   *  输入框内容实时保存
   * @param {Object} e
   */
  const InputChange = (e) => {
    const { value } = e.target
    console.log(Trim(value))
    setSearchName(Trim(value))
    setsearchdata(Trim(value))
  }

  /**
   *
   *  页面变化请求数据
   * @param {Number} page
   * @param {Number} pageSize
   */
  const PaginationChange = (page, pageSize) => {
    setListpage(page)
    getResourcesList(searchdata, page)
  }

  /**
   *
   * 点击查询按钮 给定查询字段 初始化页码1
   */
  const searchClick = () => {
    setListpage(1)
    getResourcesList(searchName, 1)
    setSearchName('')
  }

  /**
   *
   *  下载试卷事件
   */
  const downloadClick = (pdf1, pdf2) => {
    let arr = [pdf1, pdf2]
    setdownfile(arr)
    setOpen(true)
  }

  const closeClick = () => {
    setOpen(false)
  }

  /**
   *  单选类型
   * @param {*} e
   */
  const RadioChange = (e) => {
    const { value } = e.target
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

  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const topaperdetail = (id) => {
    history.push(`/famous/detail?id=${id}`)
  }

  return (
    <div id="Famous">
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
          名校资源
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content-warp">
        <div className="top_box">
          <span className="name">试卷列表</span>
          <div>
            <Input
              className="outlined"
              variant="outlined"
              value={searchName}
              style={{ width: '11.43rem', height: '2.29rem' }}
              size="small"
              onInput={InputChange}
            />
            <Button variant="contained" className="btn" onClick={searchClick}>
              查询
            </Button>
          </div>
        </div>
        <div className="body_box">
          <div className="lists">
            {ResourcesList?.schoolResources?.data?.map((item) => {
              return (
                <div className="item" key={item?.id}>
                  <div className="left_box">
                    <img
                      className="paper_icon"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png"
                      alt="paper_icon"
                    />
                    <div className="info_box">
                      <div
                        className="title"
                        onClick={() => topaperdetail(item?.id)}
                      >
                        {item?.title}
                      </div>
                      <div className="bot_info">
                        <img
                          className="time_icon"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png"
                          alt="time_icon"
                        />
                        <span className="time_text">
                          更新时间：{setTimerType(item?.update_time * 1000)}
                        </span>
                        <img
                          className="View_icon"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png"
                          alt="View_icon"
                        />
                        <span className="view_text">浏览次数：166</span>
                      </div>
                    </div>
                  </div>
                  <div className="right_btn">
                    <div
                      className="download_box"
                      onClick={() => downloadClick(item?.pdf1, item?.pdf2)}
                    >
                      <img
                        className="download_icon"
                        src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_write.png"
                        alt="download_icon"
                      />
                      <span className="text">下载</span>
                    </div>
                    <div className="Synchronize">同步我的试卷</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="Pagination">
            <Pagination
              hideOnSinglePage={false}
              showSizeChanger={false}
              total={ResourcesList?.schoolResources?.total}
              defaultPageSize={20}
              pageSize={ResourcesList?.schoolResources?.per_page || 20}
              onChange={PaginationChange}
              current={Listpage}
            />
          </div>
        </div>
      </div>

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
export default memo(Famous)
