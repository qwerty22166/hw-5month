import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, multiply, divide} from "../../store/countSlice";

function CountPage() {
    const {count} = useSelector(state => state.countReducer)
    const dispatch = useDispatch()
    const [number1, setNumber1] = useState({num1: 0})
    const [number2, setNumber2] = useState({num2: 0})



    return (
        <>
            <input type="number" placeholder="number" name="num1" onChange={(e) => setNumber1(e.target.value)}/>
            <input type="number" placeholder="number" name="num2" onChange={(e) => setNumber2(e.target.value)}/>
            <div>
                <button onClick={() => dispatch(increment({number1, number2}))}>+</button>
                <button onClick={() => dispatch(decrement({number1, number2}))}>-</button>
                <button onClick={() => dispatch(multiply({number1, number2}))}>*</button>
                <button onClick={() => dispatch(divide({number1, number2}))}>/</button>
                <h1>{count}</h1>
            </div>
        </>
    );
}

export default CountPage;