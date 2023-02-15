import {configureStore} from "@reduxjs/toolkit";
import countReducer from "../store/countSlice"

export const store = configureStore({
    reducer: {
        countReducer
    }
})