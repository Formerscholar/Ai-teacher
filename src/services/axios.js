import originAxios from 'axios'
import { baseURL } from '../conf'

originAxios.defaults.withCredentials = true

export default function request(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL,
      timeout: 10000,
    })

    // 配置请求和响应拦截
    instance.interceptors.request.use(
      (config) => {
        // console.log('来到了request拦截success中');
        // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

        // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

        // 3.对请求的参数进行序列化(看服务器是否需要序列化)
        // config.data = qs.stringify(config.data)
        // console.log(config);

        // 4.等等
        return config
      },
      (err) => {
        // console.log('来到了request拦截failure中');
        return err
      }
    )

    instance.interceptors.response.use(
      (response) => {
        const { code } = response.data
        if (code === 777) {
          localStorage.setItem('isLogin', 0)
          localStorage.setItem('userInfo', {})
          // notification.open({
          //   message: '错题宝提示',
          //   description: '未检测到您的登录信息,请重新登录!',
          //   duration: 3,
          // })
        }
        return response.data
      },
      (err) => {
        // console.log('来到了response拦截failure中');
        console.log(err)
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权的访问'
              break
            default:
              err.message = '其他错误信息'
          }
          // notification.open({
          //   message: '错题宝提示',
          //   description: err,
          //   duration: 3,
          // })
        }
        return err
      }
    )

    // 2.传入对象进行网络请求
    instance(option)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
