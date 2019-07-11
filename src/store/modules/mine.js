export default function mine(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.text
        case 'DECREMENT':
            return state - action.text
        default:
            return state
    }
}
