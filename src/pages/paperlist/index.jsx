import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Breadcrumb, Button } from 'antd'
import { getUploadList } from '@/services/paper'
import { setTimerType } from '@/utils'

function Paperlist(props) {
  const { history } = props
  const [paperList, setParperList] = useState({})
  useEffect(() => {
    getPaperList()
    return () => {}
  }, [])

  /**
   *
   *  初始化列表数据
   */
  const getPaperList = async () => {
    const { code, data } = await getUploadList()
    if (code === 200) {
      setParperList(data?.teacherUploadList)
    }
  }

  /**
   *
   *  点击上传按钮跳转
   */
  const updateHandleClick = () => {
    history.push('/main/uploadpaper')
  }

  return (
    <div id="Paperlist">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            alt="position"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
          />
          试卷列表
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_warp">
        <div className="top_box">
          <div className="left_text">我上传的试卷列表</div>
          <Button
            type="primary"
            className="updateBtn"
            onClick={updateHandleClick}
          >
            <span>+</span> 上传试卷
          </Button>
        </div>
        <div className="body">
          <div className="title">
            <div className="name">名称</div>
            <div className="uptime">上传时间</div>
            <div className="Review">审核状态</div>
          </div>
          {paperList?.data?.length == 0 ? (
            <div className="lists">
              <img
                className="listNoData"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_list_nodata.png"
                alt="paper_list_nodata"
              />
            </div>
          ) : (
            <div className="datalist">
              {paperList?.data?.map((item) => {
                return (
                  <div className="items" key={item?.upload_id}>
                    <div className="name">{item?.paper_name}</div>
                    <div className="uptime">
                      {setTimerType(item?.add_time * 1000)}
                    </div>
                    {/* item?.status 1 待审核 2 通过 3 未通过 */}
                    {item?.status == 1 ? (
                      <div className="Review">待审核</div>
                    ) : item?.status == 2 ? (
                      <div className="Review">已经通过</div>
                    ) : (
                      <div className="Reviews">未通过</div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default memo(Paperlist)
