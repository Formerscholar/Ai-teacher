import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/assets/css/base.less'
import '@/assets/css/restructurUI.less'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
