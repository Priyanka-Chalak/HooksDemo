import React, { useReducer } from "react";
import Title from "./useCallbackDemo/title";

const initialState = 0;

type Action = "Increment" | "Decrement"; 

const reducer = (state: number, action: Action) => {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        default:
            return state;
    }
};

function UseReducerDemo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1 style={{color:'blue'}}>UseReducer Hook Demo</h1>
            <div>count = {count}</div>
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
        </div>
    );
}

export default UseReducerDemo;
