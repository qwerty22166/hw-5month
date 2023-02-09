import {types} from "../types";

const initialState = {
    text: "initial text"
}

export default function textReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TEXT:
            return {...state, text: "after 3 sec"}

        default: return state
    }
}