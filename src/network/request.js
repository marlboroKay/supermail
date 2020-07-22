import axios from 'axios'

// ES6 Promise的封装
export function request(options) {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    return instance(options)

}
