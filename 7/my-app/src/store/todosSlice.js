import {createSlice} from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            let id = 1;
            if (state.todos.length > 0) {
                id = state.todos[state.todos.length - 1].id + 1
            }
            state.todos = [...state.todos, {id, title: action.payload, status: false }]
        },
        deleteTodo: (state, action) => {
            const newTodoArr = state.todos.filter(todo => +todo.id !== +action.payload);
            state.todos = newTodoArr
        },
        changeStatus: (state, action) => {
            const newTodoArr = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        status: action.payload.status
                    }
                }
                else {
                    return  todo
                }
            })

            state.todos = newTodoArr
        }
    }
})

export const {addTodo, deleteTodo, changeStatus} = todosSlice.actions;
export default todosSlice.reducer;