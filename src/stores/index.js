const tiger = 10000

// 这是action
// const increase = {
//     type: '涨工资'
// }
// const decrease = {
//     type: '扣工资'
// }
// 这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case '涨工资':
            return (state += 100)
        case '扣工资':
            return (state -= 100)
        default:
            return state
    }
}
export default reducer
