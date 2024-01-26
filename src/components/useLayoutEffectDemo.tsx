import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffectDemo() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            console.log(inputRef.current.value);
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = "HELLO";
        }
    }, []);

    return (
        <div>
            <h1>UseLayoutEffect Hook Demo</h1>
            <input ref={inputRef} value={"Hiii"}></input>
        </div>
    );
}

export default UseLayoutEffectDemo;
