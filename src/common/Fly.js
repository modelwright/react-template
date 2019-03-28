import Fly from 'flyio'
import { message } from 'antd'

// 请求拦截器
Fly.interceptors.request.use(request => {
    request.headers['X-Tag'] = 'flyio'
    console.log(request.body)
    request.timeout = 10000
    return request
})

// 响应拦截器
Fly.interceptors.response.use(
    response => response.data,
    err => {
        message.error(`${err.status} ${err.message}`)
    }
)

export default {
    // 普通get(query参数通过对象传递)
    get(url, param) {
        return Fly.get(url, param)
    },
    // 普通post
    post(url, param) {
        return Fly.post(url, param)
    }
}
