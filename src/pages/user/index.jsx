import React, { memo, useEffect, useState, useRef } from 'react'
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
  Image,
} from 'antd'
import {
  information,
  getAllArea,
  getSchools,
  pointLog,
  getUploadList,
  getUploadImage,
  addTeacherUpload,
  getOrganizingPapersLog,
  editInformation,
  getCode,
  editMobile,
  getTeacherUpload,
} from '@/services/user'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { info_menu } from '@/conf'
import { splitSearch, setTimerType } from '@/utils'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import T_modelbox from '@/common/T_modelbox'
import { phoneRegular, emailRegular } from '@/conf'

const { Option } = Select
const { TextArea } = Input

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function User(props) {
  const { history, location, homeInfo } = props
  const selectBool = homeInfo?.teacher?.team_ids === '' ? false : true
  const [userData, setUserData] = useState({})
  const [loading, setloading] = useState(false)
  const [imageUrl, setimageUrl] = useState('')
  const [info_current, setinfo_current] = useState(0)
  const [options, setOptions] = useState([])
  const [gender, setgender] = useState('1')
  const [AreaList, setAreaList] = useState([])
  const [AreaData, setAreaData] = useState([])
  const [SchoolList, setSchoolList] = useState([])
  const [SchoolData, setSchoolData] = useState(0)
  const [pointLogData, setpointLogData] = useState({})
  const [UploadListData, setUploadListData] = useState([])
  const [isUploadPaper, setIsUploadPaper] = useState(0)
  const [PaperName, setPaperName] = useState('')
  const [fileList, setFileList] = useState([])
  const [Remark, setRemark] = useState('')
  const [PapersLogList, setPapersLogList] = useState({})
  const [down_Select, setdown_Select] = useState('0')
  const [Open, setOpen] = useState(false)
  const [Opens, setOpens] = useState(false)
  const [emailData, setemailData] = useState('')
  const [newPhone, setnewPhone] = useState('')
  const [verification, setverification] = useState('')
  const [phoneInputDisab, setphoneInputDisab] = useState(false)
  const [UploadDetail, setUploadDetail] = useState(false)
  const [timeCodeText, settimeCodeText] = useState('发送验证码')
  const [btndis, setbtndis] = useState(false)

  const inputEl = useRef(null)
  let OutTimeinval = null

  useEffect(() => {
    getAllAreaList()
    initData(splitSearch(location?.search)?.type * 1)
    return () => {
      clearInterval(OutTimeinval)
    }
  }, [])

  useEffect(() => {
    setinfo_current(splitSearch(location?.search)?.type)
  })

  const initData = (type) => {
    const keymap = new Map([
      [0, getinformation],
      [1, getpointLog],
      [2, getOrganizingPapersLogList],
      [3, getUploadListData],
    ])
    keymap.get(type) && keymap.get(type)()
  }

  const getOrganizingPapersLogList = async (day = 0) => {
    const { code, data } = await getOrganizingPapersLog({
      day,
    })
    if (code === 200) {
      setPapersLogList(data?.log)
    }
  }
  const closeClick = () => {
    setOpen(false)
  }

  /**
   *
   * 图片上传点击
   */
  const UploadClick = () => {
    inputEl.current.click()
    inputEl.current.addEventListener('change', inputChange)
  }

  const getUploadListData = async () => {
    const { code, data } = await getUploadList()
    if (code === 200) {
      setUploadListData(data?.teacherUploadList)
    }
  }

  const getpointLog = async () => {
    const { code, data } = await pointLog()
    if (code === 200) {
      setpointLogData(data?.pointLog)
    }
  }

  const getAllAreaList = async () => {
    const { code, data } = await getAllArea()
    if (code === 200) {
      setOptions(RecursionAddress(data))
      setAreaList(data)
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
  const addClick = async () => {
    const { code, msg } = await addTeacherUpload({
      image_urls: fileList,
      remark: Remark,
      paper_name: PaperName,
    })
    if (code === 200) {
      message.success(msg)
      setIsUploadPaper(0)
      setFileList([])
      setPaperName('')
      setRemark('')
      getUploadListData()
    } else {
      message.error(msg)
    }
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
   *  备注输入框change事件
   * @param {*} e
   */
  const remarkChange = (e) => {
    const { value } = e.target
    setRemark(value)
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
    history.push('/index')
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  )

  const handleChange = (info) => {
    setloading(true)
    getBase64(info.file.originFileObj, (imageUrl) => {
      setloading(false)
    })
  }

  const genderChange = (value, option) => {
    setgender(value)
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('仅支持 JPG/PNG 文件!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('图片大小大于 2MB!')
    }
    console.log(file)
    return isJpgOrPng && isLt2M
  }

  const customRequest = async ({ file }) => {
    console.log('customRequest', file)
    let formData = new FormData()
    formData.append('img_url', file, file.name)
    formData.append('file_path', 'wx_xcx/avatar/')
    const { code, data, msg } = await getUploadImage(formData)
    if (code === 200) {
      setimageUrl(data?.img)
    } else {
      message.error(msg)
    }
  }

  /**
   *  修改邮箱
   *
   */
  const changeEmail = () => {
    setOpen(true)
  }

  const confirmClick = async () => {
    if (emailRegular.test(emailData)) {
      const { code, msg } = await editInformation({
        name: userData?.true_name,
        sex: gender,
        img: imageUrl,
        school_id: SchoolData,
        email: emailData,
      })
      if (code === 200) {
        message.success(msg)
      } else {
        message.error(msg)
      }
      setOpen(false)
    } else {
      message.error('邮箱格式不正确!重新输入!')
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
    history.push(`/user?type=${idx}`)
    initData(idx)
  }

  function downhandleChange(value) {
    setdown_Select(value)
  }

  const uploadPaper = () => {
    setIsUploadPaper(1)
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

  const searchDownClick = () => {
    const keymap = new Map([
      ['0', '0'],
      ['1', '90'],
      ['2', '180'],
      ['3', '365'],
    ])
    let day = keymap.get(down_Select) && keymap.get(down_Select)
    console.log(day)
    getOrganizingPapersLogList(day)
  }

  const saveInfoClick = async () => {
    const { code, msg } = await editInformation({
      name: userData?.true_name,
      sex: gender,
      img: imageUrl,
      school_id: SchoolData,
      email: userData?.email,
    })
    if (code === 200) {
      message.success(msg)
    } else {
      message.error(msg)
    }
  }

  // 修改手机号码
  const changePhone = () => {
    setOpens(true)
  }

  const closeClicks = () => {
    setOpens(false)
  }

  const confirmClicks = async () => {
    const { code, msg } = await editMobile({
      mobile: newPhone,
      code: verification,
    })
    if (code === 200) {
      getinformation()
      message.success(msg)
    } else {
      message.error(msg)
    }
    setphoneInputDisab(false)
    setOpens(false)
    setnewPhone('')
    setverification('')
  }

  const verificationCode = async () => {
    if (phoneRegular.test(newPhone)) {
      setbtndis(true)
      let num = 60
      OutTimeinval = setInterval(() => {
        if (num == 0) {
          settimeCodeText('发送验证码')
          setbtndis(false)
          clearInterval(OutTimeinval)
        } else {
          num--
          settimeCodeText(`(${num})`)
        }
      }, 1000)
      const { code, msg } = await getCode({
        mobile: newPhone,
      })
      if (code === 200) {
        setphoneInputDisab(true)
        message.success(msg)
      } else {
        message.error(msg)
      }
    } else {
      message.error('手机号格式不正确!请重新填写!')
    }
  }

  const paperDetailClick = async (id) => {
    const { code, data, msg } = await getTeacherUpload({
      id,
    })
    if (code === 200) {
      setUploadDetail(data?.upload)
      setIsUploadPaper(2)
    } else {
      message.error(msg)
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
                    src={homeInfo?.teacher?.avatar_file}
                    alt="avatar"
                  />
                }
              />
              <div className="name">{homeInfo?.teacher?.true_name}</div>
            </div>
            <div className="info">
              <div className="subject">
                <img
                  className="subject_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png"
                  alt="subject_icon"
                />
                <span>{homeInfo?.teacher?.get_subject?.title}</span>
              </div>
              <div className="integral">
                <img
                  className="integral_icon"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png"
                  alt="integral_icon"
                />
                <span>积分：{homeInfo?.teacher?.points}</span>
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
                  onChange={genderChange}
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
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    customRequest={customRequest}
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
                  disabled={selectBool}
                />
              </div>
              <div className="sex">
                <div className="lable">学校：</div>
                <Select
                  className="itemSelect"
                  style={{ width: '38.07rem' }}
                  value={SchoolData}
                  onChange={SchoolChange}
                  disabled={selectBool}
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
                <span className="changeTip" onClick={changeEmail}>
                  更改
                </span>
              </div>
              <div className="name phone">
                <div className="lable">手机号：</div>
                <Input
                  className="iteminput"
                  value={userData?.mobile}
                  disabled
                />
                <span className="changeTip" onClick={changePhone}>
                  更改
                </span>
              </div>
              <div className="btns">
                <Button type="primary" className="btn" onClick={saveInfoClick}>
                  保存
                </Button>
              </div>
            </div>
          </div>
        ) : info_current == 1 ? (
          <div className="right_box">
            <div className="integraltitle">
              <div className="left_title">积分记录</div>
              <div className="current_title">
                当年积分：{homeInfo?.teacher?.points}
              </div>
            </div>
            <div className="integral_body">
              {pointLogData?.data?.map((item) => {
                // current_integral
                return (
                  <div className="integral_items " key={item?.id}>
                    <div className="left_integrals">
                      <div className="left_integrals_title">{item?.remark}</div>
                      <div className="left_integrals_info">
                        更新时间：{setTimerType(item?.add_time * 1000, true)}
                      </div>
                    </div>
                    <div className="right_integrals">+{item?.point}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : info_current == 2 ? (
          <div className="right_box">
            <div className="down_title">
              <div className="down_left_text">下载记录</div>
              <div className="down_right_box">
                <Select
                  style={{ width: '11.43rem' }}
                  onChange={downhandleChange}
                  value={down_Select}
                >
                  <Option value="0">全部</Option>
                  <Option value="1">90天内</Option>
                  <Option value="2">半年内</Option>
                  <Option value="3">一年内</Option>
                </Select>
                <Button
                  type="primary"
                  className="down_btns"
                  onClick={searchDownClick}
                >
                  查询
                </Button>
              </div>
            </div>
            <div className="down_body">
              <div className="down_body_title">
                <div className="name">名称</div>
                <div className="time">下载时间</div>
              </div>
              {PapersLogList?.data ? (
                PapersLogList?.data?.map((item) => {
                  return (
                    <div className="down_body_table" key={item?.id}>
                      <div className="name">{item?.exam_name}</div>
                      <div className="time">
                        {setTimerType(item?.update_time * 1000, true)}
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
                  <div className="nodata_down_title">暂无下载记录</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="right_box">
            <div className="upload_title">
              {isUploadPaper === 0 ? (
                <>
                  <div className="upload_left_text">上传试卷列表</div>
                  <Button
                    type="primary"
                    className="upload_btn"
                    onClick={uploadPaper}
                  >
                    上传试卷
                  </Button>
                </>
              ) : isUploadPaper === 1 ? (
                <div className="upload_left_text">上传试卷</div>
              ) : (
                <div className="detail">
                  <div className="left_detail">{UploadDetail?.paper_name}</div>
                  <div className="right_detail">
                    {setTimerType(UploadDetail?.add_time * 1000)}
                  </div>
                </div>
              )}
            </div>
            {isUploadPaper === 1 ? (
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
            ) : isUploadPaper === 0 ? (
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
            ) : (
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
            )}
          </div>
        )}
      </div>
      <input ref={inputEl} id="upload" type="file" name="file" hidden />
      {/* 模态框 */}
      <T_modelbox
        isOpen={Open}
        title="【修改邮箱】"
        closeClick={closeClick}
        width="41.71rem"
        height="19.93rem"
      >
        <div id="tmodelbox" className="emailChange">
          <div className="title">
            当前绑定的邮箱地址：
            <div className="loadEmail">{userData?.email}</div>
          </div>
          <div className="body">
            <Input
              className="emailData"
              value={emailData}
              onChange={(e) => setemailData(e.target.value)}
            />
          </div>
          <Button type="primary" className="btn" onClick={confirmClick}>
            确定
          </Button>
        </div>
      </T_modelbox>
      {/* 模态框 */}
      <T_modelbox
        isOpen={Opens}
        title="【修改绑定手机号】"
        closeClick={closeClicks}
        width="41.71rem"
        height="19.93rem"
      >
        <div id="tmodelbox" className="phoneChange">
          <div className="bodys">
            <div className="phonenum">
              <div className="text">手机号</div>
              <Input
                className="newPhone"
                value={newPhone}
                disabled={phoneInputDisab}
                onChange={(e) => setnewPhone(e.target.value)}
              />
            </div>
            <div className="phonenum">
              <div className="text">验证码</div>
              <Input
                className="verification"
                value={verification}
                onChange={(e) => setverification(e.target.value)}
              />
              <Button
                type="primary"
                className="Codebtn"
                onClick={verificationCode}
                disabled={btndis}
              >
                {timeCodeText}
              </Button>
            </div>
          </div>
          <Button type="primary" className="btn" onClick={confirmClicks}>
            确定
          </Button>
        </div>
      </T_modelbox>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData(value) {
      let action = {
        type: GET_HOME_INFO,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(User))
