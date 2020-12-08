import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { splitSearch, setTimerType } from '@/utils'
import { getOrganizingPapersLog } from '@/services/user'
import { Select, Button } from 'antd'

const { Option } = Select

function Down() {
  const [down_Select, setdown_Select] = useState('0')
  const [PapersLogList, setPapersLogList] = useState({})

  useEffect(() => {
    getOrganizingPapersLogList()
    return () => {}
  }, [])

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

  const getOrganizingPapersLogList = async (day = 0) => {
    const { code, data } = await getOrganizingPapersLog({
      day,
    })
    if (code === 200) {
      setPapersLogList(data?.log)
    }
  }

  function downhandleChange(value) {
    setdown_Select(value)
  }
  return (
    <div id="Down">
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
  )
}

export default memo(Down)
