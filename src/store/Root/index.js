import { observable, action } from 'mobx'
// useStrict(true)
class Root {
    @observable userInfo = {
        name: ''
    }
    @observable loading = false
    @action updateName = name => {
        this.userInfo.name = name
    }
    @action setLoading = boolean => {
        this.loading = boolean
    }
}

export default new Root()
