import React, { useContext } from "react";
import {Name} from './parent';
import SuperChild from './superChild';

function Child() {
    const { parentColor } = useContext(Name);

    return (
        <div>
           <h1 style={{color:parentColor}}>Child Component</h1>
           <SuperChild/>
        </div>
    );
}

export default Child;
