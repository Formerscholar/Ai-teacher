import React, { memo, useState, useRef } from 'react'
import './index.less'
import { Input, message, Button, Image } from 'antd'
import { getUploadImage, addTeacherUpload } from '@/services/user'
const { TextArea } = Input

function Uploading(props) {
  const { history } = props
  const [fileList, setFileList] = useState([])
  const [Remark, setRemark] = useState('')
  const [PaperName, setPaperName] = useState('')
  const inputEl = useRef(null)

  const delectClick = (idx) => {
    let arr = [...fileList]
    arr.splice(idx, 1)
    setFileList(arr)
  }

  /**
   *
   *  上传文件change事件
   * @param {*} e
   */
  const inputChange = async (e) => {
    console.log('执行addEventListener', e)
    let { files } = e.target
    if (!files.length) return
    let formData = new FormData()
    formData.append('img_url', files[0], files[0].name)
    formData.append('file_path', 'wx_xcx/paper/')
    const { code, data, msg } = await getUploadImage(formData)
    if (code === 200) {
      setFileList([...fileList, data.img])
      message.success(msg)
    } else {
      message.error(msg)
    }
    inputEl.current.removeEventListener('change', inputChange)
    inputEl.current.value = ''
  }

  /**
   *
   * 图片上传点击
   */
  const UploadClick = () => {
    inputEl.current.click()
    inputEl.current.addEventListener('change', inputChange)
  }

  /**
   *
   *  试卷名称输入框change事件
   * @param {*} e
   */
  const paperNameChange = (e) => {
    const { value } = e.target
    setPaperName(value)
  }

  /**
   *
   *  备注输入框change事件
   * @param {*} e
   */
  const remarkChange = (e) => {
    const { value } = e.target
    setRemark(value)
  }

  /**
   *
   *  点击上传按钮
   */
  const addClick = async () => {
    const { code, msg } = await addTeacherUpload({
      image_urls: fileList,
      remark: Remark,
      paper_name: PaperName,
    })
    if (code === 200) {
      message.success(msg)
      setFileList([])
      setPaperName('')
      setRemark('')
      history.push('/user/upload_list')
    } else {
      message.error(msg)
    }
  }

  return (
    <div id="Uploading">
      <div className="upload_title">
        <div className="upload_left_text">上传试卷</div>
      </div>
      <div className="content_box">
        <div className="paperName">
          <span>试卷名称</span>
          <Input
            className="myInput"
            placeholder="请填写试卷名称"
            onChange={paperNameChange}
            value={PaperName}
          />
        </div>
        <div className="Remarks">
          <span>备注</span>
          <TextArea
            className="myInput"
            placeholder="请填写备注"
            onChange={remarkChange}
            value={Remark}
          />
        </div>
        {!fileList.length ? (
          <div className="upload_box" onClick={UploadClick}>
            <img
              className="upload_icon"
              src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/upload_icon.png"
              alt="upload_icon"
            />
            <h1>点击上传图片</h1>
            <p>格式：JPG、JPEG2000、PNG</p>
          </div>
        ) : (
          <div className="upload_insert">
            {fileList?.map((item, idx) => {
              return (
                <div className="iamge_warp" key={idx}>
                  <Image
                    className="itemImg"
                    width="11.43rem"
                    height="14.29rem"
                    src={item}
                  />
                  <img
                    className="image_delete_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/image_delete_icon.png"
                    alt="image_delete_icon"
                    onClick={() => delectClick(idx)}
                  />
                </div>
              )
            })}
            <div className="listUpload" onClick={UploadClick}>
              <img
                className="uploadlist"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/uploadlist.png"
                alt="uploadlist"
              />
              <span>上传图片</span>
            </div>
          </div>
        )}
        <Button type="primary" className="btns" onClick={addClick}>
          保存
        </Button>
      </div>
      <input ref={inputEl} id="upload" type="file" name="file" hidden />
    </div>
  )
}

export default memo(Uploading)
