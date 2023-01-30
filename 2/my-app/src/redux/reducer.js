import {types} from "./types";

const initialState = {
    sum: 0
}



export default function reducer(state = initialState, action) {
    let one =+ action.num1;
    let two =+ action.num2;

    // switch (action.type) {
    //     case types.PLUS:
    //         return {...state, sum: one + two}
    //     case types.MINUS:
    //         return {...state, sum: one - two}
    //     case types.MUL:
    //         return {...state, sum: one * two}
    //     case types.DIV:
    //         return {...state, sum: one / two}
    //     default: return state
    // }


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