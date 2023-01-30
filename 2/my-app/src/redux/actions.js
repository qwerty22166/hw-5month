import {types} from "./types";

export function plusAction(num1, num2) {
    return {
        type: types.PLUS,
        payload: num1 + num2
    }
}

export function minusAction(num1, num2) {
    return {
        type: types.PLUS,
        payload: num1 - num2
    }
}

export function mulAction(num1, num2) {
    return {
        type: types.PLUS,
        payload: num1 * num2
    }
}

export function divAction(num1, num2) {
    return {
        type: types.PLUS,
        payload: num1 / num2
    }
}