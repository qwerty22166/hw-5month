import {types} from "./types";



function changeTextAction() {
    return{
        type: types.CHANGE_TEXT
    }
}


export function sayHelloAction () {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTextAction())
        }, 3000)
    }
}

function usersInfo (users) {
    return{
        type: types.USERS_INFO,
        payload: users
    }
}

function oneUserInfo (user) {
    return{
        type: types.ONE_USER_INFO,
        payload: user
    }
}

export function getOneUserInfo (id) {
    return async function(dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();

        dispatch(oneUserInfo(user))
        console.log(user)
    }
}

export function getUsersAction () {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        dispatch(usersInfo(users))
    }
}