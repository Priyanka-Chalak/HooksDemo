import React, { useCallback, useState } from "react";
import Count from "./count";
import Button from "./button";
import Title from "./title";

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)


    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]);

    return (
        <div>
            <Title/>
            <Count text="Age" count={age} />
            <Button onClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button onClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;