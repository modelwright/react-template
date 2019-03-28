import http from './Fly'
import api from './Api'

export default {
    loginget(param) {
        return http.get(api.user.login, param)
    },
    login(data) {
        return http.post(api.user.login, data)
    }
}
