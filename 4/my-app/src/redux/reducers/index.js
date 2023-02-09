import {combineReducers} from "redux";
import textReducer from "./textReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
    textReducer,
    usersReducer
})