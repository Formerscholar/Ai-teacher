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
  Cascader,
} from 'antd'
import { information, getAllArea, getSchools, pointLog } from '@/services/user'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { info_menu } from '@/conf'
import { splitSearch } from '@/utils'

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
  const { history, location } = props
  const [userData, setUserData] = useState({})
  const [loading, setloading] = useState(false)
  const [imageUrl, setimageUrl] = useState('')
  const [info_current, setinfo_current] = useState(0)
  const [options, setOptions] = React.useState([])
  const [gender, setgender] = useState('1')
  const [AreaList, setAreaList] = useState([])
  const [AreaData, setAreaData] = useState([])
  const [SchoolList, setSchoolList] = useState([])
  const [SchoolData, setSchoolData] = useState(0)
  const [pointLogData, setpointLogData] = useState({})

  useEffect(() => {
    getAllAreaList()
    initData(splitSearch(location?.search)?.type * 1)
    return () => {}
  }, [])

  useEffect(() => {
    setinfo_current(splitSearch(location?.search)?.type)
  })

  const initData = (type) => {
    const keymap = new Map([[0, getinformation], [1, getpointLog], [2], [3]])
    keymap.get(type) && keymap.get(type)()
  }

  const getpointLog = async () => {
    const { code, data } = await pointLog()
    if (code === 200) {
      setpointLogData(data)
    }
  }

  const getAllAreaList = async () => {
    const { code, data } = await getAllArea()
    if (code === 200) {
      setOptions(RecursionAddress(data))
      setAreaList(data)
    }
  }

  /**
   *
   *  获取省市区下的学校
   * @param {*} province_id
   * @param {*} city_id
   * @param {*} area_id
   */
  const getSchoolsList = async (province_id, city_id, area_id) => {
    const { code, data } = await getSchools({
      province_id,
      city_id,
      area_id,
    })
    if (code === 200) {
      setSchoolList(data)
    }
  }

  /**
   *  迭代 地址 函数
   * @param {Array} data
   * @return {Array}
   */
  const RecursionAddress = (data) => {
    return data?.map((item) => {
      let obj = {}
      obj['value'] = item?.id
      obj['label'] = item?.name
      if (item?.children) {
        obj['children'] = RecursionAddress(item?.children)
      }
      return obj
    })
  }

  const getinformation = async () => {
    const { code, data, msg } = await information()
    if (code === 200) {
      setUserData(data?.teacher)
      setgender(data?.teacher?.gender)
      setimageUrl(data?.teacher?.avatar_file)
      setAreaData([
        data?.teacher?.province_id,
        data?.teacher?.city_id,
        data?.teacher?.area_id,
      ])
      getSchoolsList(
        data?.teacher?.province_id,
        data?.teacher?.city_id,
        data?.teacher?.area_id
      )
      setSchoolData(data?.teacher?.get_school?.id)
    } else {
      message.error(msg)
    }
  }

  /**
   *  学校选择 change 事件
   *
   * @param {*} value
   * @param {*} option
   */
  const SchoolChange = (value, option) => {
    setSchoolData(value)
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

  /**
   *
   *  省市区 选择触发
   * @param {*} value
   */
  function onChange(value) {
    setAreaData(value)
    getSchoolsList(value[0], value[1], value[2])
    setSchoolData(null)
  }
  /**
   *
   *  个人信息导航 Click
   * @param {*} idx
   */
  const infoMenuClick = (idx) => {
    history.push(`/main/user?type=${idx}`)
    initData(idx)
  }

  function downhandleChange(value) {
    console.log(`selected ${value}`)
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
            {info_menu?.map((item, idx) => {
              return (
                <div
                  className={info_current == idx ? 'items current_bg' : 'items'}
                  onClick={() => infoMenuClick(idx)}
                  key={idx}
                >
                  <img className="pic_icon" src={item.img} alt="icon_small" />
                  <span className="text">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {info_current == 0 ? (
          <div className="right_box">
            <div className="title">基本信息</div>
            <div className="body_box">
              <div className="name">
                <div className="lable">姓名：</div>
                <Input
                  className="iteminput"
                  value={userData?.true_name}
                  disabled
                />
              </div>
              <div className="sex">
                <div className="lable">性别：</div>
                <Select
                  className="itemSelect"
                  value={gender.toString()}
                  style={{ width: '38.07rem' }}
                >
                  <Option value="1">男</Option>
                  <Option value="2">女</Option>
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
                <Cascader
                  className="itemSelect"
                  options={options}
                  onChange={onChange}
                  placeholder="请选择省/市/区"
                  value={AreaData}
                />
              </div>
              <div className="sex">
                <div className="lable">学校：</div>
                <Select
                  className="itemSelect"
                  style={{ width: '38.07rem' }}
                  value={SchoolData}
                  onChange={SchoolChange}
                >
                  {SchoolList?.map((item) => {
                    return (
                      <Option value={item?.id} key={item?.id}>
                        {item?.name}
                      </Option>
                    )
                  })}
                </Select>
              </div>
              <div className="name email">
                <div className="lable">邮箱：</div>
                <Input className="iteminput" value={userData?.email} disabled />
                <span className="changeTip">更改</span>
              </div>
              <div className="name phone">
                <div className="lable">手机号：</div>
                <Input
                  className="iteminput"
                  value={userData?.mobile}
                  disabled
                />
                <span className="changeTip">更改</span>
              </div>
              <div className="btns">
                <Button type="primary" className="btn">
                  保存
                </Button>
              </div>
            </div>
          </div>
        ) : info_current == 1 ? (
          <div className="right_box">
            <div className="integraltitle">
              <div className="left_title">积分记录</div>
              <div className="current_title">当年积分：5</div>
            </div>
            <div className="integral_body">
              <div className="integral_items current_integral">
                <div className="left_integrals">
                  <div className="left_integrals_title">兑换商品</div>
                  <div className="left_integrals_info">
                    更新时间：2020-09-10 10:00:00
                  </div>
                </div>
                <div className="right_integrals">-10</div>
              </div>
              <div className="integral_items ">
                <div className="left_integrals">
                  <div className="left_integrals_title">
                    上传试卷《第一学期期中考试质量检测-七年级数学试题》
                  </div>
                  <div className="left_integrals_info">
                    更新时间：2020-09-10 10:00:00
                  </div>
                </div>
                <div className="right_integrals">+5</div>
              </div>
              <div className="integral_items ">
                <div className="left_integrals">
                  <div className="left_integrals_title">
                    上传试卷《七年级上学期数学第一次月考试题》
                  </div>
                  <div className="left_integrals_info">
                    更新时间：2020-09-10 10:00:00
                  </div>
                </div>
                <div className="right_integrals">+5</div>
              </div>
              <div className="integral_items ">
                <div className="left_integrals">
                  <div className="left_integrals_title">
                    上传试卷《七年级上学期数学期末试卷》
                  </div>
                  <div className="left_integrals_info">
                    更新时间：2020-09-10 10:00:00
                  </div>
                </div>
                <div className="right_integrals">+5</div>
              </div>
            </div>
          </div>
        ) : info_current == 2 ? (
          <div className="right_box">
            <div className="down_title">
              <div className="down_left_text">下载记录</div>
              <div className="down_right_box">
                <Select
                  defaultValue="0"
                  style={{ width: '11.43rem' }}
                  onChange={downhandleChange}
                >
                  <Option value="0">全部</Option>
                  <Option value="1">90天内</Option>
                  <Option value="2">半年内</Option>
                  <Option value="3">一年内</Option>
                </Select>
                <Button type="primary" className="down_btns">
                  查询
                </Button>
              </div>
            </div>
            <div className="down_body">
              <div className="down_body_title">
                <div className="name">名称</div>
                <div className="time">下载时间</div>
              </div>
              <div className="down_body_table">
                <div className="name">2020年11月13日xxx的初中数学试卷</div>
                <div className="time">2020-08-08 12:12:10</div>
              </div>
              <div className="down_body_table">
                <div className="name">
                  树人2020-2021学年七年级上学期期中考试数学试题
                </div>
                <div className="time">2020-08-08 12:12:10</div>
              </div>
              <div className="down_body_table">
                <div className="name">
                  2020-2021学年梅岭中学七上数学期中试题
                </div>
                <div className="time">2020-08-08 12:12:10</div>
              </div>
              <div className="down_body_table">
                <div className="name">
                  邗江区2020-20201学年度第一学期期中测试七年级数学试题
                </div>
                <div className="time">2020-08-08 12:12:10</div>
              </div>
              <div className="down_body_table">
                <div className="name">
                  梅岭中学2019-2020学年七年级（上）数学第一次月考试题
                </div>
                <div className="time">2020-08-08 12:12:10</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="right_box">
            <div className="upload_title">
              <div className="upload_left_text">上传试卷列表</div>
              <Button type="primary" className="upload_btn">
                <img
                  className="btn_plus"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/btn_plus.png"
                  alt="btn_plus"
                />
                上传试卷
              </Button>
            </div>
            <div className="upload_body">
              <div className="upload_body_title">
                <div className="name">名称</div>
                <div className="time">上传时间</div>
                <div className="isreview">审核状态</div>
              </div>
              <div className="down_body_table">
                <div className="name">扬州测试学校七年级上学期期中考试数学</div>
                <div className="time">2020-08-08</div>
                <div className="isreview Pending">待审核</div>
              </div>
              <div className="down_body_table">
                <div className="name">扬州测试学校七年级上学期期中考试数学</div>
                <div className="time">2020-08-08</div>
                <div className="isreview notpass">未通过</div>
              </div>
              <div className="down_body_table">
                <div className="name">扬州测试学校七年级上学期期中考试数学</div>
                <div className="time">2020-08-08</div>
                <div className="isreview passed">已通过</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default memo(User)
