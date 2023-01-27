const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
    if(action.type === "INCREMENT") {
        return {count: state.count + 1}
    }
    else if(action.type === "DECREMENT") {
        return {count: state.count - 1}
    }
    return state
}