import { message } from 'antd'
const Request = {
    /*
    *  get请求
    *  url:请求地址
    *  params:参数
    *  callback:回调函数
    * */
    get(url, params, headers) {
        if (params) {
            let paramsArray = []
            // encodeURIComponent
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers
            }).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject(response)
                }
            }).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    },

    /*
    *  post请求
    *  url:请求地址
    *  params:参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
    *  callback:回调函数
    * */
    postJSON(url, params) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject(response.status)
                }
            }).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    },

    /*
    *  post请求
    *  url:请求地址
    *  params:参数,这里的参数要用这种格式：'key1=value1&key2=value2'
    *  callback:回调函数
    * */
    postForm(url, params) {
        let tempArr = []
        for (var i in params) {
            var key = encodeURIComponent(i)
            var value = encodeURIComponent(params[i])
            tempArr.push(key + '=' + value)
        }
        let urlParamsStr = tempArr.join('&')
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlParamsStr
            }).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject(response.status)
                }
            }).then(res => {
                if (res.status === 0) {
                    message.error(res.message)
                } else {
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default Request
