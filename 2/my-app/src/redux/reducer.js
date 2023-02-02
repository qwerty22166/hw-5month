const initialState = {
    sum: 0
}



export default function reducer(state = initialState, action) {
    let one =+ action.num1;
    let two =+ action.num2;

    if(action.type === "PLUS") {
        return {...state, sum: one + two}
    }
    else if(action.type === "MINUS") {
        return {...state, sum: one - two}
    }
    else if(action.type === "M") {
        return {...state, sum: one * two}
    }
    else if(action.type === "D") {
        return {...state, sum: one / two}
    }
    return state
}