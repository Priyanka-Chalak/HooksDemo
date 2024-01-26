import React, { createContext, useState } from "react";
import Child from "./child";

interface NameValue {
    parentColor: string;
}

export const Name = createContext<NameValue>({
    parentColor:" "
});

function Parent() {

    const [color, setColor] = useState('red');

    const nameValue: NameValue = {
        parentColor: color,
    };

    return (
        <Name.Provider value={nameValue}>
            <div>
                <h1>Parent Component</h1>
                <Child/>
            </div>
        </Name.Provider>
    );
}

export default Parent;

