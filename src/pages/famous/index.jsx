import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { TextField, Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { getSchoolResourcesList } from '@/services/famous'
import { setTimerType, Trim, useCallbackState } from '@/utils'

function Famous(props) {
  const [searchName, setSearchName] = useState('')
  const [page, setPage] = useCallbackState(1)
  const [ResourcesList, setResourcesList] = useState({})

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
  }

  /**
   *
   *  页面变化请求数据
   * @param {Object} event
   * @param {Number} page
   */
  const PaginationChange = (event, page) => {
    setPage(page, (data) => {
      getResourcesList(searchName, data)
    })
  }

  /**
   *
   * 点击查询按钮 给定查询字段 初始化页码1
   */
  const searchClick = () => {
    setPage(1, (data) => {
      getResourcesList(searchName, data)
    })
  }

  /**
   *
   *  下载试卷事件
   */
  const downloadClick = () => {
    
  }

  return (
    <div id="Famous">
      <div className="top_box">
        <span className="name">试卷名称:</span>
        <TextField
          className="outlined"
          variant="outlined"
          style={{ width: '11.43rem', height: '2.29rem' }}
          size="small"
          onInput={InputChange}
        />
        <Button variant="contained" className="btn" onClick={searchClick}>
          查询
        </Button>
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
                    <div className="title">{item?.title}</div>
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
                <div className="right_box">
                  <img
                    className="download_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon.png"
                    alt="download_icon"
                  />
                  <span className="text" onClick={downloadClick}>下载</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="Pagination">
          <Pagination
            count={ResourcesList?.schoolResources?.last_page}
            variant="outlined"
            shape="rounded"
            onChange={PaginationChange}
            page={page}
          />
        </div>
      </div>
    </div>
  )
}
export default memo(Famous)
