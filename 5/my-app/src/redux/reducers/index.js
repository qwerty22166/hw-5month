import {combineReducers} from "redux";
import preloaderReducer from "./preloaderReducer";
import alertReducer from "./alertReducer";



export const rootReducer = combineReducers({
    preloaderReducer,
    alertReducer
})