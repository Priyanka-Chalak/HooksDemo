import React, { useContext } from "react";
import { data, data1 } from "./parentDemo";

function ChildC() {
    const nameValue = useContext(data);
    const genderValue = useContext(data1);

    return (
        <div>
            <h2>This is Child C Component</h2>
            <h4>Hi, My name is {nameValue?.name} and my gender is {genderValue?.gender}</h4>
        </div>
    );
}

export default ChildC;
