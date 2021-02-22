import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Button, Input, Breadcrumb } from 'antd'
import { Pagination } from 'antd'
import { getSchoolBasedList } from '@/services/Schoolbased'
import { getBasedDir } from '@/services/famous'
import { setTimerType, Trim, splitSearch } from '@/utils'

function Basedfolder(props) {
  const { history } = props
  const preId = splitSearch(history.location.search).id
  const [searchName, setSearchName] = useState('')
  const [searchdata, setsearchdata] = useState('')
  const [Listpage, setListpage] = useState(1)
  const [ResourcesList, setResourcesList] = useState([])

  useEffect(() => {
    getResourcesList()

    return () => {}
  }, [])

  /**
   *  请求列表数据
   *
   * @param {string} [title='']
   * @param {number} [page=1]
   */
  const getResourcesList = async () => {
    const { code, data, msg } = await getBasedDir({
      parent_id: preId,
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
   *  跳转试卷详情
   */
  const paperDetail = (id) => {
    history.push(`/schoolbased/detail?id=${id}`)
  }
  /**
   *  面包屑返回
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  return (
    <div id="Schoolbased">
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
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
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
          校本试卷
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          {decodeURI(splitSearch(history.location.search).title)}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="Schoolbased_box">
        <div className="top_box">
          <span className="name">文件夹列表</span>
          {/* <div>
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
          </div> */}
          <Button
            variant="contained"
            className="btn"
            onClick={() => {
              history.goBack()
            }}
          >
            返回
          </Button>
        </div>
        <div className="body_box">
          <div className="lists">
            {ResourcesList?.map((item) => {
              return (
                <div
                  className="item"
                  key={item?.id}
                  onClick={() => paperDetail(item?.id)}
                >
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
                          更新时间：
                          {setTimerType(item?.add_time * 1000)}
                        </span>
                        {item?.get_based_category?.name ? (
                          <>
                            <img
                              className="View_icon"
                              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png"
                              alt="View_icon"
                            />
                            <span className="view_text">
                              试卷分类：{item?.get_based_category?.name}
                            </span>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="right_box">
                    <img
                      className="download_icon"
                      src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right.png"
                      alt="download_icon"
                    />
                  </div>
                </div>
              )
            })}
          </div>
          {/* <div className="Pagination">
            <Pagination
              hideOnSinglePage={false}
              showSizeChanger={false}
              total={ResourcesList?.examsSchool?.total}
              defaultPageSize={20}
              pageSize={ResourcesList?.examsSchool?.per_page || 20}
              onChange={PaginationChange}
              current={Listpage}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default memo(Basedfolder)
