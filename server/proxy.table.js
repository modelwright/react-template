const proxy = {
    '/dmcw': {
        target: 'http://test.dingwei.cn/',
        secure: false,
        changeOrigin: true
    }
}
console.log("express代理地址:"+"https://guguda.net/consumer/app/")
module.exports = proxy
