import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default CountPage;