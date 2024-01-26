import React, { createContext } from "react";
import ChildA from "./childA";

interface NameValue {
    name: string;
}

interface GenderValue {
    gender: string;
}

const data = createContext<NameValue | undefined>(undefined);
const data1 = createContext<GenderValue | undefined>(undefined);

function ParentDemo() {
    const name = "Priyanka";
    const gender = "Female";

    const nameValue: NameValue = {
        name,
    };

    const genderValue: GenderValue = {
        gender,
    };

    return (
        <div>
            <h1 style={{color:'yellow'}}>useContext Hook Demo</h1>
            <data.Provider value={nameValue}>
                <data1.Provider value={genderValue}>
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    );
}

export default ParentDemo;
export { data, data1 };
