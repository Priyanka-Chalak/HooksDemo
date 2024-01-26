import React, { useRef, useState } from "react";

function UseRefDemo() {
    const inputRef = useRef<HTMLInputElement | null>(null); 

    const [name, setName] = useState("Priyanka");

    function Reset() {
        setName("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    function handleInput(){
        if (inputRef.current) {
            inputRef.current.style.color="orange"
            inputRef.current.value="Madhuri"
        }
        
    }

    return (
        <div>
            <h1>UseRef Hook Demo</h1>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={Reset}>Reset</button>
            <button onClick={handleInput}>Handle Input</button>
        </div>
    );
}

export default UseRefDemo;
