'use strict'

const base = {
    // baseURL: '/yp/public/'
    baseURL: ''
}

const api = {
    user: {
        login: base.baseURL + 'consumer/app/user/login'
    },
    qiniu: {
        upload: 'http://upload-z2.qiniu.com'
    }
}

export default api
