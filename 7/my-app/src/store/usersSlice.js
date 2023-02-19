import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, {dispatch, rejectWithValue}) {

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        dispatch(usersInfo(users))
    }
)

export const getOneUserInfo = createAsyncThunk(
    'getOneUserInfo',
    async function (info, {dispatch, rejectWithValue}) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${info}`)
        const user = await res.json()

        dispatch(oneUserInfo(user))
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        user: {}
    },
    reducers: {
        usersInfo: (state, action) => {
            state.users = action.payload
        },
        oneUserInfo: (state, action) => {
            state.user = action.payload
        }
    }
})

const {usersInfo, oneUserInfo} = usersSlice.actions;

export default usersSlice.reducer