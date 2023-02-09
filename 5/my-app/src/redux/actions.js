import {types} from "./types";

export function alertOn (alert) {
    return {
        type: types.ALERT_ON,
        payload: alert
    }
}

export function alertOff (alert) {
    return {
        type: types.ALERT_OFF,
        payload: alert
    }
}

function preloaderOn () {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff () {
    return {
        type: types.PRELOADER_OFF
    }
}



export function createUserAction (usersInfo) {

    return async function (dispatch) {
        try {
            dispatch(preloaderOn())
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usersInfo)
            }
           const response = await fetch('https://jsonplaceholder.typicode.com/usergers', options)
            if(response.status === 201) {
                dispatch(alertOn({text: "Пользователь создан", variant: "success"}))
            } else if(response.status === 404) {
                dispatch(alertOn({text: "Пользователь не создан", variant: "danger"}))
            }
            

        }
        catch (error) {

        }finally {
            dispatch(preloaderOff())
        }
    }
}