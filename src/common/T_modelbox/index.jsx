import React, { memo } from 'react'
import './idnex.less'
import { Modal } from 'antd'

function T_modelbox({
  children,
  isOpen = false,
  closeClick,
  title = '',
  width = '41.71rem',
  height = '23.5rem',
}) {
  let bodyH = height.split('rem')[0] - 4.64

  return (
    <Modal
      className="T_modelbox"
      title={title}
      visible={isOpen}
      onCancel={closeClick}
      footer={null}
      centered
      width={width}
      height={height}
      bodyStyle={{ height: bodyH + 'rem' }}
      closeIcon={
        <img
          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png"
          alt="delete_icon"
          style={{ width: '1.29rem', height: '1.29rem' }}
        />
      }
    >
      {children}
    </Modal>
  )
}

export default memo(T_modelbox)
