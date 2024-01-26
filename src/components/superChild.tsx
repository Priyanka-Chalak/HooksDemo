import React, { useContext } from "react";
import {Name} from './parent';

function SuperChild() {
    const { parentColor } = useContext(Name);

    console.log("parentColor", parentColor);

    return (
        <div>
           <h1 style={{color:parentColor}}>SuperChild Component</h1>
        </div>
    );
}

export default SuperChild;
