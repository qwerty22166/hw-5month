import {types} from "../types";

const initialState = {
    text: "",
    variant: ""
}

export default function alertReducer(state = initialState, action) {

    switch (action.type) {
        case types.ALERT_ON:
            return {...state, text: action.payload.text, variant: action.payload.variant}
        case types.ALERT_OFF:
            return {...state, text: "", variant: ""}
        default: return state
    }
}