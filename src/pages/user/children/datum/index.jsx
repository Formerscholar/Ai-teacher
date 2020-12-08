import React, { memo, useState, useEffect } from 'react'
import './index.less'
import { Input, Select, Upload, Button, Cascader, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import {
  getAllArea,
  information,
  getSchools,
  getUploadImage,
  editInformation,
  getCode,
  editMobile,
} from '@/services/user'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import T_modelbox from '@/common/T_modelbox'
import { phoneRegular, emailRegular, UserRoutePath } from '@/conf'
const { Option } = Select

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function Datum(props) {
  const { history, location, homeInfo } = props
  const selectBool = homeInfo?.teacher?.team_ids === '' ? false : true
  const [userData, setUserData] = useState({})
  const [AreaData, setAreaData] = useState([])
  const [SchoolData, setSchoolData] = useState(0)
  const [imageUrl, setimageUrl] = useState('')
  const [gender, setgender] = useState('1')
  const [loading, setloading] = useState(false)
  const [SchoolList, setSchoolList] = useState([])
  const [Opens, setOpens] = useState(false)
  const [options, setOptions] = useState([])
  const [Open, setOpen] = useState(false)
  const [AreaList, setAreaList] = useState([])
  const [emailData, setemailData] = useState('')
  const [verification, setverification] = useState('')
  const [newPhone, setnewPhone] = useState('')
  const [phoneInputDisab, setphoneInputDisab] = useState(false)
  const [timeCodeText, settimeCodeText] = useState('发送验证码')
  const [btndis, setbtndis] = useState(false)
  let OutTimeinval = null


  useEffect(() => {
    getAllAreaList()
    getinformation()
    return () => {
      clearInterval(OutTimeinval)
    }
  }, [])

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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  )

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

  const handleChange = (info) => {
    setloading(true)
    getBase64(info.file.originFileObj, (imageUrl) => {
      setloading(false)
    })
  }

  const closeClick = () => {
    setOpen(false)
  }

  const closeClicks = () => {
    setOpens(false)
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

  const genderChange = (value, option) => {
    setgender(value)
  }

  // 修改手机号码
  const changePhone = () => {
    setOpens(true)
  }

  /**
   *  修改邮箱
   *
   */
  const changeEmail = () => {
    setOpen(true)
  }

  
  const confirmClicks = async () => {
    const { code, msg } = await editMobile({
      mobile: newPhone,
      code: verification,
    })
    if (code === 200) {
      message.success(msg)
    } else {
      message.error(msg)
    }
    setphoneInputDisab(false)
    setOpens(false)
    setnewPhone('')
    setverification('')
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

  const getAllAreaList = async () => {
    const { code, data } = await getAllArea()
    if (code === 200) {
      setOptions(RecursionAddress(data))
      setAreaList(data)
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

  return (
    <div id="Datum">
      <div className="title">基本信息</div>
      <div className="body_box">
        <div className="name">
          <div className="lable">姓名：</div>
          <Input className="iteminput" value={userData?.true_name} disabled />
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
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
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
          <Input className="iteminput" value={userData?.mobile} disabled />
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Datum))
