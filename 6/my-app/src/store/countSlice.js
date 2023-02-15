import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "countSlice",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            let one =+ action.payload.number1
            let two =+ action.payload.number2
            state.count = one + two
        },
        decrement: (state, action) => {
            state.count = action.payload.number1 - action.payload.number2
        },
        multiply: (state, action) => {
            state.count = action.payload.number1 * action.payload.number2
        },
        divide: (state, action) => {
            state.count = action.payload.number1 / action.payload.number2
        }
    }
})

export const {increment, decrement, multiply, divide} = countSlice.actions;

export default countSlice.reducer
