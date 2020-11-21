import React, { memo, useRef, useState } from 'react'
import './index.less'
import { Breadcrumb, Input, Button, message, Image } from 'antd'
import { getUploadImage, addTeacherUpload } from '@/services/paper'

const { TextArea } = Input

function Uploadpaper(props) {
  const inputEl = useRef(null)
  const [fileList, setFileList] = useState([])
  const [PaperName, setPaperName] = useState('')
  const [Remark, setRemark] = useState('')

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
   *  上传文件change事件
   * @param {*} e
   */
  const inputChange = async (e) => {
    console.log('执行addEventListener')
    let { files } = e.target
    if (!files.length) return
    let formData = new FormData()
    formData.append('img_url', files[0], files[0].name)
    const { code, data, msg } = await getUploadImage(formData)
    if (code === 200) {
      setFileList([...fileList, data.img])
      message.success(msg)
      inputEl.current.removeEventListener('change', inputChange)
      inputEl.current.value = ''
    } else {
      message.error(msg)
      inputEl.current.removeEventListener('change', inputChange)
      inputEl.current.value = ''
    }
  }

  const delectClick = (idx) => {
    let arr = [...fileList]
    arr.splice(idx, 1)
    setFileList(arr)
  }

  /**
   *
   *  点击上传按钮
   */
  const addClick = async() => {
    const { code, msg } = await addTeacherUpload({
      image_urls: fileList,
      remark: Remark,
      paper_name:PaperName
    })
    if (code === 200) {
      message.success(msg)
      setFileList([])
      setPaperName('')
      setRemark('')
    } else {
      message.error(msg)
    }
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

  return (
    <div id="Uploadpaper">
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
          上传试卷
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_box">
        <div className="paperName">
          <span>试卷名称</span>
          <Input className="myInput" placeholder="请填写试卷名称" onChange={paperNameChange} value={PaperName} />
        </div>
        <div className="Remarks">
          <span>备注</span>
          <TextArea className="myInput" placeholder="请填写备注" onChange={remarkChange} value={Remark} />
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
export default memo(Uploadpaper)
