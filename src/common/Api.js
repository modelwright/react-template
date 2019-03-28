
// 生产环境使用的话会造成跨域
const domain = __ENV__ === 'production' ? 'http://test.dingwei.cn/dmcw/public/owner/wx' : '/dmcw/public/owner/wx'

const api = {
    user: {
        login: domain + '/product/getAllCategory'
    },
    qiniu: {
        upload: 'http://upload-z2.qiniu.com'
    }
}

export default api
