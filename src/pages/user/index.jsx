import React, { memo, useEffect, useState } from 'react'
import './index.less'
import {
  Avatar,
  message,
  Breadcrumb,
  Input,
  Select,
  Upload,
  Button,
} from 'antd'
import { information } from '@/services/user'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const { Option } = Select

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

function User(props) {
  const { history } = props
  const [userData, setUserData] = useState({})
  const [loading, setloading] = useState(false)
  const [imageUrl, setimageUrl] = useState('')

  useEffect(() => {
    getinformation()
    return () => {}
  }, [])
  const getinformation = async () => {
    const { code, data, msg } = await information()
    if (code === 200) {
      setUserData(data?.teacher)
    } else {
      message.error(msg)
    }
  }

  /**
   *  menu click
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    localStorage.setItem('menuIndex', 0)
    history.push('/main/index')
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  )

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setloading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setimageUrl(imageUrl)
        setloading(false)
      })
    }
  }

  return (
    <div id="User">
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
          个人中心
        </Breadcrumb.Item>
        <Breadcrumb.Item
          className="breaditem"
          style={{ cursor: 'pointer', color: '#222' }}
        >
          个人资料
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="body_warp">
        <div className="left_box">
          <div className="top_info">
            <div className="perpo">
              <Avatar
                className="Avatar"
                size={79}
                icon={
                  <img
                    style={{ width: '5.64rem', height: '5.64rem' }}
                    src={userData?.avatar_file}
                    alt="avatar"
                  />
                }
              />
              <div className="name">{userData?.true_name}</div>
            </div>
            <div className="info">
              <div className="subject">
                <img
                  className="subject_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png"
                  alt="subject_icon"
                />
                <span>{userData?.get_subject?.title}</span>
              </div>
              <div className="integral">
                <img
                  className="integral_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png"
                  alt="integral_icon"
                />
                <span>积分：5</span>
              </div>
            </div>
          </div>
          <div className="bot_menu">
            <div className="items current_bg">
              <img
                className="pic_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png"
                alt="setup_icon_small"
              />
              <span className="text">个人资料</span>
            </div>
            <div className="items">
              <img
                className="pic_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png"
                alt="setup_icon_small"
              />
              <span className="text">我的积分</span>
            </div>
            <div className="items">
              <img
                className="pic_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png"
                alt="setup_icon_small"
              />
              <span className="text">下载记录</span>
            </div>
            <div className="items">
              <img
                className="pic_icon"
                src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png"
                alt="setup_icon_small"
              />
              <span className="text">上传试卷</span>
            </div>
          </div>
        </div>
        <div className="right_box">
          <div className="title">基本信息</div>
          <div className="body_box">
            <div className="name">
              <div className="lable">姓名：</div>
              <Input className="iteminput" value="李xx" disabled />
            </div>
            <div className="sex">
              <div className="lable">性别：</div>
              <Select
                className="itemSelect"
                defaultValue="0"
                style={{ width: '38.07rem' }}
              >
                <Option value="0">男</Option>
                <Option value="1">女</Option>
              </Select>
            </div>
            <div className="avatarBox">
              <div className="lable">头像：</div>
              <div className="Upload_warp">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
                <div className="Upload_tip">支持.jpg/png/ 格式</div>
              </div>
            </div>
            <div className="sex">
              <div className="lable">地区：</div>
              <Select
                className="itemSelect"
                defaultValue="0"
                style={{ width: '38.07rem' }}
              >
                <Option value="0">男</Option>
                <Option value="1">女</Option>
              </Select>
            </div>
            <div className="sex">
              <div className="lable">学校：</div>
              <Select
                className="itemSelect"
                defaultValue="0"
                style={{ width: '38.07rem' }}
              >
                <Option value="0">扬州测试学校</Option>
              </Select>
            </div>
            <div className="name email">
              <div className="lable">邮箱：</div>
              <Input className="iteminput" value="1463654684@qq.com" disabled />
              <span className="changeTip">更改</span>
            </div>
            <div className="name phone">
              <div className="lable">手机号：</div>
              <Input className="iteminput" value="12345678912" disabled />
              <span className="changeTip">更改</span>
            </div>
            <div className="btns">
              <Button type="primary" className="btn">
                保存
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(User)
