import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusAction, minusAction, mulAction, divAction} from "../../redux/actions";

function CountPage() {
    const dispatch = useDispatch()
    const {sum} = useSelector(state => state)

    const [number1, setNumber1] = useState({num1: 0})
    const [number2, setNumber2] = useState({num2: 0})

    const increment = () => {
        dispatch(plusAction(number1, number2))
    }

    const decrement = () => {
        dispatch(minusAction(number1, number2))
    }

    const mul = () => {
        dispatch(mulAction(number1, number2))
    }

    const div = () => {
        dispatch(divAction(number1, number2))
    }

    return (
        <>
            <div>
                <input type="number" placeholder="number1" name="num1" onChange={(event) => setNumber1(event.target.value)}/>
                <input type="number" placeholder="number2" name="num2" onChange={(event) => setNumber2(event.target.value)}/>
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
            <h1>{sum}</h1>
        </>
    );
}

export default CountPage;