import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { setTimerType, splitSearch } from '@/utils'
import { message, Image } from 'antd'
import { getTeacherUpload } from '@/services/user'
function Detail(props) {
  const { location, history } = props
  const [UploadDetail, setUploadDetail] = useState(false)

  useEffect(() => {
    getUploaddetail()
    return () => {}
  }, [])

  const getUploaddetail = async () => {
    const { code, data, msg } = await getTeacherUpload({
      id: splitSearch(location.search).id,
    })
    if (code === 200) {
      setUploadDetail(data?.upload)
    } else {
      message.error(msg)
    }
  }

  return (
    <div id="Detail">
      <div className="upload_title">
        <div className="detail">
          <div className="left_detail">{UploadDetail?.paper_name}</div>
          <div className="right_detail">
            {setTimerType(UploadDetail?.add_time * 1000)}
          </div>
        </div>
      </div>
      <div className="uploadDeatilBox">
        {/*  UploadDetail?.status 1 待审核 pass_icon 2 已通过 passed_icon 3 未通过 notpass_icon  */}
        <div
          className="status_check"
          style={{
            border:
              UploadDetail?.status === 1
                ? '1px solid #999999'
                : UploadDetail?.status === 2
                ? '1px solid #20CFB9'
                : '1px solid #E50304',
            backgroundColor:
              UploadDetail?.status === 1
                ? ' #F5F5F5'
                : UploadDetail?.status === 2
                ? ' #E8FAF8'
                : ' #FCE5E5',
          }}
        >
          <img
            className="passed_icon"
            src={
              UploadDetail?.status === 1
                ? 'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/pass_icon.png'
                : UploadDetail?.status === 2
                ? 'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/passed_icon.png'
                : 'https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notpass_icon.png'
            }
            alt="passed_icon"
          />
          <span className="tip_text">
            {UploadDetail?.status === 1
              ? '系统将会及时处理你上传的图片，如有问题请联系客服。'
              : UploadDetail?.status === 2
              ? '恭喜！你所提交的试卷已经审核通过，如有问题请联系客服。'
              : '未通过！你所提交的题目不清晰，请重新上传。'}
          </span>
        </div>
        <div className="detail_images">
          {UploadDetail?.get_detail?.map((item) => {
            return (
              <Image
                className="Imageitems"
                key={item?.id}
                height="180px"
                width="23.5%"
                src={item?.picurl}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(Detail)
