import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { setTimerType } from '@/utils'
import { Button } from 'antd'
import { getUploadList } from '@/services/user'

function List(props) {
  const { history } = props
  const [UploadListData, setUploadListData] = useState([])

  useEffect(() => {
    getUploadListData()
    return () => {}
  }, [])

  const getUploadListData = async () => {
    const { code, data } = await getUploadList()
    if (code === 200) {
      setUploadListData(data?.teacherUploadList)
    }
  }

  const paperDetailClick = (id) => {
    history.push(`/user/upload_detail?id=${id}`)
  }

  const uploadPaper = () => {
    history.push('/user/upload_loading')
  }

  return (
    <div id="List">
      <div className="upload_title">
        <div className="upload_left_text">上传试卷列表</div>
        <Button type="primary" className="upload_btn" onClick={uploadPaper}>
          上传试卷
        </Button>
      </div>
      <div className="upload_body">
        <div className="upload_body_title">
          <div className="name">名称</div>
          <div className="time">上传时间</div>
          <div className="isreview">审核状态</div>
        </div>
        {UploadListData?.data ? (
          UploadListData?.data?.map((item) => {
            return (
              <div
                className="down_body_table"
                key={item?.upload_id}
                onClick={() => paperDetailClick(item?.upload_id)}
              >
                <div className="name">{item?.paper_name}</div>
                <div className="time">
                  {setTimerType(item?.add_time * 1000)}
                </div>
                {/* item?.status 1 待审核 2 已通过 3 未通过 */}
                <div
                  className={
                    item?.status == 1
                      ? 'isreview Pending'
                      : item?.status == 2
                      ? 'isreview passed'
                      : 'isreview notpass'
                  }
                >
                  {item?.status == 1
                    ? '待审核'
                    : item?.status == 2
                    ? '已通过'
                    : '未通过'}
                </div>
              </div>
            )
          })
        ) : (
          <div className="nodata_down">
            <img
              className="nodata_down_img"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/nodata_down.png"
              alt="nodata_down_img"
            />
            <div className="nodata_down_title">暂无上传的试卷</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(List)
