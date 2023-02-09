import {types} from "../types";



const initialState = {
    preloader: false
}


export default function preloaderReducer (state = initialState, action) {

    switch (action.type) {
        case types.PRELOADER_ON:
            return {preloader: true}
        case types.PRELOADER_OFF:
            return {preloader: false}
        default: return state
    }
}